import { Suspense } from "react";
import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";
import VerificationWizard from "@/components/verification/VerificationWizard";

export default function NewVerificationPage() {
  return (
    <DashboardLayout>
      <Suspense
        fallback={
          <div className="p-6 text-sm text-slate-500">
            Loading verification...
          </div>
        }
      >
        <VerificationWizard />
      </Suspense>
    </DashboardLayout>
  );
}