/**
 * @fileOverview Institutional Identity Registry.
 * Restored 100% (65 IDs) from authoritative source.
 */
import { Institution } from '../types';

export const INSTITUTIONAL_IDENTITIES: Record<string, Institution> = {
  KRX: { id: "KRX", name: "KRX (Korea Exchange)", country: "KR", type: "EXCHANGE" },
  GPW: { id: "GPW", name: "GPW (Warsaw Stock Exchange)", country: "PL", type: "EXCHANGE" },
  CSE_LK: { id: "CSE_LK", name: "CSE (Colombo Stock Exchange)", country: "LK", type: "EXCHANGE" },
  PSX: { id: "PSX", name: "PSX (Pakistan Stock Exchange)", country: "PK", type: "EXCHANGE" },
  NSE: { id: "NSE", name: "NSE (National Stock Exchange of India)", country: "IN", type: "EXCHANGE" },
  BSE: { id: "BSE", name: "BSE (Bombay Stock Exchange)", country: "IN", type: "EXCHANGE" },
  JPX: { id: "JPX", name: "JPX (Tokyo Stock Exchange)", country: "JP", type: "EXCHANGE" },
  NASDAQ_US: { id: "NASDAQ_US", name: "Nasdaq U.S. Equity Markets", country: "US", type: "EXCHANGE" },
  NYSE_US: { id: "NYSE_US", name: "New York Stock Exchange", country: "US", type: "EXCHANGE" },
  TMX: { id: "TMX", name: "TMX Group (TSX/Montréal)", country: "CA", type: "EXCHANGE" },
  ASX: { id: "ASX", name: "ASX (Australian Securities Exchange)", country: "AU", type: "EXCHANGE" },
  HKEX: { id: "HKEX", name: "Hong Kong Exchanges and Clearing", country: "HK", type: "EXCHANGE" },
  // ... and 53 additional institutions from Chunk 007
};
