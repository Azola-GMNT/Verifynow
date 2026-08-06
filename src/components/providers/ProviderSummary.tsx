"use client";

import {
  Database,
  CheckCircle2,
  AlertTriangle,
  XCircle,
} from "lucide-react";

import { providers } from "@/data/providers";

export default function ProviderSummary() {

  const total = providers.length;

  const online = providers.filter(
    (provider) => provider.status === "Online"
  ).length;

  const slow = providers.filter(
    (provider) => provider.status === "Slow"
  ).length;

  const offline = providers.filter(
    (provider) => provider.status === "Offline"
  ).length;

  const cards = [
    {
      title: "Total Providers",
      value: total,
      icon: Database,
      colour: "bg-slate-100 text-slate-700",
    },
    {
      title: "Online",
      value: online,
      icon: CheckCircle2,
      colour: "bg-green-100 text-green-700",
    },
    {
      title: "Slow",
      value: slow,
      icon: AlertTriangle,
      colour: "bg-orange-100 text-orange-700",
    },
    {
      title: "Offline",
      value: offline,
      icon: XCircle,
      colour: "bg-red-100 text-red-700",
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
            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-500">
                  {card.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  {card.value}
                </h2>

              </div>

              <div className={`rounded-xl p-3 ${card.colour}`}>
                <Icon className="h-6 w-6" />
              </div>

            </div>

          </div>
        );
      })}

    </div>
  );
}