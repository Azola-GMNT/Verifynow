"use client";

import Link from "next/link";

interface Props {
  verificationId: string;
}

export default function ActionsPanel({
  verificationId,
}: Props) {
  const actions = [
    {
      title: "Download Report",
      description: "Generate a PDF report",
      icon: "📄",
      disabled: false,
    },
    {
      title: "Re-run Verification",
      description: "Run this verification again",
      icon: "🔄",
      disabled: false,
    },
    {
      title: "Share Report",
      description: "Send verification to another user",
      icon: "📤",
      disabled: true,
    },
    {
      title: "Add Note",
      description: "Internal investigator notes",
      icon: "📝",
      disabled: true,
    },
    {
      title: "Archive Case",
      description: "Move verification to archive",
      icon: "📁",
      disabled: true,
    },
    {
      title: "Flag as Fraud",
      description: "Escalate this verification",
      icon: "🚩",
      disabled: true,
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-semibold">
        Actions
      </h2>

      <div className="space-y-4">

        {actions.map((action) => {

  const card = (
    <div
      className={`w-full rounded-xl border p-4 text-left transition ${
        action.disabled
          ? "cursor-not-allowed border-slate-200 bg-slate-50 opacity-50"
          : "border-slate-200 hover:border-[#BF5000] hover:bg-orange-50"
      }`}
    >
      <div className="flex items-start gap-4">

        <div className="text-2xl">
          {action.icon}
        </div>

        <div>

          <div className="font-semibold">
            {action.title}
          </div>

          <div className="text-sm text-slate-500">
            {action.description}
          </div>

        </div>

      </div>
    </div>
  );

  // Download Report
  if (action.title === "Download Report") {
    return (
      <Link
        key={action.title}
        href={`/reports/${verificationId}`}
        className="block"
      >
        {card}
      </Link>
    );
  }

  // All other actions remain buttons
  return (
    <button
      key={action.title}
      disabled={action.disabled}
      className="w-full"
    >
      {card}
    </button>
  );
})}

      </div>

      <div className="mt-8">

        <Link
          href="/verifications"
          className="block rounded-xl bg-[#BF5000] py-3 text-center font-semibold text-white hover:bg-[#9b4100]"
        >
          Back to Verification History
        </Link>

      </div>

    </div>
  );
}