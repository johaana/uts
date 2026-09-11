/**
 * @fileOverview Authoritative Data Validator
 * 
 * Enforces strict data integrity rules for the Utsavs operational dataset.
 * Rejected records must never reach the production application.
 */

import { DateIntelligenceRecord, EvidenceType } from './types';

/**
 * Validates a normalized record against the production contract.
 * 
 * CORE INTEGRITY RULES:
 * 1. Provenance: Every record must have a source name and verified status.
 * 2. Institutional Rule: Generic holidays != Institutional closures.
 * 3. Scope Rule: Institutional records must identify the specific institution.
 */
export function validateRecord(record: DateIntelligenceRecord): { valid: boolean; reason?: string } {
  // 1. Structural Checks
  if (!record.id) return { valid: false, reason: "Missing record ID" };
  if (!record.date || !/^\d{4}-\d{2}-\d{2}$/.test(record.date)) {
    return { valid: false, reason: "Malformed or missing date" };
  }
  if (!record.jurisdiction?.country_code) return { valid: false, reason: "Missing country code" };

  // 2. Provenance Integrity
  if (!record.evidence?.source_name) return { valid: false, reason: "Missing source provenance" };
  if (record.evidence.verification_status === 'stale') return { valid: false, reason: "Source evidence is stale" };

  // 3. Institutional Integrity
  // RULE: Institutional closures REQUIRE institutional evidence
  if (record.jurisdiction.scope === 'institutional') {
    if (!record.institution?.id) return { valid: false, reason: "Institutional scope requires an institution ID" };
    
    const validEvidenceTypes: EvidenceType[] = ['institutional', 'government', 'regulatory'];
    if (!validEvidenceTypes.includes(record.evidence.source_type)) {
      return { valid: false, reason: "Institutional claims must have institutional or regulatory evidence" };
    }
  }

  // 4. Purpose Check
  if (!record.purpose_relevance || record.purpose_relevance.length === 0) {
    return { valid: false, reason: "Record has no assigned planning purpose (Travel, Study, etc.)" };
  }

  return { valid: true };
}
