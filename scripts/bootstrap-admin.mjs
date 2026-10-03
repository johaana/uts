import admin from 'firebase-admin';

/**
 * @fileOverview Administrative Bootstrap Utility
 * Elevates the first user to 'admin' role via Custom Claims.
 */

const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

if (!projectId || !clientEmail || !privateKey) {
  console.error('CRITICAL ERROR: Terminal environment variables missing.');
  console.log('Please ensure FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY are set.');
  process.exit(1);
}

admin.initializeApp({
  credential: admin.credential.cert({
    projectId,
    clientEmail,
    privateKey,
  }),
});

const uid = process.argv[2];

if (!uid) {
  console.error('Error: No UID provided.');
  console.log('Usage: node scripts/bootstrap-admin.mjs <USER_UID>');
  process.exit(1);
}

async function bootstrapAdmin() {
  try {
    // 1. Set the Custom Claim (The Security Key)
    await admin.auth().setCustomUserClaims(uid, { role: 'admin' });

    // 2. Update the Identity Record in the Vault
    await admin.firestore().collection('users').doc(uid).set({
      uid,
      role: 'admin',
      agencyId: null,
      status: 'active',
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });

    console.log('----------------------------------------------------');
    console.log(`SUCCESS: User ${uid} is now a Principal Admin.`);
    console.log('ACTION REQUIRED: Sign OUT and Sign BACK IN to the website.');
    console.log('----------------------------------------------------');
  } catch (error) {
    console.error('Bootstrap failed:', error);
    process.exit(1);
  }
}

bootstrapAdmin();
