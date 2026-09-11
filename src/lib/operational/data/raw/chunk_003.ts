/**
 * @fileOverview Authoritative Source Chunk 003
 * FILE: utsavs-app.ts
 */

export const CHUNK_003 = `
    DE: [
      fixed(10,3,"German Unity Day","public"), fixed(12,25,"Christmas Day","public"),
    ],
    FR: [
      fixed(7,14,"Bastille Day","public"), fixed(12,25,"Noël","public"),
      dated({2026:"2026-09-19"}, "Journées du Patrimoine","cultural"),
    ],
    IT: [
      fixed(6,2,"Festa della Repubblica","public"), fixed(11,1,"All Saints' Day","public"), fixed(12,8,"Immaculate Conception","public"),
    ],
    ES: [
      fixed(10,12,"Fiesta Nacional de España","public"), fixed(11,1,"All Saints' Day","public"),
      fixed(12,6,"Constitution Day","public"), fixed(12,8,"Immaculate Conception","public"),
    ],
    NL: [
      fixed(12,25,"Christmas Day","public"), fixed(12,26,"Tweede Kerstdag","public"),
    ],
    CH: [
      fixed(8,1,"Swiss National Day","public"), fixed(12,25,"Christmas Day","public"),
    ],
    // ---- Middle East & Africa ----
    AE: [
      // National Day (Eid Al Etihad) is a two-day federal holiday, not one —
      // the original single Dec-2 entry undercounted it. Source: the UAE's
      // own legislation portal, hosting the actual Cabinet Resolution text.
      fixed(12,2,"National Day (Eid Al Etihad)","public","high",{
        source_name:"UAE Cabinet Resolution No. 27 of 2024 Concerning the Public Holidays in the State, published on the UAE Government's official legislation portal",
        source_url:"https://uaelegislation.gov.ae/en/legislations/2595",
        link_label:"Official legislation", last_checked:"2026-09-05"
      }),
      fixed(12,3,"National Day (Eid Al Etihad)","public","high",{
        source_name:"UAE Cabinet Resolution No. 27 of 2024 Concerning the Public Holidays in the State — second day of the National Day holiday",
        source_url:"https://uaelegislation.gov.ae/en/legislations/2595",
        link_label:"Official legislation", last_checked:"2026-09-05"
      }),
      fixed(1,1,"New Year's Day","public","high",{
        source_name:"UAE Ministry of Human Resources & Emiratisation (MoHRE) official announcement, confirming 1 Jan 2026 as a paid public holiday for the private sector",
        source_url:"https://www.mohre.gov.ae/en/media-center/news/12/12/2025/thursday-1-january-2026-announced-as-a-paid-public-holiday-for-the-private-sector",
        link_label:"MoHRE announcement", last_checked:"2026-09-05"
      }),
      dated({2026:"2026-03-20",2027:"2027-03-09"}, "Eid al-Fitr","religious","estimated"),
      dated({2026:"2026-05-27",2027:"2027-05-16"}, "Eid al-Adha","religious","estimated"),
    ],
    SA: [
      fixed(9,23,"Saudi National Day","public"),
      dated({2026:"2026-03-20",2027:"2027-03-09"}, "Eid al-Fitr","religious","estimated"),
      dated({2026:"2026-05-27",2027:"2027-05-16"}, "Eid al-Adha","religious","estimated"),
    ],
    TR: [
      fixed(10,29,"Republic Day","public"),
      dated({2026:"2026-03-20",2027:"2027-03-09"}, "Ramazan Bayramı (Eid al-Fitr)","religious","estimated"),
      dated({2026:"2026-05-27",2027:"2027-05-16"}, "Kurban Bayramı (Eid al-Adha)","religious","estimated"),
    ],
    EG: [
      fixed(10,6,"Armed Forces Day","public"),
      dated({2026:"2026-03-20",2027:"2027-03-09"}, "Eid al-Fitr","religious","estimated"),
      dated({2026:"2026-05-27",2027:"2027-05-16"}, "Eid al-Adha","religious","estimated"),
    ],
    NG: [
      fixed(10,1,"Independence Day","public"),
      dated({2026:"2026-03-20",2027:"2027-03-09"}, "Eid al-Fitr","religious","estimated"),
      dated({2026:"2026-05-27",2027:"2027-05-16"}, "Eid al-Adha","religious","estimated"),
    ],
    KE: [
      dated({2026:"2026-01-01"},"New Year's Day","public","confirmed","high",{source_name:"Kenya Law — Public Holidays Act",source_url:"https://new.kenyalaw.org/akn/ke/act/1912/21",link_label:"Kenya Public Holidays Act",last_checked:"2026-09-06"}),
      dated({2026:"2026-03-20"},"Eid-ul-Fitr","religious","confirmed","high",{source_name:"Kenya Gazette Notice No. 3955 — Public Holiday for Eid-ul-Fitr",source_url:"https://new.kenyalaw.org/akn/ke/officialGazette/2026-03-18/50/eng@2026-03-18/source.pdf",link_label:"Kenya Gazette Eid-ul-Fitr notice",last_checked:"2026-09-06"}),
      dated({2026:"2026-04-03"},"Good Friday","public","confirmed","high",{source_name:"Kenya Law — Public Holidays Act",source_url:"https://new.kenyalaw.org/akn/ke/act/1912/21",link_label:"Kenya Public Holidays Act",last_checked:"2026-09-06"}),
      dated({2026:"2026-04-06"},"Easter Monday","public","confirmed","high",{source_name:"Kenya Law — Public Holidays Act",source_url:"https://new.kenyalaw.org/akn/ke/act/1912/21",link_label:"Kenya Public Holidays Act",last_checked:"2026-09-06"}),
      dated({2026:"2026-05-01"},"Labour Day","public","confirmed","high",{source_name:"Kenya Law — Public Holidays Act",source_url:"https://new.kenyalaw.org/akn/ke/act/1912/21",link_label:"Kenya Public Holidays Act",last_checked:"2026-09-06"}),
      dated({2026:"2026-06-01"},"Madaraka Day","public","confirmed","high",{source_name:"Kenya Law — Public Holidays Act",source_url:"https://new.kenyalaw.org/akn/ke/act/1912/21",link_label:"Kenya Public Holidays Act",last_checked:"2026-09-06"}),
      dated({2026:"2026-10-10"},"Mazingira Day","public","confirmed","high",{source_name:"Kenya Law — Public Holidays Act",source_url:"https://new.kenyalaw.org/akn/ke/act/1912/21",link_label:"Kenya Public Holidays Act",last_checked:"2026-09-06"}),
      dated({2026:"2026-10-20"},"Mashujaa Day","public","confirmed","high",{source_name:"Kenya Law — Public Holidays Act",source_url:"https://new.kenyalaw.org/akn/ke/act/1912/21",link_label:"Kenya Public Holidays Act",last_checked:"2026-09-06"}),
      dated({2026:"2026-12-12"},"Jamhuri Day","public","confirmed","high",{source_name:"Kenya Law — Public Holidays Act",source_url:"https://new.kenyalaw.org/akn/ke/act/1912/21",link_label:"Kenya Public Holidays Act",last_checked:"2026-09-06"}),
      dated({2026:"2026-12-25"},"Christmas Day","public","confirmed","high",{source_name:"Kenya Law — Public Holidays Act",source_url:"https://new.kenyalaw.org/akn/ke/act/1912/21",link_label:"Kenya Public Holidays Act",last_checked:"2026-09-06"}),
      dated({2026:"2026-12-26"},"Boxing Day","public","confirmed","high",{source_name:"Kenya Law — Public Holidays Act",source_url:"https://new.kenyalaw.org/akn/ke/act/1912/21",link_label:"Kenya Public Holidays Act",last_checked:"2026-09-06"}),
    ],
    ZA: [
      dated({2026:"2026-01-01"},"New Year’s Day","public","confirmed","high",{source_name:"South African Government — Public holidays 2026",source_url:"https://www.gov.za/about-sa/public-holidays",link_label:"South African Government holiday calendar",last_checked:"2026-09-06"}),
      dated({2026:"2026-03-21"},"Human Rights Day","public","confirmed","high",{source_name:"South African Government — Public holidays 2026",source_url:"https://www.gov.za/about-sa/public-holidays",link_label:"South African Government holiday calendar",last_checked:"2026-09-06"}),
      dated({2026:"2026-04-03"},"Good Friday","public","confirmed","high",{source_name:"South African Government — Public holidays 2026",source_url:"https://www.gov.za/about-sa/public-holidays",link_label:"South African Government holiday calendar",last_checked:"2026-09-06"}),
      dated({2026:"2026-04-06"},"Family Day","public","confirmed","high",{source_name:"South African Government — Public holidays 2026",source_url:"https://www.gov.za/about-sa/public-holidays",link_label:"South African Government holiday calendar",last_checked:"2026-09-06"}),
      dated({2026:"2026-04-27"},"Freedom Day","public","confirmed","high",{source_name:"South African Government — Public holidays 2026",source_url:"https://www.gov.za/about-sa/public-holidays",link_label:"South African Government holiday calendar",last_checked:"2026-09-06"}),
      dated({2026:"2026-05-01"},"Workers’ Day","public","confirmed","high",{source_name:"South African Government — Public holidays 2026",source_url:"https://www.gov.za/about-sa/public-holidays",link_label:"South African Government holiday calendar",last_checked:"2026-09-06"}),
      dated({2026:"2026-06-16"},"Youth Day","public","confirmed","high",{source_name:"South African Government — Public holidays 2026",source_url:"https://www.gov.za/about-sa/public-holidays",link_label:"South African Government holiday calendar",last_checked:"2026-09-06"}),
      dated({2026:"2026-08-09"},"National Women’s Day","public","confirmed","high",{source_name:"South African Government — Public holidays 2026",source_url:"https://www.gov.za/about-sa/public-holidays",link_label:"South African Government holiday calendar",last_checked:"2026-09-06"}),
      dated({2026:"2026-08-10"},"National Women’s Day (observed)","public","confirmed","high",{source_name:"South African Government — Public holidays 2026; Sunday holiday is followed by Monday public holiday under the Public Holidays Act",source_url:"https://www.gov.za/about-sa/public-holidays",link_label:"South African Government holiday calendar",last_checked:"2026-09-06"}),
      dated({2026:"2026-09-24"},"Heritage Day","public","confirmed","high",{source_name:"South African Government — Public holidays 2026",source_url:"https://www.gov.za/about-sa/public-holidays",link_label:"South African Government holiday calendar",last_checked:"2026-09-06"}),
      dated({2026:"2026-12-16"},"Day of Reconciliation","public","confirmed","high",{source_name:"South African Government — Public holidays 2026",source_url:"https://www.gov.za/about-sa/public-holidays",link_label:"South African Government holiday calendar",last_checked:"2026-09-06"}),
      dated({2026:"2026-12-25"},"Christmas Day","public","confirmed","high",{source_name:"South African Government — Public holidays 2026",source_url:"https://www.gov.za/about-sa/public-holidays",link_label:"South African Government holiday calendar",last_checked:"2026-09-06"}),
      dated({2026:"2026-12-26"},"Day of Goodwill","public","confirmed","high",{source_name:"South African Government — Public holidays 2026",source_url:"https://www.gov.za/about-sa/public-holidays",link_label:"South African Government holiday calendar",last_checked:"2026-09-06"}),
    ],
    // ---- Asia Pacific (batch 2) ----
    VN: [
      fixed(9,2,"National Day","public"), fixed(4,30,"Reunification Day","public"), fixed(5,1,"Labour Day","public"),
      dated({2026:"2026-02-17",2027:"2027-02-06",2028:"2028-01-26"}, "Tết (Lunar New Year)","public"),
    ],
    LK: [
      dated({2026:"2026-01-03"},"Duruthu Full Moon Poya Day","public","confirmed","high",{source_name:"Sri Lanka Government Printing Department, SRI LANKA DESK CALENDAR — 2026",source_url:"https://documents.gov.lk/view/calander/2026/2026_E.pdf",link_label:"Sri Lanka government calendar (PDF)",last_checked:"2026-09-05"}),
      dated({2026:"2026-01-15"},"Tamil Thai Pongal Day","public","confirmed","high",{source_name:"Sri Lanka Government Printing Department, SRI LANKA DESK CALENDAR — 2026",source_url:"https://documents.gov.lk/view/calander/2026/2026_E.pdf",link_label:"Sri Lanka government calendar (PDF)",last_checked:"2026-09-05"}),
      dated({2026:"2026-02-01"},"Nawam Full Moon Poya Day","public","confirmed","high",{source_name:"Sri Lanka Government Printing Department, SRI LANKA DESK CALENDAR — 2026",source_url:"https://documents.gov.lk/view/calander/2026/2026_E.pdf",link_label:"Sri Lanka government calendar (PDF)",last_checked:"2026-09-06"}),
      dated({2026:"2026-02-04"},"Independence Day","public","confirmed","high",{source_name:"Sri Lanka Government Printing Department, SRI LANKA DESK CALENDAR — 2026",source_url:"https://documents.gov.lk/view/calander/2026/2026_E.pdf",link_label:"Sri Lanka government calendar (PDF)",last_checked:"2026-09-05"}),
      dated({2026:"2026-02-15"},"Maha Sivaratri Day","public","confirmed","high",{source_name:"Sri Lanka Government Printing Department, SRI LANKA DESK CALENDAR — 2026",source_url:"https://documents.gov.lk/view/calander/2026/2026_E.pdf",link_label:"Sri Lanka government calendar (PDF)",last_checked:"2026-09-05"}),
`;
