import Link from "next/link";
import { VerificationCase } from "@/types/verification";
import { VerificationStatus } from "@/types/verification/enums";

interface VerificationRowProps {
  verification: VerificationCase;
}

export default function VerificationRow({
  verification,
}: VerificationRowProps) {
  const subjectName =
    verification.subject.companyName ??
    verification.subject.fullName ??
    "Unknown Subject";

  const statusStyles: Record<VerificationStatus, string> = {
  [VerificationStatus.Draft]:
    "bg-slate-100 text-slate-700",

  [VerificationStatus.Queued]:
    "bg-yellow-100 text-yellow-700",

  [VerificationStatus.Running]:
    "bg-blue-100 text-blue-700",

  [VerificationStatus.AwaitingDocuments]:
    "bg-orange-100 text-orange-700",

  [VerificationStatus.ManualReview]:
    "bg-amber-100 text-amber-700",

  [VerificationStatus.Completed]:
    "bg-green-100 text-green-700",

  [VerificationStatus.Failed]:
    "bg-red-100 text-red-700",

  [VerificationStatus.Archived]:
    "bg-slate-200 text-slate-600",
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