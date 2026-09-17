/**
 * @fileOverview Structured Institutional Identity Registry extracted from Authoritative Chunks.
 */
import { Institution } from '../types';

export const INSTITUTIONS: Record<string, Institution> = {
  NSE: { id: "NSE", name: "NSE (National Stock Exchange of India)", country: "IN", type: "EXCHANGE" },
  BSE: { id: "BSE", name: "BSE (Bombay Stock Exchange)", country: "IN", type: "EXCHANGE" },
  JPX: { id: "JPX", name: "JPX (Tokyo Stock Exchange / Osaka Exchange)", country: "JP", type: "EXCHANGE", regular_hours: "09:00–11:30, 12:30–15:30 JST", hours_source: "https://www.jpx.co.jp/english/corporate/about-jpx/calendar/" },
  NASDAQ_US: { id: "NASDAQ_US", name: "Nasdaq U.S. Equity & Options Markets", country: "US", type: "EXCHANGE", regular_hours: "09:30–16:00 ET", hours_source: "https://www.nasdaq.com/market-activity/stock-market-holiday-schedule" },
  NYSE_US: { id: "NYSE_US", name: "New York Stock Exchange", country: "US", type: "EXCHANGE", regular_hours: "09:30–16:00 ET", hours_source: "https://beta.nyse.com/trade/hours-calendars" },
  HKEX: { id: "HKEX", name: "Hong Kong Exchanges and Clearing", country: "HK", type: "EXCHANGE", regular_hours: "09:30–16:00 Hong Kong", hours_source: "https://www.hkex.com.hk/Services/Trading/Derivatives/Overview/Trading-Calendar-and-Holiday-Schedule" },
  SGX: { id: "SGX", name: "SGX (Singapore Exchange)", country: "SG", type: "EXCHANGE", regular_hours: "09:00–17:00 Singapore", hours_source: "https://www.sgx.com" },
  JNPA: { id: "JNPA", name: "Jawaharlal Nehru Port Authority", country: "IN", type: "PORT_AUTHORITY" },
  LSE: { id: "LSE", name: "London Stock Exchange", country: "GB", type: "EXCHANGE", regular_hours: "08:00–16:30 London time", hours_source: "https://www.lseg.com/en/london-stock-exchange" },
  KRX: { id: "KRX", name: "KRX (Korea Exchange)", country: "KR", type: "EXCHANGE" },
  GPW: { id: "GPW", name: "GPW (Warsaw Stock Exchange)", country: "PL", type: "EXCHANGE" },
  CSE_LK: { id: "CSE_LK", name: "CSE (Colombo Stock Exchange)", country: "LK", type: "EXCHANGE" },
  PSX: { id: "PSX", name: "PSX (Pakistan Stock Exchange)", country: "PK", type: "EXCHANGE" },
  DFM_ADX: { id: "DFM_ADX", name: "DFM & ADX (Dubai Financial Market / Abu Dhabi Securities Exchange)", country: "AE", type: "EXCHANGE" },
  CBOE_US: { id: "CBOE_US", name: "Cboe Global Markets — U.S. Equities", country: "US", type: "EXCHANGE" },
  ICE_MARKETS: { id: "ICE_MARKETS", name: "Intercontinental Exchange (ICE)", country: "US", type: "EXCHANGE" },
  CME_GROUP: { id: "CME_GROUP", name: "CME Group — Trading & Clearing", country: "US", type: "EXCHANGE" },
  TMX: { id: "TMX", name: "TMX Group — TSX / TSXV / Montréal Exchange", country: "CA", type: "EXCHANGE", regular_hours: "09:30–16:00 ET", hours_source: "https://www.tsx.com/en/trading/calendars-and-trading-hours/trading-hours" },
  ASX: { id: "ASX", name: "ASX — Australian Securities Exchange", country: "AU", type: "EXCHANGE", regular_hours: "10:00–16:00 Sydney time", hours_source: "https://www.asx.com.au/markets/market-resources/trading-hours-calendar/cash-market-trading-hours/trading-calendar" },
  SIX: { id: "SIX", name: "SIX Swiss Exchange", country: "CH", type: "EXCHANGE", hours_source: "https://www.six-group.com/en/market-data/news-tools/trading-currency-holiday-calendar.html" },
  ECB: { id: "ECB", name: "European Central Bank", country: "EU", type: "CENTRAL_BANK", regular_hours: "08:30–17:30 CET", hours_source: "https://www.ecb.europa.eu/ecb/contacts/working-hours/html/index.en.html" },
  IDX: { id: "IDX", name: "Indonesia Stock Exchange", country: "ID", type: "EXCHANGE", hours_source: "https://www.idx.co.id/en/about-idx/trading-holiday" },
  SET_TH: { id: "SET_TH", name: "Stock Exchange of Thailand", country: "TH", type: "EXCHANGE", hours_source: "https://www.set.or.th/en/about/event-calendar/holiday" },
  PSE_PH: { id: "PSE_PH", name: "Philippine Stock Exchange", country: "PH", type: "EXCHANGE", hours_source: "https://www.pse.com.ph/investing-at-pse/" },
  PH_CUSTOMS: { id: "PH_CUSTOMS", name: "Philippines Bureau of Customs", country: "PH", type: "CUSTOMS" }
};
