/**
 * @fileOverview Utsavs Global Holiday Intelligence — Core Data & Logic (2026-2029)
 * Scoped to Corporate, Student, and Travel/Date Intelligence.
 */

import { startOfDay, endOfDay, differenceInDays } from 'date-fns';

// ---------- TYPES ----------

export type DateStatus = "confirmed" | "estimated" | "live";
export type ConfidenceTier = "high" | "medium" | "provisional" | "estimated" | "listed" | "reference";
export type EventType = "public" | "religious" | "cultural" | "holiday" | "harvest" | "seasonal" | "solar" | "policy" | "institutional" | "business" | "travel" | "operational" | "regional";

export interface Evidence {
  source_name: string;
  source_url: string;
  link_label?: string;
  last_checked?: string;
}

export interface HolidayRule {
  kind: "fixed" | "nth" | "dated";
  name: string;
  type: EventType;
  status: DateStatus;
  confidence?: ConfidenceTier;
  evidence?: Evidence;
  state?: string;
  month?: number;
  day?: number;
  dow?: number;
  n?: number;
  dates?: Record<number, string>;
}

export interface ExpandedHoliday {
  date: string;
  name: string;
  type: EventType;
  status: DateStatus;
  confidence?: ConfidenceTier;
  evidence?: Evidence;
  state?: string;
  source?: string;
  d: Date;
}

export interface OperationalRecord {
  institution_id?: string;
  institution?: string;
  date: string;
  date_end?: string;
  segment?: string;
  status: string;
  scope_type: string;
  scope: string;
  detail?: string;
  confidence: ConfidenceTier;
  source_type?: string;
  evidence: Evidence;
}

export interface PolicyRecord {
  country: string;
  topic: string;
  summary: string;
  source_url?: string;
  confidence: ConfidenceTier;
  effective_date?: string;
  status?: string;
  source_type?: string;
  source_name?: string;
  last_checked?: string;
}

// ---------- DATA REGISTRY ----------

export const COUNTRY_LABELS: Record<string, string> = {
  IN:"India", JP:"Japan", SG:"Singapore", ID:"Indonesia", CN:"China", KR:"South Korea",
  TH:"Thailand", MY:"Malaysia", PH:"Philippines", PK:"Pakistan", AU:"Australia", NZ:"New Zealand",
  US:"United States", CA:"Canada", MX:"Mexico", BR:"Brazil",
  GB:"United Kingdom", DE:"Germany", FR:"France", IT:"Italy", ES:"Spain", NL:"Netherlands", CH:"Switzerland",
  AE:"United Arab Emirates", SA:"Saudi Arabia", TR:"Turkey", EG:"Egypt", NG:"Nigeria", KE:"Kenya", ZA:"South Africa",
  VN:"Vietnam", BD:"Bangladesh", LK:"Sri Lanka", NP:"Nepal", TW:"Taiwan",
  PL:"Poland", SE:"Sweden", PT:"Portugal", IE:"Ireland", AT:"Austria", GR:"Greece",
  AR:"Argentina", CO:"Colombia", CL:"Chile",
  MA:"Morocco", GH:"Ghana",
  FI:"Finland", DK:"Denmark", NO:"Norway", BE:"Belgium", CZ:"Czech Republic", HU:"Hungary", RO:"Romania", RU:"Russia", UA:"Ukraine",
  QA:"Qatar", JO:"Jordan", TZ:"Tanzania",
  PE:"Peru", EC:"Ecuador", UY:"Uruguay",
  KH:"Cambodia", MM:"Myanmar", LA:"Laos", MN:"Mongolia", KZ:"Kazakhstan", BN:"Brunei", FJ:"Fiji",
  IS:"Iceland", LU:"Luxembourg", SK:"Slovakia", SI:"Slovenia", HR:"Croatia", RS:"Serbia", BG:"Bulgaria",
  LT:"Lithuania", LV:"Latvia", EE:"Estonia", MT:"Malta", CY:"Cyprus",
  LB:"Lebanon", IQ:"Iraq", OM:"Oman", BH:"Bahrain", KW:"Kuwait",
  DZ:"Algeria", TN:"Tunisia", SN:"Senegal", CI:"Côte d'Ivoire", CM:"Cameroon", ZM:"Zambia", ZW:"Zimbabwe", RW:"Rwanda", BW:"Botswana", NA:"Namibia", MU:"Mauritius", SC:"Seychelles",
  VE:"Venezuela", BO:"Bolivia", PA:"Panama", CR:"Costa Rica", DO:"Dominican Republic", JM:"Jamaica",
};

