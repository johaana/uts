import { HolidayRule, SourceEvidence, OperationalCategory, DateState, ConfidenceTier } from '../types';

function fixed(month: number, day: number, name: string, type: OperationalCategory, confidence?: ConfidenceTier, evidence?: SourceEvidence | null): HolidayRule {
  return { kind: "fixed", month, day, name, type, status: "confirmed", confidence: confidence || "medium", evidence: evidence || null };
}

function dated(dates: Record<number, string>, name: string, type: OperationalCategory, status?: DateState, confidence?: ConfidenceTier, evidence?: SourceEvidence | null): HolidayRule {
  return { kind: "dated", dates, name, type, status: status || "confirmed", confidence: confidence || "medium", evidence: evidence || null };
}

function nthWeekday(month: number, dow: number, n: number, name: string, type: OperationalCategory, confidence?: ConfidenceTier, evidence?: SourceEvidence | null): HolidayRule {
  return { kind: "nth", month, dow, n, name, type, status: "confirmed", confidence: confidence || "medium", evidence: evidence || null };
}

export const HOLIDAY_RULES: Record<string, HolidayRule[]> = {
  IN: [
    fixed(1, 26, "Republic Day", "holiday", "high", { source_name: "DoPT Office Memorandum 2026", source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf", last_checked: "2026-09-05" }),
    fixed(8, 15, "Independence Day", "holiday", "high", { source_name: "DoPT Office Memorandum 2026", source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf", last_checked: "2026-09-05" }),
    fixed(10, 2, "Gandhi Jayanti", "holiday", "high", { source_name: "DoPT Office Memorandum 2026", source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-09-14" }, "Ganesh Chaturthi", "religious", "confirmed", "high", { source_name: "CAG Holiday List 2026", source_url: "https://cag.gov.in/uploads/media/Holiday-List-2026-06982ddd8e2f3c2-57681843.pdf", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-10-20" }, "Dussehra", "religious", "confirmed", "high", { source_name: "CAG Holiday List 2026", source_url: "https://cag.gov.in/uploads/media/Holiday-List-2026-06982ddd8e2f3c2-57681843.pdf", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-11-08" }, "Diwali (Lakshmi Puja)", "holiday", "confirmed", "high", { source_name: "DoPT OM Delhi 2026", source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-11-09" }, "Govardhan Puja", "cultural", "confirmed", "high", { source_name: "CAG Restricted Holiday List 2026", source_url: "https://cag.gov.in/uploads/media/Holiday-List-2026-069521fe6f358d0-89936988.pdf", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-11-11" }, "Bhai Dooj", "cultural", "confirmed", "high", { source_name: "CAG Restricted Holiday List 2026", source_url: "https://cag.gov.in/uploads/media/Holiday-List-2026-069521fe6f358d0-89936988.pdf", last_checked: "2026-09-05" })
  ],
  JP: [
    fixed(1, 1, "New Year's Day", "holiday", "high", { source_name: "Japan Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-01-12" }, "Coming of Age Day", "holiday", "confirmed", "high", { source_name: "Japan Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    fixed(2, 11, "National Foundation Day", "holiday", "high", { source_name: "Japan Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    fixed(2, 23, "Emperor's Birthday", "holiday", "high", { source_name: "Japan Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-03-20" }, "Vernal Equinox Day", "holiday", "confirmed", "high", { source_name: "Japan Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    fixed(4, 29, "Showa Day", "holiday", "high", { source_name: "Japan Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    fixed(5, 3, "Constitution Memorial Day", "holiday", "high", { source_name: "Japan Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    fixed(5, 4, "Greenery Day", "holiday", "high", { source_name: "Japan Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    fixed(5, 5, "Children's Day", "holiday", "high", { source_name: "Japan Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-05-06" }, "Substitute Holiday", "holiday", "confirmed", "high", { source_name: "Japan Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-07-20" }, "Marine Day", "holiday", "confirmed", "high", { source_name: "Japan Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    fixed(8, 11, "Mountain Day", "holiday", "high", { source_name: "Japan Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-09-21" }, "Respect for the Aged Day", "holiday", "confirmed", "high", { source_name: "Japan Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-09-22" }, "Substitute Holiday", "holiday", "confirmed", "high", { source_name: "Japan Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-09-23" }, "Autumn Equinox Day", "holiday", "confirmed", "high", { source_name: "Japan Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-10-12" }, "Sports Day", "holiday", "confirmed", "high", { source_name: "Japan Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    fixed(11, 3, "Culture Day", "holiday", "high", { source_name: "Japan Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    fixed(11, 23, "Labor Thanksgiving Day", "holiday", "high", { source_name: "Japan Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" })
  ],
  SG: [
    fixed(1, 1, "New Year's Day", "holiday", "high", { source_name: "data.gov.sg — Ministry of Manpower", source_url: "https://data.gov.sg/datasets/d_149b61ad0a22f61c09dc80f2df5bbec8/view", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-02-17" }, "Chinese New Year", "holiday", "confirmed", "high", { source_name: "Ministry of Manpower", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-02-18" }, "Chinese New Year (Day 2)", "holiday", "confirmed", "high", { source_name: "Ministry of Manpower", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-03-20" }, "Hari Raya Puasa", "holiday", "estimated", "high", { source_name: "Ministry of Manpower", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-04-03" }, "Good Friday", "holiday", "confirmed", "high", { source_name: "Ministry of Manpower", last_checked: "2026-09-18" }),
    fixed(5, 1, "Labour Day", "holiday", "high", { source_name: "Ministry of Manpower", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-05-27" }, "Hari Raya Haji", "holiday", "estimated", "high", { source_name: "Ministry of Manpower", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-05-31" }, "Vesak Day", "holiday", "confirmed", "high", { source_name: "Ministry of Manpower", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-06-01" }, "Vesak Day (observed)", "holiday", "confirmed", "high", { source_name: "Ministry of Manpower", last_checked: "2026-09-18" }),
    fixed(8, 9, "National Day", "holiday", "high", { source_name: "Ministry of Manpower", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-08-10" }, "National Day (observed)", "holiday", "confirmed", "high", { source_name: "Ministry of Manpower", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-11-08" }, "Deepavali", "holiday", "confirmed", "high", { source_name: "Ministry of Manpower", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-11-09" }, "Deepavali (observed)", "holiday", "confirmed", "high", { source_name: "Ministry of Manpower", last_checked: "2026-09-18" }),
    fixed(12, 25, "Christmas Day", "holiday", "high", { source_name: "Ministry of Manpower", last_checked: "2026-09-18" })
  ],
  US: [
    fixed(1, 1, "New Year's Day", "holiday", "high", { source_name: "OPM Federal Holidays", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-06" }),
    fixed(6, 19, "Juneteenth", "holiday", "high", { source_name: "OPM" }),
    fixed(7, 4, "Independence Day", "holiday", "high", { source_name: "OPM" }),
    fixed(11, 11, "Veterans Day", "holiday", "high", { source_name: "OPM" }),
    fixed(12, 25, "Christmas Day", "holiday", "high", { source_name: "OPM" }),
    dated({ 2026: "2026-01-19" }, "MLK Jr. Day", "holiday", "confirmed", "high", { source_name: "OPM" }),
    dated({ 2026: "2026-02-16" }, "Presidents' Day", "holiday", "confirmed", "high", { source_name: "OPM" }),
    dated({ 2026: "2026-05-25" }, "Memorial Day", "holiday", "confirmed", "high", { source_name: "OPM" }),
    dated({ 2026: "2026-09-07" }, "Labor Day", "holiday", "confirmed", "high", { source_name: "OPM" }),
    dated({ 2026: "2026-10-12" }, "Columbus Day", "holiday", "confirmed", "high", { source_name: "OPM" }),
    dated({ 2026: "2026-11-26" }, "Thanksgiving Day", "holiday", "confirmed", "high", { source_name: "OPM" }),
    dated({ 2026: "2026-01-20" }, "Inauguration Day", "holiday", "confirmed", "high", { source_name: "OPM" })
  ],
  GB: [
    fixed(1, 1, "New Year's Day", "holiday", "high", { source_name: "GOV.UK Bank Holidays", source_url: "https://www.gov.uk/bank-holidays", last_checked: "2026-09-18" }),
    fixed(12, 25, "Christmas Day", "holiday", "high", { source_name: "GOV.UK" }),
    dated({ 2026: "2026-04-03" }, "Good Friday", "holiday", "confirmed", "high", { source_name: "GOV.UK" }),
    dated({ 2026: "2026-04-06" }, "Easter Monday", "holiday", "confirmed", "high", { source_name: "GOV.UK" }),
    dated({ 2026: "2026-05-04" }, "Early May Bank Holiday", "holiday", "confirmed", "high", { source_name: "GOV.UK" }),
    dated({ 2026: "2026-12-28" }, "Boxing Day (observed)", "holiday", "confirmed", "high", { source_name: "GOV.UK" })
  ],
  CA: [
    fixed(1, 1, "New Year's Day", "holiday", "high", { source_name: "ESDC Canada — General Holidays", source_url: "https://www.canada.ca/en/employment-social-development/services/general-holidays.html", last_checked: "2026-09-18" }),
    fixed(7, 1, "Canada Day", "holiday", "high", { source_name: "ESDC" }),
    nthWeekday(10, 1, 2, "Thanksgiving", "holiday", "high", { source_name: "ESDC" })
  ],
  AU: [
    fixed(1, 26, "Australia Day", "holiday", "high", { source_name: "Fair Work Ombudsman — 2026 Holidays", source_url: "https://www.fairwork.gov.au/employment-conditions/public-holidays/2026-public-holidays", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-04-03" }, "Good Friday", "holiday", "confirmed", "high", { source_name: "Fair Work Ombudsman" }),
    dated({ 2026: "2026-04-06" }, "Easter Monday", "holiday", "confirmed", "high", { source_name: "Fair Work Ombudsman" }),
    nthWeekday(10, 1, 1, "Labour Day (NSW/SA/ACT)", "holiday", "high", { source_name: "Fair Work Ombudsman" })
  ],
  NZ: [
    fixed(4, 25, "Anzac Day", "holiday", "high", { source_name: "NZ Government", last_checked: "2026-09-06" }),
    fixed(6, 1, "King's Birthday", "holiday", "high", { source_name: "NZ Government" }),
    fixed(6, 26, "Matariki", "holiday", "high", { source_name: "NZ Government" }),
    nthWeekday(10, 1, 4, "Labour Day", "holiday", "high", { source_name: "NZ Government" })
  ],
  AE: [
    fixed(12, 2, "National Day", "holiday", "high", { source_name: "UAE Government Portal", source_url: "https://u.ae/en/information-and-services/public-holidays-and-religious-affairs/public-holidays", last_checked: "2026-09-18" }),
    fixed(12, 3, "National Day (2nd Day)", "holiday", "high", { source_name: "UAE Gov" }),
    fixed(1, 1, "New Year's Day", "holiday", "high", { source_name: "UAE Gov" }),
    dated({ 2026: "2026-03-20" }, "Eid al-Fitr", "religious", "estimated", "medium", { source_name: "UAE Gov" }),
    dated({ 2026: "2026-05-27" }, "Eid al-Adha", "religious", "estimated", "medium", { source_name: "UAE Gov" })
  ],
  DE: [
    fixed(10, 3, "German Unity Day", "holiday", "high", { source_name: "Deutsche Bundesbank — TARGET2 Calendar", source_url: "https://www.bundesbank.de/en/tasks/payment-systems/target2/holidays", last_checked: "2026-09-18" }),
    fixed(12, 25, "Christmas Day", "holiday", "high", { source_name: "Bundesbank" })
  ],
  FR: [
    fixed(7, 14, "Bastille Day", "holiday", "high", { source_name: "Service-Public.fr", last_checked: "2026-09-18" }),
    fixed(12, 25, "Noël", "holiday", "high", { source_name: "Service-Public" }),
    dated({ 2026: "2026-09-19" }, "Journées du Patrimoine", "cultural")
  ],
  IT: [
    fixed(1, 1, "Capodanno", "holiday"),
    fixed(6, 2, "Festa della Repubblica", "holiday", "high", { source_name: "Gazzetta Ufficiale" }),
    fixed(12, 25, "Natale", "holiday", "high", { source_name: "Gazzetta Ufficiale" })
  ],
  ES: [
    fixed(1, 1, "Año Nuevo", "holiday"),
    fixed(10, 12, "Fiesta Nacional", "holiday", "high", { source_name: "BOE" }),
    fixed(12, 6, "Constitution Day", "holiday"),
    fixed(12, 25, "Navidad", "holiday", "high", { source_name: "BOE" })
  ],
  NL: [
    fixed(12, 25, "Christmas Day", "holiday", "high", { source_name: "Rijksoverheid" }),
    fixed(12, 26, "Boxing Day", "holiday", "high", { source_name: "Rijksoverheid" })
  ],
  KR: [
    fixed(1, 1, "New Year's Day", "holiday", "high", { source_name: "KRX" }),
    dated({ 2026: "2026-02-17" }, "Seollal", "holiday", "confirmed", "high", { source_name: "KRX" }),
    fixed(8, 15, "Liberation Day", "holiday", "high", { source_name: "KRX" })
  ],
  CN: [
    fixed(1, 1, "New Year's Day", "holiday", "high", { source_name: "State Council" }),
    dated({ 2026: "2026-02-17" }, "Lunar New Year", "holiday", "confirmed", "high", { source_name: "State Council" }),
    fixed(10, 1, "National Day", "holiday", "high", { source_name: "State Council" })
  ],
  ID: [
    fixed(1, 1, "New Year's Day", "holiday"),
    dated({ 2026: "2026-02-17" }, "Imlek", "holiday"),
    dated({ 2026: "2026-03-20" }, "Eid al-Fitr", "holiday", "estimated"),
    dated({ 2026: "2026-03-21" }, "Eid al-Fitr (Day 2)", "holiday", "estimated"),
    fixed(3, 25, "Nyepi", "holiday"),
    fixed(4, 3, "Good Friday", "holiday"),
    fixed(5, 1, "Labour Day", "holiday"),
    fixed(5, 14, "Ascension Day", "holiday"),
    fixed(5, 31, "Waisak", "holiday"),
    fixed(6, 1, "Pancasila Day", "holiday"),
    dated({ 2026: "2026-05-27" }, "Eid al-Adha", "holiday", "estimated"),
    fixed(6, 17, "Islamic New Year", "holiday"),
    fixed(8, 17, "Independence Day", "holiday"),
    fixed(8, 26, "Prophet's Birthday", "holiday"),
    fixed(12, 25, "Christmas Day", "holiday"),
    fixed(1, 2, "Joint Leave (CNY)", "holiday"),
    fixed(12, 26, "Joint Leave (Christmas)", "holiday")
  ],
  TH: [
    fixed(1, 1, "New Year's Day", "holiday"),
    dated({ 2026: "2026-04-13" }, "Songkran", "holiday"),
    fixed(12, 5, "King Rama IX Birthday", "holiday")
  ],
  MY: [
    fixed(1, 1, "New Year's Day", "holiday"),
    dated({ 2026: "2026-02-17" }, "Chinese New Year", "holiday"),
    fixed(5, 1, "Labour Day", "holiday"),
    fixed(8, 31, "Merdeka Day", "holiday"),
    fixed(9, 16, "Malaysia Day", "holiday")
  ],
  PH: [
    fixed(1, 1, "New Year's Day", "holiday"),
    fixed(2, 25, "EDSA Revolution Anniversary", "holiday"),
    fixed(4, 9, "Araw ng Kagitingan", "holiday"),
    fixed(5, 1, "Labour Day", "holiday"),
    fixed(6, 12, "Independence Day", "holiday"),
    fixed(8, 21, "Ninoy Aquino Day", "holiday"),
    fixed(8, 31, "National Heroes Day", "holiday"),
    fixed(11, 1, "All Saints Day", "holiday"),
    fixed(11, 30, "Bonifacio Day", "holiday"),
    fixed(12, 8, "Feast of Immaculate Conception", "holiday"),
    fixed(12, 25, "Christmas Day", "holiday"),
    fixed(12, 30, "Rizal Day", "holiday"),
    fixed(12, 31, "Last Day of Year", "holiday"),
    dated({ 2026: "2026-02-17" }, "Chinese New Year", "holiday"),
    dated({ 2026: "2026-04-02" }, "Maundy Thursday", "holiday"),
    dated({ 2026: "2026-04-03" }, "Good Friday", "holiday"),
    dated({ 2026: "2026-04-04" }, "Black Saturday", "holiday"),
    dated({ 2026: "2026-03-20" }, "Eid'l Fitr", "holiday", "estimated"),
    dated({ 2026: "2026-05-27" }, "Eid'l Adha", "holiday", "estimated")
  ],
  PK: [
    fixed(3, 23, "Pakistan Day", "holiday"),
    fixed(8, 14, "Independence Day", "holiday"),
    dated({ 2026: "2026-03-20" }, "Eid ul-Fitr", "holiday", "estimated"),
    dated({ 2026: "2026-05-27" }, "Eid ul-Adha", "holiday", "estimated")
  ],
  MX: [
    fixed(1, 1, "New Year's Day", "holiday"),
    fixed(5, 1, "Labour Day", "holiday"),
    fixed(9, 16, "Independence Day", "holiday")
  ],
  MU: [
    fixed(1, 1, "New Year", "holiday"), fixed(1, 2, "New Year", "holiday"),
    fixed(2, 1, "Abolition of Slavery", "holiday"), fixed(3, 12, "Independence Day", "holiday"),
    fixed(5, 1, "Labour Day", "holiday"), fixed(11, 2, "Arrival of Indentured Labourers", "holiday"),
    fixed(12, 25, "Christmas Day", "holiday"),
    dated({ 2026: "2026-02-17" }, "Spring Festival", "holiday"),
    dated({ 2026: "2026-02-15" }, "Maha Shivaratree", "religious"),
    dated({ 2026: "2026-03-21" }, "Ougadi", "holiday"),
    dated({ 2026: "2026-03-20" }, "Eid-ul-Fitr", "religious", "estimated"),
    dated({ 2026: "2026-09-15" }, "Ganesh Chaturthi", "holiday"),
    dated({ 2026: "2026-11-08" }, "Divali", "holiday"),
    dated({ 2026: "2026-01-20" }, "Thaipoosam Cavadee", "holiday"),
    dated({ 2026: "2026-05-31" }, "Visakha Bucha", "religious")
  ],
  SC: [
    fixed(1, 1, "New Year's Day", "holiday"), fixed(1, 2, "New Year", "holiday"),
    fixed(5, 1, "Labour Day", "holiday"), fixed(6, 18, "Constitution Day", "holiday"),
    fixed(6, 29, "Independence Day", "holiday"), fixed(8, 15, "Assumption Day", "holiday"),
    fixed(11, 1, "All Saints' Day", "holiday"), fixed(12, 8, "Immaculate Conception", "holiday"),
    fixed(12, 25, "Christmas Day", "holiday"),
    dated({ 2026: "2026-04-03" }, "Good Friday", "holiday"),
    dated({ 2026: "2026-04-04" }, "Easter Saturday", "holiday"),
    dated({ 2026: "2026-04-06" }, "Easter Monday", "holiday"),
    dated({ 2026: "2026-05-14" }, "Ascension Day", "holiday"),
    dated({ 2026: "2026-06-04" }, "Corpus Christi", "holiday"),
    dated({ 2026: "2026-11-24" }, "Il Full Moon Poya Day", "religious")
  ],
  SA: [
    fixed(9, 23, "Saudi National Day", "public"),
    dated({ 2026: "2026-03-20" }, "Eid al-Fitr", "religious", "estimated"),
    dated({ 2026: "2026-05-27" }, "Eid al-Adha", "religious", "estimated")
  ],
  TR: [
    fixed(10, 29, "Republic Day", "public"),
    dated({ 2026: "2026-03-20" }, "Ramazan Bayramı", "religious", "estimated"),
    dated({ 2026: "2026-05-27" }, "Kurban Bayramı", "religious", "estimated")
  ],
  EG: [
    fixed(10, 6, "Armed Forces Day", "public"),
    dated({ 2026: "2026-03-20" }, "Eid al-Fitr", "religious", "estimated"),
    dated({ 2026: "2026-05-27" }, "Eid al-Adha", "religious", "estimated")
  ],
  NG: [
    fixed(10, 1, "Independence Day", "public"),
    dated({ 2026: "2026-03-20" }, "Eid al-Fitr", "religious", "estimated"),
    dated({ 2026: "2026-05-27" }, "Eid al-Adha", "religious", "estimated")
  ],
  ZA: [
    fixed(1, 1, "New Year’s Day", "public"),
    fixed(3, 21, "Human Rights Day", "public"),
    fixed(4, 27, "Freedom Day", "public"),
    fixed(12, 16, "Day of Reconciliation", "public")
  ],
  LK: [
    dated({ 2026: "2026-01-03" }, "Duruthu Full Moon Poya Day", "public", "confirmed", "high", { source_name: "Sri Lanka Govt" }),
    dated({ 2026: "2026-01-15" }, "Tamil Thai Pongal Day", "public", "confirmed", "high"),
    dated({ 2026: "2026-02-04" }, "Independence Day", "public", "confirmed", "high"),
    dated({ 2026: "2026-04-14" }, "Sinhala and Tamil New Year", "public", "confirmed", "high"),
    dated({ 2026: "2026-05-01" }, "Vesak Full Moon Poya Day", "public", "confirmed", "high"),
    dated({ 2026: "2026-11-24" }, "Il Full Moon Poya Day", "public", "confirmed", "high")
  ],
  BD: [
    fixed(3, 26, "Independence Day", "public"),
    fixed(12, 16, "Victory Day", "public"),
    dated({ 2026: "2026-03-20" }, "Eid al-Fitr", "religious", "estimated")
  ],
  NP: [
    fixed(5, 29, "Republic Day", "public"),
    fixed(9, 19, "Constitution Day", "public")
  ],
  PL: [fixed(11, 11, "Independence Day", "public")],
  SE: [fixed(6, 6, "National Day", "public")],
  PT: [fixed(6, 10, "Portugal Day", "public")],
  AT: [fixed(10, 26, "National Day", "public")],
  GR: [fixed(3, 25, "Independence Day", "public")],
  AR: [fixed(7, 9, "Independence Day", "public")],
  CO: [fixed(7, 20, "Independence Day", "public")],
  CL: [fixed(9, 18, "Independence Day", "public")],
  MA: [fixed(11, 18, "Independence Day", "public")],
  GH: [fixed(3, 6, "Independence Day", "public")],
  FI: [fixed(12, 6, "Independence Day", "public")],
  DK: [fixed(6, 5, "Constitution Day", "public")],
  NO: [fixed(5, 17, "Constitution Day", "public")],
  BE: [fixed(7, 21, "National Day", "public")],
  CZ: [fixed(10, 28, "Independent State Day", "public")],
  HU: [fixed(8, 20, "State Foundation Day", "public")],
  RO: [fixed(12, 1, "Great Union Day", "public")],
  RU: [fixed(6, 12, "Russia Day", "public")],
  UA: [fixed(8, 24, "Independence Day", "public")],
  QA: [fixed(12, 18, "National Day", "public")],
  JO: [fixed(5, 25, "Independence Day", "public")],
  TZ: [fixed(12, 9, "Independence Day", "public")],
  PE: [fixed(7, 28, "Independence Day", "public")],
  EC: [fixed(8, 10, "Independence Day", "public")],
  UY: [fixed(8, 25, "Independence Day", "public")],
  KH: [fixed(11, 9, "Independence Day", "public")],
  MM: [fixed(1, 4, "Independence Day", "public")],
  LA: [fixed(12, 2, "National Day", "public")],
  MN: [fixed(7, 11, "Naadam", "public")],
  KZ: [fixed(12, 16, "Independence Day", "public")],
  BN: [fixed(2, 23, "National Day", "public")],
  FJ: [fixed(10, 10, "Fiji Day", "public")],
  IS: [fixed(6, 17, "National Day", "public")],
  LU: [fixed(6, 23, "National Day", "public")],
  SK: [fixed(9, 1, "Constitution Day", "public")],
  SI: [fixed(6, 25, "Statehood Day", "public")],
  HR: [fixed(6, 25, "Statehood Day", "public")],
  RS: [fixed(2, 15, "Statehood Day", "public")],
  BG: [fixed(3, 3, "Liberation Day", "public")],
  LT: [fixed(2, 16, "Independence Day", "public")],
  LV: [fixed(11, 18, "Independence Day", "public")],
  EE: [fixed(2, 24, "Independence Day", "public")],
  MT: [fixed(9, 21, "Independence Day", "public")],
  CY: [fixed(10, 1, "Independence Day", "public")],
  LB: [fixed(11, 22, "Independence Day", "public")],
  IQ: [fixed(10, 3, "National Day", "public")],
  OM: [fixed(11, 18, "National Day", "public")],
  BH: [fixed(12, 16, "National Day", "public")],
  KW: [fixed(2, 25, "National Day", "public")],
  DZ: [fixed(7, 5, "Independence Day", "public")],
  TN: [fixed(3, 20, "Independence Day", "public")],
  SN: [fixed(4, 4, "Independence Day", "public")],
  CI: [fixed(8, 7, "Independence Day", "public")],
  CM: [fixed(5, 20, "National Day", "public")],
  ZM: [fixed(10, 24, "Independence Day", "public")],
  ZW: [fixed(4, 18, "Independence Day", "public")],
  RW: [fixed(7, 1, "Independence Day", "public")],
  BW: [fixed(9, 30, "Independence Day", "public")],
  VE: [fixed(7, 5, "Independence Day", "public")],
  BO: [fixed(8, 6, "Independence Day", "public")],
  PA: [fixed(11, 3, "Independence Day", "public")],
  CR: [fixed(9, 15, "Independence Day", "public")],
  DO: [fixed(2, 27, "Independence Day", "public")],
  JM: [fixed(8, 6, "Independence Day", "public")],
  NA: [
    fixed(3, 21, "Independence Day", "public"),
    fixed(5, 4, "Cassinga Day", "public"),
    fixed(5, 25, "Africa Day", "public"),
    fixed(12, 10, "Human Rights Day", "public")
  ]
};
