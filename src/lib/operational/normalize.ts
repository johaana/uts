'use client';
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
              scope: 'national'
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

  // 2. Map Regional Intelligence (REGIONAL_INTELLIGENCE)
  DATA_REGISTRY.REGIONAL_INTELLIGENCE.forEach((obj: any) => {
    const countryCode = obj.jurisdiction?.country_code || obj.country;
    const regionName = obj.jurisdiction?.region || obj.region;
    
    // Extract actual event name from prose if possible
    let displayName = obj.name || `Regional Signal: ${regionName}`;
    if (!obj.name && obj.text) {
      const subjectMatch = obj.text.match(/^(.+?)\s+(?:is|occurs|can be|falls|marks)/i);
      if (subjectMatch) {
        displayName = subjectMatch[1];
      } else if (obj.text.length < 60) {
        displayName = obj.text;
      }
    }

    const hasUrl = !!(obj.evidence?.source_url || obj.source_url);
    const confidence = obj.confidence || (hasUrl ? 'medium' : 'unsourced');
    
    let sourceName = obj.evidence?.source_name || null;
    if (!sourceName && hasUrl) {
      try {
        const url = new URL(obj.evidence?.source_url || obj.source_url);
        sourceName = url.hostname.replace('www.', '');
      } catch (e) {
        sourceName = "Official Source";
      }
    }

    records.push({
      id: obj.id || `REG_${countryCode}_${obj.date}_${regionName?.substring(0, 20)}`,
      date: obj.date,
      name: displayName,
      category: 'regional',
      jurisdiction: {
        country_code: countryCode,
        country_name: COUNTRY_LABELS[countryCode] || countryCode,
        region: regionName,
        scope: 'regional'
      },
      purpose_relevance: ['travel', 'business', 'workforce', 'logistics', 'study'],
      state: obj.state || 'confirmed',
      confidence: confidence as any,
      evidence: obj.evidence || { 
        source_name: sourceName, 
        source_url: obj.source_url || "" 
      },
      consequences: obj.consequences || {
        implication: obj.text || obj.summary || "Regional operational signal recorded.",
        affected_operations: [],
        severity: 'low'
      },
      source_label: 'REGIONAL SIGNAL',
      source_dataset: 'REGIONAL_INTELLIGENCE'
    });
  });

  // 3. Map Student Policies (STUDENT_INTELLIGENCE_EXTRA)
  DATA_REGISTRY.STUDENT_INTELLIGENCE_EXTRA.forEach(policy => {
    records.push({
      ...policy,
      source_dataset: 'STUDENT_INTELLIGENCE_EXTRA'
    } as DateIntelligenceRecord);
  });

  // 4. Map Study Institutional Timing
  DATA_REGISTRY.STUDY_INSTITUTIONAL_TIMING.forEach((obj: any) => {
    const inst = DATA_REGISTRY.INSTITUTIONS[obj.institution_id] || { name: obj.institution || obj.institution_id };
    records.push({
      id: obj.id || `STU_${obj.country}_${obj.date}_${obj.institution_id || obj.institution}_${obj.type}`,
      date: obj.date,
      name: obj.topic || `${obj.type} - ${inst.name}`,
      category: 'institutional',
      jurisdiction: {
        country_code: obj.country,
        country_name: COUNTRY_LABELS[obj.country] || obj.country,
        scope: 'institutional'
      },
      institution: {
        id: obj.institution_id || "UNKNOWN",
        name: inst.name,
        country: obj.country,
        type: "UNIVERSITY"
      },
      purpose_relevance: ['study'],
      state: obj.state || 'confirmed',
      confidence: obj.confidence || 'medium',
      evidence: obj.evidence || {
        source_name: obj.source_name || inst.name,
        source_url: obj.source_url || ""
      },
      consequences: obj.consequences || {
        implication: obj.summary || obj.text || "Institutional timing record.",
        affected_operations: [obj.type?.toLowerCase()],
        severity: 'low'
      },
      source_label: 'ACADEMIC CALENDAR',
      source_dataset: 'STUDY_INSTITUTIONAL_TIMING'
    });
  });

  return records;
}
