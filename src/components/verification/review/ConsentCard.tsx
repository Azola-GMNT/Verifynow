"use client";

export default function ConsentCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <h3 className="mb-4 text-xl font-semibold">
        Consent
      </h3>

      <label className="flex items-center gap-3">
        <input type="checkbox" />
        <span>
          I confirm I am authorised to perform this verification.
        </span>
      </label>
    </div>
  );
}