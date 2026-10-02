'use server';

/**
 * @fileOverview Asego API Implementation - Production Hardened v5.8
 * Implementation: Full Lifecycle (Issue/Cancel) + PII Protection + Input Validation.
 */

const BASE_URL = process.env.ASEGO_BASE_URL || "https://dolphin.asego.in/api";

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
  partnerIdSource?: string;
  diagnostics?: {
    endpoint: string;
    method: string;
    requestClass: 'PLAN_SEARCH' | 'POLICY_VALIDATE' | 'POLICY_ISSUE' | 'POLICY_CANCEL' | 'OTHER';
    responseShape: 'ARRAY' | 'OBJECT' | 'NULL' | 'STRING' | 'EMPTY_ARRAY' | 'UNKNOWN';
    itemCount: number;
    asegoCode?: number;
    asegoMsg?: string;
    pathPayloadMatch: boolean;
  };
}

const ASEGO_ERROR_MESSAGES: Record<number, string> = {
  107: "We couldn't process your request. Please check your data and try again.",
  115: "Something went wrong calculating your premium. Please contact support.",
  117: "The selected plan is no longer available. Please choose another.",
  132: "Please select a travel region before continuing.",
};

function userFacingError(code: number): string {
  return ASEGO_ERROR_MESSAGES[code] ?? "Something went wrong. Please try again or contact support.";
}

function validateTravelerInput(t: any): string[] {
  const errors: string[] = [];
  if (!/^[A-Za-z0-9]{6,9}$/.test(t.passport)) errors.push("Invalid passport format.");
  if (!/^\d{10}$/.test(t.mobileNo)) errors.push("Mobile number must be 10 digits.");
  if (!/^\S+@\S+\.\S+$/.test(t.email)) errors.push("Invalid email format.");
  if (!t.pincode || !/^\d{6}$/.test(t.pincode)) errors.push("Invalid 6-digit pincode.");
  return errors;
}

async function asegoRequest(
  path: string, 
  creds?: AsegoCredentials,
  method: string = 'GET',
  body: any = null
): Promise<ActionResponse> {
  const partnerId = creds?.partnerId || process.env.UTSAVS_PARTNER_ID;
  const sign = creds?.sign || process.env.UTSAVS_SIGN;
  const ref = creds?.reference || process.env.UTSAVS_REFERENCE;

  if (!partnerId || !sign || !ref) {
    return { success: false, status: 0, data: null, error: "Configuration missing.", endpoint: path, method, headersSent: {} };
  }

  const endpoint = `${BASE_URL}${path}`;
  const headers: Record<string, string> = {
    'Accept': 'application/json',
    'User-Agent': 'Utsavs/1.0',
    'Content-Type': 'application/json',
    'Sign': sign,
    'Reference': ref,
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
      data: parsedData,
      endpoint: path,
      method,
      raw: parsedData,
      headersSent: { 'Sign': '********', 'Reference': '********' }
    };
  } catch (error: any) {
    return { success: false, status: 0, data: null, error: error.message, endpoint: path, method, headersSent: {} };
  }
}

