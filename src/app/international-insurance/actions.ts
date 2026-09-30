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
 * Distinguishes between search-phase (flat) and hydration-phase (matrix) data.
 */
function normalizeAsegoPlan(raw: any, targetAge?: number): NormalizedPlan {
  const targetAgeNum = targetAge !== undefined ? Number(targetAge) : NaN;
  
  // 1. Identify data shape
  const details = raw.sellingPlanDetailsList;
  const hasFullBandData = Array.isArray(details);

  // 2. Perform age-matching if full band data is available
  const matchedDetail = (hasFullBandData && Number.isFinite(targetAgeNum))
    ? details.find((d: any) => 
        targetAgeNum >= Number(d.minAge ?? 0) && 
        targetAgeNum <= Number(d.maxAge ?? 100)
      )
    : undefined;

  // 3. Determine ineligibility
  // ONLY true if we have the full list and genuinely found no match for the age.
  // If we don't have the list (search phase), we are NOT ineligible yet.
  const ineligible = hasFullBandData && !matchedDetail;

  // 4. Extract values (matched detail takes priority over top-level fallback)
  const source = matchedDetail || {};
  
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
