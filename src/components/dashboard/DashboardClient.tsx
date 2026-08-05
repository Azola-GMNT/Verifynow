"use client";

import SectionCard from "@/components/dashboard/cards/SectionCard";
import RecentVerifications from "@/components/dashboard/RecentVerifications";
import { useVerification } from "@/context/VerificationContext";

export default function DashboardClient() {
  const { verifications } = useVerification();

  const failed = verifications.filter(
    (v) => v.status === "Failed"
  ).length;

  const manualReview = verifications.filter(
    (v) => v.status === "Manual Review"
  ).length;

  const awaitingDocuments = verifications.filter(
    (v) => v.status === "Awaiting Documents"
  ).length;

  const providerErrors = verifications.filter(
    (v) => v.status === "Provider Error"
  ).length;

  const longRunning = verifications.filter((v) => {
    if (v.status !== "Processing") return false;

    const created = new Date(v.timeline.createdAt).getTime();

    return Date.now() - created > 5 * 60 * 1000;
  }).length;

return (
  <div className="mt-8 flex w-[1466px] gap-6 items-start">

    {/* Recent Verifications */}
    <div className="w-[500px] flex-shrink-0">
      <RecentVerifications />
    </div>

    {/* Needs Attention */}
    <div className="w-[480px] flex-shrink-0">

      <SectionCard
        title="Needs Attention"
        subtitle="Items requiring action"
      >

          <div className="space-y-3">

            <button className="flex w-full items-center justify-between rounded-xl border border-red-200 bg-red-50 px-4 py-3 transition hover:bg-red-100">

              <span>🔴 Failed Verifications</span>

              <span className="rounded-lg bg-red-200 px-3 py-1 text-sm font-bold">
                {failed}
              </span>

            </button>

            <button className="flex w-full items-center justify-between rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 transition hover:bg-orange-100">

              <span>🟠 Manual Reviews</span>

              <span className="rounded-lg bg-orange-200 px-3 py-1 text-sm font-bold">
                {manualReview}
              </span>

            </button>

            <button className="flex w-full items-center justify-between rounded-xl border border-yellow-200 bg-yellow-50 px-4 py-3 transition hover:bg-yellow-100">

              <span>🟡 Awaiting Documents</span>

              <span className="rounded-lg bg-yellow-200 px-3 py-1 text-sm font-bold">
                {awaitingDocuments}
              </span>

            </button>

            <button className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition hover:bg-slate-100">

              <span>⚠ Provider Errors</span>

              <span className="rounded-lg bg-slate-200 px-3 py-1 text-sm font-bold">
                {providerErrors}
              </span>

            </button>

            <button className="flex w-full items-center justify-between rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 transition hover:bg-blue-100">

              <span>⏱ Long Running Jobs</span>

              <span className="rounded-lg bg-blue-200 px-3 py-1 text-sm font-bold">
                {longRunning}
              </span>

            </button>

          </div>

        </SectionCard>

      </div>

    </div>
  );
}