'use server';

/**
 * @fileOverview Utsavs Transaction Orchestrator v5.3 (Production Hardened)
 * Implements fault-tolerant ledger writes, payload pinning, and sanitized errors.
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
    throw new Error("CONFIG_ERROR: environment");
  }

  if (env === 'production') {
    if (!baseUrl || baseUrl.includes('dolphin.asego.in')) {
      throw new Error("CONFIG_ERROR: environment");
    }
  } else if (env === 'uat') {
    if (baseUrl !== "" && !baseUrl.includes('dolphin.asego.in')) {
      throw new Error("CONFIG_ERROR: environment");
    }
  }
  return env;
}

async function requireUser(token: string) {
  const decoded = await verifySession(token);
  const user = await getAuthoritativeUser(decoded.uid);
  if (user.status !== 'active') throw new Error("UNAUTHORIZED");
  return { ...user, uid: decoded.uid };
}

export async function orchestrateIssuance(payload: any, sessionToken: string, idempotencyKey: string) {
  const txRef = `TX-${Math.random().toString(36).substring(7).toUpperCase()}`;
  
  try {
    const validatedEnv = assertEnvironmentSafety();

    // 1. Authenticate & Resolve Authority
    const userData = await requireUser(sessionToken);
    const agencyId = userData.agencyId;
    if (!agencyId) throw new Error("UNAUTHORIZED");

    // Resolve Agency Commercials
    const agencyRef = adminDb.collection('agencies').doc(agencyId);
    const agencySnap = await agencyRef.get();
    const agencyData = agencySnap.data();

    if (!agencySnap.exists || agencyData?.status !== 'active') {
      throw new Error("UNAUTHORIZED");
    }

    const commissionRate = agencyData.commissionRate;
    if (typeof commissionRate !== 'number' || !Number.isFinite(commissionRate)) {
      throw new Error("CONFIG_ERROR: commission rate");
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

    if (!planRes.success) throw new Error("INTERNAL_ERROR");
    
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
    
    const namespacedId = `${agencyId}_${userData.uid}_${cleanKey}`;
    const ledgerRef = adminDb.collection('policy_ledger').doc(namespacedId);

    // 4. Create PENDING Record
    try {
      await ledgerRef.create({
        transactionId: namespacedId,
        txRef,
        agencyId,
        agencyUserId: userData.uid,
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
        if (data?.status === 'issued') return { success: true, policyNumber: data.policyNumber, ref: data.txRef };
        throw new Error("VALIDATION_ERROR: Idempotency locked.");
      }
      throw e;
    }

    // 5. Call Frozen Asego Engine with Pinned Payload
    const issuePayload = { 
      ...payload, 
      planId: matchedPlan.planId, 
      insurerId: matchedPlan.insurerId ?? payload.insurerId, 
      premium: authoritativePremium 
    };

    let asegoRes;
    try {
      asegoRes = await createAsegoPolicy(issuePayload, asegoCreds);
    } catch (asegoErr: any) {
      try {
        await ledgerRef.update({
          status: 'reconciliation_required',
          errorCode: 'PROVIDER_EXCEPTION',
          updatedAt: FieldValue.serverTimestamp()
        });
      } catch (err) {}
      console.error(`PROVIDER_EXCEPTION [${txRef}] ledger=${namespacedId}`);
      return { 
        success: false, 
        error: 'PROVIDER_STATUS_UNKNOWN', 
        msg: "Transaction status is uncertain. DO NOT retry. Contact support with reference.",
        ref: txRef 
      };
    }

    // 6. Finalize Ledger
    if (asegoRes.success) {
      const policyData = Array.isArray(asegoRes.data) ? asegoRes.data[0] : asegoRes.data;
      const policyNumber = policyData?.policyNumber;

      if (!policyNumber) {
        await ledgerRef.update({ status: 'reconciliation_required', errorCode: 'MISSING_REF', updatedAt: FieldValue.serverTimestamp() });
        return { success: false, error: "RECONCILIATION_REQUIRED", msg: "Policy number missing from provider response.", ref: txRef };
      }

      const finalize = {
        status: 'issued',
        policyNumber,
        documentUrl: policyData.policyUrl || '',
        updatedAt: FieldValue.serverTimestamp(),
      };

      let written = false;
      for (let i = 0; i < 2 && !written; i++) {
        try {
          await ledgerRef.update(finalize);
          written = true;
        } catch (updateErr) {}
      }

      if (!written) {
        console.error(`CRITICAL_RECONCILIATION [${txRef}] ledger=${namespacedId} policy=${policyNumber}`);
        try {
          await ledgerRef.update({
            status: 'reconciliation_required',
            policyNumber,
            errorCode: 'LEDGER_FINALIZE_FAILED',
            updatedAt: FieldValue.serverTimestamp(),
          });
        } catch (err) {}
        return { success: true, policyNumber, warning: 'LEDGER_PENDING', ref: txRef };
      }

      return { success: true, policyNumber, ref: txRef };
    } else {
      await ledgerRef.update({
        status: 'failed',
        errorCode: 'PROVIDER_REJECTED',
        updatedAt: FieldValue.serverTimestamp()
      });
      return { success: false, error: 'ISSUANCE_FAILED', ref: txRef };
    }

  } catch (error: any) {
    const isClientSafe = error.message.startsWith("UNAUTHORIZED") || error.message.startsWith("VALIDATION_ERROR");
    console.error(`ORCHESTRATION_FAILURE [${txRef}]:`, error.message);
    
    return { 
      success: false, 
      error: isClientSafe ? error.message : "INTERNAL_ERROR",
      ref: txRef 
    };
  }
}