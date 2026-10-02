'use server';

/**
 * @fileOverview Utsavs Transaction Orchestrator
 * This layer handles authentication, authorization, agency resolution, 
 * and the 'pending' -> 'issued' state transition to prevent ghost sales.
 * 
 * It WRAPS the frozen Asego v5.24 engine.
 */

import { getFirestore, getAuth } from '@/firebase';
import { doc, setDoc, updateDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { createAsegoPolicy, AsegoCredentials } from './actions';

export type TransactionStatus = 'pending' | 'issued' | 'failed' | 'reconciliation_required';

interface TransactionPayload {
  traveler: any;
  plan: any;
  quote: any;
}

/**
 * Orchestrates a complete insurance issuance lifecycle.
 */
export async function orchestrateIssuance(payload: any, userId: string) {
  const db = getFirestore();
  const transactionId = `TX-${Date.now()}-${Math.random().toString(36).substring(7).toUpperCase()}`;

  try {
    // 1. Authoritative Identity Resolution
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);
    if (!userSnap.exists()) throw new Error("UNAUTHORIZED: Identity not found.");
    
    const userData = userSnap.data();
    if (userData.status !== 'active') throw new Error("UNAUTHORIZED: Account is not active.");
    
    const agencyId = userData.agencyId;
    const agencyRef = doc(db, 'agencies', agencyId);
    const agencySnap = await getDoc(agencyRef);
    if (!agencySnap.exists()) throw new Error("CONFIGURATION_ERROR: Agency not found.");
    
    const agencyData = agencySnap.data();
    if (agencyData.status !== 'active') throw new Error("UNAUTHORIZED: Agency is suspended.");

    // 2. Resolve Commission Snapshot
    const commissionRate = agencyData.commissionRate || 0.10;
    const premiumAmount = Number(payload.premium);
    const commissionAmount = Number((premiumAmount * commissionRate).toFixed(2));
    const utsavsShareAmount = Number((premiumAmount - commissionAmount).toFixed(2));

    // 3. Create PENDING Ledger Record (The Ghost Sale Fix)
    const ledgerRef = doc(db, 'policy_ledger', transactionId);
    await setDoc(ledgerRef, {
      transactionId,
      agencyId,
      agencyUserId: userId,
      status: 'pending',
      travelerName: payload.name,
      premiumAmount,
      commissionRateAtSale: commissionRate,
      commissionAmount,
      utsavsShareAmount,
      environment: process.env.NODE_ENV === 'production' ? 'production' : 'uat',
      providerId: 'asego',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });

    // 4. Call Frozen Asego v5.24 Engine
    // Credentials would be pulled from server environment in production
    const creds: AsegoCredentials = {
      partnerId: process.env.UTSAVS_PARTNER_ID || '',
      sign: process.env.UTSAVS_SIGN || '',
      reference: process.env.UTSAVS_REFERENCE || ''
    };

    const asegoRes = await createAsegoPolicy(payload, creds);

    // 5. Update Ledger with Result
    if (asegoRes.success) {
      const policyData = Array.isArray(asegoRes.data) ? asegoRes.data[0] : asegoRes.data;
      await updateDoc(ledgerRef, {
        status: 'issued',
        policyNumber: policyData.policyNumber || 'SUCCESS',
        documentUrl: policyData.policyUrl || '',
        updatedAt: serverTimestamp()
      });
      return { success: true, transactionId, policyNumber: policyData.policyNumber };
    } else {
      await updateDoc(ledgerRef, {
        status: 'failed',
        error: asegoRes.data?.msg || 'Issuance failed',
        updatedAt: serverTimestamp()
      });
      return { success: false, error: asegoRes.data?.msg || 'Issuance failed' };
    }

  } catch (error: any) {
    console.error("ORCHESTRATION_CRITICAL_FAILURE:", error);
    
    // Attempt to mark as reconciliation required if the process was interrupted after ledger creation
    // but before Asego result could be recorded.
    try {
        const checkLedger = doc(db, 'policy_ledger', transactionId);
        const snap = await getDoc(checkLedger);
        if (snap.exists() && snap.data().status === 'pending') {
            await updateDoc(checkLedger, { 
                status: 'reconciliation_required',
                reconciliationReason: error.message,
                updatedAt: serverTimestamp()
            });
        }
    } catch (reconError) {
        console.error("RECONCILIATION_LOG_FAILED", reconError);
    }
    
    return { success: false, error: error.message };
  }
}
