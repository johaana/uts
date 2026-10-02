'use server';

/**
 * @fileOverview Asego API Implementation - Production-Ready Transactional Layer v6.1
 * PII Protection: Plaintext payloads are NEVER returned to the client or logged without debug gating.
 * Trace History: Every response includes an actionLabel and execution timestamp.
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
  actionLabel: string;
  timestamp: string;
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
  if (!/^[A-Za-z0-9]{6,12}$/.test(t.passport)) errors.push("Invalid passport format.");
  if (!/^\d{10}$/.test(t.mobileNo)) errors.push("Mobile number must be 10 digits.");
  if (!/^\S+@\S+\.\S+$/.test(t.email)) errors.push("Invalid email format.");
  if (!t.pincode || !/^\d{6}$/.test(t.pincode)) errors.push("Invalid pincode (6 digits).");
  return errors;
}

/**
 * Hardened Fetch Wrapper with PII protection and verbatim tracing.
 */
async function asegoRequest(
  path: string, 
  creds: AsegoCredentials,
  method: string = 'GET',
  body: any = null,
  actionLabel: string = 'UNSPECIFIED'
): Promise<ActionResponse> {
  const sign = creds?.sign || process.env.UTSAVS_SIGN;
  const ref = creds?.reference || process.env.UTSAVS_REFERENCE;

  if (!sign || !ref) {
    throw new Error("Asego credentials (Sign/Reference) are missing.");
  }

  const fullUrl = `${BASE_URL}${path}`;
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
      // Fix for "Unexpected response" crash: handle empty [] or raw text gracefully
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
      headersSent: { 'Sign': '********', 'Reference': '********' },
      actionLabel,
      timestamp
    };
  } catch (err: any) {
    console.error("ASEGO_REQUEST_FAILURE:", {
      fullUrl,
      method,
      actionLabel,
      errorName: err?.name,
      errorMessage: err?.message,
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
  
  return asegoRequest('/ext/b2b/v1/encryption/encrypt', creds, 'POST', { value, key, initVector }, 'ENCRYPT');
}

function assembleAsegoPayload(payload: any, creds: AsegoCredentials) {
  const premium = Number(payload.premium);
  const pId = creds.partnerId || process.env.UTSAVS_PARTNER_ID;

  const data = [
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
          // v5.7: Corrected to OBJECT structure based on forensic audit
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

  if (process.env.UTSAVS_INTERNAL_DEBUG === 'true') {
    // Audit-only logging: No PII returned to browser, but visible in server console
    console.log("UTSAVS_FORENSIC_PLAINTEXT_PAYLOAD:", JSON.stringify(data, null, 2));
  }

  return data;
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
  const partnerId = creds.partnerId || process.env.UTSAVS_PARTNER_ID;
  const plaintext = assembleAsegoPayload(policyData, creds);
  const encRes = await asegoEncrypt(JSON.stringify(plaintext), creds);
  if (!encRes.success || !encRes.data) return encRes;

  const res = await asegoRequest(`/ext/b2b/v1/createPolicy/${partnerId}`, creds, 'POST', encRes.data, 'ISSUE_POLICY');
  return { ...res, data: res.data?.code ? { ...res.data, msg: userFacingError(res.data.code) } : res.data };
}

export async function cancelAsegoPolicy(policyNumber: string, creds: AsegoCredentials) {
  // B4: Server-side gating for the Manual Void Utility
  if (process.env.UTSAVS_INTERNAL_DEBUG !== 'true') {
    throw new Error("UNAUTHORIZED: Manual cancellation utility is restricted to debug mode.");
  }

  const partnerId = creds.partnerId || process.env.UTSAVS_PARTNER_ID;
  const plaintext = [{
    identity: {
      sign: creds.sign || process.env.UTSAVS_SIGN,
      reference: creds.reference || process.env.UTSAVS_REFERENCE,
      partnerId: partnerId
    },
    policyNumber
  }];

  const encRes = await asegoEncrypt(JSON.stringify(plaintext), creds);
  if (!encRes.success || !encRes.data) return encRes;

  const res = await asegoRequest(`/ext/b2b/v1/policy/cancel/${partnerId}`, creds, 'POST', encRes.data, 'VOID_POLICY');
  return { ...res, data: res.data?.code ? { ...res.data, msg: userFacingError(res.data.code) } : res.data };
}
