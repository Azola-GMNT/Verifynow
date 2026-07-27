"use client";

import { useState } from "react";
import Link from "next/link";

import { supabase } from "@/lib/supabase";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleReset(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    setSuccess(true);
  }

  return (
    <Card className="rounded-3xl shadow-lg">
      <CardContent className="p-10">

        {success ? (

          <div className="space-y-6 text-center">

            <h3 className="text-2xl font-bold text-slate-900">
              Check your email
            </h3>

            <p className="text-slate-600">
              We've sent a password reset link to your email address.
            </p>

            <Link
              href="/login"
              className="font-semibold text-[#BF5000]"
            >
              Back to Login
            </Link>

          </div>

        ) : (

          <form
            onSubmit={handleReset}
            className="space-y-5"
          >

            <Input
              type="email"
              placeholder="Business Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {error && (
              <p className="text-sm text-red-500">
                {error}
              </p>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-[#BF5000] hover:bg-[#a84600]"
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </Button>

          </form>

        )}

      </CardContent>
    </Card>
  );
}