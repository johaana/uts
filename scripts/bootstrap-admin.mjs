import admin from 'firebase-admin';

// Initialize with environment variables
if (!process.env.FIREBASE_PROJECT_ID || !process.env.FIREBASE_CLIENT_EMAIL || !process.env.FIREBASE_PRIVATE_KEY) {
  console.error('CRITICAL: Admin credentials missing in environment.');
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
  console.error('Usage: node scripts/bootstrap-admin.mjs <USER_UID>');
  process.exit(1);
}

async function bootstrap() {
  try {
    // 1. Set Custom Claims
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
  } catch (error) {
    console.error('Bootstrap failed:', error.message);
  }
}

bootstrap();