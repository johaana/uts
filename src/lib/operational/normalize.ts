'use client';
/**
 * @fileOverview Normalization Layer for Structured Authoritative Data.
 * 
 * Ensuring robust handling of both flat and nested source data shapes.
 */
import { DateIntelligenceRecord } from './types';
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

  // 2. Map Regional Intelligence (REGIONAL_INTELLIGENCE)
  DATA_REGISTRY.REGIONAL_INTELLIGENCE.forEach((obj: any) => {
    const countryCode = obj.jurisdiction?.country_code || obj.country;
    const regionName = obj.jurisdiction?.region || obj.region;
    
    if (!countryCode) return;

    let displayName = obj.name;
    if (!displayName && obj.consequences?.implication) {
      const text = obj.consequences.implication;
      const subjectMatch = text.match(/^(.+?)\s+(?:is|occurs|can be|falls|marks)/i);
      displayName = subjectMatch ? subjectMatch[1] : `Regional Signal: ${regionName}`;
    }

    records.push({
      ...obj,
      id: obj.id || `REG_${countryCode}_${obj.date}_${regionName?.substring(0, 10)}`,
      date: obj.date || "2026-01-01",
      name: displayName || obj.topic || "Regional Signal",
      category: obj.category || 'regional',
      jurisdiction: {
        country_code: countryCode,
        country_name: COUNTRY_LABELS[countryCode] || countryCode,
        region: regionName,
        scope: obj.jurisdiction?.scope || 'regional'
      },
      purpose_relevance: obj.purpose_relevance || ['travel', 'business', 'workforce', 'logistics', 'study'],
      state: obj.state || 'confirmed',
      confidence: obj.confidence || 'listed',
      evidence: obj.evidence || { source_name: null, source_url: "" },
      consequences: obj.consequences || { implication: "Regional operational signal.", affected_operations: [], severity: 'low' },
      source_label: 'REGIONAL SIGNAL',
      source_dataset: 'REGIONAL_INTELLIGENCE',
      temporal_kind: 'event'
    });
  });

  // 3. Map Student Policies (STUDENT_INTEL_EXTRA)
  DATA_REGISTRY.STUDENT_INTEL_EXTRA.forEach((policy: any) => {
    const countryCode = policy.jurisdiction?.country_code || policy.country;
    if (!countryCode) return;

    records.push({
      ...policy,
      id: policy.id || `STU_POL_${countryCode}_${(policy.name || policy.topic || "").replace(/\s/g, '_')}`,
      date: policy.date || policy.effective_date || "2026-01-01",
      name: policy.name || policy.topic,
      category: policy.category || 'policy',
      jurisdiction: {
        country_code: countryCode,
        country_name: COUNTRY_LABELS[countryCode] || countryCode,
        scope: policy.jurisdiction?.scope || 'national'
      },
      purpose_relevance: policy.purpose_relevance || ['study'],
      state: policy.state || 'confirmed',
      confidence: policy.confidence || 'high',
      evidence: policy.evidence || { source_name: "Official Authority", source_url: "" },
      consequences: policy.consequences || { 
        implication: policy.summary || "Standing study policy.", 
        affected_operations: ['visa', 'admin'], 
        severity: 'medium' 
      },
      source_label: 'STUDENT POLICY',
      source_dataset: 'STUDENT_INTEL_EXTRA',
      temporal_kind: 'standing'
    });
  });

  // 4. Map Study Institutional Timing (STUDY_INSTITUTIONAL_TIMING)
  DATA_REGISTRY.STUDY_INSTITUTIONAL_TIMING.forEach((obj: any) => {
    const countryCode = obj.jurisdiction?.country_code || obj.country;
    if (!countryCode) return;

    records.push({
      ...obj,
      id: obj.id || `STU_INST_${countryCode}_${obj.date}`,
      date: obj.date || "2026-01-01",
      name: obj.name || obj.topic,
      category: obj.category || 'institutional',
      jurisdiction: {
        country_code: countryCode,
        country_name: COUNTRY_LABELS[countryCode] || countryCode,
        scope: obj.jurisdiction?.scope || 'institutional'
      },
      purpose_relevance: obj.purpose_relevance || ['study'],
      state: obj.state || 'confirmed',
      confidence: obj.confidence || 'medium',
      evidence: obj.evidence || { source_name: "Institutional Source", source_url: "" },
      consequences: obj.consequences || { 
        implication: "Institutional timing record.", 
        affected_operations: ['admin'], 
        severity: 'low' 
      },
      source_label: 'ACADEMIC CALENDAR',
      source_dataset: 'STUDY_INSTITUTIONAL_TIMING',
      temporal_kind: 'event'
    });
  });

  return records;
}
