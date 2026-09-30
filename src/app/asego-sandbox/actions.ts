'use server';

/**
 * @fileOverview Asego API Server Actions
 * Handles the secure communication with Asego UAT servers.
 */

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
        // Exact User-Agent as specified in Asego Swagger documentation
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
