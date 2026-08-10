"use client";

import { VerificationResult } from "@/types/verification";

interface Props {
  results: VerificationResult[];
}

export default function VerificationResultsCard({
  results,
}: Props) {
  if (results.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <h2 className="mb-6 text-xl font-semibold">
          Verification Results
        </h2>

        <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-slate-400">
          No verification results available.
        </div>

      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-xl font-semibold">
          Verification Results
        </h2>

        <span className="text-sm text-slate-500">
          {results.length} Checks
        </span>

      </div>

      <div className="space-y-4">

        {results.map((result) => (

          <ResultRow
            key={result.checkId}
            result={result}
          />

        ))}

      </div>

    </div>
  );
}

function ResultRow({
  result,
}: {
  result: VerificationResult;
}) {
  const colours = {
  PASSED: "bg-green-100 text-green-700",
  FAILED: "bg-red-100 text-red-700",
  WARNING: "bg-yellow-100 text-yellow-700",
  ERROR: "bg-red-100 text-red-700",
  PENDING: "bg-slate-100 text-slate-700",
  PENDING_PROVIDER: "bg-yellow-100 text-yellow-700",
  RUNNING: "bg-blue-100 text-blue-700",
};

  return (
    <div className="rounded-xl border border-slate-200 p-5">

      <div className="flex items-center justify-between">

        <div>

          <h3 className="font-semibold">
            {result.checkName}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {result.message}
          </p>

        </div>

        <span
          className={`rounded-full px-4 py-2 text-sm font-semibold ${colours[result.status]}`}
        >
          {result.status}
        </span>

      </div>

      <div className="mt-5">

        <div className="mb-2 flex justify-between text-sm">

          <span className="text-slate-500">
            Confidence
          </span>

          <span className="font-semibold">
            {result.score}%
          </span>

        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-200">

          <div
            className="h-full rounded-full bg-[#BF5000]"
            style={{
              width: `${result.score}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
}