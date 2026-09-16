/**
 * @fileOverview Authoritative Student & Study Abroad Policy Registry.
 * Restored from utsavs-app.js chunk definitions.
 */
import { StandingRule } from '../types';

export const STUDENT_POLICIES: StandingRule[] = [
  {
    country: "CA",
    topic: "Study-permit financial requirement",
    effective_date: "2026-09-01",
    status: "EFFECTIVE",
    summary: "For applications on or after 1 Sep 2026, a single applicant outside Quebec must show CAN$23,448 for first-year living expenses.",
    confidence: "high",
    evidence: {
      source_name: "IRCC",
      source_url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents/financial-support.html",
      last_checked: "2026-09-06"
    },
    purpose: "study"
  },
  {
    country: "CA",
    topic: "Study permit work rights",
    effective_date: "2026-01-01",
    status: "EFFECTIVE",
    summary: "Eligible off-campus work up to 24 hours/week during regular academic sessions; unlimited hours during scheduled breaks.",
    confidence: "high",
    evidence: {
      source_name: "IRCC",
      source_url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/work-off-campus.html",
      last_checked: "2026-09-08"
    },
    purpose: "study"
  },
  {
    country: "AU",
    topic: "Student visa work hours",
    effective_date: "2026-01-01",
    status: "EFFECTIVE",
    summary: "Student visa holders can generally work up to 48 hours per fortnight while their course is in session.",
    confidence: "high",
    evidence: {
      source_name: "Department of Home Affairs",
      source_url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500",
      last_checked: "2026-09-08"
    },
    purpose: "study"
  }
];
