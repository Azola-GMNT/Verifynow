"use client";

import { providers } from "@/data/providers";

export default function ProviderTable() {
  const statusColour = (status: string) => {
    switch (status) {
      case "Online":
        return "bg-green-100 text-green-700";

      case "Slow":
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
          Verification Providers
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Current provider availability across the VerifyNow platform.
        </p>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-50">

            <tr className="text-left text-sm font-semibold text-slate-600">

              <th className="px-6 py-4">Provider</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Country</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Avg Response</th>
              <th className="px-6 py-4">Last Checked</th>

            </tr>

          </thead>

          <tbody>

            {providers.map((provider) => (

              <tr
                key={provider.id}
                className="border-t border-slate-100 transition hover:bg-slate-50"
              >

                <td className="px-6 py-5">

                  <div className="font-semibold text-slate-900">
                    {provider.short}
                  </div>

                  <div className="text-sm text-slate-500">
                    {provider.name}
                  </div>

                </td>

                <td className="px-6 py-5">
                  {provider.category}
                </td>

                <td className="px-6 py-5">
                  {provider.country}
                </td>

                <td className="px-6 py-5">

                  <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${statusColour(
                      provider.status
                    )}`}
                  >
                    {provider.status}
                  </span>

                </td>

                <td className="px-6 py-5">
                  {provider.response}
                </td>

                <td className="px-6 py-5 text-slate-500">
                  {provider.lastChecked}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}