import admin from 'firebase-admin';

/**
 * @fileOverview Utsavs Principal Admin Bootstrap Script
 * 
 * Usage:
 * export FIREBASE_PROJECT_ID="utsavs-pro"
 * export FIREBASE_CLIENT_EMAIL="..."
 * export FIREBASE_PRIVATE_KEY="..."
 * node scripts/bootstrap-admin.mjs <USER_UID>
 */

if (!process.env.FIREBASE_PROJECT_ID || !process.env.FIREBASE_CLIENT_EMAIL || !process.env.FIREBASE_PRIVATE_KEY) {
  console.error("Error: Missing FIREBASE_ environment variables.");
  process.exit(1);
}

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  })
});

const uid = process.argv[2];
if (!uid) {
  console.error('Usage: node scripts/bootstrap-admin.mjs <uid>');
  process.exit(1);
}

async function bootstrap() {
  try {
    // 1. Set Custom Claims (The real security boundary)
    await admin.auth().setCustomUserClaims(uid, { role: 'admin' });
    
    // 2. Create the Identity Doc (For UI lookups)
    await admin.firestore().collection('users').doc(uid).set({
      uid,
      role: 'admin',
      agencyId: null,
      status: 'active',
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    }, { merge: true });

    console.log(`Successfully bootstrapped UID: ${uid} as Principal Admin.`);
    console.log('Action required: The user must sign out and back in to refresh their token.');
  } catch (error) {
    console.error('Bootstrap failed:', error);
  }
}

bootstrap();