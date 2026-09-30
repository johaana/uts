'use server';

/**
 * @fileOverview Asego API Implementation
 * Implements a Normalization Layer to map Asego schema to Utsavs stable model.
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
function normalizeAsegoPlan(raw: any, targetAge?: number): NormalizedPlan {
  // 1. Locate the correct age band if a details list is present
  const details = raw.sellingPlanDetailsList;
  const targetAgeNum = targetAge !== undefined ? Number(targetAge) : undefined;
  
  let matchedDetail: any = undefined;
  let hasDetailsArray = Array.isArray(details) && details.length > 0;

  if (hasDetailsArray && targetAgeNum !== undefined && !isNaN(targetAgeNum)) {
    matchedDetail = details.find(d => 
      targetAgeNum >= Number(d.minAge ?? 0) && 
      targetAgeNum <= Number(d.maxAge ?? 100)
    );
  }

  // 2. Identify ineligibility: If there's an array but no match was found for the target age
  const ineligible = hasDetailsArray && targetAgeNum !== undefined && !matchedDetail;

  // 3. Extract values using the matched detail as the primary source, falling back to top-level
  const source = matchedDetail || {};
  
  // Premium must be a number or undefined (never 0 as a default if missing)
  const rawPremium = source.total ?? source.total_premium ?? raw.total_premium ?? raw.totalPremium;
  const premium = (rawPremium !== null && rawPremium !== undefined) ? Number(rawPremium) : undefined;

  return {
    planId: raw.plan_id ?? raw.planId ?? raw.id ?? '',
    name: raw.plan_name ?? raw.planName,
    insurer: raw.insurer_name ?? raw.insurerName ?? 'ICICI Lombard',
    premium,
    currency: raw.currency ?? 'INR',
    minAge: Number(source.minAge ?? raw.min_age ?? raw.minAge ?? 0),
    maxAge: Number(source.maxAge ?? raw.max_age ?? raw.maxAge ?? 100),
    minDays: Number(source.minDays ?? raw.min_days ?? raw.minDays ?? 0),
    maxDays: Number(source.maxDays ?? raw.max_days ?? raw.maxDays ?? 365),
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
    res.data = rawPlans.map((p: any) => normalizeAsegoPlan(p, Number(params.age)));
  }
  
  return res;
}

/**
 * HYDRATION: Returns detailed plan with matched age band
 */
export async function getAsegoPlanDetails(creds: AsegoCredentials, planId: string, targetAge: string) {
  const pId = creds.partnerId.trim();
  const path = `/ext/b2b/v1/plan/masterDetails/${pId}?planId=${planId}`;
  
  const res = await asegoRequest(path, creds);
  
  if (res.success && res.data) {
    return {
      success: true,
      data: normalizeAsegoPlan(res.data, Number(targetAge))
    };
  }
  
  return res;
}
