
# Utsavs Principal Admin Bootstrap

Because self-escalation is blocked by database security rules, the first **Principal Admin** must be created manually or via the Admin SDK.

## Option 1: Firebase Console (Fastest)

1. Go to your **Firestore Database**.
2. Create a collection named `users`.
3. Create a document with the ID matching your **Auth UID**.
4. Add the following fields:
   - `uid`: (string) Your Auth UID
   - `role`: "admin"
   - `status`: "active"
   - `email`: (string) Your email
5. Go to `/management` and log in.

## Option 2: Scripted Claims (Production)

Once the project is deployed, use the `adminAuth.setCustomUserClaims` method in a controlled environment to assign the `role: "admin"` claim. This is necessary for Firestore rules that check `request.auth.token.role`.

```ts
import { adminAuth } from '@/lib/server/admin';

async function bootstrapAdmin(uid: string) {
  await adminAuth.setCustomUserClaims(uid, { role: 'admin' });
  console.log("Claims updated for Principal Admin.");
}
```
