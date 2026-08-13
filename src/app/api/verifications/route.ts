import { NextRequest, NextResponse } from "next/server";

import { verificationService } from "@/services/verificationService";

export async function GET() {
  try {
    const verifications =
      await verificationService.getAllVerificationCases();

    return NextResponse.json(verifications);
  } catch (error) {
    console.error(
      "Failed to retrieve verification cases:",
      error
    );

    return NextResponse.json(
      {
        error: "Failed to retrieve verification cases",
      },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest
) {
  try {
    const verification =
      await request.json();

    const created =
      await verificationService.createVerificationCase(
        verification
      );

    return NextResponse.json(created, {
      status: 201,
    });
  } catch (error) {
    console.error(
      "Failed to create verification case:",
      error
    );

    return NextResponse.json(
      {
        error: "Failed to create verification case",
      },
      { status: 500 }
    );
  }
}