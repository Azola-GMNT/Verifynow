"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import verificationChecks from "@/data/verificationChecks";

interface VerificationTableProps {
  country: string;
  subjectType: "individual" | "organisation";

  selectedChecks: number[];
  setSelectedChecks: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function VerificationTable({
  country,
  subjectType,
  selectedChecks,
  setSelectedChecks,
}: VerificationTableProps) {
  const [selectedGroup, setSelectedGroup] = useState("Identity");
  const [search, setSearch] = useState("");

  const groups = [
    "Identity",
    "Biometrics",
    "Compliance",
    "Background",
    "Financial",
    "Corporate",
    "Mining",
  ];

  const availableChecks = verificationChecks.filter(
    (check) =>
      check.subjectType === subjectType &&
      (check.countries.includes("ALL") ||
        check.countries.includes(country)) &&
      check.group === selectedGroup &&
      (
        check.name.toLowerCase().includes(search.toLowerCase()) ||
        check.description.toLowerCase().includes(search.toLowerCase())
      )
  );

  const toggleCheck = (id: number) => {
    setSelectedChecks((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const totalTime = useMemo(() => {
    return verificationChecks
      .filter((check) => selectedChecks.includes(check.id))
      .reduce(
        (sum, check) => sum + check.estimatedDurationSeconds,
        0
      );
  }, [selectedChecks]);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">

      {/* Filters */}

      <div className="flex gap-6 border-b p-6">

        {/* Group */}

        <div className="w-72">

          <label className="mb-2 block text-sm font-medium text-slate-600">
            Verification Group
          </label>

          <select
            value={selectedGroup}
            onChange={(e) => setSelectedGroup(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-[#BF5000] focus:outline-none"
          >
            {groups.map((group) => (
              <option
                key={group}
                value={group}
              >
                {group}
              </option>
            ))}
          </select>

        </div>

        {/* Search */}

        <div className="flex-1">

          <label className="mb-2 block text-sm font-medium text-slate-600">
            Search Verification
          </label>

          <div className="relative">

            <Search
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search verification..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 focus:border-[#BF5000] focus:outline-none"
            />

          </div>

        </div>

      </div>

      {/* Table */}

      <table className="w-full">

        <thead className="bg-slate-50">

          <tr>

            <th className="w-16 px-6 py-4 text-left">
              ✓
            </th>

            <th className="px-6 py-4 text-left">
              Verification
            </th>

            <th className="px-6 py-4 text-left">
              Description
            </th>

            <th className="px-6 py-4 text-right">
              Duration
            </th>

          </tr>

        </thead>

        <tbody>

          {availableChecks.map((check) => {

            const selected = selectedChecks.includes(check.id);

            return (

              <tr
                key={check.id}
                onClick={() => toggleCheck(check.id)}
                className={`cursor-pointer border-t transition hover:bg-orange-50 ${
                  selected ? "bg-orange-50" : ""
                }`}
              >

                <td className="px-6 py-5">

                  <input
                    type="checkbox"
                    checked={selected}
                    readOnly
                    className="h-5 w-5 accent-[#BF5000]"
                  />

                </td>

                <td className="px-6 py-5 font-semibold">
                  {check.name}
                </td>

                <td className="px-6 py-5 text-slate-500">
                  {check.description}
                </td>

                <td className="px-6 py-5 text-right">
                  {check.estimatedDurationSeconds} sec
                </td>

              </tr>

            );

          })}

          {availableChecks.length === 0 && (

            <tr>

              <td
                colSpan={4}
                className="px-6 py-12 text-center text-slate-500"
              >
                No verification checks found.
              </td>

            </tr>

          )}

        </tbody>

      </table>

      {/* Footer */}

      <div className="flex items-center justify-between border-t bg-slate-50 px-6 py-4">

        <span className="text-sm text-slate-500">
          {selectedChecks.length} verification(s) selected
        </span>

        <span className="font-semibold">
          Estimated Duration: {totalTime} sec
        </span>

      </div>

    </div>
  );
}