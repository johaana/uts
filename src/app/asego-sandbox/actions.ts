'use server';

/**
 * @fileOverview Asego API Server Actions
 * Handles secure communication and encryption testing for Asego UAT.
 */

import crypto from 'crypto';

export async function testAsegoConnection(formData: FormData) {
  const partnerId = formData.get('partnerId') as string;
  const duration = formData.get('duration') as string || "30";
  const age = formData.get('age') as string || "20";
  const category = formData.get('category') as string || "1";

  if (!partnerId) {
    return { error: "Partner ID is required for testing." };
  }

  const baseUrl = "https://dolphin.asego.in/api";
  const endpoint = `${baseUrl}/ext/b2b/v1/plan/${partnerId}?duration=${duration}&age=${age}&category=${category}`;

  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'External API/1.0',
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      const errorText = await response.text();
      return { 
        success: false, 
        status: response.status, 
        message: `API Error: ${response.statusText}`,
        endpoint,
        raw: errorText 
      };
    }

    const data = await response.json();
    return { 
      success: true, 
      data, 
      status: response.status,
      endpoint,
      isEmpty: Array.isArray(data) && data.length === 0 
    };

  } catch (error: any) {
    return { 
      success: false, 
      message: error.message || "Connection failed.",
      endpoint 
    };
  }
}

export async function fetchAsegoCategories() {
  const endpoint = "https://dolphin.asego.in/api/ext/b2b/v1/category";
  try {
    const response = await fetch(endpoint, {
      headers: { 
        'Accept': 'application/json',
        'User-Agent': 'External API/1.0'
      },
      cache: 'no-store'
    });
    return await response.json();
  } catch (e) {
    return { error: "Failed to fetch categories" };
  }
}

/**
 * Simulation of the Asego Encryption Requirement
 * Uses AES-256-CBC as per typical B2B insurance specs
 */
export async function testEncryption(text: string, secretKey: string, iv: string) {
  try {
    if (!text || !secretKey || !iv) return { error: "All fields required for encryption test." };
    
    // Ensure key and IV are correct lengths (Asego usually expects 16/32 byte buffers)
    const key = Buffer.from(secretKey.padEnd(32, '0')).slice(0, 32);
    const ivBuffer = Buffer.from(iv.padEnd(16, '0')).slice(0, 16);
    
    const cipher = crypto.createCipheriv('aes-256-cbc', key, ivBuffer);
    let encrypted = cipher.update(text, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    
    return { 
      success: true, 
      original: text,
      encrypted,
      algorithm: 'aes-256-cbc',
      note: "This is a local simulation. Asego's exact implementation may vary (e.g., PKCS7 padding)."
    };
  } catch (e: any) {
    return { error: e.message };
  }
}
