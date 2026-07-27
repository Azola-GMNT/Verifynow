"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function VerificationHistoryHeader() {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:flex-row lg:items-center lg:justify-between">

      <div>

        <h1 className="text-3xl font-bold text-slate-900">
          Verification History
        </h1>

        <p className="mt-2 text-slate-500">
          View and manage all verification requests.
        </p>

      </div>

      <Link href="/verifications/new">

        <Button
          className="bg-[#BF5000] hover:bg-[#A84700]"
        >
          + New Verification
        </Button>

      </Link>

    </div>
  );
}