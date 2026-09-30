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

export interface AsegoCredentials {
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

  // Secure derivation of credentials:
  // In debug mode, prioritize passed creds. In standard mode, strictly use env vars.
  const pId = (isDebug && providedCreds?.partnerId ? providedCreds.partnerId : process.env.UTSAVS_PARTNER_ID || '').trim();
  const sgn = (isDebug && providedCreds?.sign ? providedCreds.sign : process.env.UTSAVS_SIGN || '').trim();
  const ref = (isDebug && providedCreds?.reference ? providedCreds.reference : process.env.UTSAVS_REFERENCE || '').trim();

  if (!pId || !sgn || !ref) {
    return {
      success: false,
      data: null,
      error: "Authentication credentials not configured.",
      endpoint: path,
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
  const isDebug = process.env.UTSAVS_INTERNAL_DEBUG === 'true';
  const pId = (isDebug && creds?.partnerId ? creds.partnerId : process.env.UTSAVS_PARTNER_ID || '').trim();
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
