/**
 * @fileOverview Authoritative Data Integrity Gate.
 * Prevents build-time data loss and fabrication.
 */
import { DateIntelligenceRecord } from './types';

export function validateCanonicalIndex(records: DateIntelligenceRecord[]): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // 1. Count Gate: Verify basic volume for authoritative horizon
  if (records.length < 50) {
    errors.push(`Record count critical failure: Found only ${records.length} records. Expected > 50 for restored authoritative index.`);
  }

  // 2. Jurisdiction Gate: Verify country variety
  const countries = new Set(records.map(r => r.jurisdiction.country_code));
  if (countries.size < 5) {
    errors.push(`Jurisdiction critical failure: Found only ${countries.size} countries. Expected wide coverage.`);
  }

  // 3. Provenance Gate: No fabricated evidence allowed
  const fabricated = records.filter(r => !r.evidence.source_name || r.evidence.source_name === "Official Authority");
  if (fabricated.length > 0) {
    errors.push(`${fabricated.length} records found with missing or placeholder provenance.`);
  }

  return {
    valid: errors.length === 0,
    errors
  };
}
