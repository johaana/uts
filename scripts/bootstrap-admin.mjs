import admin from 'firebase-admin';

// Initialize with environment variables
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    })
  });
}

const uid = process.argv[2];
if (!uid) {
  console.error('Usage: node scripts/bootstrap-admin.mjs <USER_UID>');
  process.exit(1);
}

async function bootstrap() {
  try {
    const auth = admin.auth();
    const db = admin.firestore();

    // 1. Set Custom Claims (The primary security boundary)
    await auth.setCustomUserClaims(uid, { role: 'admin' });

    // 2. Set Authoritative Identity Document
    await db.collection('users').doc(uid).set({
      uid,
      role: 'admin',
      agencyId: null,
      status: 'active',
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    }, { merge: true });

    console.log(`Successfully bootstrapped UID: ${uid} as Principal Admin.`);
    console.log('IMPORTANT: Sign out and sign back in on the website for changes to take effect.');
  } catch (error) {
    console.error('Bootstrap failed:', error.message);
  }
}

bootstrap();