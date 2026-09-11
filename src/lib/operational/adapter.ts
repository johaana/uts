/**
 * @fileOverview Authoritative Operational Data Adapter
 * 
 * This module is the single integration point for the Utsavs operational dataset.
 * It enforces the separation between the UI and the data layer and ensures
 * that provenance and integrity rules are maintained.
 */

import { 
  OperationalQuery, 
  OperationalResult, 
  DateIntelligenceRecord,
  OperationalResultStatus
} from './types';

/**
 * Validates a record against the authoritative schema and integrity rules.
 * REJECTS malformed records or those without proper provenance.
 */
export function validateRecord(record: any): record is DateIntelligenceRecord {
  if (!record || typeof record !== 'object') return false;
  
  // Hard Rule: Dates must be valid YYYY-MM-DD
  if (!record.date || !/^\d{4}-\d{2}-\d{2}$/.test(record.date)) return false;
  
  // Hard Rule: Provenance must be present
  if (!record.evidence || !record.evidence.source_id || !record.evidence.source_name) return false;
  
  // Hard Rule: Institution-specific consequences require institution-specific evidence
  if (record.jurisdiction?.scope === 'institutional' && !record.institution?.id) return false;
  
  // Purpose must be supported
  if (!Array.isArray(record.purpose_relevance) || record.purpose_relevance.length === 0) return false;

  return true;
}

/**
 * Fetches operational impact based on user query.
 * 
 * DATA INTEGRITY RULE:
 * This function currently returns 'source_unavailable' because the
 * authoritative source bundle (utsavs-app.js) is not present in the workspace.
 */
export async function getOperationalImpact(query: OperationalQuery): Promise<OperationalResult> {
  const timestamp = new Date().toISOString();

  // 1. Validate Query
  if (!query.destination || !query.startDate || !query.endDate) {
    return {
      status: 'invalid_query',
      records: [],
      query_context: query,
      metadata: { timestamp, source_connected: false }
    };
  }

  // 2. Integration Point
  // In the future, this is where we will import and filter the authoritative dataset.
  // Example: const allRecords = await fetchAuthoritativeSource();
  // const validatedRecords = allRecords.filter(validateRecord);
  
  // CURRENT STATUS: SOURCE DISCONNECTED
  const status: OperationalResultStatus = 'source_unavailable';

  return {
    status,
    records: [],
    query_context: query,
    metadata: {
      timestamp,
      source_connected: false
    }
  };
}
