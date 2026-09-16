/**
 * @fileOverview Normalization Layer for Structured Authoritative Data.
 */
import { DateIntelligenceRecord, UserPurpose, HolidayRule } from './types';
import { DATA_REGISTRY } from './data/registry';
import { evaluateRule } from './engine';
import { COUNTRY_LABELS } from '../calendar-intelligence';

export function getCanonicalRecords(): DateIntelligenceRecord[] {
  const records: DateIntelligenceRecord[] = [];
  const years = [2026, 2027, 2028];

  // 1. Process Holidays
  Object.entries(DATA_REGISTRY.HOLIDAYS).forEach(([cc, rules]) => {
    rules.forEach(rule => {
      years.forEach(year => {
        const date = evaluateRule(rule, year);
        if (date) {
          records.push(mapRuleToRecord(cc, date, rule));
        }
      });
    });
  });

  // 2. Process Policy/Risk Data
  DATA_REGISTRY.STUDENT_RISK.forEach(item => {
    records.push({
      id: `POL_${item.country}_${item.effective_date}`,
      date: item.effective_date,
      name: item.topic,
      category: 'student_risk',
      jurisdiction: {
        country_code: item.country,
        country_name: COUNTRY_LABELS[item.country] || item.country,
        scope: 'national'
      },
      purpose_relevance: ['study'],
      state: item.status.toLowerCase() as any,
      confidence: item.confidence as any,
      evidence: {
        source_name: item.source_name,
        source_url: item.source_url,
        last_checked: item.last_checked
      },
      consequences: {
        implication: item.summary,
        affected_operations: ['visa'],
        severity: 'high'
      },
      source_label: 'Policy'
    });
  });

  return records;
}

function mapRuleToRecord(cc: string, date: string, rule: HolidayRule): DateIntelligenceRecord {
  return {
    id: `EVT_${cc}_${date}_${rule.name.replace(/\s/g, '_')}`,
    date,
    name: rule.name,
    category: rule.type,
    jurisdiction: {
      country_code: cc,
      country_name: COUNTRY_LABELS[cc] || cc,
      scope: 'national'
    },
    purpose_relevance: ['travel', 'business', 'workforce', 'logistics', 'study'],
    state: rule.status as any,
    confidence: rule.confidence || 'listed',
    evidence: rule.evidence || { source_name: "Listed Calendar", source_url: "" },
    consequences: {
      implication: "Public holiday; commercial closures likely.",
      affected_operations: ['government', 'banking'],
      severity: 'medium'
    },
    source_label: 'Public'
  };
}
