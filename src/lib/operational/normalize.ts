/**
 * @fileOverview Normalization Layer for Structured Authoritative Data.
 */

import { CanonicalRule, HolidayRule } from './types';
import { DATA_REGISTRY } from './data/registry';
import { COUNTRY_LABELS } from '../calendar-intelligence';

export function getCanonicalRules(): CanonicalRule[] {
  const rules: CanonicalRule[] = [];

  // 1. Map Holiday Rules
  Object.entries(DATA_REGISTRY.HOLIDAYS).forEach(([cc, holidayRules]) => {
    holidayRules.forEach(rule => {
      rules.push({
        id: `RULE_${cc}_${rule.name.replace(/\s/g, '_')}`,
        name: rule.name,
        category: rule.type || 'holiday',
        jurisdiction: { country_code: cc, country_name: COUNTRY_LABELS[cc] || cc, scope: 'national' },
        purpose_relevance: ['travel', 'business', 'workforce', 'logistics', 'study'],
        temporal_kind: rule.kind === 'dated' && rule.status === 'estimated' ? 'estimated' : 'recurring',
        state: rule.status || 'confirmed',
        confidence: rule.confidence || 'listed',
        evidence: rule.evidence || { source_name: null, source_url: "" },
        rule_definition: rule,
        consequences: { implication: `${rule.name} is a ${rule.type}.`, affected_operations: ['government'], severity: 'medium' },
        source_dataset: 'HOLIDAYS'
      });
    });
  });

  // 2. Map Regional Intelligence
  DATA_REGISTRY.REGIONAL_INTELLIGENCE.forEach((obj: any) => {
    const cc = obj.jurisdiction?.country_code || obj.country;
    if (!cc) return;
    rules.push({
      ...obj,
      id: obj.id || `REG_${cc}_${obj.date}`,
      jurisdiction: { country_code: cc, country_name: COUNTRY_LABELS[cc] || cc, scope: 'regional', ...obj.jurisdiction },
      purpose_relevance: obj.purpose_relevance || ['travel'],
      temporal_kind: obj.temporal_kind || 'event',
      valid_from: obj.date || obj.valid_from,
      state: obj.state || 'confirmed',
      confidence: obj.confidence || 'listed',
      evidence: obj.evidence || { source_name: null, source_url: "" },
      source_dataset: 'REGIONAL_INTELLIGENCE'
    });
  });

  // 3. Map Student Policies
  DATA_REGISTRY.STUDENT_INTEL_EXTRA.forEach((policy: any) => {
    const cc = policy.jurisdiction?.country_code || policy.country;
    if (!cc) return;
    rules.push({
      ...policy,
      jurisdiction: { country_code: cc, country_name: COUNTRY_LABELS[cc] || cc, scope: 'national', ...policy.jurisdiction },
      purpose_relevance: ['study'],
      temporal_kind: policy.temporal_kind || 'standing',
      state: policy.state || 'confirmed',
      confidence: policy.confidence || 'high',
      source_dataset: 'STUDENT_INTEL_EXTRA'
    });
  });

  // 4. Map Study Timing
  DATA_REGISTRY.STUDY_INSTITUTIONAL_TIMING.forEach((obj: any) => {
    const cc = obj.jurisdiction?.country_code || obj.country;
    if (!cc) return;
    rules.push({
      ...obj,
      jurisdiction: { country_code: cc, country_name: COUNTRY_LABELS[cc] || cc, scope: 'institutional', ...obj.jurisdiction },
      purpose_relevance: ['study'],
      temporal_kind: obj.temporal_kind || 'event',
      state: obj.state || 'confirmed',
      source_dataset: 'STUDY_INSTITUTIONAL_TIMING'
    });
  });

  // 5. Map Business Policy
  DATA_REGISTRY.CORPORATE_INTELLIGENCE.forEach((obj: any) => {
    const cc = obj.jurisdiction?.country_code || obj.country;
    if (!cc) return;
    rules.push({
      ...obj,
      id: obj.id || `BIZ_${cc}_POLICY`,
      jurisdiction: { country_code: cc, country_name: COUNTRY_LABELS[cc] || cc, scope: 'national', ...obj.jurisdiction },
      purpose_relevance: ['business'],
      temporal_kind: 'standing',
      state: 'confirmed',
      source_dataset: 'CORPORATE_INTELLIGENCE'
    });
  });

  // 6. Map Corporate Travel
  DATA_REGISTRY.CORPORATE_TRAVEL_INTELLIGENCE_DATA.forEach((policy: any) => {
    rules.push({
      id: `CORP_${policy.country}_${policy.route?.replace(/\s/g, '_') || 'General'}`,
      name: `${policy.route || 'Business'} activity boundary`,
      category: 'business_travel',
      jurisdiction: { country_code: policy.country, country_name: COUNTRY_LABELS[policy.country] || policy.country, scope: 'national' },
      purpose_relevance: ['business'],
      temporal_kind: 'standing',
      state: 'confirmed',
      confidence: 'high',
      evidence: policy.evidence,
      consequences: {
        implication: `${policy.route}: Permitted activities include ${policy.business_activities?.join(', ') || 'meetings'}.`,
        affected_operations: ['entry'],
        severity: 'medium'
      },
      source_dataset: 'CORPORATE_TRAVEL_INTEL'
    });
  });

  // 7. Map Banking
  DATA_REGISTRY.BANKING_INTELLIGENCE_DATA.forEach((obj: any) => {
    rules.push({
      id: `BANK_${obj.country}_${obj.topic}`,
      name: `${obj.topic} policy`,
      category: 'banking',
      jurisdiction: { country_code: obj.country, country_name: COUNTRY_LABELS[obj.country] || obj.country, scope: 'national' },
      purpose_relevance: ['business', 'workforce'],
      temporal_kind: 'standing',
      state: 'confirmed',
      confidence: 'high',
      evidence: obj.evidence,
      consequences: { implication: obj.summary, affected_operations: ['banking'], severity: 'medium' },
      source_dataset: 'BANKING'
    });
  });

  // 8. Map Markets
  DATA_REGISTRY.CORPORATE_MARKET_DEPTH_ADDITIONS.forEach((obj: any) => {
    rules.push({
      id: `MARKET_${obj.country}_${obj.topic}`,
      name: `${obj.topic} trading rules`,
      category: 'market',
      jurisdiction: { country_code: obj.country, country_name: COUNTRY_LABELS[obj.country] || obj.country, scope: 'national' },
      purpose_relevance: ['business'],
      temporal_kind: 'standing',
      state: 'confirmed',
      confidence: 'high',
      evidence: obj.evidence,
      consequences: { implication: obj.summary, affected_operations: ['markets'], severity: 'medium' },
      source_dataset: 'MARKETS'
    });
  });

  return rules;
}
