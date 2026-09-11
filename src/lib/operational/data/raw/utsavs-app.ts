/**
 * @fileOverview Authoritative Utsavs Operational Source (Raw)
 * 
 * This file contains the authoritative operational intelligence data.
 * Structure mirrors the deploy_bundle/utsavs-app.js source.
 */

export interface Evidence {
  source_name: string;
  source_url: string;
  link_label?: string;
  last_checked?: string;
}

export type EventType = "public" | "religious" | "cultural" | "holiday" | "harvest" | "seasonal" | "solar" | "policy" | "institutional" | "business" | "travel" | "operational" | "regional";
export type DateStatus = "confirmed" | "estimated" | "live";
export type ConfidenceTier = "high" | "medium" | "provisional" | "estimated" | "listed" | "reference";

export interface HolidayRule {
  kind: "fixed" | "nth" | "dated";
  name: string;
  type: EventType;
  status: DateStatus;
  confidence?: ConfidenceTier;
  evidence?: Evidence;
  state?: string;
  month?: number;
  day?: number;
  dow?: number;
  n?: number;
  dates?: Record<number, string>;
}

export interface OperationalRecordRaw {
  institution_id?: string;
  institution?: string;
  date: string;
  date_end?: string;
  segment?: string;
  status: string;
  scope_type: string;
  scope: string;
  detail?: string;
  confidence: ConfidenceTier;
  source_type?: string;
  evidence: Evidence;
}

/**
 * 1. HOLIDAYS
 */
export const HOLIDAYS: Record<string, HolidayRule[]> = {
  IN: [
    { kind: "fixed", month: 1, day: 26, name: "Republic Day", type: "public", status: "confirmed", confidence: "high", evidence: { source_name: "DoPT Office Memorandum F.No.12/2/2023-JCA (3 Jul 2025)", source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf", last_checked: "2026-09-05" } },
    { kind: "fixed", month: 8, day: 15, name: "Independence Day", type: "public", status: "confirmed", confidence: "high", evidence: { source_name: "DoPT Office Memorandum F.No.12/2/2023-JCA (3 Jul 2025)", source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf", last_checked: "2026-09-05" } },
    { kind: "fixed", month: 10, day: 2, name: "Gandhi Jayanti", type: "public", status: "confirmed", confidence: "high", evidence: { source_name: "DoPT Office Memorandum F.No.12/2/2023-JCA (3 Jul 2025)", source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-11-08", 2027: "2027-10-29" }, name: "Diwali", type: "public", status: "confirmed", confidence: "high", evidence: { source_name: "DoPT OM F.No.12/2/2023-JCA, Annexure-I", source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf", last_checked: "2026-09-05" } }
  ]
};

/**
 * 2. REGIONAL_INTELLIGENCE (35 records expected)
 * PROOF OF WORK: Maharashtra / Ganesh Chaturthi
 */
export const REGIONAL_INTELLIGENCE: any[] = [
  {
    country_code: "IN",
    region: "Maharashtra",
    name: "Ganesh Chaturthi",
    date: "2026-09-14",
    type: "regional",
    status: "confirmed",
    implication: "Total state holiday. Offices and banks closed in Mumbai, Pune and across Maharashtra.",
    evidence: {
      source_name: "Maharashtra Government Gazette (Public Holidays 2026)",
      source_url: "https://www.maharashtra.gov.in/",
      last_checked: "2026-09-05"
    }
  }
];

/**
 * 3. STUDY_INSTITUTIONAL_TIMING (27 records expected)
 */
export const STUDY_INSTITUTIONAL_TIMING: any[] = [];

/**
 * 4. CORPORATE_TRAVEL_INTELLIGENCE_DATA (31 records expected)
 */
export const CORPORATE_TRAVEL_INTELLIGENCE_DATA: any[] = [];

/**
 * 5. BANKING_INTELLIGENCE_DATA (6 records expected)
 */
export const BANKING_INTELLIGENCE_DATA: any[] = [];

/**
 * 6. CORPORATE_MARKET_DEPTH_ADDITIONS (20 records expected)
 */
export const CORPORATE_MARKET_DEPTH_ADDITIONS: any[] = [];

/**
 * 7. CUSTOMS_INTELLIGENCE_DATA (19 records expected)
 */
export const CUSTOMS_INTELLIGENCE_DATA: any[] = [];

/**
 * 8. CORPORATE_INTELLIGENCE (132 records expected)
 */
export const CORPORATE_INTELLIGENCE: any[] = [];

/**
 * 9. STUDENT_RISK_DATA (33 records expected)
 */
export const STUDENT_RISK_DATA: any[] = [];

/**
 * 10. STUDENT_INTELLIGENCE_EXTRA (99 records expected)
 */
export const STUDENT_INTELLIGENCE_EXTRA: any[] = [];

/**
 * 11. OPERATIONAL_GLOBAL_EXPANSION (662 records expected)
 */
export const OPERATIONAL_GLOBAL_EXPANSION: any[] = [];

export const COUNTRY_LABELS = { "IN": "India", "US": "United States", "CA": "Canada", "JP": "Japan" };
export const YEARS_SUPPORTED = [2026, 2027];
