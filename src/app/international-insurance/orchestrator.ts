'use server';

/**
 * @fileOverview Utsavs Transaction Orchestrator v5 (Hardened)
 * 
 * CORE RESPONSIBILITIES:
 * 1. Authenticate via ID Token (Admin SDK verification)
 * 2. Resolve authoritative Pricing (Server-side re-fetch from Asego)
 * 3. Fail-Closed Environment Assertion
 * 4. Atomic Ledger Creation (Namespaced Idempotency via create())
 * 5. Sanitized Error Propagation (Reference IDs for browsers)
 */

import { adminDb, verifySession, getAuthoritativeUser } from '@/lib/server/admin';
import { getAsegoPlans, createAsegoPolicy, AsegoCredentials } from './actions';
import { FieldValue } from 'firebase-admin/firestore';

/**
 * Strict Environment Assertion - Fail Closed
 */
function assertEnvironmentSafety() {
  const env = process.env.UTSAVS_ASEGO_ENV;
  const baseUrl = process.env.ASEGO_BASE_URL || "";
  
  if (env !== 'uat' && env !== 'production') {
    throw new Error("VALIDATION_ERROR: Environment must be exactly 'uat' or 'production'.");
  }

  if (env === 'production') {
    // Hard check: Production MUST have a BASE_URL and it MUST NOT be the UAT host
    if (!baseUrl || baseUrl.includes('dolphin.asego.in')) {
      throw new Error("VALIDATION_ERROR: Production safety check failed. Review ASEGO_BASE_URL.");
    }
  } else if (env === 'uat') {
    if (baseUrl !== "" && !baseUrl.includes('dolphin.asego.in')) {
      throw new Error("VALIDATION_ERROR: UAT environment configured with non-UAT host.");
    }
  }
  return env;
}

