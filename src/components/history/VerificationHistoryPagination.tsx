"use client";

export default function VerificationHistoryPagination() {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="text-sm text-slate-500">

        Showing 1–10

      </div>

      <div className="flex gap-3">

        <button className="rounded-lg border border-slate-300 px-4 py-2">

          Previous

        </button>

        <button className="rounded-lg border border-slate-300 px-4 py-2">

          Next

        </button>

      </div>

    </div>
  );
}