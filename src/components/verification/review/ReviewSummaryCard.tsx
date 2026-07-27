"use client";

import ReviewSubjectCard from "./ReviewSubjectCard";
import ReviewChecksCard from "./ReviewChecksCard";
import ConsentCard from "./ConsentCard";

import verificationChecks from "@/data/verificationChecks";

interface ReviewSummaryCardProps {
  subjectType: "individual" | "organisation";
  country: string;
  selectedChecks: number[];
}

export default function ReviewSummaryCard({
  subjectType,
  country,
  selectedChecks,
}: ReviewSummaryCardProps) {
  return (
    <div className="space-y-8">

      <div>
        <h2 className="text-3xl font-bold">
          Review Verification
        </h2>

        <p className="mt-2 text-slate-500">
          Review all information before starting the verification process.
        </p>
      </div>

      <ReviewSubjectCard
        subjectType={subjectType}
        country={country}
      />

      <ReviewChecksCard
    checks={verificationChecks.filter((c) =>
        selectedChecks.includes(c.id)
    )}
/>

      <ConsentCard />

    </div>
  );
}