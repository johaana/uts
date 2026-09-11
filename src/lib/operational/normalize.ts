/**
 * @fileOverview Data Normalization Layer
 * 
 * Maps raw authoritative source records into the canonical types.
 */

import { DateIntelligenceRecord, UserPurpose } from './types';
import { HolidayRule, OperationalRecordRaw, PolicyRecordRaw } from './data/raw/utsavs-app';

export function normalizeHoliday(code: string, rule: HolidayRule, year: number): DateIntelligenceRecord | null {
  const dateStr = rule.dates ? rule.dates[year] : `${year}-${String(rule.month).padStart(2, '0')}-${String(rule.day).padStart(2, '0')}`;
  
  if (!dateStr) return null;

  return {
    id: `HOL_${code}_${dateStr}_${rule.name.replace(/\s+/g, '_')}`,
    date: dateStr,
    name: rule.name,
    jurisdiction: {
      country_code: code,
      country_name: code === 'IN' ? 'India' : code === 'US' ? 'United States' : 'Other',
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
    }
  };
}

export function normalizeOperational(raw: OperationalRecordRaw): DateIntelligenceRecord | null {
  return {
    id: `OP_${raw.institution_id || 'GEN'}_${raw.date}_${raw.segment?.replace(/\s+/g, '_')}`,
    date: raw.date,
    date_end: raw.date_end,
    name: raw.segment || 'Operational Alert',
    jurisdiction: {
      country_code: 'UNKNOWN',
      country_name: 'Global/Unknown',
      scope: 'institutional'
    },
    institution: {
      id: raw.institution_id || 'UNKNOWN',
      name: raw.institution || 'Unknown Institution',
      type: 'transport', // Default
      applicability: raw.scope
    },
    purpose_relevance: ['logistics', 'workforce', 'business'],
    state: 'confirmed',
    confidence: raw.confidence,
    evidence: {
      source_id: 'utsavs-authoritative-primary',
      source_name: raw.evidence.source_name,
      source_url: raw.evidence.source_url,
      source_type: 'institutional',
      last_checked: raw.evidence.last_checked || new Date().toISOString(),
      verification_status: 'verified'
    },
    consequences: {
      implication: raw.detail || raw.status,
      affected_operations: [raw.scope_type],
      severity: 'high'
    }
  };
}

export function normalizePolicy(raw: PolicyRecordRaw): DateIntelligenceRecord | null {
  return {
    id: `POL_${raw.country}_${raw.topic.replace(/\s+/g, '_')}`,
    date: raw.effective_date || new Date().toISOString().split('T')[0],
    name: raw.topic,
    jurisdiction: {
      country_code: raw.country,
      country_name: raw.country === 'CA' ? 'Canada' : 'Other',
      scope: 'national'
    },
    purpose_relevance: ['study', 'business', 'workforce'],
    state: 'confirmed',
    confidence: raw.confidence,
    evidence: {
      source_id: 'utsavs-authoritative-primary',
      source_name: raw.source_name || 'Policy Authority',
      source_url: raw.source_url,
      source_type: 'regulatory',
      last_checked: raw.last_checked || new Date().toISOString(),
      verification_status: 'verified'
    },
    consequences: {
      implication: raw.summary,
      affected_operations: ['immigration', 'admissions'],
      severity: 'medium'
    }
  };
}
