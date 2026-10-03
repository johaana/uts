import admin from 'firebase-admin';

/**
 * @fileOverview One-time bootstrap script to grant Principal Admin role.
 * Usage: node scripts/bootstrap-admin.mjs <USER_UID>
 */

const uid = process.argv[2];

if (!uid) {
  console.error("Usage: node scripts/bootstrap-admin.mjs <USER_UID>");
  process.exit(1);
}

const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

if (!projectId || !clientEmail || !privateKey) {
  console.error("ERROR: Missing credentials in terminal environment.");
  console.error("Please run the 'export' commands first as instructed.");
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
} catch (e) {
  console.error("Failed to initialize Firebase Admin:", e.message);
  process.exit(1);
}

async function bootstrap() {
  try {
    console.log(`Attempting to promote ${uid} to admin...`);
    
    // 1. Set Custom Claims (The "Master Key")
    await admin.auth().setCustomUserClaims(uid, { role: 'admin' });
    
    // 2. Create/Update the identity record in Firestore
    await admin.firestore().collection('users').doc(uid).set({
      uid: uid,
      role: 'admin',
      status: 'active',
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    }, { merge: true });

    console.log("--------------------------------------------------");
    console.log("SUCCESS: Account has been promoted to Principal Admin.");
    console.log("Next steps:");
    console.log("1. Sign Out from the website.");
    console.log("2. Sign In again to refresh your permissions.");
    console.log("3. Visit /admin to access the control room.");
    console.log("--------------------------------------------------");
    process.exit(0);
  } catch (error) {
    console.error("CRITICAL ERROR during bootstrap:", error.message);
    process.exit(1);
  }
}

bootstrap();
