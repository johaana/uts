'use server';

/**
 * @fileOverview Asego API Diagnostic Server Actions
 * Handles secure communication with the Dolphin UAT server.
 * Ensures credentials and encryption keys never reach the client.
 */

const BASE_URL = "https://dolphin.asego.in/api";

interface ActionResponse {
  success: boolean;
  status: number;
  time: number;
  data: any;
  error?: string;
  errorDetails?: {
    code: string;
    msg: string;
  };
  endpoint: string;
  method: string;
}

/**
 * Generic GET helper for Master/Reference data
 */
export async function testAsegoEndpoint(path: string): Promise<ActionResponse> {
  const start = performance.now();
  const endpoint = `${BASE_URL}${path}`;
  
  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'External API/1.0',
      },
      cache: 'no-store'
    });

    const end = performance.now();
    const data = await response.json().catch(() => ({}));

    return {
      success: response.ok,
      status: response.status,
      time: Math.round(end - start),
      data,
      endpoint,
      method: 'GET'
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
      method: 'GET'
    };
  }
}

/**
 * Specific Plan Lookup Action
 */
export async function runPlanTest(formData: {
  partnerId: string;
  age: string;
  duration: string;
  category: string;
}): Promise<ActionResponse> {
  const start = performance.now();
  const { partnerId, age, duration, category } = formData;
  
  const endpoint = `${BASE_URL}/ext/b2b/v1/plan/${partnerId}?duration=${duration}&age=${age}&category=${category}`;

  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'External API/1.0',
      },
      cache: 'no-store'
    });

    const end = performance.now();
    const data = await response.json().catch(() => ([]));

    return {
      success: response.ok,
      status: response.status,
      time: Math.round(end - start),
      data,
      endpoint,
      method: 'GET'
    };
  } catch (error: any) {
    const end = performance.now();
    return {
      success: false,
      status: 0,
      time: Math.round(end - start),
      data: null,
      error: error.message || "Plan lookup failed",
      endpoint,
      method: 'GET'
    };
  }
}

/**
 * Encryption/Decryption Action
 */
export async function runEncryptionTest(type: 'encrypt' | 'decrypt', payload: {
  value: string;
  key: string;
  initVector: string;
}): Promise<ActionResponse> {
  const start = performance.now();
  const endpoint = `${BASE_URL}/ext/b2b/v1/encryption/${type}`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'text/plain',
        'User-Agent': 'External API/1.0',
      },
      body: JSON.stringify(payload),
      cache: 'no-store'
    });

    const end = performance.now();
    const data = await response.text();

    return {
      success: response.ok,
      status: response.status,
      time: Math.round(end - start),
      data,
      endpoint,
      method: 'POST'
    };
  } catch (error: any) {
    const end = performance.now();
    return {
      success: false,
      status: 0,
      time: Math.round(end - start),
      data: null,
      error: error.message || `${type} request failed`,
      endpoint,
      method: 'POST'
    };
  }
}
