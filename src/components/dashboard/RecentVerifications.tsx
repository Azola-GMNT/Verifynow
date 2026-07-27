"use client";

import Link from "next/link";

import { useVerification } from "@/context/VerificationContext";

import VerificationRow from "./VerificationRow";

export default function RecentVerifications() {
  const { verifications } = useVerification();

  const recentVerifications = verifications.slice(0, 5);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">

      <div className="flex items-center justify-between border-b border-slate-200 p-6">

        <div>
          <h2 className="text-xl font-semibold">
            Recent Verifications
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Your latest verification cases
          </p>
        </div>

        <Link
          href="/verifications"
          className="font-medium text-[#BF5000] hover:underline"
        >
          View All →
        </Link>

      </div>

      {recentVerifications.length === 0 ? (
        <div className="p-10 text-center text-slate-500">
          No verification cases yet.
        </div>
      ) : (
        recentVerifications.map((verification) => (
          <VerificationRow
            key={verification.verificationId}
            verification={verification}
          />
        ))
      )}

    </div>
  );
}