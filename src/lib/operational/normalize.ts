/**
 * @fileOverview Normalization Layer for Structured Authoritative Data.
 * Replaces the fragile regex-based chunk parser.
 */
import { DateIntelligenceRecord, HolidayRule } from './types';
import { DATA_REGISTRY } from './data/registry';
import { evaluateRule } from './engine';
import { COUNTRY_LABELS } from '../calendar-intelligence';

export function getCanonicalRecords(): DateIntelligenceRecord[] {
  const records: DateIntelligenceRecord[] = [];
  const years = [2026, 2027, 2028];

  // 1. Expand Holiday Rules
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
            evidence: rule.evidence || { source_name: "Authoritative List", source_url: "" },
            consequences: {
              implication: "Public holiday; commercial and institutional closures likely.",
              affected_operations: ['government', 'banking'],
              severity: 'medium'
            },
            source_label: rule.type === 'holiday' ? 'Public' : 'Religious',
            source_dataset: 'HOLIDAYS'
          });
        }
      });
    });
  });

  // 2. Add Standing Policies
  DATA_REGISTRY.STUDY_POLICIES.forEach(policy => {
    records.push({
      ...policy,
      source_dataset: 'STUDENT_POLICIES'
    } as DateIntelligenceRecord);
  });

  return records;
}
