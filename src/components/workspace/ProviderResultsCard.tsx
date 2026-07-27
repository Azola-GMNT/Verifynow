"use client";

import { ProviderResult } from "@/types/verification";

interface Props {
  providers: ProviderResult[];
}

export default function ProviderResultsCard({
  providers,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-xl font-semibold">
          Provider Results
        </h2>

        <span className="text-sm text-slate-500">
          {providers.length} Providers
        </span>

      </div>

      {providers.length === 0 ? (

        <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-slate-400">

          No provider responses available.

        </div>

      ) : (

        <div className="space-y-4">

          {providers.map((provider) => (

            <div
              key={provider.providerName}
              className="rounded-xl border border-slate-200 p-5"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="font-semibold">
                    {provider.providerName}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {provider.findings}
                  </p>

                </div>

                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${
                    provider.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {provider.status}
                </span>

              </div>

              <div className="mt-5 grid grid-cols-2 gap-6 md:grid-cols-4">

                <Metric
                  label="Confidence"
                  value={`${provider.confidence}%`}
                />

                <Metric
                  label="Response Time"
                  value={`${provider.responseTime}s`}
                />

              </div>

            </div>

          ))}

        </div>

      )}

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

      <div className="text-xs uppercase tracking-wide text-slate-500">
        {label}
      </div>

      <div className="mt-1 text-lg font-semibold">
        {value}
      </div>

    </div>
  );
}