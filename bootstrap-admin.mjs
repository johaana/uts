import admin from 'firebase-admin';

/**
 * @fileOverview Admin Bootstrap Utility
 * Grants the 'admin' role to a specific UID and mirrors the record in Firestore.
 */

const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

if (!projectId || !clientEmail || !privateKey) {
  console.error('ERROR: Missing credentials in environment variables.');
  console.log('Ensure you have run the "export" commands for PROJECT_ID, CLIENT_EMAIL, and PRIVATE_KEY.');
  process.exit(1);
}

// Initialize Admin SDK
admin.initializeApp({
  credential: admin.credential.cert({
    projectId,
    clientEmail,
    privateKey,
  }),
});

const uid = process.argv[2];

if (!uid) {
  console.error('ERROR: Please provide the User UID as an argument.');
  console.log('Usage: node scripts/bootstrap-admin.mjs <USER_UID>');
  process.exit(1);
}

async function bootstrapAdmin() {
  console.log(`\nStarting bootstrap for UID: ${uid}...\n`);

  try {
    // 1. Assign Custom Claim in Firebase Auth (The "Master Key")
    await admin.auth().setCustomUserClaims(uid, { role: 'admin' });
    console.log('✅ AUTH: Admin role assigned successfully.');

    // 2. Create User Document in Firestore (The "ID Card")
    try {
      const db = admin.firestore();
      await db.collection('users').doc(uid).set({
        uid,
        role: 'admin',
        agencyId: null,
        status: 'active',
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      }, { merge: true });
      console.log('✅ DATABASE: User record mirrored in Firestore.');
    } catch (dbError) {
      console.error('❌ DATABASE ERROR:', dbError.message);
      if (dbError.code === 7 || dbError.message.includes('permission-denied')) {
        console.log('\n--- TROUBLESHOOTING ---');
        console.log('This usually means the Firestore Database has not been initialized.');
        console.log('1. Go to Firebase Console -> Firestore Database.');
        console.log('2. Click "Create Database" and follow the prompts.');
        console.log('3. Run this script again.');
      }
      return;
    }

    console.log('\n--- BOOTSTRAP COMPLETE ---');
    console.log('1. Sign OUT of the website.');
    console.log('2. Sign IN again (required to refresh your security token).');
    console.log('3. Visit /admin to access the control room.');

  } catch (error) {
    console.error('❌ CRITICAL ERROR:', error.message);
    process.exit(1);
  }
}

bootstrapAdmin();
