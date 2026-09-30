
import { NextRequest, NextResponse } from 'next/server';
import { getOperationalImpact } from '@/lib/operational/adapter';
import { UserPurpose } from '@/lib/operational/types';

/**
 * @fileOverview Utsavs Intelligence API v1
 * 
 * Endpoint: GET /api/v1/intelligence
 * Parameters:
 *  - jurisdiction (required): ISO 3166-1 alpha-2 country code (e.g., IN)
 *  - date (required): ISO-8601 date string (e.g., 2026-11-08)
 *  - purpose (optional): travel | business | study | workforce | logistics (default: travel)
 */

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  
  const jurisdiction = searchParams.get('jurisdiction');
  const date = searchParams.get('date');
  const purpose = (searchParams.get('purpose') || 'travel') as UserPurpose;

  // 1. Validation
  if (!jurisdiction || !date) {
    return NextResponse.json(
      { 
        error: "Missing required parameters", 
        message: "Both 'jurisdiction' and 'date' are required." 
      }, 
      { status: 400 }
    );
  }

  // Basic date format validation (YYYY-MM-DD)
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(date)) {
    return NextResponse.json(
      { 
        error: "Invalid date format", 
        message: "Date must be in ISO-8601 format (YYYY-MM-DD)." 
      }, 
      { status: 400 }
    );
  }

  try {
    // 2. Query the Temporal Engine
    // We map 'jurisdiction' to 'destination' and use the same date for start/end for a point-in-time check.
    const result = await getOperationalImpact({
      destination: jurisdiction.toUpperCase(),
      startDate: date,
      endDate: date,
      purpose: purpose
    });

    // 3. Return the Materialized Result
    return NextResponse.json({
      status: "success",
      query: {
        jurisdiction: jurisdiction.toUpperCase(),
        date,
        purpose
      },
      ...result
    });

  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { 
        error: "Internal Server Error", 
        message: "An unexpected error occurred while processing the intelligence request." 
      }, 
      { status: 500 }
    );
  }
}
