'use server';

/**
 * @fileOverview Asego API Customer-Facing Server Actions
 * Handles verified custom header strategy for read-only plan discovery.
 */

const BASE_URL = "https://dolphin.asego.in/api";

interface AsegoCredentials {
  partnerId: string;
  sign: string;
  reference: string;
}

/**
 * Generic Fetch Wrapper for Customer Flow
 * Ensures all credential-bearing requests remain server-side.
 */
async function asegoRequest(
  path: string, 
  creds: AsegoCredentials
) {
  if (!creds.partnerId || !creds.sign || !creds.reference) {
    throw new Error("Missing UAT Credentials");
  }

  const endpoint = `${BASE_URL}${path}`;
  
  const headers: Record<string, string> = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Sign': creds.sign,
    'Reference': creds.reference,
  };

  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers,
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`Asego API Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Asego Action Failure:", error);
    throw error;
  }
}

/**
 * Fetches available regions/categories for the partner
 */
export async function getAsegoCategories(creds: AsegoCredentials) {
  return asegoRequest('/ext/b2b/v1/category', creds);
}

/**
 * Fetches specific plans based on trip parameters
 */
export async function getAsegoPlans(creds: AsegoCredentials, params: { age: string, duration: string, categoryId: string }) {
  const path = `/ext/b2b/v1/plan/${creds.partnerId}?duration=${params.duration}&age=${params.age}&category=${params.categoryId}`;
  return asegoRequest(path, creds);
}
