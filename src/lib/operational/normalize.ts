/**
 * @fileOverview Data Normalization Layer
 * 
 * Maps raw authoritative source records into the canonical types.
 */

import { DateIntelligenceRecord, OperationalCategory } from './types';
import { HolidayRule } from './data/raw/utsavs-app';

export function normalizeHoliday(code: string, rule: HolidayRule, year: number): DateIntelligenceRecord | null {
  const dateStr = rule.dates ? rule.dates[year] : (rule.month && rule.day ? `${year}-${String(rule.month).padStart(2, '0')}-${String(rule.day).padStart(2, '0')}` : null);
  
  if (!dateStr) return null;

  return {
    id: `HOL_${code}_${dateStr}_${rule.name.replace(/\s+/g, '_')}`,
    date: dateStr,
    name: rule.name,
    category: 'holiday',
    jurisdiction: {
      country_code: code,
      country_name: code, 
      scope: 'national'
    },
    purpose_relevance: ['travel', 'business', 'logistics', 'workforce', 'study'],
    state: rule.status === 'confirmed' ? 'confirmed' : 'provisional',
    confidence: rule.confidence || 'reference',
    evidence: {
      source_id: 'utsavs-authoritative-primary',
      source_name: rule.evidence?.source_name || 'Authoritative Calendar',
      source_url: rule.evidence?.source_url,
      source_type: 'government',
      last_checked: rule.evidence?.last_checked || new Date().toISOString(),
      verification_status: 'verified'
    },
    consequences: {
      implication: rule.state === 'listed' ? 'Listed public holiday; commercial impact expected.' : 'Operational signal; verify local closures.',
      affected_operations: ['banking', 'government', 'public_services'],
      severity: 'medium'
    },
    raw_source_ref: rule
  };
}

export function normalizeRegional(raw: any): DateIntelligenceRecord | null {
  if (!raw.date || !raw.country_code) return null;
  
  return {
    id: `REG_${raw.country_code}_${raw.region || 'GEN'}_${raw.date}_${raw.name.replace(/\s+/g, '_')}`,
    date: raw.date,
    name: raw.name,
    category: 'regional',
    jurisdiction: {
      country_code: raw.country_code,
      country_name: raw.country_code,
      region: raw.region,
      scope: 'regional'
    },
    purpose_relevance: ['travel', 'business', 'workforce'],
    state: raw.status || 'confirmed',
    confidence: 'high',
    evidence: {
      source_id: 'utsavs-authoritative-primary',
      source_name: raw.evidence?.source_name || 'Regional Authority',
      source_url: raw.evidence?.source_url,
      source_type: 'government',
      last_checked: raw.evidence?.last_checked || new Date().toISOString(),
      verification_status: 'verified'
    },
    consequences: {
      implication: raw.implication || 'Regional operational impact.',
      affected_operations: ['local_business', 'transport'],
      severity: 'high'
    },
    raw_source_ref: raw
  };
}

export function normalizeInstitutional(raw: any): DateIntelligenceRecord | null {
    if (!raw.date || !raw.institution) return null;
    return {
        id: `INST_${raw.institution_id || 'GEN'}_${raw.date}`,
        date: raw.date,
        name: raw.name || 'Institutional Timing',
        category: 'institutional',
        jurisdiction: {
            country_code: raw.country_code || 'UNKNOWN',
            country_name: 'Institutional',
            scope: 'institutional'
        },
        institution: {
            id: raw.institution_id || 'UNKNOWN',
            name: raw.institution,
            type: raw.type || 'university',
            applicability: raw.applicability || 'Campus-wide'
        },
        purpose_relevance: ['study'],
        state: 'confirmed',
        confidence: 'high',
        evidence: {
            source_id: 'utsavs-authoritative-primary',
            source_name: raw.evidence?.source_name || 'Institutional Source',
            source_url: raw.evidence?.source_url,
            source_type: 'institutional',
            last_checked: raw.evidence?.last_checked || new Date().toISOString(),
            verification_status: 'verified'
        },
        consequences: {
            implication: raw.implication || 'Academic or institutional deadline.',
            affected_operations: ['admissions', 'classes'],
            severity: 'medium'
        },
        raw_source_ref: raw
    };
}

// Additional specific normalizers for Corporate, Banking, etc. can be added here
