/**
 * @fileOverview Authoritative Holidays Data.
 * Expanded to cover 2026-2028 horizon from all 17 authoritative chunks.
 */

function fixed(month: number, day: number, name: string, type: any, purposes: any, confidence?: any, evidence?: any) {
  return { kind: "fixed", month, day, name, type, purpose_relevance: purposes, status: "confirmed", confidence: confidence || "unsourced", evidence: evidence || null };
}
function dated(dates: any, name: string, type: any, status?: any, confidence?: any, evidence?: any, purposes?: any) {
  return { 
    kind: "dated", 
    dates, 
    name, 
    type, 
    purpose_relevance: purposes || ["travel", "business"], 
    status: status || "confirmed", 
    confidence: confidence || "unsourced", 
    evidence: evidence || null 
  };
}
function nthWeekday(month: number, dow: number, n: number, name: string, type: any, purposes: any, confidence?: any, evidence?: any) {
  return { kind: "nth", month, dow, n, name, type, purpose_relevance: purposes, status: "confirmed", confidence: confidence || "unsourced", evidence: evidence || null };
}

export const HOLIDAY_RULES: Record<string, any[]> = {
  IN: [
    fixed(1, 26, "Republic Day", "public", ["travel", "business"], "high", { source_name: "DoPT Circular", source_url: "https://www.mha.gov.in/en/common-holidays-2026" }),
    fixed(8, 15, "Independence Day", "public", ["travel", "business"], "high", { source_name: "DoPT Circular", source_url: "https://www.mha.gov.in/en/common-holidays-2026" }),
    fixed(10, 2, "Gandhi Jayanti", "public", ["travel", "business"], "high", { source_name: "DoPT Circular", source_url: "https://www.mha.gov.in/en/common-holidays-2026" }),
    dated({ 2026: "2026-09-14", 2027: "2027-09-04", 2028: "2028-08-24" }, "Ganesh Chaturthi", "religious", "confirmed", "high", { source_name: "CAG India", source_url: "https://cag.gov.in/uploads/media/Holiday-List-2026-06982ddd8e2f3c2-57681843.pdf" }),
    dated({ 2026: "2026-10-20", 2027: "2027-10-09", 2028: "2028-09-28" }, "Dussehra", "religious", "confirmed", "high", { source_name: "CAG India", source_url: "https://cag.gov.in/uploads/media/Holiday-List-2026-06982ddd8e2f3c2-57681843.pdf" }),
    dated({ 2026: "2026-11-08", 2027: "2027-10-29", 2028: "2028-10-17" }, "Diwali", "public", "confirmed", "high", {
        source_name: "DoPT OM Delhi Calendar",
        source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf",
        last_checked: "2026-09-08"
      }),
    dated({ 2026: "2026-03-04", 2027: "2027-03-22", 2028: "2028-03-11" }, "Holi", "public", "confirmed", "medium", { source_name: "Government of India", source_url: "https://www.mha.gov.in/" }),
    dated({ 2026: "2026-11-09" }, "Govardhan Puja", "cultural", "confirmed", "high", { source_name: "CAG 2026", source_url: "https://cag.gov.in/uploads/media/Holiday-List-2026-069521fe6f358d0-89936988.pdf" }),
    dated({ 2026: "2026-11-11" }, "Bhai Dooj", "cultural", "confirmed", "high", { source_name: "CAG 2026", source_url: "https://cag.gov.in/uploads/media/Holiday-List-2026-069521fe6f358d0-89936988.pdf" })
  ],
  SG: [
    fixed(1, 1, "New Year's Day", "public", ["travel", "business"], "high", { source_name: "MOM Singapore", source_url: "https://www.mom.gov.sg/employment-practices/public-holidays" }),
    fixed(5, 1, "Labour Day", "public", ["travel", "business"], "high", { source_name: "MOM Singapore", source_url: "https://www.mom.gov.sg/employment-practices/public-holidays" }),
    fixed(8, 9, "National Day", "public", ["travel", "business"], "high", { source_name: "MOM Singapore", source_url: "https://www.mom.gov.sg/employment-practices/public-holidays" }),
    fixed(12, 25, "Christmas Day", "public", ["travel", "business"], "high", { source_name: "MOM Singapore", source_url: "https://www.mom.gov.sg/employment-practices/public-holidays" }),
    dated({ 2026: "2026-02-17", 2027: "2027-02-07", 2028: "2028-01-26" }, "Chinese New Year", "public", "confirmed", "high", { source_name: "MOM Singapore", source_url: "https://www.mom.gov.sg/employment-practices/public-holidays" }),
    dated({ 2026: "2026-04-03", 2027: "2027-03-26", 2028: "2028-04-14" }, "Good Friday", "public", "confirmed", "high", { source_name: "MOM Singapore", source_url: "https://www.mom.gov.sg/employment-practices/public-holidays" }),
    dated({ 2026: "2026-03-20", 2027: "2027-03-10", 2028: "2028-02-28" }, "Hari Raya Puasa", "public", "estimated", "high", { source_name: "MOM Singapore", source_url: "https://www.mom.gov.sg/employment-practices/public-holidays" }),
    dated({ 2026: "2026-05-27", 2027: "2027-05-16", 2028: "2028-05-04" }, "Hari Raya Haji", "public", "estimated", "high", { source_name: "MOM Singapore", source_url: "https://www.mom.gov.sg/employment-practices/public-holidays" }),
    dated({ 2026: "2026-05-31", 2027: "2027-05-20", 2028: "2028-05-08" }, "Vesak Day", "public", "confirmed", "high", { source_name: "MOM Singapore", source_url: "https://www.mom.gov.sg/employment-practices/public-holidays" }),
    dated({ 2026: "2026-11-08", 2027: "2027-10-29", 2028: "2028-11-15" }, "Deepavali", "public", "confirmed", "high", { source_name: "MOM Singapore", source_url: "https://www.mom.gov.sg/employment-practices/public-holidays" })
  ],
  JP: [
    fixed(1, 1, "New Year's Day", "public", ["travel", "business"], "high", { source_name: "Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html" }),
    fixed(2, 11, "National Foundation Day", "public", ["travel", "business"], "high", { source_name: "Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html" }),
    fixed(2, 23, "Emperor's Birthday", "public", ["travel", "business"], "high", { source_name: "Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html" }),
    fixed(4, 29, "Showa Day", "public", ["travel", "business"], "high", { source_name: "Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html" }),
    fixed(5, 3, "Constitution Memorial Day", "public", ["travel", "business"], "high", { source_name: "Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html" }),
    fixed(5, 4, "Greenery Day", "public", ["travel", "business"], "high", { source_name: "Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html" }),
    fixed(5, 5, "Children's Day", "public", ["travel", "business"], "high", { source_name: "Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html" }),
    fixed(8, 11, "Mountain Day", "public", ["travel", "business"], "high", { source_name: "Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html" }),
    fixed(11, 3, "Culture Day", "public", ["travel", "business"], "high", { source_name: "Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html" }),
    fixed(11, 23, "Labor Thanksgiving Day", "public", ["travel", "business"], "high", { source_name: "Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html" }),
    dated({ 2026: "2026-01-12", 2027: "2027-01-11", 2028: "2028-01-10" }, "Coming of Age Day", "public", "confirmed", "high", { source_name: "Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html" }),
    dated({ 2026: "2026-03-20", 2027: "2027-03-21", 2028: "2028-03-20" }, "Vernal Equinox Day", "public", "confirmed", "high", { source_name: "Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html" }),
    dated({ 2026: "2026-07-20", 2027: "2027-07-19", 2028: "2028-07-17" }, "Marine Day", "public", "confirmed", "high", { source_name: "Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html" }),
    dated({ 2026: "2026-09-21", 2027: "2027-09-20", 2028: "2028-09-18" }, "Respect for the Aged Day", "public", "confirmed", "high", { source_name: "Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html" }),
    dated({ 2026: "2026-09-23", 2027: "2027-09-23", 2028: "2028-09-22" }, "Autumnal Equinox Day", "public", "confirmed", "high", { source_name: "Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html" }),
    dated({ 2026: "2026-10-12", 2027: "2027-10-11", 2028: "2028-10-09" }, "Sports Day", "public", "confirmed", "high", { source_name: "Cabinet Office", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html" })
  ],
  US: [
    fixed(1, 1, "New Year's Day", "public", ["travel", "business"], "high", { source_name: "OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/" }),
    fixed(6, 19, "Juneteenth", "public", ["travel", "business"], "high", { source_name: "OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/" }),
    fixed(7, 4, "Independence Day", "public", ["travel", "business"], "high", { source_name: "OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/" }),
    fixed(11, 11, "Veterans Day", "public", ["travel", "business"], "high", { source_name: "OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/" }),
    fixed(12, 25, "Christmas Day", "public", ["travel", "business"], "high", { source_name: "OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/" }),
    dated({ 2026: "2026-01-19", 2027: "2027-01-18", 2028: "2028-01-17" }, "Martin Luther King, Jr. Day", "public", "confirmed", "high", { source_name: "OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/" }),
    dated({ 2026: "2026-02-16", 2027: "2027-02-15", 2028: "2028-02-21" }, "Washington's Birthday", "public", "confirmed", "high", { source_name: "OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/" }),
    dated({ 2026: "2026-05-25", 2027: "2027-05-31", 2028: "2028-05-29" }, "Memorial Day", "public", "confirmed", "high", { source_name: "OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/" }),
    dated({ 2026: "2026-09-07", 2027: "2027-09-06", 2028: "2028-09-04" }, "Labor Day", "public", "confirmed", "high", { source_name: "OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/" }),
    dated({ 2026: "2026-10-12", 2027: "2027-10-11", 2028: "2028-10-09" }, "Columbus Day", "public", "confirmed", "high", { source_name: "OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/" }),
    dated({ 2026: "2026-11-26", 2027: "2027-11-25", 2028: "2028-11-23" }, "Thanksgiving Day", "public", "confirmed", "high", { source_name: "OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/" })
  ],
  GB: [
    fixed(1, 1, "New Year's Day", "public", ["travel", "business"], "high", { source_name: "GOV.UK", source_url: "https://www.gov.uk/bank-holidays" }),
    fixed(12, 25, "Christmas Day", "public", ["travel", "business"], "high", { source_name: "GOV.UK", source_url: "https://www.gov.uk/bank-holidays" }),
    fixed(12, 26, "Boxing Day", "public", ["travel", "business"], "high", { source_name: "GOV.UK", source_url: "https://www.gov.uk/bank-holidays" }),
    dated({ 2026: "2026-04-03", 2027: "2027-03-26", 2028: "2028-04-14" }, "Good Friday", "public", "confirmed", "high", { source_name: "GOV.UK", source_url: "https://www.gov.uk/bank-holidays" }),
    dated({ 2026: "2026-04-06", 2027: "2027-03-29", 2028: "2028-04-17" }, "Easter Monday", "public", "confirmed", "high", { source_name: "GOV.UK", source_url: "https://www.gov.uk/bank-holidays" }),
    dated({ 2026: "2026-05-04", 2027: "2027-05-03", 2028: "2028-05-01" }, "Early May Bank Holiday", "public", "confirmed", "high", { source_name: "GOV.UK", source_url: "https://www.gov.uk/bank-holidays" }),
    dated({ 2026: "2026-05-25", 2027: "2027-05-31", 2028: "2028-05-29" }, "Spring Bank Holiday", "public", "confirmed", "high", { source_name: "GOV.UK", source_url: "https://www.gov.uk/bank-holidays" }),
    dated({ 2026: "2026-08-31", 2027: "2027-08-30", 2028: "2028-08-28" }, "Summer Bank Holiday", "public", "confirmed", "high", { source_name: "GOV.UK", source_url: "https://www.gov.uk/bank-holidays" })
  ],
  LK: [
    dated({ 2026: "2026-01-03", 2027: "2027-01-22" }, "Duruthu Poya", "public", "confirmed", "high", { source_name: "Sri Lanka Government", source_url: "https://documents.gov.lk/view/calander/2026/2026_E.pdf" }),
    dated({ 2026: "2026-01-15", 2027: "2027-01-15" }, "Thai Pongal", "public", "confirmed", "high", { source_name: "Sri Lanka Government", source_url: "https://documents.gov.lk/view/calander/2026/2026_E.pdf" }),
    dated({ 2026: "2026-02-15", 2027: "2027-03-06" }, "Maha Sivaratri", "public", "confirmed", "high", { source_name: "Sri Lanka Government", source_url: "https://documents.gov.lk/view/calander/2026/2026_E.pdf" }),
    dated({ 2026: "2026-03-21", 2027: "2027-03-10" }, "Id-Ul-Fitr", "public", "confirmed", "high", { source_name: "Sri Lanka Government", source_url: "https://documents.gov.lk/view/calander/2026/2026_E.pdf" }),
    dated({ 2026: "2026-04-14", 2027: "2027-04-14" }, "Sinhala and Tamil New Year", "public", "confirmed", "high", { source_name: "Sri Lanka Government", source_url: "https://documents.gov.lk/view/calander/2026/2026_E.pdf" }),
    dated({ 2026: "2026-05-01", 2027: "2027-05-20" }, "Vesak Poya", "public", "confirmed", "high", { source_name: "Sri Lanka Government", source_url: "https://documents.gov.lk/view/calander/2026/2026_E.pdf" }),
    dated({ 2026: "2026-11-08", 2027: "2027-10-29" }, "Deepavali", "public", "confirmed", "high", { source_name: "Sri Lanka Government", source_url: "https://documents.gov.lk/view/calander/2026/2026_E.pdf" })
  ]
};
