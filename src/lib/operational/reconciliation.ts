/**
 * @fileOverview Authoritative Reconciliation Tool.
 * Reports actual runtime measurements against authoritative source baseline.
 */
import { getCanonicalRules } from './normalize';
import { DATA_REGISTRY } from './data/registry';

export interface ReconciliationReport {
  timestamp: string;
  measured: {
    physical_holiday_records: number;
    runtime_holiday_rules: number;
    student_policy: number;
    student_risk: number;
    regional: number;
    study: number;
    business: number;
    corporate_travel: number;
    customs: number;
    banking: number;
    markets: number;
    global_expansion: number;
    total_runtime_rules: number;
    unique_ids: number;
    duplicate_ids: number;
    jurisdictions: number;
  };
  status: 'PASS' | 'FAIL';
  errors: string[];
}

export function runReconciliation(): ReconciliationReport {
  const rules = getCanonicalRules();
  const errors: string[] = [];
  
  // Physical count of constructor calls in holidays.ts across all country keys
  const physicalHolidays = Object.values(DATA_REGISTRY.HOLIDAYS).reduce((acc, curr) => acc + curr.length, 0);

  const measured = {
    physical_holiday_records: physicalHolidays,
    runtime_holiday_rules: rules.filter(r => r.source_dataset === 'HOLIDAYS').length,
    student_policy: rules.filter(r => r.source_dataset === 'STUDENT_INTEL_EXTRA').length,
    student_risk: rules.filter(r => r.source_dataset === 'STUDENT_RISK').length,
    regional: rules.filter(r => r.source_dataset === 'REGIONAL_INTELLIGENCE').length,
    study: rules.filter(r => r.source_dataset === 'STUDY_INSTITUTIONAL_TIMING').length,
    business: rules.filter(r => r.source_dataset === 'CORPORATE_INTELLIGENCE').length,
    corporate_travel: rules.filter(r => r.source_dataset === 'CORPORATE_TRAVEL_INTEL').length,
    customs: rules.filter(r => r.source_dataset === 'CUSTOMS').length,
    banking: rules.filter(r => r.source_dataset === 'BANKING').length,
    markets: rules.filter(r => r.source_dataset === 'MARKETS').length,
    global_expansion: rules.filter(r => r.source_dataset === 'GLOBAL_EXPANSION').length,
    total_runtime_rules: rules.length,
    unique_ids: new Set(rules.map(r => r.id)).size,
    duplicate_ids: rules.length - new Set(rules.map(r => r.id)).size,
    jurisdictions: new Set(rules.map(r => r.jurisdiction.country_code)).size
  };

  // Invariant validation
  if (measured.duplicate_ids > 0) errors.push(`Duplicate ID failure: Found ${measured.duplicate_ids} collisions.`);
  if (measured.physical_holiday_records !== 381) errors.push(`Holiday count mismatch: Found ${measured.physical_holiday_records}, Expected 381.`);
  if (measured.corporate_travel !== 50) errors.push(`Corporate travel mismatch: Found ${measured.corporate_travel}, Expected 50.`);

  return {
    timestamp: new Date().toISOString(),
    measured,
    status: errors.length === 0 ? 'PASS' : 'FAIL',
    errors
  };
}
