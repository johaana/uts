/**
 * @fileOverview Authoritative Reconciliation Engine.
 * Verifies the 458-rule canonical invariant.
 */
import { getCanonicalRules } from './normalize';

export interface ReconciliationReport {
  valid: boolean;
  timestamp: string;
  counts: {
    canonical_rules: number;
    jurisdictions: number;
    holidays: number;
    students: number;
    business_policy: number;
    corporate_travel: number;
    regional: number;
    study_timing: number;
    banking: number;
    markets: number;
  };
  errors: string[];
}

export function runReconciliation(): ReconciliationReport {
  const errors: string[] = [];
  const rules = getCanonicalRules();
  
  const EXPECTED = {
    CANONICAL_RULES: 458,
    JURISDICTIONS: 92,
    HOLIDAYS: 294,
    STUDENTS: 56,
    REGIONAL: 35,
    STUDY_TIMING: 10,
    CORP_TRAVEL: 50,
    BIZ_POLICY: 12,
    BANKING: 1
  };

  const counts = {
    canonical_rules: rules.length,
    jurisdictions: new Set(rules.map(r => r.jurisdiction.country_code)).size,
    holidays: rules.filter(r => r.source_dataset === 'HOLIDAYS').length,
    students: rules.filter(r => r.source_dataset === 'STUDENT_INTEL_EXTRA').length,
    business_policy: rules.filter(r => r.source_dataset === 'CORPORATE_INTELLIGENCE').length,
    corporate_travel: rules.filter(r => r.source_dataset === 'CORPORATE_TRAVEL_INTEL').length,
    regional: rules.filter(r => r.source_dataset === 'REGIONAL_INTELLIGENCE').length,
    study_timing: rules.filter(r => r.source_dataset === 'STUDY_INSTITUTIONAL_TIMING').length,
    banking: rules.filter(r => r.source_dataset === 'BANKING').length,
    markets: rules.filter(r => r.source_dataset === 'MARKETS').length
  };

  if (counts.canonical_rules !== EXPECTED.CANONICAL_RULES) errors.push(`CANONICAL mismatch: Found ${counts.canonical_rules}, Expected ${EXPECTED.CANONICAL_RULES}`);
  if (counts.holidays !== EXPECTED.HOLIDAYS) errors.push(`HOLIDAYS mismatch: Found ${counts.holidays}, Expected ${EXPECTED.HOLIDAYS}`);
  if (counts.students !== EXPECTED.STUDENTS) errors.push(`STUDENTS mismatch: Found ${counts.students}, Expected ${EXPECTED.STUDENTS}`);
  if (counts.corporate_travel !== EXPECTED.CORP_TRAVEL) errors.push(`CORP_TRAVEL mismatch: Found ${counts.corporate_travel}, Expected ${EXPECTED.CORP_TRAVEL}`);
  if (counts.regional !== EXPECTED.REGIONAL) errors.push(`REGIONAL mismatch: Found ${counts.regional}, Expected ${EXPECTED.REGIONAL}`);
  if (counts.study_timing !== EXPECTED.STUDY_TIMING) errors.push(`STUDY_TIMING mismatch: Found ${counts.study_timing}, Expected ${EXPECTED.STUDY_TIMING}`);

  return {
    valid: errors.length === 0,
    timestamp: new Date().toISOString(),
    counts,
    errors
  };
}
