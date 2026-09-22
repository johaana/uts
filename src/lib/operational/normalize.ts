/**
 * @fileOverview Normalization Layer.
 * Enforces strict honesty: no fallbacks for purpose or provenance.
 */

import { CanonicalRule, HolidayRule, SourceEvidence } from './types';
import { DATA_REGISTRY } from './data/registry';
import { COUNTRY_LABELS } from '../calendar-intelligence';
import { expandRecurrence } from './engine';

function validateProvenance(rule: any) {
  if (rule.confidence && rule.confidence !== 'unsourced') {
    if (!rule.evidence || !rule.evidence.source_url) {
      throw new Error(`CRITICAL: Record ${rule.id || rule.name} has ${rule.confidence} confidence but lacks a mandatory source_url.`);
    }
  }
}

export function getCanonicalRules(): CanonicalRule[] {
  const rules: CanonicalRule[] = [];
  const years = [2026];

  // 1. Holidays
  Object.entries(DATA_REGISTRY.HOLIDAYS).forEach(([cc, holidayRules]) => {
    holidayRules.forEach(rule => {
      years.forEach(year => {
        const date = expandRecurrence(rule, year);
        if (!date) return;

        if (!rule.purpose_relevance) {
          throw new Error(`CRITICAL: Holiday ${rule.name} in ${cc} missing purpose_relevance.`);
        }
        validateProvenance(rule);

        rules.push({
          id: `RULE_${cc}_${rule.name.replace(/\s+/g, '_')}_${date}`,
          name: rule.name,
          category: rule.type || 'holiday',
          jurisdiction: { country_code: cc, country_name: COUNTRY_LABELS[cc] || cc, scope: 'national' },
          purpose_relevance: rule.purpose_relevance,
          temporal_kind: 'recurring',
          state: rule.status || 'confirmed',
          confidence: rule.confidence || 'unsourced',
          evidence: rule.evidence || { source_name: null, source_url: "" },
          rule_definition: rule,
          date,
          consequences: { 
            implication: `${rule.name} is a ${rule.type}.`, 
            affected_operations: ['government'], 
            severity: 'medium' 
          }
        } as any);
      });
    });
  });

  // 2. Operational Datasets
  const datasets = [
    { name: 'REGIONAL', data: DATA_REGISTRY.REGIONAL_INTELLIGENCE },
    { name: 'STUDENTS', data: DATA_REGISTRY.STUDENT_INTEL_EXTRA },
    { name: 'STUDY', data: DATA_REGISTRY.STUDY_INSTITUTIONAL_TIMING },
    { name: 'BUSINESS', data: DATA_REGISTRY.CORPORATE_INTELLIGENCE },
    { name: 'CORPORATE_TRAVEL', data: DATA_REGISTRY.CORPORATE_TRAVEL_INTELLIGENCE_DATA },
    { name: 'BANKING', data: DATA_REGISTRY.BANKING_INTELLIGENCE_DATA },
    { name: 'MARKETS', data: DATA_REGISTRY.CORPORATE_MARKET_DEPTH_ADDITIONS },
    { name: 'CUSTOMS', data: DATA_REGISTRY.CUSTOMS_INTELLIGENCE_DATA },
    { name: 'RISK', data: DATA_REGISTRY.STUDENT_RISK_DATA },
    { name: 'GLOBAL', data: DATA_REGISTRY.OPERATIONAL_GLOBAL_EXPANSION }
  ];

  datasets.forEach(set => {
    set.data.forEach((obj: any) => {
      if (!obj.purpose_relevance) {
        throw new Error(`CRITICAL: Record ${obj.id || obj.name} in ${set.name} missing purpose_relevance.`);
      }
      validateProvenance(obj);
      rules.push(obj as any);
    });
  });

  return rules;
}
