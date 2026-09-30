
import { NextRequest, NextResponse } from 'next/server';
import { getOperationalImpact } from '@/lib/operational/adapter';
import { UserPurpose } from '@/lib/operational/types';
import { COUNTRY_LABELS } from '@/lib/calendar-intelligence';

const SUPPORTED_PURPOSES: UserPurpose[] = ["travel", "business", "study", "workforce", "logistics"];

/**
 * Validates that a string is a valid ISO-8601 date (YYYY-MM-DD)
 * and represents a real calendar date.
 */
function isValidISODate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
  );
}

/**
 * @fileOverview Utsavs Intelligence API v1
 * 
 * Endpoint: GET /api/v1/intelligence
 * Authentication: X-API-KEY header
 */
export async function GET(req: NextRequest) {
  // 1. Authentication
  const configuredApiKey = process.env.UTSAVS_API_KEY;
  const suppliedApiKey = req.headers.get("x-api-key");

  if (!configuredApiKey) {
    return NextResponse.json(
      {
        status: "error",
        error: {
          code: "API_NOT_CONFIGURED",
          message: "API authentication is not configured."
        }
      },
      { status: 500 }
    );
  }

  if (!suppliedApiKey || suppliedApiKey !== configuredApiKey) {
    return NextResponse.json(
      {
        status: "error",
        error: {
          code: "UNAUTHORIZED",
          message: "A valid X-API-KEY header is required."
        }
      },
      { status: 401 }
    );
  }

  const { searchParams } = new URL(req.url);
  
  const rawJurisdiction = searchParams.get('jurisdiction');
  const date = searchParams.get('date');
  const rawPurpose = searchParams.get('purpose') || 'travel';

  // 2. Presence Validation
  if (!rawJurisdiction) {
    return NextResponse.json(
      { 
        status: "error",
        error: {
          code: "INVALID_JURISDICTION", 
          message: "Parameter 'jurisdiction' is required." 
        }
      }, 
      { status: 400 }
    );
  }

  if (!date) {
    return NextResponse.json(
      { 
        status: "error",
        error: {
          code: "INVALID_DATE", 
          message: "Parameter 'date' is required." 
        }
      }, 
      { status: 400 }
    );
  }

  // 3. Semantic Validation - Jurisdiction
  const jurisdiction = rawJurisdiction.trim().toUpperCase();
  if (!COUNTRY_LABELS[jurisdiction]) {
    return NextResponse.json(
      { 
        status: "error",
        error: {
          code: "INVALID_JURISDICTION", 
          message: "Unsupported jurisdiction. Use ISO 3166-1 alpha-2 country code." 
        }
      }, 
      { status: 400 }
    );
  }

  // 4. Semantic Validation - Date
  if (!isValidISODate(date)) {
    return NextResponse.json(
      { 
        status: "error",
        error: {
          code: "INVALID_DATE", 
          message: "Date must be a valid ISO calendar date in YYYY-MM-DD format." 
        }
      }, 
      { status: 400 }
    );
  }

  // 5. Semantic Validation - Purpose
  if (!SUPPORTED_PURPOSES.includes(rawPurpose as UserPurpose)) {
    return NextResponse.json(
      { 
        status: "error",
        error: {
          code: "INVALID_PURPOSE", 
          message: `Unsupported purpose. Allowed values: ${SUPPORTED_PURPOSES.join(", ")}.` 
        }
      }, 
      { status: 400 }
    );
  }
  const purpose = rawPurpose as UserPurpose;

  try {
    // 6. Query the Temporal Engine
    const result = await getOperationalImpact({
      destination: jurisdiction,
      startDate: date,
      endDate: date,
      purpose: purpose
    });

    // 7. Success Response with Cache Headers
    const response = NextResponse.json({
      status: "success",
      query: {
        jurisdiction,
        date,
        purpose
      },
      ...result
    }, { status: 200 });

    response.headers.set(
      "Cache-Control",
      "private, max-age=300, stale-while-revalidate=600"
    );

    return response;

  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { 
        status: "error",
        error: {
          code: "INTERNAL_ERROR", 
          message: "An unexpected error occurred while processing the intelligence request." 
        }
      }, 
      { status: 500 }
    );
  }
}
