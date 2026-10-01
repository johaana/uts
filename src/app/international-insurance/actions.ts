'use server';

/**
 * @fileOverview Asego API Implementation - Phase 1 Issuance (Baseline v5.5)
 * Hardened response handling with strictly defensive diagnostics to prevent server-action crashes.
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
  diagnostics?: {
    endpoint: string;
    method: string;
    requestClass: 'PLAN_SEARCH' | 'POLICY_VALIDATE' | 'POLICY_ISSUE' | 'POLICY_CANCEL' | 'OTHER';
    dataCheck: 'PASS' | 'BLOCKED';
    partnerId: string;
    planId: string;
    premium: number;
    responseShape?: 'ARRAY' | 'OBJECT' | 'NULL' | 'UNKNOWN';
    containsPlans?: boolean;
    containsValidation?: boolean;
    containsPolicy?: boolean;
  };
}

/**
 * Normalization Boundary - Baseline v5.5
 */
function normalizeAsegoPlan(raw: any, targetAge: number, insurerInfo: { id: string, name: string }): NormalizedPlan | null {
  const planId = String(raw.id || raw.plan_id || "");
  const name = String(raw.name || raw.plan_name || raw.displayName || "Standard Plan");
  
  // Premium Extraction from age-matched array
  const agePremiums = raw.agePremiums || [];
  const matchedAgeEntry = agePremiums.find((ap: any) => Number(ap.age) === targetAge);
  
  const premium = matchedAgeEntry ? Number(matchedAgeEntry.premium) : Number(raw.total || raw.total_premium || 0);

  // Fail-closed: Ensure we have a real numeric premium and ID
  if (!planId || isNaN(premium) || premium <= 0) {
    return null;
  }

  return {
    planId,
    name,
    insurer: insurerInfo.name,
    insurerId: insurerInfo.id,
    premium,
    currency: String(raw.currency || "INR"),
    minAge: Number(raw.minAge ?? 0),
    maxAge: Number(raw.maxAge ?? 100),
    minDays: Number(raw.minDays ?? 1),
    maxDays: Number(raw.maxDays ?? 365),
    detailId: String(raw.detailId || "")
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
      parsedData = responseText ? JSON.parse(responseText) : null;
    } catch (e) {
      parsedData = responseText;
    }

    return {
      success: response.ok,
      status: response.status,
      data: parsedData?.data ?? parsedData,
      endpoint: path,
      method,
      raw: parsedData,
      headersSent: { 'Sign': '********', 'Reference': '********' }
    };
  } catch (error: any) {
    return { success: false, status: 0, data: null, error: error.message, endpoint: path, method, headersSent: {} };
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
    const rawData = res.data;
    let normalizedList: NormalizedPlan[] = [];

    if (Array.isArray(rawData)) {
      rawData.forEach((insurer: any) => {
        if (Array.isArray(insurer.plans)) {
          insurer.plans.forEach((p: any) => {
            const normalized = normalizeAsegoPlan(p, Number(params.age), {
              id: insurer.insurerId,
              name: insurer.insurerName
            });
            if (normalized) normalizedList.push(normalized);
          });
        }
      });
    }

    res.data = normalizedList;
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
      otherDetails: { policyComment: "", universityName: "", universityAddress: "" }
    }
  ];
}

/**
 * Defensive Diagnostics Helper
 */
function buildDiagnostics(res: any, originalDiagnostics: any): any {
  if (!res) return { ...originalDiagnostics, dataCheck: 'BLOCKED', error: 'Null response' };

  const rawData = res.raw || res.data;
  const isArray = Array.isArray(rawData);
  const isObject = typeof rawData === 'object' && rawData !== null && !isArray;
  
  return {
    endpoint: originalDiagnostics.endpoint || res.endpoint || '',
    method: originalDiagnostics.method || res.method || 'POST',
    requestClass: originalDiagnostics.requestClass || 'OTHER',
    partnerId: originalDiagnostics.partnerId || 'PRESENT',
    planId: originalDiagnostics.planId || "N/A",
    premium: Number(originalDiagnostics.premium || 0),
    dataCheck: originalDiagnostics.dataCheck,
    responseShape: isArray ? 'ARRAY' : isObject ? 'OBJECT' : (rawData === null ? 'NULL' : 'UNKNOWN'),
    containsPlans: isArray && rawData.length > 0 && !!rawData[0]?.plans,
    containsValidation: originalDiagnostics.requestClass === 'POLICY_VALIDATE' && res.success,
    containsPolicy: (originalDiagnostics.requestClass === 'POLICY_ISSUE') && res.success && (isArray ? rawData.length >= 0 : !!rawData)
  };
}

