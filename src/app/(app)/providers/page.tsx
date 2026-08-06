import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";

import ProviderHeader from "@/components/providers/ProviderHeader";
import ProviderSummary from "@/components/providers/ProviderSummary";
import ProviderTable from "@/components/providers/ProviderTable";

export default function ProvidersPage() {
  return (
    <DashboardLayout>

      <div className="mx-auto max-w-7xl space-y-8">

        <ProviderHeader />

        <ProviderSummary />

        <ProviderTable />

      </div>

    </DashboardLayout>
  );
}