/**
 * @fileOverview Normalization Layer.
 * Hardened deterministic identity and dataset provenance with Option C advice support.
 */

import { CanonicalRule, HolidayRule, UserPurpose } from './types';
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
      
      let date = expandRecurrence(rule, 2026);
      if (!date && rule.kind === 'dated' && rule.dates) {
        const availableDates = Object.values(rule.dates);
        if (availableDates.length > 0) date = availableDates[0];
      }

      if (!date) return;
      validateProvenance(rule);

      const displayType = rule.type === 'public' || rule.type === 'holiday' ? 'National Holiday' : 
                          rule.type === 'religious' ? 'Religious Holiday' : 
                          rule.type;

      const defaultAdvice = `${rule.name} is observed in ${COUNTRY_LABELS[cc] || cc}, which may affect public services and working hours.`;

      rules.push({
        id: `${rule_id}__CANONICAL`, 
        rule_id,
        source_dataset: 'HOLIDAYS',
        name: rule.name,
        category: rule.type || 'holiday',
        jurisdiction: { country_code: cc, country_name: COUNTRY_LABELS[cc] || cc, scope: 'national' },
        purpose_relevance: rule.purpose_relevance || ["travel", "business", "study"],
        temporal_kind: 'recurring',
        state: rule.status || 'confirmed',
        confidence: rule.confidence || 'unsourced',
        evidence: rule.evidence || { source_name: null, source_url: "" },
        rule_definition: rule,
        date,
        consequences: { 
          implication: `${rule.name} is a ${displayType}.`, 
          advice: rule.advice || {
            traveler: defaultAdvice,
            study: defaultAdvice,
            corporate: defaultAdvice
          },
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

      if (!obj.jurisdiction || !obj.purpose_relevance) return;
      validateProvenance(obj);
      
      const rule_id = obj.id || obj.name;
      
      // Map legacy 'summary' or 'implication' to Option C advice structure
      const baseText = obj.summary || obj.consequences?.implication || `${obj.name} policy is in effect.`;
      const advice = obj.consequences?.advice || {
        traveler: baseText,
        study: baseText,
        corporate: baseText
      };

      rules.push({
        ...obj,
        rule_id,
        source_dataset: set.name,
        consequences: {
          implication: baseText,
          advice,
          affected_operations: obj.consequences?.affected_operations || ['admin'],
          severity: obj.consequences?.severity || 'low'
        }
      });
    });
  });

  return rules;
}
