'use server';
/**
 * @fileOverview Administrative Server Actions for Date Intelligence
 * Implements strict claim verification and Admin SDK writes.
 */

import { adminDb, verifySession, getAuthoritativeUser } from '@/lib/server/admin';
import { FieldValue } from 'firebase-admin/firestore';
import { getCanonicalRules } from '@/lib/operational/normalize';

async function requireAdmin(token: string) {
  const d = await verifySession(token);
  if (d.role !== 'admin') throw new Error('UNAUTHORIZED');
  const u = await getAuthoritativeUser(d.uid);
  if (u.role !== 'admin' || u.status !== 'active') throw new Error('UNAUTHORIZED');
  return d.uid;
}

const clean = (o: any): any => {
  if (o === undefined) return null;
  if (o === null || typeof o !== 'object') return o;
  if (Array.isArray(o)) return o.map(clean);
  return Object.fromEntries(
    Object.entries(o)
      .filter(([, v]) => v !== undefined)
      .map(([k, v]) => [k, clean(v)])
  );
};

export async function listDrafts(token: string) {
  await requireAdmin(token);
  const snap = await adminDb.collection('intelligence_records')
    .where('status', '==', 'draft')
    .get();
  
  return JSON.parse(JSON.stringify(
    snap.docs.map(d => ({ firestoreId: d.id, ...d.data() }))
  ));
}

export async function publishRecord(token: string, firestoreId: string) {
  const uid = await requireAdmin(token);
  const ref = adminDb.collection('intelligence_records').doc(firestoreId);
  const snap = await ref.get();
  
  if (!snap.exists || snap.data()?.status !== 'draft') {
    throw new Error('VALIDATION_ERROR: Record not found or not in draft status.');
  }

  await ref.update({
    status: 'published',
    publishedBy: uid,
    updatedAt: FieldValue.serverTimestamp(),
  });
  return { success: true };
}

export async function syncCanonical(token: string) {
  await requireAdmin(token);
  const rules = getCanonicalRules();
  
  // Batch processing for large datasets
  for (let i = 0; i < rules.length; i += 400) {
    const batch = adminDb.batch();
    rules.slice(i, i + 400).forEach((r: any) => {
      const docRef = adminDb.collection('intelligence_records').doc(r.rule_id);
      batch.set(docRef, clean({ ...r, status: 'published' }), { merge: true });
    });
    await batch.commit();
  }
  
  return { success: true, count: rules.length };
}