/**
 * @fileOverview Authoritative Utsavs Operational Source (Raw)
 * 
 * This file contains the authoritative operational intelligence data.
 * It is consumed by the normalization layer.
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

export interface PolicyRecordRaw {
  country: string;
  topic: string;
  summary: string;
  source_url?: string;
  confidence: ConfidenceTier;
  effective_date?: string;
  status?: string;
  source_type?: string;
  source_name?: string;
  last_checked?: string;
}

export const HOLIDAYS: Record<string, HolidayRule[]> = {
  IN: [
    { kind: "fixed", month: 1, day: 26, name: "Republic Day", type: "public", status: "confirmed", confidence: "high", evidence: { source_name: "DoPT Office Memorandum F.No.12/2/2023-JCA (3 Jul 2025)", source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf", last_checked: "2026-09-05" } },
    { kind: "fixed", month: 8, day: 15, name: "Independence Day", type: "public", status: "confirmed", confidence: "high", evidence: { source_name: "DoPT Office Memorandum F.No.12/2/2023-JCA (3 Jul 2025)", source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf", last_checked: "2026-09-05" } },
    { kind: "fixed", month: 10, day: 2, name: "Gandhi Jayanti", type: "public", status: "confirmed", confidence: "high", evidence: { source_name: "DoPT Office Memorandum F.No.12/2/2023-JCA (3 Jul 2025)", source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-09-14" }, name: "Ganesh Chaturthi", type: "religious", status: "confirmed", confidence: "high", state: "listed", evidence: { source_name: "Comptroller and Auditor General of India, 2026 List of Public Holidays", source_url: "https://cag.gov.in/uploads/media/Holiday-List-2026-06982ddd8e2f3c2-57681843.pdf", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-10-20" }, name: "Dussehra", type: "religious", status: "confirmed", confidence: "high", state: "listed", evidence: { source_name: "Comptroller and Auditor General of India, 2026 List of Public Holidays", source_url: "https://cag.gov.in/uploads/media/Holiday-List-2026-06982ddd8e2f3c2-57681843.pdf", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-11-08", 2027: "2027-10-29", 2028: "2028-10-17" }, name: "Diwali", type: "public", status: "confirmed", confidence: "high", evidence: { source_name: "DoPT OM F.No.12/2/2023-JCA, Annexure-I", source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf", last_checked: "2026-09-05" } }
  ],
  US: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "public", status: "confirmed", confidence: "high", evidence: { source_name: "U.S. Office of Personnel Management — Federal Holidays", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-09-07", 2027: "2027-09-06" }, name: "Labor Day", type: "public", status: "confirmed", confidence: "high", evidence: { source_name: "U.S. OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-05" } }
  ]
};

export const OPERATIONAL_RECORDS: OperationalRecordRaw[] = [
  {
    institution_id: "US_FEDERAL", date: "2026-01-01", segment: "Federal employee holiday",
    status: "HOLIDAY_APPLIES", scope_type: "ALL_OFFICES",
    scope: "New Year's Day is on the OPM federal holiday schedule for most Federal employees.",
    confidence: "high", evidence: { source_name: "U.S. Office of Personnel Management — 2026 Federal Holiday Schedule", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-05" }
  }
];

export const POLICY_RECORDS: PolicyRecordRaw[] = [
  {
    country: "CA", topic: "Study-permit financial requirement", effective_date: "2026-09-01", status: "EFFECTIVE",
    summary: "For applications on or after 1 Sep 2026, a single applicant outside Quebec must show CAN$23,448 for first-year living expenses.",
    confidence: "high", source_name: "IRCC", source_url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents/financial-support.html", last_checked: "2026-09-06"
  }
];
