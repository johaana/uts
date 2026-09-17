/**
 * @fileOverview Structured Holiday Rules extracted from 17 Chunks.
 */
import { HolidayRule } from '../types';

export const HOLIDAY_RULES: Record<string, HolidayRule[]> = {
  IN: [
    { kind: "fixed", month: 1, day: 26, name: "Republic Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "DoPT Office Memorandum F.No.12/2/2023-JCA", source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf", last_checked: "2026-09-05" } },
    { kind: "fixed", month: 8, day: 15, name: "Independence Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "DoPT Office Memorandum F.No.12/2/2023-JCA", source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf", last_checked: "2026-09-05" } },
    { kind: "fixed", month: 10, day: 2, name: "Gandhi Jayanti", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "DoPT Office Memorandum F.No.12/2/2023-JCA", source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-09-14" }, name: "Ganesh Chaturthi", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Comptroller and Auditor General of India, 2026 List", source_url: "https://cag.gov.in/uploads/media/Holiday-List-2026-06982ddd8e2f3c2-57681843.pdf", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-10-20" }, name: "Dussehra", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Comptroller and Auditor General of India, 2026 List", source_url: "https://cag.gov.in/uploads/media/Holiday-List-2026-06982ddd8e2f3c2-57681843.pdf", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-11-08", 2027: "2027-10-29", 2028: "2028-10-17" }, name: "Diwali", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "DoPT OM F.No.12/2/2023-JCA", source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf", last_checked: "2026-09-05" } }
  ],
  JP: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Government of Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-09-21" }, name: "Respect for the Aged Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Government of Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 11, day: 3, name: "Culture Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" } }
  ],
  US: [
    { kind: "nth", month: 9, dow: 1, n: 1, name: "Labor Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "U.S. OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-06" } },
    { kind: "nth", month: 11, dow: 4, n: 4, name: "Thanksgiving Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "U.S. OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-06" } }
  ],
  SG: [
    { kind: "dated", dates: { 2026: "2026-11-08" }, name: "Deepavali", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "MOM Singapore", source_url: "https://www.mom.gov.sg/employment-practices/public-holidays", last_checked: "2026-09-06" } }
  ],
  AU: [
    { kind: "nth", month: 10, dow: 1, n: 1, name: "Labour Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Fair Work Ombudsman", source_url: "https://www.fairwork.gov.au/employment-conditions/public-holidays", last_checked: "2026-09-06" }, jurisdiction: { country_code: "AU", region: "NSW", scope: "regional" } }
  ],
  CA: [
    { kind: "nth", month: 10, dow: 1, n: 2, name: "Thanksgiving Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Gov Canada", source_url: "https://www.canada.ca/en/revenue-agency/services/tax/public-holidays.html", last_checked: "2026-09-06" } }
  ]
};
