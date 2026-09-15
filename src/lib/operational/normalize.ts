/**
 * @fileOverview Data Normalization & Extraction Layer
 * 
 * Extracts JS structures (objects/arrays) from the 17-chunk authoritative source.
 * Maps them to canonical DateIntelligenceRecord types while preserving provenance.
 */

import { DateIntelligenceRecord, UserPurpose, ConfidenceTier, DateState, OperationalCategory } from './types';
import { validateRecord } from './validator';

/**
 * Extracts and normalizes all records from the aggregated authoritative source.
 */
export function extractDatasets(source: string): DateIntelligenceRecord[] {
  const records: DateIntelligenceRecord[] = [];

  // 1. Extract HOLIDAYS (The primary country-keyed dictionary)
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

  // 2. Extract STUDENT_INTELLIGENCE_EXTRA
  const studentExtraSection = source.match(/const\s+STUDENT_INTELLIGENCE_EXTRA\s*=\s*\[([\s\S]*?)\];/);
  if (studentExtraSection) {
    records.push(...parseObjectArray(studentExtraSection[1], 'student_risk', ['study']));
  }

  // 3. Extract POLICY_RECORDS
  const policySection = source.match(/const\s+POLICY_RECORDS\s*=\s*\[([\s\S]*?)\];/);
  if (policySection) {
    records.push(...parseObjectArray(policySection[1], 'global_expansion'));
  }

  return records.filter(r => validateRecord(r).valid);
}

function parseHolidayRules(countryCode: string, block: string): DateIntelligenceRecord[] {
  const localRecords: DateIntelligenceRecord[] = [];
  const ruleRegex = /(fixed|nthWeekday|dated)\(([\s\S]*?)\)/g;
  const matches = block.matchAll(ruleRegex);

  for (const match of matches) {
    const kind = match[1];
    const args = splitArgs(match[2]);
    
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

function parseObjectArray(block: string, defaultCat: OperationalCategory, forcedPurposes?: UserPurpose[]): DateIntelligenceRecord[] {
  const records: DateIntelligenceRecord[] = [];
  const objRegex = /\{([\s\S]*?)\}/g;
  const matches = block.matchAll(objRegex);

  for (const match of matches) {
    const obj: any = {};
    const pairs = match[1].matchAll(/(\w+):\s*(?:"([^"]*)"|'([^']*)'|(\d+))/g);
    for (const p of pairs) { obj[p[1]] = p[2] || p[3] || p[4]; }

    if (obj.country) {
      const date = obj.effective_date || obj.date || '2026-01-01';
      records.push({
        id: `REC_${obj.country}_${date}_${(obj.topic || obj.name || 'unnamed').replace(/\s+/g, '_')}`,
        date: date,
        name: obj.topic || obj.name,
        category: defaultCat,
        jurisdiction: { country_code: obj.country, country_name: obj.country, scope: obj.scope || 'national' },
        purpose_relevance: forcedPurposes || determinePurposes(obj.topic || obj.name || ''),
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
          implication: obj.summary || obj.detail || 'Contextual detail.',
          affected_operations: ['regulatory', 'compliance'],
          severity: 'medium'
        }
      });
    }
  }
  return records;
}

function determinePurposes(text: string): UserPurpose[] {
  const t = text.toLowerCase();
  if (t.includes('study')) return ['study'];
  if (t.includes('business') || t.includes('market')) return ['business'];
  if (t.includes('logistics') || t.includes('customs')) return ['logistics'];
  return ['travel', 'business'];
}

export function createEventRecord(cc: string, date: string, name: string, type: string = 'public', conf: string = 'listed', evidenceStr: string = '', state: string = 'listed', dateState: string = 'confirmed'): DateIntelligenceRecord {
  const evidence = parseEvidence(evidenceStr);
  
  const safeType = (type || 'public').replace(/['"]/g, '').trim().toLowerCase();
  const safeConf = (conf || 'listed').replace(/['"]/g, '').trim().toLowerCase();
  const safeState = (state || 'listed').replace(/['"]/g, '').trim();
  const safeDateState = (dateState || 'confirmed').replace(/['"]/g, '').trim().toLowerCase();

  return {
    id: `EVT_${cc}_${date}_${name.replace(/\s+/g, '_')}`,
    date,
    name,
    category: safeType === 'public' ? 'holiday' : 'regional',
    jurisdiction: { country_code: cc, country_name: cc, scope: 'national' },
    purpose_relevance: ['travel', 'business', 'logistics', 'workforce'],
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
      implication: safeState === 'listed' ? 'Listed public holiday; commercial impact expected.' : 'National observance.',
      affected_operations: ['government', 'banking'],
      severity: 'medium'
    }
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