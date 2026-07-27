interface Check {
  id: number;
  name: string;
  description: string;
}

interface ResultsChecksTableProps {
  checks: Check[];
}

export default function ResultsChecksTable({
  checks,
}: ResultsChecksTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b border-slate-200 px-8 py-6">

        <h2 className="text-xl font-semibold">
          Verification Results
        </h2>

        <p className="mt-1 text-slate-500">
          Detailed outcome for each verification performed.
        </p>

      </div>

      <table className="w-full">

        <thead className="bg-slate-50">

          <tr>

            <th className="px-6 py-4 text-left font-medium">
              Verification
            </th>

            <th className="px-6 py-4 text-left font-medium">
              Status
            </th>

            <th className="px-6 py-4 text-left font-medium">
              Result
            </th>

            <th className="px-6 py-4 text-left font-medium">
              Provider
            </th>

          </tr>

        </thead>

        <tbody>

          {checks.map((check) => (

            <tr
              key={check.id}
              className="border-t border-slate-100"
            >

              <td className="px-6 py-5">

                <div className="font-semibold">
                  {check.name}
                </div>

                <div className="mt-1 text-sm text-slate-500">
                  {check.description}
                </div>

              </td>

              <td className="px-6 py-5">

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                  Completed
                </span>

              </td>

              <td className="px-6 py-5">

                <span className="font-medium text-green-700">
                  ✓ Passed
                </span>

              </td>

              <td className="px-6 py-5 text-slate-600">

                VerifyNow

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}