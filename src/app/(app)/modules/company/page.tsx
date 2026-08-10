"use client";

import { useState } from "react";
import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";

const companyChecks = [
  {
    id: "company-registration",
    title: "Company Registration",
    description: "Verify company registration details with CIPC.",
  },
  {
    id: "directors",
    title: "Directors Verification",
    description: "Verify the company's registered directors.",
  },
  {
    id: "beneficial-owners",
    title: "Beneficial Ownership",
    description: "Verify the company's beneficial owners.",
  },
  {
    id: "vat",
    title: "VAT Registration",
    description: "Verify VAT registration and status.",
  },
  {
    id: "tax",
    title: "Tax Compliance",
    description: "Verify company tax compliance and good standing.",
  },
  {
    id: "bank",
    title: "Bank Account Verification",
    description: "Verify the company's bank account.",
  },
  {
    id: "bee",
    title: "BEE Verification",
    description: "Verify the company's BEE certificate and level.",
  },
];

export default function CompanyModulePage() {
  const [selectedChecks, setSelectedChecks] = useState<string[]>([]);

  function toggleCheck(id: string) {
    setSelectedChecks((current) =>
      current.includes(id)
        ? current.filter((checkId) => checkId !== id)
        : [...current, id]
    );
  }

  function selectAll() {
    setSelectedChecks(companyChecks.map((check) => check.id));
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

        {/* Header */}
        <div>
          <p className="text-sm font-medium text-blue-600">
            Verification Module
          </p>

          <h1 className="mt-1 text-2xl font-semibold text-slate-900">
            Company Verification
          </h1>

          <p className="mt-2 max-w-2xl text-sm text-slate-500">
            Select the company checks you want to perform.
          </p>
        </div>

        {/* Selection toolbar */}
        <div className="mt-6 flex flex-col justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-slate-900">
              {selectedChecks.length} of {companyChecks.length} checks selected
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

        {/* Checks */}
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {companyChecks.map((check) => {
            const selected = selectedChecks.includes(check.id);

            return (
              <button
                key={check.id}
                type="button"
                onClick={() => toggleCheck(check.id)}
                className={`rounded-xl border p-5 text-left transition ${
                  selected
                    ? "border-blue-500 bg-blue-50 ring-1 ring-blue-500"
                    : "border-slate-200 bg-white hover:border-blue-300 hover:shadow-sm"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-semibold ${
                      selected
                        ? "bg-blue-600 text-white"
                        : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    CO
                  </div>

                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                      selected
                        ? "bg-blue-100 text-blue-700"
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

                <div className="mt-5 text-sm font-medium text-blue-600">
                  {selected ? "Remove check" : "Select check"} →
                </div>
              </button>
            );
          })}
        </div>

        {/* Start */}
        <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="font-semibold text-slate-900">
                Start Company Verification
              </h2>

              <p className="mt-1 text-sm text-slate-600">
                {selectedChecks.length === 0
                  ? "Select at least one check to continue."
                  : `${selectedChecks.length} company ${
                      selectedChecks.length === 1 ? "check" : "checks"
                    } selected.`}
              </p>
            </div>

            <button
              type="button"
              disabled={selectedChecks.length === 0}
              onClick={startVerification}
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Start Verification
            </button>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}