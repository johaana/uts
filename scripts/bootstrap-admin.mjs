
import admin from 'firebase-admin';

const uid = process.argv[2];

if (!uid) {
  console.error('Usage: node scripts/bootstrap-admin.mjs <USER_UID>');
  process.exit(1);
}

const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

if (!projectId || !clientEmail || !privateKey) {
  console.error('Error: Missing environment variables FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, or FIREBASE_PRIVATE_KEY');
  process.exit(1);
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId,
      clientEmail,
      privateKey,
    }),
  });
}

async function bootstrap() {
  try {
    console.log(`Attempting to promote user: ${uid}...`);
    
    // Set custom claims for security rules
    await admin.auth().setCustomUserClaims(uid, { role: 'admin' });
    
    // Create/Update the authoritative user record in Firestore
    await admin.firestore().collection('users').doc(uid).set({
      uid,
      role: 'admin',
      status: 'active',
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    }, { merge: true });

    console.log('---------------------------------------------------------');
    console.log(`SUCCESS: User ${uid} is now a Principal Admin.`);
    console.log('---------------------------------------------------------');
    console.log('FINAL STEP: On the website, SIGN OUT and SIGN IN again.');
    console.log('Then visit /admin to access the control room.');
    process.exit(0);
  } catch (error) {
    console.error('CRITICAL ERROR during bootstrap:', error.message);
    process.exit(1);
  }
}

bootstrap();
