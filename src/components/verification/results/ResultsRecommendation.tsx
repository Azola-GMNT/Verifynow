interface Check {
  id: number;
}

interface ResultsRecommendationProps {
  checks: Check[];
}

export default function ResultsRecommendation({
  checks,
}: ResultsRecommendationProps) {
  // Later this will be calculated from actual results
  const confidenceScore = 96;

  const recommendation = "Proceed";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="flex items-start justify-between">

        <div>

          <h2 className="text-xl font-semibold">
            Overall Recommendation
          </h2>

          <p className="mt-2 text-slate-500">
            Based on the completed verification checks.
          </p>

        </div>

        <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
          LOW RISK
        </span>

      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2">

        <div>

          <div className="text-sm text-slate-500">
            Confidence Score
          </div>

          <div className="mt-2 text-5xl font-bold text-green-600">
            {confidenceScore}%
          </div>

        </div>

        <div>

          <div className="text-sm text-slate-500">
            Recommendation
          </div>

          <div className="mt-2 text-3xl font-bold text-slate-900">
            {recommendation}
          </div>

          <p className="mt-4 text-slate-600 leading-7">

            All selected verification checks completed successfully.

            <br />

            No adverse findings were identified.

            <br />

            The subject can proceed through the onboarding process.

          </p>

        </div>

      </div>

    </div>
  );
}