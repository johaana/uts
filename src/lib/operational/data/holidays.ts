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
    { kind: "dated", dates: { 2026: "2026-12-28" }, name: "Boxing Day substitute day", type: "holiday", status: "confirmed", confidence: "high", evidence: { source_name: "GOV.UK", source_url: "https://www.gov.uk/bank-holidays", last_checked: "2026-09-06" } }
  ],
  AU: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 1, day: 26, name: "Australia Day", type: "holiday", status: "confirmed" },
    { kind: "dated", dates: { 2026: "2026-04-03" }, name: "Good Friday", type: "holiday", status: "confirmed" },
    { kind: "dated", dates: { 2026: "2026-04-06" }, name: "Easter Monday", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 4, day: 25, name: "Anzac Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 26, name: "Boxing Day", type: "holiday", status: "confirmed" }
  ],
  CA: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed" },
    { kind: "dated", dates: { 2026: "2026-04-03" }, name: "Good Friday", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 7, day: 1, name: "Canada Day", type: "holiday", status: "confirmed" },
    { kind: "nth", month: 9, dow: 1, n: 1, name: "Labour Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 9, day: 30, name: "Truth and Reconciliation Day", type: "holiday", status: "confirmed" },
    { kind: "nth", month: 10, dow: 1, n: 2, name: "Thanksgiving Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 11, day: 11, name: "Remembrance Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed" }
  ],
  FR: [
    { kind: "fixed", month: 1, day: 1, name: "Jour de l'An", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Fête du Travail", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 8, name: "Fête de la Victoire", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 7, day: 14, name: "Fête Nationale", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 8, day: 15, name: "Assomption", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 11, day: 1, name: "Toussaint", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 11, day: 11, name: "Armistice", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Noël", type: "holiday", status: "confirmed" }
  ],
  DE: [
    { kind: "fixed", month: 1, day: 1, name: "Neujahr", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Tag der Arbeit", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 10, day: 3, name: "Tag der Deutschen Einheit", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "1. Weihnachtsfeiertag", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 26, name: "2. Weihnachtsfeiertag", type: "holiday", status: "confirmed" }
  ],
  AE: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 2, name: "National Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 3, name: "National Day (2nd Day)", type: "holiday", status: "confirmed" }
  ],
  IT: [
    { kind: "fixed", month: 1, day: 1, name: "Capodanno", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 1, day: 6, name: "Epifania", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 4, day: 25, name: "Liberazione", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Festa del Lavoro", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 6, day: 2, name: "Festa della Repubblica", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 8, day: 15, name: "Ferragosto", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 11, day: 1, name: "Ognissanti", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 8, name: "Immacolata Concezione", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Natale", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 26, name: "Santo Stefano", type: "holiday", status: "confirmed" }
  ],
  ES: [
    { kind: "fixed", month: 1, day: 1, name: "Año Nuevo", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 1, day: 6, name: "Epifanía", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Fiesta del Trabajo", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 8, day: 15, name: "Asunción", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 10, day: 12, name: "Fiesta Nacional de España", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 11, day: 1, name: "Todos los Santos", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 6, name: "Día de la Constitución", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 8, name: "Inmaculada Concepción", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Natividad del Señor", type: "holiday", status: "confirmed" }
  ],
  NL: [
    { kind: "fixed", month: 1, day: 1, name: "Nieuwjaarsdag", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 4, day: 27, name: "Koningsdag", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 5, name: "Bevrijdingsdag", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "1e Kerstdag", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 26, name: "2e Kerstdag", type: "holiday", status: "confirmed" }
  ],
  CH: [
    { kind: "fixed", month: 1, day: 1, name: "Neujahr", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 8, day: 1, name: "Bundesfeier", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Weihnachten", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 26, name: "Stephanstag", type: "holiday", status: "confirmed" }
  ],
  SA: [
    { kind: "fixed", month: 2, day: 22, name: "Founding Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 9, day: 23, name: "National Day", type: "holiday", status: "confirmed" }
  ],
  TR: [
    { kind: "fixed", month: 1, day: 1, name: "Yılbaşı", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 4, day: 23, name: "Ulusal Egemenlik ve Çocuk Bayramı", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Emek ve Dayanışma Günü", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 19, name: "Atatürk'ü Anma, Gençlik ve Spor Bayramı", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 7, day: 15, name: "15 Temmuz Demokrasi ve Milli Birlik Günü", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 8, day: 30, name: "Zafer Bayramı", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 10, day: 29, name: "Cumhuriyet Bayramı", type: "holiday", status: "confirmed" }
  ],
  EG: [
    { kind: "fixed", month: 1, day: 7, name: "Christmas", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 1, day: 25, name: "Revolution Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 4, day: 25, name: "Sinai Liberation Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Labour Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 7, day: 23, name: "Revolution Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 10, day: 6, name: "Armed Forces Day", type: "holiday", status: "confirmed" }
  ],
  NG: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Workers' Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 6, day: 12, name: "Democracy Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 10, day: 1, name: "Independence Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 26, name: "Boxing Day", type: "holiday", status: "confirmed" }
  ],
  KE: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Labour Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 6, day: 1, name: "Madaraka Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 10, day: 20, name: "Mashujaa Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 12, name: "Jamhuri Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 26, name: "Utamaduni Day", type: "holiday", status: "confirmed" }
  ],
  ZA: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 3, day: 21, name: "Human Rights Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 4, day: 27, name: "Freedom Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Workers' Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 6, day: 16, name: "Youth Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 8, day: 9, name: "National Women's Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 9, day: 24, name: "Heritage Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 16, name: "Day of Reconciliation", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 26, name: "Day of Goodwill", type: "holiday", status: "confirmed" }
  ],
  LK: [
    { kind: "fixed", month: 2, day: 4, name: "Independence Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "May Day", type: "holiday", status: "confirmed" }
  ],
  BD: [
    { kind: "fixed", month: 2, day: 21, name: "Martyrs' Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 3, day: 17, name: "Sheikh Mujibur Rahman's Birthday", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 3, day: 26, name: "Independence Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "May Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 16, name: "Victory Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed" }
  ],
  NP: [
    { kind: "fixed", month: 9, day: 19, name: "Constitution Day", type: "holiday", status: "confirmed" }
  ],
  TW: [
    { kind: "fixed", month: 1, day: 1, name: "Founding Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 2, day: 28, name: "Peace Memorial Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 4, day: 4, name: "Children's Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 10, day: 10, name: "National Day", type: "holiday", status: "confirmed" }
  ],
  PL: [
    { kind: "fixed", month: 1, day: 1, name: "Nowy Rok", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 1, day: 6, name: "Trzech Króli", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Święto Państwowe", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 3, name: "Święto Narodowe Trzeciego Maja", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 8, day: 15, name: "Wniebowzięcie Najświętszej Maryi Panny", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 11, day: 1, name: "Wszystkich Świętych", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 11, day: 11, name: "Narodowe Święto Niepodległości", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Boże Narodzenie (Pierwszy Dzień)", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 26, name: "Boże Narodzenie (Drugi Dzień)", type: "holiday", status: "confirmed" }
  ],
  SE: [
    { kind: "fixed", month: 1, day: 1, name: "Nyårsdagen", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 1, day: 6, name: "Trettondedag jul", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Första maj", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 6, day: 6, name: "Sveriges nationaldag", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Juldagen", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 26, name: "Annandag jul", type: "holiday", status: "confirmed" }
  ],
  PT: [
    { kind: "fixed", month: 1, day: 1, name: "Ano Novo", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 4, day: 25, name: "Dia da Liberdade", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Dia do Trabalhador", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 6, day: 10, name: "Dia de Portugal", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 8, day: 15, name: "Assunção de Nossa Senhora", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 10, day: 5, name: "Implantação da República", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 11, day: 1, name: "Dia de Todos os Santos", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 1, name: "Restauração da Independência", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 8, name: "Imaculada Conceição", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Natal", type: "holiday", status: "confirmed" }
  ],
  IE: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 3, day: 17, name: "St. Patrick's Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 26, name: "St. Stephen's Day", type: "holiday", status: "confirmed" }
  ],
  AT: [
    { kind: "fixed", month: 1, day: 1, name: "Neujahr", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 1, day: 6, name: "Heilige Drei Könige", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Staatsfeiertag", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 8, day: 15, name: "Mariä Himmelfahrt", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 10, day: 26, name: "Nationalfeiertag", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 11, day: 1, name: "Allerheiligen", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 8, name: "Mariä Empfängnis", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Christtag", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 26, name: "Stefanitag", type: "holiday", status: "confirmed" }
  ],
  GR: [
    { kind: "fixed", month: 1, day: 1, name: "Protopchronia", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 1, day: 6, name: "Theofania", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 3, day: 25, name: "Independence Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Ergatiki Protomagia", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 8, day: 15, name: "Dekapentavgoustos", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 10, day: 28, name: "Ochi Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Christougenna", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 26, name: "Synaxis tis Theotokou", type: "holiday", status: "confirmed" }
  ],
  AR: [
    { kind: "fixed", month: 1, day: 1, name: "Año Nuevo", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 3, day: 24, name: "Día Nacional de la Memoria por la Verdad y la Justicia", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 4, day: 2, name: "Día del Veterano y de los Caídos en la Guerra de Malvinas", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Día del Trabajador", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 25, name: "Día de la Revolución de Mayo", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 6, day: 20, name: "Paso a la Inmortalidad del General Manuel Belgrano", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 7, day: 9, name: "Día de la Independencia", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 8, name: "Inmaculada Concepción", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Navidad", type: "holiday", status: "confirmed" }
  ],
  CO: [
    { kind: "fixed", month: 1, day: 1, name: "Año Nuevo", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Día del Trabajo", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 7, day: 20, name: "Día de la Independencia", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 8, day: 7, name: "Batalla de Boyacá", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 8, name: "Inmaculada Concepción", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Navidad", type: "holiday", status: "confirmed" }
  ],
  CL: [
    { kind: "fixed", month: 1, day: 1, name: "Año Nuevo", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Día del Trabajo", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 21, name: "Día de las Glorias Navales", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 7, day: 16, name: "Virgen del Carmen", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 8, day: 15, name: "Asunción de la Virgen", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 9, day: 18, name: "Fiestas Patrias", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 9, day: 19, name: "Día de las Glorias del Ejército", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 11, day: 1, name: "Día de Todos los Santos", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 8, name: "Inmaculada Concepción", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Navidad", type: "holiday", status: "confirmed" }
  ],
  MA: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 1, day: 11, name: "Manifesto of Independence", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Labour Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 7, day: 30, name: "Throne Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 8, day: 14, name: "Oued Ed-Dahab Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 8, day: 20, name: "Revolution of the King and the People", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 8, day: 21, name: "Youth Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 11, day: 6, name: "Green March Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 11, day: 18, name: "Independence Day", type: "holiday", status: "confirmed" }
  ],
  GH: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 1, day: 7, name: "Constitution Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 3, day: 6, name: "Independence Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "May Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 8, day: 4, name: "Founders' Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 9, day: 21, name: "Kwame Nkrumah Memorial Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 26, name: "Boxing Day", type: "holiday", status: "confirmed" }
  ],
  FI: [
    { kind: "fixed", month: 1, day: 1, name: "Uudenvuodenpäivä", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 1, day: 6, name: "Loppiainen", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Vappu", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 6, name: "Itsenäisyyspäivä", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Joulupäivä", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 26, name: "Tapaninpäivä", type: "holiday", status: "confirmed" }
  ],
  DK: [
    { kind: "fixed", month: 1, day: 1, name: "Nytårsdag", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 6, day: 5, name: "Grundlovsdag", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Juledag", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 26, name: "2. Juledag", type: "holiday", status: "confirmed" }
  ],
  NO: [
    { kind: "fixed", month: 1, day: 1, name: "Første nyttårsdag", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Offentlig høytidsdag", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 17, name: "Grunnlovsdag", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Første juledag", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 26, name: "Andre juledag", type: "holiday", status: "confirmed" }
  ],
  BE: [
    { kind: "fixed", month: 1, day: 1, name: "Nieuwjaar", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Feest van de Arbeid", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 7, day: 21, name: "Nationale Feestdag", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 8, day: 15, name: "Onze-Lieve-Vrouw Hemelvaart", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 11, day: 1, name: "Allerheiligen", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 11, day: 11, name: "Wapenstilstand", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Kerstmis", type: "holiday", status: "confirmed" }
  ],
  CZ: [
    { kind: "fixed", month: 1, day: 1, name: "Den obnovy samostatného českého státu", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Svátek práce", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 8, name: "Den vítězství", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 7, day: 5, name: "Den slovanských věrozvěstů Cyrila a Metoděje", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 7, day: 6, name: "Den upálení mistra Jana Husa", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 9, day: 28, name: "Den české státnosti", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 10, day: 28, name: "Den vzniku samostatného československého státu", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 11, day: 17, name: "Den boje za svobodu a demokracii", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 24, name: "Štědrý den", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "1. svátek vánoční", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 26, name: "2. svátek vánoční", type: "holiday", status: "confirmed" }
  ],
  HU: [
    { kind: "fixed", month: 1, day: 1, name: "Újév", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 3, day: 15, name: "Nemzeti ünnep", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Munka ünnepe", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 8, day: 20, name: "Szent István ünnepe", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 10, day: 23, name: "Nemzeti ünnep", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 11, day: 1, name: "Mindenszentek", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Karácsony", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 26, name: "Karácsony", type: "holiday", status: "confirmed" }
  ],
  RO: [
    { kind: "fixed", month: 1, day: 1, name: "Anul Nou", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 1, day: 2, name: "Anul Nou", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 1, day: 24, name: "Ziua Unirii Principatelor Române", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Ziua Muncii", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 6, day: 1, name: "Ziua Copilului", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 8, day: 15, name: "Adormirea Maicii Domnului", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 11, day: 30, name: "Sfântul Andrei", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 1, name: "Ziua Națională a României", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Crăciunul", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 26, name: "Crăciunul", type: "holiday", status: "confirmed" }
  ],
  RU: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 1, day: 7, name: "Orthodox Christmas Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 2, day: 23, name: "Defender of the Fatherland Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 3, day: 8, name: "International Women's Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Spring and Labour Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 9, name: "Victory Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 6, day: 12, name: "Russia Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 11, day: 4, name: "Unity Day", type: "holiday", status: "confirmed" }
  ],
  UA: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 1, day: 7, name: "Orthodox Christmas Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 3, day: 8, name: "International Women's Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Labour Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 9, name: "Victory Day over Nazism", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 6, day: 28, name: "Constitution Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 8, day: 24, name: "Independence Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 10, day: 14, name: "Defender of Ukraine Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed" }
  ],
  QA: [
    { kind: "fixed", month: 12, day: 18, name: "National Day", type: "holiday", status: "confirmed" }
  ],
  JO: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Labour Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 25, name: "Independence Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed" }
  ],
  TZ: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 1, day: 12, name: "Zanzibar Revolution Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 4, day: 7, name: "Karume Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 4, day: 26, name: "Union Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Labour Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 7, day: 7, name: "Saba Saba", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 8, day: 8, name: "Nane Nane", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 10, day: 14, name: "Nyerere Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 9, name: "Independence Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 26, name: "Boxing Day", type: "holiday", status: "confirmed" }
  ],
  PE: [
    { kind: "fixed", month: 1, day: 1, name: "Año Nuevo", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Día del Trabajo", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 6, day: 29, name: "San Pedro y San Pablo", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 7, day: 28, name: "Fiestas Patrias", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 7, day: 29, name: "Fiestas Patrias", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 8, day: 30, name: "Santa Rosa de Lima", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 10, day: 8, name: "Combate de Angamos", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 11, day: 1, name: "Todos los Santos", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 8, name: "Inmaculada Concepción", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Navidad", type: "holiday", status: "confirmed" }
  ],
  EC: [
    { kind: "fixed", month: 1, day: 1, name: "Año Nuevo", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Día del Trabajo", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 24, name: "Batalla de Pichincha", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 8, day: 10, name: "Primer Grito de Independencia", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 10, day: 9, name: "Independencia de Guayaquil", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 11, day: 2, name: "Día de los Difuntos", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 11, day: 3, name: "Independencia de Cuenca", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Navidad", type: "holiday", status: "confirmed" }
  ],
  UY: [
    { kind: "fixed", month: 1, day: 1, name: "Año Nuevo", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Día del Trabajador", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 7, day: 18, name: "Jura de la Constitución", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 8, day: 25, name: "Declaratoria de la Independencia", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Día de la Familia", type: "holiday", status: "confirmed" }
  ],
  KH: [ { kind: "fixed", month: 11, day: 9, name: "Independence Day", type: "holiday", status: "confirmed" } ],
  MM: [ { kind: "fixed", month: 1, day: 4, name: "Independence Day", type: "holiday", status: "confirmed" } ],
  LA: [ { kind: "fixed", month: 12, day: 2, name: "Lao National Day", type: "holiday", status: "confirmed" } ],
  MN: [ { kind: "fixed", month: 7, day: 11, name: "Naadam (National Day)", type: "holiday", status: "confirmed" } ],
  KZ: [ { kind: "fixed", month: 12, day: 16, name: "Independence Day", type: "holiday", status: "confirmed" } ],
  BN: [ { kind: "fixed", month: 2, day: 23, name: "National Day", type: "holiday", status: "confirmed" } ],
  FJ: [ { kind: "fixed", month: 10, day: 10, name: "Fiji Day (National Day)", type: "holiday", status: "confirmed" } ],
  IS: [ { kind: "fixed", month: 6, day: 17, name: "National Day", type: "holiday", status: "confirmed" } ],
  LU: [ { kind: "fixed", month: 6, day: 23, name: "National Day", type: "holiday", status: "confirmed" } ],
  SK: [ { kind: "fixed", month: 9, day: 1, name: "Constitution Day", type: "holiday", status: "confirmed" } ],
  SI: [ { kind: "fixed", month: 6, day: 25, name: "Statehood Day", type: "holiday", status: "confirmed" } ],
  HR: [ { kind: "fixed", month: 5, day: 30, name: "Statehood Day", type: "holiday", status: "confirmed" } ],
  RS: [ { kind: "fixed", month: 2, day: 15, name: "Statehood Day", type: "holiday", status: "confirmed" } ],
  BG: [ { kind: "fixed", month: 3, day: 3, name: "Liberation Day", type: "holiday", status: "confirmed" } ],
  LT: [ { kind: "fixed", month: 2, day: 16, name: "Independence Day", type: "holiday", status: "confirmed" } ],
  LV: [ { kind: "fixed", month: 11, day: 18, name: "Independence Day", type: "holiday", status: "confirmed" } ],
  EE: [ { kind: "fixed", month: 2, day: 24, name: "Independence Day", type: "holiday", status: "confirmed" } ],
  MT: [ { kind: "fixed", month: 9, day: 21, name: "Independence Day", type: "holiday", status: "confirmed" } ],
  CY: [ { kind: "fixed", month: 10, day: 1, name: "Independence Day", type: "holiday", status: "confirmed" } ],
  LB: [ { kind: "fixed", month: 11, day: 22, name: "Independence Day", type: "holiday", status: "confirmed" } ],
  IQ: [ { kind: "fixed", month: 10, day: 3, name: "National Day", type: "holiday", status: "confirmed" } ],
  OM: [ { kind: "fixed", month: 11, day: 18, name: "National Day", type: "holiday", status: "confirmed" } ],
  BH: [ { kind: "fixed", month: 12, day: 16, name: "National Day", type: "holiday", status: "confirmed" } ],
  KW: [ { kind: "fixed", month: 2, day: 25, name: "National Day", type: "holiday", status: "confirmed" } ],
  DZ: [ { kind: "fixed", month: 7, day: 5, name: "Independence Day", type: "holiday", status: "confirmed" } ],
  TN: [ { kind: "fixed", month: 3, day: 20, name: "Independence Day", type: "holiday", status: "confirmed" } ],
  SN: [ { kind: "fixed", month: 4, day: 4, name: "Independence Day", type: "holiday", status: "confirmed" } ],
  CI: [ { kind: "fixed", month: 8, day: 7, name: "Independence Day", type: "holiday", status: "confirmed" } ],
  CM: [ { kind: "fixed", month: 5, day: 20, name: "National Day", type: "holiday", status: "confirmed" } ],
  ZM: [ { kind: "fixed", month: 10, day: 24, name: "Independence Day", type: "holiday", status: "confirmed" } ],
  ZW: [ { kind: "fixed", month: 4, day: 18, name: "Independence Day", type: "holiday", status: "confirmed" } ],
  RW: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 2, day: 1, name: "National Heroes Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 4, day: 7, name: "Genocide against the Tutsi Memorial Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Labour Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 7, day: 1, name: "Independence Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 7, day: 4, name: "Liberation Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 8, day: 15, name: "Assumption Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 26, name: "Boxing Day", type: "holiday", status: "confirmed" }
  ],
  BW: [ { kind: "fixed", month: 9, day: 30, name: "Independence Day", type: "holiday", status: "confirmed" } ],
  VE: [ { kind: "fixed", month: 7, day: 5, name: "Independence Day", type: "holiday", status: "confirmed" } ],
  BO: [ { kind: "fixed", month: 8, day: 6, name: "Independence Day", type: "holiday", status: "confirmed" } ],
  PA: [ { kind: "fixed", month: 11, day: 3, name: "Independence Day", type: "holiday", status: "confirmed" } ],
  CR: [ { kind: "fixed", month: 9, day: 15, name: "Independence Day", type: "holiday", status: "confirmed" } ],
  DO: [ { kind: "fixed", month: 2, day: 27, name: "Independence Day", type: "holiday", status: "confirmed" } ],
  JM: [ { kind: "fixed", month: 8, day: 6, name: "Independence Day", type: "holiday", status: "confirmed" } ],
  NA: [
    { kind: "fixed", month: 1, day: 1, name: "New Year's Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 3, day: 21, name: "Independence Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 1, name: "Workers' Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 4, name: "Cassinga Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 5, day: 25, name: "Africa Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 8, day: 26, name: "Heroes' Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 10, name: "International Human Rights Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 25, name: "Christmas Day", type: "holiday", status: "confirmed" },
    { kind: "fixed", month: 12, day: 26, name: "Family Day", type: "holiday", status: "confirmed" }
  ]
};

