import admin from 'firebase-admin';

/**
 * @fileOverview One-time bootstrap script to create the first Principal Admin.
 * Usage: node scripts/bootstrap-admin.mjs <USER_UID>
 */

const uid = process.argv[2];

if (!uid) {
  console.error("Error: Please provide the User UID as an argument.");
  console.error("Usage: node scripts/bootstrap-admin.mjs v05gSOufRpO40SLQtsM6jEAzl7h1");
  process.exit(1);
}

// Initialize using environment variables set in the terminal
if (!admin.apps.length) {
  admin.initializeApp();
}

const auth = admin.auth();
const db = admin.firestore();

async function promoteToAdmin() {
  console.log(`Promoting UID: ${uid} to Principal Admin...`);

  try {
    // 1. Set Custom Claims (The "Key" in the login token)
    await auth.setCustomUserClaims(uid, { role: 'admin' });
    console.log("✅ Custom claims 'role: admin' set.");

    // 2. Update Firestore Identity Record
    await db.collection('users').doc(uid).set({
      uid: uid,
      role: 'admin',
      status: 'active',
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    console.log("✅ Firestore identity record updated.");

    console.log("\nSuccess! Your account is now a Principal Admin.");
    console.log("Next Step: Sign OUT and Sign IN again on the website for the changes to take effect.");
  } catch (error) {
    console.error("❌ Bootstrap failed:", error.message);
    process.exit(1);
  }
}

promoteToAdmin();