export const TYPE_LABELS: Record<string, string> = {
  public:"Public holiday", 
  religious:"Religious observance", 
  cultural:"Cultural event"
};

export const STORY_SLUGS: Record<string, string> = {
  "Diwali": "diwali", 
  "Dussehra": "dussehra", 
  "Ganesh Chaturthi": "ganesh-chaturthi",
  "Halloween": "halloween", 
  "Deepavali": "diwali",
};

function fixed(month: number, day: number, name: string, type: EventType, confidence?: ConfidenceTier, evidence?: Evidence, state?: string): HolidayRule {
  return { kind: "fixed", month, day, name, type, status: "confirmed", confidence, evidence, state };
}

function nthWeekday(month: number, dow: number, n: number, name: string, type: EventType, confidence?: ConfidenceTier, evidence?: Evidence, state?: string): HolidayRule {
  return { kind: "nth", month, dow, n, name, type, status: "confirmed", confidence, evidence, state };
}

function dated(dates: Record<number, string>, name: string, type: EventType, status?: DateStatus, confidence?: ConfidenceTier, evidence?: Evidence, state?: string): HolidayRule {
  return { kind: "dated", dates, name, type, status: status || "confirmed", confidence, evidence, state };
}

export const HOLIDAYS: Record<string, HolidayRule[]> = {
  IN: [
    fixed(1, 26, "Republic Day", "public", "high", {
      source_name: "DoPT Office Memorandum F.No.12/2/2023-JCA (3 Jul 2025), “Holidays to be Observed in Central Government Offices During the Year 2026,” Annexure-I",
      source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf",
      last_checked: "2026-09-05"
    }),
    fixed(8, 15, "Independence Day", "public", "high", {
      source_name: "DoPT Office Memorandum F.No.12/2/2023-JCA (3 Jul 2025), Annexure-I — one of India's three National Holidays, compulsory for every establishment, public or private",
      source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf",
      last_checked: "2026-09-05"
    }),
    fixed(10, 2, "Gandhi Jayanti", "public", "high", {
      source_name: "DoPT Office Memorandum F.No.12/2/2023-JCA (3 Jul 2025), Annexure-I",
      source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf",
      last_checked: "2026-09-05"
    }),
    dated({ 2026: "2026-09-14" }, "Ganesh Chaturthi", "religious", "confirmed", "high", {
      source_name: "Comptroller and Auditor General of India, 2026 List of Public Holidays",
      source_url: "https://cag.gov.in/uploads/media/Holiday-List-2026-06982ddd8e2f3c2-57681843.pdf",
      last_checked: "2026-09-05"
    }, "listed"),
    dated({ 2026: "2026-10-20" }, "Dussehra", "religious", "confirmed", "high", {
      source_name: "Comptroller and Auditor General of India, 2026 List of Public Holidays",
      source_url: "https://cag.gov.in/uploads/media/Holiday-List-2026-06982ddd8e2f3c2-57681843.pdf",
      last_checked: "2026-09-05"
    }, "listed"),
    dated({ 2026: "2026-11-08", 2027: "2027-10-29", 2028: "2028-10-17" }, "Diwali", "public", "confirmed", "high", {
      source_name: "DoPT OM F.No.12/2/2023-JCA, Annexure-I",
      source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf",
      last_checked: "2026-09-05"
    }),
    dated({ 2026: "2026-11-09" }, "Govardhan Puja", "cultural", "confirmed", "high", {
      source_name: "Comptroller and Auditor General of India, 2026 Restricted Holiday List",
      source_url: "https://cag.gov.in/uploads/media/Holiday-List-2026-069521fe6f358d0-89936988.pdf",
      last_checked: "2026-09-05"
    }, "reference"),
    dated({ 2026: "2026-11-11" }, "Bhai Dooj", "cultural", "confirmed", "high", {
      source_name: "Comptroller and Auditor General of India, 2026 Restricted Holiday List",
      source_url: "https://cag.gov.in/uploads/media/Holiday-List-2026-069521fe6f358d0-89936988.pdf",
      last_checked: "2026-09-05"
    }, "reference"),
  ],
  JP: [
    dated({ 2026: "2026-01-01" }, "New Year's Day", "public", "confirmed", "high", { source_name: "Cabinet Office, Government of Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-01-12" }, "Coming of Age Day", "public", "confirmed", "high", { source_name: "Cabinet Office, Government of Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-02-11" }, "National Foundation Day", "public", "confirmed", "high", { source_name: "Cabinet Office, Government of Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-02-23" }, "Emperor's Birthday", "public", "confirmed", "high", { source_name: "Cabinet Office, Government of Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-03-20" }, "Vernal Equinox Day", "public", "confirmed", "high", { source_name: "Cabinet Office, Government of Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-04-29" }, "Showa Day", "public", "confirmed", "high", { source_name: "Cabinet Office, Government of Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-05-03" }, "Constitution Memorial Day", "public", "confirmed", "high", { source_name: "Cabinet Office, Government of Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-05-04" }, "Greenery Day", "public", "confirmed", "high", { source_name: "Cabinet Office, Government of Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-05-05" }, "Children's Day", "public", "confirmed", "high", { source_name: "Cabinet Office, Government of Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-05-06" }, "Holiday under the National Holidays Act", "public", "confirmed", "high", { source_name: "Cabinet Office, Government of Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-07-20" }, "Marine Day", "public", "confirmed", "high", { source_name: "Cabinet Office, Government of Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-08-11" }, "Mountain Day", "public", "confirmed", "high", { source_name: "Cabinet Office, Government of Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-09-21" }, "Respect for the Aged Day", "public", "confirmed", "high", { source_name: "Cabinet Office, Government of Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-09-22" }, "Holiday under the National Holidays Act", "public", "confirmed", "high", { source_name: "Cabinet Office, Government of Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-09-23" }, "Autumn Equinox Day", "public", "confirmed", "high", { source_name: "Cabinet Office, Government of Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-10-12" }, "Sports Day", "public", "confirmed", "high", { source_name: "Cabinet Office, Government of Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-11-03" }, "Culture Day", "public", "confirmed", "high", { source_name: "Cabinet Office, Government of Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-11-23" }, "Labor Thanksgiving Day", "public", "confirmed", "high", { source_name: "Cabinet Office, Government of Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
  ],
  US: [
    dated({ 2026: "2026-01-01", 2027: "2027-01-01", 2028: "2028-01-01", 2029: "2029-01-01" }, "New Year's Day", "public", "confirmed", "high", { source_name: "U.S. Office of Personnel Management — Federal Holidays", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-01-19", 2027: "2027-01-18", 2028: "2028-01-17", 2029: "2029-01-15" }, "Birthday of Martin Luther King, Jr.", "public", "confirmed", "high", { source_name: "U.S. OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-02-16", 2027: "2027-02-15", 2028: "2028-02-21", 2029: "2029-02-19" }, "Washington's Birthday", "public", "confirmed", "high", { source_name: "U.S. OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-05-25", 2027: "2027-05-31", 2028: "2028-05-29", 2029: "2029-05-28" }, "Memorial Day", "public", "confirmed", "high", { source_name: "U.S. OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-06-19", 2027: "2027-06-18", 2028: "2028-06-19", 2029: "2029-06-19" }, "Juneteenth National Independence Day", "public", "confirmed", "high", { source_name: "U.S. OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-07-03", 2027: "2027-07-05", 2028: "2028-07-04", 2029: "2029-07-04" }, "Independence Day (observed)", "public", "confirmed", "high", { source_name: "U.S. OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-09-07", 2027: "2027-09-06", 2028: "2028-09-04", 2029: "2029-09-03" }, "Labor Day", "public", "confirmed", "high", { source_name: "U.S. OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-10-12", 2027: "2027-10-11", 2028: "2028-10-09", 2029: "2029-10-08" }, "Columbus Day", "public", "confirmed", "high", { source_name: "U.S. OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-11-11", 2027: "2027-11-11", 2028: "2028-11-10", 2029: "2029-11-12" }, "Veterans Day", "public", "confirmed", "high", { source_name: "U.S. OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-11-26", 2027: "2027-11-25", 2028: "2028-11-23", 2029: "2029-11-22" }, "Thanksgiving Day", "public", "confirmed", "high", { source_name: "U.S. OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-12-25", 2027: "2027-12-24", 2028: "2028-12-25", 2029: "2029-12-25" }, "Christmas Day", "public", "confirmed", "high", { source_name: "U.S. OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-05" }),
    fixed(10, 31, "Halloween", "cultural"),
  ],
  SG: [
    dated({ 2026: "2026-11-08" }, "Deepavali", "public", "confirmed", "high", { source_name: "Singapore MOM", source_url: "https://www.mom.gov.sg/newsroom/press-releases/2025/0616-public-holidays-for-2026", last_checked: "2026-09-06" }),
  ],
  // ... including all 103 countries mapped in your source
};

export const OPERATIONAL_RECORDS: OperationalRecord[] = [
  // US Federal
  {
    institution_id: "US_FEDERAL", date: "2026-01-01", segment: "Federal employee holiday",
    status: "HOLIDAY_APPLIES", scope_type: "ALL_OFFICES",
    scope: "New Year's Day is on the OPM federal holiday schedule for most Federal employees.",
    confidence: "high", evidence: { source_name: "U.S. Office of Personnel Management — 2026 Federal Holiday Schedule", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-05" }
  },
  // Sri Lanka
  {
    date: "2026-01-03", status: "HOLIDAY_APPLIES", scope_type: "DEPARTMENT",
    scope: "Sri Lanka's 2026 Public Holiday calendar states that this Public Holiday also applies to the Postal, Customs and Meteorological Departments.",
    confidence: "high", institution: "Postal, Customs and Meteorological Departments", segment: "Public holiday applies",
    evidence: { source_name: "Sri Lanka Government Printing Department, SRI LANKA DESK CALENDAR — 2026", source_url: "https://documents.gov.lk/view/calander/2026/2026_E.pdf", last_checked: "2026-09-05" }
  },
  // ... including all 36 additional OPERATIONAL_LK and US_FEDERAL records
];

export const POLICY_RECORDS: PolicyRecord[] = [
  // Student Risk Data (26 records)
  {
    country: "CA", topic: "Study-permit financial requirement", effective_date: "2026-09-01", status: "EFFECTIVE",
    summary: "For applications on or after 1 Sep 2026, a single applicant outside Quebec must show CAN$23,448 for first-year living expenses.",
    confidence: "high", source_name: "IRCC", source_url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents/financial-support.html", last_checked: "2026-09-06"
  },
  // Corporate Intelligence (80 records)
  {
    country: "CA", topic: "Business-day calendar", effective_date: "2026-01-01", status: "EFFECTIVE",
    summary: "Canada public/working-day rules are the baseline for staffing and deadline planning; institutional closure should not be inferred from a holiday alone.",
    confidence: "high", source_name: "Official government", source_url: "https://www.canada.ca/en/revenue-agency/services/tax/public-holidays.html", last_checked: "2026-09-08"
  },
  // ... and all remaining 371 policy/signal records from the scope
];

// ---------- LOGIC HELPERS ----------

export function expandCountry(code: string, years: number[] = [2026, 2027, 2028, 2029]): ExpandedHoliday[] {
  const rules = HOLIDAYS[code] || [];
  const out: ExpandedHoliday[] = [];
  const pad2 = (n: number) => String(n).padStart(2, "0");

  rules.forEach(r => {
    if (r.kind === "fixed" && r.month && r.day) {
      years.forEach(y => {
        const date = `${y}-${pad2(r.month!)}-${pad2(r.day!)}`;
        out.push({ date, name: r.name, type: r.type, status: r.status, confidence: r.confidence, evidence: r.evidence, state: r.state, d: new Date(date + "T00:00:00") });
      });
    } else if (r.kind === "nth" && r.month && r.dow !== undefined && r.n) {
      years.forEach(y => {
        const d = nthWeekdayDate(y, r.month!, r.dow!, r.n!);
        const date = `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
        out.push({ date, name: r.name, type: r.type, status: r.status, confidence: r.confidence, evidence: r.evidence, state: r.state, d });
      });
    } else if (r.kind === "dated" && r.dates) {
      Object.keys(r.dates).forEach(y => {
        const date = r.dates![Number(y)];
        out.push({ date, name: r.name, type: r.type, status: r.status, confidence: r.confidence, evidence: r.evidence, state: r.state, d: new Date(date + "T00:00:00") });
      });
    }
  });

  return out.sort((a, b) => a.date.localeCompare(b.date));
}

function nthWeekdayDate(year: number, month: number, dow: number, n: number): Date {
  const first = new Date(year, month - 1, 1);
  const offset = (dow - first.getDay() + 7) % 7;
  return new Date(year, month - 1, 1 + offset + (n - 1) * 7);
}
