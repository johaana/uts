/**
 * @fileOverview Authoritative Reconciliation Engine.
 * Verifies the exact physical rule counts at runtime.
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
  
  // Acceptence Targets
  const TARGETS = {
    CANONICAL_TOTAL: 458,
    HOLIDAYS: 294,
    STUDENTS: 56,
    REGIONAL: 35,
    STUDY_TIMING: 10,
    BUSINESS_POLICY: 12,
    CORPORATE_TRAVEL: 50
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

  if (counts.canonical_rules !== TARGETS.CANONICAL_TOTAL) {
    errors.push(`CANONICAL_TOTAL mismatch: Found ${counts.canonical_rules}, Expected ${TARGETS.CANONICAL_TOTAL}`);
  }
  if (counts.holidays !== TARGETS.HOLIDAYS) {
    errors.push(`HOLIDAYS count mismatch: Found ${counts.holidays}, Expected ${TARGETS.HOLIDAYS}`);
  }
  if (counts.students !== TARGETS.STUDENTS) {
    errors.push(`STUDENTS count mismatch: Found ${counts.students}, Expected ${TARGETS.STUDENTS}`);
  }
  if (counts.regional !== TARGETS.REGIONAL) {
    errors.push(`REGIONAL count mismatch: Found ${counts.regional}, Expected ${TARGETS.REGIONAL}`);
  }
  if (counts.study_timing !== TARGETS.STUDY_TIMING) {
    errors.push(`STUDY_TIMING count mismatch: Found ${counts.study_timing}, Expected ${TARGETS.STUDY_TIMING}`);
  }
  if (counts.business_policy !== TARGETS.BUSINESS_POLICY) {
    errors.push(`BUSINESS_POLICY count mismatch: Found ${counts.business_policy}, Expected ${TARGETS.BUSINESS_POLICY}`);
  }
  if (counts.corporate_travel !== TARGETS.CORPORATE_TRAVEL) {
    errors.push(`CORPORATE_TRAVEL count mismatch: Found ${counts.corporate_travel}, Expected ${TARGETS.CORPORATE_TRAVEL}`);
  }

  return {
    valid: errors.length === 0,
    timestamp: new Date().toISOString(),
    counts,
    errors
  };
}
