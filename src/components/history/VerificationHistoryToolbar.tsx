"use client";

export default function VerificationHistoryToolbar() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="grid gap-4 lg:grid-cols-4">

        <input
          placeholder="Search verification..."
          className="rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#BF5000]"
        />

        <select className="rounded-lg border border-slate-300 px-4 py-3">

          <option>All Statuses</option>

          <option>Completed</option>

          <option>Running</option>

          <option>Queued</option>

          <option>Failed</option>

        </select>

        <select className="rounded-lg border border-slate-300 px-4 py-3">

          <option>All Countries</option>

        </select>

        <select className="rounded-lg border border-slate-300 px-4 py-3">

          <option>Newest First</option>

          <option>Oldest First</option>

        </select>

      </div>

    </div>
  );
}