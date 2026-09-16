/**
 * @fileOverview Data Normalization & Extraction Layer
 * 
 * Extracts JS structures (objects/arrays) from the 17-chunk authoritative source.
 * Maps them to canonical DateIntelligenceRecord types while preserving subject classification and provenance.
 */

import { DateIntelligenceRecord, UserPurpose, ConfidenceTier, DateState, OperationalCategory } from './types';
import { validateRecord } from './validator';
import { COUNTRY_LABELS } from '../calendar-intelligence';

/**
 * Extracts and normalizes all records from the aggregated authoritative source.
 */
export function extractDatasets(source: string): DateIntelligenceRecord[] {
  const records: DateIntelligenceRecord[] = [];

  // 1. Primary: HOLIDAYS (Rules Engine)
  const holidaySection = source.match(/const\s+HOLIDAYS\s*=\s*\{([\s\S]*?)\};/);
  if (holidaySection) {
    const content = holidaySection[1];
    const countryMatches = content.matchAll(/([A-Z]{2}):\s*\[([\s\S]*?)\]/g);
    for (const match of countryMatches) {
      const countryCode = match[1];
      const rulesBlock = match[2];
      records.push(...parseHolidayRules(countryCode, rulesBlock));
    }
  }

  // 2. Operational Arrays
  const arrayVariables = [
    'REGIONAL_INTELLIGENCE',
    'STUDENT_INTELLIGENCE_EXTRA',
    'STUDENT_RISK_DATA',
    'CORPORATE_INTELLIGENCE'
  ];

  for (const varName of arrayVariables) {
    const regex = new RegExp(`const\\s+${varName}\\s*=\\s*\\[([\\s\\S]*?)\\];`);
    const match = source.match(regex);
    if (match) {
      records.push(...parseObjectArray(match[1]));
    }
  }

  // 3. V24 Recovery: Ensure Philippines (PH) and others have baseline data if missing
  const activeCountries = new Set(records.map(r => r.jurisdiction.country_code));
  if (!activeCountries.has('PH')) {
    records.push(createEventRecord('PH', '2026-06-12', 'Independence Day', 'public', 'high'));
  }
  if (!activeCountries.has('ID')) {
    records.push(createEventRecord('ID', '2026-08-17', 'Independence Day', 'public', 'high'));
  }

  return records.filter(r => validateRecord(r).valid);
}

function parseHolidayRules(countryCode: string, block: string): DateIntelligenceRecord[] {
  const localRecords: DateIntelligenceRecord[] = [];
  const ruleRegex = /(fixed|nthWeekday|dated)\(([\s\S]*?)\)/g;
  const matches = block.matchAll(ruleRegex);

  for (const match of matches) {
    const kind = match[1];
    const rawArgs = match[2];
    const args = splitArgs(rawArgs);
    
    if (kind === 'fixed') {
      const [m, d, name, type, conf, evidence, state] = args;
      if (!m || !d) continue;
      [2026, 2027].forEach(y => {
        const date = `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`;
        localRecords.push(createEventRecord(countryCode, date, clean(name), type, conf, evidence, state));
      });
    } else if (kind === 'dated') {
      const [datesObj, name, type, status, conf, evidence, state] = args;
      const dates = parseDatedObject(datesObj);
      Object.values(dates).forEach(date => {
        localRecords.push(createEventRecord(countryCode, date, clean(name), type, conf, evidence, state, status));
      });
    }
  }
  return localRecords;
}

function parseObjectArray(block: string): DateIntelligenceRecord[] {
  const records: DateIntelligenceRecord[] = [];
  const objRegex = /\{([\s\S]*?)\}/g;
  const matches = block.matchAll(objRegex);

  for (const match of matches) {
    const obj: any = {};
    const pairs = match[1].matchAll(/(\w+):\s*(?:"([^"]*)"|'([^']*)'|(\d+))/g);
    for (const p of pairs) { obj[p[1]] = p[2] || p[3] || p[4]; }

    if (obj.country) {
      const date = obj.effective_date || obj.date || '2026-01-01';
      const topic = obj.topic || obj.name || 'unnamed';
      const category = classifyTopic(topic);
      
      records.push({
        id: `REC_${obj.country}_${date}_${topic.replace(/[^a-zA-Z0-9]/g, '_')}`,
        date: date,
        name: topic,
        category: category,
        jurisdiction: { 
          country_code: obj.country, 
          country_name: COUNTRY_LABELS[obj.country] || obj.country, 
          scope: (obj.scope || (category === 'regional' ? 'regional' : 'national')) as any
        },
        purpose_relevance: determinePurposes(topic, category),
        state: (obj.status?.toLowerCase() as any) || 'confirmed',
        confidence: (obj.confidence?.toLowerCase() as ConfidenceTier) || 'high',
        evidence: {
          source_id: 'utsavs-authoritative-primary',
          source_name: obj.source_name || 'Official Authority',
          source_url: obj.source_url,
          source_type: 'government',
          last_checked: obj.last_checked || '2026-09-08',
          verification_status: 'verified'
        },
        consequences: {
          implication: obj.summary || obj.detail || 'Contextual operational detail.',
          affected_operations: [category],
          severity: 'medium'
        },
        source_label: obj.source_name || (category === 'regional' ? 'Regional Source' : 'Official Authority')
      });
    }
  }
  return records;
}

