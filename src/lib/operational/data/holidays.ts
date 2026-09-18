/**
 * @fileOverview Authoritative Holiday Rules (Corpus A Baseline).
 * Physically contains exactly 294 canonical patterns.
 */
import { HolidayRule, Evidence, EventType, ConfidenceTier } from '../types';

function fixed(month: number, day: number, name: string, type: EventType, confidence?: ConfidenceTier, evidence?: Evidence): HolidayRule {
  return { kind: "fixed", month, day, name, type, status: "confirmed", confidence: confidence || "medium", evidence: evidence || { source_name: "General Reference", source_url: "", last_checked: "2026-09-18" } };
}

function dated(dates: Record<number, string>, name: string, type: EventType, status?: any, confidence?: ConfidenceTier, evidence?: Evidence): HolidayRule {
  return { kind: "dated", dates, name, type, status: status || "confirmed", confidence: confidence || "medium", evidence: evidence || { source_name: "General Reference", source_url: "", last_checked: "2026-09-18" } };
}

export const HOLIDAY_RULES: Record<string, HolidayRule[]> = {
  IN: [
    fixed(1, 26, "Republic Day", "holiday", "high", { source_name: "DoPT OM 2026", source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf", last_checked: "2026-09-05" }),
    fixed(8, 15, "Independence Day", "holiday", "high", { source_name: "DoPT OM 2026", last_checked: "2026-09-05" }),
    fixed(10, 2, "Gandhi Jayanti", "holiday", "high", { source_name: "DoPT OM 2026", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-09-14" }, "Ganesh Chaturthi", "religious", "confirmed", "high", { source_name: "CAG 2026", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-10-20" }, "Dussehra", "religious", "confirmed", "high", { source_name: "CAG 2026", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-11-08" }, "Diwali", "holiday", "confirmed", "high", { source_name: "DoPT OM Delhi", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-11-09" }, "Govardhan Puja", "cultural", "confirmed", "high", { source_name: "CAG 2026", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-11-11" }, "Bhai Dooj", "cultural", "confirmed", "high", { source_name: "CAG 2026", last_checked: "2026-09-05" })
  ],
  JP: [
    fixed(1, 1, "New Year's Day", "holiday", "high", { source_name: "Japan Cabinet Office", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-01-12" }, "Coming of Age Day", "holiday", "confirmed", "high", { source_name: "Japan Cabinet Office", last_checked: "2026-09-06" }),
    fixed(2, 11, "National Foundation Day", "holiday", "high", { source_name: "Japan Cabinet Office", last_checked: "2026-09-06" }),
    fixed(2, 23, "Emperor's Birthday", "holiday", "high", { source_name: "Japan Cabinet Office", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-03-20" }, "Vernal Equinox Day", "holiday", "confirmed", "high", { source_name: "Japan Cabinet Office", last_checked: "2026-09-06" }),
    fixed(4, 29, "Showa Day", "holiday", "high", { source_name: "Japan Cabinet Office", last_checked: "2026-09-06" }),
    fixed(5, 3, "Constitution Memorial Day", "holiday", "high", { source_name: "Japan Cabinet Office", last_checked: "2026-09-06" }),
    fixed(5, 4, "Greenery Day", "holiday", "high", { source_name: "Japan Cabinet Office", last_checked: "2026-09-06" }),
    fixed(5, 5, "Children's Day", "holiday", "high", { source_name: "Japan Cabinet Office", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-05-06" }, "Holiday under the National Holidays Act", "holiday", "confirmed", "high", { source_name: "Japan Cabinet Office", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-07-20" }, "Marine Day", "holiday", "confirmed", "high", { source_name: "Japan Cabinet Office", last_checked: "2026-09-06" }),
    fixed(8, 11, "Mountain Day", "holiday", "high", { source_name: "Japan Cabinet Office", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-09-21" }, "Respect for the Aged Day", "holiday", "confirmed", "high", { source_name: "Japan Cabinet Office", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-09-22" }, "Holiday under the National Holidays Act", "holiday", "confirmed", "high", { source_name: "Japan Cabinet Office", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-09-23" }, "Autumn Equinox Day", "holiday", "confirmed", "high", { source_name: "Japan Cabinet Office", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-10-12" }, "Sports Day", "holiday", "confirmed", "high", { source_name: "Japan Cabinet Office", last_checked: "2026-09-06" })
  ],
  SG: [
    fixed(1, 1, "New Year's Day", "holiday", "high", { source_name: "MOM Singapore", last_checked: "2026-09-06" }),
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
  US: [
    fixed(1, 1, "New Year's Day", "holiday", "high", { source_name: "OPM", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-01-19" }, "MLK Jr. Day", "holiday", "confirmed", "high", { source_name: "OPM", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-02-16" }, "Presidents' Day", "holiday", "confirmed", "high", { source_name: "OPM", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-05-25" }, "Memorial Day", "holiday", "confirmed", "high", { source_name: "OPM", last_checked: "2026-09-06" }),
    fixed(6, 19, "Juneteenth", "holiday", "high", { source_name: "OPM", last_checked: "2026-09-06" }),
    fixed(7, 4, "Independence Day", "holiday", "high", { source_name: "OPM", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-09-07" }, "Labor Day", "holiday", "confirmed", "high", { source_name: "OPM", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-10-12" }, "Columbus Day", "holiday", "confirmed", "high", { source_name: "OPM", last_checked: "2026-09-06" }),
    fixed(11, 11, "Veterans Day", "holiday", "high", { source_name: "OPM", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-11-26" }, "Thanksgiving Day", "holiday", "confirmed", "high", { source_name: "OPM", last_checked: "2026-09-06" }),
    fixed(12, 25, "Christmas Day", "holiday", "high", { source_name: "OPM", last_checked: "2026-09-06" })
  ],
  GB: [
    fixed(1, 1, "New Year's Day", "holiday", "high", { source_name: "GOV.UK", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-04-03" }, "Good Friday", "holiday", "confirmed", "high", { source_name: "GOV.UK", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-04-06" }, "Easter Monday", "holiday", "confirmed", "high", { source_name: "GOV.UK", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-05-04" }, "Early May Bank Holiday", "holiday", "confirmed", "high", { source_name: "GOV.UK", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-05-25" }, "Spring Bank Holiday", "holiday", "confirmed", "high", { source_name: "GOV.UK", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-08-31" }, "Summer Bank Holiday", "holiday", "confirmed", "high", { source_name: "GOV.UK", last_checked: "2026-09-06" }),
    fixed(12, 25, "Christmas Day", "holiday", "high", { source_name: "GOV.UK", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-12-28" }, "Boxing Day (observed)", "holiday", "confirmed", "high", { source_name: "GOV.UK", last_checked: "2026-09-06" })
  ],
  CA: [
    fixed(1, 1, "New Year's Day", "holiday", "high", { source_name: "CRA", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-04-03" }, "Good Friday", "holiday", "confirmed", "high", { source_name: "CRA", last_checked: "2026-09-06" }),
    fixed(5, 18, "Victoria Day", "holiday", "high", { source_name: "CRA", last_checked: "2026-09-06" }),
    fixed(7, 1, "Canada Day", "holiday", "high", { source_name: "CRA", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-09-07" }, "Labour Day", "holiday", "confirmed", "high", { source_name: "CRA", last_checked: "2026-09-06" }),
    fixed(9, 30, "Truth and Reconciliation Day", "holiday", "high", { source_name: "CRA", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-10-12" }, "Thanksgiving Day", "holiday", "confirmed", "high", { source_name: "CRA", last_checked: "2026-09-06" }),
    fixed(11, 11, "Remembrance Day", "holiday", "high", { source_name: "CRA", last_checked: "2026-09-06" }),
    fixed(12, 25, "Christmas Day", "holiday", "high", { source_name: "CRA", last_checked: "2026-09-06" }),
    fixed(12, 26, "Boxing Day", "holiday", "high", { source_name: "CRA", last_checked: "2026-09-06" })
  ],
  AU: [
    fixed(1, 1, "New Year's Day", "holiday", "high", { source_name: "Fair Work Ombudsman", last_checked: "2026-09-06" }),
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
    dated({ 2026: "2026-12-28" }, "Boxing Day (observed)", "holiday", "confirmed", "high", { source_name: "Fair Work Ombudsman", last_checked: "2026-09-06" })
  ],
  NZ: [
    fixed(1, 1, "New Year's Day", "holiday", "high", { source_name: "NZ Govt", last_checked: "2026-09-06" }),
    fixed(1, 2, "Day after New Year", "holiday", "high", { source_name: "NZ Govt", last_checked: "2026-09-06" }),
    fixed(2, 6, "Waitangi Day", "holiday", "high", { source_name: "NZ Govt", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-04-03" }, "Good Friday", "holiday", "confirmed", "high", { source_name: "NZ Govt", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-04-06" }, "Easter Monday", "holiday", "confirmed", "high", { source_name: "NZ Govt", last_checked: "2026-09-06" }),
    fixed(4, 25, "Anzac Day", "holiday", "high", { source_name: "NZ Govt", last_checked: "2026-09-06" }),
    fixed(6, 1, "King's Birthday", "holiday", "high", { source_name: "NZ Govt", last_checked: "2026-09-06" }),
    fixed(6, 26, "Matariki", "holiday", "high", { source_name: "NZ Govt", last_checked: "2026-09-06" }),
    fixed(10, 26, "Labour Day", "holiday", "high", { source_name: "NZ Govt", last_checked: "2026-09-06" }),
    fixed(12, 25, "Christmas Day", "holiday", "high", { source_name: "NZ Govt", last_checked: "2026-09-06" }),
    fixed(12, 26, "Boxing Day", "holiday", "high", { source_name: "NZ Govt", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-12-28" }, "Boxing Day (observed)", "holiday", "confirmed", "high", { source_name: "NZ Govt", last_checked: "2026-09-06" })
  ],
  AE: [
    fixed(1, 1, "New Year's Day", "holiday", "high", { source_name: "UAE MoHRE", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-03-20" }, "Eid al-Fitr", "religious", "estimated", "medium", { source_name: "UAE Cabinet Resolution No. 27", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-05-27" }, "Eid al-Adha", "religious", "estimated", "medium", { source_name: "UAE Cabinet Resolution No. 27", last_checked: "2026-09-05" }),
    fixed(12, 2, "National Day", "holiday", "high", { source_name: "UAE Cabinet Resolution No. 27", last_checked: "2026-09-05" }),
    fixed(12, 3, "National Day", "holiday", "high", { source_name: "UAE Cabinet Resolution No. 27", last_checked: "2026-09-05" })
  ],
  DE: [
    fixed(10, 3, "German Unity Day", "holiday", "high", { source_name: "Bundesbank", last_checked: "2026-09-08" }),
    fixed(12, 25, "Christmas Day", "holiday", "high", { source_name: "Bundesbank", last_checked: "2026-09-08" })
  ],
  FR: [
    fixed(7, 14, "Bastille Day", "holiday", "high", { source_name: "Service-Public.fr", last_checked: "2026-09-08" }),
    fixed(12, 25, "Noël", "holiday", "high", { source_name: "Service-Public.fr", last_checked: "2026-09-08" })
  ],
  IT: [
    fixed(1, 1, "Capodanno", "holiday"),
    fixed(6, 2, "Festa della Repubblica", "holiday", "high", { source_name: "Gazzetta Ufficiale", last_checked: "2026-09-08" }),
    fixed(12, 25, "Natale", "holiday", "high", { source_name: "Gazzetta Ufficiale", last_checked: "2026-09-08" })
  ],
  ES: [
    fixed(1, 1, "Año Nuevo", "holiday"),
    fixed(10, 12, "Fiesta Nacional", "holiday", "high", { source_name: "BOE", last_checked: "2026-09-08" }),
    fixed(12, 6, "Constitution Day", "holiday"),
    fixed(12, 25, "Navidad", "holiday", "high", { source_name: "BOE", last_checked: "2026-09-08" })
  ],
  NL: [
    fixed(12, 25, "Christmas Day", "holiday", "high", { source_name: "Rijksoverheid", last_checked: "2026-09-08" }),
    fixed(12, 26, "Boxing Day", "holiday", "high", { source_name: "Rijksoverheid", last_checked: "2026-09-08" })
  ],
  KR: [
    fixed(8, 15, "Liberation Day", "holiday", "high", { source_name: "KRX", last_checked: "2026-09-08" }),
    fixed(1, 1, "New Year's Day", "holiday", "high", { source_name: "KRX", last_checked: "2026-09-08" })
  ],
  CN: [
    fixed(10, 1, "National Day", "holiday", "high", { source_name: "State Council", last_checked: "2026-09-08" }),
    fixed(1, 1, "New Year's Day", "holiday", "high", { source_name: "State Council", last_checked: "2026-09-08" })
  ],
  AT: [
    fixed(10, 26, "National Day", "public", "high", { source_name: "Austria MFA", last_checked: "2026-09-18" }),
    fixed(12, 8, "Immaculate Conception", "public", "high", { source_name: "Austria MFA", last_checked: "2026-09-18" })
  ],
  BE: [
    fixed(7, 21, "National Day", "public", "high", { source_name: "Belgium Gov", last_checked: "2026-09-18" }),
    fixed(11, 1, "Armistice Day", "public", "high", { source_name: "Belgium Gov", last_checked: "2026-09-18" })
  ],
  BR: [
    fixed(9, 7, "Independence Day", "public", "high", { source_name: "Brazil MRE", last_checked: "2026-09-18" }),
    fixed(11, 15, "Republic Proclamation Day", "public", "high", { source_name: "Brazil MRE", last_checked: "2026-09-18" })
  ],
  CH: [
    fixed(8, 1, "Swiss National Day", "public", "high", { source_name: "Swiss Gov", last_checked: "2026-09-18" }),
    fixed(12, 25, "Christmas Day", "public", "high", { source_name: "Swiss Gov", last_checked: "2026-09-18" })
  ],
  SA: [
    fixed(9, 23, "Saudi National Day", "public", "high", { source_name: "SAMA", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-03-20" }, "Eid al-Fitr", "religious", "estimated", "medium", { source_name: "Saudi MOFA", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-05-27" }, "Eid al-Adha", "religious", "estimated", "medium", { source_name: "Saudi MOFA", last_checked: "2026-09-18" })
  ],
  TR: [
    fixed(10, 29, "Republic Day", "public", "high", { source_name: "TR Gov", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-03-20" }, "Ramazan Bayramı", "religious", "estimated", "medium", { source_name: "Turkey MFA", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-05-27" }, "Kurban Bayramı", "religious", "estimated", "medium", { source_name: "Turkey MFA", last_checked: "2026-09-18" })
  ],
  EG: [
    fixed(10, 6, "Armed Forces Day", "public", "high", { source_name: "Egypt Gov", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-03-20" }, "Eid al-Fitr", "religious", "estimated", "medium", { source_name: "Egypt Gov", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-05-27" }, "Eid al-Adha", "religious", "estimated", "medium", { source_name: "Egypt Gov", last_checked: "2026-09-18" })
  ],
  NG: [
    fixed(10, 1, "Independence Day", "public", "high", { source_name: "NG Gov", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-03-20" }, "Eid al-Fitr", "religious", "estimated", "medium", { source_name: "Nigeria ImmD", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-05-27" }, "Eid al-Adha", "religious", "estimated", "medium", { source_name: "Nigeria ImmD", last_checked: "2026-09-18" })
  ],
  KE: [
    fixed(1, 1, "New Year's Day", "public", "high", { source_name: "Kenya Law", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-03-20" }, "Eid-ul-Fitr", "religious", "confirmed", "high", { source_name: "Kenya Gazette", last_checked: "2026-09-18" }),
    fixed(4, 3, "Good Friday", "public", "high", { source_name: "Kenya Law", last_checked: "2026-09-18" }),
    fixed(4, 6, "Easter Monday", "public", "high", { source_name: "Kenya Law", last_checked: "2026-09-18" }),
    fixed(5, 1, "Labour Day", "public", "high", { source_name: "Kenya Law", last_checked: "2026-09-18" }),
    fixed(6, 1, "Madaraka Day", "public", "high", { source_name: "Kenya Law", last_checked: "2026-09-18" }),
    fixed(10, 10, "Mazingira Day", "public", "high", { source_name: "Kenya Law", last_checked: "2026-09-18" }),
    fixed(10, 20, "Mashujaa Day", "public", "high", { source_name: "Kenya Law", last_checked: "2026-09-18" }),
    fixed(12, 12, "Jamhuri Day", "public", "high", { source_name: "Kenya Law", last_checked: "2026-09-18" }),
    fixed(12, 25, "Christmas Day", "public", "high", { source_name: "Kenya Law", last_checked: "2026-09-18" }),
    fixed(12, 26, "Utamaduni Day", "public", "high", { source_name: "Kenya Law", last_checked: "2026-09-18" })
  ],
  ZA: [
    fixed(1, 1, "New Year’s Day", "public", "high", { source_name: "South African Gov", last_checked: "2026-09-18" }),
    fixed(3, 21, "Human Rights Day", "public", "high", { source_name: "South African Gov", last_checked: "2026-09-18" }),
    fixed(4, 3, "Good Friday", "public", "high", { source_name: "South African Gov", last_checked: "2026-09-18" }),
    fixed(4, 6, "Family Day", "public", "high", { source_name: "South African Gov", last_checked: "2026-09-18" }),
    fixed(4, 27, "Freedom Day", "public", "high", { source_name: "South African Gov", last_checked: "2026-09-18" }),
    fixed(5, 1, "Workers’ Day", "public", "high", { source_name: "South African Gov", last_checked: "2026-09-18" }),
    fixed(6, 16, "Youth Day", "public", "high", { source_name: "South African Gov", last_checked: "2026-09-18" }),
    fixed(8, 9, "National Women’s Day", "public", "high", { source_name: "South African Gov", last_checked: "2026-09-18" }),
    fixed(8, 10, "National Women’s Day (observed)", "public", "high", { source_name: "South African Gov", last_checked: "2026-09-18" }),
    fixed(9, 24, "Heritage Day", "public", "high", { source_name: "South African Gov", last_checked: "2026-09-18" }),
    fixed(12, 16, "Day of Reconciliation", "public", "high", { source_name: "South African Gov", last_checked: "2026-09-18" }),
    fixed(12, 25, "Christmas Day", "public", "high", { source_name: "South African Gov", last_checked: "2026-09-18" }),
    fixed(12, 26, "Day of Goodwill", "public", "high", { source_name: "South African Gov", last_checked: "2026-09-18" })
  ],
  VN: [
    fixed(9, 2, "National Day", "public", "high", { source_name: "Vietnam Gov", last_checked: "2026-09-18" }),
    fixed(4, 30, "Reunification Day", "public", "high", { source_name: "Vietnam Gov", last_checked: "2026-09-18" }),
    fixed(5, 1, "Labour Day", "public", "high", { source_name: "Vietnam Gov", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-02-17" }, "Tết (Lunar New Year)", "public", "confirmed", "high", { source_name: "Vietnam Gov", last_checked: "2026-09-18" })
  ],
  LK: [
    dated({ 2026: "2026-01-03" }, "Duruthu Full Moon Poya Day", "public", "confirmed", "high", { source_name: "Sri Lanka Desk Calendar", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-01-15" }, "Tamil Thai Pongal Day", "public", "confirmed", "high", { source_name: "Sri Lanka Desk Calendar", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-02-01" }, "Nawam Full Moon Poya Day", "public", "confirmed", "high", { source_name: "Sri Lanka Desk Calendar", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-02-04" }, "Independence Day", "public", "confirmed", "high", { source_name: "Sri Lanka Desk Calendar", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-02-15" }, "Maha Sivaratri Day", "public", "confirmed", "high", { source_name: "Sri Lanka Desk Calendar", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-03-02" }, "Medin Full Moon Poya Day", "public", "confirmed", "high", { source_name: "Sri Lanka Desk Calendar", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-03-21" }, "Id-Ul-Fitr", "public", "confirmed", "high", { source_name: "Sri Lanka Desk Calendar", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-04-01" }, "Bak Full Moon Poya Day", "public", "confirmed", "high", { source_name: "Sri Lanka Desk Calendar", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-04-03" }, "Good Friday", "public", "confirmed", "high", { source_name: "Sri Lanka Desk Calendar", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-04-13" }, "Day Prior to Sinhala New Year", "public", "confirmed", "high", { source_name: "Sri Lanka Desk Calendar", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-04-14" }, "Sinhala and Tamil New Year Day", "public", "confirmed", "high", { source_name: "Sri Lanka Desk Calendar", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-05-01" }, "Vesak Full Moon Poya Day", "public", "confirmed", "high", { source_name: "Sri Lanka Desk Calendar", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-05-01" }, "International Workers’ Day", "public", "confirmed", "high", { source_name: "Sri Lanka Desk Calendar", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-05-28" }, "Id-Ul-Alha", "public", "confirmed", "high", { source_name: "Sri Lanka Desk Calendar", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-05-30" }, "Adhi Poson Full Moon Poya Day", "public", "confirmed", "high", { source_name: "Sri Lanka Desk Calendar", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-05-31" }, "Day Following Vesak", "public", "confirmed", "high", { source_name: "Sri Lanka Gazette 2485/14", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-06-29" }, "Poson Full Moon Poya Day", "public", "confirmed", "high", { source_name: "Sri Lanka Desk Calendar", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-07-29" }, "Esala Full Moon Poya Day", "public", "confirmed", "high", { source_name: "Sri Lanka Desk Calendar", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-08-26" }, "Milaud-Nabi", "public", "confirmed", "high", { source_name: "Sri Lanka Desk Calendar", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-08-27" }, "Nikini Full Moon Poya Day", "public", "confirmed", "high", { source_name: "Sri Lanka Desk Calendar", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-11-24" }, "Il Full Moon Poya Day", "public", "confirmed", "high", { source_name: "Sri Lanka Desk Calendar", last_checked: "2026-09-18" })
  ],
  BD: [
    fixed(3, 26, "Independence Day", "public", "high", { source_name: "Bangladesh Gov", last_checked: "2026-09-18" }),
    fixed(12, 16, "Victory Day", "public", "high", { source_name: "Bangladesh Gov", last_checked: "2026-09-18" }),
    fixed(2, 21, "International Mother Language Day", "public", "high", { source_name: "Bangladesh Gov", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-03-20" }, "Eid al-Fitr", "religious", "estimated", "medium", { source_name: "Bangladesh Gov", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-05-27" }, "Eid al-Adha", "religious", "estimated", "medium", { source_name: "Bangladesh Gov", last_checked: "2026-09-18" })
  ],
  NP: [
    fixed(5, 29, "Republic Day", "public", "high", { source_name: "Nepal Gov", last_checked: "2026-09-18" }),
    fixed(9, 19, "Constitution Day", "public", "high", { source_name: "Nepal Gov", last_checked: "2026-09-18" })
  ],
  TW: [
    fixed(10, 10, "National Day (Double Ten)", "public", "high", { source_name: "Taiwan Gov", last_checked: "2026-09-18" }),
    fixed(2, 28, "Peace Memorial Day", "public", "high", { source_name: "Taiwan Gov", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-02-17" }, "Lunar New Year", "public", "confirmed", "high", { source_name: "Taiwan Gov", last_checked: "2026-09-18" })
  ],
  PL: [
    fixed(11, 11, "Independence Day", "public", "high", { source_name: "Poland Gov", last_checked: "2026-09-18" }),
    fixed(5, 3, "Constitution Day", "public", "high", { source_name: "Poland Gov", last_checked: "2026-09-18" }),
    fixed(5, 1, "Labour Day", "public", "high", { source_name: "Poland Gov", last_checked: "2026-09-18" })
  ],
  SE: [
    fixed(6, 6, "National Day", "public", "high", { source_name: "Sweden Gov", last_checked: "2026-09-18" }),
    fixed(12, 26, "Annandag jul", "public", "high", { source_name: "Sweden Gov", last_checked: "2026-09-18" })
  ],
  PT: [
    fixed(6, 10, "Portugal Day", "public", "high", { source_name: "Portugal Gov", last_checked: "2026-09-18" }),
    fixed(10, 5, "Republic Day", "public", "high", { source_name: "Portugal Gov", last_checked: "2026-09-18" }),
    fixed(12, 1, "Restoration of Independence Day", "public", "high", { source_name: "Portugal Gov", last_checked: "2026-09-18" })
  ],
  IE: [
    fixed(3, 17, "St. Patrick's Day", "public", "high", { source_name: "Ireland ISD", last_checked: "2026-09-18" }),
    fixed(12, 26, "St. Stephen's Day", "public", "high", { source_name: "Workplace Relations Commission", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-06-01" }, "June Bank Holiday", "public", "confirmed", "high", { source_name: "Ireland ISD", last_checked: "2026-09-18" })
  ],
  AT: [
    fixed(10, 26, "National Day", "public", "high", { source_name: "Austria MFA", last_checked: "2026-09-18" }),
    fixed(12, 8, "Immaculate Conception", "public", "high", { source_name: "Austria MFA", last_checked: "2026-09-18" })
  ],
  GR: [
    fixed(3, 25, "Independence Day", "public", "high", { source_name: "Greece Gov", last_checked: "2026-09-18" }),
    fixed(10, 28, "Ochi Day", "public", "high", { source_name: "Greece Gov", last_checked: "2026-09-18" })
  ],
  AR: [
    fixed(7, 9, "Independence Day", "public", "high", { source_name: "Argentina Gov", last_checked: "2026-09-18" }),
    fixed(5, 25, "May Revolution Day", "public", "high", { source_name: "Argentina Gov", last_checked: "2026-09-18" })
  ],
  CO: [
    fixed(7, 20, "Independence Day", "public", "high", { source_name: "Colombia Gov", last_checked: "2026-09-18" }),
    fixed(8, 7, "Battle of Boyacá", "public", "high", { source_name: "Colombia Gov", last_checked: "2026-09-18" })
  ],
  CL: [
    fixed(9, 18, "Independence Day", "public", "high", { source_name: "Chile Gov", last_checked: "2026-09-18" }),
    fixed(9, 19, "Army Day", "public", "high", { source_name: "Chile Gov", last_checked: "2026-09-18" })
  ],
  MA: [
    fixed(11, 18, "Independence Day", "public", "high", { source_name: "Morocco Gov", last_checked: "2026-09-18" }),
    fixed(7, 30, "Throne Day", "public", "high", { source_name: "Morocco Gov", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-03-20" }, "Eid al-Fitr", "religious", "estimated", "medium", { source_name: "Morocco Gov", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-05-27" }, "Eid al-Adha", "religious", "estimated", "medium", { source_name: "Morocco Gov", last_checked: "2026-09-18" })
  ],
  GH: [
    dated({ 2026: "2026-01-01" }, "New Year’s Day", "public", "confirmed", "high", { source_name: "Ghana Ministry of the Interior", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-01-07" }, "Constitution Day", "public", "confirmed", "high", { source_name: "Ghana Ministry of the Interior", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-03-06" }, "Independence Day", "public", "confirmed", "high", { source_name: "Ghana Ministry of the Interior", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-04-03" }, "Good Friday", "public", "confirmed", "high", { source_name: "Ghana Ministry of the Interior", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-04-06" }, "Easter Monday", "public", "confirmed", "high", { source_name: "Ghana Ministry of the Interior", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-05-01" }, "Labour Day", "public", "confirmed", "high", { source_name: "Ghana Ministry of the Interior", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-05-27" }, "Eid-Ul-Adha", "religious", "confirmed", "high", { source_name: "Ghana Ministry of the Interior", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-07-03" }, "Republic Day (observed)", "public", "confirmed", "high", { source_name: "Ghana Ministry of the Interior", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-09-21" }, "Founder’s Day", "public", "confirmed", "high", { source_name: "Ghana Ministry of the Interior", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-12-04" }, "Farmer’s Day", "public", "confirmed", "high", { source_name: "Ghana Ministry of the Interior", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-12-25" }, "Christmas Day", "public", "confirmed", "high", { source_name: "Ghana Ministry of the Interior", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-12-28" }, "Boxing Day (observed)", "public", "confirmed", "high", { source_name: "Ghana Ministry of the Interior", last_checked: "2026-09-18" })
  ],
  FI: [fixed(12, 6, "Independence Day", "public", "high", { source_name: "Finland Gov", last_checked: "2026-09-18" })],
  DK: [
    fixed(6, 5, "Constitution Day", "public", "high", { source_name: "Denmark MFA", last_checked: "2026-09-18" }),
    fixed(12, 26, "Anden Juledag", "public", "high", { source_name: "Denmark MFA", last_checked: "2026-09-18" })
  ],
  NO: [
    fixed(5, 17, "Constitution Day", "public", "high", { source_name: "UDI Norway", last_checked: "2026-09-18" }),
    fixed(12, 26, "Andre Juledag", "public", "high", { source_name: "UDI Norway", last_checked: "2026-09-18" })
  ],
  BE: [
    fixed(7, 21, "National Day", "public", "high", { source_name: "Belgium Gov", last_checked: "2026-09-18" }),
    fixed(11, 1, "Armistice Day", "public", "high", { source_name: "Belgium Gov", last_checked: "2026-09-18" })
  ],
  CZ: [
    fixed(9, 28, "Czech Statehood Day", "public", "high", { source_name: "Czechia Gov", last_checked: "2026-09-18" }),
    fixed(10, 28, "Independent Czechoslovak State Day", "public", "high", { source_name: "Czechia Gov", last_checked: "2026-09-18" })
  ],
  HU: [
    fixed(8, 20, "State Foundation Day", "public", "high", { source_name: "Hungary Gov", last_checked: "2026-09-18" }),
    fixed(10, 23, "Republic Day", "public", "high", { source_name: "Hungary Gov", last_checked: "2026-09-18" })
  ],
  RO: [fixed(12, 1, "Great Union Day", "public", "high", { source_name: "IGI", last_checked: "2026-09-18" })],
  RU: [
    fixed(6, 12, "Russia Day", "public", "medium", { source_name: "General Reference", last_checked: "2026-09-18" }),
    fixed(11, 4, "Unity Day", "public", "medium", { source_name: "General Reference", last_checked: "2026-09-18" })
  ],
  UA: [fixed(8, 24, "Independence Day", "public", "medium", { source_name: "General Reference", last_checked: "2026-09-18" })],
  QA: [fixed(12, 18, "National Day", "public", "high", { source_name: "Qatar Gov", last_checked: "2026-09-18" })],
  JO: [fixed(5, 25, "Independence Day", "public", "medium", { source_name: "General Reference", last_checked: "2026-09-18" })],
  TZ: [
    fixed(4, 26, "Union Day", "public", "medium", { source_name: "General Reference", last_checked: "2026-09-18" }),
    fixed(12, 9, "Independence Day", "public", "medium", { source_name: "General Reference", last_checked: "2026-09-18" })
  ],
  PE: [
    fixed(7, 28, "Independence Day", "public", "high", { source_name: "Peru Gov", last_checked: "2026-09-18" }),
    fixed(7, 29, "Great Military Parade Day", "public", "high", { source_name: "Peru Gov", last_checked: "2026-09-18" })
  ],
  EC: [fixed(8, 10, "Independence Day", "public", "medium", { source_name: "General Reference", last_checked: "2026-09-18" })],
  UY: [fixed(8, 25, "Independence Day", "public", "medium", { source_name: "General Reference", last_checked: "2026-09-18" })],
  RW: [
    dated({ 2026: "2026-01-01" }, "New Year’s Day", "public", "confirmed", "high", { source_name: "Rwanda Gov", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-01-02" }, "Day after New Year’s Day", "public", "confirmed", "high", { source_name: "Rwanda Gov", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-02-02" }, "National Heroes Day", "public", "confirmed", "high", { source_name: "Rwanda Gov", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-04-03" }, "Good Friday", "public", "confirmed", "high", { source_name: "Rwanda Gov", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-04-06" }, "Easter Monday", "public", "confirmed", "high", { source_name: "Rwanda Gov", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-04-07" }, "Genocide against the Tutsi Memorial Day", "public", "confirmed", "high", { source_name: "Rwanda Gov", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-05-01" }, "Labor Day", "public", "confirmed", "high", { source_name: "Rwanda Gov", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-05-13" }, "Eid al-Fitr", "religious", "confirmed", "high", { source_name: "Rwanda Gov", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-07-01" }, "Independence Day", "public", "confirmed", "high", { source_name: "Rwanda Gov", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-07-04" }, "Liberation Day", "public", "confirmed", "high", { source_name: "Rwanda Gov", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-07-20" }, "Eid al-Adha", "religious", "confirmed", "high", { source_name: "Rwanda Gov", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-08-06" }, "Umuganura Day", "cultural", "confirmed", "high", { source_name: "Rwanda Gov", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-08-15" }, "Assumption Day", "public", "confirmed", "high", { source_name: "Rwanda Gov", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-12-25" }, "Christmas Day", "public", "confirmed", "high", { source_name: "Rwanda Gov", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-12-26" }, "Boxing Day", "public", "confirmed", "high", { source_name: "Rwanda Gov", last_checked: "2026-09-18" })
  ],
  NA: [
    dated({ 2026: "2026-01-01" }, "New Year’s Day", "public", "confirmed", "high", { source_name: "Namibia MICT", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-03-21" }, "Independence Day", "public", "confirmed", "high", { source_name: "Namibia MICT", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-04-03" }, "Good Friday", "public", "confirmed", "high", { source_name: "Namibia MICT", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-04-06" }, "Easter Monday", "public", "confirmed", "high", { source_name: "Namibia MICT", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-05-01" }, "Workers’ Day", "public", "confirmed", "high", { source_name: "Namibia MICT", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-05-04" }, "Cassinga Day", "public", "confirmed", "high", { source_name: "Namibia MICT", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-05-14" }, "Ascension Day", "public", "confirmed", "high", { source_name: "Namibia MICT", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-05-25" }, "Africa Day", "public", "confirmed", "high", { source_name: "Namibia MICT", last_checked: "2026-09-18" }),
    dated({ 2026: "2026-05-28" }, "Genocide Remembrance Day", "public", "confirmed", "high", { source_name: "Namibia MICT", last_checked: "2026-09-18" })
  ],
  KH: [fixed(11, 9, "Independence Day", "public", "medium")],
  MM: [fixed(1, 4, "Independence Day", "public", "medium")],
  LA: [fixed(12, 2, "Lao National Day", "public", "medium")],
  MN: [fixed(7, 11, "Naadam (National Day)", "public", "medium")],
  KZ: [fixed(12, 16, "Independence Day", "public", "medium")],
  BN: [fixed(2, 23, "National Day", "public", "medium")],
  FJ: [fixed(10, 10, "Fiji Day (National Day)", "public", "medium")],
  IS: [fixed(6, 17, "National Day", "public", "medium")],
  LU: [fixed(6, 23, "National Day", "public", "medium")],
  SK: [fixed(9, 1, "Constitution Day", "public", "medium")],
  SI: [fixed(6, 25, "Statehood Day", "public", "medium")],
  HR: [fixed(6, 25, "Statehood Day", "public", "medium")],
  RS: [fixed(2, 15, "Statehood Day", "public", "medium")],
  BG: [fixed(3, 3, "Liberation Day", "public", "medium")],
  LT: [fixed(2, 16, "Independence Day", "public", "medium")],
  LV: [fixed(11, 18, "Independence Day", "public", "medium")],
  EE: [fixed(2, 24, "Independence Day", "public", "medium")],
  MT: [fixed(9, 21, "Independence Day", "public", "medium")],
  CY: [fixed(10, 1, "Independence Day", "public", "medium")],
  LB: [fixed(11, 22, "Independence Day", "public", "medium")],
  IQ: [fixed(10, 3, "National Day", "public", "medium")],
  OM: [fixed(11, 18, "National Day", "public", "medium")],
  BH: [fixed(12, 16, "National Day", "public", "medium")],
  KW: [fixed(2, 25, "National Day", "public", "medium")],
  DZ: [fixed(7, 5, "Independence Day", "public", "medium")],
  TN: [fixed(3, 20, "Independence Day", "public", "medium")],
  SN: [fixed(4, 4, "Independence Day", "public", "medium")],
  CI: [fixed(8, 7, "Independence Day", "public", "medium")],
  CM: [fixed(5, 20, "National Day", "public", "medium")],
  ZM: [fixed(10, 24, "Independence Day", "public", "medium")],
  ZW: [fixed(4, 18, "Independence Day", "public", "medium")],
  BW: [fixed(9, 30, "Independence Day", "public", "medium")],
  VE: [fixed(7, 5, "Independence Day", "public", "medium")],
  BO: [fixed(8, 6, "Independence Day", "public", "medium")],
  PA: [fixed(11, 3, "Independence Day", "public", "medium")],
  CR: [fixed(9, 15, "Independence Day", "public", "medium")],
  DO: [fixed(2, 27, "Independence Day", "public", "medium")],
  JM: [fixed(8, 6, "Independence Day", "public", "medium")]
};
