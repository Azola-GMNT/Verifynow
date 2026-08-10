import { createClient } from "@/lib/supabase/browser";
import { userRepository } from "@/repositories/user.repository";
import { onboardingService } from "@/services/onboarding.service";

export class AuthService {
  private supabase = createClient();

  async signIn(email: string, password: string) {
    return this.supabase.auth.signInWithPassword({
      email,
      password,
    });
  }

  async signOut() {
    return this.supabase.auth.signOut();
  }

  async getSupabaseUser() {
    const {
      data: { user },
    } = await this.supabase.auth.getUser();

    return user;
  }

  async getCurrentUser() {
    const authUser = await this.getSupabaseUser();

    if (!authUser) {
      return null;
    }

    // Check whether the application user already exists
    const existingUser = await userRepository.getByAuthId(
      authUser.id
    );

    // If the Supabase user exists but the application
    // user does not, initialise the application user.
    if (!existingUser) {
      return await onboardingService.initialiseUser({
        id: authUser.id,
        email: authUser.email,
        user_metadata: authUser.user_metadata,
      });
    }

    return existingUser;
  }

  async getSession() {
    const {
      data: { session },
    } = await this.supabase.auth.getSession();

    return session;
  }
}

export const authService = new AuthService();