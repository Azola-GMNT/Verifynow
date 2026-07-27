"use client";

import VerificationTable from "./VerificationTable";

interface VerificationModulesProps {
  country: string;
  subjectType: "individual" | "organisation";

  selectedChecks: number[];
  setSelectedChecks: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function VerificationModules({
  country,
  subjectType,
  selectedChecks,
  setSelectedChecks,
}: VerificationModulesProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">
          Verification Checks
        </h2>

        <p className="mt-2 text-slate-500">
          Select one or more verification checks to perform for this subject.
        </p>
      </div>

      <VerificationTable
        country={country}
        subjectType={subjectType}
        selectedChecks={selectedChecks}
        setSelectedChecks={setSelectedChecks}
      />
    </div>
  );
}