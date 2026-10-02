'use server';

/**
 * @fileOverview Asego API Implementation - Hardened Transactional Layer v5.9
 * PII Protection: Plaintext payloads are NEVER returned to the client.
 * Connectivity: Explicit error logging + safe empty-body parsing.
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
  fullUrl: string;
  method: string;
  headersSent: Record<string, any>;
}

/**
 * Hardened Fetch Wrapper with PII protection and safe parsing.
 */
async function asegoRequest(
  path: string, 
  creds: AsegoCredentials,
  method: string = 'GET',
  body: any = null
): Promise<ActionResponse> {
  const partnerId = creds?.partnerId || process.env.UTSAVS_PARTNER_ID;
  const sign = creds?.sign || process.env.UTSAVS_SIGN;
  const ref = creds?.reference || process.env.UTSAVS_REFERENCE;

  if (!partnerId || !sign || !ref) {
    throw new Error("Asego credentials (PartnerID/Sign/Reference) are missing.");
  }

  const fullUrl = `${BASE_URL}${path}`;

  try {
    const options: RequestInit = {
      method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'User-Agent': 'Utsavs/1.0',
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
      // Safe parsing: Handle [], "", or malformed JSON
      parsed = rawText.length > 0 ? JSON.parse(rawText) : [];
    } catch {
      parsed = rawText; 
    }

    return {
      success: response.ok,
      status: response.status,
      method,
      fullUrl,
      data: parsed,
      // PII SAFE HEADERS
      headersSent: { 'Sign': '********', 'Reference': '********' }
    };
  } catch (err: any) {
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
  const pId = creds.partnerId;
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
  if (!key || !initVector) throw new Error("Encryption configuration missing.");
  
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
          // v5.7 Baseline: agePremiums must be an OBJECT
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
  const plaintext = assembleAsegoPayload(policyData, creds);
  const encRes = await asegoEncrypt(JSON.stringify(plaintext), creds);
  if (!encRes.success || !encRes.data) return encRes;

  const res = await asegoRequest(`/ext/b2b/v1/createPolicy/validate/${creds.partnerId}`, creds, 'POST', encRes.data);
  // B1: Strip plaintext from client result
  return { ...res, plaintext: undefined };
}

export async function createAsegoPolicy(policyData: any, creds: AsegoCredentials) {
  const plaintext = assembleAsegoPayload(policyData, creds);
  const encRes = await asegoEncrypt(JSON.stringify(plaintext), creds);
  if (!encRes.success || !encRes.data) return encRes;

  const res = await asegoRequest(`/ext/b2b/v1/createPolicy/${creds.partnerId}`, creds, 'POST', encRes.data);
  // B1: Strip plaintext from client result
  return { ...res, plaintext: undefined };
}

export async function cancelAsegoPolicy(policyNumber: string, creds: AsegoCredentials) {
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

  const res = await asegoRequest(`/ext/b2b/v1/policy/cancel/${creds.partnerId}`, creds, 'POST', encRes.data);
  // B1: Strip plaintext from client result
  return { ...res, plaintext: undefined };
}