function normalizeAsegoPlan(raw: any, targetAge: number, insurerInfo: { id: string, name: string }): NormalizedPlan | null {
  const planId = String(raw.id || raw.plan_id || "");
  const name = String(raw.name || raw.plan_name || raw.displayName || "Standard Plan");
  
  const agePremiums = raw.agePremiums || [];
  const matchedAgeEntry = Array.isArray(agePremiums) 
    ? agePremiums.find((ap: any) => Number(ap.age) === targetAge)
    : (Number(agePremiums.age) === targetAge ? agePremiums : null);
  
  const premium = matchedAgeEntry ? Number(matchedAgeEntry.premium) : Number(raw.total || raw.total_premium || 0);

  if (!planId || isNaN(premium) || premium <= 0) return null;

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

function buildDiagnostics(res: any, original: any): any {
  const rawData = res.raw || res.data;
  const isArray = Array.isArray(rawData);
  const isObject = typeof rawData === 'object' && rawData !== null && !isArray;
  
  let shape: any = 'UNKNOWN';
  if (isArray) shape = rawData.length === 0 ? 'EMPTY_ARRAY' : 'ARRAY';
  else if (isObject) shape = 'OBJECT';
  else if (rawData === null) shape = 'NULL';

  const asegoCode = isObject ? rawData.code : undefined;

  return {
    ...original,
    responseShape: shape,
    itemCount: isArray ? rawData.length : (isObject ? 1 : 0),
    asegoCode,
    asegoMsg: asegoCode ? userFacingError(asegoCode) : undefined
  };
}

export async function getAsegoCategories(creds?: AsegoCredentials) {
  return asegoRequest('/ext/b2b/v1/category', creds);
}

export async function getAsegoPlans(params: { age: string, duration: string, categoryId: string }, creds?: AsegoCredentials) {
  const pId = creds?.partnerId || process.env.UTSAVS_PARTNER_ID || "";
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
  const key = (creds?.secretKey || process.env.UTSAVS_SECRET_KEY || "").trim();
  const initVector = (creds?.vectorBytes || process.env.UTSAVS_INIT_VECTOR || "").trim();
  if (!key || !initVector) return { success: false, status: 0, data: null, error: "Encryption configuration missing." };
  
  return asegoRequest('/ext/b2b/v1/encryption/encrypt', creds, 'POST', { value, key, initVector });
}

function assembleAsegoPayload(payload: any, creds?: AsegoCredentials) {
  const partnerId = creds?.partnerId || process.env.UTSAVS_PARTNER_ID;
  const sign = creds?.sign || process.env.UTSAVS_SIGN;
  const ref = creds?.reference || process.env.UTSAVS_REFERENCE;

  const premium = Number(payload.premium);
  return [
    {
      identity: {
        orderId: payload.orderId,
        sign,
        reference: ref,
        partnerId
      },
      selectedPlan: {
        insurerId: payload.insurerId,
        totalPremium: premium,
        plan: {
          sellingPlanId: payload.planId, 
          agePremiums: { age: Number(payload.age), premium: premium }
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
  const inputErrors = validateTravelerInput(policyData);
  if (inputErrors.length > 0) return { success: false, status: 400, error: inputErrors.join(" "), endpoint: '', method: '', headersSent: {} };

  const partnerId = creds?.partnerId || process.env.UTSAVS_PARTNER_ID;
  const initialDiagnostics = {
    endpoint: `/ext/b2b/v1/createPolicy/validate/${partnerId}`,
    method: 'POST',
    requestClass: 'POLICY_VALIDATE',
    pathPayloadMatch: partnerId === policyData.partnerId
  };

  try {
    const plaintext = assembleAsegoPayload(policyData, creds);
    const encRes = await asegoEncrypt(JSON.stringify(plaintext), creds);
    
    if (!encRes.success || !encRes.data) {
      return { ...encRes, diagnostics: buildDiagnostics(encRes, initialDiagnostics) };
    }

    const res = await asegoRequest(`/ext/b2b/v1/createPolicy/validate/${partnerId}`, creds, 'POST', encRes.data);
    
    return JSON.parse(JSON.stringify({
      ...res,
      diagnostics: buildDiagnostics(res, initialDiagnostics)
    }));
  } catch (e: any) {
    return { success: false, status: 0, data: null, error: e.message, endpoint: 'server', method: 'POST', headersSent: {} };
  }
}

export async function createAsegoPolicy(policyData: any, creds?: AsegoCredentials) {
  const partnerId = creds?.partnerId || process.env.UTSAVS_PARTNER_ID;
  const initialDiagnostics = {
    endpoint: `/ext/b2b/v1/createPolicy/${partnerId}`,
    method: 'POST',
    requestClass: 'POLICY_ISSUE',
    pathPayloadMatch: true
  };

  try {
    const plaintext = assembleAsegoPayload(policyData, creds);
    const encRes = await asegoEncrypt(JSON.stringify(plaintext), creds);
    
    if (!encRes.success || !encRes.data) return encRes;

    const res = await asegoRequest(`/ext/b2b/v1/createPolicy/${partnerId}`, creds, 'POST', encRes.data);
    
    return JSON.parse(JSON.stringify({
      ...res,
      diagnostics: buildDiagnostics(res, initialDiagnostics)
    }));
  } catch (e: any) {
    return { success: false, status: 0, data: null, error: e.message, endpoint: 'server', method: 'POST', headersSent: {} };
  }
}

export async function cancelAsegoPolicy(policyNumber: string, creds?: AsegoCredentials) {
  const partnerId = creds?.partnerId || process.env.UTSAVS_PARTNER_ID;
  const initialDiagnostics = {
    endpoint: `/ext/b2b/v1/policy/cancel/${partnerId}`,
    method: 'POST',
    requestClass: 'POLICY_CANCEL',
    pathPayloadMatch: true
  };

  try {
    // Asego Cancellation Contract: [ { identity: {...}, policyNumber: "..." } ]
    const plaintext = [{
      identity: {
        sign: creds?.sign || process.env.UTSAVS_SIGN,
        reference: creds?.reference || process.env.UTSAVS_REFERENCE,
        partnerId
      },
      policyNumber
    }];

    const encRes = await asegoEncrypt(JSON.stringify(plaintext), creds);
    if (!encRes.success || !encRes.data) return encRes;

    const res = await asegoRequest(`/ext/b2b/v1/policy/cancel/${partnerId}`, creds, 'POST', encRes.data);
    
    return JSON.parse(JSON.stringify({
      ...res,
      diagnostics: buildDiagnostics(res, initialDiagnostics)
    }));
  } catch (e: any) {
    return { success: false, status: 0, data: null, error: e.message, endpoint: 'server', method: 'POST', headersSent: {} };
  }
}
