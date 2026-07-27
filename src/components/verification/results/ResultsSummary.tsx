interface ResultsSummaryProps {
  subjectType: "individual" | "organisation";
  country: string;
  verificationCount: number;
}

export default function ResultsSummary({
  subjectType,
  country,
  verificationCount,
}: ResultsSummaryProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-xl font-semibold text-slate-900">
        Verification Summary
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">

        <div>
          <p className="text-sm text-slate-500">
            Subject Type
          </p>

          <p className="mt-1 font-semibold text-slate-900 capitalize">
            {subjectType}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Country
          </p>

          <p className="mt-1 font-semibold text-slate-900">
            {country}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Verification Checks
          </p>

          <p className="mt-1 font-semibold text-slate-900">
            {verificationCount}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Processing Time
          </p>

          <p className="mt-1 font-semibold text-slate-900">
            18 sec
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Confidence Score
          </p>

          <p className="mt-1 text-xl font-bold text-green-600">
            96%
          </p>
        </div>

      </div>

    </div>
  );
}