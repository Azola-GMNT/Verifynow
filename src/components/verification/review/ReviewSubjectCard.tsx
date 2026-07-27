"use client";

interface ReviewSubjectCardProps {
  subjectType: "individual" | "organisation";
  country: string;
}

export default function ReviewSubjectCard({
  subjectType,
  country,
}: ReviewSubjectCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <h3 className="mb-4 text-xl font-semibold">
        Subject Information
      </h3>

      <p>Type: {subjectType}</p>

      <p>Country: {country}</p>
    </div>
  );
}