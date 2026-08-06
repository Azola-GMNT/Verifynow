"use client";

import { useVerification } from "@/context/VerificationContext";
import { providers } from "@/data/providers";

import {
  FileCheck,
  CheckCircle2,
  Clock3,
  Activity,
} from "lucide-react";

export default function InsightsSummary() {
  const { verifications } = useVerification();

  const totalVerifications = verifications.length;

  const successful = verifications.filter(
    (v) => v.status === "Completed"
  ).length;

  const successRate =
    totalVerifications === 0
      ? 0
      : Math.round(
          (successful / totalVerifications) * 100
        );

  const onlineProviders = providers.filter(
    (provider) => provider.status === "Online"
  ).length;

  const providerAvailability = Math.round(
    (onlineProviders / providers.length) * 100
  );

  const completedCases = verifications.filter(
  (v) =>
    v.timeline &&
    v.timeline.createdAt &&
    v.timeline.completedAt
);

  let averageMinutes = 0;

  if (completedCases.length > 0) {
    const totalTime = completedCases.reduce(
      (total, verification) => {

        const created = new Date(
  verification.timeline?.createdAt ?? Date.now()
).getTime();

const completed = new Date(
  verification.timeline?.completedAt ?? Date.now()
).getTime();

        return total + (completed - created);

      },
      0
    );

    averageMinutes = Math.round(
      totalTime /
        completedCases.length /
        1000 /
        60
    );
  }

  const cards = [

    {
      title: "Total Verifications",
      value: totalVerifications,
      icon: FileCheck,
      colour: "bg-blue-100 text-blue-700",
    },

    {
      title: "Success Rate",
      value: `${successRate}%`,
      icon: CheckCircle2,
      colour: "bg-green-100 text-green-700",
    },

    {
      title: "Avg Completion",
      value: `${averageMinutes} min`,
      icon: Clock3,
      colour: "bg-orange-100 text-orange-700",
    },

    {
      title: "Provider Availability",
      value: `${providerAvailability}%`,
      icon: Activity,
      colour: "bg-purple-100 text-purple-700",
    },

  ];

 return (
  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
    {cards.map((card) => {
      const Icon = card.icon;

      return (
        <div
          key={card.title}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          {/* Top */}
          <div className="flex items-center gap-4">

            <div
              className={`flex h-18 w-18 items-center justify-center rounded-2xl ${card.colour}`}
            >
              <Icon className="h-9 w-9" />
            </div>

            <h3 className="text-l font-medium leading-tight text-slate-500">
              {card.title}
            </h3>

          </div>

          {/* Divider */}
          <div className="my-5 border-t border-slate-100" />

          {/* Metric */}
          <h2 className="text-3xl font-semibold tracking-tight text-slate-500">
            {card.value}
          </h2>

        </div>
      );
    })}
  </div>
);
}