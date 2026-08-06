"use client";

import PreferenceRow from "./PreferenceRow";
import Select from "@/components/ui/select";

export default function SecuritySettings() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b border-slate-200 p-6">

        <h2 className="text-xl font-semibold">
          Security
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Configure your account security and authentication preferences.
        </p>

      </div>

      <div>

        <PreferenceRow
          label="Two-Factor Authentication"
          value={
            <div className="flex items-center gap-4">

              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                Disabled
              </span>

              <button
                className="rounded-lg bg-[#BF5000] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#A84700]"
              >
                Configure
              </button>

            </div>
          }
        />

        <PreferenceRow
          label="Session Timeout"
          value={
            <Select defaultValue="30" className="w-72">

              <option value="never">Never</option>

              <option value="15">
                15 Minutes
              </option>

              <option value="30">
                30 Minutes
              </option>

              <option value="60">
                1 Hour
              </option>

              <option value="120">
                2 Hours
              </option>

              <option value="240">
                4 Hours
              </option>

              <option value="480">
                8 Hours
              </option>

            </Select>
          }
        />

        <PreferenceRow
          label="Maximum Login Attempts"
          value={
            <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700">
              3 Attempts (Fixed)
            </span>
          }
        />

        <PreferenceRow
          label="Audit Logging"
          value={
            <Select defaultValue="enabled" className="w-72">

              <option value="enabled">
                Enabled
              </option>

              <option value="disabled">
                Disabled
              </option>

            </Select>
          }
        />

        <PreferenceRow
          label="Password Expiry"
          value={
            <Select defaultValue="90" className="w-72">

              <option value="never">
                Never
              </option>

              <option value="30">
                30 Days
              </option>

              <option value="60">
                60 Days
              </option>

              <option value="90">
                90 Days
              </option>

            </Select>
          }
        />

      </div>

    </div>
  );
}