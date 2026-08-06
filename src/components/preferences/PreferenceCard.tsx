interface PreferenceCardProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function PreferenceCard({
  title,
  subtitle,
  children,
}: PreferenceCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b border-slate-200 px-6 py-5">

        <h2 className="text-xl font-semibold text-slate-900">
          {title}
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          {subtitle}
        </p>

      </div>

      {children}

    </div>
  );
}