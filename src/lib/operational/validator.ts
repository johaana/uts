/**
 * @fileOverview Authoritative Data Integrity Gate.
 * Enforces record-level reconciliation standards.
 */
import { DateIntelligenceRecord } from './types';

export function validateRecord(record: DateIntelligenceRecord): { valid: boolean; error?: string } {
  if (!record.id || !record.date || !record.jurisdiction?.country_code) {
    return { valid: false, error: "Missing core identity fields (id, date, country_code)." };
  }

  // Allow 'listed' or 'unsourced' records (regional signals) to pass without source_name
  const isExempt = record.confidence === 'unsourced' || record.confidence === 'listed' || record.jurisdiction.scope === 'regional' || record.category === 'institutional';
  if (!isExempt && !record.evidence?.source_name) {
    return { valid: false, error: `Missing source name on verified record (${record.id}).` };
  }

  return { valid: true };
}

export function validateCanonicalIndex(records: DateIntelligenceRecord[]): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // 1. Threshold checks (Sanity)
  if (records.length < 900) {
    errors.push(`Record count critical failure: Found only ${records.length} records. Expected > 900 date instances for Corpus A.`);
  }

  const countries = new Set(records.map(r => r.jurisdiction?.country_code).filter(Boolean));
  if (countries.size < 92) {
    errors.push(`Jurisdiction critical failure: Found only ${countries.size} countries. Expected 92 from Corpus A.`);
  }

  // 2. Individual record validation
  records.forEach(r => {
    const v = validateRecord(r);
    if (!v.valid) {
      errors.push(`Record ${r.id} failed validation: ${v.error}`);
    }
  });

  return { valid: errors.length === 0, errors };
}
