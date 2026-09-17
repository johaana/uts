/**
 * @fileOverview Structured Holiday Rules extracted from 17 authoritative chunks.
 * Preserves 294 rules across 92 jurisdictions.
 */
import { HolidayRule } from '../types';

export const HOLIDAY_RULES: Record<string, HolidayRule[]> = {
  IN: [
    { kind: "fixed", month: 1, day: 26, name: "Republic Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "DoPT Office Memorandum F.No.12/2/2023-JCA (3 Jul 2025)", source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf", last_checked: "2026-09-05" } },
    { kind: "fixed", month: 8, day: 15, name: "Independence Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "DoPT OM 3 Jul 2025, Annexure-I", source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf", last_checked: "2026-09-05" } },
    { kind: "fixed", month: 10, day: 2, name: "Gandhi Jayanti", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "DoPT OM 3 Jul 2025, Annexure-I", source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-09-14" }, name: "Ganesh Chaturthi", type: "religious", status: "confirmed", confidence: "high", evidence: { source_name: "CAG 2026 List (Annexure-I)", source_url: "https://cag.gov.in/uploads/media/Holiday-List-2026-06982ddd8e2f3c2-57681843.pdf", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-10-20" }, name: "Dussehra", type: "religious", status: "confirmed", confidence: "high", evidence: { source_name: "CAG 2026 List (Annexure-I)", source_url: "https://cag.gov.in/uploads/media/Holiday-List-2026-06982ddd8e2f3c2-57681843.pdf", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-11-08", 2027: "2027-10-29", 2028: "2028-10-17" }, name: "Diwali", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "DoPT OM, Annexure-I", source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-11-09" }, name: "Govardhan Puja", type: "cultural", status: "confirmed", confidence: "high", evidence: { source_name: "CAG Annexure-II", source_url: "https://cag.gov.in/uploads/media/Holiday-List-2026-069521fe6f358d0-89936988.pdf", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-11-11" }, name: "Bhai Dooj", type: "cultural", status: "confirmed", confidence: "high", evidence: { source_name: "CAG Annexure-II", source_url: "https://cag.gov.in/uploads/media/Holiday-List-2026-069521fe6f358d0-89936988.pdf", last_checked: "2026-09-05" } }
  ],
  JP: [
    { kind: "dated", dates: { 2026: "2026-01-01" }, name: "New Year's Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-01-12" }, name: "Coming of Age Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-02-11" }, name: "National Foundation Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-02-23" }, name: "Emperor's Birthday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-03-20" }, name: "Vernal Equinox Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-04-29" }, name: "Showa Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-05-03" }, name: "Constitution Memorial Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-05-04" }, name: "Greenery Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-05-05" }, name: "Children's Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-05-06" }, name: "Act Holiday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-07-20" }, name: "Marine Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-08-11" }, name: "Mountain Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-09-21" }, name: "Respect for the Aged Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-09-22" }, name: "Act Holiday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-09-23" }, name: "Autumn Equinox Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-10-12" }, name: "Sports Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-11-03" }, name: "Culture Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-11-23" }, name: "Labor Thanksgiving Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", last_checked: "2026-09-06" } }
  ],
  SG: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "MOM Singapore", source_url: "https://www.mom.gov.sg/employment-practices/public-holidays", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-02-17" }, name: "Chinese New Year", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "MOM Singapore", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-02-18" }, name: "Chinese New Year (Day 2)", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "MOM Singapore", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-04-03" }, name: "Good Friday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "MOM Singapore", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 5, day: 1, name: "Labour Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "MOM Singapore", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-05-27" }, name: "Hari Raya Haji", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "MOM Singapore", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-06-17" }, name: "Hari Raya Puasa", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "MOM Singapore", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 8, day: 9, name: "National Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "MOM Singapore", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-11-08" }, name: "Deepavali", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "MOM Singapore", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "MOM Singapore", last_checked: "2026-09-06" } }
  ],
  AU: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Fair Work Ombudsman", source_url: "https://www.fairwork.gov.au/employment-conditions/public-holidays", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 1, day: 26, name: "Australia Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Fair Work Ombudsman", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-04-03" }, name: "Good Friday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Fair Work Ombudsman", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-04-04" }, name: "Easter Saturday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Fair Work Ombudsman", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-04-05" }, name: "Easter Sunday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Fair Work Ombudsman", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-04-06" }, name: "Easter Monday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Fair Work Ombudsman", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 4, day: 25, name: "Anzac Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Fair Work Ombudsman", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-06-08" }, name: "King's Birthday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Fair Work Ombudsman", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-10-05" }, name: "Labour Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Fair Work Ombudsman", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Fair Work Ombudsman", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 12, day: 26, name: "Boxing Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Fair Work Ombudsman", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-12-28" }, name: "Additional public holiday for Boxing Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Fair Work Ombudsman", last_checked: "2026-09-06" } }
  ],
  NZ: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "New Zealand Government", source_url: "https://www.govt.nz/browse/work/public-holidays-and-work/", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 1, day: 2, name: "Day after New Year's Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "New Zealand Government", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 2, day: 6, name: "Waitangi Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "New Zealand Government", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-04-03" }, name: "Good Friday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "New Zealand Government", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-04-06" }, name: "Easter Monday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "New Zealand Government", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 4, day: 25, name: "Anzac Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "New Zealand Government", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 6, day: 1, name: "King's Birthday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "New Zealand Government", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 6, day: 26, name: "Matariki", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "New Zealand Government", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 10, day: 26, name: "Labour Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "New Zealand Government", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "New Zealand Government", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 12, day: 26, name: "Boxing Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "New Zealand Government", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-12-28" }, name: "Additional public holiday for Boxing Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "New Zealand Government", last_checked: "2026-09-06" } }
  ],
  CA: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Government of Canada", source_url: "https://www.canada.ca/en/revenue-agency/services/tax/public-holidays.html", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-04-03" }, name: "Good Friday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Government of Canada", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 5, day: 18, name: "Victoria Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Government of Canada", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 7, day: 1, name: "Canada Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Government of Canada", last_checked: "2026-09-06" } },
    { kind: "nth", month: 9, dow: 1, n: 1, name: "Labour Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Government of Canada", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 9, day: 30, name: "National Day for Truth and Reconciliation", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Government of Canada", last_checked: "2026-09-06" } },
    { kind: "nth", month: 10, dow: 1, n: 2, name: "Thanksgiving Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Government of Canada", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 11, day: 11, name: "Remembrance Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Government of Canada", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Government of Canada", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 12, day: 26, name: "Boxing Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Government of Canada", last_checked: "2026-09-06" } }
  ],
  US: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "U.S. OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-06" } },
    { kind: "nth", month: 1, dow: 1, n: 3, name: "Birthday of Martin Luther King, Jr.", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "U.S. OPM", last_checked: "2026-09-06" } },
    { kind: "nth", month: 2, dow: 1, n: 3, name: "Washington's Birthday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "U.S. OPM", last_checked: "2026-09-06" } },
    { kind: "nth", month: 5, dow: 1, n: -1, name: "Memorial Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "U.S. OPM", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 6, day: 19, name: "Juneteenth National Independence Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "U.S. OPM", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 7, day: 4, name: "Independence Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "U.S. OPM", last_checked: "2026-09-06" } },
    { kind: "nth", month: 9, dow: 1, n: 1, name: "Labor Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "U.S. OPM", last_checked: "2026-09-06" } },
    { kind: "nth", month: 10, dow: 1, n: 2, name: "Columbus Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "U.S. OPM", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 11, day: 11, name: "Veterans Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "U.S. OPM", last_checked: "2026-09-06" } },
    { kind: "nth", month: 11, dow: 4, n: 4, name: "Thanksgiving Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "U.S. OPM", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "U.S. OPM", last_checked: "2026-09-06" } }
  ],
  GB: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "UK Government", source_url: "https://www.gov.uk/bank-holidays", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-04-03" }, name: "Good Friday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "UK Government", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-04-06" }, name: "Easter Monday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "UK Government", last_checked: "2026-09-06" } },
    { kind: "nth", month: 5, dow: 1, n: 1, name: "Early May bank holiday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "UK Government", last_checked: "2026-09-06" } },
    { kind: "nth", month: 5, dow: 1, n: -1, name: "Spring bank holiday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "UK Government", last_checked: "2026-09-06" } },
    { kind: "nth", month: 8, dow: 1, n: -1, name: "Summer bank holiday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "UK Government", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "UK Government", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-12-28" }, name: "Boxing Day substitute day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "UK Government", last_checked: "2026-09-06" } }
  ],
  DE: [
    { kind: "fixed", month: 1, day: 1, name: "Neujahr", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Tag der Arbeit", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 10, day: 3, name: "Tag der Deutschen Einheit", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "1. Weihnachtsfeiertag", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 26, name: "2. Weihnachtsfeiertag", type: "holiday", status: "confirmed" }
  ],
  FR: [
    { kind: "fixed", month: 1, day: 1, name: "Jour de l'An", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Fête du Travail", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 7, day: 14, name: "Fête Nationale", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 11, day: 1, name: "Toussaint", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Noël", type: "holiday", status: "confirmed" },
    { kind: "dated", dates: { 2026: "2026-09-19" }, name: "Journées du Patrimoine", type: "cultural", status: "confirmed" }
  ],
  IT: [
    { kind: "fixed", month: 1, day: 1, name: "Capodanno", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 6, day: 2, name: "Festa della Repubblica", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 11, day: 1, name: "All Saints' Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 8, name: "Immaculate Conception", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Natale", type: "holiday", status: "confirmed" }
  ],
  ES: [
    { kind: "fixed", month: 1, day: 1, name: "Año Nuevo", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 10, day: 12, name: "Fiesta Nacional de España", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 11, day: 1, name: "All Saints' Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 6, name: "Constitution Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 8, name: "Immaculate Conception", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Navidad", type: "holiday", status: "confirmed" }
  ],
  NL: [
    { kind: "fixed", month: 12, day: 25, name: "Kerst", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 26, name: "Tweede Kerstdag", type: "holiday", status: "confirmed" }
  ],
  CH: [
    { kind: "fixed", month: 8, day: 1, name: "Swiss National Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed" }
  ],
  AE: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "MoHRE announcement", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-03-20", 2027: "2027-03-09" }, name: "Eid al-Fitr", type: "religious", status: "estimated" },
    { kind: "dated", dates: { 2026: "2026-05-27", 2027: "2027-05-16" }, name: "Eid al-Adha", type: "religious", status: "estimated" },
    { kind: "fixed", month: 12, day: 2, name: "National Day (Eid Al Etihad)", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "UAE Cabinet Resolution", last_checked: "2026-09-05" } },
    { kind: "fixed", month: 12, day: 3, name: "National Day (Eid Al Etihad)", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "UAE Cabinet Resolution", last_checked: "2026-09-05" } }
  ],
  SA: [
    { kind: "fixed", month: 9, day: 23, name: "Saudi National Day", type: "holiday", status: "confirmed" },
    { kind: "dated", dates: { 2026: "2026-03-20", 2027: "2027-03-09" }, name: "Eid al-Fitr", type: "religious", status: "estimated" },
    { kind: "dated", dates: { 2026: "2026-05-27", 2027: "2027-05-16" }, name: "Eid al-Adha", type: "religious", status: "estimated" }
  ],
  TR: [
    { kind: "fixed", month: 10, day: 29, name: "Republic Day", type: "holiday", status: "confirmed" },
    { kind: "dated", dates: { 2026: "2026-03-20", 2027: "2027-03-09" }, name: "Ramazan Bayramı (Eid al-Fitr)", type: "religious", status: "estimated" },
    { kind: "dated", dates: { 2026: "2026-05-27", 2027: "2027-05-16" }, name: "Kurban Bayramı (Eid al-Adha)", type: "religious", status: "estimated" }
  ],
  EG: [
    { kind: "fixed", month: 10, day: 6, name: "Armed Forces Day", type: "holiday", status: "confirmed" },
    { kind: "dated", dates: { 2026: "2026-03-20", 2027: "2027-03-09" }, name: "Eid al-Fitr", type: "religious", status: "estimated" },
    { kind: "dated", dates: { 2026: "2026-05-27", 2027: "2027-05-16" }, name: "Eid al-Adha", type: "religious", status: "estimated" }
  ],
  NG: [
    { kind: "fixed", month: 10, day: 1, name: "Independence Day", type: "holiday", status: "confirmed" },
    { kind: "dated", dates: { 2026: "2026-03-20", 2027: "2027-03-09" }, name: "Eid al-Fitr", type: "religious", status: "estimated" },
    { kind: "dated", dates: { 2026: "2026-05-27", 2027: "2027-05-16" }, name: "Eid al-Adha", type: "religious", status: "estimated" }
  ],
  KE: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Kenya Law", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-03-20" }, name: "Eid-ul-Fitr", type: "religious", status: "confirmed", confidence: "high", evidence: { source_name: "Kenya Gazette", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 4, day: 3, name: "Good Friday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Kenya Law", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 4, day: 6, name: "Easter Monday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Kenya Law", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 5, day: 1, name: "Labour Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Kenya Law", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 6, day: 1, name: "Madaraka Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Kenya Law", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 10, day: 10, name: "Mazingira Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Kenya Law", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 10, day: 20, name: "Mashujaa Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Kenya Law", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 12, day: 12, name: "Jamhuri Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Kenya Law", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Kenya Law", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 12, day: 26, name: "Boxing Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Kenya Law", last_checked: "2026-09-06" } }
  ],
  ZA: [
    { kind: "fixed", month: 1, day: 1, name: "New Year’s Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "South African Government", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 3, day: 21, name: "Human Rights Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "South African Government", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-04-03" }, name: "Good Friday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "South African Government", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-04-06" }, name: "Family Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "South African Government", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 4, day: 27, name: "Freedom Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "South African Government", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 5, day: 1, name: "Workers’ Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "South African Government", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 6, day: 16, name: "Youth Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "South African Government", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 8, day: 9, name: "National Women’s Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "South African Government", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-08-10" }, name: "National Women’s Day (observed)", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "South African Government", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 9, day: 24, name: "Heritage Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "South African Government", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 12, day: 16, name: "Day of Reconciliation", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "South African Government", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "South African Government", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 12, day: 26, name: "Day of Goodwill", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "South African Government", last_checked: "2026-09-06" } }
  ],
  VN: [
    { kind: "fixed", month: 9, day: 2, name: "National Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 4, day: 30, name: "Reunification Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Labour Day", type: "holiday", status: "confirmed" },
    { kind: "dated", dates: { 2026: "2026-02-17", 2027: "2027-02-06", 2028: "2028-01-26" }, name: "Tết (Lunar New Year)", type: "holiday", status: "confirmed" }
  ],
  LK: [
    { kind: "dated", dates: { 2026: "2026-01-03" }, name: "Duruthu Full Moon Poya Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Sri Lanka Government", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-01-15" }, name: "Tamil Thai Pongal Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Sri Lanka Government", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-02-01" }, name: "Nawam Full Moon Poya Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Sri Lanka Government", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 2, day: 4, name: "Independence Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Sri Lanka Government", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-02-15" }, name: "Maha Sivaratri Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Sri Lanka Government", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-03-02" }, name: "Medin Full Moon Poya Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Sri Lanka Government", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-03-21" }, name: "Id-Ul-Fitr (Ramazan Festival Day)", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Sri Lanka Government", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-04-01" }, name: "Bak Full Moon Poya Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Sri Lanka Government", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-04-03" }, name: "Good Friday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Sri Lanka Government", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-04-13" }, name: "Day Prior to Sinhala and Tamil New Year Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Sri Lanka Government", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-04-14" }, name: "Sinhala and Tamil New Year Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Sri Lanka Government", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-05-01" }, name: "Vesak Full Moon Poya Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Sri Lanka Government", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-05-28" }, name: "Id-Ul-Alha (Hadj Festival Day)", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Sri Lanka Government", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-05-30" }, name: "Adhi Poson Full Moon Poya Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Sri Lanka Government", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-05-31" }, name: "Day Following Vesak Full Moon Poya Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Sri Lanka Gazette", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-06-29" }, name: "Poson Full Moon Poya Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Sri Lanka Government", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-07-29" }, name: "Esala Full Moon Poya Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Sri Lanka Government", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-08-26" }, name: "Milaud-Nabi (The Prophet’s Birthday)", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Sri Lanka Government", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-08-27" }, name: "Nikini Full Moon Poya Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Sri Lanka Government", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-11-08" }, name: "Deepavali Festival Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Sri Lanka Government", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-12-25" }, name: "Christmas Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Sri Lanka Government", last_checked: "2026-09-05" } }
  ],
  BD: [
    { kind: "fixed", month: 3, day: 26, name: "Independence Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 16, name: "Victory Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 2, day: 21, name: "International Mother Language Day", type: "holiday", status: "confirmed" },
    { kind: "dated", dates: { 2026: "2026-03-20", 2027: "2027-03-09" }, name: "Eid al-Fitr", type: "religious", status: "estimated" },
    { kind: "dated", dates: { 2026: "2026-05-27", 2027: "2027-05-16" }, name: "Eid al-Adha", type: "religious", status: "estimated" }
  ],
  NP: [
    { kind: "fixed", month: 5, day: 29, name: "Republic Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 9, day: 19, name: "Constitution Day", type: "holiday", status: "confirmed" }
  ],
  TW: [
    { kind: "fixed", month: 10, day: 10, name: "National Day (Double Ten)", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 2, day: 28, name: "Peace Memorial Day", type: "holiday", status: "confirmed" },
    { kind: "dated", dates: { 2026: "2026-02-17", 2027: "2027-02-06", 2028: "2028-01-26" }, name: "Lunar New Year", type: "holiday", status: "confirmed" }
  ],
  PL: [
    { kind: "fixed", month: 11, day: 11, name: "Independence Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 3, name: "Constitution Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Labour Day", type: "holiday", status: "confirmed" }
  ],
  SE: [
    { kind: "fixed", month: 6, day: 6, name: "National Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 26, name: "Annandag jul (St. Stephen's Day)", type: "holiday", status: "confirmed" }
  ],
  PT: [
    { kind: "fixed", month: 6, day: 10, name: "Portugal Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 10, day: 5, name: "Republic Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 1, name: "Restoration of Independence Day", type: "holiday", status: "confirmed" }
  ],
  IE: [
    { kind: "fixed", month: 3, day: 17, name: "St. Patrick's Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 26, name: "St. Stephen's Day", type: "holiday", status: "confirmed" },
    { kind: "nth", month: 6, dow: 1, n: 1, name: "June Bank Holiday", type: "holiday", status: "confirmed" }
  ],
  AT: [
    { kind: "fixed", month: 10, day: 26, name: "National Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 8, name: "Immaculate Conception", type: "holiday", status: "confirmed" }
  ],
  GR: [
    { kind: "fixed", month: 3, day: 25, name: "Independence Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 10, day: 28, name: "Ochi Day", type: "holiday", status: "confirmed" }
  ],
  AR: [
    { kind: "fixed", month: 7, day: 9, name: "Independence Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 25, name: "May Revolution Day", type: "holiday", status: "confirmed" }
  ],
  CO: [
    { kind: "fixed", month: 7, day: 20, name: "Independence Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 8, day: 7, name: "Battle of Boyacá", type: "holiday", status: "confirmed" }
  ],
  CL: [
    { kind: "fixed", month: 9, day: 18, name: "Independence Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 9, day: 19, name: "Army Day (Glorias del Ejército)", type: "holiday", status: "confirmed" }
  ],
  MA: [
    { kind: "fixed", month: 11, day: 18, name: "Independence Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 7, day: 30, name: "Throne Day", type: "holiday", status: "confirmed" },
    { kind: "dated", dates: { 2026: "2026-03-20", 2027: "2027-03-09" }, name: "Eid al-Fitr", type: "religious", status: "estimated" },
    { kind: "dated", dates: { 2026: "2026-05-27", 2027: "2027-05-16" }, name: "Eid al-Adha", type: "religious", status: "estimated" }
  ],
  GH: [
    { kind: "fixed", month: 1, day: 1, name: "New Year’s Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Ghana Ministry of the Interior", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 1, day: 7, name: "Constitution Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Ghana Ministry of the Interior", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 3, day: 6, name: "Independence Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Ghana Ministry of the Interior", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-04-03" }, name: "Good Friday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Ghana Ministry of the Interior", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-04-06" }, name: "Easter Monday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Ghana Ministry of the Interior", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 5, day: 1, name: "Labour Day (Workers’ Day)", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Ghana Ministry of the Interior", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-05-27" }, name: "Eid-Ul-Adha (Hajj)", type: "religious", status: "confirmed", confidence: "high", evidence: { source_name: "Ghana Ministry of the Interior", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-07-03" }, name: "Republic Day (observed)", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Ghana Ministry of the Interior", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 9, day: 21, name: "Founder’s Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Ghana Ministry of the Interior", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 12, day: 4, name: "Farmer’s Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Ghana Ministry of the Interior", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Ghana Ministry of the Interior", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 12, day: 28, name: "Boxing Day (observed)", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Ghana Ministry of the Interior", last_checked: "2026-09-06" } }
  ],
  FI: [ { kind: "fixed", month: 12, day: 6, name: "Independence Day", type: "holiday", status: "confirmed" } ],
  DK: [
    { kind: "fixed", month: 6, day: 5, name: "Constitution Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 26, name: "Anden Juledag (2nd Christmas Day)", type: "holiday", status: "confirmed" }
  ],
  NO: [
    { kind: "fixed", month: 5, day: 17, name: "Constitution Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 26, name: "Andre Juledag (2nd Christmas Day)", type: "holiday", status: "confirmed" }
  ],
  BE: [
    { kind: "fixed", month: 7, day: 21, name: "National Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 11, day: 1, name: "Armistice Day", type: "holiday", status: "confirmed" }
  ],
  CZ: [
    { kind: "fixed", month: 9, day: 28, name: "Czech Statehood Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 10, day: 28, name: "Independent Czechoslovak State Day", type: "holiday", status: "confirmed" }
  ],
  HU: [
    { kind: "fixed", month: 8, day: 20, name: "State Foundation Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 10, day: 23, name: "Republic Day", type: "holiday", status: "confirmed" }
  ],
  RO: [ { kind: "fixed", month: 12, day: 1, name: "Great Union Day", type: "holiday", status: "confirmed" } ],
  RU: [
    { kind: "fixed", month: 6, day: 12, name: "Russia Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 11, day: 4, name: "Unity Day", type: "holiday", status: "confirmed" }
  ],
  UA: [ { kind: "fixed", month: 8, day: 24, name: "Independence Day", type: "holiday", status: "confirmed" } ],
  QA: [ { kind: "fixed", month: 12, day: 18, name: "National Day", type: "holiday", status: "confirmed" } ],
  JO: [ { kind: "fixed", month: 5, day: 25, name: "Independence Day", type: "holiday", status: "confirmed" } ],
  TZ: [
    { kind: "fixed", month: 4, day: 26, name: "Union Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 9, name: "Independence Day", type: "holiday", status: "confirmed" }
  ],
  PE: [
    { kind: "fixed", month: 7, day: 28, name: "Independence Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 7, day: 29, name: "Great Military Parade Day", type: "holiday", status: "confirmed" }
  ],
  EC: [ { kind: "fixed", month: 8, day: 10, name: "Independence Day", type: "holiday", status: "confirmed" } ],
  UY: [ { kind: "fixed", month: 8, day: 25, name: "Independence Day", type: "holiday", status: "confirmed" } ],
  KH: [ { kind: "fixed", month: 11, day: 9, name: "Independence Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  MM: [ { kind: "fixed", month: 1, day: 4, name: "Independence Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  LA: [ { kind: "fixed", month: 12, day: 2, name: "Lao National Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  MN: [ { kind: "fixed", month: 7, day: 11, name: "Naadam (National Day)", type: "holiday", status: "confirmed", confidence: "medium" } ],
  KZ: [ { kind: "fixed", month: 12, day: 16, name: "Independence Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  BN: [ { kind: "fixed", month: 2, day: 23, name: "National Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  FJ: [ { kind: "fixed", month: 10, day: 10, name: "Fiji Day (National Day)", type: "holiday", status: "confirmed", confidence: "medium" } ],
  IS: [ { kind: "fixed", month: 6, day: 17, name: "National Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  LU: [ { kind: "fixed", month: 6, day: 23, name: "National Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  SK: [ { kind: "fixed", month: 9, day: 1, name: "Constitution Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  SI: [ { kind: "fixed", month: 6, day: 25, name: "Statehood Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  HR: [ { kind: "fixed", month: 6, day: 25, name: "Statehood Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  RS: [ { kind: "fixed", month: 2, day: 15, name: "Statehood Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  BG: [ { kind: "fixed", month: 3, day: 3, name: "Liberation Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  LT: [ { kind: "fixed", month: 2, day: 16, name: "Independence Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  LV: [ { kind: "fixed", month: 11, day: 18, name: "Independence Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  EE: [ { kind: "fixed", month: 2, day: 24, name: "Independence Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  MT: [ { kind: "fixed", month: 9, day: 21, name: "Independence Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  CY: [ { kind: "fixed", month: 10, day: 1, name: "Independence Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  LB: [ { kind: "fixed", month: 11, day: 22, name: "Independence Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  IQ: [ { kind: "fixed", month: 10, day: 3, name: "National Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  OM: [ { kind: "fixed", month: 11, day: 18, name: "National Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  BH: [ { kind: "fixed", month: 12, day: 16, name: "National Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  KW: [ { kind: "fixed", month: 2, day: 25, name: "National Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  DZ: [ { kind: "fixed", month: 7, day: 5, name: "Independence Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  TN: [ { kind: "fixed", month: 3, day: 20, name: "Independence Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  SN: [ { kind: "fixed", month: 4, day: 4, name: "Independence Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  CI: [ { kind: "fixed", month: 8, day: 7, name: "Independence Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  CM: [ { kind: "fixed", month: 5, day: 20, name: "National Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  ZM: [ { kind: "fixed", month: 10, day: 24, name: "Independence Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  ZW: [ { kind: "fixed", month: 4, day: 18, name: "Independence Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  RW: [
    { kind: "fixed", month: 1, day: 1, name: "New Year’s Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Republic of Rwanda", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 1, day: 2, name: "Day after New Year’s Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Republic of Rwanda", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 2, day: 2, name: "National Heroes Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Republic of Rwanda", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-04-03" }, name: "Good Friday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Republic of Rwanda", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-04-06" }, name: "Easter Monday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Republic of Rwanda", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 4, day: 7, name: "Genocide against the Tutsi Memorial Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Republic of Rwanda", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 5, day: 1, name: "Labor Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Republic of Rwanda", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-05-13" }, name: "Eid al-Fitr", type: "religious", status: "confirmed", confidence: "high", evidence: { source_name: "Republic of Rwanda", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 7, day: 1, name: "Independence Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Republic of Rwanda", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 7, day: 4, name: "Liberation Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Republic of Rwanda", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-07-20" }, name: "Eid al-Adha", type: "religious", status: "confirmed", confidence: "high", evidence: { source_name: "Republic of Rwanda", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 8, day: 6, name: "Umuganura Day", type: "cultural", status: "confirmed", confidence: "high", evidence: { source_name: "Republic of Rwanda", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 8, day: 15, name: "Assumption Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Republic of Rwanda", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Republic of Rwanda", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 12, day: 26, name: "Boxing Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Republic of Rwanda", last_checked: "2026-09-06" } },
  ],
  BW: [ { kind: "fixed", month: 9, day: 30, name: "Independence Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  VE: [ { kind: "fixed", month: 7, day: 5, name: "Independence Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  BO: [ { kind: "fixed", month: 8, day: 6, name: "Independence Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  PA: [ { kind: "fixed", month: 11, day: 3, name: "Independence Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  CR: [ { kind: "fixed", month: 9, day: 15, name: "Independence Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  DO: [ { kind: "fixed", month: 2, day: 27, name: "Independence Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  JM: [ { kind: "fixed", month: 8, day: 6, name: "Independence Day", type: "holiday", status: "confirmed", confidence: "medium" } ],
  NA: [
    { kind: "fixed", month: 1, day: 1, name: "New Year’s Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Namibia MICT", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 3, day: 21, name: "Independence Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Namibia MICT", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-04-03" }, name: "Good Friday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Namibia MICT", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-04-06" }, name: "Easter Monday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Namibia MICT", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 5, day: 1, name: "Workers’ Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Namibia MICT", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 5, day: 4, name: "Cassinga Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Namibia MICT", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 5, day: 14, name: "Ascension Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Namibia MICT", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 5, day: 25, name: "Africa Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Namibia MICT", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 5, day: 28, name: "Genocide Remembrance Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Namibia MICT", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 8, day: 26, name: "Heroes' Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Namibia MICT", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 12, day: 10, name: "Human Rights Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Namibia MICT", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Namibia MICT", last_checked: "2026-09-06" } }
  ]
};
