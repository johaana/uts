/**
 * @fileOverview Phase 4 Reconciliation Engine.
 * Verifies the True Corpus A Baseline.
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
  };
  errors: string[];
}

export function runReconciliation(): ReconciliationReport {
  const errors: string[] = [];
  const rules = getCanonicalRules();
  
  const EXPECTED = {
    CANONICAL_RULES: 458, // 408 patterns + 50 corporate travel records
    JURISDICTIONS: 92,
    HOLIDAYS: 294,
    STUDENTS: 56,
    BUSINESS_POLICY: 12,
    CORPORATE_TRAVEL: 50,
    REGIONAL: 35,
    STUDY_TIMING: 10
  };

  const counts = {
    canonical_rules: rules.length,
    jurisdictions: new Set(rules.map(r => r.jurisdiction.country_code)).size,
    holidays: rules.filter(r => r.source_dataset === 'HOLIDAYS').length,
    students: rules.filter(r => r.source_dataset === 'STUDENT_INTEL_EXTRA').length,
    business_policy: rules.filter(r => r.source_dataset === 'CORPORATE_INTELLIGENCE').length,
    corporate_travel: rules.filter(r => r.source_dataset === 'CORPORATE_TRAVEL_INTEL').length,
    regional: rules.filter(r => r.source_dataset === 'REGIONAL_INTELLIGENCE').length,
    study_timing: rules.filter(r => r.source_dataset === 'STUDY_INSTITUTIONAL_TIMING').length
  };

  if (counts.canonical_rules !== EXPECTED.CANONICAL_RULES) errors.push(`CANONICAL mismatch: Expected ${EXPECTED.CANONICAL_RULES}, found ${counts.canonical_rules}`);
  if (counts.holidays !== EXPECTED.HOLIDAYS) errors.push(`HOLIDAYS mismatch: Expected ${EXPECTED.HOLIDAYS}, found ${counts.holidays}`);
  if (counts.students !== EXPECTED.STUDENTS) errors.push(`STUDENTS mismatch: Expected ${EXPECTED.STUDENTS}, found ${counts.students}`);
  if (counts.corporate_travel !== EXPECTED.CORPORATE_TRAVEL) errors.push(`CORPORATE_TRAVEL mismatch: Expected ${EXPECTED.CORPORATE_TRAVEL}, found ${counts.corporate_travel}`);
  if (counts.regional !== EXPECTED.REGIONAL) errors.push(`REGIONAL mismatch: Expected ${EXPECTED.REGIONAL}, found ${counts.regional}`);
  if (counts.study_timing !== EXPECTED.STUDY_TIMING) errors.push(`STUDY_TIMING mismatch: Expected ${EXPECTED.STUDY_TIMING}, found ${counts.study_timing}`);

  return {
    valid: errors.length === 0,
    timestamp: new Date().toISOString(),
    counts,
    errors
  };
}
