import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";

import PreferencesHeader from "@/components/preferences/PreferencesHeader";
import ApplicationPreferences from "@/components/preferences/ApplicationPreferences";

import VerificationDefaults from "@/components/preferences/VerificationDefaults";
import PasswordManagement from "@/components/preferences/PasswordManagement";
import SecuritySettings from "@/components/preferences/SecuritySettings";

export default function PreferencesPage() {
  return (
    <DashboardLayout>

      <div className="mx-auto max-w-[980px] space-y-8">

        <PreferencesHeader />

        <ApplicationPreferences />

        <SecuritySettings />

        <VerificationDefaults />

        <PasswordManagement />

      </div>

    </DashboardLayout>
  );
}