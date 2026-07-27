import { Check } from "lucide-react";

interface SubjectTypeCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}

export default function SubjectTypeCard({
  title,
  description,
  icon,
  selected,
  onClick,
}: SubjectTypeCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative w-full rounded-2xl border p-6 text-left transition-all duration-300
        ${
          selected
            ? "border-[#BF5000] bg-orange-50 shadow-md"
            : "border-slate-200 bg-white hover:border-[#BF5000] hover:shadow-md"
        }`}
    >
      {selected && (
        <div className="absolute right-5 top-5 rounded-full bg-[#BF5000] p-1">
          <Check className="h-4 w-4 text-white" />
        </div>
      )}

      <div className="mb-5 text-[#BF5000]">
        {icon}
      </div>

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        {description}
      </p>
    </button>
  );
}
