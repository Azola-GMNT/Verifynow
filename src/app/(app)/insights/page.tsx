import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";

import InsightsHeader from "@/components/insights/InsightsHeader";
import InsightsSummary from "@/components/insights/InsightsSummary";

export default function InsightsPage() {
  return (
    <DashboardLayout>

      <div className="mx-auto max-w-[980px] space-y-8">

        <InsightsHeader />

        <InsightsSummary />

      </div>

    </DashboardLayout>
  );
}