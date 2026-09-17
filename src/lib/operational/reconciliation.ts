/**
 * @fileOverview Reconciliation Engine.
 * Compares the source material (chunks) against the structured registry.
 * 
 * BASELINE: 17-Chunk Corpus (A)
 */
import { DATA_REGISTRY } from './data/registry';

export interface ReconciliationReport {
  valid: boolean;
  timestamp: string;
  counts: {
    holidays: number;
    institutions: number;
    students: number;
    business: number;
    regional: number;
    study_timing: number;
    student_risk: number;
    countries: number;
  };
  errors: string[];
}

/**
 * Validates that 100% of records from the 17-chunk corpus are present.
 */
export function runReconciliation(): ReconciliationReport {
  const errors: string[] = [];
  
  // Exact counts from the 17-chunk extraction
  const EXPECTED = {
    HOLIDAYS: 294,
    COUNTRIES: 92,
    INSTITUTIONS: 65,
    STUDENTS: 56,
    BUSINESS: 12,
    REGIONAL: 35,
    STUDY_TIMING: 10,
    STUDENT_RISK: 1
  };

  const counts = {
    holidays: Object.values(DATA_REGISTRY.HOLIDAYS).flat().length,
    countries: Object.keys(DATA_REGISTRY.HOLIDAYS).length,
    institutions: Object.keys(DATA_REGISTRY.INSTITUTIONS).length,
    students: DATA_REGISTRY.STUDENT_INTELLIGENCE_EXTRA.length,
    business: DATA_REGISTRY.CORPORATE_INTELLIGENCE.length,
    regional: DATA_REGISTRY.REGIONAL_INTELLIGENCE.length,
    study_timing: DATA_REGISTRY.STUDY_INSTITUTIONAL_TIMING.length,
    student_risk: DATA_REGISTRY.STUDENT_RISK_DATA.length
  };

  // Integrity Checks
  if (counts.holidays !== EXPECTED.HOLIDAYS) errors.push(`HOLIDAYS mismatch: Expected ${EXPECTED.HOLIDAYS}, found ${counts.holidays}`);
  if (counts.countries !== EXPECTED.COUNTRIES) errors.push(`COUNTRIES mismatch: Expected ${EXPECTED.COUNTRIES}, found ${counts.countries}`);
  if (counts.institutions !== EXPECTED.INSTITUTIONS) errors.push(`INSTITUTIONS mismatch: Expected ${EXPECTED.INSTITUTIONS}, found ${counts.institutions}`);
  if (counts.students !== EXPECTED.STUDENTS) errors.push(`STUDENTS mismatch: Expected ${EXPECTED.STUDENTS}, found ${counts.students}`);
  if (counts.business !== EXPECTED.BUSINESS) errors.push(`BUSINESS mismatch: Expected ${EXPECTED.BUSINESS}, found ${counts.business}`);
  if (counts.regional !== EXPECTED.REGIONAL) errors.push(`REGIONAL mismatch: Expected ${EXPECTED.REGIONAL}, found ${counts.regional}`);
  if (counts.study_timing !== EXPECTED.STUDY_TIMING) errors.push(`STUDY_TIMING mismatch: Expected ${EXPECTED.STUDY_TIMING}, found ${counts.study_timing}`);
  if (counts.student_risk !== EXPECTED.STUDENT_RISK) errors.push(`STUDENT_RISK mismatch: Expected ${EXPECTED.STUDENT_RISK}, found ${counts.student_risk}`);

  return {
    valid: errors.length === 0,
    timestamp: new Date().toISOString(),
    counts,
    errors
  };
}
