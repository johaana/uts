import 'server-only';
import * as admin from 'firebase-admin';

/**
 * @fileOverview Server-Authoritative Firebase Admin Initialization
 * This module is restricted to server-side execution only.
 * Hardened to fail loudly if production credentials are missing.
 */

const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

if (!admin.apps.length) {
  if (!projectId || !clientEmail || !privateKey) {
    throw new Error(
      "CRITICAL_CONFIGURATION_ERROR: Firebase Admin credentials missing from environment. " +
      "Check FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY."
    );
  }

  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId,
        clientEmail,
        privateKey,
      }),
      databaseURL: `https://${projectId}.firebaseio.com`,
    });
  } catch (error: any) {
    console.error('Firebase Admin init failed:', error);
    throw new Error(`INTERNAL_SERVER_ERROR: ${error.message}`);
  }
}

export const adminDb = admin.firestore();
export const adminAuth = admin.auth();

/**
 * Verifies a client-supplied ID token and returns the decoded payload.
 * Force check ensures revoked tokens are caught immediately.
 */
export async function verifySession(idToken: string) {
  if (!idToken) throw new Error("UNAUTHORIZED: Session token missing.");
  try {
    // Second argument 'true' forces a check if the token has been revoked
    const decodedToken = await adminAuth.verifyIdToken(idToken, true);
    return decodedToken;
  } catch (error: any) {
    throw new Error("UNAUTHORIZED: Invalid or revoked session.");
  }
}

/**
 * Resolves authoritative user metadata from Firestore using Admin SDK.
 */
export async function getAuthoritativeUser(uid: string) {
  const userDoc = await adminDb.collection('users').doc(uid).get();
  if (!userDoc.exists) throw new Error("UNAUTHORIZED: Identity record not found.");
  return userDoc.data()!;
}