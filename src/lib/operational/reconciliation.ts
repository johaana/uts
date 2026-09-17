
/**
 * @fileOverview Phase 3 Reconciliation Engine.
 * Verifies the 408 Rule Invariant.
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
    business: number;
    regional: number;
    study_timing: number;
  };
  errors: string[];
}

export function runReconciliation(): ReconciliationReport {
  const errors: string[] = [];
  const rules = getCanonicalRules();
  
  const EXPECTED = {
    CANONICAL_RULES: 408,
    JURISDICTIONS: 92,
    HOLIDAYS: 294,
    STUDENTS: 56,
    BUSINESS: 12,
    REGIONAL: 35,
    STUDY_TIMING: 10
  };

  const counts = {
    canonical_rules: rules.length,
    jurisdictions: new Set(rules.map(r => r.jurisdiction.country_code)).size,
    holidays: rules.filter(r => r.source_dataset === 'HOLIDAYS').length,
    students: rules.filter(r => r.source_dataset === 'STUDENT_INTEL_EXTRA').length,
    business: rules.filter(r => r.source_dataset === 'CORPORATE_INTELLIGENCE').length,
    regional: rules.filter(r => r.source_dataset === 'REGIONAL_INTELLIGENCE').length,
    study_timing: rules.filter(r => r.source_dataset === 'STUDY_INSTITUTIONAL_TIMING').length
  };

  if (counts.canonical_rules !== EXPECTED.CANONICAL_RULES) errors.push(`CANONICAL mismatch: Expected ${EXPECTED.CANONICAL_RULES}, found ${counts.canonical_rules}`);
  if (counts.jurisdictions !== EXPECTED.JURISDICTIONS) errors.push(`JURISDICTIONS mismatch: Expected ${EXPECTED.JURISDICTIONS}, found ${counts.jurisdictions}`);
  if (counts.holidays !== EXPECTED.HOLIDAYS) errors.push(`HOLIDAYS mismatch: Expected ${EXPECTED.HOLIDAYS}, found ${counts.holidays}`);
  if (counts.students !== EXPECTED.STUDENTS) errors.push(`STUDENTS mismatch: Expected ${EXPECTED.STUDENTS}, found ${counts.students}`);

  return {
    valid: errors.length === 0,
    timestamp: new Date().toISOString(),
    counts,
    errors
  };
}
