/**
 * @fileOverview Data interfaces for the Utsavs Operational Intelligence layer.
 * These types define the canonical schema for the authoritative source integration.
 */

export type ConfidenceTier = 'high' | 'medium' | 'provisional' | 'estimated' | 'listed' | 'reference';
export type DateState = 'confirmed' | 'declared' | 'provisional' | 'estimated';
export type OperationalStatus = 'OPEN' | 'CLOSED' | 'EARLY_CLOSE' | 'LIMITED' | 'HOLIDAY_APPLIES' | 'UNKNOWN';
export type EvidenceType = 'government' | 'institutional' | 'regulatory' | 'algorithmic' | 'manual_verification';

export type UserPurpose = 'travel' | 'business' | 'study' | 'workforce' | 'logistics';

export interface SourceEvidence {
  source_id: string;
  source_name: string;
  source_url?: string;
  source_type: EvidenceType;
  last_checked: string; // ISO Date
  verification_status: 'verified' | 'provisional' | 'stale';
  link_label?: string;
}

export interface Jurisdiction {
  country_code: string; // ISO 3116-1 alpha-2
  country_name: string;
  region?: string; // state/province/ISO 3166-2
  local?: string;  // city/municipality
  scope: 'national' | 'regional' | 'local' | 'institutional';
}

export interface Institution {
  id: string;
  name: string;
  type: 'bank' | 'market' | 'customs' | 'port' | 'university' | 'embassy' | 'transport';
  applicability: string; // describing how/who it affects
}

export interface PracticalConsequence {
  implication: string;   // e.g., "Total market closure", "Reduced transport"
  action_suggested?: string;
  affected_operations: string[];
  severity: 'low' | 'medium' | 'high';
}

export interface DateIntelligenceRecord {
  id: string;
  date: string; // YYYY-MM-DD
  date_end?: string;
  name: string;
  jurisdiction: Jurisdiction;
  institution?: Institution;
  purpose_relevance: UserPurpose[];
  state: DateState;
  confidence: ConfidenceTier;
  evidence: SourceEvidence;
  consequences: PracticalConsequence;
}

export interface OperationalQuery {
  origin?: string;
  destination: string;
  startDate: string;
  endDate: string;
  purpose: UserPurpose;
}

export type OperationalResultStatus = 
  | 'results_found' 
  | 'no_matching_records' 
  | 'source_unavailable' 
  | 'invalid_query' 
  | 'error';

export interface OperationalResult {
  status: OperationalResultStatus;
  records: DateIntelligenceRecord[];
  query_context: OperationalQuery;
  metadata: {
    timestamp: string;
    source_connected: boolean;
    version?: string;
  };
}
