
export const CHUNK_007 = `:"2026-09-06"}),
    ],
  };

  // ---------- EVIDENCE ARCHITECTURE (reusable across corridors) ----------
  // Three claim types, never collapsed into one:
  //   EVENT       "the holiday/observance exists on this date" (HOLIDAYS above)
  //   OPERATIONAL "this specific institution is open/closed/affected on this
  //               date" (OPERATIONAL_* below) — never inferred from an EVENT
  //   IMPACT      "this may affect a travel/business/logistics plan" — a
  //               downstream read of EVENT + OPERATIONAL, computed by the
  //               checker/Compare UI, never stored as its own record
  // A controlled vocabulary for what kind of source backs a claim. Ranked
  // roughly by evidentiary weight, but the code never auto-upgrades
  // confidence from this alone — a human still decided the confidence value
  // on each record.
  const SOURCE_TYPES = {
    GOVERNMENT: "Government department / ministry notice",
    OFFICIAL_INSTITUTION: "The institution's own official publication",
    OFFICIAL_EXCHANGE: "Stock/commodity exchange's own circular",
    OFFICIAL_BANK: "Central or commercial bank's own notice",
    OFFICIAL_MISSION: "Embassy/consulate's own published notice",
    PORT_AUTHORITY: "Port authority's own notice",
    CUSTOMS_AUTHORITY: "Customs authority's own notice",
    CARRIER_ADVISORY: "A shipping line/freight forwarder's advisory \u2014 not an official port or customs closure",
    STRUCTURED_AGGREGATOR: "A structured secondary source (financial-markets newswire, broker calendar, or a third-party mirror of an official circular) \u2014 not fetched from the institution's own site",
    SECONDARY_REPORT: "General secondary reporting",
    UNKNOWN: "Source type not established",
  };
  // What exactly is closed \u2014 a closure claim must say this, not just
  // "closed". Prevents e.g. "NSE closed" standing in for "NSE equity trading
  // closed" when clearing/settlement may run separately.
  const SCOPE_TYPES = {
    ALL_OFFICES: "All offices",
    BRANCHES: "Branch banking",
    TRADING: "Trading",
    CLEARING: "Clearing",
    SETTLEMENT: "Settlement",
    CONSULAR: "Consular services",
    VISA: "Visa services",
    PORT: "Port operations",
    TERMINAL: "Terminal operations",
    CUSTOMS: "Customs processing",
    DEPOT: "Depot",
    CARRIER: "Carrier schedule",
    CITY_ONLY: "One city only",
    REGION_ONLY: "One region/state only",
    DEPARTMENT: "Department / agency",
  };
  // Lightweight identity layer so operational records reference an
  // institution once instead of repeating its name/type/country inline.
  // Intentionally not an ontology \u2014 just enough to avoid duplication.
  const INSTITUTIONS = {
    KRX: { name:"KRX (Korea Exchange)", country:"KR", type:"EXCHANGE" },
    GPW: { name:"GPW (Warsaw Stock Exchange)", country:"PL", type:"EXCHANGE" },
    CSE_LK: { name:"CSE (Colombo Stock Exchange)", country:"LK", type:"EXCHANGE" },
    PSX: { name:"PSX (Pakistan Stock Exchange)", country:"PK", type:"EXCHANGE" },
    CN_CUSTOMS: { name:"General Administration of Customs of China", country:"CN", type:"CUSTOMS_AUTHORITY" },
    NSE: { name:"NSE (National Stock Exchange of India)", country:"IN", type:"EXCHANGE" },
    BSE: { name:"BSE (Bombay Stock Exchange)", country:"IN", type:"EXCHANGE" },
    MH_BANKS: { name:"Bank branches \u2014 Mumbai / Maharashtra", country:"IN", type:"BANK_BRANCHES" },
    DFM_ADX: { name:"DFM & ADX (Dubai Financial Market / Abu Dhabi Securities Exchange)", country:"AE", type:"EXCHANGE" },
    LSE: { name:"LSE (London Stock Exchange)", country:"GB", type:"EXCHANGE", regular_hours:"08:00\u201316:30 London time", hours_source:"https://www.lseg.com/en/london-stock-exchange" },
    JPX: { name:"JPX (Tokyo Stock Exchange / Osaka Exchange derivatives)", country:"JP", type:"EXCHANGE", regular_hours:"09:00\u201311:30, 12:30\u201315:30 JST", hours_source:"https://www.jpx.co.jp/english/corporate/about-jpx/calendar/" },
    SGX: { name:"SGX (Singapore Exchange)", country:"SG", type:"EXCHANGE", regular_hours:"09:00\u201317:00 Singapore time", hours_source:"https://www.sgx.com" },
    NASDAQ_US: { name:"Nasdaq U.S. Equity & Options Markets", country:"US", type:"EXCHANGE", regular_hours:"09:30–16:00 ET", hours_source:"https://www.nasdaq.com/market-activity/stock-market-holiday-schedule" },
    // Registered while auditing — these 4 already had real, dated per-date
    // records elsewhere in the file, but were never added to INSTITUTIONS,
    // so they were displaying as raw IDs instead of proper names (the same
    // orphaned-reference bug class found and partly fixed in an earlier pass).
    CBOE_US: { name:"Cboe Global Markets — U.S. Equities", country:"US", type:"EXCHANGE" },
    ICE_MARKETS: { name:"Intercontinental Exchange (ICE)", country:"US", type:"EXCHANGE" },
    CME_GROUP: { name:"CME Group — Trading & Clearing", country:"US", type:"EXCHANGE" },
    IIBX: { name:"India International Bullion Exchange", country:"IN", type:"EXCHANGE" },
    NYSE_US: { name:"New York Stock Exchange", country:"US", type:"EXCHANGE", regular_hours:"09:30–16:00 ET", hours_source:"https://beta.nyse.com/trade/hours-calendars" },
    FED_SERVICES: { name:"Federal Reserve Financial Services", country:"US", type:"PAYMENT_SYSTEM" },
    BOJ: { name:"Bank of Japan", country:"JP", type:"CENTRAL_BANK" },
    BANK_OF_CANADA: { name:"Bank of Canada", country:"CA", type:"CENTRAL_BANK" },
    RBA: { name:"Reserve Bank of Australia", country:"AU", type:"CENTRAL_BANK", regular_hours:"09:30–16:30 Sydney time", hours_source:"https://www.rba.gov.au/" },
    ADX: { name:"Abu Dhabi Securities Exchange", country:"AE", type:"EXCHANGE" },
    JNPA: { name:"Jawaharlal Nehru Port Authority", country:"IN", type:"PORT_AUTHORITY" },
    MUMBAI_PORT: { name:"Mumbai Port Authority", country:"IN", type:"PORT_AUTHORITY" },
    US_FEDERAL: { name:"U.S. Federal Government (OPM holiday schedule)", country:"US", type:"GOVERNMENT" },
    TMX: { name:"TMX Group — TSX / TSXV / Montréal Exchange", country:"CA", type:"EXCHANGE", regular_hours:"09:30–16:00 ET", hours_source:"https://www.tsx.com/en/trading/calendars-and-trading-hours/trading-hours" },
    ASX: { name:"ASX — Australian Securities Exchange", country:"AU", type:"EXCHANGE", regular_hours:"10:00–16:00 Sydney time", hours_source:"https://www.asx.com.au/markets/market-resources/trading-hours-calendar/cash-market-trading-hours/trading-calendar" },
    HKEX: { name:"Hong Kong Exchanges and Clearing", country:"HK", type:"EXCHANGE", regular_hours:"09:30–16:00 Hong Kong time", hours_source:"https://www.hkex.com.hk/Services/Trading/Derivatives/Overview/Trading-Calendar-and-Holiday-Schedule" },
    BORSA_ISTANBUL: { name:"Borsa İstanbul", country:"TR", type:"EXCHANGE", hours_source:"https://www.borsaistanbul.com/en/official-holidays" },
    SIX: { name:"SIX Swiss Exchange", country:"CH", type:"EXCHANGE", hours_source:"https://www.six-group.com/en/market-data/news-tools/trading-currency-holiday-calendar.html" },
    ECB: { name:"European Central Bank", country:"EU", type:"CENTRAL_BANK", regular_hours:"08:30–17:30 CET", hours_source:"https://www.ecb.europa.eu/ecb/contacts/working-hours/html/index.en.html", applies_to:["AT","BE","CY","DE","EE","ES","FI","FR","GR","HR","IE","IT","LT","LU","LV","MT","NL","PT","SI","SK"] },
    EURONEXT: { name:"Euronext Cash & Derivatives Markets", country:"EU", type:"EXCHANGE", applies_to:["NL","BE","IE","PT","IT","NO","FR"] },
    EURONEXT_CLEARING: { name:"Euronext Clearing", country:"EU", type:"CLEARING", applies_to:["NL","BE","IE","PT","IT","NO","FR"] },
    XETRA: { name:"Deutsche Börse Xetra", country:"DE", type:"EXCHANGE", regular_hours:"09:00–17:30 CET", hours_source:"https://www.cashmarket.deutsche-boerse.com/cash-en/trading/trading-calendar-and-trading-hours" },
    BURSA_MALAYSIA: { name:"Bursa Malaysia", country:"MY", type:"EXCHANGE", hours_source:"https://www.bursamalaysia.com/about_bursa/about_us/calendar" },
    IDX: { name:"Indonesia Stock Exchange", country:"ID", type:"EXCHANGE", hours_source:"https://www.idx.co.id/en/about-idx/trading-holiday" },
    SET_TH: { name:"Stock Exchange of Thailand", country:"TH", type:"EXCHANGE", hours_source:"https://www.set.or.th/en/about/event-calendar/holiday" },
    HNX: { name:"Hanoi Stock Exchange", country:"VN", type:"EXCHANGE", hours_source:"https://hnx.vn/en-gb/chi-tiet-lich-nghi-gd-60021971.html" },
    PSE_PH: { name:"Philippine Stock Exchange", country:"PH", type:"EXCHANGE", hours_source:"https://www.pse.com.ph/investing-at-pse/" },
    UK_HC_DELHI: { name:"British High Commission New Delhi", country:"IN", type:"EMBASSY" },
    DE_EMB_DELHI: { name:"German Embassy New Delhi", country:"IN", type:"EMBASSY" },
    DE_CON_MUMBAI: { name:"German Consulate General Mumbai", country:"IN", type:"CONSULATE" },
    DE_CON_KOLKATA: { name:"German Consulate General Kolkata", country:"IN", type:"CONSULATE" },
    DE_CON_CHENNAI: { name:"German Consulate General Chennai", country:"IN", type:"CONSULATE" },
    JP_EMB_DELHI: { name:"Embassy of Japan in India", country:"IN", type:"EMBASSY" },
    JP_CON_MUMBAI: { name:"Consulate-General of Japan in Mumbai", country:"IN", type:"CONSULATE" },
    JP_CON_KOLKATA: { name:"Consulate-General of Japan in Kolkata", country:"IN", type:"CONSULATE" },
    SG_CUSTOMS: { name:"Singapore Customs — Contact Centre", country:"SG", type:"CUSTOMS_SERVICE" },
    PH_CUSTOMS: { name:"Philippines Bureau of Customs", country:"PH", type:"CUSTOMS" },
    SSE_CN: { name:"Shanghai Stock Exchange", country:"CN", type:"EXCHANGE", hours_source:"https://www.sse.com.cn/disclosure/dealinstruc/closed/" },
    TWSE: { name:"Taiwan Stock Exchange", country:"TW", type:"EXCHANGE", hours_source:"https://www.twse.com.tw/en/trading/holiday.html" },
    B3_BR: { name:"B3 — Brasil Bolsa Balcão", country:"BR", type:"EXCHANGE", hours_source:"https://b3.com.br/en_us/solutions/platforms/puma-trading-system/for-members-and-traders/trading-calendar/holidays/" },
    TADAWUL: { name:"Saudi Exchange (Tadawul)", country:"SA", type:"EXCHANGE", hours_source:"https://www.saudiexchange.sa/wps/portal/saudiexchange/about-saudi-exchange/exchange-media-centre/saudi-exchange-holiday-calendar/" },
    JSE: { name:"Johannesburg Stock Exchange", country:"ZA", type:"EXCHANGE", hours_source:"https://clientportal.jse.co.za/reports/trading-calendars" },
    NZX: { name:"NZX — New Zealand's Exchange", country:"NZ", type:"EXCHANGE", hours_source:"https://www.nzx.com/announcements/463713" },
    BMV_MX: { name:"Bolsa Mexicana de Valores", country:"MX", type:"EXCHANGE", hours_source:"https://www.bmv.com.mx/wb3/wb/MEX/dias_inhabiles" },
    BORSA_ITALIANA: { name:"Borsa Italiana", country:"IT", type:"EXCHANGE", hours_source:"https://www.borsaitaliana.it/borsaitaliana/calendario-e-orari-di-negoziazione/calendario-borsa-orari-di-negoziazione.en.htm" },
    BME: { name:"BME (Bolsas y Mercados Espa\u00f1oles) \u2014 Madrid Stock Exchange", country:"ES", type:"EXCHANGE", regular_hours:"09:00\u201317:30 CET", hours_source:"https://www.bolsasymercados.es/ing/Media/Calendar" },
    OMX_STO: { name:"Nasdaq Stockholm (OMX)", country:"SE", type:"EXCHANGE", regular_hours:"09:00\u201317:25 CET", hours_source:"https://www.isec.com/wp-content/uploads/2023/08/Handelskalender-Sverige-2026.pdf" },
    QSE: { name:"Qatar Stock Exchange", country:"QA", type:"EXCHANGE" },
    EGX: { name:"EGX (The Egyptian Exchange)", country:"EG", type:"EXCHANGE", regular_hours:"10:00\u201314:15 Cairo time (Sun\u2013Thu week)" },
    ASE_JO: { name:"ASE (Amman Stock Exchange)", country:"JO", type:"EXCHANGE", regular_hours:"10:30am–1:15pm Amman time (Sun–Thu week)" },
    SG_PORT_HEALTH: { name:"Singapore Port Health Office (NEA)", country:"SG", type:"PORT_HEALTH" },
    DHL_CA: { name:"DHL Express — Canada", country:"CA", type:"LOGISTICS_CARRIER" },
    DHL_SG: { name:"DHL Express — Singapore", country:"SG", type:"LOGISTICS_CARRIER" },
    DHL_DE: { name:"DHL Express — Germany", country:"DE", type:"LOGIS`;
