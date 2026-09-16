/**
 * @fileOverview Structured Holiday Rules Registry.
 * Extracted structurally from the authoritative utsavs-app.js.
 */
import { HolidayRule } from '../types';

export const HOLIDAY_RULES: Record<string, HolidayRule[]> = {
  IN: [
    { kind: "fixed", month: 1, day: 26, name: "Republic Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "DoPT Office Memorandum F.No.12/2/2023-JCA", source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf", last_checked: "2026-09-05" } },
    { kind: "fixed", month: 8, day: 15, name: "Independence Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "DoPT Office Memorandum F.No.12/2/2023-JCA", source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf", last_checked: "2026-09-05" } },
    { kind: "fixed", month: 10, day: 2, name: "Gandhi Jayanti", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "DoPT Office Memorandum F.No.12/2/2023-JCA", source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-11-08", 2027: "2027-10-29" }, name: "Diwali", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "DoPT OM F.No.12/2/2023-JCA", source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf", last_checked: "2026-09-05" } }
  ],
  JP: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Government of Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-09-21" }, name: "Respect for the Aged Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Government of Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" } }
  ],
  US: [
    { kind: "nth", month: 9, dow: 1, n: 1, name: "Labor Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "U.S. OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-05" } },
    { kind: "nth", month: 11, dow: 4, n: 4, name: "Thanksgiving Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "U.S. OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-06" } }
  ],
  SG: [
    { kind: "fixed", month: 8, day: 9, name: "National Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Singapore Ministry of Manpower", source_url: "https://www.mom.gov.sg/employment-practices/public-holidays", last_checked: "2026-09-06" } }
  ]
  // Additional 88 country keys represented but empty in this restoration pass summary
};
