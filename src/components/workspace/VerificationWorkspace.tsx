"use client";

import { useVerification } from "@/context/VerificationContext";

import WorkspaceHeader from "./WorkspaceHeader";
import SubjectCard from "./SubjectCard";
import TimelineCard from "./TimelineCard";
import RiskAssessmentCard from "./RiskAssessmentCard";
import ProviderResultsCard from "./ProviderResultsCard";
import VerificationResultsCard from "./VerificationResultsCard";
import ActionsPanel from "./ActionsPanel";

interface Props {
  verificationId: string;
}

export default function VerificationWorkspace({
  verificationId,
}: Props) {
  const { verifications } = useVerification();

  const verification = verifications.find(
    (v) => v.verificationId === verificationId
  );

  if (!verification) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <h2 className="text-2xl font-semibold">
          Verification Not Found
        </h2>

        <p className="mt-3 text-slate-500">
          The requested verification could not be found.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <WorkspaceHeader
        verification={verification}
      />

      <div className="grid gap-8 lg:grid-cols-3">

        {/* LEFT COLUMN */}

        <div className="space-y-8">

  <SubjectCard
    subject={verification.subject}
  />

  <ActionsPanel
    verificationId={verification.verificationId}
  />

</div>

        {/* RIGHT COLUMN */}

        <div className="space-y-8 lg:col-span-2">

          <TimelineCard
            timeline={verification.timeline}
          />

          <RiskAssessmentCard
            risk={verification.risk}
          />

          <ProviderResultsCard
            providers={verification.providers}
          />

          <VerificationResultsCard
            results={verification.results}
          />

        </div>

      </div>

    </div>
  );
}