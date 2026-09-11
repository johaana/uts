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
    // This is where the authoritative bundle (e.g., records.json)
    // will be ingested once available in the workspace.
    return []; 
  }

  async getStatus(): Promise<SourceStatus> {
    // Source availability depends on presence of authoritative bundle
    // Currently hardcoded to false as the source is missing from workspace.
    return {
      available: false,
      sourceId: 'utsavs-authoritative-primary'
    };
  }
}

const source = new AuthoritativeSource();

export function getSource(): OperationalSource {
  return source;
}
