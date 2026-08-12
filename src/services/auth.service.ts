import { createClient } from "@/lib/supabase/browser";

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
    console.log(
      "AUTH SERVICE: getCurrentUser() STARTED"
    );

    const response = await fetch("/api/auth/me", {
      method: "GET",
      credentials: "include",
    });

    console.log(
      "AUTH SERVICE: /api/auth/me STATUS:",
      response.status
    );

    if (!response.ok) {
      const errorData = await response
        .json()
        .catch(() => null);

      console.error(
        "AUTH SERVICE: /api/auth/me ERROR:",
        errorData
      );

      return null;
    }

    const applicationUser =
      await response.json();

    console.log(
      "AUTH SERVICE: APPLICATION USER:",
      applicationUser
    );

    return applicationUser;
  }

  async getSession() {
    const {
      data: { session },
    } = await this.supabase.auth.getSession();

    return session;
  }
}

export const authService =
  new AuthService();