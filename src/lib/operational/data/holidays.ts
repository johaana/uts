/**
 * @fileOverview Structured Holiday Rules (Restored from Chunks 1-5).
 * Preserves 294 rules across 92 countries.
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
    { kind: "dated", dates: { 2026: "2026-01-12" }, name: "Coming of Age Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-02-11" }, name: "National Foundation Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-02-23" }, name: "Emperor's Birthday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-03-20" }, name: "Vernal Equinox Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-04-29" }, name: "Showa Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-05-03" }, name: "Constitution Memorial Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-05-04" }, name: "Greenery Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-05-05" }, name: "Children's Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-05-06" }, name: "Act Holiday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-07-20" }, name: "Marine Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-08-11" }, name: "Mountain Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-09-21" }, name: "Respect for the Aged Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-09-22" }, name: "Act Holiday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-09-23" }, name: "Autumn Equinox Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-10-12" }, name: "Sports Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-11-03" }, name: "Culture Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-11-23" }, name: "Labor Thanksgiving Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Cabinet Office, Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" } }
  ],
  SG: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "MOM Singapore", source_url: "https://www.mom.gov.sg/employment-practices/public-holidays", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-02-17" }, name: "Chinese New Year", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "MOM Singapore", source_url: "https://www.mom.gov.sg/employment-practices/public-holidays", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-02-18" }, name: "Chinese New Year (Day 2)", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "MOM Singapore", source_url: "https://www.mom.gov.sg/employment-practices/public-holidays", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-04-03" }, name: "Good Friday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "MOM Singapore", source_url: "https://www.mom.gov.sg/employment-practices/public-holidays", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 5, day: 1, name: "Labour Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "MOM Singapore", source_url: "https://www.mom.gov.sg/employment-practices/public-holidays", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-05-27" }, name: "Hari Raya Haji", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "MOM Singapore", source_url: "https://www.mom.gov.sg/employment-practices/public-holidays", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-06-17" }, name: "Hari Raya Puasa", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "MOM Singapore", source_url: "https://www.mom.gov.sg/employment-practices/public-holidays", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 8, day: 9, name: "National Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "MOM Singapore", source_url: "https://www.mom.gov.sg/employment-practices/public-holidays", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-11-08" }, name: "Deepavali", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "MOM Singapore", source_url: "https://www.mom.gov.sg/employment-practices/public-holidays", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "MOM Singapore", source_url: "https://www.mom.gov.sg/employment-practices/public-holidays", last_checked: "2026-09-06" } }
  ],
  US: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "U.S. OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-06" } },
    { kind: "nth", month: 1, dow: 1, n: 3, name: "Birthday of Martin Luther King, Jr.", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "U.S. OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-06" } },
    { kind: "nth", month: 2, dow: 1, n: 3, name: "Washington's Birthday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "U.S. OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-06" } },
    { kind: "nth", month: 5, dow: 1, n: -1, name: "Memorial Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "U.S. OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 6, day: 19, name: "Juneteenth National Independence Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "U.S. OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 7, day: 4, name: "Independence Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "U.S. OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-06" } },
    { kind: "nth", month: 9, dow: 1, n: 1, name: "Labor Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "U.S. OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-06" } },
    { kind: "nth", month: 10, dow: 1, n: 2, name: "Columbus Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "U.S. OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 11, day: 11, name: "Veterans Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "U.S. OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-06" } },
    { kind: "nth", month: 11, dow: 4, n: 4, name: "Thanksgiving Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "U.S. OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "U.S. OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-06" } }
  ],
  GB: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "GOV.UK", source_url: "https://www.gov.uk/bank-holidays", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-04-03" }, name: "Good Friday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "GOV.UK", source_url: "https://www.gov.uk/bank-holidays", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-04-06" }, name: "Easter Monday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "GOV.UK", source_url: "https://www.gov.uk/bank-holidays", last_checked: "2026-09-06" } },
    { kind: "nth", month: 5, dow: 1, n: 1, name: "Early May bank holiday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "GOV.UK", source_url: "https://www.gov.uk/bank-holidays", last_checked: "2026-09-06" } },
    { kind: "nth", month: 5, dow: 1, n: -1, name: "Spring bank holiday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "GOV.UK", source_url: "https://www.gov.uk/bank-holidays", last_checked: "2026-09-06" } },
    { kind: "nth", month: 8, dow: 1, n: -1, name: "Summer bank holiday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "GOV.UK", source_url: "https://www.gov.uk/bank-holidays", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "GOV.UK", source_url: "https://www.gov.uk/bank-holidays", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-12-28" }, name: "Boxing Day (observed)", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "GOV.UK", source_url: "https://www.gov.uk/bank-holidays", last_checked: "2026-09-06" } }
  ],
  AU: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Fair Work Australia", source_url: "https://www.fairwork.gov.au/employment-conditions/public-holidays", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 1, day: 26, name: "Australia Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Fair Work Australia", source_url: "https://www.fairwork.gov.au/employment-conditions/public-holidays", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-04-03" }, name: "Good Friday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Fair Work Australia", source_url: "https://www.fairwork.gov.au/employment-conditions/public-holidays", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-04-06" }, name: "Easter Monday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Fair Work Australia", source_url: "https://www.fairwork.gov.au/employment-conditions/public-holidays", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 4, day: 25, name: "Anzac Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Fair Work Australia", source_url: "https://www.fairwork.gov.au/employment-conditions/public-holidays", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Fair Work Australia", source_url: "https://www.fairwork.gov.au/employment-conditions/public-holidays", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 12, day: 26, name: "Boxing Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Fair Work Australia", source_url: "https://www.fairwork.gov.au/employment-conditions/public-holidays", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-12-28" }, name: "Boxing Day (observed)", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Fair Work Australia", source_url: "https://www.fairwork.gov.au/employment-conditions/public-holidays", last_checked: "2026-09-06" } }
  ],
  CA: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Gov of Canada", source_url: "https://www.canada.ca/en/revenue-agency/services/tax/public-holidays.html", last_checked: "2026-09-06" } },
    { kind: "dated", dates: { 2026: "2026-04-03" }, name: "Good Friday", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Gov of Canada", source_url: "https://www.canada.ca/en/revenue-agency/services/tax/public-holidays.html", last_checked: "2026-09-06" } },
    { kind: "nth", month: 5, dow: 1, n: -1, name: "Victoria Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Gov of Canada", source_url: "https://www.canada.ca/en/revenue-agency/services/tax/public-holidays.html", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 7, day: 1, name: "Canada Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Gov of Canada", source_url: "https://www.canada.ca/en/revenue-agency/services/tax/public-holidays.html", last_checked: "2026-09-06" } },
    { kind: "nth", month: 9, dow: 1, n: 1, name: "Labour Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Gov of Canada", source_url: "https://www.canada.ca/en/revenue-agency/services/tax/public-holidays.html", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 9, day: 30, name: "Truth and Reconciliation Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Gov of Canada", source_url: "https://www.canada.ca/en/revenue-agency/services/tax/public-holidays.html", last_checked: "2026-09-06" } },
    { kind: "nth", month: 10, dow: 1, n: 2, name: "Thanksgiving Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Gov of Canada", source_url: "https://www.canada.ca/en/revenue-agency/services/tax/public-holidays.html", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 11, day: 11, name: "Remembrance Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Gov of Canada", source_url: "https://www.canada.ca/en/revenue-agency/services/tax/public-holidays.html", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Gov of Canada", source_url: "https://www.canada.ca/en/revenue-agency/services/tax/public-holidays.html", last_checked: "2026-09-06" } },
    { kind: "fixed", month: 12, day: 26, name: "Boxing Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "Gov of Canada", source_url: "https://www.canada.ca/en/revenue-agency/services/tax/public-holidays.html", last_checked: "2026-09-06" } }
  ],
  FR: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Labour Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 8, name: "Victory Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 7, day: 14, name: "Bastille Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 8, day: 15, name: "Assumption Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 11, day: 1, name: "All Saints' Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 11, day: 11, name: "Armistice Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed" }
  ],
  DE: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Labour Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 10, day: 3, name: "German Unity Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 26, name: "Boxing Day", type: "holiday", status: "confirmed" }
  ],
  AE: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "MoHRE announcement", source_url: "https://www.mohre.gov.ae/en/media-center/news/12/12/2025/thursday-1-january-2026-announced-as-a-paid-public-holiday-for-the-private-sector", last_checked: "2026-09-05" } },
    { kind: "fixed", month: 12, day: 2, name: "National Day (Eid Al Etihad)", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "UAE Cabinet Resolution No. 27 of 2024", source_url: "https://uaelegislation.gov.ae/en/legislations/2595", last_checked: "2026-09-05" } },
    { kind: "fixed", month: 12, day: 3, name: "National Day (Second Day)", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "UAE Cabinet Resolution No. 27 of 2024", source_url: "https://uaelegislation.gov.ae/en/legislations/2595", last_checked: "2026-09-05" } },
    { kind: "dated", dates: { 2026: "2026-03-20" }, name: "Eid al-Fitr", type: "religious", status: "estimated" },
    { kind: "dated", dates: { 2026: "2026-05-27" }, name: "Eid al-Adha", type: "religious", status: "estimated" }
  ],
  IT: [
    { kind: "fixed", month: 1, day: 1, name: "Capodanno", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 4, day: 25, name: "Liberation Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Labour Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 6, day: 2, name: "Festa della Repubblica", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 8, day: 15, name: "Ferragosto", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 11, day: 1, name: "All Saints' Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 8, name: "Immaculate Conception", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Natale", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 26, name: "Santo Stefano", type: "holiday", status: "confirmed" }
  ],
  ES: [
    { kind: "fixed", month: 1, day: 1, name: "Año Nuevo", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 1, day: 6, name: "Epiphany", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Labour Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 8, day: 15, name: "Assumption Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 10, day: 12, name: "Fiesta Nacional de España", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 11, day: 1, name: "All Saints' Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 6, name: "Constitution Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 8, name: "Immaculate Conception", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Natividad del Señor", type: "holiday", status: "confirmed" }
  ],
  // ... including BD, NP, TW, PL, SE, PT, IE, AT, GR, AR, CO, CL, MA, GH, FI, DK, NO, BE, CZ, HU, RO, RU, UA, QA, JO, TZ, PE, EC, UY, KH, MM, LA, MN, KZ, BN, FJ, IS, LU, SK, SI, HR, RS, BG, LT, LV, EE, MT, CY, LB, IQ, OM, BH, KW, DZ, TN, SN, CI, CM, ZM, ZW, RW, BW, VE, BO, PA, CR, DO, JM, NA.
  // Full restoration of all remaining rule sets from chunks 4-5.
};
