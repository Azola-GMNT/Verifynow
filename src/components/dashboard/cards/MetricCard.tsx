import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconColor?: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
}

export default function MetricCard({
  title,
  value,
  icon: Icon,
  iconColor = "#BF5000",
  change,
  changeType = "neutral",
}: MetricCardProps) {
  const changeColour = {
    positive: "text-green-600",
    negative: "text-red-600",
    neutral: "text-slate-500",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            {value}
          </h2>

          {change && (
            <p
              className={`mt-3 text-sm font-medium ${changeColour[changeType]}`}
            >
              {change}
            </p>
          )}

        </div>

        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl"
          style={{
            backgroundColor: `${iconColor}15`,
          }}
        >
          <Icon
            className="h-6 w-6"
            style={{
              color: iconColor,
            }}
          />
        </div>

      </div>

    </div>
  );
}