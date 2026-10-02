import admin from 'firebase-admin';

// Check for environment variables
const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

if (!projectId || !clientEmail || !privateKey) {
  console.error("ERROR: Missing Firebase Admin credentials in environment.");
  process.exit(1);
}

admin.initializeApp({
  credential: admin.credential.cert({ projectId, clientEmail, privateKey }),
  databaseURL: `https://${projectId}.firebaseio.com`
});

const uid = process.argv[2];
if (!uid) {
  console.error('Usage: node scripts/bootstrap-admin.mjs <UID>');
  process.exit(1);
}

async function bootstrap() {
  try {
    console.log(`Starting bootstrap for UID: ${uid}...`);
    
    // 1. Set Custom Claim
    await admin.auth().setCustomUserClaims(uid, { role: 'admin' });
    
    // 2. Set Identity Document
    await admin.firestore().collection('users').doc(uid).set({
      uid,
      role: 'admin',
      agencyId: null,
      status: 'active',
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    }, { merge: true });

    console.log('SUCCESS: Admin claim + identity doc set.');
    console.log('ACTION REQUIRED: Sign out and back in on the website to refresh your session.');
  } catch (error) {
    console.error('Bootstrap failed:', error.message);
  }
}

bootstrap();