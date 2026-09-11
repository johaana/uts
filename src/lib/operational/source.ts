/**
 * @fileOverview Authoritative Source Definition
 * 
 * Defines the entry point for the production operational dataset.
 * No data fabrication allowed.
 */

export interface SourceStatus {
  available: boolean;
  sourceId?: string;
  sourceName?: string;
  version?: string;
}

export interface OperationalSource {
  getRecords(): Promise<unknown[]>;
  getStatus(): Promise<SourceStatus>;
}

/**
 * Standard Production Source implementation.
 * Wired to environment configuration.
 */
class AuthoritativeSource implements OperationalSource {
  async getRecords(): Promise<unknown[]> {
    // This is where the authoritative bundle (utsavs-app.js or JSON)
    // will be ingested once available on the disk or via URL.
    return []; 
  }

  async getStatus(): Promise<SourceStatus> {
    const sourceUrl = process.env.UTSAVS_OPERATIONAL_SOURCE_URL;
    return {
      available: !!sourceUrl,
      sourceId: process.env.UTSAVS_OPERATIONAL_SOURCE_ID,
      version: process.env.UTSAVS_OPERATIONAL_SOURCE_VERSION
    };
  }
}

const source = new AuthoritativeSource();

export function getSource(): OperationalSource {
  return source;
}
