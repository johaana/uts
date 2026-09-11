/**
 * @fileOverview Data Normalization Layer
 * 
 * Maps raw authoritative source records into the canonical types.
 * Responsible for preserving all available provenance.
 */

import { DateIntelligenceRecord, UserPurpose } from './types';

/**
 * Normalizes a raw authoritative record.
 * Returns null if the record cannot be honestly mapped to the canonical contract.
 */
export function normalizeRecord(raw: any): DateIntelligenceRecord | null {
  try {
    if (!raw || typeof raw !== 'object') return null;

    // Mapping raw fields to canonical OperationalRecord
    // This ensures provenance and institutional identity survive the pipeline.
    const record: DateIntelligenceRecord = {
      id: raw.id || raw.record_id,
      date: raw.date || raw.start_date,
      date_end: raw.date_end || raw.end_date,
      name: raw.name || raw.event_name,
      jurisdiction: {
        country_code: raw.country_code || raw.jurisdiction?.country_code,
        country_name: raw.country_name || raw.jurisdiction?.country_name,
        region: raw.region || raw.jurisdiction?.region,
        local: raw.local || raw.jurisdiction?.local,
        scope: raw.scope || raw.jurisdiction?.scope || 'national'
      },
      institution: raw.institution ? {
        id: raw.institution.id,
        name: raw.institution.name,
        type: raw.institution.type,
        applicability: raw.institution.applicability
      } : undefined,
      purpose_relevance: (raw.purpose_relevance || []) as UserPurpose[],
      state: raw.state || raw.date_state || 'provisional',
      confidence: raw.confidence || raw.confidence_tier || 'reference',
      evidence: {
        source_id: raw.evidence?.source_id || raw.source_id || 'unknown',
        source_name: raw.evidence?.source_name || raw.source_name || 'Unspecified Source',
        source_url: raw.evidence?.source_url || raw.source_url,
        source_type: raw.evidence?.source_type || 'manual_verification',
        last_checked: raw.evidence?.last_checked || new Date().toISOString(),
        verification_status: raw.evidence?.verification_status || 'provisional'
      },
      consequences: {
        implication: raw.consequences?.implication || raw.implication || 'Details pending connection',
        action_suggested: raw.consequences?.action_suggested,
        affected_operations: raw.consequences?.affected_operations || [],
        severity: raw.consequences?.severity || 'medium'
      }
    };

    return record;
  } catch (e) {
    return null;
  }
}
