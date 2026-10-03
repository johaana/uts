
import admin from 'firebase-admin';

/**
 * @fileOverview Admin Bootstrap Script v1.1
 * Grants 'admin' custom claims and mirrors the record in Firestore.
 */

const uid = process.argv[2];
const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

if (!uid) {
  console.error('Usage: node scripts/bootstrap-admin.mjs <USER_UID>');
  process.exit(1);
}

if (!projectId || !clientEmail || !privateKey) {
  console.error('ERROR: Missing environment variables.');
  console.log('Ensure you have exported: FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY');
  process.exit(1);
}

admin.initializeApp({
  credential: admin.credential.cert({
    projectId,
    clientEmail,
    privateKey,
  }),
});

async function bootstrap() {
  try {
    console.log(`Attempting to promote UID: ${uid} to Admin...`);

    // 1. Set Custom Claims (The Master Key)
    await admin.auth().setCustomUserClaims(uid, { role: 'admin' });
    console.log('✅ Auth Claim: Admin set successfully.');

    // 2. Mirror to Firestore (The Identity Record)
    console.log('Attempting to sync record to Firestore...');
    try {
      const user = await admin.auth().getUser(uid);
      await admin.firestore().collection('users').doc(uid).set({
        uid,
        email: user.email,
        role: 'admin',
        status: 'active',
        updatedAt: admin.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
      console.log('✅ Firestore Sync: Record mirrored successfully.');
      console.log('\n🎉 SUCCESS: You are now a Principal Admin.');
      console.log('Next step: Sign out and Sign back in on the website to refresh your session.');
    } catch (dbError) {
      if (dbError.code === 7 || dbError.message.includes('permission-denied')) {
        console.error('\n❌ DATABASE ERROR (7): Permission Denied.');
        console.log('This usually means the Firestore Database instance has not been created yet.');
        console.log('FIX: Go to Firebase Console -> Firestore Database -> Click "Create Database".');
        console.log('After creating it, run this script one more time.');
      } else {
        throw dbError;
      }
    }

  } catch (error) {
    console.error('\n❌ CRITICAL ERROR:', error.message);
    process.exit(1);
  }
}

bootstrap();
