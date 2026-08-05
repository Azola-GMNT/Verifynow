import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";

export default function CompanyModulePage() {
  return (
    <DashboardLayout>
      <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
        <h1 className="text-3xl font-bold">
          Company Module
        </h1>

        <p className="mt-3 text-slate-500">
          Module dashboard coming soon.
        </p>
      </div>
    </DashboardLayout>
  );
}