"use client";

import { useEffect, useMemo, useState } from "react";

import verificationChecks from "@/data/verificationChecks";

import VerificationProgress from "./VerificationProgress";
import VerificationStatusBadge from "./VerificationStatusBadge";
import VerificationChecksProgress from "./VerificationChecksProgress";

import { useVerification } from "@/context/VerificationContext";

import { runProviders } from "@/engines/providerEngine";
import { calculateRisk } from "@/engines/riskEngine";
import { buildVerificationTimeline } from "@/engines/timelineBuilder";

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

  const [completedChecks, setCompletedChecks] = useState<number[]>([]);

  const [status, setStatus] = useState<
    "Queued" | "Running" | "Completed"
  >("Queued");

  useEffect(() => {
    if (checks.length === 0) return;

    setStatus("Running");

    update(verificationId, {
      status: "Running",

      timeline: {
        createdAt: new Date().toISOString(),
        startedAt: new Date().toISOString(),
      },
    });

    let current = 0;

    const timer = setInterval(() => {
      const check = checks[current];

      current++;

      setCompletedChecks((previous) => [
        ...previous,
        check.id,
      ]);

      update(verificationId, {
        completedChecks: [
          ...completedChecks,
          check.id,
        ],
      });

      if (current >= checks.length) {
        clearInterval(timer);

        const providerResponse =
          runProviders(selectedChecks);

        const risk =
          calculateRisk(providerResponse.results);

        const timeline =
          buildVerificationTimeline();

        setStatus("Completed");

        update(verificationId, {
          status: "Completed",

          providers:
            providerResponse.providers,

          results:
            providerResponse.results,

          risk,

          timeline: {
            ...timeline,
            createdAt: timeline.createdAt,
            startedAt: timeline.startedAt,
            completedAt: timeline.completedAt,
            durationSeconds:
              checks.length * 1.2,
          },
        });

        setTimeout(() => {
          onCompleted();
        }, 1000);
      }
    }, 1200);

    return () => clearInterval(timer);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const progress =
    checks.length === 0
      ? 0
      : Math.round(
          (completedChecks.length /
            checks.length) *
            100
        );

  return (
    <div className="space-y-8 rounded-2xl border border-slate-200 bg-white p-8">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold">
            Running Verification
          </h2>

          <p className="mt-2 text-slate-500">
            Please wait while we process your verification request.
          </p>

        </div>

        <VerificationStatusBadge
          status={status}
        />

      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">

        <div className="text-sm text-slate-500">
          Verification ID
        </div>

        <div className="mt-1 text-xl font-bold tracking-wide">
          {verificationId}
        </div>

      </div>

      <VerificationProgress
        progress={progress}
      />

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