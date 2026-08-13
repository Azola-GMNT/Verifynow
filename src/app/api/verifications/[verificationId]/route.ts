import { NextRequest, NextResponse } from "next/server";

import { verificationService } from "@/services/verificationService";

interface RouteContext {
  params: Promise<{
    verificationId: string;
  }>;
}

export async function GET(
  _request: NextRequest,
  context: RouteContext
) {
  try {
    const { verificationId } =
      await context.params;

    const verification =
      await verificationService.getVerificationCase(
        verificationId
      );

    if (!verification) {
      return NextResponse.json(
        {
          error: "Verification case not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(verification);
  } catch (error) {
    console.error(
      "Failed to retrieve verification:",
      error
    );

    return NextResponse.json(
      {
        error: "Failed to retrieve verification",
      },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  context: RouteContext
) {
  try {
    const { verificationId } =
      await context.params;

    const updates =
      await request.json();

    const updated =
      await verificationService.updateVerificationCase(
        verificationId,
        updates
      );

    if (!updated) {
      return NextResponse.json(
        {
          error: "Verification case not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(updated);
  } catch (error) {
    console.error(
      "Failed to update verification:",
      error
    );

    return NextResponse.json(
      {
        error: "Failed to update verification",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: NextRequest,
  context: RouteContext
) {
  try {
    const { verificationId } =
      await context.params;

    await verificationService.deleteVerificationCase(
      verificationId
    );

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(
      "Failed to delete verification:",
      error
    );

    return NextResponse.json(
      {
        error: "Failed to delete verification",
      },
      { status: 500 }
    );
  }
}