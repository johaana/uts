/**
 * @fileOverview Authoritative Data Integrity Gate.
 */
import { DateIntelligenceRecord } from './types';

export function validateCanonicalIndex(records: DateIntelligenceRecord[]): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (records.length < 50) {
    errors.push(`Record count critical failure: Found only ${records.length} records. Expected > 50 for authoritative index.`);
  }

  const countries = new Set(records.map(r => r.jurisdiction.country_code));
  if (countries.size < 4) {
    errors.push(`Jurisdiction critical failure: Found only ${countries.size} countries. Expected wide coverage.`);
  }

  // Provenance Check: No fabricated data allowed
  const fabricated = records.filter(r => r.evidence.source_name === "Official Authority");
  if (fabricated.length > 0) {
    errors.push(`${fabricated.length} records found with fabricated provenance defaults.`);
  }

  return {
    valid: errors.length === 0,
    errors
  };
}
