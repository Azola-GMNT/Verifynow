"use client";

import { team } from "@/data/team";

export default function TeamTable() {
  const statusColour = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";

      case "Away":
        return "bg-orange-100 text-orange-700";

      case "Offline":
        return "bg-red-100 text-red-700";

      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b border-slate-200 p-6">

        <h2 className="text-xl font-semibold">
          Team Members
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Current users with access to the VerifyNow platform.
        </p>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-50">

            <tr className="text-left text-sm font-semibold text-slate-600">

              <th className="px-6 py-4">User</th>

              <th className="px-6 py-4">Role</th>

              <th className="px-6 py-4">Department</th>

              <th className="px-6 py-4">Status</th>

              <th className="px-6 py-4">Last Active</th>

            </tr>

          </thead>

          <tbody>

            {team.map((member) => (

              <tr
                key={member.id}
                className="border-t border-slate-100 hover:bg-slate-50"
              >

                <td className="px-6 py-5">

                  <div className="flex items-center gap-4">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#BF5000] text-sm font-semibold text-white">

                      {member.name
                        .split(" ")
                        .map((name) => name[0])
                        .join("")}

                    </div>

                    <div>

                      <div className="font-semibold text-slate-900">
                        {member.name}
                      </div>

                    </div>

                  </div>

                </td>

                <td className="px-6 py-5">

                  <span className="rounded-lg bg-slate-100 px-3 py-1 text-sm">

                    {member.role}

                  </span>

                </td>

                <td className="px-6 py-5">

                  {member.department}

                </td>

                <td className="px-6 py-5">

                  <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${statusColour(
                      member.status
                    )}`}
                  >
                    {member.status}
                  </span>

                </td>

                <td className="px-6 py-5 text-slate-500">

                  {member.lastActive}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}