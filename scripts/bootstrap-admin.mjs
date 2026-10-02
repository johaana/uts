import admin from 'firebase-admin';

// Check for required environment variables
const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY;

if (!projectId || !clientEmail || !privateKey) {
  console.error('Error: FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY must be set.');
  process.exit(1);
}

admin.initializeApp({
  credential: admin.credential.cert({
    projectId,
    clientEmail,
    privateKey: privateKey.replace(/\\n/g, '\n'),
  })
});

const uid = process.argv[2];
if (!uid) {
  console.error('Usage: node scripts/bootstrap-admin.mjs <USER_UID>');
  process.exit(1);
}

async function bootstrap() {
  try {
    // 1. Set Custom Claims (The primary security boundary)
    await admin.auth().setCustomUserClaims(uid, { role: 'admin' });

    // 2. Set Authoritative Identity Document
    await admin.firestore().collection('users').doc(uid).set({
      uid,
      role: 'admin',
      agencyId: null,
      status: 'active',
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    }, { merge: true });

    console.log(`Successfully bootstrapped UID: ${uid} as Principal Admin.`);
    console.log('IMPORTANT: The user must sign out and sign back in for claims to take effect.');
    process.exit(0);
  } catch (error) {
    console.error('Bootstrap failed:', error.message);
    process.exit(1);
  }
}

bootstrap();