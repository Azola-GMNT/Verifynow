import Link from "next/link";
import { VerificationRequest } from "@/types/verification";

interface VerificationRowProps {
  verification: VerificationRequest;
}

export default function VerificationRow({
  verification,
}: VerificationRowProps) {
  const subjectName =
    verification.subject.companyName ??
    verification.subject.fullName ??
    "Unknown Subject";

  const statusStyles = {
    Draft: "bg-slate-100 text-slate-700",
    Queued: "bg-amber-100 text-amber-700",
    Running: "bg-blue-100 text-blue-700",
    Completed: "bg-green-100 text-green-700",
    Failed: "bg-red-100 text-red-700",
    Cancelled: "bg-gray-100 text-gray-700",
  };

  return (
    <Link
      href={`/verifications/${verification.verificationId}`}
      className="block border-b border-slate-100 p-5 transition hover:bg-slate-50"
    >
      <div className="flex items-center justify-between">

        <div>

          <div className="font-semibold text-slate-900">
            {verification.verificationId}
          </div>

          <div className="mt-1 text-sm font-medium text-slate-700">
            {subjectName}
          </div>

          <div className="mt-1 text-sm text-slate-500">
            {verification.subject.country}
          </div>

        </div>

        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ${
            statusStyles[verification.status]
          }`}
        >
          {verification.status}
        </span>

      </div>
    </Link>
  );
}