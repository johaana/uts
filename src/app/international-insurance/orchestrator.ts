'use server';

/**
 * @fileOverview Utsavs Transaction Orchestrator v3 (Hardened)
 * 
 * CORE RESPONSIBILITIES:
 * 1. Authenticate via ID Token (NOT browser UIDs)
 * 2. Resolve authoritative Pricing (Server-side re-fetch from Asego)
 * 3. Fail-Closed Environment Assertion (Prod never touches UAT)
 * 4. Atomic Ledger Creation (Namespaced Idempotency)
 * 5. Fault-Tolerant Asego Handshake (Ghost Sale Protection)
 */

import { adminDb, verifySession, getAuthoritativeUser } from '@/lib/server/admin';
import { getAsegoPlans, createAsegoPolicy, AsegoCredentials } from './actions';
import { FieldValue } from 'firebase-admin/firestore';

/**
 * Strict Environment Assertion
 */
function assertEnvironmentSafety() {
  const env = process.env.UTSAVS_ASEGO_ENV;
  const baseUrl = process.env.ASEGO_BASE_URL || "";
  
  if (env !== 'uat' && env !== 'production') {
    throw new Error(`CONFIGURATION_ERROR: UTSAVS_ASEGO_ENV must be exactly 'uat' or 'production'. Current: ${env}`);
  }

  if (env === 'production') {
    if (!baseUrl || baseUrl.includes('dolphin.asego.in')) {
      throw new Error("PRODUCTION_SAFETY_VIOLATION: Production environment cannot use UAT host.");
    }
  } else if (env === 'uat') {
    if (baseUrl !== "" && !baseUrl.includes('dolphin.asego.in')) {
      throw new Error("UAT_SAFETY_VIOLATION: UAT environment configured with non-UAT host.");
    }
  }
}

export async function orchestrateIssuance(payload: any, sessionToken: string, idempotencyKey: string) {
  try {
    assertEnvironmentSafety();

    // 1. Authenticate & Resolve Authority
    const decodedToken = await verifySession(sessionToken);
    const uid = decodedToken.uid;
    const userData = await getAuthoritativeUser(uid);
    
    if (userData.status !== 'active') throw new Error("UNAUTHORIZED: Account is suspended.");
    
    const agencyId = userData.agencyId;
    if (!agencyId && userData.role !== 'admin') throw new Error("CONFIGURATION_ERROR: User lacks agency association.");

    // Resolve Agency Commercials
    const targetAgencyId = userData.role === 'admin' ? payload.agencyId : agencyId;
    const agencyRef = adminDb.collection('agencies').doc(targetAgencyId);
    const agencySnap = await agencyRef.get();
    const agencyData = agencySnap.data();

    if (!agencySnap.exists || agencyData?.status !== 'active') {
      throw new Error("UNAUTHORIZED: Agency is not active.");
    }

    const commissionRate = agencyData.commissionRate;
    if (!Number.isFinite(commissionRate)) {
      throw new Error("COMMERCIAL_ERROR: Valid commission rate not found for agency.");
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

    if (!planRes.success) throw new Error("PROVIDER_ERROR: Price verification failed.");
    
    const matchedPlan = planRes.data.find((p: any) => p.planId === payload.planId);
    if (!matchedPlan) throw new Error("VALIDATION_ERROR: Plan no longer available.");
    
    const authoritativePremium = Number(matchedPlan.premium);
    if (authoritativePremium !== Number(payload.premium)) {
      throw new Error("VALIDATION_ERROR: Price mismatch. Please refresh quotes.");
    }

    const commissionAmount = Number((authoritativePremium * commissionRate).toFixed(2));
    const utsavsShareAmount = Number((authoritativePremium - commissionAmount).toFixed(2));

    // 3. Namespaced Idempotency (Prevents Cross-Tenant Collisions)
    const cleanKey = String(idempotencyKey || "").replace(/[^a-zA-Z0-9]/g, '');
    if (!cleanKey) throw new Error("IDEMPOTENCY_ERROR: Valid key required.");
    
    const namespacedId = `${targetAgencyId}_${uid}_${cleanKey}`;
    const ledgerRef = adminDb.collection('policy_ledger').doc(namespacedId);

    // 4. Create PENDING Record (Ghost Sale Protection)
    try {
      await ledgerRef.create({
        transactionId: namespacedId,
        agencyId: targetAgencyId,
        agencyUserId: uid,
        status: 'pending',
        travelerName: payload.name,
        premiumAmount: authoritativePremium,
        commissionRateAtSale: commissionRate,
        commissionAmount,
        utsavsShareAmount,
        environment: process.env.UTSAVS_ASEGO_ENV,
        providerId: 'asego',
        createdAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp()
      });
    } catch (e: any) {
      if (e.code === 6) { // ALREADY_EXISTS
        const snap = await ledgerRef.get();
        const data = snap.data();
        if (data?.status === 'issued') return { success: true, policyNumber: data.policyNumber, resumed: true };
        throw new Error("IDEMPOTENCY_LOCKED: Transaction processing.");
      }
      throw e;
    }

    // 5. Call Frozen Asego Engine
    let asegoRes;
    try {
      asegoRes = await createAsegoPolicy(payload, asegoCreds);
    } catch (asegoErr: any) {
      // Critical: Asego call threw. Outcome unknown.
      await ledgerRef.update({
        status: 'reconciliation_required',
        errorCode: 'PROVIDER_EXCEPTION',
        updatedAt: FieldValue.serverTimestamp()
      });
      return { success: false, error: 'PROVIDER_STATUS_UNKNOWN', transactionId: namespacedId };
    }

    // 6. Finalize Ledger
    if (asegoRes.success) {
      const policyData = Array.isArray(asegoRes.data) ? asegoRes.data[0] : asegoRes.data;
      const policyNumber = policyData?.policyNumber;

      if (!policyNumber) {
        await ledgerRef.update({ status: 'reconciliation_required', errorCode: 'MISSING_REF', updatedAt: FieldValue.serverTimestamp() });
        return { success: false, error: "RECONCILIATION_REQUIRED: No policy number returned." };
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
        // Asego succeeded, but our final log failed. Record is stuck in 'pending'.
        return { 
          success: false, 
          error: 'ASEGO_SUCCESS_LEDGER_FAILED',
          msg: 'Policy issued but record update failed. Reference: ' + policyNumber,
          transactionId: namespacedId 
        };
      }
    } else {
      await ledgerRef.update({
        status: 'failed',
        errorCode: 'PROVIDER_REJECTED',
        updatedAt: FieldValue.serverTimestamp()
      });
      return { success: false, error: 'ISSUANCE_FAILED', msg: 'Asego rejected the request.' };
    }

  } catch (error: any) {
    console.error("ORCHESTRATION_FAILURE:", error.message);
    return { success: false, error: "INTERNAL_ERROR", msg: error.message };
  }
}
