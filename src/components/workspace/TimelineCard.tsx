"use client";

import { VerificationTimeline } from "@/types/verification";

interface Props {
  timeline: VerificationTimeline;
}

export default function TimelineCard({
  timeline,
}: Props) {

  const events = [
    {
      title: "Verification Created",
      date: timeline.createdAt,
      colour: "bg-blue-500",
    },
    {
      title: "Verification Started",
      date: timeline.startedAt,
      colour: "bg-orange-500",
    },
    {
      title: "Verification Completed",
      date: timeline.completedAt,
      colour: "bg-green-500",
    },
  ].filter((event) => event.date);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-8 text-xl font-semibold">
        Verification Timeline
      </h2>

      <div className="space-y-6">

        {events.map((event, index) => (

          <div
            key={event.title}
            className="flex gap-4"
          >

            <div className="flex flex-col items-center">

              <div
                className={`h-4 w-4 rounded-full ${event.colour}`}
              />

              {index !== events.length - 1 && (
                <div className="mt-1 h-12 w-px bg-slate-300" />
              )}

            </div>

            <div>

              <div className="font-semibold">
                {event.title}
              </div>

              <div className="text-sm text-slate-500">
                {new Date(
                  event.date!
                ).toLocaleString()}
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}