/**
 * @fileOverview Authoritative Data Integrity Gate.
 * Enforces record-level reconciliation standards.
 */
import { DateIntelligenceRecord } from './types';

export function validateRecord(record: DateIntelligenceRecord): { valid: boolean; error?: string } {
  if (!record.id || !record.date || !record.jurisdiction.country_code) {
    return { valid: false, error: "Missing core identity fields (id, date, country_code)." };
  }

  // Exempt genuinely unsourced regional signals, but require citation for verified institutional records
  const isExempt = record.confidence === 'unsourced' || record.confidence === 'listed' || record.jurisdiction.scope === 'regional';
  if (!isExempt && !record.evidence.source_name) {
    return { valid: false, error: "Missing source name on verified record." };
  }

  return { valid: true };
}

export function validateCanonicalIndex(records: DateIntelligenceRecord[]): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // RESTORED STRICT THRESHOLDS (Satisfied by Full Extraction)
  if (records.length < 200) {
    errors.push(`Record count critical failure: Found only ${records.length} records. Expected > 200 for structured index.`);
  }

  const countries = new Set(records.map(r => r.jurisdiction.country_code));
  if (countries.size < 50) {
    errors.push(`Jurisdiction critical failure: Found only ${countries.size} countries. Dataset appears truncated.`);
  }

  records.forEach(r => {
    const v = validateRecord(r);
    if (!v.valid) {
      errors.push(`Record ${r.id} failed validation: ${v.error}`);
    }
  });

  return { valid: errors.length === 0, errors };
}
