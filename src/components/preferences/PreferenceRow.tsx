interface PreferenceRowProps {
  label: string;
  value: React.ReactNode;
}

export default function PreferenceRow({
  label,
  value,
}: PreferenceRowProps) {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 last:border-b-0">

      <span className="text-slate-600">
        {label}
      </span>

      <div className="font-medium text-slate-900">
        {value}
      </div>

    </div>
  );
}