"use client";

export default function VerificationHistoryEmpty() {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-20 text-center">

      <h2 className="text-2xl font-bold">

        No Verifications Yet

      </h2>

      <p className="mt-3 text-slate-500">

        Your completed verifications will appear here.

      </p>

    </div>
  );
}