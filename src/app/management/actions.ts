'use server';

/**
 * @fileOverview Utsavs Management Server Actions (Hardened)
 */

import { adminDb, verifySession, getAuthoritativeUser, adminAuth } from '@/lib/server/admin';
import { FieldValue } from 'firebase-admin/firestore';

/**
 * Authenticated user initiates onboarding request.
 */
export async function requestAgencyOnboarding(sessionToken: string, payload: { name: string, email: string }) {
  try {
    const decoded = await verifySession(sessionToken);
    const email = String(payload.email || "").trim().toLowerCase();
    
    if (!payload.name.trim() || !email) throw new Error("Name and Email are required.");
    if (!email.includes('@')) throw new Error("Invalid email format.");
    
    const agencyRef = adminDb.collection('agencies').doc();
    const agencyId = agencyRef.id;

    await agencyRef.set({
      id: agencyId,
      name: payload.name.trim(),
      contactEmail: email,
      status: 'pending_review',
      commissionRate: null,
      allowedDomains: [],
      requestedBy: decoded.uid,
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp()
    });

    return { success: true, agencyId };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

/**
 * Admin: Approves a pending agency.
 */
export async function approveAgency(sessionToken: string, agencyId: string, commissionRate: number) {
  try {
    const decoded = await verifySession(sessionToken);
    const adminUser = await getAuthoritativeUser(decoded.uid);
    if (adminUser.role !== 'admin') throw new Error("UNAUTHORIZED");

    if (!Number.isFinite(commissionRate) || commissionRate < 0 || commissionRate > 1) {
      throw new Error("Invalid commission rate.");
    }

    const agencyRef = adminDb.collection('agencies').doc(agencyId);
    const snap = await agencyRef.get();
    
    if (!snap.exists) throw new Error("Agency not found.");
    if (snap.data()?.status !== 'pending_review') throw new Error("Agency status must be pending_review.");

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
 * Admin: Suspends an agency and revokes all user sessions.
 */
export async function suspendAgency(sessionToken: string, agencyId: string) {
  try {
    const decoded = await verifySession(sessionToken);
    const adminUser = await getAuthoritativeUser(decoded.uid);
    if (adminUser.role !== 'admin') throw new Error("UNAUTHORIZED.");

    // 1. Mark Agency Suspended
    await adminDb.collection('agencies').doc(agencyId).update({
      status: 'suspended',
      updatedAt: FieldValue.serverTimestamp()
    });

    // 2. Revoke Sessions for all agency users
    const usersSnap = await adminDb.collection('users').where('agencyId', '==', agencyId).get();
    const revokes = usersSnap.docs.map(u => adminAuth.revokeRefreshTokens(u.id));
    await Promise.all(revokes);

    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

/**
 * Admin: Maps a Firebase user to an agency and assigns Custom Claims.
 */
export async function createAgencyUser(sessionToken: string, payload: { email: string, agencyId: string, role: 'agency_staff' | 'admin' }) {
  try {
    const decoded = await verifySession(sessionToken);
    const adminUser = await getAuthoritativeUser(decoded.uid);
    if (adminUser.role !== 'admin') throw new Error("UNAUTHORIZED.");

    const normalizedEmail = String(payload.email || "").trim().toLowerCase();

    // 1. Validate Agency Link
    if (payload.role !== 'admin') {
      if (!payload.agencyId) throw new Error("Agency ID required for staff.");
      const agencySnap = await adminDb.collection('agencies').doc(payload.agencyId).get();
      if (!agencySnap.exists || agencySnap.data()?.status !== 'active') {
        throw new Error("Target agency is not active.");
      }
    }

    // 2. Resolve Auth Identity
    let authUser;
    try {
      authUser = await adminAuth.getUserByEmail(normalizedEmail);
    } catch {
      authUser = await adminAuth.createUser({ email: normalizedEmail });
    }

    // 3. Set Authoritative Claims
    const claims: any = { role: payload.role };
    if (payload.role !== 'admin') {
      claims.agencyId = payload.agencyId;
    }
    
    await adminAuth.setCustomUserClaims(authUser.uid, claims);

    // 4. Create/Update authoritative identity document
    await adminDb.collection('users').doc(authUser.uid).set({
      uid: authUser.uid,
      email: normalizedEmail,
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
