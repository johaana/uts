import {
  initializeTestEnvironment,
  RulesTestEnvironment,
} from "@firebase/rules-unit-testing";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

/**
 * @fileOverview Firestore Security Rules Test Suite
 */

let testEnv: RulesTestEnvironment;

describe("Firestore Security Rules", () => {
  beforeAll(async () => {
    testEnv = await initializeTestEnvironment({
      projectId: "utsavs-pro",
      firestore: {
        rules: `rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function signedIn() { return request.auth != null; }
    function isAdmin()  { return signedIn() && request.auth.token.get('role', null) == 'admin'; }
    function myAgency() { return signedIn() ? request.auth.token.get('agencyId', null) : null; }
    match /users/{userId} {
      allow read: if signedIn() && (request.auth.uid == userId || isAdmin());
      allow write: if false;
    }
    match /agencies/{agencyId} {
      allow read: if isAdmin() || (myAgency() != null && myAgency() == agencyId);
      allow write: if false;
    }
    match /policy_ledger/{transactionId} {
      allow read: if isAdmin() || (myAgency() != null && resource.data.agencyId == myAgency());
      allow write: if false;
    }
  }
}`,
      },
    });
  });

  afterAll(async () => {
    await testEnv.cleanup();
  });

  it("Test A: Agency A cannot read Agency B transactions", async () => {
    const agencyA = testEnv.authenticatedContext("user_a", { agencyId: "AGENCY_A" });
    const db = agencyA.firestore();
    const ledgerRef = doc(db, "policy_ledger", "tx_b");
    
    // Setup data in emulator
    await testEnv.withSecurityRulesDisabled(async (context) => {
      await setDoc(doc(context.firestore(), "policy_ledger", "tx_b"), { agencyId: "AGENCY_B" });
    });

    await expect(getDoc(ledgerRef)).rejects.toThrow();
  });

  it("Test C: Client-side write to policy_ledger is denied", async () => {
    const agencyA = testEnv.authenticatedContext("user_a", { agencyId: "AGENCY_A" });
    const db = agencyA.firestore();
    const ledgerRef = doc(db, "policy_ledger", "new_tx");
    
    await expect(setDoc(ledgerRef, { agencyId: "AGENCY_A" })).rejects.toThrow();
  });

  it("Test D: User cannot escalate their own role", async () => {
    const userA = testEnv.authenticatedContext("user_a", { role: "agency_staff" });
    const db = userA.firestore();
    const userRef = doc(db, "users", "user_a");
    
    await expect(updateDoc(userRef, { role: "admin" })).rejects.toThrow();
  });
});
