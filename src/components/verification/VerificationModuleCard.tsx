"use client";

import { CheckCircle } from "lucide-react";

interface VerificationModuleCardProps {
  title: string;
  description: string;
  provider: string;
  time: string;
  selected: boolean;
  onClick: () => void;
}

export default function VerificationModuleCard({
  title,
  description,
  provider,
  time,
  selected,
  onClick,
}: VerificationModuleCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative w-full rounded-2xl border p-6 text-left transition-all duration-200
      ${
        selected
          ? "border-[#BF5000] bg-orange-50 shadow-md"
          : "border-slate-200 bg-white hover:border-[#BF5000] hover:shadow-md"
      }`}
    >
      {selected && (
        <CheckCircle
          className="absolute right-5 top-5 text-[#BF5000]"
          size={22}
        />
      )}

      <h3 className="text-lg font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">

        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Provider
          </p>

          <p className="text-sm font-medium">
            {provider}
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Estimated Time
          </p>

          <p className="text-sm font-medium">
            {time}
          </p>
        </div>

      </div>

    </button>
  );
}