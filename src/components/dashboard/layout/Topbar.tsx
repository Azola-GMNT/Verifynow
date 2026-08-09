"use client";

import { Bell, Search } from "lucide-react";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export default function Topbar() {
  
    const { user, loading } = useCurrentUser();

  const firstName = user?.firstName?.trim();
  
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">
      <div>

        <h2 className="text-2xl font-bold">
         {loading ? "Hello 👋" : `Hello, ${firstName || "User"} 👋`}
        </h2>

        <p className="text-slate-500">
          Welcome back to VerifyNow
        </p>

      </div>

      <div className="flex items-center gap-6">

        <button className="rounded-xl bg-slate-100 p-3">
          <Search className="h-5 w-5" />
        </button>

        <button className="rounded-xl bg-slate-100 p-3">
          <Bell className="h-5 w-5" />
        </button>

      </div>

    </header>
  );
}