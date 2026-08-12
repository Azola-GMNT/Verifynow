"use client";

import { useRouter } from "next/navigation";

import verificationChecks from "@/data/verificationChecks";

import ResultsHeader from "./ResultsHeader";
import ResultsSummary from "./ResultsSummary";
import ResultsChecksTable from "./ResultsChecksTable";
import ResultsRecommendation from "./ResultsRecommendation";
import ResultsActions from "./ResultsActions";
import WizardFooter from "../WizardFooter";

interface Props {
  verificationId: string;
  subjectType: "individual" | "organisation";
  country: string;
  selectedChecks: number[];
}

export default function VerificationResults({
  verificationId,
  subjectType,
  country,
  selectedChecks,
}: Props) {
  const router = useRouter();

  const checks = verificationChecks.filter((check) =>
    selectedChecks.includes(check.id)
  );

  return (
    <div className="space-y-8">

      <ResultsHeader
        verificationId={verificationId}
      />

      <ResultsSummary
        subjectType={subjectType}
        country={country}
        verificationCount={checks.length}
      />

      <ResultsChecksTable
        checks={checks}
      />

      <ResultsRecommendation
        checks={checks}
      />

      <ResultsActions
  verificationId={verificationId}
/>
      <WizardFooter
        backLabel="Back"
        nextLabel="Finish"
        onBack={() => router.back()}
        onNext={() => router.push("/dashboard")}
      />

    </div>
  );
}

