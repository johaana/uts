'use server';

/**
 * @fileOverview Asego API Implementation - Hardened Connection v5.9
 * Networking: Explicit error logging + safe empty-body parsing.
 */

const BASE_URL = process.env.ASEGO_BASE_URL;

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
  headersSent: Record<string, any>;
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

async function asegoRequest(
  path: string, 
  creds: AsegoCredentials,
  method: string = 'GET',
  body: any = null
): Promise<ActionResponse> {
  const baseUrl = process.env.ASEGO_BASE_URL || "https://dolphin.asego.in/api";
  
  if (!baseUrl) {
    throw new Error("ASEGO_BASE_URL is not set in the environment.");
  }

  const partnerId = creds?.partnerId || process.env.UTSAVS_PARTNER_ID;
  const sign = creds?.sign || process.env.UTSAVS_SIGN;
  const ref = creds?.reference || process.env.UTSAVS_REFERENCE;

  if (method === 'POST' && (!sign || !ref)) {
    throw new Error("Asego credentials (Sign/Reference) are missing for this transaction.");
  }

  const fullUrl = `${baseUrl}${path}`;

  try {
    const options: RequestInit = {
      method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'User-Agent': 'Utsavs/1.0',
        ...(sign ? { 'Sign': sign } : {}),
        ...(ref ? { 'Reference': ref } : {}),
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
      parsed = rawText; // pass through non-JSON as string
    }

    return {
      success: response.ok,
      status: response.status,
      method,
      fullUrl,
      data: parsed,
      headersSent: { 'Sign': sign ? '********' : 'NONE', 'Reference': ref ? '********' : 'NONE' }
    };
  } catch (err: any) {
    // Surface the literal networking error (DNS, Timeout, Refused)
    console.error("ASEGO_REQUEST_FAILURE:", {
      fullUrl,
      method,
      errorName: err?.name,
      errorMessage: err?.message,
    });
    throw new Error(`Failed to reach Asego at ${fullUrl}: ${err?.message ?? "unknown error"}`);
  }
}

export async function getAsegoCategories(creds: AsegoCredentials) {
  return asegoRequest('/ext/b2b/v1/category', creds);
}

export async function getAsegoPlans(params: { age: string, duration: string, categoryId: string }, creds: AsegoCredentials) {
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
            const planId = String(p.id || p.plan_id || "");
            const agePremiums = p.agePremiums || [];
            const targetAgeNum = Number(params.age);
            const matchedAgeEntry = Array.isArray(agePremiums) 
              ? agePremiums.find((ap: any) => Number(ap.age) === targetAgeNum)
              : (Number(agePremiums.age) === targetAgeNum ? agePremiums : null);
            
            const premium = matchedAgeEntry ? Number(matchedAgeEntry.premium) : Number(p.total || p.total_premium || 0);

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
  if (!key || !initVector) return { success: false, status: 0, data: null, error: "Encryption config missing.", fullUrl: '', method: '' };
  
  return asegoRequest('/ext/b2b/v1/encryption/encrypt', creds, 'POST', { value, key, initVector });
}

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
  try {
    const plaintext = assembleAsegoPayload(policyData, creds);
    const encRes = await asegoEncrypt(JSON.stringify(plaintext), creds);
    
    if (!encRes.success || !encRes.data) return encRes;

    return await asegoRequest(`/ext/b2b/v1/createPolicy/validate/${creds.partnerId}`, creds, 'POST', encRes.data);
  } catch (e: any) {
    return { success: false, status: 0, data: null, error: e.message, fullUrl: 'server', method: 'POST', headersSent: {} };
  }
}

export async function createAsegoPolicy(policyData: any, creds: AsegoCredentials) {
  try {
    const plaintext = assembleAsegoPayload(policyData, creds);
    const encRes = await asegoEncrypt(JSON.stringify(plaintext), creds);
    
    if (!encRes.success || !encRes.data) return encRes;

    return await asegoRequest(`/ext/b2b/v1/createPolicy/${creds.partnerId}`, creds, 'POST', encRes.data);
  } catch (e: any) {
    return { success: false, status: 0, data: null, error: e.message, fullUrl: 'server', method: 'POST', headersSent: {} };
  }
}

export async function cancelAsegoPolicy(policyNumber: string, creds: AsegoCredentials) {
  try {
    const plaintext = [{
      identity: {
        sign: creds.sign,
        reference: creds.reference,
        partnerId: creds.partnerId
      },
      policyNumber
    }];

    const encRes = await asegoEncrypt(JSON.stringify(plaintext), creds);
    if (!encRes.success || !encRes.data) return encRes;

    return await asegoRequest(`/ext/b2b/v1/policy/cancel/${creds.partnerId}`, creds, 'POST', encRes.data);
  } catch (e: any) {
    return { success: false, status: 0, data: null, error: e.message, fullUrl: 'server', method: 'POST', headersSent: {} };
  }
}
