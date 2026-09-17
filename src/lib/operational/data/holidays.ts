/**
 * @fileOverview Structured Holiday Rules extracted from Authoritative Chunks.
 * 100% Fidelity to source data rules for primary jurisdictions.
 */
import { HolidayRule } from '../types';

export const HOLIDAY_RULES: Record<string, HolidayRule[]> = {
  IN: [
    { kind: "fixed", month: 1, day: 26, name: "Republic Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "DoPT Office Memorandum F.No.12/2/2023-JCA", source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf", last_checked: "2026-09-05" } },
    { kind: "fixed", month: 8, day: 15, name: "Independence Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "DoPT Office Memorandum F.No.12/2/2023-JCA", source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf", last_checked: "2026-09-05" } },
    { kind: "fixed", month: 10, day: 2, name: "Gandhi Jayanti", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "DoPT Office Memorandum F.No.12/2/2023-JCA", source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-11-08", 2027: "2027-10-29", 2028: "2028-10-17" }, name: "Diwali", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "DoPT OM F.No.12/2/2023-JCA", source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf", last_checked: "2026-09-05" } }
  ],
  JP: [
    { kind: "dated", dates: { 2026: "2026-09-21" }, name: "Respect for the Aged Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 11, day: 3, name: "Culture Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" } }
  ],
  SG: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "MOM Singapore", source_url: "https://www.mom.gov.sg/employment-practices/public-holidays", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-11-08" }, name: "Deepavali", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "MOM Singapore", source_url: "https://www.mom.gov.sg/employment-practices/public-holidays", last_checked: "2026-09-06" } }
  ],
  US: [
    { kind: "nth", month: 9, dow: 1, n: 1, name: "Labor Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "U.S. OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-06" } },
    { kind: "nth", month: 11, dow: 4, n: 4, name: "Thanksgiving Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "U.S. OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "U.S. OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-06" } }
  ],
  GB: [
    { kind: "nth", month: 8, dow: 1, n: -1, name: "Summer Bank Holiday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "GOV.UK", source_url: "https://www.gov.uk/bank-holidays", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "GOV.UK", source_url: "https://www.gov.uk/bank-holidays", last_checked: "2026-09-06" } }
  ],
  CA: [
    { kind: "nth", month: 9, dow: 1, n: 1, name: "Labour Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Gov Canada", source_url: "https://www.canada.ca/en/revenue-agency/services/tax/public-holidays.html", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Gov Canada", source_url: "https://www.canada.ca/en/revenue-agency/services/tax/public-holidays.html", last_checked: "2026-09-06" } }
  ],
  AU: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Fair Work Ombudsman", source_url: "https://www.fairwork.gov.au/employment-conditions/public-holidays", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 1, day: 26, name: "Australia Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Fair Work Ombudsman", source_url: "https://www.fairwork.gov.au/employment-conditions/public-holidays", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-04-03", 2027: "2027-03-26" }, name: "Good Friday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Fair Work Ombudsman", source_url: "https://www.fairwork.gov.au/employment-conditions/public-holidays", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-04-06", 2027: "2027-03-29" }, name: "Easter Monday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Fair Work Ombudsman", source_url: "https://www.fairwork.gov.au/employment-conditions/public-holidays", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 4, day: 25, name: "Anzac Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Fair Work Ombudsman", source_url: "https://www.fairwork.gov.au/employment-conditions/public-holidays", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-10-05", 2027: "2027-10-04" }, name: "Labour Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Fair Work Ombudsman", source_url: "https://www.fairwork.gov.au/employment-conditions/public-holidays", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Fair Work Ombudsman", source_url: "https://www.fairwork.gov.au/employment-conditions/public-holidays", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 12, day: 26, name: "Boxing Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Fair Work Ombudsman", source_url: "https://www.fairwork.gov.au/employment-conditions/public-holidays", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-12-28", 2027: "2027-12-27" }, name: "Additional public holiday for Boxing Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Fair Work Ombudsman", source_url: "https://www.fairwork.gov.au/employment-conditions/public-holidays", last_checked: "2026-09-06" } }
  ],
  DE: [
    { kind: "fixed", month: 10, day: 3, name: "German Unity Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed" }
  ],
  FR: [
    { kind: "fixed", month: 7, day: 14, name: "Bastille Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Noël", type: "holiday", status: "confirmed" }
  ],
  IT: [
    { kind: "fixed", month: 6, day: 2, name: "Festa della Repubblica", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 11, day: 1, name: "All Saints' Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 8, name: "Immaculate Conception", type: "holiday", status: "confirmed" }
  ],
  ES: [
    { kind: "fixed", month: 10, day: 12, name: "Fiesta Nacional de España", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 11, day: 1, name: "All Saints' Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 6, name: "Constitution Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 8, name: "Immaculate Conception", type: "holiday", status: "confirmed" }
  ],
  CH: [
    { kind: "fixed", month: 8, day: 1, name: "Swiss National Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed" }
  ],
  AE: [
    { kind: "fixed", month: 12, day: 2, name: "National Day (Eid Al Etihad)", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 3, name: "National Day (Eid Al Etihad)", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed" }
  ],
  NZ: [
    { kind: "fixed", month: 2, day: 6, name: "Waitangi Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 4, day: 25, name: "Anzac Day", type: "holiday", status: "confirmed" }
  ],
  KR: [
    { kind: "fixed", month: 8, day: 15, name: "Liberation Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 10, day: 3, name: "National Foundation Day", type: "holiday", status: "confirmed" }
  ]
};
