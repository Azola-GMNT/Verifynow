import { NextResponse } from "next/server";

import { createClient } from "@/lib/supabase/server";
import { userRepository } from "@/repositories/user.repository";
import { onboardingService } from "@/services/onboarding.service";

export async function GET() {
  try {
    console.log("API AUTH ME: STARTED");

    const supabase = await createClient();

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) {
      console.error(
        "API AUTH ME: SUPABASE ERROR:",
        error
      );

      return NextResponse.json(
        { error: error.message },
        { status: 401 }
      );
    }

    if (!user) {
      console.log("API AUTH ME: NO AUTH USER");

      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 }
      );
    }

    console.log(
      "API AUTH ME: SUPABASE USER:",
      user.email
    );

    const existingUser =
      await userRepository.getByAuthId(user.id);

      console.log(
  "API AUTH ME: DATABASE LOOKUP COMPLETED:",
  existingUser
);

    console.log(
      "API AUTH ME: EXISTING APPLICATION USER:",
      existingUser
    );

    if (existingUser) {
      console.log(
        "API AUTH ME: APPLICATION USER EXISTS"
      );

      return NextResponse.json(existingUser);
    }

    console.log(
      "API AUTH ME: CREATING APPLICATION USER"
    );

    const applicationUser =
      await onboardingService.initialiseUser({
        id: user.id,
        email: user.email,
        email_confirmed_at: user.email_confirmed_at,
        user_metadata: user.user_metadata,
      });

    console.log(
      "API AUTH ME: APPLICATION USER CREATED:",
      applicationUser
    );

    return NextResponse.json(applicationUser);
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
      { status: 500 }
    );
  }
}