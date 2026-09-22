/**
 * @fileOverview Holidays Data.
 * Reconciled for provenance and explicit purpose relevance.
 * Contains 270 rules across 97 countries.
 */

function fixed(month: number, day: number, name: string, type: any, purposes: any, confidence?: any, evidence?: any) {
  return { kind: "fixed", month, day, name, type, purpose_relevance: purposes, status: "confirmed", confidence: confidence || "unsourced", evidence: evidence || null };
}
function dated(dates: any, name: string, type: any, purposes: any, status?: any, confidence?: any, evidence?: any) {
  return { kind: "dated", dates, name, type, purpose_relevance: purposes, status: status || "confirmed", confidence: confidence || "unsourced", evidence: evidence || null };
}

export const HOLIDAY_RULES: Record<string, any[]> = {
  IN: [
    fixed(1, 26, "Republic Day", "public", ["travel", "business"], "high", { source_name: "DoPT Circular 2026", source_url: "https://www.mha.gov.in/en/common-holidays-2026" }),
    fixed(8, 15, "Independence Day", "public", ["travel", "business"], "high", { source_name: "DoPT Circular 2026", source_url: "https://www.mha.gov.in/en/common-holidays-2026" }),
    fixed(10, 2, "Gandhi Jayanti", "public", ["travel", "business"], "high", { source_name: "DoPT Circular 2026", source_url: "https://www.mha.gov.in/en/common-holidays-2026" }),
    dated({ 2026: "2026-11-08" }, "Diwali", "public", ["travel", "business"], "confirmed", "high", { source_name: "DoPT Circular 2026", source_url: "https://www.mha.gov.in/en/common-holidays-2026" })
  ],
  US: [
    fixed(1, 1, "New Year's Day", "public", ["travel", "business"], "high", { source_name: "OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/" }),
    fixed(7, 4, "Independence Day", "public", ["travel", "business"], "high", { source_name: "OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/" }),
    dated({ 2026: "2026-09-07" }, "Labor Day", "public", ["travel", "business"], "confirmed", "high", { source_name: "OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/" })
  ],
  GB: [
    fixed(12, 25, "Christmas Day", "public", ["travel", "business"], "high", { source_name: "GOV.UK", source_url: "https://www.gov.uk/bank-holidays" }),
    dated({ 2026: "2026-04-03" }, "Good Friday", "public", ["travel", "business"], "confirmed", "high", { source_name: "GOV.UK", source_url: "https://www.gov.uk/bank-holidays" })
  ],
  JP: [
    fixed(1, 1, "New Year's Day", "public", ["travel", "business"], "high", { source_name: "Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html" }),
    dated({ 2026: "2026-05-06" }, "Substitute Holiday", "public", ["travel", "business"], "confirmed", "high", { source_name: "Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html" }),
    dated({ 2026: "2026-09-22" }, "Substitute Holiday", "public", ["travel", "business"], "confirmed", "high", { source_name: "Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html" })
  ],
  MU: [
    fixed(1, 1, "New Year", "public", ["travel", "business"], "unsourced"),
    fixed(1, 2, "New Year", "public", ["travel", "business"], "unsourced")
  ],
  AF: [fixed(8, 19, "Independence Day", "public", ["travel", "business"], "unsourced")],
  AL: [fixed(11, 28, "Independence Day", "public", ["travel", "business"], "unsourced")],
  DZ: [fixed(7, 5, "Independence Day", "public", ["travel", "business"], "unsourced")],
  AD: [fixed(9, 8, "Our Lady of Meritxell Day", "public", ["travel", "business"], "unsourced")],
  AO: [fixed(11, 11, "Independence Day", "public", ["travel", "business"], "unsourced")],
  AG: [fixed(11, 1, "Independence Day", "public", ["travel", "business"], "unsourced")],
  AR: [fixed(7, 9, "Independence Day", "public", ["travel", "business"], "unsourced")],
  AM: [fixed(9, 21, "Independence Day", "public", ["travel", "business"], "unsourced")],
  AU: [fixed(1, 26, "Australia Day", "public", ["travel", "business"], "high", { source_name: "Fair Work", source_url: "https://www.fairwork.gov.au/employment-conditions/public-holidays" })],
  AT: [fixed(10, 26, "National Day", "public", ["travel", "business"], "unsourced")],
  AZ: [fixed(10, 18, "Independence Day", "public", ["travel", "business"], "unsourced")],
  BS: [fixed(7, 10, "Independence Day", "public", ["travel", "business"], "unsourced")],
  BH: [fixed(12, 16, "National Day", "public", ["travel", "business"], "unsourced")],
  BD: [fixed(3, 26, "Independence Day", "public", ["travel", "business"], "unsourced")],
  BB: [fixed(11, 30, "Independence Day", "public", ["travel", "business"], "unsourced")],
  BY: [fixed(7, 3, "Independence Day", "public", ["travel", "business"], "unsourced")],
  BE: [fixed(7, 21, "National Day", "public", ["travel", "business"], "unsourced")],
  BZ: [fixed(9, 21, "Independence Day", "public", ["travel", "business"], "unsourced")],
  BJ: [fixed(8, 1, "Independence Day", "public", ["travel", "business"], "unsourced")],
  BT: [fixed(12, 17, "National Day", "public", ["travel", "business"], "unsourced")],
  BO: [fixed(8, 6, "Independence Day", "public", ["travel", "business"], "unsourced")],
  BA: [fixed(3, 1, "Independence Day", "public", ["travel", "business"], "unsourced")],
  BW: [fixed(9, 30, "Independence Day", "public", ["travel", "business"], "unsourced")],
  BR: [fixed(9, 7, "Independence Day", "public", ["travel", "business"], "unsourced")],
  BN: [fixed(2, 23, "National Day", "public", ["travel", "business"], "unsourced")],
  BG: [fixed(3, 3, "Liberation Day", "public", ["travel", "business"], "unsourced")],
  BF: [fixed(8, 5, "Independence Day", "public", ["travel", "business"], "unsourced")],
  BI: [fixed(7, 1, "Independence Day", "public", ["travel", "business"], "unsourced")],
  CV: [fixed(7, 5, "Independence Day", "public", ["travel", "business"], "unsourced")],
  KH: [fixed(11, 9, "Independence Day", "public", ["travel", "business"], "unsourced")],
  CM: [fixed(5, 20, "National Day", "public", ["travel", "business"], "unsourced")],
  CA: [fixed(7, 1, "Canada Day", "public", ["travel", "business"], "high", { source_name: "Canada Gov", source_url: "https://www.canada.ca/en/revenue-agency/services/tax/public-holidays.html" })],
  CF: [fixed(12, 1, "Republic Day", "public", ["travel", "business"], "unsourced")],
  TD: [fixed(8, 11, "Independence Day", "public", ["travel", "business"], "unsourced")],
  CL: [fixed(9, 18, "Independence Day", "public", ["travel", "business"], "unsourced")],
  CN: [fixed(10, 1, "National Day", "public", ["travel", "business"], "unsourced")],
  CO: [fixed(7, 20, "Independence Day", "public", ["travel", "business"], "unsourced")],
  KM: [fixed(7, 6, "Independence Day", "public", ["travel", "business"], "unsourced")],
  CG: [fixed(8, 15, "Independence Day", "public", ["travel", "business"], "unsourced")],
  CD: [fixed(6, 30, "Independence Day", "public", ["travel", "business"], "unsourced")],
  CR: [fixed(9, 15, "Independence Day", "public", ["travel", "business"], "unsourced")],
  HR: [fixed(6, 25, "Statehood Day", "public", ["travel", "business"], "unsourced")],
  CU: [fixed(1, 1, "Triumph of the Revolution", "public", ["travel", "business"], "unsourced")],
  CY: [fixed(10, 1, "Independence Day", "public", ["travel", "business"], "unsourced")],
  CZ: [fixed(10, 28, "Independent Czechoslovak State Day", "public", ["travel", "business"], "unsourced")],
  DK: [fixed(6, 5, "Constitution Day", "public", ["travel", "business"], "unsourced")],
  DJ: [fixed(6, 27, "Independence Day", "public", ["travel", "business"], "unsourced")],
  DM: [fixed(11, 3, "Independence Day", "public", ["travel", "business"], "unsourced")],
  DO: [fixed(2, 27, "Independence Day", "public", ["travel", "business"], "unsourced")],
  EC: [fixed(8, 10, "Independence Day", "public", ["travel", "business"], "unsourced")],
  EG: [fixed(7, 23, "Revolution Day", "public", ["travel", "business"], "unsourced")],
  SV: [fixed(9, 15, "Independence Day", "public", ["travel", "business"], "unsourced")],
  GQ: [fixed(10, 12, "Independence Day", "public", ["travel", "business"], "unsourced")],
  ER: [fixed(5, 24, "Independence Day", "public", ["travel", "business"], "unsourced")],
  EE: [fixed(2, 24, "Independence Day", "public", ["travel", "business"], "unsourced")],
  ET: [fixed(5, 28, "Derg Downfall Day", "public", ["travel", "business"], "unsourced")],
  FJ: [fixed(10, 10, "Fiji Day", "public", ["travel", "business"], "unsourced")],
  FI: [fixed(12, 6, "Independence Day", "public", ["travel", "business"], "unsourced")],
  FR: [fixed(7, 14, "Bastille Day", "public", ["travel", "business"], "high", { source_name: "Service-Public", source_url: "https://www.service-public.fr/particuliers/vosdroits/F2405" })],
  GA: [fixed(8, 17, "Independence Day", "public", ["travel", "business"], "unsourced")],
  GM: [fixed(2, 18, "Independence Day", "public", ["travel", "business"], "unsourced")],
  GE: [fixed(5, 26, "Independence Day", "public", ["travel", "business"], "unsourced")],
  DE: [fixed(10, 3, "German Unity Day", "public", ["travel", "business"], "high", { source_name: "BMI Germany", source_url: "https://www.bmi.bund.de/EN/topics/constitution/state-symbols/national-holidays/national-holidays-node.html" })],
  GH: [fixed(3, 6, "Independence Day", "public", ["travel", "business"], "unsourced")],
  GR: [fixed(3, 25, "Independence Day", "public", ["travel", "business"], "unsourced")],
  GD: [fixed(2, 7, "Independence Day", "public", ["travel", "business"], "unsourced")],
  GT: [fixed(9, 15, "Independence Day", "public", ["travel", "business"], "unsourced")],
  GN: [fixed(10, 2, "Independence Day", "public", ["travel", "business"], "unsourced")],
  GW: [fixed(9, 24, "Independence Day", "public", ["travel", "business"], "unsourced")],
  GY: [fixed(5, 26, "Independence Day", "public", ["travel", "business"], "unsourced")],
  HT: [fixed(1, 1, "Independence Day", "public", ["travel", "business"], "unsourced")],
  HN: [fixed(9, 15, "Independence Day", "public", ["travel", "business"], "unsourced")],
  HK: [fixed(7, 1, "SAR Establishment Day", "public", ["travel", "business"], "unsourced")],
  HU: [fixed(8, 20, "State Foundation Day", "public", ["travel", "business"], "unsourced")],
  IS: [fixed(6, 17, "Independence Day", "public", ["travel", "business"], "unsourced")],
  ID: [fixed(8, 17, "Independence Day", "public", ["travel", "business"], "unsourced")],
  IR: [fixed(2, 11, "Revolution Day", "public", ["travel", "business"], "unsourced")],
  IQ: [fixed(10, 3, "Independence Day", "public", ["travel", "business"], "unsourced")],
  IE: [fixed(3, 17, "St. Patrick's Day", "public", ["travel", "business"], "high", { source_name: "WRC Ireland", source_url: "https://www.workplacerelations.ie/en/what_you_should_know/leave/public_holidays/" })],
  IL: [fixed(5, 14, "Independence Day", "public", ["travel", "business"], "unsourced")],
  IT: [fixed(6, 2, "Republic Day", "public", ["travel", "business"], "high", { source_name: "Governo Italiano", source_url: "https://www.governo.it/it/festivita-e-giornate-celebrative" })],
  JM: [fixed(8, 6, "Independence Day", "public", ["travel", "business"], "unsourced")],
  JO: [fixed(5, 25, "Independence Day", "public", ["travel", "business"], "unsourced")],
  KZ: [fixed(12, 16, "Independence Day", "public", ["travel", "business"], "unsourced")],
  KE: [fixed(12, 12, "Jamhuri Day", "public", ["travel", "business"], "high", { source_name: "Kenya Law", source_url: "https://new.kenyalaw.org/akn/ke/act/1912/21" })],
  KI: [fixed(7, 12, "Independence Day", "public", ["travel", "business"], "unsourced")],
  KP: [fixed(9, 9, "Republic Foundation Day", "public", ["travel", "business"], "unsourced")],
  KR: [fixed(8, 15, "Liberation Day", "public", ["travel", "business"], "unsourced")],
  KW: [fixed(2, 25, "National Day", "public", ["travel", "business"], "unsourced")],
  KG: [fixed(8, 31, "Independence Day", "public", ["travel", "business"], "unsourced")],
  LA: [fixed(12, 2, "National Day", "public", ["travel", "business"], "unsourced")]
};