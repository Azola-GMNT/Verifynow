import SectionCard from "@/components/dashboard/cards/SectionCard";
import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import VerificationSummary from "@/components/dashboard/VerificationSummary";
import RecentVerifications from "@/components/dashboard/RecentVerifications";

export default function DashboardPage() {
  return (
    <DashboardLayout>

      <div className="mx-auto max-w-7xl">

{/* Start Verification Banner */}

<div className="mb-8 overflow-hidden rounded-2xl border border-orange-200 bg-orange-50">

  <div className="flex flex-col gap-6 p-8 lg:flex-row lg:items-center lg:justify-between">

    <div>

      <h2 className="text-3xl font-bold text-slate-900">
        Start a New Verification
      </h2>

      <p className="mt-3 max-w-2xl text-slate-600">
        Verify an individual or organisation using trusted identity, <br /> business and compliance data sources.
      </p>

    </div>

    <div className="flex flex-wrap gap-4">

      <Link href="/verifications/new">

        <Button
          size="lg"
          className="bg-[#BF5000] text-white hover:bg-[#a84600] px-8"
        >
          + New Verification
        </Button>

      </Link>

      </div>

  </div>

</div>

        <VerificationSummary />

        {/* Section Cards */}

<div className="mt-8 grid gap-6 lg:grid-cols-2">

  <RecentVerifications/>

  <SectionCard
    title="Needs Attention"
    subtitle="Items requiring action"
  >
    <div className="space-y-4">
      <p>🔴 3 Failed Verifications</p>
      <p>🟠 2 Manual Reviews</p>
      <p>🟡 1 Awaiting Documents</p>
    </div>
  </SectionCard>

</div>

</div>

</DashboardLayout>
);
}