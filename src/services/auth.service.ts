import { createClient } from "@/lib/supabase/browser";
import { userRepository } from "@/repositories/user.repository";

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

    return await userRepository.getByAuthId(authUser.id);
  }

  async getSession() {
    const {
      data: { session },
    } = await this.supabase.auth.getSession();

    return session;
  }
}

export const authService = new AuthService();