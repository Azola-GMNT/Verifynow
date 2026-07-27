"use client";

import { VerificationCase } from "@/types/verification";

export default function WorkspaceHeader({
  verification,
}: {
  verification: VerificationCase;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div className="text-sm text-slate-500">
            Verification ID
          </div>

          <h1 className="mt-1 text-3xl font-bold tracking-wide">
            {verification.verificationId}
          </h1>

          <p className="mt-3 text-slate-500">
            Created{" "}
            {new Date(
              verification.timeline.createdAt
            ).toLocaleString()}
          </p>

        </div>

        <div className="flex flex-wrap gap-3">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            {verification.status}
          </span>

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            {verification.risk.riskLevel} Risk
          </span>

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            {verification.risk.confidenceScore ?? "--"}%
            Confidence
          </span>

        </div>

      </div>

    </div>
  );
}