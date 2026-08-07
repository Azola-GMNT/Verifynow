import { NextRequest, NextResponse } from "next/server";

import { authService } from "@/services/auth.service";
import { userPreferencesService } from "@/services/user-preferences.service";

export async function GET() {
  const user = await authService.getCurrentUser();

  if (!user) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const preferences =
    await userPreferencesService.getPreferences(user.id);

  return NextResponse.json(preferences);
}

export async function PUT(request: NextRequest) {
  const user = await authService.getCurrentUser();

  if (!user) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const body = await request.json();

  const updated =
    await userPreferencesService.savePreferences(
      user.id,
      body
    );

  return NextResponse.json(updated);
}