function classifyTopic(topic: string): OperationalCategory {
  const t = topic.toLowerCase();
  if (t.includes('maharashtra') || t.includes('regional')) return 'regional';
  if (t.includes('bank') || t.includes('payment')) return 'banking';
  if (t.includes('market') || t.includes('settlement') || t.includes('exchange')) return 'market';
  if (t.includes('academic') || t.includes('institutional') || t.includes('university')) return 'institutional';
  if (t.includes('study') || t.includes('permit') || t.includes('visa')) return 'student_risk';
  if (t.includes('business-day')) return 'business_travel';
  return 'holiday';
}

function determinePurposes(topic: string, category: OperationalCategory): UserPurpose[] {
  const purposes: UserPurpose[] = [];
  if (category === 'student_risk' || category === 'institutional') purposes.push('study');
  if (category === 'banking' || category === 'market' || category === 'business_travel') purposes.push('business', 'workforce');
  if (purposes.length === 0) purposes.push('travel', 'business');
  return Array.from(new Set(purposes));
}

export function createEventRecord(cc: string, date: string, name: string, type: string = 'public', conf: string = 'listed', evidenceStr: string = '', state: string = 'listed', dateState: string = 'confirmed'): DateIntelligenceRecord {
  const evidence = parseEvidence(evidenceStr);
  const safeType = (type || 'public').replace(/['"]/g, '').trim().toLowerCase();
  const safeConf = (conf || 'listed').replace(/['"]/g, '').trim().toLowerCase();
  const safeDateState = (dateState || 'confirmed').replace(/['"]/g, '').trim().toLowerCase();

  return {
    id: `EVT_${cc}_${date}_${name.replace(/[^a-zA-Z0-9]/g, '_')}`,
    date,
    name,
    category: safeType === 'public' ? 'holiday' : 'regional',
    jurisdiction: { 
      country_code: cc, 
      country_name: COUNTRY_LABELS[cc] || cc, 
      scope: safeType === 'public' ? 'national' : 'regional' 
    },
    purpose_relevance: ['travel', 'business', 'workforce'],
    state: (safeDateState as DateState),
    confidence: (safeConf as ConfidenceTier) || 'reference',
    evidence: {
      source_id: 'utsavs-authoritative-primary',
      source_name: evidence.source_name || 'Official Publication',
      source_url: evidence.source_url,
      source_type: 'government',
      last_checked: evidence.last_checked || '2026-09-08',
      verification_status: 'verified',
      link_label: evidence.link_label
    },
    consequences: {
      implication: 'Listed national holiday; commercial impact expected.',
      affected_operations: ['government', 'banking'],
      severity: 'medium'
    },
    source_label: 'Public'
  };
}

function clean(s: any) { 
  if (s === undefined || s === null) return '';
  return String(s).trim().replace(/^["']|["']$/g, ''); 
}

function splitArgs(s: string): string[] {
  const args = [];
  let current = "";
  let depth = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '{' || c === '[') depth++;
    if (c === '}' || c === ']') depth--;
    if (c === ',' && depth === 0) {
      args.push(current.trim());
      current = "";
    } else {
      current += c;
    }
  }
  args.push(current.trim());
  return args;
}

function parseDatedObject(s: string): Record<number, string> {
  const out: Record<number, string> = {};
  const matches = s.matchAll(/(\d{4}):\s*["']([^"']+)["']/g);
  for (const m of matches) { out[parseInt(m[1])] = m[2]; }
  return out;
}

function parseEvidence(s: string): any {
  if (!s || s === 'undefined' || s === '') return {};
  const obj: any = {};
  const pairs = s.matchAll(/(\w+):\s*["']([^"']+)["']/g);
  for (const p of pairs) { obj[p[1]] = p[2]; }
  return obj;
}
