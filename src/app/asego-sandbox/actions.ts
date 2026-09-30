'use server';

/**
 * @fileOverview Asego API UAT Discovery Server Actions
 * Handles multi-strategy header injection for forensic testing.
 */

const BASE_URL = "https://dolphin.asego.in/api";

export type AuthStrategy = 
  | 'none' 
  | 'bearer_sign' 
  | 'bearer_ref' 
  | 'custom_sign' 
  | 'custom_ref' 
  | 'custom_both';

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
 * Generic Fetch Wrapper with Strategy Support
 */
async function asegoFetch(
  path: string, 
  method: string = 'GET', 
  body: any = null,
  strategy: AuthStrategy = 'none',
  creds?: { sign: string, reference: string }
): Promise<ActionResponse> {
  const start = performance.now();
  const endpoint = `${BASE_URL}${path}`;
  
  const headers: Record<string, string> = {
    'Accept': 'application/json',
    'User-Agent': 'External API/1.0',
    'Content-Type': 'application/json',
  };

  // Forensic Header Injection based on Strategy
  if (creds) {
    switch (strategy) {
      case 'bearer_sign':
        headers['Authorization'] = `Bearer ${creds.sign}`;
        break;
      case 'bearer_ref':
        headers['Authorization'] = `Bearer ${creds.reference}`;
        break;
      case 'custom_sign':
        headers['Sign'] = creds.sign;
        break;
      case 'custom_ref':
        headers['Reference'] = creds.reference;
        break;
      case 'custom_both':
        headers['Sign'] = creds.sign;
        headers['Reference'] = creds.reference;
        break;
    }
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
        'Authorization': headers['Authorization'] ? 'Bearer ********' : 'None',
        'Sign': headers['Sign'] ? '********' : undefined,
        'Reference': headers['Reference'] ? '********' : undefined,
      } as any
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

export async function testAsegoMaster(
  type: 'category' | 'currency' | 'reasons', 
  strategy: AuthStrategy = 'none',
  creds?: any
) {
  const path = `/ext/b2b/v1/${type}`;
  return asegoFetch(path, 'GET', null, strategy, creds);
}

export async function testAsegoPlans(
  type: 'base' | 'standalone' | 'vasRider' | 'masterDetails', 
  partnerId: string, 
  params: any,
  strategy: AuthStrategy = 'none',
  creds?: any
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
  return asegoFetch(path, 'GET', null, strategy, creds);
}

export async function runEncryptionStep(type: 'encrypt' | 'decrypt', payload: { value: string, key: string, initVector: string }) {
  const path = `/ext/b2b/v1/encryption/${type}`;
  return asegoFetch(path, 'POST', payload);
}
