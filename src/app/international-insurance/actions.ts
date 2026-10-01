'use server';

/**
 * @fileOverview Asego API Implementation - Verified Final Sequence
 * Implements strict Swagger-compliant payload construction using real user data.
 */

const BASE_URL = "https://dolphin.asego.in/api";

export interface NormalizedPlan {
  planId: string;
  name: string | undefined;
  insurer: string;
  insurerId: string;
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
  plaintext?: any;
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
  const source = matchedDetail || (hasFullBandData ? details[0] : {});
  
  const premium = source.total ?? source.total_premium ?? raw.total_premium ?? raw.totalPremium;

  return {
    planId: raw.plan_id ?? raw.planId ?? raw.id ?? '',
    name: raw.plan_name ?? raw.planName ?? raw.name,
    insurer: raw.insurer_name ?? raw.insurerName ?? 'ICICI Lombard',
    insurerId: raw.insurer_id ?? raw.insurerId ?? "1",
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
 * Secure Server-Side Relay with Naked Ciphertext Strategy
 */
async function asegoRequest(
  path: string, 
  providedCreds?: AsegoCredentials,
  method: string = 'GET',
  body: any = null
): Promise<ActionResponse> {
  const pId = (providedCreds?.partnerId || "").trim();
  const sgn = (providedCreds?.sign || "").trim();
  const ref = (providedCreds?.reference || "").trim();

  if (!pId || !sgn || !ref) {
    return {
      success: false,
      status: 0,
      data: null,
      error: "Session credentials missing. Please configure CONFIG panel.",
      endpoint: path,
      method,
      headersSent: {}
    };
  }

  const endpoint = `${BASE_URL}${path}`;
  const headers: Record<string, string> = {
    'Accept': 'application/json',
    'User-Agent': 'Utsavs/1.0',
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
      options.body = typeof body === 'string' ? body : JSON.stringify(body);
    }

    const response = await fetch(endpoint, options);
    const responseText = await response.text();
    let parsedData;
    try {
      parsedData = JSON.parse(responseText);
    } catch (e) {
      parsedData = responseText;
    }

    return {
      success: response.ok,
      status: response.status,
      data: parsedData?.data ?? parsedData,
      endpoint,
      method,
      raw: parsedData,
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
      error: error.message || "Network request failed.",
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
  const key = (creds?.secretKey || "").trim();
  const initVector = (creds?.vectorBytes || "").trim();
  
  if (!key || !initVector) {
    return {
      success: false,
      status: 0,
      data: null,
      error: "Encryption keys missing in CONFIG.",
      endpoint: '/encryption/encrypt',
      method: 'POST',
      headersSent: {}
    };
  }

  return asegoRequest('/ext/b2b/v1/encryption/encrypt', creds, 'POST', { value, key, initVector });
}

export async function getAsegoCategories(creds?: AsegoCredentials) {
  return asegoRequest('/ext/b2b/v1/category', creds);
}

export async function getAsegoPlans(params: { age: string, duration: string, categoryId: string }, creds?: AsegoCredentials) {
  const pId = (creds?.partnerId || "").trim();
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
 * Payload Assembly - Corrected for state mapping
 */
function assembleAsegoPayload(payload: any, creds: AsegoCredentials) {
  const premium = Number(payload.premium || payload.totalPremium || 0);
  
  return [
    {
      identity: {
        orderId: payload.orderId,
        sign: creds.sign,
        reference: creds.reference,
        partnerId: creds.partnerId
      },
      selectedPlan: {
        insurerId: payload.insurerId || "1",
        totalPremium: premium,
        plan: {
          sellingPlanId: payload.planId,
          agePremiums: {
            age: Number(payload.age),
            premium: premium
          }
        }
      },
      quotation: {
        travelCategory: payload.categoryId,
        startDate: payload.startDate,
        duration: Number(payload.duration),
        endDate: payload.endDate
      },
      traveler: {
        name: `${payload.firstName} ${payload.lastName}`.trim(),
        passport: payload.passport,
        dob: payload.dob,
        address: payload.address,
        mobileNo: payload.mobileNo,
        email: payload.email,
        city: payload.city,
        district: payload.district,
        state: payload.state,
        pincode: payload.pincode,
        country: payload.country,
        finalPremium: premium,
        age: Number(payload.age),
        gender: payload.gender,
        nominee: payload.nomineeName,
        relation: payload.nomineeRelation
      },
      otherDetails: { 
        policyComment: "", 
        universityName: "", 
        universityAddress: "" 
      }
    }
  ];
}

/**
 * Policy Validation
 */
export async function validateAsegoPolicy(policyData: any, creds?: AsegoCredentials) {
  if (!creds) return { success: false, status: 0, data: null, error: "Credentials required", endpoint: '', method: '', headersSent: {} };
  
  const plaintext = assembleAsegoPayload(policyData, creds);
  console.log("UTSAVS_FORENSIC_PLAINTEXT_PAYLOAD:", JSON.stringify(plaintext, null, 2));
  
  const encRes = await asegoEncrypt(JSON.stringify(plaintext), creds);
  if (!encRes.success || !encRes.data) return encRes;

  const res = await asegoRequest(`/ext/b2b/v1/createPolicy/validate/${creds.partnerId}`, creds, 'POST', encRes.data);
  res.plaintext = plaintext;
  return res;
}

/**
 * Policy Creation
 */
export async function createAsegoPolicy(policyData: any, creds?: AsegoCredentials) {
  if (!creds) return { success: false, status: 0, data: null, error: "Credentials required", endpoint: '', method: '', headersSent: {} };

  const plaintext = assembleAsegoPayload(policyData, creds);
  const encRes = await asegoEncrypt(JSON.stringify(plaintext), creds);
  if (!encRes.success || !encRes.data) return encRes;

  const res = await asegoRequest(`/ext/b2b/v1/createPolicy/${creds.partnerId}`, creds, 'POST', encRes.data);
  res.plaintext = plaintext;
  return res;
}

/**
 * Policy Cancellation
 */
export async function cancelAsegoPolicy(policyNumber: string, remarks: string = "UAT Cleanup", creds?: AsegoCredentials) {
  if (!creds) return { success: false, status: 0, data: null, error: "Credentials required", endpoint: '', method: '', headersSent: {} };
  return asegoRequest(`/ext/b2b/v1/policy/cancel/${creds.partnerId}`, creds, 'POST', { policyNumber, remarks });
}
