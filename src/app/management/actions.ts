
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
    await verifySession(sessionToken); // Just ensure they are logged in at all
    
    const agencyRef = adminDb.collection('agencies').doc();
    const agencyId = agencyRef.id;

    await agencyRef.set({
      id: agencyId,
      name: payload.name,
      contactEmail: payload.email,
      status: 'pending_review', // Brief requirement: not active immediately
      commissionRate: null,     // Must be set by admin
      allowedDomains: [],
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

    if (commissionRate < 0 || commissionRate > 1) throw new Error("Invalid commission rate (must be 0-1).");

    const agencyRef = adminDb.collection('agencies').doc(agencyId);
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

    // 1. Create/Get Auth User
    let authUser;
    try {
      authUser = await adminAuth.getUserByEmail(payload.email);
    } catch {
      authUser = await adminAuth.createUser({ email: payload.email });
    }

    // 2. Set Custom Claims (Server-Authoritative RBAC)
    await adminAuth.setCustomUserClaims(authUser.uid, {
      agencyId: payload.agencyId,
      role: payload.role
    });

    // 3. Create/Update Identity Document
    await adminDb.collection('users').doc(authUser.uid).set({
      uid: authUser.uid,
      email: payload.email,
      role: payload.role,
      agencyId: payload.agencyId,
      status: 'active',
      updatedAt: FieldValue.serverTimestamp()
    }, { merge: true });

    return { success: true, uid: authUser.uid };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
