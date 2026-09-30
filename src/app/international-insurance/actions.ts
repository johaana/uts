'use server';

/**
 * @fileOverview Asego API Customer-Facing Server Actions
 * Hardened to match the verified Sandbox forensic strategy.
 */

const BASE_URL = "https://dolphin.asego.in/api";

interface AsegoCredentials {
  partnerId: string;
  sign: string;
  reference: string;
}

interface ActionResponse {
  success: boolean;
  data: any;
  error?: string;
  endpoint: string;
  headersSent: Record<string, any>;
}

/**
 * Generic Fetch Wrapper for Customer Flow
 * Exactly matches the successful 'custom_both' strategy from the sandbox.
 */
async function asegoRequest(
  path: string, 
  creds: AsegoCredentials
): Promise<ActionResponse> {
  if (!creds.partnerId || !creds.sign || !creds.reference) {
    throw new Error("Missing UAT Credentials");
  }

  const endpoint = `${BASE_URL}${path}`;
  
  // Exact headers from successful sandbox forensic test
  const headers: Record<string, string> = {
    'Accept': 'application/json',
    'User-Agent': 'External API/1.0',
    'Content-Type': 'application/json',
    'Sign': creds.sign,
    'Reference': creds.reference,
  };

  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers,
      cache: 'no-store'
    });

    let data;
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      data = await response.text();
    }

    return {
      success: response.ok,
      data,
      endpoint,
      headersSent: {
        ...headers,
        'Sign': '********',
        'Reference': '********'
      }
    };
  } catch (error: any) {
    return {
      success: false,
      data: null,
      error: error.message || "Network request failed",
      endpoint,
      headersSent: headers
    };
  }
}

/**
 * Fetches available regions/categories for the partner
 */
export async function getAsegoCategories(creds: AsegoCredentials) {
  return asegoRequest('/ext/b2b/v1/category', creds);
}

/**
 * Fetches specific plans based on trip parameters
 */
export async function getAsegoPlans(creds: AsegoCredentials, params: { age: string, duration: string, categoryId: string }) {
  // Use the verified base plan endpoint format
  const path = `/ext/b2b/v1/plan/${creds.partnerId}?duration=${params.duration}&age=${params.age}&category=${params.categoryId}`;
  return asegoRequest(path, creds);
}
