/**
 * @fileOverview Canonical Data Types for Utsavs Operational Intelligence.
 * Supports 11 datasets, 5 study dimensions, and 5 temporal types.
 */

export type TemporalKind =
  | "event"      // Single date
  | "period"     // Date range
  | "standing"   // Always valid policy
  | "recurring"  // Rules like "fixed" or "nthWeekday"
  | "estimated"; // Lunar/Hijri dates

export type RuleKind = "fixed" | "nth" | "dated";

export type ConfidenceTier = 
  | "high" 
  | "medium" 
  | "provisional" 
  | "estimated" 
  | "listed" 
  | "reference" 
  | "unsourced";

export type DateState = "confirmed" | "declared" | "provisional" | "estimated";

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
  applies_to?: string[];
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
  jurisdiction?: {
    country_code: string;
    region?: string;
    scope: "national" | "regional";
  };
}

export interface OperationalRecord {
  id: string;
  date: string; // YYYY-MM-DD for instances
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
  consequences: {
    implication: string;
    affected_operations: string[];
    severity: "low" | "medium" | "high";
  };
  source_label: string;
  source_dataset: string;
  metadata?: Record<string, unknown>;
}
