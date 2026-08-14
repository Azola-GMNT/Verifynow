"use client";

import {
  X,
  CreditCard,
  ShieldCheck,
} from "lucide-react";

interface CreditPackage {
  id: string;
  name: string;
  description?: string | null;
  credits: number;
  price: number;
  currency: string;
}

interface PurchaseConfirmationModalProps {
  package: CreditPackage | null;
  open: boolean;
  loading?: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function PurchaseConfirmationModal({
  package: creditPackage,
  open,
  loading = false,
  onClose,
  onConfirm,
}: PurchaseConfirmationModalProps) {
  if (!open || !creditPackage) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b px-6 py-5">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Confirm Credit Purchase
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Review your credit package before
              continuing.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-6 px-6 py-6">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Selected package
                </p>

                <h3 className="mt-1 text-lg font-semibold text-slate-900">
                  {creditPackage.name}
                </h3>

                {creditPackage.description && (
                  <p className="mt-1 text-sm text-slate-500">
                    {creditPackage.description}
                  </p>
                )}
              </div>

              <CreditCard className="h-6 w-6 text-slate-500" />
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Credits
                </p>

                <p className="mt-1 text-xl font-semibold text-slate-900">
                  {creditPackage.credits.toLocaleString()}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Price
                </p>

                <p className="mt-1 text-xl font-semibold text-slate-900">
                  {creditPackage.currency}{" "}
                  {creditPackage.price.toLocaleString(
                    "en-ZA",
                    {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 rounded-xl border border-blue-100 bg-blue-50 p-4">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />

            <p className="text-sm leading-6 text-blue-800">
              Your purchase will be recorded against
              your organisation. Credits are added only
              after payment has been confirmed.
            </p>
          </div>
        </div>

        <div className="flex justify-end gap-3 border-t bg-slate-50 px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading
              ? "Processing..."
              : "Confirm Purchase"}
          </button>
        </div>
      </div>
    </div>
  );
}