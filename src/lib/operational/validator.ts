/**
 * @fileOverview Authoritative Data Integrity Gate.
 * Prevents build-time data loss and fabrication.
 */
import { DateIntelligenceRecord } from './types';

/**
 * Validates a single record for structural and provenance integrity.
 */
export function validateRecord(record: DateIntelligenceRecord): { valid: boolean; error?: string } {
  // 1. Core Fields
  if (!record.id || !record.date || !record.jurisdiction.country_code) {
    return { valid: false, error: "Missing core identity fields (id, date, country_code)." };
  }

  // 2. Provenance Integrity
  // UNSOURCED EXEMPTION: Regional signals with 'unsourced' or 'listed' confidence are exempt from naming a source.
  const isExempt = record.confidence === 'unsourced' || record.confidence === 'listed' || record.jurisdiction.scope === 'regional';
  
  if (!isExempt && (!record.evidence.source_name || record.evidence.source_name.includes("Official Authority"))) {
    return { valid: false, error: "Missing or placeholder source name on verified record." };
  }

  return { valid: true };
}

/**
 * Validates the entire canonical index against authoritative thresholds.
 */
export function validateCanonicalIndex(records: DateIntelligenceRecord[]): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // 1. Volume Gate
  // For the current restored dataset from chunks, we expect > 50 records.
  if (records.length < 50) {
    errors.push(`Record count critical failure: Found only ${records.length} records. Expected > 50 for restored authoritative index.`);
  }

  // 2. Jurisdiction Variety
  const countries = new Set(records.map(r => r.jurisdiction.country_code));
  if (countries.size < 5) {
    errors.push(`Jurisdiction critical failure: Found only ${countries.size} countries. Dataset appears truncated.`);
  }

  // 3. Record-level audit
  records.forEach(r => {
    const v = validateRecord(r);
    if (!v.valid) {
      errors.push(`Record ${r.id} failed validation: ${v.error}`);
    }
  });

  return {
    valid: errors.length === 0,
    errors
  };
}
