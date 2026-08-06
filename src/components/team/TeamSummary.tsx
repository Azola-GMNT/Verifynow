"use client";

import { team } from "@/data/team";
import {
  Users,
  UserCheck,
  ShieldCheck,
  Briefcase,
} from "lucide-react";

export default function TeamSummary() {
  const total = team.length;

  const active = team.filter(
    (u) => u.status === "Active"
  ).length;

  const admins = team.filter(
    (u) => u.role === "Administrator"
  ).length;

  const analysts = team.filter((u) =>
    u.role.includes("Analyst")
  ).length;

  const cards = [
    {
      title: "Total Users",
      value: total,
      icon: Users,
      colour: "bg-blue-100 text-blue-600",
    },
    {
      title: "Active Users",
      value: active,
      icon: UserCheck,
      colour: "bg-green-100 text-green-600",
    },
    {
      title: "Administrators",
      value: admins,
      icon: ShieldCheck,
      colour: "bg-purple-100 text-purple-600",
    },
    {
      title: "Analysts",
      value: analysts,
      icon: Briefcase,
      colour: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl ${card.colour}`}
              >
                <Icon className="h-8 w-8" />
              </div>

              <h3 className="text-l font-medium text-slate-600">
                {card.title}
              </h3>
            </div>

            <div className="my-5 border-t border-slate-100" />

            <h2 className="text-4xl font-medium text-slate-600">
              {card.value}
            </h2>
          </div>
        );
      })}
    </div>
  );
}