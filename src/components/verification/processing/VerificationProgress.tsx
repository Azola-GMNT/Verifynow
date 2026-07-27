interface Props {
  progress: number;
}

export default function VerificationProgress({
  progress,
}: Props) {
  return (
    <div>

      <div className="mb-2 flex justify-between text-sm">

        <span>Overall Progress</span>

        <span>{progress}%</span>

      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-200">

        <div
          className="h-full bg-[#BF5000] transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>
  );
}