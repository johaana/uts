
/**
 * @fileOverview Utsavs Principal Admin Bootstrap
 * 
 * This script grants the 'admin' custom claim to a specific user UID.
 * This MUST be run from a trusted terminal environment.
 */

import admin from 'firebase-admin';

const uid = process.argv[2];

if (!uid) {
  console.error('❌ Error: Please provide the User UID as an argument.');
  console.log('Usage: node scripts/bootstrap-admin.mjs <USER_UID>');
  process.exit(1);
}

const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

if (!projectId || !clientEmail || !privateKey) {
  console.error('❌ Error: Missing Firebase Admin environment variables.');
  console.log('Please export FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY.');
  process.exit(1);
}

try {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId,
      clientEmail,
      privateKey,
    }),
  });

  console.log(`Attempting to promote UID: ${uid} to Admin...`);

  const auth = admin.auth();
  const db = admin.firestore();

  // 1. Set Custom Claims (The Master Key)
  await auth.setCustomUserClaims(uid, { role: 'admin' });
  console.log('✅ Auth Claim: Admin set successfully.');

  // 2. Sync to Firestore (The Identity Record)
  console.log('Attempting to sync record to Firestore...');
  await db.collection('users').doc(uid).set({
    uid,
    role: 'admin',
    status: 'active',
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  }, { merge: true });

  console.log('\n✨ SUCCESS: You are now a Principal Admin!');
  console.log('-------------------------------------------');
  console.log('Next Steps:');
  console.log('1. Go to your website.');
  console.log('2. SIGN OUT of your account.');
  console.log('3. SIGN IN again (this refreshes your "Master Key").');
  console.log('4. Visit /admin to access the Control Room.');

} catch (error) {
  console.error('\n❌ CRITICAL ERROR:', error.message);
  
  if (error.message.includes('NOT_FOUND')) {
    console.log('\n💡 TROUBLESHOOTING: Firestore Instance Not Found.');
    console.log('It looks like you created a "Realtime Database" instead of "Cloud Firestore".');
    console.log('1. Go to Firebase Console -> Build -> Firestore Database.');
    console.log('2. Click "Create Database".');
    console.log('3. Ensure you choose "Native Mode" and "Production Mode".');
    console.log('4. Rerun this script once the database is created.');
  } else if (error.message.includes('PERMISSION_DENIED')) {
    console.log('\n💡 TROUBLESHOOTING: API Not Enabled.');
    console.log('Please visit the URL in the error message above to enable the Cloud Firestore API.');
  }
  
  process.exit(1);
}
