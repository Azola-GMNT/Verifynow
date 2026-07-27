interface WizardFooterProps {
  backLabel?: string;
  nextLabel?: string;
  disableNext?: boolean;
  onBack: () => void;
  onNext: () => void;
  
}

export default function WizardFooter({
  backLabel = "Back",
  nextLabel = "Continue",
  disableNext = false,
  onBack,
  onNext,
}: WizardFooterProps) {
  return (
    <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6">

      <button
        type="button"
        onClick={onBack}
        className="rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
      >
        {backLabel}
      </button>

      <button
        type="button"
        disabled={disableNext}
        onClick={onNext}
        className={`rounded-xl px-8 py-3 font-semibold text-white transition
          ${
            disableNext
              ? "cursor-not-allowed bg-slate-300"
              : "bg-[#BF5000] hover:bg-[#a84600]"
          }`}
      >
        {nextLabel}
      </button>

    </div>
  );
}