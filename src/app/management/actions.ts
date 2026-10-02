
'use server';

/**
 * @fileOverview Utsavs Management Server Actions (Hardened)
 * Handles authoritative partner management using Firebase Admin SDK.
 */

import { adminDb, verifySession, getAuthoritativeUser, adminAuth } from '@/lib/server/admin';
import { FieldValue } from 'firebase-admin/firestore';

/**
 * Initiates an agency onboarding request (status: pending_review)
 */
export async function requestAgencyOnboarding(sessionToken: string, payload: { name: string, email: string }) {
  try {
    const decoded = await verifySession(sessionToken);
    
    // Basic validation
    if (!payload.name.trim() || !payload.email.trim()) throw new Error("Name and Email are required.");
    
    const agencyRef = adminDb.collection('agencies').doc();
    const agencyId = agencyRef.id;

    await agencyRef.set({
      id: agencyId,
      name: payload.name.trim(),
      contactEmail: payload.email.trim(),
      status: 'pending_review',
      commissionRate: null,
      allowedDomains: [],
      requestedBy: decoded.uid,
      onboardedAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp()
    });

    return { success: true, agencyId };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

/**
 * Admin: Approves a pending agency and sets their commission rate.
 */
export async function approveAgency(sessionToken: string, agencyId: string, commissionRate: number) {
  try {
    const decoded = await verifySession(sessionToken);
    const adminUser = await getAuthoritativeUser(decoded.uid);
    if (adminUser.role !== 'admin') throw new Error("UNAUTHORIZED.");

    if (!Number.isFinite(commissionRate) || commissionRate < 0 || commissionRate > 1) {
      throw new Error("Invalid commission rate. Must be a finite number between 0 and 1.");
    }

    const agencyRef = adminDb.collection('agencies').doc(agencyId);
    const snap = await agencyRef.get();
    if (!snap.exists) throw new Error("Agency not found.");
    if (snap.data()?.status !== 'pending_review') throw new Error("Agency is already processed.");

    await agencyRef.update({
      status: 'active',
      commissionRate: Number(commissionRate.toFixed(4)),
      updatedAt: FieldValue.serverTimestamp()
    });

    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

/**
 * Admin: Suspends an agency.
 */
export async function suspendAgency(sessionToken: string, agencyId: string) {
  try {
    const decoded = await verifySession(sessionToken);
    const adminUser = await getAuthoritativeUser(decoded.uid);
    if (adminUser.role !== 'admin') throw new Error("UNAUTHORIZED.");

    await adminDb.collection('agencies').doc(agencyId).update({
      status: 'suspended',
      updatedAt: FieldValue.serverTimestamp()
    });

    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

/**
 * Admin: Assigns a user to an agency and sets custom claims.
 */
export async function createAgencyUser(sessionToken: string, payload: { email: string, agencyId: string, role: 'agency_staff' | 'admin' }) {
  try {
    const decoded = await verifySession(sessionToken);
    const adminUser = await getAuthoritativeUser(decoded.uid);
    if (adminUser.role !== 'admin') throw new Error("UNAUTHORIZED.");

    // 1. Validate Agency
    if (payload.role !== 'admin') {
      const agencySnap = await adminDb.collection('agencies').doc(payload.agencyId).get();
      if (!agencySnap.exists || agencySnap.data()?.status !== 'active') {
        throw new Error("CANNOT_ASSIGN: Agency is not active.");
      }
    }

    // 2. Create/Get Auth User
    let authUser;
    try {
      authUser = await adminAuth.getUserByEmail(payload.email);
    } catch {
      authUser = await adminAuth.createUser({ email: payload.email });
    }

    // 3. Set Custom Claims (Server-Authoritative RBAC)
    const claims: any = { role: payload.role };
    if (payload.role !== 'admin') {
      claims.agencyId = payload.agencyId;
    }
    
    await adminAuth.setCustomUserClaims(authUser.uid, claims);

    // 4. Create/Update Identity Document
    await adminDb.collection('users').doc(authUser.uid).set({
      uid: authUser.uid,
      email: payload.email,
      role: payload.role,
      agencyId: payload.role === 'admin' ? null : payload.agencyId,
      status: 'active',
      updatedAt: FieldValue.serverTimestamp()
    }, { merge: true });

    return { success: true, uid: authUser.uid };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
