'use server';

/**
 * @fileOverview Asego API Implementation - Forensic Correction v5.1
 * Aligns payload assembly with authoritative Swagger schema and state flow.
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
  diagnostics?: any;
}

/**
 * Normalization Boundary
 * Shields the UI from Asego's raw schema.
 * Supports both standard and UAT-specific key variants.
 */
function normalizeAsegoPlan(raw: any, targetAge: number): NormalizedPlan | null {
  const details = raw.sellingPlanDetailsList || [];
  const matchedDetail = details.find((d: any) => 
    targetAge >= Number(d.minAge ?? 0) && 
    targetAge <= Number(d.maxAge ?? 100)
  ) || details[0] || {};

  // Support confirmed UAT response variants for Plan ID
  const planId = String(raw.id || raw.plan_id || raw.planId || "");
  
  // Support confirmed UAT response variants for Premium
  // Checked: raw.total_premium (Standard), matchedDetail.total (UAT Variant)
  const premium = Number(raw.total_premium || raw.total || matchedDetail.total || 0);

  // FAIL CLOSED: Do not allow empty identifiers or zero premiums
  if (!planId || isNaN(premium) || premium <= 0) {
    return null;
  }

  return {
    planId,
    name: String(raw.plan_name || raw.planName || raw.name || "Standard Plan"),
    insurer: String(raw.insurer_name || raw.insurerName || "ICICI Lombard"),
    insurerId: String(raw.insurer_id || raw.insurerId || "1"),
    premium,
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
  creds?: AsegoCredentials,
  method: string = 'GET',
  body: any = null
): Promise<ActionResponse> {
  if (!creds?.partnerId || !creds?.sign || !creds?.reference) {
    return { success: false, status: 0, data: null, error: "Configuration missing.", endpoint: path, method, headersSent: {} };
  }

  const endpoint = `${BASE_URL}${path}`;
  const headers: Record<string, string> = {
    'Accept': 'application/json',
    'User-Agent': 'Utsavs/1.0',
    'Content-Type': 'application/json',
    'Sign': creds.sign,
    'Reference': creds.reference,
  };

  try {
    const options: RequestInit = { method, headers, cache: 'no-store' };
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
      headersSent: { ...headers, 'Sign': '********', 'Reference': '********' }
    };
  } catch (error: any) {
    return { success: false, status: 0, data: null, error: error.message, endpoint, method, headersSent: headers };
  }
}

export async function getAsegoCategories(creds?: AsegoCredentials) {
  return asegoRequest('/ext/b2b/v1/category', creds);
}

export async function getAsegoPlans(params: { age: string, duration: string, categoryId: string }, creds?: AsegoCredentials) {
  const pId = creds?.partnerId || "";
  const path = `/ext/b2b/v1/plan/${pId}?duration=${params.duration}&age=${params.age}&category=${params.categoryId}`;
  
  const res = await asegoRequest(path, creds);
  if (res.success) {
    const rawPlans = res.data?.sellingPlanDto || (Array.isArray(res.data) ? res.data : []);
    res.data = rawPlans
      .map((p: any) => normalizeAsegoPlan(p, Number(params.age)))
      .filter((p: NormalizedPlan | null) => p !== null);
  }
  return res;
}

export async function asegoEncrypt(value: string, creds?: AsegoCredentials) {
  const key = (creds?.secretKey || "").trim();
  const initVector = (creds?.vectorBytes || "").trim();
  if (!key || !initVector) return { success: false, status: 0, data: null, error: "Encryption keys missing.", endpoint: '', method: '', headersSent: {} };
  return asegoRequest('/ext/b2b/v1/encryption/encrypt', creds, 'POST', { value, key, initVector });
}

/**
 * Payload Assembly - Strict Mapping
 * Deterministic mapping: sellingPlanId <- selectedPlan.planId
 */
function assembleAsegoPayload(payload: any, creds: AsegoCredentials) {
  const premium = Number(payload.premium);
  
  // Local validation before assembly
  if (!payload.planId || isNaN(premium) || premium <= 0) {
    throw new Error(`LOCAL_VALIDATION_FAILURE: Missing mandatory plan data. planId: "${payload.planId}", premium: ${premium}`);
  }

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
      otherDetails: { policyComment: "", universityName: "", universityAddress: "" }
    }
  ];
}

export async function validateAsegoPolicy(policyData: any, creds?: AsegoCredentials) {
  if (!creds) return { success: false, status: 0, data: null, error: "Creds required", endpoint: '', method: '', headersSent: {} };
  
  // Forensic Checkpoint before encryption
  const diagnostics = {
    partnerId: creds.partnerId,
    planId: policyData.planId,
    premium: policyData.premium,
    detailId: policyData.detailId || "NOT_AVAILABLE",
    validation: (policyData.planId && Number(policyData.premium) > 0 && creds.partnerId) ? "READY" : "BLOCKED"
  };

  if (diagnostics.validation === "BLOCKED") {
    return {
      success: false,
      status: 0,
      data: null,
      error: `LOCAL_VALIDATION_FAILURE: Missing mandatory plan data. planId: "${policyData.planId}", premium: ${policyData.premium}`,
      endpoint: 'local_validation',
      method: 'INTERNAL',
      headersSent: {},
      diagnostics
    };
  }

  try {
    const plaintext = assembleAsegoPayload(policyData, creds);
    const encRes = await asegoEncrypt(JSON.stringify(plaintext), creds);
    if (!encRes.success || !encRes.data) return encRes;

    const res = await asegoRequest(`/ext/b2b/v1/createPolicy/validate/${creds.partnerId}`, creds, 'POST', encRes.data);
    res.plaintext = plaintext;
    res.diagnostics = diagnostics;
    return res;
  } catch (e: any) {
    return { success: false, status: 0, data: null, error: e.message, endpoint: 'local_validation', method: 'INTERNAL', headersSent: {}, diagnostics };
  }
}

export async function createAsegoPolicy(policyData: any, creds?: AsegoCredentials) {
  // BLOCKED: READ-ONLY VALIDATION PHASE
  return { success: false, status: 0, data: null, error: "Feature locked during validation audit.", endpoint: '', method: '', headersSent: {} };
}

export async function cancelAsegoPolicy(policyNumber: string, remarks: string = "UAT Cleanup", creds?: AsegoCredentials) {
  // BLOCKED: READ-ONLY VALIDATION PHASE
  return { success: false, status: 0, data: null, error: "Feature locked during validation audit.", endpoint: '', method: '', headersSent: {} };
}