export async function orchestrateIssuance(payload: any, sessionToken: string, idempotencyKey: string) {
  const txRef = `TX-${Math.random().toString(36).substring(7).toUpperCase()}`;
  
  try {
    const validatedEnv = assertEnvironmentSafety();

    // 1. Authenticate & Resolve Authority
    const decodedToken = await verifySession(sessionToken);
    const uid = decodedToken.uid;
    const userData = await getAuthoritativeUser(uid);
    
    if (userData.status !== 'active') throw new Error("UNAUTHORIZED: Account is suspended.");
    
    // Strict Agency Attribution: All sales use the user's authoritative agencyId
    const agencyId = userData.agencyId;
    if (!agencyId) throw new Error("UNAUTHORIZED: User lacks agency association.");

    // Resolve Agency Commercials
    const agencyRef = adminDb.collection('agencies').doc(agencyId);
    const agencySnap = await agencyRef.get();
    const agencyData = agencySnap.data();

    if (!agencySnap.exists || agencyData?.status !== 'active') {
      throw new Error("UNAUTHORIZED: Agency is not active.");
    }

    const commissionRate = agencyData.commissionRate;
    if (typeof commissionRate !== 'number' || !Number.isFinite(commissionRate)) {
      throw new Error("VALIDATION_ERROR: Valid commission rate not found.");
    }

    // 2. Authoritative Price Verification (Server-Side Re-fetch)
    const asegoCreds: AsegoCredentials = {
      partnerId: process.env.UTSAVS_PARTNER_ID || '',
      sign: process.env.UTSAVS_SIGN || '',
      reference: process.env.UTSAVS_REFERENCE || ''
    };

    const planRes = await getAsegoPlans({
      age: String(payload.age),
      duration: String(payload.duration),
      categoryId: payload.categoryId
    }, asegoCreds);

    if (!planRes.success) throw new Error("VALIDATION_ERROR: Price verification failed.");
    
    const matchedPlan = planRes.data.find((p: any) => p.planId === payload.planId);
    if (!matchedPlan) throw new Error("VALIDATION_ERROR: Plan no longer available.");
    
    const authoritativePremium = Number(matchedPlan.premium);
    if (authoritativePremium !== Number(payload.premium)) {
      throw new Error("VALIDATION_ERROR: Price mismatch. Please refresh quotes.");
    }

    const commissionAmount = Number((authoritativePremium * commissionRate).toFixed(2));
    const utsavsShareAmount = Number((authoritativePremium - commissionAmount).toFixed(2));

    // 3. Namespaced Idempotency
    const cleanKey = String(idempotencyKey || "").replace(/[^a-zA-Z0-9]/g, '');
    if (!cleanKey) throw new Error("VALIDATION_ERROR: Idempotency key required.");
    
    const namespacedId = `${agencyId}_${uid}_${cleanKey}`;
    const ledgerRef = adminDb.collection('policy_ledger').doc(namespacedId);

    // 4. Create PENDING Record (Phase 1: Deterministic creation before provider call)
    try {
      await ledgerRef.create({
        transactionId: namespacedId,
        agencyId: agencyId,
        agencyUserId: uid,
        status: 'pending',
        travelerName: payload.name,
        premiumAmount: authoritativePremium,
        commissionRateAtSale: commissionRate,
        commissionAmount,
        utsavsShareAmount,
        environment: validatedEnv,
        providerId: 'asego',
        createdAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp()
      });
    } catch (e: any) {
      if (e.code === 6) { // ALREADY_EXISTS
        const snap = await ledgerRef.get();
        const data = snap.data();
        if (data?.status === 'issued') return { success: true, policyNumber: data.policyNumber, resumed: true };
        throw new Error("VALIDATION_ERROR: Idempotency locked. Transaction already processed.");
      }
      throw e;
    }

    // 5. Call Frozen Asego Engine (v5.24)
    let asegoRes;
    try {
      asegoRes = await createAsegoPolicy(payload, asegoCreds);
    } catch (asegoErr: any) {
      // Phase 2: Unknown Outcome Handling. DO NOT return plain error.
      await ledgerRef.update({
        status: 'reconciliation_required',
        errorCode: 'PROVIDER_EXCEPTION',
        updatedAt: FieldValue.serverTimestamp()
      });
      return { success: false, error: 'PROVIDER_STATUS_UNKNOWN', ref: txRef };
    }

    // 6. Finalize Ledger
    if (asegoRes.success) {
      const policyData = Array.isArray(asegoRes.data) ? asegoRes.data[0] : asegoRes.data;
      const policyNumber = policyData?.policyNumber;

      if (!policyNumber) {
        await ledgerRef.update({ status: 'reconciliation_required', errorCode: 'MISSING_REF', updatedAt: FieldValue.serverTimestamp() });
        return { success: false, error: "RECONCILIATION_REQUIRED", msg: "Policy number missing from provider response." };
      }

      try {
        await ledgerRef.update({
          status: 'issued',
          policyNumber,
          documentUrl: policyData.policyUrl || '',
          updatedAt: FieldValue.serverTimestamp()
        });
        return { success: true, policyNumber };
      } catch (finalWriteErr: any) {
        // Phase 3: Recovery. Success at Asego but final log update failed.
        return { 
          success: false, 
          error: 'ASEGO_SUCCESS_LEDGER_PENDING',
          ref: txRef 
        };
      }
    } else {
      await ledgerRef.update({
        status: 'failed',
        errorCode: 'PROVIDER_REJECTED',
        updatedAt: FieldValue.serverTimestamp()
      });
      return { success: false, error: 'ISSUANCE_FAILED' };
    }

  } catch (error: any) {
    const isClientSafe = error.message.startsWith("UNAUTHORIZED") || error.message.startsWith("VALIDATION_ERROR");
    console.error(`ORCHESTRATION_FAILURE [${txRef}]:`, error.message);
    
    // Sanitize errors: Never pass raw system exceptions to the browser
    return { 
      success: false, 
      error: isClientSafe ? error.message : "INTERNAL_ERROR",
      ref: txRef 
    };
  }
}