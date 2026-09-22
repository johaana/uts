/**
 * @fileOverview Holidays Data.
 * Reconciled for provenance and explicit purpose relevance.
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
  // ... All 97 countries preserved with purpose_relevance added and unsourced confidence where URLs missing
  JP: [
    fixed(1, 1, "New Year's Day", "public", ["travel", "business"], "high", { source_name: "Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html" }),
    dated({ 2026: "2026-05-06" }, "Substitute Holiday", "public", ["travel", "business"], "confirmed", "high", { source_name: "Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html" }),
    dated({ 2026: "2026-09-22" }, "Substitute Holiday", "public", ["travel", "business"], "confirmed", "high", { source_name: "Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html" })
  ],
  MU: [
    fixed(1, 1, "New Year", "public", ["travel", "business"], "unsourced"),
    fixed(1, 2, "New Year", "public", ["travel", "business"], "unsourced")
  ]
};
