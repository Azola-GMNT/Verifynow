"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import AuthLayout from "@/components/auth/AuthLayout";
import { supabase } from "@/lib/supabase";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ResetPasswordPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    async function initialiseRecoverySession() {
      try {
        console.log(
          "RESET PASSWORD: INITIALISING RECOVERY SESSION"
        );

        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();

        if (error) {
          console.error(
            "RESET PASSWORD: SESSION ERROR:",
            error
          );

          setError(
            "Your password reset link could not be verified."
          );

          setLoading(false);
          return;
        }

        if (!session) {
          console.error(
            "RESET PASSWORD: NO RECOVERY SESSION"
          );

          setError(
            "This password reset link is invalid or has expired. Please request a new reset link."
          );

          setLoading(false);
          return;
        }

        console.log(
          "RESET PASSWORD: RECOVERY SESSION FOUND"
        );

        setLoading(false);
      } catch (err) {
        console.error(
          "RESET PASSWORD: INITIALISATION FAILED:",
          err
        );

        setError(
          "Unable to initialise the password reset."
        );

        setLoading(false);
      }
    }

    initialiseRecoverySession();
  }, []);

  async function handleResetPassword(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setError("");

    if (password.length < 8) {
      setError(
        "Your password must be at least 8 characters long."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("The passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      console.log(
        "RESET PASSWORD: UPDATING PASSWORD"
      );

      const { error } =
        await supabase.auth.updateUser({
          password,
        });

      if (error) {
        console.error(
          "PASSWORD RESET ERROR:",
          error
        );

        setError(error.message);
        setLoading(false);
        return;
      }

      console.log(
        "PASSWORD RESET SUCCESSFUL"
      );

      setSuccess(true);
      setLoading(false);

      setTimeout(() => {
        router.push("/login");
        router.refresh();
      }, 2000);
    } catch (err) {
      console.error(
        "PASSWORD RESET FAILED:",
        err
      );

      setError(
        "Something went wrong while resetting your password."
      );

      setLoading(false);
    }
  }

  if (loading) {
    return (
      <AuthLayout
        title="Reset Your Password"
        subtitle="Verifying your password reset link..."
      >
        <Card className="rounded-3xl shadow-lg">
          <CardContent className="p-10 text-center">
            <p className="text-slate-600">
              Please wait...
            </p>
          </CardContent>
        </Card>
      </AuthLayout>
    );
  }

  if (success) {
    return (
      <AuthLayout
        title="Password Updated"
        subtitle="Your VerifyNow password has been successfully changed."
      >
        <Card className="rounded-3xl shadow-lg">
          <CardContent className="p-10 text-center">
            <div className="space-y-5">
              <h2 className="text-2xl font-bold text-slate-900">
                Password successfully updated
              </h2>

              <p className="text-slate-600">
                Your password has been changed.
              </p>

              <p className="text-sm text-slate-500">
                Redirecting you to the login page...
              </p>
            </div>
          </CardContent>
        </Card>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="Reset Your Password"
      subtitle="Create a new password for your VerifyNow account."
    >
      <Card className="rounded-3xl shadow-lg">
        <CardContent className="p-10">
          <form
            onSubmit={handleResetPassword}
            className="space-y-5"
          >
            <Input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              disabled={loading}
            />

            <Input
              type="password"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              disabled={loading}
            />

            <p className="text-sm text-slate-500">
              Your password must be at least 8 characters long.
            </p>

            {error && (
              <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </p>
            )}

            {!error && (
              <Button
                type="submit"
                disabled={loading}
                className="h-12 w-full bg-[#BF5000] hover:bg-[#a84600]"
              >
                {loading
                  ? "Updating Password..."
                  : "Update Password"}
              </Button>
            )}

            {error && (
              <Button
                type="button"
                onClick={() =>
                  router.push("/forgot-password")
                }
                className="h-12 w-full bg-[#BF5000] hover:bg-[#a84600]"
              >
                Request New Reset Link
              </Button>
            )}
          </form>
        </CardContent>
      </Card>
    </AuthLayout>
  );
}