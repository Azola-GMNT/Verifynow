"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { authService } from "@/services/auth.service";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const { error } = await authService.signIn(
      email,
      password
    );

    if (error) {
      console.error("LOGIN ERROR:", error);

      setError(
        error.message || "Incorrect email or password."
      );

      setLoading(false);
      return;
    }

    // Authentication successful
    router.push("/dashboard");
    router.refresh();
  }

  return (
    <Card className="rounded-3xl shadow-lg">
      <CardContent className="p-10">
        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >
          <Input
            type="email"
            placeholder="Business Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            disabled={loading}
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            disabled={loading}
          />

          {error && (
            <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </p>
          )}

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input
                type="checkbox"
                className="accent-[#BF5000]"
                disabled={loading}
              />
              Remember Me
            </label>

            <Link
              href="/forgot-password"
              className="text-sm text-[#BF5000] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="h-12 w-full bg-[#BF5000] hover:bg-[#a84600]"
          >
            {loading ? "Logging In..." : "Login"}
          </Button>

          <p className="text-center text-sm text-slate-600">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-[#BF5000]"
            >
              Register
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}