import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";
import TeamHeader from "@/components/team/TeamHeader";
import TeamSummary from "@/components/team/TeamSummary";
import TeamTable from "@/components/team/TeamTable";

export default function TeamPage() {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-[980px] space-y-8">
        <TeamHeader />
        <TeamSummary />
        <TeamTable />
      </div>
    </DashboardLayout>
  );
}