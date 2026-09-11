/**
 * @fileOverview Authoritative Source Chunk 001
 * FILE: utsavs-app.ts
 */

export const CHUNK_001 = `
  // Current normalized research dataset. A production build can persist
  // these same records in a database and expose them through the API. \`type\` also
  // drives which source category it's attributed to (public → government
  // gazette, religious → lunar/religious authority, cultural → cultural body).
  //
  // Three kinds of rule, so we never have to hand-type a date we haven't
  // actually verified for a given year:
  //   fixed(month, day, ...)        same Gregorian date every year — no
  //                                  per-year research needed, ever.
  //   nthWeekday(month, dow, n, ...) e.g. "1st Monday of September" — also
  //                                  computable for any year, no research.
  //   dated({2026:"...", 2027:"..."}, ...) for lunar/Hijri holidays whose
  //                                  date isn't a formula — only years we
  //                                  actually sourced appear; a missing
  //                                  year renders nothing rather than a
  //                                  guess.
  // Every dated() entry also carries a status: "confirmed" (fixed astronomical
  // rule — Diwali, Lunar New Year) or "estimated" (Hijri/moon-sighting —
  // Eid al-Fitr, Eid al-Adha — official only ~1–2 days ahead of the date).
  //
  // IMPORTANT — \`status\` above answers "is this Gregorian date itself
  // algorithmically settled?" It is a DIFFERENT question from "how well is
  // this specific record evidenced?", which is what \`confidence\` answers.
  // Conflating the two was a real bug: it let every deterministic fixed()/
  // nthWeekday() rule read as "High confidence, hand cross-checked against
  // a government gazette" purely because it wasn't live/estimated — even
  // when no such gazette had ever actually been checked.
  //
  // \`confidence\` is a sixth (fixed/nthWeekday) or fifth (dated) OPTIONAL
  // argument. It is never inferred. Leaving it unset is not a shortcut —
  // it is the honest default, and confidenceInfo() below treats an unset
  // \`confidence\` as LISTED, not High. Only set \`confidence:"medium"\` or
  // higher on a record where an actual source is named in a comment right
  // next to it, and never set \`confidence:"high"\` unless that source is
  // a primary official document (a government gazette, an official notice,
  // a specific published PDF) — a consumer site, Wikipedia, or an almanac is
  // MEDIUM at best, no matter how many of them agree with each other.
  // \`evidence\` is a new, optional trailing argument on all three constructors.
  // It is deliberately tiny — only fields the source-UI component actually
  // renders: source_name (what to call it), source_url (a specific document,
  // never a homepage), and last_checked (when we looked). It is an EVENT
  // source only — "this holiday exists on this date" — never proof that a
  // bank, exchange, embassy, or port is actually affected. That's a separate
  // claim, carried on separate OPERATIONAL records below (see OPERATIONAL_IN
  // / OPERATIONAL_AE), never inferred from an event record.
  function fixed(month, day, name, type, confidence, evidence, state){ return {kind:"fixed", month, day, name, type, status:"confirmed", confidence, evidence, state}; }
  function nthWeekday(month, dow, n, name, type, confidence, evidence, state){ return {kind:"nth", month, dow, n, name, type, status:"confirmed", confidence, evidence, state}; }
  function dated(dates, name, type, status, confidence, evidence, state){ return {kind:"dated", dates, name, type, status: status || "confirmed", confidence, evidence, state}; }

  const HOLIDAYS = {
    // ---- Asia Pacific ----
    IN: [
      fixed(1,26,"Republic Day","public","high",{
        source_name:"DoPT Office Memorandum F.No.12/2/2023-JCA (3 Jul 2025), “Holidays to be Observed in Central Government Offices During the Year 2026,” Annexure-I",
        source_url:"https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf",
        link_label:"Official notice (PDF)", last_checked:"2026-09-05"
      }),
      fixed(8,15,"Independence Day","public","high",{
        source_name:"DoPT Office Memorandum F.No.12/2/2023-JCA (3 Jul 2025), Annexure-I — one of India's three National Holidays, compulsory for every establishment, public or private",
        source_url:"https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf",
        link_label:"Official notice (PDF)", last_checked:"2026-09-05"
      }),
      fixed(10,2,"Gandhi Jayanti","public","high",{
        source_name:"DoPT Office Memorandum F.No.12/2/2023-JCA (3 Jul 2025), Annexure-I",
        source_url:"https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf",
        link_label:"Official notice (PDF)", last_checked:"2026-09-05"
      }),
      dated({2026:"2026-09-14"}, "Ganesh Chaturthi","religious","confirmed","high",{source_name:"Comptroller and Auditor General of India, 2026 List of Public Holidays (Annexure-I)",source_url:"https://cag.gov.in/uploads/media/Holiday-List-2026-06982ddd8e2f3c2-57681843.pdf",link_label:"CAG holiday list (PDF)",last_checked:"2026-09-05"},"listed"),
      dated({2026:"2026-10-20"}, "Dussehra","religious","confirmed","high",{source_name:"Comptroller and Auditor General of India, 2026 List of Public Holidays (Annexure-I) — Dussehra (Vijayadashmi), 20 Oct 2026",source_url:"https://cag.gov.in/uploads/media/Holiday-List-2026-06982ddd8e2f3c2-57681843.pdf",link_label:"CAG holiday list (PDF)",last_checked:"2026-09-05"},"listed"),
      // Diwali (Deepavali / Lakshmi Puja): the DoPT OM lists the same 8 Nov
      // 2026 date in its Delhi/New Delhi Annexure-I. NOTE a genuine regional
      // variant: several state/regional offices (e.g. AIIMS Mangalagiri, a
      // south Indian institute) instead gazette Naraka Chaturdasi (7 Nov
      // 2026) as the observed Diwali holiday under DoPT's own para-3.2
      // provision for local variation. We show the Delhi/national date as
      // primary and note the variant — we do NOT silently pick one.
      dated({2026:"2026-11-08",2027:"2027-10-29",2028:"2028-10-17"}, "Diwali","public","confirmed","high",{
        source_name:"DoPT OM F.No.12/2/2023-JCA, Annexure-I (Delhi/New Delhi date). Regional variant: some state offices instead gazette Naraka Chaturdasi, 7 Nov 2026, under the same OM's local-variation provision.",
        source_url:"https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf",
        link_label:"Official notice (PDF)", last_checked:"2026-09-05"
      }),
      dated({2026:"2026-11-09"}, "Govardhan Puja","cultural","confirmed","high",{source_name:"Comptroller and Auditor General of India, 2026 Restricted Holiday List (Annexure-II)",source_url:"https://cag.gov.in/uploads/media/Holiday-List-2026-069521fe6f358d0-89936988.pdf",link_label:"CAG restricted holiday list (PDF)",last_checked:"2026-09-05"},"reference"),
      dated({2026:"2026-11-11"}, "Bhai Dooj","cultural","confirmed","high",{source_name:"Comptroller and Auditor General of India, 2026 Restricted Holiday List (Annexure-II)",source_url:"https://cag.gov.in/uploads/media/Holiday-List-2026-069521fe6f358d0-89936988.pdf",link_label:"CAG restricted holiday list (PDF)",last_checked:"2026-09-05"},"reference"),
    ],
    JP: [
      dated({2026:"2026-01-01"},"New Year's Day","public","confirmed","high",{source_name:"Cabinet Office, Government of Japan — 2026 National Holidays",source_url:"https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html",link_label:"Japan Cabinet Office holiday list",last_checked:"2026-09-06"}),
      dated({2026:"2026-01-12"},"Coming of Age Day","public","confirmed","high",{source_name:"Cabinet Office, Government of Japan — 2026 National Holidays",source_url:"https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html",link_label:"Japan Cabinet Office holiday list",last_checked:"2026-09-06"}),
      dated({2026:"2026-02-11"},"National Foundation Day","public","confirmed","high",{source_name:"Cabinet Office, Government of Japan — 2026 National Holidays",source_url:"https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html",link_label:"Japan Cabinet Office holiday list",last_checked:"2026-09-06"}),
      dated({2026:"2026-02-23"},"Emperor's Birthday","public","confirmed","high",{source_name:"Cabinet Office, Government of Japan — 2026 National Holidays",source_url:"https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html",link_label:"Japan Cabinet Office holiday list",last_checked:"2026-09-06"}),
      dated({2026:"2026-03-20"},"Vernal Equinox Day","public","confirmed","high",{source_name:"Cabinet Office, Government of Japan — 2026 National Holidays",source_url:"https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html",link_label:"Japan Cabinet Office holiday list",last_checked:"2026-09-06"}),
      dated({2026:"2026-04-29"},"Showa Day","public","confirmed","high",{source_name:"Cabinet Office, Government of Japan — 2026 National Holidays",source_url:"https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html",link_label:"Japan Cabinet Office holiday list",last_checked:"2026-09-06"}),
      dated({2026:"2026-05-03"},"Constitution Memorial Day","public","confirmed","high",{source_name:"Cabinet Office, Government of Japan — 2026 National Holidays",source_url:"https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html",link_label:"Japan Cabinet Office holiday list",last_checked:"2026-09-06"}),
      dated({2026:"2026-05-04"},"Greenery Day","public","confirmed","high",{source_name:"Cabinet Office, Government of Japan — 2026 National Holidays",source_url:"https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html",link_label:"Japan Cabinet Office holiday list",last_checked:"2026-09-06"}),
      dated({2026:"2026-05-05"},"Children's Day","public","confirmed","high",{source_name:"Cabinet Office, Government of Japan — 2026 National Holidays",source_url:"https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html",link_label:"Japan Cabinet Office holiday list",last_checked:"2026-09-06"}),
      dated({2026:"2026-05-06"},"Holiday under the National Holidays Act","public","confirmed","high",{source_name:"Cabinet Office, Government of Japan — 2026 National Holidays",source_url:"https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html",link_label:"Japan Cabinet Office holiday list",last_checked:"2026-09-06"}),
      dated({2026:"2026-07-20"},"Marine Day","public","confirmed","high",{source_name:"Cabinet Office, Government of Japan — 2026 National Holidays",source_url:"https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html",link_label:"Japan Cabinet Office holiday list",last_checked:"2026-09-06"}),
      dated({2026:"2026-08-11"},"Mountain Day","public","confirmed","high",{source_name:"Cabinet Office, Government of Japan — 2026 National Holidays",source_url:"https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html",link_label:"Japan Cabinet Office holiday list",last_checked:"2026-09-06"}),
      dated({2026:"2026-09-21"},"Respect for the Aged Day","public","confirmed","high",{source_name:"Cabinet Office, Government of Japan — 2026 National Holidays",source_url:"https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html",link_label:"Japan Cabinet Office holiday list",last_checked:"2026-09-06"}),
      dated({2026:"2026-09-22"},"Holiday under the National Holidays Act","public","confirmed","high",{source_name:"Cabinet Office, Government of Japan — 2026 National Holidays",source_url:"https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html",link_label:"Japan Cabinet Office holiday list",last_checked:"2026-09-06"}),
      dated({2026:"2026-09-23"},"Autumn Equinox Day","public","confirmed","high",{source_name:"Cabinet Office, Government of Japan — 2026 National Holidays",source_url:"https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html",link_label:"Japan Cabinet Office holiday list",last_checked:"2026-09-06"}),
      dated({2026:"2026-10-12"},"Sports Day","public","confirmed","high",{source_name:"Cabinet Office, Government of Japan — 2026 National Holidays",source_url:"https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html",link_label:"Japan Cabinet Office holiday list",last_checked:"2026-09-06"}),
`;
