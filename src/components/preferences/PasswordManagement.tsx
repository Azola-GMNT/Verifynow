import { Button } from "@/components/ui/button";

export default function PasswordManagement() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b border-slate-200 p-6">

        <h2 className="text-xl font-semibold">
          Password Management
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Manage your password and active sessions.
        </p>

      </div>

      <div className="divide-y divide-slate-100">

        <PreferenceRow
          label="Last Password Changed"
          value="45 Days Ago"
        />

        <PreferenceRow
          label="Current Session"
          value="Chrome • Windows"
        />

        <PreferenceRow
          label="Other Active Sessions"
          value="0"
        />

      </div>

      <div className="flex gap-4 p-6">

        <Button
          className="bg-[#BF5000] text-white hover:bg-[#A84700]"
        >
          Change Password
        </Button>

        <Button
          variant="outline"
        >
          Sign Out All Devices
        </Button>

      </div>

    </div>
  );
}

interface PreferenceRowProps {
  label: string;
  value: string;
}

function PreferenceRow({
  label,
  value,
}: PreferenceRowProps) {
  return (
    <div className="flex items-center justify-between px-6 py-4">

      <span className="text-slate-600">
        {label}
      </span>

      <span className="font-medium text-slate-900">
        {value}
      </span>

    </div>
  );
}