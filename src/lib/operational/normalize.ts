
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
  DATA_REGISTRY.REGIONAL.forEach((obj: any) => {
    // Bug 1: Extract actual event name from prose if possible
    let displayName = `Regional Signal: ${obj.region}`;
    if (obj.text) {
      const subjectMatch = obj.text.match(/^(.+?)\s+(?:is|occurs|can be|falls|marks)/i);
      if (subjectMatch) {
        displayName = subjectMatch[1];
      } else if (obj.text.length < 60) {
        displayName = obj.text;
      }
    }

    // Bug 2: Correct confidence and evidence derivation
    // Fix: If a URL exists, move to 'medium' tier. Use 'listed' strictly for unsourced.
    const hasUrl = !!obj.source_url;
    const confidence = hasUrl ? 'medium' : 'listed';
    
    let sourceName = null;
    if (hasUrl) {
      try {
        const url = new URL(obj.source_url);
        sourceName = url.hostname.replace('www.', '');
        if (sourceName === 'india.gov.in') {
          sourceName = `India.gov.in — ${obj.region} state calendar`;
        }
      } catch (e) {
        sourceName = "Official Source";
      }
    }

    records.push({
      id: `REG_${obj.country}_${obj.date}_${obj.region?.substring(0, 20)}`,
      date: obj.date,
      name: displayName,
      category: 'regional',
      jurisdiction: {
        country_code: obj.country,
        country_name: COUNTRY_LABELS[obj.country] || obj.country,
        region: obj.region,
        scope: 'regional'
      },
      purpose_relevance: ['travel', 'business', 'workforce', 'logistics', 'study'],
      state: 'confirmed',
      confidence: confidence as any,
      evidence: { 
        source_name: sourceName, 
        source_url: obj.source_url || "" 
      },
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
