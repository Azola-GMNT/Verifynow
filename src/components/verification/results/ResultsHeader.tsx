interface ResultsHeaderProps {
  verificationId: string;
  status?: "Completed" | "Manual Review" | "Failed";
}

export default function ResultsHeader({
  verificationId,
  status = "Completed",
}: ResultsHeaderProps) {
  const statusConfig = {
    Completed: {
      title: "Verification Completed Successfully",
      badge: "VERIFIED",
      badgeClass:
        "bg-green-100 text-green-700 border border-green-200",
    },
    "Manual Review": {
      title: "Verification Completed - Manual Review Required",
      badge: "REVIEW",
      badgeClass:
        "bg-amber-100 text-amber-700 border border-amber-200",
    },
    Failed: {
      title: "Verification Failed",
      badge: "FAILED",
      badgeClass:
        "bg-red-100 text-red-700 border border-red-200",
    },
  };

  const config = statusConfig[status];

  const completedAt = new Date();

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="flex items-start justify-between">

        <div>

          <h1 className="text-3xl font-bold text-slate-900">
            {config.title}
          </h1>

          <p className="mt-2 text-slate-500">
            The verification request has been processed successfully.
          </p>

        </div>

        <span
          className={`rounded-full px-5 py-2 text-sm font-semibold ${config.badgeClass}`}
        >
          {config.badge}
        </span>

      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 border-t border-slate-200 pt-6 md:grid-cols-3">

        <div>

          <p className="text-sm text-slate-500">
            Verification ID
          </p>

          <p className="mt-1 font-semibold text-slate-900">
            {verificationId}
          </p>

        </div>

        <div>

          <p className="text-sm text-slate-500">
            Date Completed
          </p>

          <p className="mt-1 font-semibold text-slate-900">
            {completedAt.toLocaleDateString()}
          </p>

        </div>

        <div>

          <p className="text-sm text-slate-500">
            Time Completed
          </p>

          <p className="mt-1 font-semibold text-slate-900">
            {completedAt.toLocaleTimeString()}
          </p>

        </div>

      </div>

    </div>
  );
}