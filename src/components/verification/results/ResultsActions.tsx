"use client";

import {
  Download,
  FileText,
  RotateCcw,
  History,
} from "lucide-react";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  verificationId: string;
}

export default function ResultsActions({
  verificationId,
}: Props) {
  const router = useRouter();

  const [downloadingPdf, setDownloadingPdf] =
    useState(false);

  async function downloadPdf() {
    try {
      setDownloadingPdf(true);

      const response = await fetch(
        `/api/reports/${verificationId}/pdf`
      );

      if (!response.ok) {
        throw new Error(
          "Unable to generate PDF"
        );
      }

      const blob = await response.blob();

      const url =
        window.URL.createObjectURL(blob);

      const link =
        document.createElement("a");

      link.href = url;

      link.download =
        `VerifyNow-${verificationId}.pdf`;

      document.body.appendChild(link);

      link.click();

      link.remove();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(
        "PDF download failed:",
        error
      );

      alert(
        "Unable to generate the verification report. Please try again."
      );
    } finally {
      setDownloadingPdf(false);
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="text-xl font-semibold">
        Report Actions
      </h2>

      <p className="mt-2 text-slate-500">
        Download, share, or start a new verification.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">

        {/* PDF */}
        <button
          type="button"
          onClick={downloadPdf}
          disabled={downloadingPdf}
          className="flex items-center justify-between rounded-xl border border-slate-300 px-5 py-4 transition hover:border-[#BF5000] hover:bg-orange-50 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <div className="flex items-center gap-3">

            <div className="rounded-lg bg-red-100 p-2">
              <Download className="h-5 w-5 text-red-600" />
            </div>

            <div className="text-left">
              <div className="font-semibold">
                {downloadingPdf
                  ? "Generating PDF..."
                  : "Download PDF"}
              </div>

              <div className="text-sm text-slate-500">
                Professional verification report
              </div>
            </div>

          </div>
        </button>

        {/* Word */}
        <button
          type="button"
          disabled
          className="flex items-center justify-between rounded-xl border border-slate-300 px-5 py-4 opacity-60"
        >
          <div className="flex items-center gap-3">

            <div className="rounded-lg bg-blue-100 p-2">
              <FileText className="h-5 w-5 text-blue-600" />
            </div>

            <div className="text-left">
              <div className="font-semibold">
                Download Word
              </div>

              <div className="text-sm text-slate-500">
                Coming next
              </div>
            </div>

          </div>
        </button>

      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">

        {/* New verification */}
        <button
          type="button"
          onClick={() =>
            router.push("/verifications/new")
          }
          className="flex items-center justify-between rounded-xl border border-slate-300 px-5 py-4 transition hover:border-[#BF5000] hover:bg-orange-50"
        >
          <div className="flex items-center gap-3">

            <div className="rounded-lg bg-orange-100 p-2">
              <RotateCcw className="h-5 w-5 text-[#BF5000]" />
            </div>

            <div className="text-left">
              <div className="font-semibold">
                Run Another Verification
              </div>

              <div className="text-sm text-slate-500">
                Start a new verification request
              </div>
            </div>

          </div>
        </button>

        {/* History */}
        <button
          type="button"
          onClick={() =>
            router.push("/verifications")
          }
          className="flex items-center justify-between rounded-xl border border-slate-300 px-5 py-4 transition hover:border-[#BF5000] hover:bg-orange-50"
        >
          <div className="flex items-center gap-3">

            <div className="rounded-lg bg-slate-100 p-2">
              <History className="h-5 w-5 text-slate-600" />
            </div>

            <div className="text-left">
              <div className="font-semibold">
                View Verification History
              </div>

              <div className="text-sm text-slate-500">
                See all previous verification requests
              </div>
            </div>

          </div>
        </button>

      </div>

    </div>
  );
}