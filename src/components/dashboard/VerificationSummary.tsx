"use client";

import { useVerification } from "@/context/VerificationContext";

export default function VerificationSummary() {
  const { verifications } = useVerification();

  const completed = verifications.filter(
    (v) => v.status === "Completed"
  ).length;

  const running = verifications.filter(
    (v) => v.status === "Running"
  ).length;

  const queued = verifications.filter(
    (v) => v.status === "Queued"
  ).length;

  const failed = verifications.filter(
    (v) => v.status === "Failed"
  ).length;

  const stats = [
    {
      title: "Completed",
      value: completed,
      colour: "text-green-600",
    },
    {
      title: "Running",
      value: running,
      colour: "text-blue-600",
    },
    {
      title: "Queued",
      value: queued,
      colour: "text-amber-600",
    },
    {
      title: "Failed",
      value: failed,
      colour: "text-red-600",
    },
  ];

  return (
    <div className="mb-8">
      <h2 className="mb-6 text-xl font-semibold">
        Verification Summary
      </h2>

      <div className="grid gap-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-xl border border-slate-100 bg-slate-50 p-5"
          >
            <div className="text-sm text-slate-500">
              {stat.title}
            </div>

            <div
              className={`mt-2 text-3xl font-bold ${stat.colour}`}
            >
              {stat.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}