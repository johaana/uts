/**
 * @fileOverview Utsavs Global Holiday Intelligence — Core Data & Logic (2026-2029)
 */

import { format, addDays, startOfDay, differenceInDays, parse, isValid, getYear, endOfDay } from 'date-fns';

// ---------- TYPES ----------

export type DateStatus = "confirmed" | "estimated" | "live";
export type ConfidenceTier = "high" | "medium" | "provisional" | "estimated" | "listed" | "reference";
export type EventType = "public" | "religious" | "cultural" | "holiday" | "harvest" | "seasonal" | "solar";

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
  institution_id: string;
  date: string;
  date_end?: string;
  segment?: string;
  status: string;
  scope_type: string;
  scope: string;
  detail?: string;
  confidence: ConfidenceTier;
  source_type: string;
  evidence: Evidence;
}

// ---------- DATA REGISTRY ----------

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
      source_name: "DoPT Office Memorandum F.No.12/2/2023-JCA (3 Jul 2025)",
      source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf",
      last_checked: "2026-09-05"
    }),
    fixed(8, 15, "Independence Day", "public", "high", {
      source_name: "DoPT Office Memorandum F.No.12/2/2023-JCA (3 Jul 2025)",
      source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf",
      last_checked: "2026-09-05"
    }),
    fixed(10, 2, "Gandhi Jayanti", "public", "high", {
      source_name: "DoPT Office Memorandum F.No.12/2/2023-JCA (3 Jul 2025)",
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
    dated({ 2026: "2026-09-21" }, "Respect for the Aged Day", "public", "confirmed", "high", { source_name: "Cabinet Office, Government of Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
    dated({ 2026: "2026-11-23" }, "Labor Thanksgiving Day", "public", "confirmed", "high", { source_name: "Cabinet Office, Government of Japan", source_url: "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html", last_checked: "2026-09-06" }),
  ],
  US: [
    dated({ 2026: "2026-01-01" }, "New Year's Day", "public", "confirmed", "high", { source_name: "U.S. OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-05" }),
    dated({ 2026: "2026-09-07" }, "Labor Day", "public", "confirmed", "high", { source_name: "U.S. OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-05" }),
    fixed(10, 31, "Halloween", "cultural"),
  ],
  SG: [
    dated({2026:"2026-11-08"},"Deepavali","public","confirmed","high",{source_name:"Singapore MOM",source_url:"https://www.mom.gov.sg/newsroom/press-releases/2025/0616-public-holidays-for-2026",last_checked:"2026-09-06"}),
  ],
  // ... more countries from the registry
};

export const INSTITUTIONS: Record<string, { name: string; country: string; type: string; regular_hours?: string; hours_source?: string, applies_to?: string[] }> = {
  NSE: { name: "NSE (National Stock Exchange of India)", country: "IN", type: "EXCHANGE" },
  JPX: { name: "JPX (Tokyo Stock Exchange)", country: "JP", type: "EXCHANGE", regular_hours: "09:00–15:30 JST", hours_source: "https://www.jpx.co.jp/english/" },
  NASDAQ_US: { name: "Nasdaq U.S. Equity Markets", country: "US", type: "EXCHANGE", regular_hours: "09:30–16:00 ET", hours_source: "https://www.nasdaq.com" },
  PORT_HOUSTON: { name: "Port Houston", country: "US", type: "PORT_AUTHORITY" },
};

export const OPERATIONAL_RECORDS: OperationalRecord[] = [
  {
    institution_id: "NSE", date: "2026-11-10", status: "CLOSED", scope_type: "TRADING",
    scope: "Trading halted for Diwali-Balipratipada.",
    confidence: "high", source_type: "OFFICIAL_EXCHANGE",
    evidence: { source_name: "NSE Circular 2026", source_url: "https://nsearchives.nseindia.com/content/circulars/CD71962.pdf", last_checked: "2026-09-05" }
  },
  {
    institution_id: "PORT_HOUSTON", date: "2026-09-07", status: "CLOSED", scope_type: "TERMINAL_GATE",
    scope: "Gates closed for Labor Day.",
    confidence: "high", source_type: "OFFICIAL_PORT_AUTHORITY",
    evidence: { source_name: "Port Houston Operation Hours", source_url: "https://porthouston.com/toolbox/terminals/hours-and-schedules/", last_checked: "2026-09-06" }
  }
];

// ---------- LOGIC HELPERS ----------

export function expandCountry(code: string): ExpandedHoliday[] {
  const rules = HOLIDAYS[code] || [];
  const out: ExpandedHoliday[] = [];
  const pad2 = (n: number) => String(n).padStart(2, "0");

  rules.forEach(r => {
    if (r.kind === "fixed" && r.month && r.day) {
      YEARS_SUPPORTED.forEach(y => {
        const date = `${y}-${pad2(r.month!)}-${pad2(r.day!)}`;
        out.push({ date, name: r.name, type: r.type, status: r.status, confidence: r.confidence, evidence: r.evidence, state: r.state, d: new Date(date + "T00:00:00") });
      });
    } else if (r.kind === "nth" && r.month && r.dow !== undefined && r.n) {
      YEARS_SUPPORTED.forEach(y => {
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

const YEARS_SUPPORTED = [2026, 2027, 2028, 2029];
