"use client";

import Link from "next/link";

import { VerificationRequest } from "@/types/verification";

interface Props {
  verification: VerificationRequest;
}

export default function VerificationHistoryRow({
  verification,
}: Props) {
  return (
    <tr className="border-t border-slate-100 hover:bg-slate-50">

      <td className="p-5">

        <div className="font-semibold">

          {verification.verificationId}

        </div>

      </td>

      <td>

        <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">

          {verification.status}

        </span>

      </td>

      <td>

        {verification.subject.country}

      </td>

      <td>

        {verification.confidenceScore ?? "--"}%

      </td>

      <td>

        {new Date(
          verification.createdAt
        ).toLocaleDateString()}

      </td>

      <td>

        <Link
          href={`/verifications/${verification.verificationId}`}
          className="font-semibold text-[#BF5000]"
        >
          View →
        </Link>

      </td>

    </tr>
  );
}