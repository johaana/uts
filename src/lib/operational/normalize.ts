/**
 * @fileOverview Normalization Layer for Structured Authoritative Data.
 * 
 * PHASE 3: Produces the 408 Canonical Rules Invariant.
 */

import { CanonicalRule, HolidayRule } from './types';
import { DATA_REGISTRY } from './data/registry';
import { COUNTRY_LABELS } from '../calendar-intelligence';

export function getCanonicalRules(): CanonicalRule[] {
  const rules: CanonicalRule[] = [];

  // 1. Map Holiday Rules (HOLIDAYS)
  Object.entries(DATA_REGISTRY.HOLIDAYS).forEach(([cc, holidayRules]) => {
    holidayRules.forEach(rule => {
      let defaultImplication = `${rule.name} is a ${rule.type === 'holiday' ? 'public holiday' : 'scheduled observance'}. Expect related operational shifts.`;
      
      // Content Precision: Targeted implications for Canada holidays
      if (cc === 'CA' && rule.type === 'holiday') {
        defaultImplication = `A Canadian public holiday. Government offices and some institutions may be closed or operate differently. Check the named organization if your meeting or service depends on it.`;
      }

      rules.push({
        id: `RULE_${cc}_${rule.name.replace(/\s/g, '_')}`,
        name: rule.name,
        category: rule.type || 'holiday',
        jurisdiction: {
          country_code: cc,
          country_name: COUNTRY_LABELS[cc] || cc,
          scope: 'national'
        },
        purpose_relevance: ['travel', 'business', 'workforce', 'logistics', 'study'],
        temporal_kind: rule.kind === 'dated' && rule.status === 'estimated' ? 'estimated' : 'recurring',
        state: rule.status || 'confirmed',
        confidence: rule.confidence || 'listed',
        evidence: rule.evidence || { source_name: null, source_url: "" },
        rule_definition: rule,
        consequences: {
          implication: defaultImplication,
          affected_operations: ['government', 'banking'],
          severity: 'medium'
        },
        source_label: (rule.type || 'holiday').toUpperCase(),
        source_dataset: 'HOLIDAYS'
      });
    });
  });

  // 2. Map Regional Intelligence
  DATA_REGISTRY.REGIONAL_INTELLIGENCE.forEach((obj: any) => {
    const countryCode = obj.jurisdiction?.country_code || obj.country;
    if (!countryCode) return;
    rules.push({
      ...obj,
      id: obj.id || `REG_${countryCode}_${obj.date}`,
      jurisdiction: {
        country_code: countryCode,
        country_name: COUNTRY_LABELS[countryCode] || countryCode,
        scope: 'regional',
        ...obj.jurisdiction
      },
      purpose_relevance: obj.purpose_relevance || ['travel'],
      temporal_kind: obj.valid_to ? 'period' : 'event',
      valid_from: obj.date || obj.valid_from,
      state: obj.state || 'confirmed',
      confidence: obj.confidence || 'listed',
      evidence: obj.evidence || { source_name: null, source_url: "" },
      source_label: 'REGIONAL',
      source_dataset: 'REGIONAL_INTELLIGENCE'
    });
  });

  // 3. Map Student Policies
  DATA_REGISTRY.STUDENT_INTELLIGENCE_EXTRA.forEach((policy: any) => {
    const countryCode = policy.jurisdiction?.country_code || policy.country;
    if (!countryCode) return;
    rules.push({
      ...policy,
      jurisdiction: {
        country_code: countryCode,
        country_name: COUNTRY_LABELS[countryCode] || countryCode,
        scope: 'national',
        ...policy.jurisdiction
      },
      purpose_relevance: ['study'],
      temporal_kind: 'standing',
      state: policy.state || 'confirmed',
      confidence: policy.confidence || 'high',
      evidence: policy.evidence || { source_name: null, source_url: "" },
      source_label: 'STUDENT POLICY',
      source_dataset: 'STUDENT_INTEL_EXTRA'
    });
  });

  // 4. Map Institutional Timing
  DATA_REGISTRY.STUDY_INSTITUTIONAL_TIMING.forEach((obj: any) => {
    const countryCode = obj.jurisdiction?.country_code || obj.country;
    if (!countryCode) return;
    rules.push({
      ...obj,
      jurisdiction: {
        country_code: countryCode,
        country_name: COUNTRY_LABELS[countryCode] || countryCode,
        scope: 'institutional',
        ...obj.jurisdiction
      },
      purpose_relevance: ['study'],
      temporal_kind: obj.valid_to ? 'period' : 'event',
      valid_from: obj.date || obj.valid_from,
      state: obj.state || 'confirmed',
      confidence: obj.confidence || 'medium',
      evidence: obj.evidence || { source_name: null, source_url: "" },
      source_label: 'ACADEMIC CALENDAR',
      source_dataset: 'STUDY_INSTITUTIONAL_TIMING'
    });
  });

  // 5. Map Business Policies (Corporate Intelligence)
  DATA_REGISTRY.CORPORATE_INTELLIGENCE.forEach((obj: any) => {
    const cc = obj.jurisdiction?.country_code || obj.country;
    if (!cc) return;
    rules.push({
        ...obj,
        jurisdiction: {
            country_code: cc,
            country_name: COUNTRY_LABELS[cc] || cc,
            scope: 'national',
            ...obj.jurisdiction
        },
        temporal_kind: 'standing',
        state: 'confirmed',
        confidence: 'high',
        source_label: 'BUSINESS POLICY',
        source_dataset: 'CORPORATE_INTELLIGENCE'
    });
  });

  // 6. Map Corporate Travel Intelligence (Activity Boundaries)
  DATA_REGISTRY.CORPORATE_TRAVEL_INTELLIGENCE_DATA.forEach((policy: any) => {
    rules.push({
      id: `BIZ_${policy.country}_BOUNDARY`,
      name: `Business visitor activity boundary`,
      category: 'business_travel',
      jurisdiction: {
        country_code: policy.country,
        country_name: COUNTRY_LABELS[policy.country] || policy.country,
        scope: 'national'
      },
      purpose_relevance: ['business'],
      temporal_kind: 'standing',
      state: 'confirmed',
      confidence: 'high',
      evidence: policy.evidence,
      consequences: {
        implication: `${policy.route}: Permitted activities include ${policy.permitted.join(', ')}. ${policy.work_boundary} ${policy.stay_rule}`,
        affected_operations: ['entry', 'work_auth'],
        severity: 'medium'
      },
      source_label: 'BUSINESS POLICY',
      source_dataset: 'CORPORATE_TRAVEL_INTEL'
    });
  });

  return rules;
}
