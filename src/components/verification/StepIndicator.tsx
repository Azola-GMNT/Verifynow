import { Check } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
}

const steps = [
  "Subject",
  "Identification",
  "Verification",
  "Review",
];

export default function StepIndicator({
  currentStep,
}: StepIndicatorProps) {
  return (
    <div className="mb-10">

      <div className="flex items-start">

        {steps.map((step, index) => {
          const stepNumber = index + 1;

          const completed = stepNumber < currentStep;
          const active = stepNumber === currentStep;

          return (
            <div
              key={step}
              className="flex flex-1 items-start"
            >
              <div className="flex flex-col items-center">

                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300
                    ${
                      completed || active
                        ? "border-[#BF5000] bg-[#BF5000] text-white"
                        : "border-slate-300 bg-white text-slate-400"
                    }`}
                >
                  {completed ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    stepNumber
                  )}
                </div>

                <p
                  className={`mt-3 text-center text-sm font-medium ${
                    completed || active
                      ? "text-[#BF5000]"
                      : "text-slate-500"
                  }`}
                >
                  {step}
                </p>

              </div>

              {index < steps.length - 1 && (
                <div
                  className={`mt-5 h-1 flex-1 transition-all duration-300 ${
                    completed
                      ? "bg-[#BF5000]"
                      : "bg-slate-200"
                  }`}
                />
              )}

            </div>
          );
        })}

      </div>

    </div>
  );
}