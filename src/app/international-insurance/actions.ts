
'use server';

/**
 * @fileOverview Asego API Customer-Facing Server Actions
 * Implements a Normalization Layer to map Asego snake_case to Utsavs camelCase.
 */

const BASE_URL = "https://dolphin.asego.in/api";

export interface NormalizedPlan {
  planId: string;
  name: string;
  insurer: string;
  premium: number;
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
 * Maps Asego's raw snake_case response to a stable Utsavs model.
 */
function normalizeAsegoPlan(raw: any): NormalizedPlan {
  return {
    planId: raw.plan_id || raw.planId || '',
    name: raw.plan_name || raw.planName || 'Insurance Plan',
    insurer: raw.insurer_name || raw.insurerName || 'ICICI Lombard',
    premium: raw.total_premium || raw.totalPremium || (raw.sellingPlanDetailsList?.[0]?.total) || 0,
    currency: raw.currency || 'INR',
    minAge: raw.min_age ?? raw.minAge ?? (raw.sellingPlanDetailsList?.[0]?.minAge) ?? 0,
    maxAge: raw.max_age ?? raw.maxAge ?? (raw.sellingPlanDetailsList?.[0]?.maxAge) ?? 100,
    minDays: raw.min_days ?? raw.minDays ?? (raw.sellingPlanDetailsList?.[0]?.minDays) ?? 0,
    maxDays: raw.max_days ?? raw.maxDays ?? (raw.sellingPlanDetailsList?.[0]?.maxDays) ?? 365,
    benefits: raw.benefits || []
  };
}

/**
 * Generic Fetch Wrapper for Customer Flow
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
 * Fetches specific plans based on trip parameters (Search Layer)
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
    
    // Apply normalization to the search results
    res.data = rawPlans.map(normalizeAsegoPlan);
  }
  
  return res;
}

/**
 * Fetches specific plan details including detailId (Hydration Layer)
 */
export async function getAsegoPlanDetails(creds: AsegoCredentials, planId: string) {
  const pId = creds.partnerId.trim();
  const path = `/ext/b2b/v1/plan/masterDetails/${pId}?planId=${planId}`;
  
  const res = await asegoRequest(path, creds);
  
  if (res.success && res.data) {
    // Extract detailId from the first item in the details list if available
    const raw = res.data;
    const detailId = raw.sellingPlanDetailsList?.[0]?.detailId || null;
    
    return {
      success: true,
      data: {
        ...normalizeAsegoPlan(raw),
        detailId,
        raw // Keep raw for debugging trace if needed
      }
    };
  }
  
  return res;
}
