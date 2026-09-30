'use server';

/**
 * @fileOverview Asego API UAT Discovery Server Actions
 * Handles read-only interrogation of the Dolphin UAT server with Header support.
 */

const BASE_URL = "https://dolphin.asego.in/api";

interface ActionResponse {
  success: boolean;
  status: number;
  time: number;
  data: any;
  error?: string;
  endpoint: string;
  method: string;
  headersSent: Record<string, string>;
}

/**
 * Generic Fetch Wrapper for Asego UAT
 */
async function asegoFetch(
  path: string, 
  method: string = 'GET', 
  body: any = null,
  bearerToken?: string
): Promise<ActionResponse> {
  const start = performance.now();
  const endpoint = `${BASE_URL}${path}`;
  
  const headers: Record<string, string> = {
    'Accept': 'application/json',
    'User-Agent': 'External API/1.0',
    'Content-Type': 'application/json',
  };

  if (bearerToken) {
    headers['Authorization'] = `Bearer ${bearerToken}`;
  }

  try {
    const options: RequestInit = {
      method,
      headers,
      cache: 'no-store'
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(endpoint, options);
    const end = performance.now();
    
    let responseData;
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      responseData = await response.json();
    } else {
      responseData = await response.text();
    }

    return {
      success: response.ok,
      status: response.status,
      time: Math.round(end - start),
      data: responseData,
      endpoint,
      method,
      headersSent: {
        ...headers,
        'Authorization': bearerToken ? 'Bearer ********' : 'None'
      }
    };
  } catch (error: any) {
    const end = performance.now();
    return {
      success: false,
      status: 0,
      time: Math.round(end - start),
      data: null,
      error: error.message || "Network request failed",
      endpoint,
      method,
      headersSent: headers
    };
  }
}

export async function testAsegoMaster(type: 'category' | 'currency' | 'reasons', subType?: string) {
  const path = `/ext/b2b/v1/${type}${subType ? `/${subType}` : ''}`;
  return asegoFetch(path);
}

export async function testAsegoPlans(
  type: 'base' | 'standalone' | 'vasRider' | 'masterDetails', 
  partnerId: string, 
  params?: any,
  bearerToken?: string
) {
  let path = '';
  switch(type) {
    case 'base': 
      path = `/ext/b2b/v1/plan/${partnerId}?duration=${params.duration}&age=${params.age}&category=${params.categoryId}`;
      break;
    case 'standalone':
      path = `/ext/b2b/v1/plan/standalone/${partnerId}/`;
      break;
    case 'vasRider':
      path = `/ext/b2b/v1/plan/vasRider/${partnerId}/`;
      break;
    case 'masterDetails':
      path = `/ext/b2b/v1/plan/masterDetails/${partnerId}`;
      break;
  }
  return asegoFetch(path, 'GET', null, bearerToken);
}

export async function runEncryptionStep(type: 'encrypt' | 'decrypt', payload: { value: string, key: string, initVector: string }) {
  const path = `/ext/b2b/v1/encryption/${type}`;
  // Encryption endpoints usually do not require the Bearer token in Swagger
  return asegoFetch(path, 'POST', payload);
}
