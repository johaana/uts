'use server';

/**
 * @fileOverview Asego API Implementation - Hardened Forensic Sequence
 * Implements strict Swagger-compliant payload construction using real user data.
 */

const BASE_URL = "https://dolphin.asego.in/api";

export interface NormalizedPlan {
  planId: string;
  name: string;
  insurer: string;
  insurerId: string;
  premium: number;
  currency: string;
  minAge: number;
  maxAge: number;
  minDays: number;
  maxDays: number;
  detailId?: string;
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
  const details = raw.sellingPlanDetailsList || [];
  const targetAgeNum = targetAge !== undefined ? Number(targetAge) : 25;

  // Find the detail record for the specific age band
  const matchedDetail = details.find((d: any) => 
    targetAgeNum >= Number(d.minAge ?? 0) && 
    targetAgeNum <= Number(d.maxAge ?? 100)
  ) || details[0] || {};

  const premium = Number(matchedDetail.total || matchedDetail.total_premium || raw.total_premium || 0);

  return {
    planId: String(raw.plan_id || raw.planId || raw.id || ""),
    name: String(raw.plan_name || raw.planName || raw.name || "Standard Travel Plan"),
    insurer: String(raw.insurer_name || raw.insurerName || "ICICI Lombard"),
    insurerId: String(raw.insurer_id || raw.insurerId || "1"),
    premium: premium,
    currency: String(raw.currency || "INR"),
    minAge: Number(matchedDetail.minAge ?? 0),
    maxAge: Number(matchedDetail.maxAge ?? 100),
    minDays: Number(matchedDetail.minDays ?? 1),
    maxDays: Number(matchedDetail.maxDays ?? 365),
    detailId: String(matchedDetail.sellingPlanDetailId || matchedDetail.detailId || "")
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
  const pId = (providedCreds?.partnerId || "").trim();
  const sgn = (providedCreds?.sign || "").trim();
  const ref = (providedCreds?.reference || "").trim();

  if (!pId || !sgn || !ref) {
    return {
      success: false,
      status: 0,
      data: null,
      error: "Session credentials missing. Configure CONFIG panel.",
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
      // Direct Ciphertext Strategy: If body is a string, send as-is
      options.body = typeof body === 'string' ? body : JSON.stringify(body);
    }

    const response = await fetch(endpoint, options);
    const responseText = await response.text();
    
    // Aggressive Parsing: Handle raw ciphertext vs JSON responses
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
 * Payload Assembly - Strict Swagger Alignment
 */
function assembleAsegoPayload(payload: any, creds: AsegoCredentials) {
  const premium = Number(payload.premium);
  
  return [
    {
      identity: {
        orderId: payload.orderId,
        sign: creds.sign,
        reference: creds.reference,
        partnerId: creds.partnerId
      },
      selectedPlan: {
        insurerId: payload.insurerId,
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
        name: payload.name,
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

export async function validateAsegoPolicy(policyData: any, creds?: AsegoCredentials) {
  if (!creds) return { success: false, status: 0, data: null, error: "Credentials required", endpoint: '', method: '', headersSent: {} };
  
  const plaintext = assembleAsegoPayload(policyData, creds);
  const encRes = await asegoEncrypt(JSON.stringify(plaintext), creds);
  if (!encRes.success || !encRes.data) return encRes;

  const res = await asegoRequest(`/ext/b2b/v1/createPolicy/validate/${creds.partnerId}`, creds, 'POST', encRes.data);
  res.plaintext = plaintext;
  return res;
}

export async function createAsegoPolicy(policyData: any, creds?: AsegoCredentials) {
  if (!creds) return { success: false, status: 0, data: null, error: "Credentials required", endpoint: '', method: '', headersSent: {} };

  const plaintext = assembleAsegoPayload(policyData, creds);
  const encRes = await asegoEncrypt(JSON.stringify(plaintext), creds);
  if (!encRes.success || !encRes.data) return encRes;

  const res = await asegoRequest(`/ext/b2b/v1/createPolicy/${creds.partnerId}`, creds, 'POST', encRes.data);
  res.plaintext = plaintext;
  return res;
}

export async function cancelAsegoPolicy(policyNumber: string, remarks: string = "UAT Cleanup", creds?: AsegoCredentials) {
  if (!creds) return { success: false, status: 0, data: null, error: "Credentials required", endpoint: '', method: '', headersSent: {} };
  return asegoRequest(`/ext/b2b/v1/policy/cancel/${creds.partnerId}`, creds, 'POST', { policyNumber, remarks });
}
