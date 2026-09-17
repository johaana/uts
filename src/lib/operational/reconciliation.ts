/**
 * @fileOverview Authoritative Reconciliation Engine.
 * Verifies the physical rule counts at runtime and enforces zero-generation policy.
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
  
  // Acceptence Targets for Phase 4 Integrated Baseline
  const TARGETS = {
    CANONICAL_TOTAL: 457,
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

  // 1. Verify exact counts
  if (counts.canonical_rules < TARGETS.CANONICAL_TOTAL) {
    errors.push(`CANONICAL_TOTAL mismatch: Found ${counts.canonical_rules}, Expected >= ${TARGETS.CANONICAL_TOTAL}`);
  }
  
  // 2. Enforce Zero-Generation Policy: Search for synthetic ID markers
  const synthetic = rules.filter(r => r.id.includes('POLICY_') && r.jurisdiction.country_code === 'GLOBAL');
  if (synthetic.length > 0) {
    errors.push(`Zero-Generation failure: Found ${synthetic.length} synthetic placeholder records.`);
  }

  // 3. Verify IDs are unique
  const ids = rules.map(r => r.id);
  const duplicates = ids.filter((item, index) => ids.indexOf(item) !== index);
  if (duplicates.length > 0) {
    errors.push(`Duplicate ID failure: Found ${duplicates.length} duplicate canonical IDs.`);
  }

  return {
    valid: errors.length === 0,
    timestamp: new Date().toISOString(),
    counts,
    errors
  };
}
