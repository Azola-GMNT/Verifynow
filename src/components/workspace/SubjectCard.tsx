"use client";

import { VerificationSubject } from "@/types/verification";

export default function SubjectCard({
  subject,
}: {
  subject: VerificationSubject;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-semibold">
        Subject Information
      </h2>

      <div className="space-y-4">

        <Row
          label="Subject Type"
          value={subject.subjectType}
        />

        <Row
          label="Country"
          value={subject.country}
        />

        <Row
          label="Display Name"
          value={
            subject.displayName || "--"
          }
        />

        <Row
          label="Full Name"
          value={
            subject.fullName || "--"
          }
        />

        <Row
          label="Company"
          value={
            subject.companyName || "--"
          }
        />

        <Row
          label="Registration"
          value={
            subject.registrationNumber || "--"
          }
        />

      </div>

    </div>
  );
}

function Row({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between border-b border-slate-100 pb-3">

      <span className="text-slate-500">
        {label}
      </span>

      <span className="font-medium">
        {value}
      </span>

    </div>
  );
}