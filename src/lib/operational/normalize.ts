/**
 * @fileOverview Normalization Layer.
 * Hardened deterministic identity and dataset provenance.
 */

import { CanonicalRule, HolidayRule } from './types';
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

/**
 * Generates a stable, deterministic ID for a rule based on its core definition.
 * Decouples identity from array position.
 */
function generateRuleId(cc: string, rule: HolidayRule): string {
  const cleanName = rule.name.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '');
  let fingerprint = rule.kind as string;
  
  if (rule.kind === 'fixed') {
    fingerprint += `_${rule.month}_${rule.day}`;
  } else if (rule.kind === 'nth') {
    fingerprint += `_${rule.month}_${rule.dow}_${rule.n}`;
  } else if (rule.kind === 'easter') {
    fingerprint += `_${rule.offset || 0}`;
  } else if (rule.kind === 'dated' && rule.dates) {
    const firstYear = Object.keys(rule.dates).sort()[0] || 'pending';
    fingerprint += `_${firstYear}`;
  }

  return `RULE_${cc}_${cleanName}_${fingerprint}`;
}

export function getCanonicalRules(): CanonicalRule[] {
  const rules: CanonicalRule[] = [];

  // 1. Holidays
  Object.entries(DATA_REGISTRY.HOLIDAYS).forEach(([cc, holidayRules]) => {
    holidayRules.forEach((rule) => {
      const rule_id = generateRuleId(cc, rule);
      
      // Determination of canonical anchor (Zero-loss preservation for 2027-only rules)
      let date = expandRecurrence(rule, 2026);
      if (!date && rule.kind === 'dated' && rule.dates) {
        const availableDates = Object.values(rule.dates);
        if (availableDates.length > 0) {
          date = availableDates[0];
        }
      }

      if (!date) return;

      if (!rule.purpose_relevance) {
        throw new Error(`CRITICAL: Holiday ${rule.name} in ${cc} missing purpose_relevance.`);
      }
      validateProvenance(rule);

      rules.push({
        id: `${rule_id}__CANONICAL`, 
        rule_id,
        source_dataset: 'HOLIDAYS',
        name: rule.name,
        category: rule.type || 'holiday',
        jurisdiction: { country_code: cc, country_name: COUNTRY_LABELS[cc] || cc, scope: 'national' },
        purpose_relevance: rule.purpose_relevance,
        temporal_kind: rule.kind === 'dated' ? 'event' : 'recurring',
        state: rule.status || 'confirmed',
        confidence: rule.confidence || 'unsourced',
        evidence: rule.evidence || { source_name: null, source_url: "" },
        rule_definition: rule,
        date,
        consequences: { 
          implication: `${rule.name} is a ${rule.type === 'public' ? 'public holiday' : rule.type}.`, 
          affected_operations: ['government'], 
          severity: 'medium' 
        }
      });
    });
  });

  // 2. Operational Datasets
  const datasets = [
    { name: 'REGIONAL_INTELLIGENCE', data: DATA_REGISTRY.REGIONAL_INTELLIGENCE },
    { name: 'STUDENT_INTEL_EXTRA', data: DATA_REGISTRY.STUDENT_INTEL_EXTRA },
    { name: 'STUDY_INSTITUTIONAL_TIMING', data: DATA_REGISTRY.STUDY_INSTITUTIONAL_TIMING },
    { name: 'CORPORATE_INTELLIGENCE', data: DATA_REGISTRY.CORPORATE_INTELLIGENCE },
    { name: 'CORPORATE_TRAVEL_INTEL', data: DATA_REGISTRY.CORPORATE_TRAVEL_INTELLIGENCE_DATA },
    { name: 'BANKING', data: DATA_REGISTRY.BANKING_INTELLIGENCE_DATA },
    { name: 'MARKETS', data: DATA_REGISTRY.CORPORATE_MARKET_DEPTH_ADDITIONS },
    { name: 'CUSTOMS', data: DATA_REGISTRY.CUSTOMS_INTELLIGENCE_DATA },
    { name: 'STUDENT_RISK', data: DATA_REGISTRY.STUDENT_RISK_DATA },
    { name: 'GLOBAL_EXPANSION', data: DATA_REGISTRY.OPERATIONAL_GLOBAL_EXPANSION }
  ];

  datasets.forEach(set => {
    if (!set.data) return;
    set.data.forEach((obj: any) => {
      if (obj && !obj.jurisdiction && obj.country) {
        obj.jurisdiction = {
          country_code: obj.country,
          country_name: COUNTRY_LABELS[obj.country] || obj.country,
          scope: 'national'
        };
      }

      if (!obj.jurisdiction) {
        throw new Error(`CRITICAL: Record ${obj.id || obj.name} in ${set.name} missing jurisdiction.`);
      }

      if (!obj.purpose_relevance) {
        throw new Error(`CRITICAL: Record ${obj.id || obj.name} in ${set.name} missing purpose_relevance.`);
      }
      validateProvenance(obj);
      
      const rule_id = obj.id || obj.name;
      rules.push({
        ...obj,
        rule_id,
        source_dataset: set.name
      });
    });
  });

  return rules;
}
