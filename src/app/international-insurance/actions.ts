'use server';

/**
 * @fileOverview Asego API Implementation - Phase 2 (Hardened Forensic Edition)
 * Implements Encryption utility, Policy Validation, Creation, and Cancellation.
 * VERIFICATION MODE: Returns raw response data for forensic auditing.
 */

const BASE_URL = "https://dolphin.asego.in/api";

export interface NormalizedPlan {
  planId: string;
  name: string | undefined;
  insurer: string;
  premium: number | undefined;
  currency: string;
  minAge: number;
  maxAge: number;
  minDays: number;
  maxDays: number;
  detailId?: string;
  benefits?: string[];
  ineligible?: boolean;
}

export interface AsegoCredentials {
  partnerId: string;
  sign: string;
  reference: string;
  secretKey?: string;
  vectorBytes?: string;
}

interface ActionResponse {
  success: boolean;
  status: number;
  data: any;
  error?: string;
  endpoint: string;
  method: string;
  headersSent: Record<string, any>;
  raw?: any;
}

/**
 * Normalization Helper
 */
function normalizeAsegoPlan(raw: any, targetAge?: number): NormalizedPlan {
  const targetAgeNum = targetAge !== undefined ? Number(targetAge) : NaN;
  
  const details = raw.sellingPlanDetailsList;
  const hasFullBandData = Array.isArray(details);

  const matchedDetail = (hasFullBandData && Number.isFinite(targetAgeNum))
    ? details.find((d: any) => 
        targetAgeNum >= Number(d.minAge ?? 0) && 
        targetAgeNum <= Number(d.maxAge ?? 100)
      )
    : undefined;

  const ineligible = hasFullBandData && !matchedDetail;
  const source = matchedDetail || {};
  
  const premium = source.total ?? source.total_premium ?? raw.total_premium ?? raw.totalPremium;

  return {
    planId: raw.plan_id ?? raw.planId ?? raw.id ?? '',
    name: raw.plan_name ?? raw.planName,
    insurer: raw.insurer_name ?? raw.insurerName ?? 'ICICI Lombard',
    premium: premium !== null && premium !== undefined ? Number(premium) : undefined,
    currency: raw.currency ?? 'INR',
    minAge: Number(source.minAge ?? raw.min_age ?? raw.minAge ?? 0),
    maxAge: Number(source.maxAge ?? raw.max_age ?? raw.maxAge ?? 100),
    minDays: Number(source.minDays ?? raw.min_days ?? raw.min_days ?? 0),
    maxDays: Number(source.maxDays ?? raw.max_days ?? raw.max_days ?? 365),
    benefits: raw.benefits ?? [],
    detailId: source.sellingPlanDetailId ?? source.detailId ?? raw.detailId,
    ineligible
  };
}

/**
 * Secure Server-Side Relay
 */
async function asegoRequest(
  path: string, 
  providedCreds?: AsegoCredentials,
  method: string = 'GET',
  body: any = null
): Promise<ActionResponse> {
  const isDebug = process.env.UTSAVS_INTERNAL_DEBUG === 'true';
  
  // Authorization Logic:
  // If debug is true, prioritize providedCreds (from the UI form).
  // Otherwise, fallback to env vars.
  const pId = (isDebug && providedCreds?.partnerId ? providedCreds.partnerId : process.env.UTSAVS_PARTNER_ID || '').trim();
  const sgn = (isDebug && providedCreds?.sign ? providedCreds.sign : process.env.UTSAVS_SIGN || '').trim();
  const ref = (isDebug && providedCreds?.reference ? providedCreds.reference : process.env.UTSAVS_REFERENCE || '').trim();

  if (!pId || !sgn || !ref) {
    return {
      success: false,
      status: 0,
      data: null,
      error: "Authentication credentials not configured.",
      endpoint: path,
      method,
      headersSent: {}
    };
  }

  const endpoint = `${BASE_URL}${path}`;
  const headers: Record<string, string> = {
    'Accept': 'application/json',
    'User-Agent': 'External API/1.0',
    'Content-Type': 'application/json',
    'Sign': sgn,
    'Reference': ref,
  };

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
    const contentType = response.headers.get('content-type');
    let rawData;
    
    if (contentType && contentType.includes('application/json')) {
      rawData = await response.json();
    } else {
      rawData = await response.text();
    }

    return {
      success: response.ok,
      status: response.status,
      data: rawData?.data ?? rawData,
      endpoint,
      method,
      raw: rawData,
      headersSent: {
        ...headers,
        'Sign': '********',
        'Reference': '********'
      }
    };
  } catch (error: any) {
    return {
      success: false,
      status: 0,
      data: null,
      error: error.message || "Network request failed",
      endpoint,
      method,
      headersSent: headers
    };
  }
}

/**
 * Encryption Wrapper
 */
export async function asegoEncrypt(value: string, creds?: AsegoCredentials) {
  const isDebug = process.env.UTSAVS_INTERNAL_DEBUG === 'true';
  const key = (isDebug && creds?.secretKey ? creds.secretKey : process.env.UTSAVS_SECRET_KEY || '').trim();
  const initVector = (isDebug && creds?.vectorBytes ? creds.vectorBytes : process.env.UTSAVS_INIT_VECTOR || '').trim();
  
  const payload = { value, key, initVector };
  return asegoRequest('/ext/b2b/v1/encryption/encrypt', creds, 'POST', payload);
}

