
'use server';

/**
 * @fileOverview Asego API Implementation - Phase 1 Issuance (Baseline v5.2 + Transaction)
 * Hardened payload assembly and normalization following successful UAT validation.
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
    requestClass: 'PLAN_SEARCH' | 'POLICY_VALIDATE' | 'POLICY_ISSUE' | 'OTHER';
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
 * Normalization Boundary - Baseline v5.2
 * Maps the confirmed UAT response (Insurers -> Plans -> agePremiums).
 */
function normalizeAsegoPlan(raw: any, targetAge: number, insurerInfo: { id: string, name: string }): NormalizedPlan | null {
  // Support both 'id' and 'plan_id' variants observed in UAT
  const planId = String(raw.id || raw.plan_id || "");
  const name = String(raw.name || raw.plan_name || raw.displayName || "Standard Plan");
  
  const agePremiums = raw.agePremiums || [];
  const matchedAgeEntry = agePremiums.find((ap: any) => Number(ap.age) === targetAge);
  
  // Support top-level premium keys for older schema versions
  const premium = matchedAgeEntry ? Number(matchedAgeEntry.premium) : Number(raw.total || raw.total_premium || 0);

  // FAIL CLOSED: Discard malformed records. A valid plan MUST have an ID and a Non-Zero Premium.
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
      parsedData = JSON.parse(responseText);
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
      headersSent: { ...headers, 'Sign': '********', 'Reference': '********' }
    };
  } catch (error: any) {
    return { success: false, status: 0, data: null, error: error.message, endpoint: path, method, headersSent: headers };
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
    } else if (typeof rawData === 'object' && rawData !== null) {
        const normalized = normalizeAsegoPlan(rawData, Number(params.age), { id: "1", name: "Insurer" });
        if (normalized) normalizedList.push(normalized);
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
 * Payload Assembly - Strict Mapping (Baseline v5.2)
 * Maps selection state directly to Asego payload schema.
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
    res.diagnostics = {
      ...diagnostics,
      responseShape: Array.isArray(res.raw) ? 'ARRAY' : typeof res.raw === 'object' ? 'OBJECT' : 'UNKNOWN',
      containsValidation: !!(res.success || (res.raw && typeof res.raw === 'object' && 'code' in res.raw))
    };
    return res;
  } catch (e: any) {
    return { success: false, status: 0, data: null, error: e.message, endpoint: 'local_validation', method: 'INTERNAL', headersSent: {}, diagnostics };
  }
}

/**
 * Phase 1: Issuance Logic
 * Hardened diagnostics to prevent crashes on empty/malformed Asego responses.
 */
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
    res.plaintext = plaintext;
    
    // SAFE ACCESS: Prevent TypeError if res.data is empty or not an array
    const hasPolicy = !!(res.success && (res.data?.policyNumber || (Array.isArray(res.data) && res.data[0]?.policyNumber)));

    res.diagnostics = {
      ...diagnostics,
      responseShape: Array.isArray(res.raw) ? 'ARRAY' : typeof res.raw === 'object' ? 'OBJECT' : 'UNKNOWN',
      containsPolicy: hasPolicy
    };
    return res;
  } catch (e: any) {
    return { success: false, status: 0, data: null, error: e.message, endpoint: 'local_validation', method: 'INTERNAL', headersSent: {}, diagnostics };
  }
}

export async function cancelAsegoPolicy(policyNumber: string, creds?: AsegoCredentials) {
  return { success: false, status: 0, data: null, error: "Cancellation phase locked. Verify Issuance first.", endpoint: '', method: '', headersSent: {} };
}
