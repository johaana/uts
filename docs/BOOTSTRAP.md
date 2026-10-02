# Utsavs Principal Admin Bootstrap

Because self-escalation is blocked by database security rules, the first **Principal Admin** must be created via the Admin SDK from a trusted environment.

## Bootstrap Process

1. **Obtain UID**: The user must first sign in once to the application (e.g., via the Management portal) to create their Firebase Auth record and obtain their UID.
2. **Setup Environment**: Ensure your terminal has the service account credentials for the Firebase project.
   ```bash
   export FIREBASE_PROJECT_ID="utsavs-pro"
   export FIREBASE_CLIENT_EMAIL="firebase-adminsdk-..."
   export FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----..."
   ```
3. **Run Script**: Use the provided Node.js script to assign the `admin` role.
   ```bash
   node scripts/bootstrap-admin.mjs <USER_UID>
   ```
4. **Refresh Session**: The user must sign out and sign back in for the new custom claims to take effect.

## Verification
Once bootstrapped, the user will have `request.auth.token.role == 'admin'`, allowing them to bypass agency isolation and manage the entire platform.