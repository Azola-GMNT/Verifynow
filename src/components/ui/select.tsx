"use client";

interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export default function Select({
  className = "",
  children,
  ...props
}: SelectProps) {
  return (
    <select
      {...props}
      className={`
        w-full
        rounded-lg
        border
        border-slate-300
        bg-white
        px-3
        py-2
        text-sm
        text-slate-700
        shadow-sm
        transition
        focus:border-[#BF5000]
        focus:outline-none
        focus:ring-2
        focus:ring-orange-200
        ${className}
      `}
    >
      {children}
    </select>
  );
}