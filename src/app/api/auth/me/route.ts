import { NextResponse } from "next/server";

import { serverAuthService } from "@/services/serverAuth.service";

export async function GET() {
  try {
    console.log(
      "API AUTH ME: STARTED"
    );

    const user =
      await serverAuthService.getCurrentUser();

    if (!user) {
      return NextResponse.json(
        {
          error:
            "Not authenticated",
        },
        {
          status: 401,
        }
      );
    }

    console.log(
      "API AUTH ME: APPLICATION USER EXISTS"
    );

    return NextResponse.json(
      user
    );
  } catch (error) {
    console.error(
      "API AUTH ME: FATAL ERROR:",
      error
    );

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to initialise user",
      },
      {
        status: 500,
      }
    );
  }
}