
import 'server-only';
import * as admin from 'firebase-admin';

/**
 * @fileOverview Server-Authoritative Firebase Admin Initialization
 * This module is restricted to server-side execution only.
 */

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      }),
      databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
    });
  } catch (error) {
    console.warn('Firebase Admin init skipped (using application default or mock for local dev).', error);
    // In local development where secrets might be missing, we may let it fail later or use a different init
  }
}

export const adminDb = admin.firestore();
export const adminAuth = admin.auth();

/**
 * Verifies a client-supplied ID token and returns the decoded payload.
 * Throws if the token is invalid or expired.
 */
export async function verifySession(idToken: string) {
  if (!idToken) throw new Error("UNAUTHORIZED: Session token missing.");
  try {
    const decodedToken = await adminAuth.verifyIdToken(idToken);
    return decodedToken;
  } catch (error) {
    throw new Error("UNAUTHORIZED: Invalid session.");
  }
}

/**
 * Resolves authoritative user metadata from Firestore.
 */
export async function getAuthoritativeUser(uid: string) {
  const userDoc = await adminDb.collection('users').doc(uid).get();
  if (!userDoc.exists) throw new Error("UNAUTHORIZED: Identity record not found.");
  return userDoc.data()!;
}
