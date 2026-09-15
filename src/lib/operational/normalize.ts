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

  // 1. Meta-Data: Institutions & Locations (for source-aware context)
  const institutions = extractMeta(source, 'INSTITUTIONS');
  const locations = extractMeta(source, 'LOCATIONS');

  // 2. Primary: HOLIDAYS
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

  // 3. Operational Arrays (Using the user's specific variable names)
  const arrayVariables = [
    'REGIONAL_INTELLIGENCE',
    'STUDENT_INTELLIGENCE_EXTRA',
    'CORPORATE_TRAVEL_INTELLIGENCE_DATA',
    'STUDY_INSTITUTIONAL_TIMING',
    'BANKING_INTELLIGENCE_DATA',
    'CORPORATE_MARKET_DEPTH_ADDITIONS',
    'CUSTOMS_INTELLIGENCE_DATA',
    'CORPORATE_INTELLIGENCE',
    'STUDENT_RISK_DATA',
    'POLICY_RECORDS',
    'OPERATIONAL_GLOBAL_EXPANSION'
  ];

  for (const varName of arrayVariables) {
    const regex = new RegExp(`const\\s+${varName}\\s*=\\s*\\[([\\s\\S]*?)\\];`);
    const match = source.match(regex);
    if (match) {
      const category = mapVarToCategory(varName);
      records.push(...parseObjectArray(match[1], category));
    }
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

function parseObjectArray(block: string, defaultCat: OperationalCategory): DateIntelligenceRecord[] {
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
      const category = refineCategory(topic, defaultCat);
      
      records.push({
        id: `REC_${obj.country}_${date}_${topic.replace(/[^a-zA-Z0-9]/g, '_')}`,
        date: date,
        name: topic,
        category: category,
        jurisdiction: { 
          country_code: obj.country, 
          country_name: obj.country, 
          scope: (obj.scope || 'national') as any
        },
        purpose_relevance: determinePurposes(topic),
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
          affected_operations: ['regulatory', 'compliance'],
          severity: 'medium'
        },
        source_label: obj.source_name || (category === 'regional' ? 'Regional Source' : 'Official Authority')
      });
    }
  }
  return records;
}

function mapVarToCategory(varName: string): OperationalCategory {
  switch (varName) {
    case 'REGIONAL_INTELLIGENCE': return 'regional';
    case 'STUDENT_INTELLIGENCE_EXTRA': return 'student_risk';
    case 'STUDY_INSTITUTIONAL_TIMING': return 'institutional';
    case 'BANKING_INTELLIGENCE_DATA': return 'banking';
    case 'CORPORATE_MARKET_DEPTH_ADDITIONS': return 'market';
    case 'CUSTOMS_INTELLIGENCE_DATA': return 'customs';
    case 'CORPORATE_INTELLIGENCE': return 'business_travel';
    case 'POLICY_RECORDS': return 'global_expansion';
    case 'OPERATIONAL_GLOBAL_EXPANSION': return 'global_expansion';
    default: return 'business_travel';
  }
}

function refineCategory(topic: string, defaultCat: OperationalCategory): OperationalCategory {
  const t = topic.toLowerCase();
  if (t.includes('bank') || t.includes('payment')) return 'banking';
  if (t.includes('market') || t.includes('exchange') || t.includes('trading')) return 'market';
  if (t.includes('customs')) return 'customs';
  if (t.includes('academic') || t.includes('enrolment') || t.includes('study')) return 'institutional';
  return defaultCat;
}

function determinePurposes(text: string): UserPurpose[] {
  const t = text.toLowerCase();
  const purposes: UserPurpose[] = [];
  if (t.includes('study') || t.includes('student') || t.includes('permit')) purposes.push('study');
  if (t.includes('business') || t.includes('market') || t.includes('bank') || t.includes('corporate')) purposes.push('business');
  if (t.includes('logistics') || t.includes('customs') || t.includes('port')) purposes.push('logistics');
  if (purposes.length === 0) purposes.push('travel', 'business');
  return Array.from(new Set(purposes));
}

export function createEventRecord(cc: string, date: string, name: string, type: string = 'public', conf: string = 'listed', evidenceStr: string = '', state: string = 'listed', dateState: string = 'confirmed'): DateIntelligenceRecord {
  const evidence = parseEvidence(evidenceStr);
  
  const safeType = (type || 'public').replace(/['"]/g, '').trim().toLowerCase();
  const safeConf = (conf || 'listed').replace(/['"]/g, '').trim().toLowerCase();
  const safeState = (state || 'listed').replace(/['"]/g, '').trim();
  const safeDateState = (dateState || 'confirmed').replace(/['"]/g, '').trim().toLowerCase();

  return {
    id: `EVT_${cc}_${date}_${name.replace(/[^a-zA-Z0-9]/g, '_')}`,
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

function extractMeta(source: string, varName: string): any {
  const regex = new RegExp(`const\\s+${varName}\\s*=\\s*\\{([\\s\\S]*?)\\};`);
  const match = source.match(regex);
  if (!match) return {};
  // Simplified extraction of top-level keys in the object
  return match[1];
}
