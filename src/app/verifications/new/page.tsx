import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";
import VerificationWizard from "@/components/verification/VerificationWizard";

export default function NewVerificationPage() {
  return (
    <DashboardLayout>

      <div className="mx-auto max-w-5xl">

        <h1 className="text-5xl font-bold">
          New Verification
        </h1>

        <p className="mt-3 text-lg text-slate-500">
          Start a verification for an individual or organisation.
        </p>

        <div className="mt-10">
          <VerificationWizard />
        </div>

      </div>

    </DashboardLayout>
  );
}