export async function validateAsegoPolicy(policyData: any, creds?: AsegoCredentials) {
  if (!creds) return { success: false, status: 0, data: null, error: "Creds required", endpoint: '', method: '', headersSent: {} };
  
  const diagnostics: any = {
    endpoint: `/ext/b2b/v1/createPolicy/validate/${creds.partnerId}`,
    method: 'POST',
    requestClass: 'POLICY_VALIDATE',
    partnerId: "PRESENT",
    planId: policyData.planId,
    premium: policyData.premium,
    dataCheck: (policyData.planId && Number(policyData.premium) > 0 && creds.partnerId) ? "PASS" : "BLOCKED"
  };

  if (diagnostics.dataCheck === "BLOCKED") {
    return { success: false, status: 0, data: null, error: "LOCAL_VALIDATION_FAILURE", endpoint: 'local_validation', method: 'INTERNAL', headersSent: {}, diagnostics };
  }

  try {
    const plaintext = assembleAsegoPayload(policyData, creds);
    const encRes = await asegoEncrypt(JSON.stringify(plaintext), creds);
    if (!encRes.success || !encRes.data) return encRes;

    const res = await asegoRequest(`/ext/b2b/v1/createPolicy/validate/${creds.partnerId}`, creds, 'POST', encRes.data);
    return {
      success: res.success,
      status: res.status,
      data: res.data,
      error: res.error,
      endpoint: res.endpoint,
      method: res.method,
      headersSent: res.headersSent,
      raw: res.raw,
      plaintext,
      diagnostics: buildDiagnostics(res, diagnostics)
    };
  } catch (e: any) {
    return { success: false, status: 0, data: null, error: e.message, endpoint: 'local_validation', method: 'INTERNAL', headersSent: {}, diagnostics };
  }
}

export async function createAsegoPolicy(policyData: any, creds?: AsegoCredentials) {
  if (!creds) return { success: false, status: 0, data: null, error: "Creds required", endpoint: '', method: '', headersSent: {} };

  const diagnostics: any = {
    endpoint: `/ext/b2b/v1/createPolicy/${creds.partnerId}`,
    method: 'POST',
    requestClass: 'POLICY_ISSUE',
    partnerId: "PRESENT",
    planId: policyData.planId,
    premium: policyData.premium,
    dataCheck: (policyData.planId && Number(policyData.premium) > 0 && creds.partnerId) ? "PASS" : "BLOCKED"
  };

  if (diagnostics.dataCheck === "BLOCKED") {
    return { success: false, status: 0, data: null, error: "LOCAL_VALIDATION_FAILURE", endpoint: 'local_validation', method: 'INTERNAL', headersSent: {}, diagnostics };
  }

  try {
    const plaintext = assembleAsegoPayload(policyData, creds);
    const encRes = await asegoEncrypt(JSON.stringify(plaintext), creds);
    if (!encRes.success || !encRes.data) return encRes;

    const res = await asegoRequest(`/ext/b2b/v1/createPolicy/${creds.partnerId}`, creds, 'POST', encRes.data);
    return {
      success: res.success,
      status: res.status,
      data: res.data,
      error: res.error,
      endpoint: res.endpoint,
      method: res.method,
      headersSent: res.headersSent,
      raw: res.raw,
      plaintext,
      diagnostics: buildDiagnostics(res, diagnostics)
    };
  } catch (e: any) {
    return { success: false, status: 0, data: null, error: e.message, endpoint: 'local_validation', method: 'INTERNAL', headersSent: {}, diagnostics };
  }
}

export async function cancelAsegoPolicy(policyNumber: string, creds?: AsegoCredentials) {
  if (!creds || !policyNumber) return { success: false, status: 0, data: null, error: "Creds and Policy No required", endpoint: '', method: '', headersSent: {} };

  const diagnostics: any = {
    endpoint: `/ext/b2b/v1/policy/cancel/${creds.partnerId}`,
    method: 'POST',
    requestClass: 'POLICY_CANCEL',
    partnerId: "PRESENT",
    planId: "N/A",
    premium: 0,
    dataCheck: "PASS"
  };

  try {
    const plaintext = { policyNumber };
    const encRes = await asegoEncrypt(JSON.stringify(plaintext), creds);
    if (!encRes.success || !encRes.data) return encRes;

    const res = await asegoRequest(`/ext/b2b/v1/policy/cancel/${creds.partnerId}`, creds, 'POST', encRes.data);
    return {
      success: res.success,
      status: res.status,
      data: res.data,
      error: res.error,
      endpoint: res.endpoint,
      method: res.method,
      headersSent: res.headersSent,
      raw: res.raw,
      plaintext,
      diagnostics: buildDiagnostics(res, diagnostics)
    };
  } catch (e: any) {
    return { success: false, status: 0, data: null, error: e.message, endpoint: 'cancel_validation', method: 'INTERNAL', headersSent: {}, diagnostics };
  }
}
