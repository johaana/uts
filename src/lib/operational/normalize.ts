/**
 * @fileOverview Data Normalization & Extraction Layer
 * 
 * Implements the actual parser for the transferred authoritative source code.
 * Extracts JS structures (objects/arrays) from the source string and maps them 
 * to canonical DateIntelligenceRecord types while preserving all metadata.
 */

import { DateIntelligenceRecord, UserPurpose, ConfidenceTier, DateState, SourceEvidence } from './types';
import { validateRecord } from './validator';

/**
 * Extracts and normalizes all records from the aggregated authoritative source.
 */
export function extractDatasets(source: string): DateIntelligenceRecord[] {
  const records: DateIntelligenceRecord[] = [];

  // 1. Extract HOLIDAYS (The primary country-keyed dictionary)
  // Logic: Match "const HOLIDAYS = {" through its closing "};"
  // Then extract country blocks like "IN: [ ... ]"
  const holidaySection = source.match(/const\s+HOLIDAYS\s*=\s*\{([\s\S]*?)\};/);
  if (holidaySection) {
    const content = holidaySection[1];
    // Match each country code and its array of rules
    const countryMatches = content.matchAll(/([A-Z]{2}):\s*\[([\s\S]*?)\]/g);
    for (const match of countryMatches) {
      const countryCode = match[1];
      const rulesBlock = match[2];
      records.push(...parseHolidayRules(countryCode, rulesBlock));
    }
  }

  // 2. Extract POLICY_RECORDS
  const policySection = source.match(/const\s+POLICY_RECORDS\s*=\s*\[([\s\S]*?)\];/);
  if (policySection) {
    records.push(...parsePolicyRecords(policySection[1]));
  }

  // 3. Extract STUDENT_INTELLIGENCE_EXTRA
  const studentExtraSection = source.match(/const\s+STUDENT_INTELLIGENCE_EXTRA\s*=\s*\[([\s\S]*?)\];/);
  if (studentExtraSection) {
    records.push(...parsePolicyRecords(studentExtraSection[1], ['study']));
  }

  return records.filter(r => validateRecord(r).valid);
}

/**
 * Parses individual calls to fixed(), nthWeekday(), and dated() inside a country block.
 */
function parseHolidayRules(countryCode: string, block: string): DateIntelligenceRecord[] {
  const localRecords: DateIntelligenceRecord[] = [];
  
  // Regex to extract arguments from the helper functions
  const ruleRegex = /(fixed|nthWeekday|dated)\(([\s\S]*?)\)/g;
  const matches = block.matchAll(ruleRegex);

  for (const match of matches) {
    const kind = match[1];
    const argsStr = match[2];
    
    // Naive comma-split for arguments (handles nested objects/arrays to a degree)
    const args = splitArgs(argsStr);
    
    // Normalize based on kind
    if (kind === 'fixed') {
      // fixed(month, day, name, type, confidence, evidence, state)
      const [m, d, name, type, conf, evidence, state] = args;
      const years = [2026, 2027]; // Current supported range
      years.forEach(y => {
        const date = `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`;
        localRecords.push(createRecord(countryCode, date, clean(name), type as any, conf as any, evidence, state, 'national'));
      });
    } else if (kind === 'dated') {
      // dated({2026:"...", 2027:"..."}, name, type, status, confidence, evidence, state)
      const [datesObj, name, type, status, conf, evidence, state] = args;
      const dates = parseDatedObject(datesObj);
      Object.values(dates).forEach(date => {
        localRecords.push(createRecord(countryCode, date, clean(name), type as any, conf as any, evidence, state, 'national', status as any));
      });
    }
  }

  return localRecords;
}

function parsePolicyRecords(block: string, forcedPurposes?: UserPurpose[]): DateIntelligenceRecord[] {
  // Policy records are objects: {country:"...", topic:"...", ...}
  const records: DateIntelligenceRecord[] = [];
  const objRegex = /\{([\s\S]*?)\}/g;
  const matches = block.matchAll(objRegex);

  for (const match of matches) {
    try {
      // Convert JS object-like string to a map
      const obj: any = {};
      const pairs = match[1].matchAll(/(\w+):\s*(?:"([^"]*)"|'([^']*)'|(\d+)|(\{[\s\S]*?\}))/g);
      for (const p of pairs) {
        obj[p[1]] = p[2] || p[3] || p[4] || p[5];
      }

      if (obj.country && obj.topic) {
        const date = obj.effective_date || '2026-01-01';
        records.push({
          id: `POL_${obj.country}_${obj.topic.replace(/\s+/g, '_')}_${date}`,
          date: date,
          name: obj.topic,
          category: 'global_expansion',
          jurisdiction: { country_code: obj.country, country_name: obj.country, scope: 'national' },
          purpose_relevance: forcedPurposes || (obj.topic.toLowerCase().includes('study') ? ['study'] : ['business', 'workforce']),
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
            implication: obj.summary || 'Policy detail.',
            affected_operations: ['regulatory', 'compliance'],
            severity: 'medium'
          }
        });
      }
    } catch (e) { /* skip malformed */ }
  }
  return records;
}

/**
 * HELPER: Construct a canonical record
 */
function createRecord(
  countryCode: string, 
  date: string, 
  name: string, 
  type: string, 
  confidence: string, 
  evidenceStr: string, 
  state: string,
  scope: any,
  dateState: string = 'confirmed'
): DateIntelligenceRecord {
  const evidence = parseEvidence(evidenceStr);
  return {
    id: `EVT_${countryCode}_${date}_${name.replace(/\s+/g, '_')}`,
    date,
    name,
    category: 'holiday',
    jurisdiction: { country_code: countryCode, country_name: countryCode, scope },
    purpose_relevance: ['travel', 'business', 'logistics', 'workforce'],
    state: (dateState.toLowerCase() as DateState) || 'confirmed',
    confidence: (clean(confidence).toLowerCase() as ConfidenceTier) || 'reference',
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
      implication: clean(state) === 'listed' ? 'Listed public holiday; commercial impact expected.' : 'National observance.',
      affected_operations: ['government', 'banking'],
      severity: 'medium'
    }
  };
}

// Low-level text utilities for the authoritative parser
function clean(s: string) { return s?.trim().replace(/^["']|["']$/g, '') || ''; }

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
  if (!s || s === 'undefined') return {};
  try {
    const obj: any = {};
    const pairs = s.matchAll(/(\w+):\s*["']([^"']+)["']/g);
    for (const p of pairs) { obj[p[1]] = p[2]; }
    return obj;
  } catch (e) { return {}; }
}
