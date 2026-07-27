"use client";

import { useVerification } from "@/context/VerificationContext";

import VerificationHistoryEmpty from "./VerificationHistoryEmpty";
import VerificationHistoryRow from "./VerificationHistoryRow";

export default function VerificationHistoryTable() {

  const { verifications } = useVerification();

  if (verifications.length === 0) {
    return <VerificationHistoryEmpty />;
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      <table className="w-full">

        <thead className="bg-slate-50">

          <tr className="text-left text-sm text-slate-500">

            <th className="p-5">Verification</th>

            <th>Status</th>

            <th>Country</th>

            <th>Confidence</th>

            <th>Date</th>

            <th></th>

          </tr>

        </thead>

        <tbody>

          {verifications.map((verification) => (

            <VerificationHistoryRow
              key={verification.verificationId}
              verification={verification}
            />

          ))}

        </tbody>

      </table>

    </div>
  );
}