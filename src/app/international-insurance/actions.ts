'use server';

/**
 * @fileOverview Asego API Implementation - Final Transactional Layer v5.25
 * Hardened environment safety: Implemented Fail-Closed logic for production routing.
 */

const UAT_ENDPOINT = "https://dolphin.asego.in/api";

/**
 * Validates environment configuration to prevent accidental crossover.
 * Returns the authoritative Base URL for the current environment.
 */
function validateConfig(): string {
  const env = process.env.UTSAVS_ASEGO_ENV; // Expects 'uat' or 'production'
  const configuredUrl = process.env.ASEGO_BASE_URL;

  if (env === 'production') {
    // 1. Production MUST have an explicit URL set
    if (!configuredUrl) {
      throw new Error("CONFIG_ERROR: Production environment requires an explicit ASEGO_BASE_URL.");
    }
    // 2. Production MUST NOT point to the UAT host
    if (configuredUrl.includes('dolphin.asego.in')) {
      throw new Error("CONFIG_ERROR: Production environment is misconfigured to use the Dolphin UAT host.");
    }
    return configuredUrl;
  }

  // UAT or Development: Fallback to hardcoded UAT if env var is missing
  return configuredUrl || UAT_ENDPOINT;
}

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
  fullUrl: string;
  method: string;
  actionLabel: string;
  timestamp: string;
}

const ASEGO_ERROR_MESSAGES: Record<number, string> = {
  107: "Parsing Error: Asego could not read the request structure.",
  115: "Premium Mismatch: The calculated price has expired.",
  117: "Plan Unavailable: The selected coverage is no longer offered.",
  132: "Region Error: Please re-select your destination.",
  163: "Settlement Latency: Policy not yet searchable. Please wait 2-3 minutes and try again.",
};

function userFacingError(code: number): string {
  return ASEGO_ERROR_MESSAGES[code] ?? `Asego Error ${code}: Please contact support for assistance.`;
}

function validateTravelerInput(t: any): string[] {
  const errors: string[] = [];
  if (!t.passport || !/^[A-Za-z0-9]{6,12}$/.test(t.passport)) errors.push("Invalid passport format.");
  if (!t.mobileNo || !/^\d{10}$/.test(t.mobileNo)) errors.push("Mobile number must be 10 digits.");
  if (!t.email || !/^\S+@\S+\.\S+$/.test(t.email)) errors.push("Invalid email format.");
  if (!t.pincode || !/^\d{6}$/.test(t.pincode)) errors.push("Invalid pincode (6 digits).");
  return errors;
}

/**
 * Hardened Fetch Wrapper
 */
async function asegoRequest(
  path: string, 
  creds: AsegoCredentials,
  method: string = 'GET',
  body: any = null,
  actionLabel: string = 'UNSPECIFIED'
): Promise<ActionResponse> {
  // Resolve base URL using hardened validation logic
  const baseUrl = validateConfig();
  
  const sign = creds?.sign || process.env.UTSAVS_SIGN;
  const ref = creds?.reference || process.env.UTSAVS_REFERENCE;

  if (!sign || !ref) {
    throw new Error("Asego credentials (Sign/Reference) are missing.");
  }

  const fullUrl = `${baseUrl}${path}`;
  const timestamp = new Date().toISOString();

  try {
    const options: RequestInit = {
      method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'User-Agent': 'Utsavs/1.1',
        'Sign': sign,
        'Reference': ref,
      },
      cache: 'no-store'
    };

    if (body) {
      options.body = typeof body === 'string' ? body : JSON.stringify(body);
    }

    const response = await fetch(fullUrl, options);
    const rawText = await response.text();
    
    let parsed: any;
    try {
      parsed = rawText.length > 0 ? JSON.parse(rawText) : [];
    } catch {
      parsed = rawText; 
    }

    const isBusinessError = parsed?.code && parsed.code !== 0 && parsed.code !== 200;

    return {
      success: response.ok && !isBusinessError,
      status: response.status,
      method,
      fullUrl,
      data: parsed,
      actionLabel,
      timestamp
    };
  } catch (err: any) {
    console.error("ASEGO_REQUEST_FAILURE:", {
      fullUrl,
      method,
      actionLabel,
      errorName: err?.name,
    });
    throw new Error(`Connection failed: ${err?.message ?? "unknown network error"}`);
  }
}

export async function getAsegoCategories(creds: AsegoCredentials) {
  return asegoRequest('/ext/b2b/v1/category', creds, 'GET', null, 'INITIALIZE');
}

