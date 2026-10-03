import admin from 'firebase-admin';

/**
 * @fileOverview Utsavs Principal Admin Bootstrap Tool
 * Usage: node scripts/bootstrap-admin.mjs <USER_UID>
 */

const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

if (!projectId || !clientEmail || !privateKey) {
  console.error('❌ Error: Missing Firebase Admin environment variables.');
  console.log('Please set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY in your terminal.');
  process.exit(1);
}

admin.initializeApp({
  credential: admin.credential.cert({
    projectId,
    clientEmail,
    privateKey,
  }),
});

const db = admin.firestore();
const auth = admin.auth();

const uid = process.argv[2];

if (!uid) {
  console.error('❌ Error: Please provide a UID as an argument.');
  console.log('Usage: node scripts/bootstrap-admin.mjs <USER_UID>');
  process.exit(1);
}

async function bootstrap() {
  console.log(`🚀 Bootstrapping admin for UID: ${uid}...`);

  try {
    // 1. Set Custom Claims
    await auth.setCustomUserClaims(uid, { role: 'admin' });
    console.log('✅ Custom claims (role: admin) set successfully.');

    // 2. Update Firestore User Document
    // This ensures the UI recognizes the admin status immediately
    await db.collection('users').doc(uid).set({
      uid,
      role: 'admin',
      status: 'active',
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    console.log('✅ Firestore user document updated to admin role.');

    console.log('\n⭐ SUCCESS! User is now a Principal Admin.');
    console.log('👉 FINAL ACTION: Sign out and sign back in on the website for changes to take effect.');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error during bootstrap:', error.message);
    process.exit(1);
  }
}

bootstrap();
