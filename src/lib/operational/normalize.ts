/**
 * @fileOverview Normalization Layer for Structured Authoritative Data.
 */
import { DateIntelligenceRecord, HolidayRule, UserPurpose } from './types';
import { DATA_REGISTRY } from './data/registry';
import { evaluateRule } from './engine';
import { COUNTRY_LABELS } from '../calendar-intelligence';

export function getCanonicalRecords(): DateIntelligenceRecord[] {
  const records: DateIntelligenceRecord[] = [];
  const years = [2026, 2027, 2028];

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
            category: rule.type,
            jurisdiction: {
              country_code: cc,
              country_name: COUNTRY_LABELS[cc] || cc,
              scope: rule.jurisdiction?.scope || 'national'
            },
            purpose_relevance: ['travel', 'business', 'workforce', 'logistics', 'study'],
            state: rule.status,
            confidence: rule.confidence || 'listed',
            evidence: rule.evidence || { source_name: null, source_url: "" },
            consequences: {
              implication: `${rule.name} is a ${rule.type === 'holiday' ? 'public holiday' : 'scheduled observance'}. Expect related operational shifts.`,
              affected_operations: ['government', 'banking'],
              severity: 'medium'
            },
            source_label: rule.type.toUpperCase(),
            source_dataset: 'HOLIDAYS'
          });
        }
      });
    });
  });

  // 2. Map Regional Intelligence (REGIONAL)
  // Handles non-standard { region, text } shape
  DATA_REGISTRY.REGIONAL.forEach((obj: any) => {
    records.push({
      id: `REG_${obj.country}_${obj.date}_${obj.region?.substring(0, 20)}`,
      date: obj.date,
      name: `Regional Signal: ${obj.region}`,
      category: 'regional',
      jurisdiction: {
        country_code: obj.country,
        country_name: COUNTRY_LABELS[obj.country] || obj.country,
        region: obj.region,
        scope: 'regional'
      },
      purpose_relevance: ['travel', 'business', 'workforce', 'logistics', 'study'],
      state: 'confirmed',
      confidence: 'unsourced',
      evidence: { source_name: null, source_url: "" },
      consequences: {
        implication: obj.text || obj.summary || "Regional operational signal recorded.",
        affected_operations: [],
        severity: 'low'
      },
      source_label: 'REGIONAL SIGNAL',
      source_dataset: 'REGIONAL'
    });
  });

  // 3. Map Student Policies (STUDENTS)
  DATA_REGISTRY.STUDY_POLICIES.forEach(policy => {
    records.push({
      ...policy,
      source_dataset: 'STUDY_POLICIES'
    } as DateIntelligenceRecord);
  });

  return records;
}
