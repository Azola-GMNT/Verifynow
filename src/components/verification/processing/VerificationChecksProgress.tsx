interface Props {
  checks: string[];

  completed: number;
}

export default function VerificationChecksProgress({
  checks,
  completed,
}: Props) {
  return (
    <div className="space-y-3">

      {checks.map((check, index) => {

        const done = index < completed;

        const running = index === completed;

        return (
          <div
            key={check}
            className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3"
          >
            <span>{check}</span>

            {done && (
              <span className="font-semibold text-green-600">
                ✔ Completed
              </span>
            )}

            {!done && running && (
              <span className="font-semibold text-blue-600">
                Running...
              </span>
            )}

            {!done && !running && (
              <span className="text-slate-400">
                Waiting
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}