"use client";

import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  CheckCircle2,
  Clock3,
  CreditCard,
  History,
  Loader2,
  ReceiptText,
  ShieldCheck,
  WalletCards,
  X,
  Zap,
} from "lucide-react";

import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";

interface CreditPackage {
  id: string;
  name: string;
  description: string | null;
  credits: number;
  price: number;
  currency: string;
}

interface PricingItem {
  id: string;
  checkKey: string;
  checkName: string;
  category: string | null;
  creditCost: number;
  active: boolean;
  description: string | null;
}

interface CreditTransaction {
  id: string;
  type: string;
  amount: number;
  balanceBefore: number;
  balanceAfter: number;
  description: string | null;
  reference: string | null;
  createdAt: string;
}

interface Purchase {
  id: string;
  reference: string;
  status: string;
  credits: number;
  amount: number;
  currency: string;
  package: {
    id: string;
    name: string;
    description?: string | null;
  } | null;
  createdAt: string;
}

interface BillingResponse {
  wallet: {
    id: string;
    balance: number;
  };
  summary: {
    totalPurchased: number;
    totalUsed: number;
    transactionCount: number;
  };
  transactions: CreditTransaction[];
  pricing: PricingItem[];
}

interface PurchaseResponse {
  purchase: {
    id: string;
    reference: string;
    status: string;
    credits: number;
    amount: number;
    currency: string;
    package: {
      id: string;
      name: string;
      description?: string | null;
    } | null;
    createdAt: string;
  };
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-ZA").format(value);
}

function formatCurrency(
  amount: number,
  currency = "ZAR"
) {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(amount);
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-ZA", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function getTransactionLabel(
  transaction: CreditTransaction
) {
  if (transaction.description) {
    return transaction.description;
  }

  switch (transaction.type) {
    case "PURCHASE":
      return "Credit purchase";

    case "USAGE":
      return "Verification usage";

    case "REFUND":
      return "Credit refund";

    case "ADJUSTMENT":
      return "Credit adjustment";

    default:
      return "Credit transaction";
  }
}

function getPurchaseStatusClasses(
  status: string
) {
  switch (status.toUpperCase()) {
    case "COMPLETED":
    case "PAID":
      return "bg-emerald-50 text-emerald-700 border-emerald-200";

    case "PENDING":
      return "bg-amber-50 text-amber-700 border-amber-200";

    case "FAILED":
    case "CANCELLED":
      return "bg-red-50 text-red-700 border-red-200";

    default:
      return "bg-slate-50 text-slate-700 border-slate-200";
  }
}

