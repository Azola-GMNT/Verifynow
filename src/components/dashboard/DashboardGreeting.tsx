"use client";

import { useCurrentUser } from "@/hooks/useCurrentUser";

export default function DashboardGreeting() {
  const { user, loading } = useCurrentUser();

  if (loading) {
    return (
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Hello, ... 👋
        </h1>

        <p className="mt-1 text-slate-500">
          Welcome back to VerifyNow
        </p>
      </div>
    );
  }

  const firstName = user?.firstName?.trim() || "there";

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900">
        Hello, {firstName} 👋
      </h1>

      <p className="mt-1 text-slate-500">
        Welcome back to VerifyNow
      </p>
    </div>
  );
}