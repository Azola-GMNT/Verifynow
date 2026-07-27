"use client";

import type { VerificationCheck } from "@/data/verificationChecks";

interface ReviewChecksCardProps {
  checks: VerificationCheck[];
}

export default function ReviewChecksCard({
  checks,
}: ReviewChecksCardProps) {
  const totalDuration = checks.reduce(
    (sum, check) => sum + check.estimatedDurationSeconds,
    0
  );

  const totalCost = checks.reduce(
    (sum, check) => sum + check.internalCost,
    0
  );

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">

      <h3 className="mb-6 text-xl font-semibold">
        Verification Summary
      </h3>

      <div className="space-y-4">

        {checks.map((check) => (

          <div
            key={check.id}
            className="flex items-start justify-between border-b pb-4 last:border-0"
          >

            <div>

              <p className="font-medium">
                ✓ {check.name}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                {check.group} • {check.estimatedDurationSeconds} sec
              </p>

            </div>

            <div className="font-medium">
              R {check.internalCost.toFixed(2)}
            </div>

          </div>

        ))}

      </div>

      <div className="mt-6 border-t pt-6 space-y-2">

        <div className="flex justify-between">
          <span>Total Checks</span>
          <span>{checks.length}</span>
        </div>

        <div className="flex justify-between">
          <span>Estimated Duration</span>
          <span>{totalDuration} sec</span>
        </div>

        <div className="flex justify-between font-semibold">
          <span>Estimated Cost</span>
          <span>R {totalCost.toFixed(2)}</span>
        </div>

      </div>

    </div>
  );
}