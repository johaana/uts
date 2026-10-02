import admin from 'firebase-admin';
admin.initializeApp({ credential: admin.credential.cert({
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
})});
const uid = process.argv[2];
if (!uid) throw new Error('usage: node scripts/bootstrap-admin.mjs <uid>');
await admin.auth().setCustomUserClaims(uid, { role: 'admin' });
await admin.firestore().collection('users').doc(uid).set(
  { uid, role: 'admin', agencyId: null, status: 'active', updatedAt: admin.firestore.FieldValue.serverTimestamp() },
  { merge: true });
console.log('Admin claim + identity doc set. Sign out and back in to refresh the token.');