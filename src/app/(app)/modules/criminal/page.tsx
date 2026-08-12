"use client";

import { useState } from "react";
import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";

const criminalChecks = [
  {
    id: "criminal-record",
    title: "Criminal Record Check",
    description: "Search available criminal records for the individual.",
  },
  {
    id: "court-records",
    title: "Court Records",
    description: "Search available court and judgment records.",
  },
  {
    id: "watchlist",
    title: "Watchlist Screening",
    description: "Screen the individual against relevant watchlists.",
  },
  {
    id: "sanctions",
    title: "Sanctions Screening",
    description: "Screen against applicable sanctions databases.",
  },
];

export default function CriminalModulePage() {
  const [selectedChecks, setSelectedChecks] = useState<string[]>([]);

  function toggleCheck(id: string) {
    setSelectedChecks((current) =>
      current.includes(id)
        ? current.filter((checkId) => checkId !== id)
        : [...current, id]
    );
  }

  function selectAll() {
    setSelectedChecks(criminalChecks.map((check) => check.id));
  }

  function clearAll() {
    setSelectedChecks([]);
  }

  function startVerification() {
    if (selectedChecks.length === 0) return;

    window.location.href = `/verifications/new?checks=${selectedChecks.join(",")}`;
  }

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl">
        <div>
          <p className="text-sm font-medium text-[#BF5000]">
            Verification Module
          </p>

          <h1 className="mt-1 text-2xl font-semibold text-slate-900">
            Criminal Verification
          </h1>

          <p className="mt-2 max-w-2xl text-sm text-slate-500">
            Select the criminal and screening checks you want to perform.
          </p>
        </div>

        <div className="mt-6 flex flex-col justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-slate-900">
              {selectedChecks.length} of {criminalChecks.length} checks selected
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Select the checks required for this verification.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={selectAll}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Select all
            </button>

            <button
              type="button"
              onClick={clearAll}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {criminalChecks.map((check) => {
            const selected = selectedChecks.includes(check.id);

            return (
              <button
                key={check.id}
                type="button"
                onClick={() => toggleCheck(check.id)}
                className={`rounded-2xl border p-5 text-left transition ${
                  selected
                    ? "border-[#BF5000] bg-orange-50 ring-1 ring-[#BF5000]"
                    : "border-slate-200 bg-white hover:border-[#BF5000] hover:shadow-sm"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-semibold ${
                      selected
                        ? "bg-[#BF5000] text-white"
                        : "bg-blue-50 text-[#BF5000]"
                    }`}
                  >
                    CR
                  </div>

                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                      selected
                        ? "bg-orange-100 text-[#BF5000]"
                        : "bg-emerald-50 text-emerald-700"
                    }`}
                  >
                    {selected ? "Selected" : "Available"}
                  </span>
                </div>

                <h3 className="mt-4 font-medium text-slate-900">
                  {check.title}
                </h3>

                <p className="mt-2 min-h-[40px] text-sm leading-5 text-slate-500">
                  {check.description}
                </p>

                <div className="mt-5 text-sm font-medium text-[#BF5000]">
                  {selected ? "Remove check" : "Verify this"} →
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="font-semibold text-slate-900">
                Start Criminal Verification
              </h2>

              <p className="mt-1 text-sm text-slate-600">
                {selectedChecks.length === 0
                  ? "Select at least one check to continue."
                  : `${selectedChecks.length} criminal ${
                      selectedChecks.length === 1 ? "check" : "checks"
                    } selected.`}
              </p>
            </div>

            <button
              type="button"
              disabled={selectedChecks.length === 0}
              onClick={startVerification}
              className="rounded-lg bg-[#BF5000] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#A84400] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Start Verification
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}