'use server';

/**
 * @fileOverview Asego API Implementation - Forensic Correction v5.7
 * Focus: Restoring agePremiums as an OBJECT and hardening response parsing.
 */

const BASE_URL = "https://dolphin.asego.in/api";

export interface NormalizedPlan {
  planId: string;
  name: string;
  premium: number;
  insurerId: string;
  currency: string;
  minAge: number;
  maxAge: number;
  minDays: number;
  maxDays: number;
  insurer: string;
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
  partnerIdSource?: string;
  diagnostics?: {
    endpoint: string;
    method: string;
    requestClass: 'PLAN_SEARCH' | 'POLICY_VALIDATE' | 'POLICY_ISSUE' | 'POLICY_CANCEL' | 'OTHER';
    dataCheck: 'PASS' | 'BLOCKED';
    responseShape: 'ARRAY' | 'OBJECT' | 'NULL' | 'STRING' | 'EMPTY_ARRAY' | 'UNKNOWN';
    itemCount: number;
    agePremiumsType: 'OBJECT' | 'ARRAY';
    pathPayloadMatch: boolean;
    asegoCode?: number;
    asegoMsg?: string;
  };
}

function normalizeAsegoPlan(raw: any, targetAge: number, insurerInfo: { id: string, name: string }): NormalizedPlan | null {
  const planId = String(raw.id || raw.plan_id || "");
  const name = String(raw.name || raw.plan_name || raw.displayName || "Standard Plan");
  
  const agePremiums = raw.agePremiums || [];
  const matchedAgeEntry = Array.isArray(agePremiums) 
    ? agePremiums.find((ap: any) => Number(ap.age) === targetAge)
    : (Number(agePremiums.age) === targetAge ? agePremiums : null);
  
  const premium = matchedAgeEntry ? Number(matchedAgeEntry.premium) : Number(raw.total || raw.total_premium || 0);

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
    maxDays: Number(raw.maxDays ?? 365)
  };
}

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

    let partnerIdSource = "MANUAL_INPUT";
    if (creds.partnerId === "d5e591b7-46dd-4d7e-8264-7a30b16cec8d") {
      partnerIdSource = "CONFIG_STATE_GUID";
    }

    return {
      success: response.ok,
      status: response.status,
      data: parsedData,
      endpoint: path,
      method,
      raw: parsedData,
      partnerIdSource,
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
    const rawData = res.data?.data ?? res.data;
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
  
  // Serialization Boundary: Plain Object -> JSON String -> Encryption
  return asegoRequest('/ext/b2b/v1/encryption/encrypt', creds, 'POST', { value, key, initVector });
}

/**
 * Payload Assembly - Restored to OBJECT for agePremiums (v5.7)
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
          // v5.7 Correction: agePremiums must be an OBJECT for createPolicy/validate
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
 * Hardened Diagnostic Builder (v5.7)
 * Prevents Server Action crashes by establishing response shape first.
 */
function buildDiagnostics(res: any, original: any): any {
  const rawData = res.raw || res.data;
  const isArray = Array.isArray(rawData);
  const isObject = typeof rawData === 'object' && rawData !== null && !isArray;
  
  let shape: any = 'UNKNOWN';
  if (isArray) shape = rawData.length === 0 ? 'EMPTY_ARRAY' : 'ARRAY';
  else if (isObject) shape = 'OBJECT';
  else if (rawData === null) shape = 'NULL';

  return {
    ...original,
    responseShape: shape,
    itemCount: isArray ? rawData.length : (isObject ? 1 : 0),
    asegoCode: isObject ? rawData.code : undefined,
    asegoMsg: isObject ? rawData.msg : undefined
  };
}

export async function validateAsegoPolicy(policyData: any, creds?: AsegoCredentials) {
  if (!creds) return { success: false, status: 0, data: null, error: "Creds required", endpoint: '', method: '', headersSent: {} };
  
  const pathPartnerId = creds.partnerId;
  const payloadPartnerId = policyData.partnerId;

  const initialDiagnostics = {
    endpoint: `/ext/b2b/v1/createPolicy/validate/${pathPartnerId}`,
    method: 'POST',
    requestClass: 'POLICY_VALIDATE',
    dataCheck: (policyData.planId && Number(policyData.premium) > 0) ? "PASS" : "BLOCKED",
    agePremiumsType: 'OBJECT',
    pathPayloadMatch: pathPartnerId === payloadPartnerId
  };

  try {
    const plaintext = assembleAsegoPayload(policyData, creds);
    // Serialization Boundary: Plain Object -> JSON String -> Encryption
    const encRes = await asegoEncrypt(JSON.stringify(plaintext), creds);
    
    if (!encRes.success || !encRes.data) {
      return { ...encRes, diagnostics: buildDiagnostics(encRes, initialDiagnostics) };
    }

    const res = await asegoRequest(`/ext/b2b/v1/createPolicy/validate/${pathPartnerId}`, creds, 'POST', encRes.data);
    
    // Strict Plain Object Return for Next.js Serialization
    return JSON.parse(JSON.stringify({
      success: res.success,
      status: res.status,
      data: res.data,
      error: res.error,
      endpoint: res.endpoint,
      method: res.method,
      headersSent: res.headersSent,
      raw: res.raw,
      plaintext,
      partnerIdSource: res.partnerIdSource,
      diagnostics: buildDiagnostics(res, initialDiagnostics)
    }));
  } catch (e: any) {
    return { success: false, status: 0, data: null, error: e.message, endpoint: 'server_action', method: 'POST', headersSent: {}, diagnostics: initialDiagnostics };
  }
}

export async function createAsegoPolicy(policyData: any, creds?: AsegoCredentials) {
  return { success: false, status: 403, data: null, error: "ISSUANCE_LOCKED_FOR_VALIDATION_TESTING", endpoint: '', method: '', headersSent: {} };
}

export async function cancelAsegoPolicy(policyNumber: string, creds?: AsegoCredentials) {
  return { success: false, status: 403, data: null, error: "CANCELLATION_LOCKED_FOR_VALIDATION_TESTING", endpoint: '', method: '', headersSent: {} };
}
