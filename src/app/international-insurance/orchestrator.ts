
'use server';

/**
 * @fileOverview Utsavs Transaction Orchestrator v2 (Hardened)
 * 
 * CORE RESPONSIBILITIES:
 * 1. Authenticate via ID Token (NOT browser UIDs)
 * 2. Resolve authoritative Pricing (Server-side re-fetch from Asego)
 * 3. Atomic Ledger Creation (Namespaced Idempotency to prevent cross-tenant leaks)
 * 4. Fault-Tolerant Asego Handshake (Ghost Sale Protection)
 */

import { adminDb, verifySession, getAuthoritativeUser } from '@/lib/server/admin';
import { getAsegoPlans, createAsegoPolicy, AsegoCredentials } from './actions';
import { FieldValue } from 'firebase-admin/firestore';

/**
 * Explicit Environment Assertion
 */
function assertEnvironmentSafety() {
  const env = process.env.UTSAVS_ASEGO_ENV;
  const baseUrl = process.env.ASEGO_BASE_URL || "";
  
  if (env === 'production') {
    if (!baseUrl || baseUrl.includes('dolphin.asego.in')) {
      throw new Error("PRODUCTION_SAFETY_VIOLATION: Production environment configured with UAT endpoint or missing URL.");
    }
  } else if (env === 'uat') {
    if (!baseUrl.includes('dolphin.asego.in') && baseUrl !== "") {
      throw new Error("UAT_SAFETY_VIOLATION: UAT environment configured with non-UAT endpoint.");
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
    
    if (userData.status !== 'active') throw new Error("UNAUTHORIZED: Account is not active.");
    
    const agencyId = userData.agencyId;
    if (!agencyId) throw new Error("CONFIGURATION_ERROR: User is not associated with an agency.");

    const agencyRef = adminDb.collection('agencies').doc(agencyId);
    const agencySnap = await agencyRef.get();
    const agencyData = agencySnap.data();

    if (!agencySnap.exists || agencyData?.status !== 'active') {
      throw new Error("UNAUTHORIZED: Agency record not found or suspended.");
    }

    const commissionRate = agencyData.commissionRate;
    if (typeof commissionRate !== 'number' || !Number.isFinite(commissionRate)) {
      throw new Error("COMMERCIAL_ERROR: Agency commission rate is not valid. Contact support.");
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

    if (!planRes.success) throw new Error("PROVIDER_ERROR: Could not verify pricing with provider.");
    
    const matchedPlan = planRes.data.find((p: any) => p.planId === payload.planId);
    if (!matchedPlan) throw new Error("VALIDATION_ERROR: The selected plan is no longer available.");
    
    const authoritativePremium = Number(matchedPlan.premium);
    if (authoritativePremium !== Number(payload.premium)) {
      throw new Error("VALIDATION_ERROR: Premium mismatch. The price may have expired.");
    }

    const commissionAmount = Number((authoritativePremium * commissionRate).toFixed(2));
    const utsavsShareAmount = Number((authoritativePremium - commissionAmount).toFixed(2));

    // 3. Namespaced Idempotency & Pending Creation
    // ID format: {agencyId}_{uid}_{key} ensures isolation and prevents cross-tenant overwrites.
    const namespacedId = `${agencyId}_${uid}_${idempotencyKey.replace(/[^a-zA-Z0-9]/g, '')}`;
    const ledgerRef = adminDb.collection('policy_ledger').doc(namespacedId);

    try {
      await ledgerRef.create({
        transactionId: namespacedId,
        agencyId,
        agencyUserId: uid,
        status: 'pending',
        travelerName: payload.name,
        premiumAmount: authoritativePremium,
        commissionRateAtSale: commissionRate,
        commissionAmount,
        utsavsShareAmount,
        environment: process.env.UTSAVS_ASEGO_ENV || 'uat',
        providerId: 'asego',
        createdAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp()
      });
    } catch (e: any) {
      if (e.code === 6) { // ALREADY_EXISTS
        const snap = await ledgerRef.get();
        const data = snap.data();
        if (data?.status === 'issued') {
          return { success: true, policyNumber: data.policyNumber, resumed: true };
        }
        throw new Error("IDEMPOTENCY_LOCKED: Transaction is currently being processed.");
      }
      throw e;
    }

    // 4. Call Frozen Asego Engine
    let asegoRes;
    try {
      asegoRes = await createAsegoPolicy(payload, asegoCreds);
    } catch (asegoErr: any) {
      await ledgerRef.update({
        status: 'reconciliation_required',
        error: `Provider Call Failed: ${asegoErr.message}`,
        updatedAt: FieldValue.serverTimestamp()
      });
      throw new Error(`PROVIDER_CONNECTION_FAILED: ${asegoErr.message}`);
    }

    // 5. Finalize Ledger Update
    if (asegoRes.success) {
      const policyData = Array.isArray(asegoRes.data) ? asegoRes.data[0] : asegoRes.data;
      const policyNumber = policyData.policyNumber;

      if (!policyNumber) {
        await ledgerRef.update({
          status: 'reconciliation_required',
          error: "Asego success but policyNumber missing in response.",
          updatedAt: FieldValue.serverTimestamp()
        });
        return { success: false, error: "Policy issued but reference missing. Reconciliation required." };
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
        // Log locally for manual audit - policy exists at Asego but ledger failed to update
        console.error("CRITICAL_RECONCILIATION_EVENT:", namespacedId, policyNumber);
        return { 
          success: true, 
          policyNumber, 
          warning: "Policy issued, internal ledger update delayed. Transaction ID: " + namespacedId 
        };
      }
    } else {
      await ledgerRef.update({
        status: 'failed',
        error: asegoRes.data?.msg || 'Issuance refused by provider',
        updatedAt: FieldValue.serverTimestamp()
      });
      return { success: false, error: asegoRes.data?.msg || 'Issuance failed' };
    }

  } catch (error: any) {
    console.error("ORCHESTRATION_FAILURE:", error);
    return { success: false, error: error.message };
  }
}
