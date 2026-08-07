"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import ReviewSummaryCard from "./review/ReviewSummaryCard";
import StepIndicator from "./StepIndicator";
import SubjectTypeSelector from "./SubjectTypeSelector";
import WizardFooter from "./WizardFooter";
import FindSubject from "./FindSubject";
import VerificationModules from "./VerificationModules";
import VerificationProcessing from "./processing/VerificationProcessing";
import VerificationResults from "./results/VerificationResults";
import { verificationService } from "@/services/verificationService";

import { useVerification } from "@/context/VerificationContext";
import { VerificationCase } from "@/types/verification";
import { VerificationStatus } from "@/types/verification/enums";

export default function VerificationWizard() {
  const router = useRouter();

  const { create } = useVerification();

  const [step, setStep] = useState(1);

  const [subjectType, setSubjectType] = useState<
    "individual" | "organisation" | null
  >(null);

  const [selectedCountry, setSelectedCountry] = useState("");

  const [subjectFound, setSubjectFound] = useState(false);

const [selectedChecks, setSelectedChecks] = useState<number[]>([]);

  const [verificationId] = useState(() => {
  const now = new Date();

  const date =
    now.getFullYear().toString() +
    String(now.getMonth() + 1).padStart(2, "0") +
    String(now.getDate()).padStart(2, "0");

  const random = Math.floor(
    Math.random() * 900000 + 100000
  );

  return `VRF-${date}-${random}`;
});
  
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

      <StepIndicator currentStep={step} />

      {/* STEP 1 */}

      {step === 1 && (
        <>
          <SubjectTypeSelector
            selected={subjectType}
            onSelect={setSubjectType}
          />

          <WizardFooter
            disableNext={!subjectType}
            onBack={() => router.push("/dashboard")}
            onNext={() => setStep(2)}
          />
        </>
      )}

      {/* STEP 2 */}

      {step === 2 && (
        <>
          <FindSubject
            subjectType={subjectType!}
            country={selectedCountry}
            setCountry={setSelectedCountry}
            onSubjectFound={() => setSubjectFound(true)}
          />

          <WizardFooter
            disableNext={!subjectFound || !selectedCountry}
            onBack={() => {
              setSubjectFound(false);
              setStep(1);
            }}
            onNext={() => setStep(3)}
          />
        </>
      )}

      {/* STEP 3 */}

      {step === 3 && (
        <>
          <VerificationModules
            subjectType={subjectType!}
            country={selectedCountry}
            selectedChecks={selectedChecks}
            setSelectedChecks={setSelectedChecks}
          />

          <WizardFooter
            nextLabel="Review Verification"
            disableNext={selectedChecks.length === 0}
            onBack={() => setStep(2)}
            onNext={() => setStep(4)}
          />
        </>
      )}

      {/* STEP 4 */}

      {step === 4 && (
        <>
          <ReviewSummaryCard
            subjectType={subjectType!}
            country={selectedCountry}
            selectedChecks={selectedChecks}
          />

          <WizardFooter
  nextLabel="Run Verification"
  onBack={() => setStep(3)}
  onNext={async () => {

const verification: VerificationCase = {

  verificationId,

  status: VerificationStatus.Queued,

  subject: {
    subjectType: subjectType!,
    displayName: "",
    country: selectedCountry,

    fullName: undefined,
    companyName: undefined,
    registrationNumber: undefined,
    idNumber: undefined,
    passportNumber: undefined,
  },

  selectedChecks,

  completedChecks: [],

  providers: [],

  results: [],

  timeline: {
    createdAt: new Date().toISOString(),
  },

  risk: {
    confidenceScore: undefined,
    recommendation: undefined,
    riskLevel: "Unknown",
  },

  createdBy: "Current User",

  reportGenerated: false,

  notes: "",

};

await verificationService.startVerification(verification);

setStep(5);
}}
/>
        </>
        )}

        {/* STEP 5 */}

{step === 5 && (
  <VerificationProcessing
    verificationId={verificationId}
    selectedChecks={selectedChecks}
    onCompleted={() => setStep(6)}
/>
)}

{/* STEP 6 */}

{step === 6 && (
  <VerificationResults
    verificationId={verificationId}
    subjectType={subjectType!}
    country={selectedCountry}
    selectedChecks={selectedChecks}
  />
)}

    </div>
  );
}