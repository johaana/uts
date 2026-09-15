/**
 * @fileOverview Utsavs Global Holiday Intelligence — Core Data & Logic (2026-2029)
 * 100% Fidelity to V24 Source.
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
  cultural:"Cultural event",
  policy: "Policy guidance",
  institutional: "Institutional timing",
  business: "Business context",
  travel: "Travel advisory"
};

function fixed(month: number, day: number, name: string, type: EventType, confidence?: ConfidenceTier, evidence?: Evidence, state?: string): HolidayRule {
  return { kind: "fixed", month, day, name, type, status: "confirmed", confidence, evidence, state };
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
      source_name: "DoPT Office Memorandum F.No.12/2/2023-JCA (3 Jul 2025), Annexure-I",
      source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf",
      last_checked: "2026-09-05"
    }),
    fixed(10, 2, "Gandhi Jayanti", "public", "high", {
      source_name: "DoPT Office Memorandum F.No.12/2/2023-JCA (3 Jul 2025), Annexure-I",
      source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf",
      last_checked: "2026-09-05"
    }),
    dated({ 2026: "2026-09-14" }, "Ganesh Chaturthi", "religious", "confirmed", "high", {
      source_name: "Comptroller and Auditor General of India, 2026 List of Public Holidays (Annexure-I)",
      source_url: "https://cag.gov.in/uploads/media/Holiday-List-2026-06982ddd8e2f3c2-57681843.pdf",
      last_checked: "2026-09-05"
    }),
    dated({ 2026: "2026-10-20" }, "Dussehra", "religious", "confirmed", "high", {
      source_name: "Comptroller and Auditor General of India, 2026 List of Public Holidays (Annexure-I)",
      source_url: "https://cag.gov.in/uploads/media/Holiday-List-2026-06982ddd8e2f3c2-57681843.pdf",
      last_checked: "2026-09-05"
    }),
    dated({ 2026: "2026-11-08", 2027: "2027-10-29", 2028: "2028-10-17" }, "Diwali", "public", "confirmed", "high", {
      source_name: "DoPT OM F.No.12/2/2023-JCA, Annexure-I",
      source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf",
      last_checked: "2026-09-05"
    }),
  ],
  JP: [
    dated({ 2026: "2026-09-21" }, "Respect for the Aged Day", "public", "confirmed", "high", { source_name: "Cabinet Office, Government of Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
  ],
  US: [
    dated({ 2026: "2026-09-07", 2027: "2027-09-06" }, "Labor Day", "public", "confirmed", "high", { source_name: "U.S. OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-05" }),
  ]
};

// ---------- REGIONAL INTELLIGENCE (Signals) ----------

export const REGIONAL_INTELLIGENCE = [
  {
    country: "IN",
    date: "2026-09-25",
    name: "Maharashtra: Anant Chaturdashi",
    type: "regional",
    summary: "Anant Chaturdashi is listed in Maharashtra's 2026 holiday calendar; local operational treatment can vary by institution.",
    confidence: "high",
    source_name: "Regional Source",
    source_url: "https://www.maharashtra.gov.in"
  },
  {
    country: "IN",
    date: "2026-03-20",
    name: "Regional: Eid al-Fitr (Alternate)",
    type: "regional",
    summary: "Alternate regional observation date based on local moon sighting protocols.",
    confidence: "medium",
    source_name: "Regional News"
  }
];

// ---------- STANDING GUIDANCE (Policy) ----------

export const STUDENT_RISK_DATA = [
  {
    country: "CA", topic: "Study-permit financial requirement", status: "EFFECTIVE",
    summary: "For applications on or after 1 Sep 2026, a single applicant outside Quebec must show CAN$23,448.",
    confidence: "high", source_url: "https://www.canada.ca"
  }
];

export const STUDENT_INTELLIGENCE_EXTRA = [
  { country:"CA", topic:"Study permit", summary:"Eligible off-campus work up to 24 hours/week." },
  { country:"US", topic:"F-1 Work Authorization", summary:"Strict compliance required for OPT/CPT." }
];

export const CORPORATE_INTELLIGENCE = [
  { country: "CA", topic: "Business-day calendar", summary: "Canada public/working-day rules apply." },
  { country: "IN", topic: "Bank Closures", summary: "State-specific holiday lists issued by RBI." }
];

export const OPERATIONAL_RECORDS = [];
export const CORPORATE_TRAVEL_INTELLIGENCE_DATA = [];
export const BANKING_INTELLIGENCE_DATA = [];
export const MARKET_EXPANSION_DATA = [];
export const CUSTOMS_INTELLIGENCE_DATA = [];
export const STUDENT_VISA_DEPTH_BY_COUNTRY = [];
export const STUDY_INSTITUTIONAL_TIMING = [];

// ---------- LOGIC ----------

export function isWeekendFor(code: string, dateObj: Date){
  const days = [0,6];
  return days.includes(dateObj.getDay());
}

export function expandCountry(code: string, years: number[] = [2026, 2027]): ExpandedHoliday[] {
  const rules = HOLIDAYS[code] || [];
  const out: ExpandedHoliday[] = [];
  const pad2 = (n: number) => String(n).padStart(2, "0");

  rules.forEach(r => {
    if (r.kind === "fixed" && r.month && r.day) {
      years.forEach(y => {
        const date = `${y}-${pad2(r.month!)}-${pad2(r.day!)}`;
        out.push({ date, name: r.name, type: r.type, status: r.status, confidence: r.confidence, evidence: r.evidence, state: r.state, d: new Date(date + "T00:00:00") });
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
