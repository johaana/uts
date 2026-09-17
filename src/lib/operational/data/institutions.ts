/**
 * @fileOverview Structured Institutional Identity Registry extracted from chunks.
 */
import { Institution } from '../types';

export const INSTITUTIONS: Record<string, Institution> = {
  NSE: { id: "NSE", name: "NSE (National Stock Exchange of India)", country: "IN", type: "EXCHANGE" },
  BSE: { id: "BSE", name: "BSE (Bombay Stock Exchange)", country: "IN", type: "EXCHANGE" },
  JPX: { id: "JPX", name: "JPX (Tokyo Stock Exchange)", country: "JP", type: "EXCHANGE", regular_hours: "09:00–15:30 JST", hours_source: "https://www.jpx.co.jp/english/corporate/about-jpx/calendar/" },
  NASDAQ_US: { id: "NASDAQ_US", name: "Nasdaq U.S. Equity & Options Markets", country: "US", type: "EXCHANGE", regular_hours: "09:30–16:00 ET", hours_source: "https://www.nasdaq.com/market-activity/stock-market-holiday-schedule" },
  NYSE_US: { id: "NYSE_US", name: "New York Stock Exchange", country: "US", type: "EXCHANGE", regular_hours: "09:30–16:00 ET", hours_source: "https://beta.nyse.com/trade/hours-calendars" },
  HKEX: { id: "HKEX", name: "Hong Kong Exchanges and Clearing", country: "HK", type: "EXCHANGE", regular_hours: "09:30–16:00 Hong Kong", hours_source: "https://www.hkex.com.hk/" },
  SGX: { id: "SGX", name: "SGX (Singapore Exchange)", country: "SG", type: "EXCHANGE", regular_hours: "09:00–17:00 Singapore", hours_source: "https://www.sgx.com" },
  JNPA: { id: "JNPA", name: "Jawaharlal Nehru Port Authority", country: "IN", type: "PORT_AUTHORITY" },
  PH_CUSTOMS: { id: "PH_CUSTOMS", name: "Philippines Bureau of Customs", country: "PH", type: "CUSTOMS" }
};