export async function getAsegoPlans(params: { age: string, duration: string, categoryId: string }, creds: AsegoCredentials) {
  const pId = creds.partnerId || process.env.UTSAVS_PARTNER_ID;
  const path = `/ext/b2b/v1/plan/${pId}?duration=${params.duration}&age=${params.age}&category=${params.categoryId}`;
  
  const res = await asegoRequest(path, creds, 'GET', null, 'SEARCH_PLANS');
  if (res.success) {
    const rawData = res.data?.data ?? res.data;
    let normalizedList: NormalizedPlan[] = [];

    if (Array.isArray(rawData)) {
      rawData.forEach((insurer: any) => {
        if (Array.isArray(insurer.plans)) {
          insurer.plans.forEach((p: any) => {
            const planId = String(p.id || p.plan_id || "");
            const agePremiums = p.agePremiums || [];
            const targetAgeNum = Number(params.age);
            
            let premium = 0;
            if (Array.isArray(agePremiums)) {
              const matched = agePremiums.find((ap: any) => Number(ap.age) === targetAgeNum);
              premium = matched ? Number(matched.premium) : Number(p.total || p.total_premium || 0);
            } else if (agePremiums && typeof agePremiums === 'object') {
              premium = Number(agePremiums.premium || p.total || p.total_premium || 0);
            } else {
              premium = Number(p.total || p.total_premium || 0);
            }

            if (planId && !isNaN(premium) && premium > 0) {
              normalizedList.push({
                planId,
                name: String(p.name || p.plan_name || p.displayName || "Standard Plan"),
                insurer: insurer.insurerName,
                insurerId: insurer.insurerId,
                premium,
                currency: String(p.currency || "INR"),
                minAge: Number(p.minAge ?? 0),
                maxAge: Number(p.maxAge ?? 100),
                minDays: Number(p.minDays ?? 1),
                maxDays: Number(p.maxDays ?? 365)
              });
            }
          });
        }
      });
    }
    res.data = normalizedList;
  }
  return res;
}

export async function asegoEncrypt(value: string, creds: AsegoCredentials) {
  const key = (creds?.secretKey || process.env.UTSAVS_SECRET_KEY || "").trim();
  const initVector = (creds?.vectorBytes || process.env.UTSAVS_INIT_VECTOR || "").trim();
  if (!key || !initVector) throw new Error("Encryption configuration missing.");
  
  return asegoRequest('/ext/b2b/v1/encryption/encrypt', creds, 'POST', { value, key, initVector }, 'ENCRYPT');
}

function assembleAsegoPayload(payload: any, creds: AsegoCredentials) {
  const premium = Number(payload.premium);
  const pId = creds.partnerId || process.env.UTSAVS_PARTNER_ID;

  return [
    {
      identity: {
        orderId: payload.orderId,
        sign: creds.sign || process.env.UTSAVS_SIGN,
        reference: creds.reference || process.env.UTSAVS_REFERENCE,
        partnerId: pId
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

export async function validateAsegoPolicy(policyData: any, creds: AsegoCredentials) {
  const inputErrors = validateTravelerInput(policyData);
  if (inputErrors.length > 0) throw new Error(inputErrors.join(" "));

  const partnerId = creds.partnerId || process.env.UTSAVS_PARTNER_ID;
  const plaintext = assembleAsegoPayload(policyData, creds);
  const encRes = await asegoEncrypt(JSON.stringify(plaintext), creds);
  if (!encRes.success || !encRes.data) return encRes;

  const res = await asegoRequest(`/ext/b2b/v1/createPolicy/validate/${partnerId}`, creds, 'POST', encRes.data, 'VALIDATE');
  return { ...res, data: res.data?.code ? { ...res.data, msg: userFacingError(res.data.code) } : res.data };
}

export async function createAsegoPolicy(policyData: any, creds: AsegoCredentials) {
  const inputErrors = validateTravelerInput(policyData);
  if (inputErrors.length > 0) throw new Error(inputErrors.join(" "));

  const partnerId = creds.partnerId || process.env.UTSAVS_PARTNER_ID;
  const plaintext = assembleAsegoPayload(policyData, creds);
  const encRes = await asegoEncrypt(JSON.stringify(plaintext), creds);
  if (!encRes.success || !encRes.data) return encRes;

  const res = await asegoRequest(`/ext/b2b/v1/createPolicy/${partnerId}`, creds, 'POST', encRes.data, 'ISSUE_POLICY');
  return { ...res, data: res.data?.code ? { ...res.data, msg: userFacingError(res.data.code) } : res.data };
}

export async function cancelAsegoPolicy(policyNumber: string, creds: AsegoCredentials) {
  if (process.env.UTSAVS_INTERNAL_DEBUG !== 'true') {
    throw new Error("UNAUTHORIZED: Cancellation service restricted to debug mode.");
  }

  const partnerId = creds.partnerId || process.env.UTSAVS_PARTNER_ID;
  const pNo = String(policyNumber || "").trim();
  if (!pNo) throw new Error("Policy number is required for cancellation.");
  
  const plaintext = {
    identity: {
      partnerId: partnerId,
      sign: creds.sign || process.env.UTSAVS_SIGN,
      reference: creds.reference || process.env.UTSAVS_REFERENCE
    },
    policyNo: pNo,
    remarks: "UAT Test Void"
  };

  const encRes = await asegoEncrypt(JSON.stringify(plaintext), creds);
  if (!encRes.success || !encRes.data) return encRes;

  const res = await asegoRequest(`/ext/b2b/v1/cancelPolicy/${partnerId}`, creds, 'POST', encRes.data, 'VOID_POLICY');
  
  if (res.data?.code) {
    res.data.msg = userFacingError(res.data.code);
  }
  
  return res;
}