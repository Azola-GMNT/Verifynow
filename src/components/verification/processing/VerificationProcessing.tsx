"use client";

import { useEffect, useMemo, useState } from "react";

import verificationChecks from "@/data/verificationChecks";

import VerificationProgress from "./VerificationProgress";
import VerificationStatusBadge from "./VerificationStatusBadge";
import VerificationChecksProgress from "./VerificationChecksProgress";

import { useVerification } from "@/context/VerificationContext";

import { runProviderChecks } from "@/engines/providerEngine";
import { calculateRisk } from "@/engines/riskEngine";

import { VerificationStatus } from "@/types/verification/enums";

interface Props {
  verificationId: string;
  selectedChecks: number[];
  onCompleted: () => void;
}

export default function VerificationProcessing({
  verificationId,
  selectedChecks,
  onCompleted,
}: Props) {
  const { update } = useVerification();

  const checks = useMemo(
    () =>
      verificationChecks.filter((check) =>
        selectedChecks.includes(check.id)
      ),
    [selectedChecks]
  );

  const [completedChecks, setCompletedChecks] =
    useState<number[]>([]);

  const [status, setStatus] = useState<
    "Queued" | "Running" | "Completed"
  >("Queued");

  useEffect(() => {
    if (checks.length === 0) return;

    const now = new Date().toISOString();

    setStatus("Running");

    update(verificationId, {
      status: VerificationStatus.Running,
      timeline: {
        createdAt: now,
        startedAt: now,
      },
    });

    let current = 0;
    let completed: number[] = [];

    const timer = setInterval(() => {
      const check = checks[current];

      if (!check) {
        clearInterval(timer);
        return;
      }

      current++;

      completed = [...completed, check.id];

      setCompletedChecks(completed);

      update(verificationId, {
        completedChecks: completed,
      });

      if (current >= checks.length) {
        clearInterval(timer);

       const providerResponse =
  runProviderChecks(checks);

        const risk =
          calculateRisk(providerResponse.results);

        const completedAt = new Date().toISOString();

        setStatus("Completed");

        update(verificationId, {
          status: VerificationStatus.Completed,
          providers: providerResponse.providers,
          results: providerResponse.results,
          risk,
          timeline: {
            createdAt: now,
            startedAt: now,
            completedAt,
            durationSeconds: checks.length * 1.2,
          },
        });

        setTimeout(() => {
          onCompleted();
        }, 1000);
      }
    }, 1200);

    return () => {
      clearInterval(timer);
    };
  }, [
    checks,
    selectedChecks,
    verificationId,
    update,
    onCompleted,
  ]);

  const progress =
    checks.length === 0
      ? 0
      : Math.round(
          (completedChecks.length / checks.length) * 100
        );

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Running Verification
          </h2>

          <p className="mt-2 text-slate-500">
            Please wait while we process your verification request.
          </p>
        </div>

        <VerificationStatusBadge status={status} />
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
        <div className="text-sm text-slate-500">
          Verification ID
        </div>

        <div className="mt-1 text-xl font-bold tracking-wide">
          {verificationId}
        </div>
      </div>

      <VerificationProgress progress={progress} />

      <VerificationChecksProgress
        checks={checks.map((c) => c.name)}
        completed={completedChecks.length}
      />

      <div className="rounded-xl bg-orange-50 p-4 text-sm text-slate-600">
        Please don't close this page while verification is running.
      </div>
    </div>
  );
}