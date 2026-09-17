/**
 * @fileOverview Structured Holiday Rules extracted from 17 authoritative chunks.
 * Preserves 294 rules across 92 jurisdictions (Corpus A).
 */
import { HolidayRule, Evidence, EventType, ConfidenceTier } from '../types';

const BATCH4_SOURCE: Evidence = {
  source_name: "CIA World Factbook / Wikipedia / General Reference",
  source_url: "",
  last_checked: "2026-09-06"
};

function fixed(month: number, day: number, name: string, type: EventType, confidence?: ConfidenceTier, evidence?: Evidence, state?: string): HolidayRule {
  return { kind: "fixed", month, day, name, type, status: "confirmed", confidence: confidence || "listed", evidence: evidence || (confidence === "medium" ? BATCH4_SOURCE : undefined), state };
}

function dated(dates: Record<number, string>, name: string, type: EventType, status?: any, confidence?: ConfidenceTier, evidence?: Evidence, state?: string): HolidayRule {
  return { kind: "dated", dates, name, type, status: status || "confirmed", confidence: confidence || "listed", evidence: evidence || (confidence === "medium" ? BATCH4_SOURCE : undefined), state };
}

export const HOLIDAY_RULES: Record<string, HolidayRule[]> = {
  IN: [
    fixed(1, 26, "Republic Day", "holiday", "high", { source_name: "DoPT Office Memorandum F.No.12/2/2023-JCA (3 Jul 2025)", source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf", last_checked: "2026-09-05" }),
    fixed(8, 15, "Independence Day", "holiday", "high", { source_name: "DoPT OM 3 Jul 2025, Annexure-I", source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf", last_checked: "2026-09-05" }),
    fixed(10, 2, "Gandhi Jayanti", "holiday", "high", { source_name: "DoPT OM 3 Jul 2025, Annexure-I", source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-09-14" }, "Ganesh Chaturthi", "religious", "confirmed", "high", { source_name: "CAG 2026 List (Annexure-I)", source_url: "https://cag.gov.in/uploads/media/Holiday-List-2026-06982ddd8e2f3c2-57681843.pdf", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-10-20" }, "Dussehra", "religious", "confirmed", "high", { source_name: "CAG 2026 List (Annexure-I)", source_url: "https://cag.gov.in/uploads/media/Holiday-List-2026-06982ddd8e2f3c2-57681843.pdf", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-11-08", 2027: "2027-10-29", 2028: "2028-10-17" }, "Diwali", "holiday", "confirmed", "high", { source_name: "DoPT OM, Annexure-I", source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-11-09" }, "Govardhan Puja", "cultural", "confirmed", "high", { source_name: "CAG Annexure-II", source_url: "https://cag.gov.in/uploads/media/Holiday-List-2026-069521fe6f358d0-89936988.pdf", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-11-11" }, "Bhai Dooj", "cultural", "confirmed", "high", { source_name: "CAG Annexure-II", source_url: "https://cag.gov.in/uploads/media/Holiday-List-2026-069521fe6f358d0-89936988.pdf", last_checked: "2026-09-05" })
  ],
  JP: [
    dated({ 2026: "2026-01-01" }, "New Year's Day", "holiday", "confirmed", "high", { source_name: "Cabinet Office, Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-01-12" }, "Coming of Age Day", "holiday", "confirmed", "high", { source_name: "Cabinet Office, Japan", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-02-11" }, "National Foundation Day", "holiday", "confirmed", "high", { source_name: "Cabinet Office, Japan", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-02-23" }, "Emperor's Birthday", "holiday", "confirmed", "high", { source_name: "Cabinet Office, Japan", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-03-20" }, "Vernal Equinox Day", "holiday", "confirmed", "high", { source_name: "Cabinet Office, Japan", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-04-29" }, "Showa Day", "holiday", "confirmed", "high", { source_name: "Cabinet Office, Japan", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-05-03" }, "Constitution Memorial Day", "holiday", "confirmed", "high", { source_name: "Cabinet Office, Japan", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-05-04" }, "Greenery Day", "holiday", "confirmed", "high", { source_name: "Cabinet Office, Japan", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-05-05" }, "Children's Day", "holiday", "confirmed", "high", { source_name: "Cabinet Office, Japan", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-05-06" }, "Holiday under the National Holidays Act", "holiday", "confirmed", "high", { source_name: "Cabinet Office, Japan", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-07-20" }, "Marine Day", "holiday", "confirmed", "high", { source_name: "Cabinet Office, Japan", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-08-11" }, "Mountain Day", "holiday", "confirmed", "high", { source_name: "Cabinet Office, Japan", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-09-21" }, "Respect for the Aged Day", "holiday", "confirmed", "high", { source_name: "Cabinet Office, Japan", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-09-22" }, "Act Holiday", "holiday", "confirmed", "high", { source_name: "Cabinet Office, Japan", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-09-23" }, "Autumn Equinox Day", "holiday", "confirmed", "high", { source_name: "Cabinet Office, Japan", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-10-12" }, "Sports Day", "holiday", "confirmed", "high", { source_name: "Cabinet Office, Japan", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-11-03" }, "Culture Day", "holiday", "confirmed", "high", { source_name: "Cabinet Office, Japan", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-11-23" }, "Labor Thanksgiving Day", "holiday", "confirmed", "high", { source_name: "Cabinet Office, Japan", last_checked: "2026-09-06" })
  ],
  SG: [
    fixed(1, 1, "New Year's Day", "holiday", "high", { source_name: "MOM Singapore", source_url: "https://www.mom.gov.sg/employment-practices/public-holidays", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-02-17" }, "Chinese New Year", "holiday", "confirmed", "high", { source_name: "MOM Singapore", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-02-18" }, "Chinese New Year (Day 2)", "holiday", "confirmed", "high", { source_name: "MOM Singapore", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-04-03" }, "Good Friday", "holiday", "confirmed", "high", { source_name: "MOM Singapore", last_checked: "2026-09-06" }),
    fixed(5, 1, "Labour Day", "holiday", "high", { source_name: "MOM Singapore", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-05-27" }, "Hari Raya Haji", "holiday", "confirmed", "high", { source_name: "MOM Singapore", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-06-17" }, "Hari Raya Puasa", "holiday", "confirmed", "high", { source_name: "MOM Singapore", last_checked: "2026-09-06" }),
    fixed(8, 9, "National Day", "holiday", "high", { source_name: "MOM Singapore", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-11-08" }, "Deepavali", "holiday", "confirmed", "high", { source_name: "MOM Singapore", last_checked: "2026-09-06" }),
    fixed(12, 25, "Christmas Day", "holiday", "high", { source_name: "MOM Singapore", last_checked: "2026-09-06" })
  ],
  AU: [
    fixed(1, 1, "New Year's Day", "holiday", "high", { source_name: "Fair Work Ombudsman", source_url: "https://www.fairwork.gov.au/employment-conditions/public-holidays", last_checked: "2026-09-06" }),
    fixed(1, 26, "Australia Day", "holiday", "high", { source_name: "Fair Work Ombudsman", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-04-03" }, "Good Friday", "holiday", "confirmed", "high", { source_name: "Fair Work Ombudsman", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-04-04" }, "Easter Saturday", "holiday", "confirmed", "high", { source_name: "Fair Work Ombudsman", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-04-05" }, "Easter Sunday", "holiday", "confirmed", "high", { source_name: "Fair Work Ombudsman", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-04-06" }, "Easter Monday", "holiday", "confirmed", "high", { source_name: "Fair Work Ombudsman", last_checked: "2026-09-06" }),
    fixed(4, 25, "Anzac Day", "holiday", "high", { source_name: "Fair Work Ombudsman", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-06-08" }, "King's Birthday", "holiday", "confirmed", "high", { source_name: "Fair Work Ombudsman", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-10-05" }, "Labour Day", "holiday", "confirmed", "high", { source_name: "Fair Work Ombudsman", last_checked: "2026-09-06" }),
    fixed(12, 25, "Christmas Day", "holiday", "high", { source_name: "Fair Work Ombudsman", last_checked: "2026-09-06" }),
    fixed(12, 26, "Boxing Day", "holiday", "high", { source_name: "Fair Work Ombudsman", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-12-28" }, "Additional public holiday for Boxing Day", "holiday", "confirmed", "high", { source_name: "Fair Work Ombudsman", last_checked: "2026-09-06" })
  ],
  NZ: [
    fixed(1, 1, "New Year's Day", "holiday", "high", { source_name: "New Zealand Government", source_url: "https://www.govt.nz/browse/work/public-holidays-and-work/", last_checked: "2026-09-06" }),
    fixed(1, 2, "Day after New Year's Day", "holiday", "high", { source_name: "New Zealand Government", last_checked: "2026-09-06" }),
    fixed(2, 6, "Waitangi Day", "holiday", "high", { source_name: "New Zealand Government", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-04-03" }, "Good Friday", "holiday", "confirmed", "high", { source_name: "New Zealand Government", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-04-06" }, "Easter Monday", "holiday", "confirmed", "high", { source_name: "New Zealand Government", last_checked: "2026-09-06" }),
    fixed(4, 25, "Anzac Day", "holiday", "high", { source_name: "New Zealand Government", last_checked: "2026-09-06" }),
    fixed(6, 1, "King's Birthday", "holiday", "high", { source_name: "New Zealand Government", last_checked: "2026-09-06" }),
    fixed(6, 26, "Matariki", "holiday", "high", { source_name: "New Zealand Government", last_checked: "2026-09-06" }),
    fixed(10, 26, "Labour Day", "holiday", "high", { source_name: "New Zealand Government", last_checked: "2026-09-06" }),
    fixed(12, 25, "Christmas Day", "holiday", "high", { source_name: "New Zealand Government", last_checked: "2026-09-06" }),
    fixed(12, 26, "Boxing Day", "holiday", "high", { source_name: "New Zealand Government", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-12-28" }, "Additional public holiday for Boxing Day", "holiday", "confirmed", "high", { source_name: "New Zealand Government", last_checked: "2026-09-06" })
  ],
  CA: [
    fixed(1, 1, "New Year's Day", "holiday", "high", { source_name: "Government of Canada", source_url: "https://www.canada.ca/en/revenue-agency/services/tax/public-holidays.html", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-04-03" }, "Good Friday", "holiday", "confirmed", "high", { source_name: "Government of Canada", last_checked: "2026-09-06" }),
    fixed(5, 18, "Victoria Day", "holiday", "high", { source_name: "Government of Canada", last_checked: "2026-09-06" }),
    fixed(7, 1, "Canada Day", "holiday", "high", { source_name: "Government of Canada", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-09-07" }, "Labour Day", "holiday", "confirmed", "high", { source_name: "Government of Canada", last_checked: "2026-09-06" }),
    fixed(9, 30, "National Day for Truth and Reconciliation", "holiday", "high", { source_name: "Government of Canada", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-10-12" }, "Thanksgiving Day", "holiday", "confirmed", "high", { source_name: "Government of Canada", last_checked: "2026-09-06" }),
    fixed(11, 11, "Remembrance Day", "holiday", "high", { source_name: "Government of Canada", last_checked: "2026-09-06" }),
    fixed(12, 25, "Christmas Day", "holiday", "high", { source_name: "Government of Canada", last_checked: "2026-09-06" }),
    fixed(12, 26, "Boxing Day", "holiday", "high", { source_name: "Government of Canada", last_checked: "2026-09-06" })
  ],
  US: [
    fixed(1, 1, "New Year's Day", "holiday", "high", { source_name: "U.S. OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-01-19" }, "Birthday of Martin Luther King, Jr.", "holiday", "confirmed", "high", { source_name: "U.S. OPM", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-02-16" }, "Washington's Birthday", "holiday", "confirmed", "high", { source_name: "U.S. OPM", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-05-25" }, "Memorial Day", "holiday", "confirmed", "high", { source_name: "U.S. OPM", last_checked: "2026-09-06" }),
    fixed(6, 19, "Juneteenth National Independence Day", "holiday", "high", { source_name: "U.S. OPM", last_checked: "2026-09-06" }),
    fixed(7, 4, "Independence Day", "holiday", "high", { source_name: "U.S. OPM", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-09-07" }, "Labor Day", "holiday", "confirmed", "high", { source_name: "U.S. OPM", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-10-12" }, "Columbus Day", "holiday", "confirmed", "high", { source_name: "U.S. OPM", last_checked: "2026-09-06" }),
    fixed(11, 11, "Veterans Day", "holiday", "high", { source_name: "U.S. OPM", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-11-26" }, "Thanksgiving Day", "holiday", "confirmed", "high", { source_name: "U.S. OPM", last_checked: "2026-09-06" }),
    fixed(12, 25, "Christmas Day", "holiday", "high", { source_name: "U.S. OPM", last_checked: "2026-09-06" })
  ],
  GB: [
    fixed(1, 1, "New Year's Day", "holiday", "high", { source_name: "UK Government", source_url: "https://www.gov.uk/bank-holidays", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-04-03" }, "Good Friday", "holiday", "confirmed", "high", { source_name: "UK Government", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-04-06" }, "Easter Monday", "holiday", "confirmed", "high", { source_name: "UK Government", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-05-04" }, "Early May bank holiday", "holiday", "confirmed", "high", { source_name: "UK Government", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-05-25" }, "Spring bank holiday", "holiday", "confirmed", "high", { source_name: "UK Government", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-08-31" }, "Summer bank holiday", "holiday", "confirmed", "high", { source_name: "UK Government", last_checked: "2026-09-06" }),
    fixed(12, 25, "Christmas Day", "holiday", "high", { source_name: "UK Government", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-12-28" }, "Boxing Day substitute day", "holiday", "confirmed", "high", { source_name: "UK Government", last_checked: "2026-09-06" })
  ],
  DE: [
    fixed(10, 3, "German Unity Day", "holiday", "listed"),
    fixed(12, 25, "Christmas Day", "holiday", "listed")
  ],
  FR: [
    fixed(7, 14, "Bastille Day", "holiday", "listed"),
    fixed(12, 25, "Noël", "holiday", "listed"),
    dated({ 2026: "2026-09-19" }, "Journées du Patrimoine", "cultural", "confirmed", "listed")
  ],
  IT: [
    fixed(6, 2, "Festa della Repubblica", "holiday", "listed"),
    fixed(11, 1, "All Saints' Day", "holiday", "listed"),
    fixed(12, 8, "Immaculate Conception", "holiday", "listed")
  ],
  ES: [
    fixed(10, 12, "Fiesta Nacional de España", "holiday", "listed"),
    fixed(11, 1, "All Saints' Day", "holiday", "listed"),
    fixed(12, 6, "Constitution Day", "holiday", "listed"),
    fixed(12, 8, "Immaculate Conception", "holiday", "listed")
  ],
  NL: [
    fixed(12, 25, "Christmas Day", "holiday", "listed"),
    fixed(12, 26, "Tweede Kerstdag", "holiday", "listed")
  ],
  CH: [
    fixed(8, 1, "Swiss National Day", "holiday", "listed"),
    fixed(12, 25, "Christmas Day", "holiday", "listed")
  ],
  AE: [
    fixed(12, 2, "National Day (Eid Al Etihad)", "holiday", "high", { source_name: "UAE Cabinet Resolution", source_url: "https://uaelegislation.gov.ae/en/legislations/2595", last_checked: "2026-09-05" }),
    fixed(12, 3, "National Day (Eid Al Etihad)", "holiday", "high", { source_name: "UAE Cabinet Resolution", source_url: "https://uaelegislation.gov.ae/en/legislations/2595", last_checked: "2026-09-05" }),
    fixed(1, 1, "New Year's Day", "holiday", "high", { source_name: "MoHRE announcement", source_url: "https://www.mohre.gov.ae/en/media-center/news/12/12/2025/thursday-1-january-2026-announced-as-a-paid-public-holiday-for-the-private-sector", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-03-20", 2027: "2027-03-09" }, "Eid al-Fitr", "religious", "estimated", "listed"),
    dated({ 2026: "2026-05-27", 2027: "2027-05-16" }, "Eid al-Adha", "religious", "estimated", "listed")
  ],
  SA: [
    fixed(9, 23, "Saudi National Day", "holiday", "listed"),
    dated({ 2026: "2026-03-20", 2027: "2027-03-09" }, "Eid al-Fitr", "religious", "estimated", "listed"),
    dated({ 2026: "2026-05-27", 2027: "2027-05-16" }, "Eid al-Adha", "religious", "estimated", "listed")
  ],
  TR: [
    fixed(10, 29, "Republic Day", "holiday", "listed"),
    dated({ 2026: "2026-03-20", 2027: "2027-03-09" }, "Ramazan Bayramı (Eid al-Fitr)", "religious", "estimated", "listed"),
    dated({ 2026: "2026-05-27", 2027: "2027-05-16" }, "Kurban Bayramı (Eid al-Adha)", "religious", "estimated", "listed")
  ],
  EG: [
    fixed(10, 6, "Armed Forces Day", "holiday", "listed"),
    dated({ 2026: "2026-03-20", 2027: "2027-03-09" }, "Eid al-Fitr", "religious", "estimated", "listed"),
    dated({ 2026: "2026-05-27", 2027: "2027-05-16" }, "Eid al-Adha", "religious", "estimated", "listed")
  ],
  NG: [
    fixed(10, 1, "Independence Day", "holiday", "listed"),
    dated({ 2026: "2026-03-20", 2027: "2027-03-09" }, "Eid al-Fitr", "religious", "estimated", "listed"),
    dated({ 2026: "2026-05-27", 2027: "2027-05-16" }, "Eid al-Adha", "religious", "estimated", "listed")
  ],
  KE: [
    dated({ 2026: "2026-01-01" }, "New Year's Day", "holiday", "confirmed", "high", { source_name: "Kenya Law", source_url: "https://new.kenyalaw.org/akn/ke/act/1912/21", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-03-20" }, "Eid-ul-Fitr", "religious", "confirmed", "high", { source_name: "Kenya Gazette", source_url: "https://new.kenyalaw.org/akn/ke/officialGazette/2026-03-18/50/eng@2026-03-18/source.pdf", last_checked: "2026-09-06" }),
    fixed(4, 3, "Good Friday", "holiday", "high", { source_name: "Kenya Law", last_checked: "2026-09-06" }),
    fixed(4, 6, "Easter Monday", "holiday", "high", { source_name: "Kenya Law", last_checked: "2026-09-06" }),
    fixed(5, 1, "Labour Day", "holiday", "high", { source_name: "Kenya Law", last_checked: "2026-09-06" }),
    fixed(6, 1, "Madaraka Day", "holiday", "high", { source_name: "Kenya Law", last_checked: "2026-09-06" }),
    fixed(10, 10, "Mazingira Day", "holiday", "high", { source_name: "Kenya Law", last_checked: "2026-09-06" }),
    fixed(10, 20, "Mashujaa Day", "holiday", "high", { source_name: "Kenya Law", last_checked: "2026-09-06" }),
    fixed(12, 12, "Jamhuri Day", "holiday", "high", { source_name: "Kenya Law", last_checked: "2026-09-06" }),
    fixed(12, 25, "Christmas Day", "holiday", "high", { source_name: "Kenya Law", last_checked: "2026-09-06" }),
    fixed(12, 26, "Boxing Day", "holiday", "high", { source_name: "Kenya Law", last_checked: "2026-09-06" })
  ],
  ZA: [
    fixed(1, 1, "New Year’s Day", "holiday", "high", { source_name: "South African Government", source_url: "https://www.gov.za/about-sa/public-holidays", last_checked: "2026-09-06" }),
    fixed(3, 21, "Human Rights Day", "holiday", "high", { source_name: "South African Government", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-04-03" }, "Good Friday", "holiday", "confirmed", "high", { source_name: "South African Government", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-04-06" }, "Family Day", "holiday", "confirmed", "high", { source_name: "South African Government", last_checked: "2026-09-06" }),
    fixed(4, 27, "Freedom Day", "holiday", "high", { source_name: "South African Government", last_checked: "2026-09-06" }),
    fixed(5, 1, "Workers’ Day", "holiday", "high", { source_name: "South African Government", last_checked: "2026-09-06" }),
    fixed(6, 16, "Youth Day", "holiday", "high", { source_name: "South African Government", last_checked: "2026-09-06" }),
    fixed(8, 9, "National Women’s Day", "holiday", "high", { source_name: "South African Government", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-08-10" }, "National Women’s Day (observed)", "holiday", "confirmed", "high", { source_name: "South African Government", last_checked: "2026-09-06" }),
    fixed(9, 24, "Heritage Day", "holiday", "high", { source_name: "South African Government", last_checked: "2026-09-06" }),
    fixed(12, 16, "Day of Reconciliation", "holiday", "high", { source_name: "South African Government", last_checked: "2026-09-06" }),
    fixed(12, 25, "Christmas Day", "holiday", "high", { source_name: "South African Government", last_checked: "2026-09-06" }),
    fixed(12, 26, "Day of Goodwill", "holiday", "high", { source_name: "South African Government", last_checked: "2026-09-06" })
  ],
  VN: [
    fixed(9, 2, "National Day", "holiday", "listed"),
    fixed(4, 30, "Reunification Day", "holiday", "listed"),
    fixed(5, 1, "Labour Day", "holiday", "listed"),
    dated({ 2026: "2026-02-17", 2027: "2027-02-06", 2028: "2028-01-26" }, "Tết (Lunar New Year)", "holiday", "confirmed", "listed")
  ],
  LK: [
    dated({ 2026: "2026-01-03" }, "Duruthu Full Moon Poya Day", "holiday", "confirmed", "high", { source_name: "Sri Lanka Government", source_url: "https://documents.gov.lk/view/calander/2026/2026_E.pdf", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-01-15" }, "Tamil Thai Pongal Day", "holiday", "confirmed", "high", { source_name: "Sri Lanka Government", source_url: "https://documents.gov.lk/view/calander/2026/2026_E.pdf", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-02-01" }, "Nawam Full Moon Poya Day", "holiday", "confirmed", "high", { source_name: "Sri Lanka Government", source_url: "https://documents.gov.lk/view/calander/2026/2026_E.pdf", last_checked: "2026-09-06" }),
    fixed(2, 4, "Independence Day", "holiday", "high", { source_name: "Sri Lanka Government", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-02-15" }, "Maha Sivaratri Day", "holiday", "confirmed", "high", { source_name: "Sri Lanka Government", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-03-02" }, "Medin Full Moon Poya Day", "holiday", "confirmed", "high", { source_name: "Sri Lanka Government", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-03-21" }, "Id-Ul-Fitr (Ramazan Festival Day)", "holiday", "confirmed", "high", { source_name: "Sri Lanka Government", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-04-01" }, "Bak Full Moon Poya Day", "holiday", "confirmed", "high", { source_name: "Sri Lanka Government", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-04-03" }, "Good Friday", "holiday", "confirmed", "high", { source_name: "Sri Lanka Government", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-04-13" }, "Day Prior to Sinhala and Tamil New Year Day", "holiday", "confirmed", "high", { source_name: "Sri Lanka Government", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-04-14" }, "Sinhala and Tamil New Year Day", "holiday", "confirmed", "high", { source_name: "Sri Lanka Government", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-05-01" }, "Vesak Full Moon Poya Day", "holiday", "confirmed", "high", { source_name: "Sri Lanka Government", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-05-28" }, "Id-Ul-Alha (Hadj Festival Day)", "holiday", "confirmed", "high", { source_name: "Sri Lanka Government", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-05-30" }, "Adhi Poson Full Moon Poya Day", "holiday", "confirmed", "high", { source_name: "Sri Lanka Government", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-05-31" }, "Day Following Vesak Full Moon Poya Day", "holiday", "confirmed", "high", { source_name: "Sri Lanka Gazette", source_url: "https://documents.gov.lk/view/extra-gazettes/2026/4/2485-14_E.pdf", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-06-29" }, "Poson Full Moon Poya Day", "holiday", "confirmed", "high", { source_name: "Sri Lanka Government", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-07-29" }, "Esala Full Moon Poya Day", "holiday", "confirmed", "high", { source_name: "Sri Lanka Government", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-08-26" }, "Milaud-Nabi (The Prophet’s Birthday)", "holiday", "confirmed", "high", { source_name: "Sri Lanka Government", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-08-27" }, "Nikini Full Moon Poya Day", "holiday", "confirmed", "high", { source_name: "Sri Lanka Government", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-11-08" }, "Deepavali Festival Day", "holiday", "confirmed", "high", { source_name: "Sri Lanka Government", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-12-25" }, "Christmas Day", "holiday", "confirmed", "high", { source_name: "Sri Lanka Government", last_checked: "2026-09-05" })
  ],
  BD: [
    fixed(3, 26, "Independence Day", "holiday", "listed"),
    fixed(12, 16, "Victory Day", "holiday", "listed"),
    fixed(2, 21, "International Mother Language Day", "holiday", "listed"),
    dated({ 2026: "2026-03-20", 2027: "2027-03-09" }, "Eid al-Fitr", "religious", "estimated", "listed"),
    dated({ 2026: "2026-05-27", 2027: "2027-05-16" }, "Eid al-Adha", "religious", "estimated", "listed")
  ],
  NP: [
    fixed(5, 29, "Republic Day", "holiday", "medium"),
    fixed(9, 19, "Constitution Day", "holiday", "medium")
  ],
  TW: [
    fixed(10, 10, "National Day (Double Ten)", "holiday", "listed"),
    fixed(2, 28, "Peace Memorial Day", "holiday", "listed"),
    dated({ 2026: "2026-02-17", 2027: "2027-02-06", 2028: "2028-01-26" }, "Lunar New Year", "holiday", "confirmed", "listed")
  ],
  PL: [
    fixed(11, 11, "Independence Day", "holiday", "listed"),
    fixed(5, 3, "Constitution Day", "holiday", "listed"),
    fixed(5, 1, "Labour Day", "holiday", "listed")
  ],
  SE: [
    fixed(6, 6, "National Day", "holiday", "listed"),
    fixed(12, 26, "Annandag jul (St. Stephen's Day)", "holiday", "listed")
  ],
  PT: [
    fixed(6, 10, "Portugal Day", "holiday", "listed"),
    fixed(10, 5, "Republic Day", "holiday", "listed"),
    fixed(12, 1, "Restoration of Independence Day", "holiday", "listed")
  ],
  IE: [
    fixed(3, 17, "St. Patrick's Day", "holiday", "listed"),
    fixed(12, 26, "St. Stephen's Day", "holiday", "listed")
  ],
  AT: [
    fixed(10, 26, "National Day", "holiday", "listed"),
    fixed(12, 8, "Immaculate Conception", "holiday", "listed")
  ],
  GR: [
    fixed(3, 25, "Independence Day", "holiday", "listed"),
    fixed(10, 28, "Ochi Day", "holiday", "listed")
  ],
  AR: [
    fixed(7, 9, "Independence Day", "holiday", "listed"),
    fixed(5, 25, "May Revolution Day", "holiday", "listed")
  ],
  CO: [
    fixed(7, 20, "Independence Day", "holiday", "listed"),
    fixed(8, 7, "Battle of Boyacá", "holiday", "listed")
  ],
  CL: [
    fixed(9, 18, "Independence Day", "holiday", "listed"),
    fixed(9, 19, "Army Day (Glorias del Ejército)", "holiday", "listed")
  ],
  MA: [
    fixed(11, 18, "Independence Day", "holiday", "listed"),
    fixed(7, 30, "Throne Day", "holiday", "listed"),
    dated({ 2026: "2026-03-20", 2027: "2027-03-09" }, "Eid al-Fitr", "religious", "estimated", "listed"),
    dated({ 2026: "2026-05-27", 2027: "2027-05-16" }, "Eid al-Adha", "religious", "estimated", "listed")
  ],
  GH: [
    fixed(1, 1, "New Year’s Day", "holiday", "high", { source_name: "Ghana Ministry of the Interior", source_url: "https://www.mint.gov.gh/statutory-public-holidays/", last_checked: "2026-09-06" }),
    fixed(1, 7, "Constitution Day", "holiday", "high", { source_name: "Ghana Ministry of the Interior", last_checked: "2026-09-06" }),
    fixed(3, 6, "Independence Day", "holiday", "high", { source_name: "Ghana Ministry of the Interior", last_checked: "2026-09-06" }),
    fixed(4, 3, "Good Friday", "holiday", "high", { source_name: "Ghana Ministry of the Interior", last_checked: "2026-09-06" }),
    fixed(4, 6, "Easter Monday", "holiday", "high", { source_name: "Ghana Ministry of the Interior", last_checked: "2026-09-06" }),
    fixed(5, 1, "Labour Day (Workers’ Day)", "holiday", "high", { source_name: "Ghana Ministry of the Interior", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-05-27" }, "Eid-Ul-Adha (Hajj)", "religious", "confirmed", "high", { source_name: "Ghana Ministry of the Interior", source_url: "https://www.mint.gov.gh/declaration-of-wednesday-27th-may-2026-as-a-public-holiday/", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-07-03" }, "Republic Day (observed)", "holiday", "confirmed", "high", { source_name: "Ghana Ministry of the Interior", source_url: "https://www.mint.gov.gh/declaration-of-friday-3rd-july-2026-as-a-public-holiday/", last_checked: "2026-09-06" }),
    fixed(9, 21, "Founder’s Day", "holiday", "high", { source_name: "Ghana Ministry of the Interior", last_checked: "2026-09-06" }),
    fixed(12, 4, "Farmer’s Day", "holiday", "high", { source_name: "Ghana Ministry of the Interior", last_checked: "2026-09-06" }),
    fixed(12, 25, "Christmas Day", "holiday", "high", { source_name: "Ghana Ministry of the Interior", last_checked: "2026-09-06" }),
    fixed(12, 28, "Boxing Day (observed)", "holiday", "high", { source_name: "Ghana Ministry of the Interior", last_checked: "2026-09-06" })
  ],
  FI: [fixed(12, 6, "Independence Day", "holiday", "medium")],
  DK: [fixed(6, 5, "Constitution Day", "holiday", "medium"), fixed(12, 26, "Anden Juledag", "holiday", "medium")],
  NO: [fixed(5, 17, "Constitution Day", "holiday", "medium"), fixed(12, 26, "Andre Juledag", "holiday", "medium")],
  BE: [fixed(7, 21, "National Day", "holiday", "medium"), fixed(11, 1, "Armistice Day", "holiday", "medium")],
  CZ: [fixed(9, 28, "Czech Statehood Day", "holiday", "medium"), fixed(10, 28, "Independent Czechoslovakia", "holiday", "medium")],
  HU: [fixed(8, 20, "State Foundation Day", "holiday", "medium"), fixed(10, 23, "Republic Day", "holiday", "medium")],
  RO: [fixed(12, 1, "Great Union Day", "holiday", "medium")],
  RU: [fixed(6, 12, "Russia Day", "holiday", "medium"), fixed(11, 4, "Unity Day", "holiday", "medium")],
  UA: [fixed(8, 24, "Independence Day", "holiday", "medium")],
  QA: [fixed(12, 18, "National Day", "holiday", "medium")],
  JO: [fixed(5, 25, "Independence Day", "holiday", "medium")],
  TZ: [fixed(4, 26, "Union Day", "holiday", "medium"), fixed(12, 9, "Independence Day", "holiday", "medium")],
  PE: [fixed(7, 28, "Independence Day", "holiday", "medium"), fixed(7, 29, "Military Parade", "holiday", "medium")],
  EC: [fixed(8, 10, "Independence Day", "holiday", "medium")],
  UY: [fixed(8, 25, "Independence Day", "holiday", "medium")],
  KH: [fixed(11, 9, "Independence Day", "holiday", "medium")],
  MM: [fixed(1, 4, "Independence Day", "holiday", "medium")],
  LA: [fixed(12, 2, "Lao National Day", "holiday", "medium")],
  MN: [fixed(7, 11, "Naadam (National Day)", "holiday", "medium")],
  KZ: [fixed(12, 16, "Independence Day", "holiday", "medium")],
  BN: [fixed(2, 23, "National Day", "holiday", "medium")],
  FJ: [fixed(10, 10, "Fiji Day (National Day)", "holiday", "medium")],
  IS: [fixed(6, 17, "National Day", "holiday", "medium")],
  LU: [fixed(6, 23, "National Day", "holiday", "medium")],
  SK: [fixed(9, 1, "Constitution Day", "holiday", "medium")],
  SI: [fixed(6, 25, "Statehood Day", "holiday", "medium")],
  HR: [fixed(6, 25, "Statehood Day", "holiday", "medium")],
  RS: [fixed(2, 15, "Statehood Day", "holiday", "medium")],
  BG: [fixed(3, 3, "Liberation Day", "holiday", "medium")],
  LT: [fixed(2, 16, "Independence Day", "holiday", "medium")],
  LV: [fixed(11, 18, "Independence Day", "holiday", "medium")],
  EE: [fixed(2, 24, "Independence Day", "holiday", "medium")],
  MT: [fixed(9, 21, "Independence Day", "holiday", "medium")],
  CY: [fixed(10, 1, "Independence Day", "holiday", "medium")],
  LB: [fixed(11, 22, "Independence Day", "holiday", "medium")],
  IQ: [fixed(10, 3, "National Day", "holiday", "medium")],
  OM: [fixed(11, 18, "National Day", "holiday", "medium")],
  BH: [fixed(12, 16, "National Day", "holiday", "medium")],
  KW: [fixed(2, 25, "National Day", "holiday", "medium")],
  DZ: [fixed(7, 5, "Independence Day", "holiday", "medium")],
  TN: [fixed(3, 20, "Independence Day", "holiday", "medium")],
  SN: [fixed(4, 4, "Independence Day", "holiday", "medium")],
  CI: [fixed(8, 7, "Independence Day", "holiday", "medium")],
  CM: [fixed(5, 20, "National Day", "holiday", "medium")],
  ZM: [fixed(10, 24, "Independence Day", "holiday", "medium")],
  ZW: [fixed(4, 18, "Independence Day", "holiday", "medium")],
  RW: [
    fixed(1, 1, "New Year’s Day", "holiday", "high", { source_name: "Republic of Rwanda", source_url: "https://www.rwandainuk.gov.rw/holidays", last_checked: "2026-09-06" }),
    fixed(1, 2, "Day after New Year’s Day", "holiday", "high", { source_name: "Republic of Rwanda", last_checked: "2026-09-06" }),
    fixed(2, 2, "National Heroes Day", "holiday", "high", { source_name: "Republic of Rwanda", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-04-03" }, "Good Friday", "holiday", "confirmed", "high", { source_name: "Republic of Rwanda", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-04-06" }, "Easter Monday", "holiday", "confirmed", "high", { source_name: "Republic of Rwanda", last_checked: "2026-09-06" }),
    fixed(4, 7, "Genocide against the Tutsi Memorial Day", "holiday", "high", { source_name: "Republic of Rwanda", last_checked: "2026-09-06" }),
    fixed(5, 1, "Labor Day", "holiday", "high", { source_name: "Republic of Rwanda", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-05-13" }, "Eid al-Fitr", "religious", "confirmed", "high", { source_name: "Republic of Rwanda", last_checked: "2026-09-06" }),
    fixed(7, 1, "Independence Day", "holiday", "high", { source_name: "Republic of Rwanda", last_checked: "2026-09-06" }),
    fixed(7, 4, "Liberation Day", "holiday", "high", { source_name: "Republic of Rwanda", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-07-20" }, "Eid al-Adha", "religious", "confirmed", "high", { source_name: "Republic of Rwanda", last_checked: "2026-09-06" }),
    fixed(8, 6, "Umuganura Day", "cultural", "high", { source_name: "Republic of Rwanda", last_checked: "2026-09-06" }),
    fixed(8, 15, "Assumption Day", "holiday", "high", { source_name: "Republic of Rwanda", last_checked: "2026-09-06" }),
    fixed(12, 25, "Christmas Day", "holiday", "high", { source_name: "Republic of Rwanda", last_checked: "2026-09-06" }),
    fixed(12, 26, "Boxing Day", "holiday", "high", { source_name: "Republic of Rwanda", last_checked: "2026-09-06" })
  ],
  BW: [fixed(9, 30, "Independence Day", "holiday", "medium")],
  VE: [fixed(7, 5, "Independence Day", "holiday", "medium")],
  BO: [fixed(8, 6, "Independence Day", "holiday", "medium")],
  PA: [fixed(11, 3, "Independence Day", "holiday", "medium")],
  CR: [fixed(9, 15, "Independence Day", "holiday", "medium")],
  DO: [fixed(2, 27, "Independence Day", "holiday", "medium")],
  JM: [fixed(8, 6, "Independence Day", "holiday", "medium")],
  NA: [
    fixed(1, 1, "New Year’s Day", "holiday", "high", { source_name: "Namibia MICT", source_url: "https://mict.gov.na/public-holidays", last_checked: "2026-09-06" }),
    fixed(3, 21, "Independence Day", "holiday", "high", { source_name: "Namibia MICT", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-04-03" }, "Good Friday", "holiday", "confirmed", "high", { source_name: "Namibia MICT", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-04-06" }, "Easter Monday", "holiday", "confirmed", "high", { source_name: "Namibia MICT", last_checked: "2026-09-06" }),
    fixed(5, 1, "Workers’ Day", "holiday", "high", { source_name: "Namibia MICT", last_checked: "2026-09-06" }),
    fixed(5, 4, "Cassinga Day", "holiday", "high", { source_name: "Namibia MICT", last_checked: "2026-09-06" }),
    fixed(5, 14, "Ascension Day", "holiday", "high", { source_name: "Namibia MICT", last_checked: "2026-09-06" }),
    fixed(5, 25, "Africa Day", "holiday", "high", { source_name: "Namibia MICT", last_checked: "2026-09-06" }),
    fixed(5, 28, "Genocide Remembrance Day", "holiday", "high", { source_name: "Namibia MICT", last_checked: "2026-09-06" }),
    fixed(8, 26, "Heroes' Day", "holiday", "high", { source_name: "Namibia MICT", last_checked: "2026-09-06" }),
    fixed(12, 10, "Human Rights Day", "holiday", "high", { source_name: "Namibia MICT", last_checked: "2026-09-06" }),
    fixed(12, 25, "Christmas Day", "holiday", "high", { source_name: "Namibia MICT", last_checked: "2026-09-06" })
  ]
};
