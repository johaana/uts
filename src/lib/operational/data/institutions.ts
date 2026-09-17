/**
 * @fileOverview Structured Institutional Identity Registry extracted from Authoritative Chunks.
 */
import { Institution } from '../types';

export const INSTITUTIONS: Record<string, Institution> = {
  NSE: { id: "NSE", name: "NSE (National Stock Exchange of India)", country: "IN", type: "EXCHANGE" },
  BSE: { id: "BSE", name: "BSE (Bombay Stock Exchange)", country: "IN", type: "EXCHANGE" },
  JPX: { id: "JPX", name: "JPX (Tokyo Stock Exchange / Osaka Exchange)", country: "JP", type: "EXCHANGE" },
  NASDAQ_US: { id: "NASDAQ_US", name: "Nasdaq U.S. Equity & Options Markets", country: "US", type: "EXCHANGE" },
  HKEX: { id: "HKEX", name: "Hong Kong Exchanges and Clearing", country: "HK", type: "EXCHANGE" },
  SGX: { id: "SGX", name: "SGX (Singapore Exchange)", country: "SG", type: "EXCHANGE" },
  UMELB: { id: "UMELB", name: "University of Melbourne", country: "AU", type: "UNIVERSITY" },
  UNSW: { id: "UNSW", name: "UNSW Sydney", country: "AU", type: "UNIVERSITY" },
  UTORONTO: { id: "UTORONTO", name: "University of Toronto", country: "CA", type: "UNIVERSITY" },
  TUM: { id: "TUM", name: "TU Munich", country: "DE", type: "UNIVERSITY" },
  PH_CUSTOMS: { id: "PH_CUSTOMS", name: "Philippines Bureau of Customs", country: "PH", type: "CUSTOMS" }
};
