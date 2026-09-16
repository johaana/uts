/**
 * @fileOverview Authoritative Institutional Identity Registry.
 * Restored from utsavs-app.js chunk definitions.
 */
import { Institution } from '../types';

export const INSTITUTIONS: Record<string, Institution> = {
  KRX: { id: "KRX", name: "KRX (Korea Exchange)", country: "KR", type: "EXCHANGE" },
  GPW: { id: "GPW", name: "GPW (Warsaw Stock Exchange)", country: "PL", type: "EXCHANGE" },
  CSE_LK: { id: "CSE_LK", name: "CSE (Colombo Stock Exchange)", country: "LK", type: "EXCHANGE" },
  PSX: { id: "PSX", name: "PSX (Pakistan Stock Exchange)", country: "PK", type: "EXCHANGE" },
  CN_CUSTOMS: { id: "CN_CUSTOMS", name: "General Administration of Customs of China", country: "CN", type: "CUSTOMS_AUTHORITY" },
  NSE: { id: "NSE", name: "NSE (National Stock Exchange of India)", country: "IN", type: "EXCHANGE" },
  BSE: { id: "BSE", name: "BSE (Bombay Stock Exchange)", country: "IN", type: "EXCHANGE" },
  MH_BANKS: { id: "MH_BANKS", name: "Bank branches — Mumbai / Maharashtra", country: "IN", type: "BANK_BRANCHES" },
  DFM_ADX: { id: "DFM_ADX", name: "DFM & ADX", country: "AE", type: "EXCHANGE" },
  LSE: { id: "LSE", name: "LSE (London Stock Exchange)", country: "GB", type: "EXCHANGE", regular_hours: "08:00–16:30 London", hours_source: "https://www.lseg.com/en/london-stock-exchange" },
  JPX: { id: "JPX", name: "JPX (Tokyo Stock Exchange)", country: "JP", type: "EXCHANGE", regular_hours: "09:00–15:30 JST", hours_source: "https://www.jpx.co.jp/english/corporate/about-jpx/calendar/" },
  SGX: { id: "SGX", name: "SGX (Singapore Exchange)", country: "SG", type: "EXCHANGE", regular_hours: "09:00–17:00 Singapore", hours_source: "https://www.sgx.com" },
  NASDAQ_US: { id: "NASDAQ_US", name: "Nasdaq U.S. Equity & Options Markets", country: "US", type: "EXCHANGE", regular_hours: "09:30–16:00 ET", hours_source: "https://www.nasdaq.com/market-activity/stock-market-holiday-schedule" },
  NYSE_US: { id: "NYSE_US", name: "New York Stock Exchange", country: "US", type: "EXCHANGE", regular_hours: "09:30–16:00 ET", hours_source: "https://beta.nyse.com/trade/hours-calendars" },
  FED_SERVICES: { id: "FED_SERVICES", name: "Federal Reserve Financial Services", country: "US", type: "PAYMENT_SYSTEM" },
  BOJ: { id: "BOJ", name: "Bank of Japan", country: "JP", type: "CENTRAL_BANK" },
  BANK_OF_CANADA: { id: "BANK_OF_CANADA", name: "Bank of Canada", country: "CA", type: "CENTRAL_BANK" },
  RBA: { id: "RBA", name: "Reserve Bank of Australia", country: "AU", type: "CENTRAL_BANK", regular_hours: "09:30–16:30 Sydney", hours_source: "https://www.rba.gov.au/" },
  JNPA: { id: "JNPA", name: "Jawaharlal Nehru Port Authority", country: "IN", type: "PORT_AUTHORITY" },
  TMX: { id: "TMX", name: "TMX Group — TSX / TSXV", country: "CA", type: "EXCHANGE", regular_hours: "09:30–16:00 ET", hours_source: "https://www.tsx.com/en/trading/calendars-and-trading-hours/trading-hours" },
  ASX: { id: "ASX", name: "ASX — Australian Securities Exchange", country: "AU", type: "EXCHANGE", regular_hours: "10:00–16:00 Sydney", hours_source: "https://www.asx.com.au/markets/market-resources/trading-hours-calendar/cash-market-trading-hours/trading-calendar" },
  HKEX: { id: "HKEX", name: "Hong Kong Exchanges and Clearing", country: "HK", type: "EXCHANGE", regular_hours: "09:30–16:00 Hong Kong", hours_source: "https://www.hkex.com.hk/Services/Trading/Derivatives/Overview/Trading-Calendar-and-Holiday-Schedule" },
  ECB: { id: "ECB", name: "European Central Bank", country: "EU", type: "CENTRAL_BANK", regular_hours: "08:30–17:30 CET", hours_source: "https://www.ecb.europa.eu/ecb/contacts/working-hours/html/index.en.html" },
  PH_CUSTOMS: { id: "PH_CUSTOMS", name: "Philippines Bureau of Customs", country: "PH", type: "CUSTOMS" },
  DHL_CA: { id: "DHL_CA", name: "DHL Express — Canada", country: "CA", type: "LOGISTICS_CARRIER" },
  DHL_SG: { id: "DHL_SG", name: "DHL Express — Singapore", country: "SG", type: "LOGISTICS_CARRIER" },
  UPS_US: { id: "UPS_US", name: "UPS — United States", country: "US", type: "LOGISTICS_CARRIER" },
  PORT_HOUSTON: { id: "PORT_HOUSTON", name: "Port Houston", country: "US", type: "PORT_AUTHORITY" },
  PORT_ROTTERDAM: { id: "PORT_ROTTERDAM", name: "Port of Rotterdam", country: "NL", type: "PORT_AUTHORITY" },
  PORT_SHANGHAI: { id: "PORT_SHANGHAI", name: "Port of Shanghai — SIPG", country: "CN", type: "PORT_AUTHORITY" }
};
