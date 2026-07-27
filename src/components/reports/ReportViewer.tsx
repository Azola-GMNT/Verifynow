"use client";

import { useVerification } from "@/context/VerificationContext";

export default function ReportViewer({
  verificationId,
}: {
  verificationId: string;
}) {
  const { verifications } = useVerification();

  const verification = verifications.find(
    (v) => v.verificationId === verificationId
  );

  if (!verification) {
    return (
      <div className="p-12">
        Report not found.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl space-y-8">

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

        <div className="flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-bold">
              Verification Report
            </h1>

            <p className="mt-2 text-slate-500">
              {verification.verificationId}
            </p>

          </div>

          <button
            className="rounded-xl bg-[#BF5000] px-6 py-3 font-semibold text-white hover:bg-[#9b4100]"
          >
            Download PDF
          </button>

        </div>

      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

        <h2 className="mb-6 text-2xl font-semibold">
          Subject
        </h2>

        <div className="grid gap-4 md:grid-cols-2">

          <Field
            label="Type"
            value={verification.subject.subjectType}
          />

          <Field
            label="Country"
            value={verification.subject.country}
          />

          <Field
            label="Display Name"
            value={
              verification.subject.displayName || "--"
            }
          />

        </div>

      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

        <h2 className="mb-6 text-2xl font-semibold">
          Overall Assessment
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          <Metric
            label="Confidence"
            value={`${verification.risk.confidenceScore}%`}
          />

          <Metric
            label="Risk"
            value={verification.risk.riskLevel}
          />

          <Metric
            label="Recommendation"
            value={
              verification.risk.recommendation ?? "--"
            }
          />

        </div>

      </div>

    </div>
  );
}

function Field({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className="text-sm text-slate-500">
        {label}
      </div>

      <div className="mt-1 text-lg font-medium">
        {value}
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className="text-sm text-slate-500">
        {label}
      </div>

      <div className="mt-2 text-3xl font-bold">
        {value}
      </div>
    </div>
  );
}