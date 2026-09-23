/**
 * @fileOverview Canonical Data Types for Utsavs Operational Intelligence.
 * Supports 11 datasets and 5 explicit temporal types.
 */

export type TemporalKind =
  | "event"      // Single date occurrence
  | "period"     // Interval with start and end
  | "standing"   // Policy/condition in force over time
  | "recurring"  // Rules expanded at query time (fixed/nthWeekday)
  | "estimated"; // Lunar/Hijri dates requiring observation

export type RuleKind = "fixed" | "nth" | "dated";

export type ConfidenceTier = 
  | "high" 
  | "medium" 
  | "provisional" 
  | "estimated" 
  | "listed" 
  | "reference" 
  | "unsourced";

export type DateState = 
  | "confirmed" 
  | "declared" 
  | "provisional" 
  | "estimated"
  | "annual_calendar_pending"
  | "lunar_estimate"
  | "proposed"
  | "awaiting_confirmation";

export type OperationalCategory = 
  | "holiday" 
  | "regional" 
  | "institutional" 
  | "business_travel" 
  | "banking" 
  | "market" 
  | "customs" 
  | "student_risk" 
  | "global_expansion"
  | "policy";

export type UserPurpose = "travel" | "business" | "study" | "workforce" | "logistics";

export interface SourceEvidence {
  source_name: string | null;
  source_url: string;
  link_label?: string;
  last_checked?: string;
}

export interface Institution {
  id: string;
  name: string;
  country: string;
  type: string;
  regular_hours?: string;
  hours_source?: string;
}

export interface HolidayRule {
  kind: RuleKind;
  name: string;
  type: OperationalCategory;
  status: DateState;
  confidence?: ConfidenceTier;
  evidence?: SourceEvidence;
  month?: number;
  day?: number;
  dow?: number;
  n?: number;
  dates?: Record<number, string>;
}

/**
 * The Canonical Rule represents the static source pattern (the 408+ patterns).
 */
export interface CanonicalRule {
  id: string;
  rule_id: string; // Stable rule identity
  source_dataset: string; // Authoritative provenance stamp
  name: string;
  category: OperationalCategory;
  jurisdiction: {
    country_code: string;
    country_name: string;
    region?: string;
    scope: "national" | "regional" | "local" | "institutional";
  };
  institution?: Institution;
  purpose_relevance: UserPurpose[];
  temporal_kind: TemporalKind;
  state: DateState;
  confidence: ConfidenceTier;
  evidence: SourceEvidence;
  // Specific data for the temporal engine
  valid_from?: string; // YYYY-MM-DD
  valid_to?: string;   // YYYY-MM-DD
  rule_definition?: HolidayRule;
  consequences: {
    implication: string;
    affected_operations: string[];
    severity: "low" | "medium" | "high";
  };
}

/**
 * A Date Intelligence Record represents a concrete temporal instance 
 * resulting from rule evaluation.
 */
export interface DateIntelligenceRecord extends CanonicalRule {
  date: string; // The specific evaluated date (YYYY-MM-DD)
  end_date?: string; // For periods
}

export interface OperationalQuery {
  destination: string;
  startDate: string; // YYYY-MM-DD
  endDate: string;   // YYYY-MM-DD
  purpose: UserPurpose;
  activity?: string;
  include?: {
    events?: boolean;
    standing?: boolean;
  };
}

export interface OperationalResult {
  status: 'results_found' | 'no_matching_records' | 'source_unavailable' | 'error';
  records: DateIntelligenceRecord[];
  query_context: OperationalQuery;
  metadata: {
    timestamp: string;
    source_connected: boolean;
    version?: string;
    now_resolved: string;
  };
}
