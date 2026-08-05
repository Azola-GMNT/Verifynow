"use client";

const providers = [
  { name: "Home Affairs", status: "online" },
  { name: "CIPC", status: "online" },
  { name: "SARS", status: "slow" },
  { name: "SAPS", status: "offline" },
  { name: "ICGLR", status: "online" },
  { name: "SAMRASS", status: "online" },
  { name: "MIE", status: "online" },
  { name: "Biometrics", status: "online" },
];

export default function ProviderStatusTicker() {
  return (
    <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

      <div className="flex overflow-hidden whitespace-nowrap">

        <div
          className="flex min-w-max animate-providerTicker gap-10 py-3 px-6"
        >

          {[...providers, ...providers].map(
            (provider, index) => (
              <div
                key={`${provider.name}-${index}`}
                className="flex items-center gap-2 text-sm font-medium"
              >
                <span
                  className={`h-3 w-3 rounded-full ${
                    provider.status === "online"
                      ? "bg-green-500"
                      : provider.status === "slow"
                      ? "bg-orange-500"
                      : "bg-red-500"
                  }`}
                />

                <span className="font-semibold">
                  {provider.name}
                </span>

                <span
                  className={`${
                    provider.status === "online"
                      ? "text-green-600"
                      : provider.status === "slow"
                      ? "text-orange-600"
                      : "text-red-600"
                  }`}
                >
                  {provider.status === "online"
                    ? "Online"
                    : provider.status === "slow"
                    ? "Slow"
                    : "Offline"}
                </span>
              </div>
            )
          )}

        </div>

      </div>

    </div>
  );
}