export default function VerificationDefaults() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b border-slate-200 p-6">

        <h2 className="text-xl font-semibold">
          Verification Defaults
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Default settings applied when creating new verification cases.
        </p>

      </div>

      <div className="divide-y divide-slate-100">

        <PreferenceRow
          label="Default Country"
          value="South Africa"
        />

        <PreferenceRow
          label="Default Verification Package"
          value="Standard"
        />

        <PreferenceRow
          label="Verification Expiry"
          value="12 Months"
        />

        <PreferenceRow
          label="Auto Archive Completed Cases"
          value="Enabled"
          status="green"
        />

        <PreferenceRow
          label="Risk Threshold"
          value="Medium"
        />

        <PreferenceRow
          label="Provider Priority"
          value="Automatic"
        />

      </div>

    </div>
  );
}

interface PreferenceRowProps {
  label: string;
  value: string;
  status?: "green";
}

function PreferenceRow({
  label,
  value,
  status,
}: PreferenceRowProps) {
  return (
    <div className="flex items-center justify-between px-6 py-4">

      <span className="text-slate-600">
        {label}
      </span>

      {status === "green" ? (
        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
          {value}
        </span>
      ) : (
        <span className="font-medium text-slate-900">
          {value}
        </span>
      )}

    </div>
  );
}