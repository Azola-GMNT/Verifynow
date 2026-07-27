"use client";

import { VerificationRisk } from "@/types/verification";

interface Props {
  risk: VerificationRisk;
}

export default function RiskAssessmentCard({
  risk,
}: Props) {
  const riskColour = {
    Low: "bg-green-100 text-green-700",
    Medium: "bg-yellow-100 text-yellow-700",
    High: "bg-red-100 text-red-700",
    Unknown: "bg-slate-100 text-slate-700",
  };

  const recommendationColour = {
    Proceed: "bg-green-100 text-green-700",
    Review: "bg-yellow-100 text-yellow-700",
    Reject: "bg-red-100 text-red-700",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-8 text-xl font-semibold">
        Risk Assessment
      </h2>

      <div className="grid gap-6 md:grid-cols-3">

        <Metric
          label="Confidence Score"
          value={`${risk.confidenceScore ?? "--"}%`}
        />

        <div>

          <div className="text-sm text-slate-500">
            Risk Level
          </div>

          <span
            className={`mt-2 inline-block rounded-full px-4 py-2 text-sm font-semibold ${
              riskColour[risk.riskLevel]
            }`}
          >
            {risk.riskLevel}
          </span>

        </div>

        <div>

          <div className="text-sm text-slate-500">
            Recommendation
          </div>

          <span
            className={`mt-2 inline-block rounded-full px-4 py-2 text-sm font-semibold ${
              risk.recommendation
                ? recommendationColour[
                    risk.recommendation
                  ]
                : "bg-slate-100 text-slate-600"
            }`}
          >
            {risk.recommendation ?? "--"}
          </span>

        </div>

      </div>

      <div className="mt-8 rounded-xl bg-slate-50 p-5">

        <h3 className="mb-3 font-semibold">
          Assessment Summary
        </h3>

        <ul className="space-y-2 text-sm text-slate-600">

          <li>
            • Verification confidence has been calculated
            from all completed provider responses.
          </li>

          <li>
            • Risk level reflects the overall verification
            outcome.
          </li>

          <li>
            • Recommendation indicates whether this case
            should proceed, be reviewed, or be rejected.
          </li>

        </ul>

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