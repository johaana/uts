'use server';

/**
 * @fileOverview Utsavs Management Server Actions
 * Handles authoritative partner management, onboarding, and status control.
 */

import { getFirestore } from '@/firebase';
import { doc, setDoc, updateDoc, serverTimestamp, collection, getDoc } from 'firebase/firestore';

export async function onboardAgency(adminId: string, payload: { name: string, email: string, tier: string }) {
  const db = getFirestore();
  
  try {
    // 1. Authorize Admin
    const adminRef = doc(db, 'users', adminId);
    const adminSnap = await getDoc(adminRef);
    if (!adminSnap.exists() || adminSnap.data().role !== 'admin') {
      throw new Error("UNAUTHORIZED: Only principal admins can onboard agencies.");
    }

    // 2. Create Agency Record
    const agencyRef = doc(collection(db, 'agencies'));
    const agencyId = agencyRef.id;
    
    const commissionRate = payload.tier === 'gold' ? 0.15 : payload.tier === 'silver' ? 0.12 : 0.10;

    await setDoc(agencyRef, {
      id: agencyId,
      name: payload.name,
      contactEmail: payload.email,
      commissionRate,
      status: 'active', // For MVP, we activate immediately on admin creation
      allowedDomains: [],
      onboardedAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });

    return { success: true, agencyId };
  } catch (error: any) {
    console.error("ONBOARDING_FAILURE:", error);
    return { success: false, error: error.message };
  }
}

export async function updateAgencyStatus(adminId: string, agencyId: string, status: 'active' | 'suspended') {
  const db = getFirestore();
  
  try {
    const adminRef = doc(db, 'users', adminId);
    const adminSnap = await getDoc(adminRef);
    if (!adminSnap.exists() || adminSnap.data().role !== 'admin') {
      throw new Error("UNAUTHORIZED.");
    }

    const agencyRef = doc(db, 'agencies', agencyId);
    await updateDoc(agencyRef, { 
      status,
      updatedAt: serverTimestamp()
    });

    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function assignUserToAgency(adminId: string, userId: string, agencyId: string) {
    const db = getFirestore();
    try {
        const adminRef = doc(db, 'users', adminId);
        const adminSnap = await getDoc(adminRef);
        if (!adminSnap.exists() || adminSnap.data().role !== 'admin') throw new Error("UNAUTHORIZED");

        const userRef = doc(db, 'users', userId);
        await updateDoc(userRef, {
            agencyId,
            role: 'agency_staff',
            status: 'active',
            updatedAt: serverTimestamp()
        });
        return { success: true };
    } catch (e: any) {
        return { success: false, error: e.message };
    }
}
