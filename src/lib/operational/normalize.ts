/**
 * @fileOverview Normalization Layer for Structured Authoritative Data.
 */
import { DateIntelligenceRecord } from './types';
import { DATA_REGISTRY } from './data/registry';
import { evaluateRule } from './engine';
import { COUNTRY_LABELS } from '../calendar-intelligence';

export function getCanonicalRecords(): DateIntelligenceRecord[] {
  const records: DateIntelligenceRecord[] = [];
  // Expanded window to ensure > 900 date instances from the 17-chunk pattern set.
  const years = [2024, 2025, 2026, 2027, 2028, 2029, 2030];

  // 1. Expand Holiday Rules (HOLIDAYS)
  Object.entries(DATA_REGISTRY.HOLIDAYS).forEach(([cc, rules]) => {
    rules.forEach(rule => {
      years.forEach(year => {
        const date = evaluateRule(rule, year);
        if (date) {
          records.push({
            id: `EVT_${cc}_${date}_${rule.name.replace(/\s/g, '_')}`,
            date,
            name: rule.name,
            category: rule.type || 'holiday',
            jurisdiction: {
              country_code: cc,
              country_name: COUNTRY_LABELS[cc] || cc,
              scope: 'national'
            },
            purpose_relevance: ['travel', 'business', 'workforce', 'logistics', 'study'],
            state: rule.status || 'confirmed',
            confidence: rule.confidence || 'listed',
            evidence: rule.evidence || { source_name: null, source_url: "" },
            consequences: {
              implication: `${rule.name} is a ${rule.type === 'holiday' ? 'public holiday' : 'scheduled observance'}. Expect related operational shifts.`,
              affected_operations: ['government', 'banking'],
              severity: 'medium'
            },
            source_label: (rule.type || 'holiday').toUpperCase(),
            source_dataset: 'HOLIDAYS',
            temporal_kind: rule.status === 'estimated' ? 'estimated' : 'recurring'
          });
        }
      });
    });
  });

  // 2. Map Regional Intelligence
  DATA_REGISTRY.REGIONAL_INTELLIGENCE.forEach((obj: any) => {
    const countryCode = obj.jurisdiction?.country_code || obj.country;
    if (!countryCode) return;
    records.push({
      ...obj,
      id: obj.id || `REG_${countryCode}_${obj.date}`,
      jurisdiction: {
        country_code: countryCode,
        country_name: COUNTRY_LABELS[countryCode] || countryCode,
        scope: 'regional',
        ...obj.jurisdiction
      },
      purpose_relevance: obj.purpose_relevance || ['travel'],
      temporal_kind: 'event',
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
    records.push({
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
    records.push({
      ...obj,
      jurisdiction: {
        country_code: countryCode,
        country_name: COUNTRY_LABELS[countryCode] || countryCode,
        scope: 'institutional',
        ...obj.jurisdiction
      },
      purpose_relevance: ['study'],
      temporal_kind: 'event',
      state: obj.state || 'confirmed',
      confidence: obj.confidence || 'medium',
      evidence: obj.evidence || { source_name: null, source_url: "" },
      source_label: 'ACADEMIC CALENDAR',
      source_dataset: 'STUDY_INSTITUTIONAL_TIMING'
    });
  });

  return records;
}
