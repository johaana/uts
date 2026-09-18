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
    student_risk: number;
    business_policy: number;
    corporate_travel: number;
    regional: number;
    study_timing: number;
    customs: number;
    banking: number;
    markets: number;
    expansion: number;
  };
  errors: string[];
}

export function runReconciliation(): ReconciliationReport {
  const errors: string[] = [];
  const rules = getCanonicalRules();
  
  // Measured Targets for Final Authoritative Restoration
  const TARGETS = {
    CANONICAL_TOTAL: 464,
    HOLIDAYS: 294,
    STUDENTS: 55,
    STUDENT_RISK: 1,
    REGIONAL: 35,
    STUDY_TIMING: 10,
    BUSINESS_POLICY: 12,
    CORPORATE_TRAVEL: 50,
    CUSTOMS: 1,
    BANKING: 3,
    MARKETS: 2,
    EXPANSION: 1
  };

  const counts = {
    canonical_rules: rules.length,
    jurisdictions: new Set(rules.map(r => r.jurisdiction.country_code)).size,
    holidays: rules.filter(r => r.source_dataset === 'HOLIDAYS').length,
    students: rules.filter(r => r.source_dataset === 'STUDENT_INTEL_EXTRA').length,
    student_risk: rules.filter(r => r.source_dataset === 'STUDENT_RISK').length,
    business_policy: rules.filter(r => r.source_dataset === 'CORPORATE_INTELLIGENCE').length,
    corporate_travel: rules.filter(r => r.source_dataset === 'CORPORATE_TRAVEL_INTEL').length,
    regional: rules.filter(r => r.source_dataset === 'REGIONAL_INTELLIGENCE').length,
    study_timing: rules.filter(r => r.source_dataset === 'STUDY_INSTITUTIONAL_TIMING').length,
    customs: rules.filter(r => r.source_dataset === 'CUSTOMS').length,
    banking: rules.filter(r => r.source_dataset === 'BANKING').length,
    markets: rules.filter(r => r.source_dataset === 'MARKETS').length,
    expansion: rules.filter(r => r.source_dataset === 'GLOBAL_EXPANSION').length
  };

  // 1. Verify exact counts derived from runtime array
  if (counts.canonical_rules !== TARGETS.CANONICAL_TOTAL) {
    errors.push(`CANONICAL_TOTAL mismatch: Found ${counts.canonical_rules}, Expected ${TARGETS.CANONICAL_TOTAL}`);
  }
  
  if (counts.holidays !== TARGETS.HOLIDAYS) {
    errors.push(`HOLIDAYS mismatch: Found ${counts.holidays}, Expected ${TARGETS.HOLIDAYS}`);
  }

  // 2. Enforce Zero-Generation Policy
  const syntheticID = rules.find(r => r.id.includes('STU_POLICY_') && r.jurisdiction.country_code === 'GLOBAL');
  if (syntheticID) {
    errors.push(`Zero-Generation failure: Found synthetic or placeholder record (${syntheticID.id}).`);
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
