import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);

  const code = searchParams.get("code");
  const next = searchParams.get("next") || "/reset-password";

  if (!code) {
    return NextResponse.redirect(
      `${origin}/forgot-password?error=invalid_reset_link`
    );
  }

  const supabase = await createClient();

  const { error } =
    await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    console.error(
      "AUTH CALLBACK: CODE EXCHANGE FAILED:",
      error
    );

    return NextResponse.redirect(
      `${origin}/forgot-password?error=reset_link_expired`
    );
  }

  console.log(
    "AUTH CALLBACK: RECOVERY SESSION CREATED"
  );

  return NextResponse.redirect(
    `${origin}${next}`
  );
}