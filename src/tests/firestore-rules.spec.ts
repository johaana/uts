import { readFileSync } from 'fs';
import {
  initializeTestEnvironment, assertFails, assertSucceeds, RulesTestEnvironment,
} from '@firebase/rules-unit-testing';
import { doc, getDoc, setDoc, updateDoc, deleteDoc, collection, query, where, getDocs } from 'firebase/firestore';

let env: RulesTestEnvironment;

beforeAll(async () => {
  env = await initializeTestEnvironment({
    projectId: 'utsavs-rules-test',
    firestore: { rules: readFileSync('firestore.rules', 'utf8'), host: '127.0.0.1', port: 8080 },
  });
});
afterAll(async () => { await env.cleanup(); });

beforeEach(async () => {
  await env.clearFirestore();
  await env.withSecurityRulesDisabled(async (ctx) => {
    const db = ctx.firestore();
    await setDoc(doc(db, 'policy_ledger', 'tx_a'), { agencyId: 'AGENCY_A', status: 'issued' });
    await setDoc(doc(db, 'policy_ledger', 'tx_b'), { agencyId: 'AGENCY_B', status: 'issued' });
    await setDoc(doc(db, 'agencies', 'AGENCY_A'), { status: 'active', commissionRate: 0.1 });
    await setDoc(doc(db, 'agencies', 'AGENCY_B'), { status: 'active', commissionRate: 0.1 });
    await setDoc(doc(db, 'users', 'uA'), { role: 'agency_staff', agencyId: 'AGENCY_A', status: 'active' });
    await setDoc(doc(db, 'widgets', 'w_a'), { agencyId: 'AGENCY_A' });
    await setDoc(doc(db, 'widgets', 'w_b'), { agencyId: 'AGENCY_B' });
    await setDoc(doc(db, 'intelligence_records', 'pub'), { status: 'published' });
    await setDoc(doc(db, 'intelligence_records', 'draft'), { status: 'draft' });
  });
});

const staffA = () => env.authenticatedContext('uA', { role: 'agency_staff', agencyId: 'AGENCY_A' }).firestore();
const admin  = () => env.authenticatedContext('uAdmin', { role: 'admin' }).firestore();
const anon   = () => env.unauthenticatedContext().firestore();

describe('Isolation', () => {
  test('A: own ledger row readable (positive control)', () => assertSucceeds(getDoc(doc(staffA(), 'policy_ledger', 'tx_a'))));
  test('A: own agency readable (positive control)',     () => assertSucceeds(getDoc(doc(staffA(), 'agencies', 'AGENCY_A'))));
  test('A: other agency ledger row denied',             () => assertFails(getDoc(doc(staffA(), 'policy_ledger', 'tx_b'))));
  test('B: query forced to AGENCY_B denied',            () => assertFails(getDocs(query(collection(staffA(), 'policy_ledger'), where('agencyId', '==', 'AGENCY_B')))));
  test('B: unfiltered ledger list denied',              () => assertFails(getDocs(collection(staffA(), 'policy_ledger'))));
  test('B: query scoped to own agency allowed',         () => assertSucceeds(getDocs(query(collection(staffA(), 'policy_ledger'), where('agencyId', '==', 'AGENCY_A')))));
  test('A: other agency doc denied',                    () => assertFails(getDoc(doc(staffA(), 'agencies', 'AGENCY_B'))));
  test('widgets: own readable, other denied', async () => {
    await assertSucceeds(getDoc(doc(staffA(), 'widgets', 'w_a')));
    await assertFails(getDoc(doc(staffA(), 'widgets', 'w_b')));
  });
});

describe('Identity & writes', () => {
  test('C: client write to ledger denied',        () => assertFails(setDoc(doc(staffA(), 'policy_ledger', 'x'), { agencyId: 'AGENCY_A' })));
  test('C: client update of ledger row denied',   () => assertFails(updateDoc(doc(staffA(), 'policy_ledger', 'tx_a'), { status: 'voided' })));
  test('D: self role escalation denied',          () => assertFails(updateDoc(doc(staffA(), 'users', 'uA'), { role: 'admin' })));
  test('E: self agency reassignment denied',      () => assertFails(updateDoc(doc(staffA(), 'users', 'uA'), { agencyId: 'AGENCY_B' })));
  test('E: self status change denied',            () => assertFails(updateDoc(doc(staffA(), 'users', 'uA'), { status: 'active' })));
  test('agency staff cannot create agency',       () => assertFails(setDoc(doc(staffA(), 'agencies', 'new'), { status: 'active' })));
  test('agency staff cannot edit own commission', () => assertFails(updateDoc(doc(staffA(), 'agencies', 'AGENCY_A'), { commissionRate: 0.9 })));
  test('admin client writes denied (server-only)', async () => {
    const db = admin();
    await assertFails(setDoc(doc(db, 'users', 'uA'), { role: 'admin' }));
    await assertFails(updateDoc(doc(db, 'agencies', 'AGENCY_A'), { status: 'suspended' }));
    await assertFails(setDoc(doc(db, 'widgets', 'w_new'), { agencyId: 'AGENCY_A' }));
    await assertFails(deleteDoc(doc(db, 'policy_ledger', 'tx_a')));
  });
  test('F: unauthenticated denied', async () => {
    await assertFails(getDoc(doc(anon(), 'policy_ledger', 'tx_a')));
    await assertFails(getDoc(doc(anon(), 'users', 'uA')));
    await assertFails(getDoc(doc(anon(), 'agencies', 'AGENCY_A')));
  });
});

describe('Admin & Date Intelligence', () => {
  test('admin reads any ledger row', () => assertSucceeds(getDoc(doc(admin(), 'policy_ledger', 'tx_b'))));
  test('published intelligence public', () => assertSucceeds(getDoc(doc(anon(), 'intelligence_records', 'pub'))));
  test('draft hidden from anon and staff', async () => {
    await assertFails(getDoc(doc(anon(), 'intelligence_records', 'draft')));
    await assertFails(getDoc(doc(staffA(), 'intelligence_records', 'draft')));
  });
  test('admin reads draft', () => assertSucceeds(getDoc(doc(admin(), 'intelligence_records', 'draft'))));
  test('non-admin cannot write intelligence', () => assertFails(updateDoc(doc(staffA(), 'intelligence_records', 'pub'), { status: 'draft' })));
});
