import { createClient } from "@/lib/supabase/server";
import { userRepository } from "@/repositories/user.repository";
import { onboardingService } from "@/services/onboarding.service";

class ServerAuthService {
  /**
   * Get the authenticated application user from
   * the current server-side Supabase session.
   *
   * This method is intended for:
   *
   * - Route handlers
   * - Server components
   * - Server-side services
   *
   * It does NOT make an HTTP request to /api/auth/me.
   */
  async getCurrentUser() {
    console.log(
      "SERVER AUTH: getCurrentUser() STARTED"
    );

    const supabase =
      await createClient();

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) {
      console.error(
        "SERVER AUTH: SUPABASE ERROR:",
        error
      );

      return null;
    }

    if (!user) {
      console.log(
        "SERVER AUTH: NO SUPABASE USER"
      );

      return null;
    }

    console.log(
      "SERVER AUTH: SUPABASE USER:",
      user.email
    );

    let applicationUser =
      await userRepository.getByAuthId(
        user.id
      );

    if (applicationUser) {
      console.log(
        "SERVER AUTH: APPLICATION USER EXISTS"
      );

      return applicationUser;
    }

    console.log(
      "SERVER AUTH: CREATING APPLICATION USER"
    );

    applicationUser =
      await onboardingService.initialiseUser({
        id: user.id,
        email: user.email,
        email_confirmed_at:
          user.email_confirmed_at,
        user_metadata:
          user.user_metadata,
      });

    console.log(
      "SERVER AUTH: APPLICATION USER CREATED:",
      applicationUser
    );

    return applicationUser;
  }
}

export const serverAuthService =
  new ServerAuthService();