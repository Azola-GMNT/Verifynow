"use client";

import SectionCard from "@/components/dashboard/cards/SectionCard";
import RecentVerifications from "@/components/dashboard/RecentVerifications";
import { useVerification } from "@/context/VerificationContext";
import { VerificationStatus } from "@/types/verification/enums";

export default function DashboardClient() {
  const { verifications } = useVerification();

  const failed = verifications.filter(
    (v) => v.status === VerificationStatus.Failed
  ).length;

  const running = verifications.filter(
    (v) => v.status === VerificationStatus.Running
  ).length;

  const queued = verifications.filter(
    (v) => v.status === VerificationStatus.Queued
  ).length;

  const completed = verifications.filter(
    (v) => v.status === VerificationStatus.Completed
  ).length;

  const archived = verifications.filter(
    (v) => v.status === VerificationStatus.Archived
  ).length;

  const longRunning = verifications.filter((v) => {
    if (v.status !== VerificationStatus.Running) return false;

    const created = new Date(v.timeline.createdAt).getTime();

    return Date.now() - created > 5 * 60 * 1000;
  }).length;

  return (
    <>
      {/* Recent Verifications */}
      <div className="w-[500px] flex-shrink-0">
        <RecentVerifications />
      </div>

      {/* Needs Attention */}
      <div className="w-[480px] flex-shrink-0">
        <SectionCard
          title="Verification Overview"
          subtitle="Current verification activity"
        >
          <div className="space-y-3">

            <button className="flex w-full items-center justify-between rounded-xl border border-red-200 bg-red-50 px-4 py-3 transition hover:bg-red-100">
              <span>🔴 Failed Verifications</span>
              <span className="rounded-lg bg-red-200 px-3 py-1 text-sm font-bold">
                {failed}
              </span>
            </button>

            <button className="flex w-full items-center justify-between rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 transition hover:bg-orange-100">
              <span>🟠 Running Verifications</span>
              <span className="rounded-lg bg-orange-200 px-3 py-1 text-sm font-bold">
                {running}
              </span>
            </button>

            <button className="flex w-full items-center justify-between rounded-xl border border-yellow-200 bg-yellow-50 px-4 py-3 transition hover:bg-yellow-100">
              <span>🟡 Queued Verifications</span>
              <span className="rounded-lg bg-yellow-200 px-3 py-1 text-sm font-bold">
                {queued}
              </span>
            </button>

            <button className="flex w-full items-center justify-between rounded-xl border border-green-200 bg-green-50 px-4 py-3 transition hover:bg-green-100">
              <span>🟢 Completed Verifications</span>
              <span className="rounded-lg bg-green-200 px-3 py-1 text-sm font-bold">
                {completed}
              </span>
            </button>

            <button className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition hover:bg-slate-100">
              <span>📦 Archived Verifications</span>
              <span className="rounded-lg bg-slate-200 px-3 py-1 text-sm font-bold">
                {archived}
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
    </>
  );
}