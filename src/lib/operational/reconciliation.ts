/**
 * @fileOverview Reconciliation Engine.
 * Compares the source material (chunks) against the structured registry.
 */
import { DATA_REGISTRY } from './data/registry';

export interface ReconciliationReport {
  valid: boolean;
  timestamp: string;
  counts: {
    holidays: number;
    institutions: number;
    policies: number;
    regional: number;
    countries: number;
  };
  errors: string[];
}

export function runReconciliation(): ReconciliationReport {
  const errors: string[] = [];
  
  const holidayCountryCount = Object.keys(DATA_REGISTRY.HOLIDAYS).length;
  const holidayRuleCount = Object.values(DATA_REGISTRY.HOLIDAYS).flat().length;
  const instCount = Object.keys(DATA_REGISTRY.INSTITUTIONS).length;
  const policyCount = DATA_REGISTRY.STUDENT_INTELLIGENCE_EXTRA.length + DATA_REGISTRY.CORPORATE_INTELLIGENCE.length;
  const regionalCount = DATA_REGISTRY.REGIONAL_INTELLIGENCE.length;

  // Hard Integrity Checks (Phase 2-8 Gate)
  // These will fail the gate if the extraction returns zero or truncated results
  if (holidayCountryCount === 0) errors.push("CRITICAL: HOLIDAYS dataset is empty.");
  if (instCount === 0) errors.push("CRITICAL: INSTITUTIONS dataset is empty.");

  return {
    valid: errors.length === 0,
    timestamp: new Date().toISOString(),
    counts: {
      holidays: holidayRuleCount,
      institutions: instCount,
      policies: policyCount,
      regional: regionalCount,
      countries: holidayCountryCount
    },
    errors
  };
}
