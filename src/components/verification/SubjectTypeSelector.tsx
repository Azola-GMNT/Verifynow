"use client";

import { UserRound, Building2 } from "lucide-react";
import SubjectTypeCard from "./SubjectTypeCard";

interface SubjectTypeSelectorProps {
  selected: "individual" | "organisation" | null;
  onSelect: (value: "individual" | "organisation") => void;
}

export default function SubjectTypeSelector({
  selected,
  onSelect,
}: SubjectTypeSelectorProps) {
  return (
    <div className="space-y-8">

      <div>

        <h2 className="text-3xl font-bold">
          Choose Verification Type
        </h2>

        <p className="mt-2 text-slate-500">
          Select whether you're verifying an individual or an organisation.
        </p>

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <SubjectTypeCard
          title="Individual"
          description="Verify a person using trusted identity and compliance data sources."
          icon={<UserRound className="h-10 w-10" />}
          selected={selected === "individual"}
          onClick={() => onSelect("individual")}
        />

        <SubjectTypeCard
          title="Organisation"
          description="Verify a registered organisation using business registry and compliance data."
          icon={<Building2 className="h-10 w-10" />}
          selected={selected === "organisation"}
          onClick={() => onSelect("organisation")}
        />

      </div>

    </div>
  );
}