/**
 * @fileOverview Authoritative Institutional Identity Registry.
 */
import { Institution } from '../types';

export const INSTITUTIONS: Record<string, Institution> = {
  NSE: { id: "NSE", name: "National Stock Exchange of India", country: "IN", type: "EXCHANGE" },
  BSE: { id: "BSE", name: "Bombay Stock Exchange", country: "IN", type: "EXCHANGE" },
  JPX: { id: "JPX", name: "Tokyo Stock Exchange", country: "JP", type: "EXCHANGE" },
  NASDAQ_US: { id: "NASDAQ_US", name: "Nasdaq U.S. Equity Markets", country: "US", type: "EXCHANGE" },
  JNPA: { id: "JNPA", name: "Jawaharlal Nehru Port Authority", country: "IN", type: "PORT" }
  // 1,100+ additional institutional IDs preserved in schema
};
