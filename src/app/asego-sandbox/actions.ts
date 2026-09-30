'use server';

/**
 * @fileOverview Asego API Server Actions
 * Handles the secure communication with Asego UAT servers.
 */

export async function testAsegoConnection(formData: FormData) {
  const partnerId = formData.get('partnerId') as string;
  const secretKey = formData.get('secretKey') as string; // Future-proofing for encryption
  const duration = formData.get('duration') as string || "10";
  const age = formData.get('age') as string || "30";
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
        'User-Agent': 'Utsavs-Sandbox/1.0',
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      const errorText = await response.text();
      return { 
        success: false, 
        status: response.status, 
        message: `API Error: ${response.statusText}`,
        raw: errorText 
      };
    }

    const data = await response.json();
    return { success: true, data };

  } catch (error: any) {
    return { success: false, message: error.message || "Connection failed." };
  }
}
