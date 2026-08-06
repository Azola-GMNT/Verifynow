"use client";

import PreferenceRow from "./PreferenceRow";
import Select from "@/components/ui/select";

export default function ApplicationPreferences() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b border-slate-200 p-6">
        <h2 className="text-xl font-semibold">
          Application Preferences
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Configure how VerifyNow behaves for your account.
        </p>
      </div>

      <div>

        <PreferenceRow
          label="Theme"
          value={
            <Select defaultValue="light" className="w-72">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System Default</option>
            </Select>
          }
        />

        <PreferenceRow
          label="Language"
          value={
            <Select defaultValue="english" className="w-72">
              <option value="english">English</option>
              <option value="french">Français</option>
              <option value="portuguese">Português</option>
              <option value="spanish">Español</option>
              <option value="arabic">العربية</option>
              <option value="mandarin">中文 (简体)</option>
              <option value="zulu">isiZulu</option>
            </Select>
          }
        />

        <PreferenceRow
          label="Time Zone"
          value={
            <Select defaultValue="sast" className="w-72">
              <option value="pst">Pacific Time (UTC-8)</option>
              <option value="mst">Mountain Time (UTC-7)</option>
              <option value="cst">Central Time (UTC-6)</option>
              <option value="est">Eastern Time (UTC-5)</option>
              <option value="gmt">Greenwich Mean Time (UTC±0)</option>
              <option value="cet">Central European Time (UTC+1)</option>
              <option value="eet">Eastern European Time (UTC+2)</option>
              <option value="sast">
                South Africa Standard Time (UTC+2)
              </option>
              <option value="ast">Arabia Standard Time (UTC+3)</option>
              <option value="gst">Gulf Standard Time (UTC+4)</option>
              <option value="ist">India Standard Time (UTC+5:30)</option>
              <option value="china">China Standard Time (UTC+8)</option>
              <option value="jst">Japan Standard Time (UTC+9)</option>
              <option value="aest">
                Australian Eastern Time (UTC+10)
              </option>
            </Select>
          }
        />

        <PreferenceRow
          label="Default Country"
          value={
            <Select defaultValue="south-africa" className="w-72">
              <option>South Africa</option>
              <option>Botswana</option>
              <option>Namibia</option>
              <option>Zimbabwe</option>
              <option>Zambia</option>
              <option>Mozambique</option>
              <option>Angola</option>
              <option>Tanzania</option>
              <option>Kenya</option>
              <option>Uganda</option>
              <option>Rwanda</option>
              <option>DRC</option>
              <option>Sierra Leone</option>
              <option>Senegal</option>
              <option>Ghana</option>
              <option>Nigeria</option>
              <option>United Arab Emirates</option>
              <option>United Kingdom</option>
              <option>United States</option>
              <option>Other</option>
            </Select>
          }
        />

        <PreferenceRow
          label="Date Format"
          value={
            <Select defaultValue="ddmmyyyy" className="w-72">
              <option value="ddmmyyyy">DD/MM/YYYY</option>
              <option value="mmddyyyy">MM/DD/YYYY</option>
              <option value="yyyymmdd">YYYY-MM-DD</option>
            </Select>
          }
        />

        <PreferenceRow
          label="Dashboard Refresh"
          value={
            <Select defaultValue="30" className="w-72">
              <option value="off">Off</option>
              <option value="15">15 Seconds</option>
              <option value="30">30 Seconds</option>
              <option value="60">1 Minute</option>
              <option value="300">5 Minutes</option>
            </Select>
          }
        />

        <PreferenceRow
          label="Default Landing Page"
          value={
            <Select defaultValue="dashboard" className="w-72">
              <option value="dashboard">Dashboard</option>
              <option value="new">New Verification</option>
              <option value="workspace">Workspace</option>
              <option value="history">History</option>
              <option value="insights">Insights</option>
            </Select>
          }
        />

      </div>

    </div>
  );
}