/**
 * Decryption Wrapper
 */
export async function asegoDecrypt(value: string, creds?: AsegoCredentials) {
  const isDebug = process.env.UTSAVS_INTERNAL_DEBUG === 'true';
  const key = (isDebug && creds?.secretKey ? creds.secretKey : process.env.UTSAVS_SECRET_KEY || '').trim();
  const initVector = (isDebug && creds?.vectorBytes ? creds.vectorBytes : process.env.UTSAVS_INIT_VECTOR || '').trim();

  const payload = { value, key, initVector };
  return asegoRequest('/ext/b2b/v1/encryption/decrypt', creds, 'POST', payload);
}

export async function getAsegoCategories(creds?: AsegoCredentials) {
  return asegoRequest('/ext/b2b/v1/category', creds);
}

export async function getAsegoPlans(params: { age: string, duration: string, categoryId: string }, creds?: AsegoCredentials) {
  const isDebug = process.env.UTSAVS_INTERNAL_DEBUG === 'true';
  const pId = (isDebug && creds?.partnerId ? creds.partnerId : process.env.UTSAVS_PARTNER_ID || '').trim();
  const path = `/ext/b2b/v1/plan/${pId}?duration=${params.duration}&age=${params.age}&category=${params.categoryId}`;
  
  const res = await asegoRequest(path, creds);
  
  if (res.success) {
    let rawPlans = [];
    if (res.data?.sellingPlanDto && Array.isArray(res.data.sellingPlanDto)) {
      rawPlans = res.data.sellingPlanDto;
    } else if (Array.isArray(res.data)) {
      rawPlans = res.data;
    }
    res.data = rawPlans.map((p: any) => normalizeAsegoPlan(p, Number(params.age)));
  }
  
  return res;
}

export async function getAsegoPlanDetails(planId: string, targetAge: string, creds?: AsegoCredentials) {
  const res = await asegoRequest(`/ext/b2b/v1/plan/masterDetails/${planId}?planId=${planId}`, creds);
  
  if (res.success && res.data) {
    return {
      success: true,
      status: res.status,
      data: normalizeAsegoPlan(res.data, Number(targetAge)),
      raw: res.raw,
      endpoint: res.endpoint,
      method: res.method,
      headersSent: res.headersSent
    };
  }
  
  return res;
}

/**
 * Interrogation Helpers for UAT Discovery
 */
export async function interrogateAsegoEndpoint(type: 'standalone' | 'vasRider' | 'masterDetails', creds?: AsegoCredentials) {
  const isDebug = process.env.UTSAVS_INTERNAL_DEBUG === 'true';
  const pId = (isDebug && creds?.partnerId ? creds.partnerId : process.env.UTSAVS_PARTNER_ID || '').trim();
  let path = '';
  switch(type) {
    case 'standalone': path = `/ext/b2b/v1/plan/standalone/${pId}/`; break;
    case 'vasRider': path = `/ext/b2b/v1/plan/vasRider/${pId}/`; break;
    case 'masterDetails': path = `/ext/b2b/v1/plan/masterDetails/${pId}`; break;
  }
  return asegoRequest(path, creds);
}

/**
 * Policy Validation (Dry-run)
 */
export async function validateAsegoPolicy(policyData: any, creds?: AsegoCredentials) {
  const isDebug = process.env.UTSAVS_INTERNAL_DEBUG === 'true';
  const pId = (isDebug && creds?.partnerId ? creds.partnerId : process.env.UTSAVS_PARTNER_ID || '').trim();

  const rawString = JSON.stringify(policyData);
  const encRes = await asegoEncrypt(rawString, creds);

  if (!encRes.success || !encRes.data) {
    return { success: false, status: encRes.status, error: "Encryption failed.", raw: encRes.raw, endpoint: encRes.endpoint, method: encRes.method, headersSent: encRes.headersSent };
  }

  return asegoRequest(`/ext/b2b/v1/createPolicy/validate/${pId}`, creds, 'POST', { policyData: encRes.data });
}

/**
 * Policy Creation
 */
export async function createAsegoPolicy(policyData: any, creds?: AsegoCredentials) {
  const isDebug = process.env.UTSAVS_INTERNAL_DEBUG === 'true';
  const pId = (isDebug && creds?.partnerId ? creds.partnerId : process.env.UTSAVS_PARTNER_ID || '').trim();

  const rawString = JSON.stringify(policyData);
  const encRes = await asegoEncrypt(rawString, creds);

  if (!encRes.success || !encRes.data) {
    return { success: false, status: encRes.status, error: "Encryption failed.", raw: encRes.raw, endpoint: encRes.endpoint, method: encRes.method, headersSent: encRes.headersSent };
  }

  return asegoRequest(`/ext/b2b/v1/createPolicy/${pId}`, creds, 'POST', { policyData: encRes.data });
}

/**
 * Policy Cancellation
 */
export async function cancelAsegoPolicy(policyNumber: string, remarks: string = "UAT Test Cancellation", creds?: AsegoCredentials) {
  const isDebug = process.env.UTSAVS_INTERNAL_DEBUG === 'true';
  const pId = (isDebug && creds?.partnerId ? creds.partnerId : process.env.UTSAVS_PARTNER_ID || '').trim();

  return asegoRequest(`/ext/b2b/v1/policy/cancel/${pId}`, creds, 'POST', { policyNumber, remarks });
}
