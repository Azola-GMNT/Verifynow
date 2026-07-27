"use client";

import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";

import VerificationHistoryHeader from "@/components/history/VerificationHistoryHeader";
import VerificationHistoryToolbar from "@/components/history/VerificationHistoryToolbar";
import VerificationHistoryTable from "@/components/history/VerificationHistoryTable";
import VerificationHistoryPagination from "@/components/history/VerificationHistoryPagination";

export default function VerificationHistoryPage() {
  return (
    <DashboardLayout>

      <div className="mx-auto max-w-7xl space-y-8">

        <VerificationHistoryHeader />

        <VerificationHistoryToolbar />

        <VerificationHistoryTable />

        <VerificationHistoryPagination />

      </div>

    </DashboardLayout>
  );
}