import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";
import VerificationSummary from "@/components/dashboard/VerificationSummary";
import DashboardClient from "@/components/dashboard/DashboardClient";
import DashboardGreeting from "@/components/dashboard/DashboardGreeting";
import ProviderStatusTicker from "@/components/dashboard/ProviderStatusTicker";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <DashboardLayout>

      <DashboardGreeting />
      
          <div className="mx-auto max-w-[980px]">

        <div className="mb-8 overflow-hidden rounded-2xl border border-orange-200 bg-orange-50">

          <div className="flex flex-col gap-6 p-8 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <h2 className="text-3xl font-bold text-slate-900">
                Start a New Verification
              </h2>

              <p className="mt-3 max-w-2xl text-slate-600">
                Verify an individual or organisation using trusted identity,
                <br />
                business and compliance data sources.
              </p>

            </div>

            <div className="flex flex-wrap gap-4">

              <Link href="/verifications/new">

                <Button
                  size="lg"
                  className="bg-[#BF5000] px-8 text-white hover:bg-[#A84700]"
                >
                  + New Verification
                </Button>

              </Link>

            </div>

          </div>

        </div>

        <VerificationSummary />

        <DashboardClient />

        <ProviderStatusTicker />

      </div>

    </DashboardLayout>
  );
}