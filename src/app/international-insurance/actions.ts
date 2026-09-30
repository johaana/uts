'use server';

/**
 * @fileOverview Asego API Implementation
 * Implements a Normalization Layer to map Asego schema to Utsavs stable model.
 */

const BASE_URL = "https://dolphin.asego.in/api";

export interface NormalizedPlan {
  planId: string;
  name: string;
  insurer: string;
  premium: number | undefined;
  currency: string;
  minAge: number;
  maxAge: number;
  minDays: number;
  maxDays: number;
  detailId?: string;
  benefits?: string[];
}

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
 * Normalization Helper
 * Hardened to handle both flattened snake_case (/plan) and nested camelCase (/masterDetails).
 */
function normalizeAsegoPlan(raw: any): NormalizedPlan {
  // Extract detail list if available (Master/Hydration response)
  const detail = raw.sellingPlanDetailsList?.[0] || {};
  
  // Honesty Principle: No hardcoded fallback values for names or premiums.
  // Use nullish coalescing for cross-schema mapping, but allow undefined if absent.
  const rawPremium = raw.total_premium ?? raw.totalPremium ?? detail.total ?? detail.total_premium;
  
  return {
    planId: raw.plan_id ?? raw.planId ?? raw.id ?? '',
    name: raw.plan_name ?? raw.planName ?? undefined,
    insurer: raw.insurer_name ?? raw.insurerName ?? 'ICICI Lombard',
    premium: (rawPremium !== null && rawPremium !== undefined) ? Number(rawPremium) : undefined,
    currency: raw.currency ?? 'INR',
    minAge: Number(raw.min_age ?? raw.minAge ?? detail.minAge ?? 0),
    maxAge: Number(raw.max_age ?? raw.maxAge ?? detail.maxAge ?? 100),
    minDays: Number(raw.min_days ?? raw.minDays ?? detail.minDays ?? 0),
    maxDays: Number(raw.max_days ?? raw.maxDays ?? detail.maxDays ?? 365),
    benefits: raw.benefits ?? [],
    detailId: detail.detailId ?? raw.detailId ?? undefined
  };
}

/**
 * Secure Server-Side Relay
 */
async function asegoRequest(
  path: string, 
  creds: AsegoCredentials,
  method: string = 'GET',
  body: any = null
): Promise<ActionResponse> {
  const pId = creds.partnerId.trim();
  const sgn = creds.sign.trim();
  const ref = creds.reference.trim();

  if (!pId || !sgn || !ref) {
    throw new Error("Missing UAT Credentials");
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
    
    let data;
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      data = await response.text();
    }

    // Handle Asego "Envelope" Duality (recursive unwrap would be overkill, simple check is safer)
    const extractedData = data?.data ?? data;

    return {
      success: response.ok,
      data: extractedData,
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

export async function getAsegoCategories(creds: AsegoCredentials) {
  return asegoRequest('/ext/b2b/v1/category', creds);
}

/**
 * SEARCH: Returns normalized plans from /plan
 */
export async function getAsegoPlans(creds: AsegoCredentials, params: { age: string, duration: string, categoryId: string }) {
  const pId = creds.partnerId.trim();
  const path = `/ext/b2b/v1/plan/${pId}?duration=${params.duration}&age=${params.age}&category=${params.categoryId}`;
  
  const res = await asegoRequest(path, creds);
  
  if (res.success) {
    let rawPlans = [];
    if (res.data?.sellingPlanDto && Array.isArray(res.data.sellingPlanDto)) {
      rawPlans = res.data.sellingPlanDto;
    } else if (Array.isArray(res.data)) {
      rawPlans = res.data;
    }
    res.data = rawPlans.map(normalizeAsegoPlan);
  }
  
  return res;
}

/**
 * HYDRATION: Returns detailed plan with detailId
 */
export async function getAsegoPlanDetails(creds: AsegoCredentials, planId: string) {
  const pId = creds.partnerId.trim();
  const path = `/ext/b2b/v1/plan/masterDetails/${pId}?planId=${planId}`;
  
  const res = await asegoRequest(path, creds);
  
  if (res.success && res.data) {
    return {
      success: true,
      data: normalizeAsegoPlan(res.data)
    };
  }
  
  return res;
}