export default function BillingPage() {
  const [billing, setBilling] =
    useState<BillingResponse | null>(null);

  const [packages, setPackages] =
    useState<CreditPackage[]>([]);

  const [purchases, setPurchases] =
    useState<Purchase[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  const [selectedPackage, setSelectedPackage] =
    useState<CreditPackage | null>(null);

  const [purchaseLoading, setPurchaseLoading] =
    useState(false);

  const [purchaseError, setPurchaseError] =
    useState<string | null>(null);

  const [purchaseSuccess, setPurchaseSuccess] =
    useState<PurchaseResponse["purchase"] | null>(
      null
    );

  useEffect(() => {
    loadBilling();
  }, []);

  async function loadBilling() {
    try {
      setLoading(true);
      setError(null);

      const [
        billingResponse,
        packagesResponse,
        purchasesResponse,
      ] = await Promise.all([
        fetch("/api/billing", {
          cache: "no-store",
        }),

        fetch("/api/billing/packages", {
          cache: "no-store",
        }),

        fetch("/api/billing/purchases", {
          cache: "no-store",
        }),
      ]);

      if (!billingResponse.ok) {
        throw new Error(
          "Unable to load billing information."
        );
      }

      if (!packagesResponse.ok) {
        throw new Error(
          "Unable to load credit packages."
        );
      }

      if (!purchasesResponse.ok) {
        throw new Error(
          "Unable to load purchase history."
        );
      }

      const billingData =
        (await billingResponse.json()) as BillingResponse;

      const packagesData =
        (await packagesResponse.json()) as CreditPackage[];

      const purchasesData =
        (await purchasesResponse.json()) as {
          purchases: Purchase[];
        };

      setBilling(billingData);
      setPackages(packagesData);
      setPurchases(
        purchasesData.purchases ?? []
      );
    } catch (err) {
      console.error(
        "Billing page error:",
        err
      );

      setError(
        err instanceof Error
          ? err.message
          : "Unable to load billing information."
      );
    } finally {
      setLoading(false);
    }
  }

  async function handlePurchase() {
    if (!selectedPackage) {
      return;
    }

    try {
      setPurchaseLoading(true);
      setPurchaseError(null);

      const response = await fetch(
        "/api/billing/purchases",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            packageId:
              selectedPackage.id,
          }),
        }
      );

      const data =
        (await response.json()) as
          | PurchaseResponse
          | { error?: string };

      if (!response.ok) {
        throw new Error(
          "error" in data && data.error
            ? data.error
            : "Unable to create credit purchase."
        );
      }

      const purchase =
        (data as PurchaseResponse).purchase;

      setPurchaseSuccess(purchase);

      setPurchases((current) => [
        purchase,
        ...current,
      ]);

      setSelectedPackage(null);
    } catch (err) {
      console.error(
        "Credit purchase error:",
        err
      );

      setPurchaseError(
        err instanceof Error
          ? err.message
          : "Unable to create credit purchase."
      );
    } finally {
      setPurchaseLoading(false);
    }
  }

  function closePurchaseModal() {
    if (purchaseLoading) {
      return;
    }

    setSelectedPackage(null);
    setPurchaseError(null);
  }

  function closeSuccessModal() {
    setPurchaseSuccess(null);
  }

  return (
    <DashboardLayout>
      <div className="space-y-8 p-6 lg:p-8">
        {/* -------------------------------------------------- */}
        {/* HEADER                                             */}
        {/* -------------------------------------------------- */}

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
                <CreditCard
                  size={18}
                  strokeWidth={2}
                />
              </div>

              <span className="text-sm font-medium text-slate-500">
                Account Billing
              </span>
            </div>

            <h1 className="text-2xl font-semibold tracking-tight text-slate-950 lg:text-3xl">
              Billing
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Manage credits, verification costs
              and transaction history.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
            <WalletCards
              size={18}
              className="text-slate-500"
            />

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Available credits
              </p>

              <p className="text-lg font-semibold text-slate-950">
                {loading
                  ? "—"
                  : formatNumber(
                      billing?.wallet.balance ??
                        0
                    )}
              </p>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------- */}
        {/* ERROR                                               */}
        {/* -------------------------------------------------- */}

        {error && (
          <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            <X
              size={18}
              className="mt-0.5 shrink-0"
            />

            <div>
              <p className="font-semibold">
                Unable to load billing
              </p>

              <p className="mt-1">
                {error}
              </p>

              <button
                type="button"
                onClick={loadBilling}
                className="mt-3 font-semibold underline underline-offset-2"
              >
                Try again
              </button>
            </div>
          </div>
        )}

        {/* -------------------------------------------------- */}
        {/* SUMMARY CARDS                                       */}
        {/* -------------------------------------------------- */}

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                <WalletCards
                  size={19}
                  className="text-slate-700"
                />
              </div>

              <span className="text-xs font-medium text-slate-400">
                CURRENT
              </span>
            </div>

            <p className="mt-5 text-sm text-slate-500">
              Credit balance
            </p>

            <p className="mt-1 text-2xl font-semibold text-slate-950">
              {loading
                ? "—"
                : formatNumber(
                    billing?.wallet.balance ??
                      0
                  )}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
                <ArrowUp
                  size={19}
                  className="text-emerald-600"
                />
              </div>

              <span className="text-xs font-medium text-slate-400">
                PURCHASED
              </span>
            </div>

            <p className="mt-5 text-sm text-slate-500">
              Credits purchased
            </p>

            <p className="mt-1 text-2xl font-semibold text-slate-950">
              {loading
                ? "—"
                : formatNumber(
                    billing?.summary
                      .totalPurchased ?? 0
                  )}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                <ArrowDown
                  size={19}
                  className="text-blue-600"
                />
              </div>

              <span className="text-xs font-medium text-slate-400">
                USED
              </span>
            </div>

            <p className="mt-5 text-sm text-slate-500">
              Credits consumed
            </p>

            <p className="mt-1 text-2xl font-semibold text-slate-950">
              {loading
                ? "—"
                : formatNumber(
                    billing?.summary
                      .totalUsed ?? 0
                  )}
            </p>
          </div>
        </section>

        {/* -------------------------------------------------- */}
        {/* PURCHASE CREDITS                                   */}
        {/* -------------------------------------------------- */}

        <section>
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-slate-950">
              Purchase Credits
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Choose a credit package for your
              verification requirements.
            </p>
          </div>

          {loading ? (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {[1, 2, 3, 4].map(
                (item) => (
                  <div
                    key={item}
                    className="h-64 animate-pulse rounded-2xl border border-slate-200 bg-slate-100"
                  />
                )
              )}
            </div>
          ) : packages.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
              <WalletCards
                size={28}
                className="mx-auto text-slate-400"
              />

              <h3 className="mt-3 font-semibold text-slate-900">
                No credit packages available
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Credit packages have not been
                configured yet.
              </p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {packages.map(
                (creditPackage, index) => (
                  <div
                    key={creditPackage.id}
                    className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                      index === 1
                        ? "border-slate-900 ring-1 ring-slate-900"
                        : "border-slate-200"
                    }`}
                  >
                    {index === 1 && (
                      <div className="absolute -top-3 left-5 rounded-full bg-slate-900 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                        Popular
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                        <Zap
                          size={18}
                          className="text-slate-700"
                        />
                      </div>

                      <span className="text-xs font-medium text-slate-400">
                        PACK
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-slate-950">
                      {creditPackage.name}
                    </h3>

                    <p className="mt-2 min-h-[40px] text-sm leading-5 text-slate-500">
                      {creditPackage.description ||
                        "Additional verification credits for your organisation."}
                    </p>

                    <div className="mt-6">
                      <p className="text-3xl font-bold tracking-tight text-slate-950">
                        {formatCurrency(
                          creditPackage.price,
                          creditPackage.currency
                        )}
                      </p>

                      <p className="mt-1 text-sm font-medium text-slate-500">
                        {formatNumber(
                          creditPackage.credits
                        )}{" "}
                        credits
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setSelectedPackage(
                          creditPackage
                        )
                      }
                      className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                      <CreditCard size={16} />
                      Buy Credits
                    </button>
                  </div>
                )
              )}
            </div>
          )}
        </section>

        {/* -------------------------------------------------- */}
        {/* HOW CREDITS WORK                                    */}
        {/* -------------------------------------------------- */}

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-slate-950">
              How Credits Work
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Credits provide a simple way to manage
              verification usage.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-sm font-bold text-slate-700">
                1
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Buy credits
                </h3>

                <p className="mt-1 text-sm leading-5 text-slate-500">
                  Purchase a credit pack when your
                  organisation needs additional
                  verification capacity.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-sm font-bold text-slate-700">
                2
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Run checks
                </h3>

                <p className="mt-1 text-sm leading-5 text-slate-500">
                  Each verification check consumes
                  the number of credits assigned to
                  that check.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-sm font-bold text-slate-700">
                3
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Track usage
                </h3>

                <p className="mt-1 text-sm leading-5 text-slate-500">
                  Every credit movement is recorded
                  in your transaction history.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------- */}
        {/* VERIFICATION PRICING                               */}
        {/* -------------------------------------------------- */}

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                <ShieldCheck
                  size={19}
                  className="text-slate-700"
                />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-slate-950">
                  Verification Pricing
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Credit costs for available
                  verification checks.
                </p>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="space-y-3 p-6">
              {[1, 2, 3].map(
                (item) => (
                  <div
                    key={item}
                    className="h-14 animate-pulse rounded-xl bg-slate-100"
                  />
                )
              )}
            </div>
          ) : !billing ||
            billing.pricing.length === 0 ? (
            <div className="p-8 text-center">
              <ShieldCheck
                size={28}
                className="mx-auto text-slate-400"
              />

              <p className="mt-3 text-sm font-medium text-slate-700">
                Verification pricing has not been
                configured yet.
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Pricing can be configured as
                verification modules are activated.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {billing.pricing.map(
                (item) => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50">
                        <ShieldCheck
                          size={15}
                          className="text-slate-500"
                        />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {item.checkName}
                        </p>

                        <p className="mt-0.5 text-xs text-slate-500">
                          {item.description ||
                            item.category ||
                            item.checkKey}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                        {formatNumber(
                          item.creditCost
                        )}{" "}
                        credits
                      </span>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </section>

        {/* -------------------------------------------------- */}
        {/* PURCHASE HISTORY                                   */}
        {/* -------------------------------------------------- */}

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col gap-3 border-b border-slate-200 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                <ReceiptText
                  size={19}
                  className="text-slate-700"
                />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-slate-950">
                  Purchase History
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Recent credit purchases and their
                  payment status.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <History size={14} />
              {formatNumber(
                purchases.length
              )}{" "}
              purchases
            </div>
          </div>

          {purchases.length === 0 ? (
            <div className="p-10 text-center">
              <ReceiptText
                size={28}
                className="mx-auto text-slate-400"
              />

              <p className="mt-3 text-sm font-medium text-slate-700">
                No credit purchases yet.
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Your purchases will appear here once
                you buy a credit package.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px]">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/70 text-left">
                    <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Reference
                    </th>

                    <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Package
                    </th>

                    <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Credits
                    </th>

                    <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Amount
                    </th>

                    <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Status
                    </th>

                    <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Date
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {purchases.map(
                    (purchase) => (
                      <tr
                        key={purchase.id}
                        className="transition hover:bg-slate-50/60"
                      >
                        <td className="px-6 py-4">
                          <span className="font-mono text-xs font-medium text-slate-700">
                            {purchase.reference}
                          </span>
                        </td>

                        <td className="px-6 py-4">
                          <span className="text-sm font-medium text-slate-900">
                            {purchase.package
                              ?.name ||
                              "Credit package"}
                          </span>
                        </td>

                        <td className="px-6 py-4">
                          <span className="text-sm font-medium text-slate-700">
                            {formatNumber(
                              purchase.credits
                            )}
                          </span>
                        </td>

                        <td className="px-6 py-4">
                          <span className="text-sm font-semibold text-slate-900">
                            {formatCurrency(
                              purchase.amount,
                              purchase.currency
                            )}
                          </span>
                        </td>

                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${getPurchaseStatusClasses(
                              purchase.status
                            )}`}
                          >
                            {purchase.status.toUpperCase() ===
                              "PENDING" && (
                              <Clock3
                                size={12}
                              />
                            )}

                            {purchase.status.toUpperCase() ===
                              "COMPLETED" && (
                              <CheckCircle2
                                size={12}
                              />
                            )}

                            {purchase.status}
                          </span>
                        </td>

                        <td className="whitespace-nowrap px-6 py-4 text-xs text-slate-500">
                          {formatDate(
                            purchase.createdAt
                          )}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* -------------------------------------------------- */}
        {/* TRANSACTION HISTORY                                */}
        {/* -------------------------------------------------- */}

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                <History
                  size={19}
                  className="text-slate-700"
                />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-slate-950">
                  Credit Transactions
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Every credit movement affecting
                  your organisation's wallet.
                </p>
              </div>
            </div>
          </div>

          {!billing ||
          billing.transactions.length === 0 ? (
            <div className="p-10 text-center">
              <History
                size={28}
                className="mx-auto text-slate-400"
              />

              <p className="mt-3 text-sm font-medium text-slate-700">
                No transactions yet.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {billing.transactions.map(
                (transaction) => {
                  const isCredit =
                    transaction.amount > 0;

                  return (
                    <div
                      key={transaction.id}
                      className="flex flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                            isCredit
                              ? "bg-emerald-50"
                              : "bg-blue-50"
                          }`}
                        >
                          {isCredit ? (
                            <ArrowUp
                              size={16}
                              className="text-emerald-600"
                            />
                          ) : (
                            <ArrowDown
                              size={16}
                              className="text-blue-600"
                            />
                          )}
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {getTransactionLabel(
                              transaction
                            )}
                          </p>

                          <p className="mt-1 text-xs text-slate-400">
                            {formatDate(
                              transaction.createdAt
                            )}
                          </p>

                          {transaction.reference && (
                            <p className="mt-1 font-mono text-[11px] text-slate-400">
                              {transaction.reference}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-8 sm:justify-end">
                        <div className="text-right">
                          <p
                            className={`text-sm font-semibold ${
                              isCredit
                                ? "text-emerald-600"
                                : "text-slate-900"
                            }`}
                          >
                            {isCredit
                              ? "+"
                              : ""}
                            {formatNumber(
                              transaction.amount
                            )}
                          </p>

                          <p className="mt-1 text-xs text-slate-400">
                            credits
                          </p>
                        </div>

                        <div className="hidden text-right sm:block">
                          <p className="text-xs text-slate-400">
                            Balance after
                          </p>

                          <p className="mt-1 text-sm font-semibold text-slate-700">
                            {formatNumber(
                              transaction.balanceAfter
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          )}
        </section>
      </div>

      {/* ================================================== */}
      {/* PURCHASE CONFIRMATION MODAL                       */}
      {/* ================================================== */}

      {selectedPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="purchase-confirmation-title"
            className="w-full max-w-md rounded-2xl border border-slate-200 bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
              <div>
                <h2
                  id="purchase-confirmation-title"
                  className="text-lg font-semibold text-slate-950"
                >
                  Confirm Credit Purchase
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Review your selected credit package.
                </p>
              </div>

              <button
                type="button"
                onClick={
                  closePurchaseModal
                }
                disabled={purchaseLoading}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-5 p-6">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      Package
                    </p>

                    <p className="mt-1 text-lg font-semibold text-slate-950">
                      {selectedPackage.name}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                    <Zap
                      size={18}
                      className="text-slate-700"
                    />
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4 border-t border-slate-200 pt-4">
                  <div>
                    <p className="text-xs text-slate-400">
                      Credits
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      {formatNumber(
                        selectedPackage.credits
                      )}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      Amount
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      {formatCurrency(
                        selectedPackage.price,
                        selectedPackage.currency
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                <div className="flex gap-3">
                  <Clock3
                    size={17}
                    className="mt-0.5 shrink-0 text-amber-600"
                  />

                  <div>
                    <p className="text-sm font-semibold text-amber-900">
                      Payment confirmation required
                    </p>

                    <p className="mt-1 text-xs leading-5 text-amber-800">
                      This action creates a pending
                      purchase. Credits will only be
                      added to your wallet after
                      payment has been successfully
                      confirmed.
                    </p>
                  </div>
                </div>
              </div>

              {purchaseError && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                  {purchaseError}
                </div>
              )}

              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={
                    closePurchaseModal
                  }
                  disabled={purchaseLoading}
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handlePurchase}
                  disabled={purchaseLoading}
                  className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {purchaseLoading ? (
                    <>
                      <Loader2
                        size={16}
                        className="animate-spin"
                      />

                      Creating purchase...
                    </>
                  ) : (
                    <>
                      <CreditCard size={16} />

                      Confirm Purchase
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================================================== */}
      {/* PURCHASE CREATED MODAL                             */}
      {/* ================================================== */}

      {purchaseSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="purchase-created-title"
            className="w-full max-w-md rounded-2xl border border-slate-200 bg-white shadow-2xl"
          >
            <div className="p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
                <CheckCircle2
                  size={28}
                  className="text-emerald-600"
                />
              </div>

              <h2
                id="purchase-created-title"
                className="mt-5 text-xl font-semibold text-slate-950"
              >
                Purchase Created
              </h2>

              <p className="mx-auto mt-2 max-w-sm text-sm leading-5 text-slate-500">
                Your credit purchase has been
                created and is currently pending
                payment confirmation.
              </p>

              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Reference
                  </span>

                  <span className="font-mono text-xs font-semibold text-slate-700">
                    {purchaseSuccess.reference}
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Credits
                  </span>

                  <span className="text-sm font-semibold text-slate-900">
                    {formatNumber(
                      purchaseSuccess.credits
                    )}
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Amount
                  </span>

                  <span className="text-sm font-semibold text-slate-900">
                    {formatCurrency(
                      purchaseSuccess.amount,
                      purchaseSuccess.currency
                    )}
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Status
                  </span>

                  <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
                    PENDING
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={
                  closeSuccessModal
                }
                className="mt-6 w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}