import {
  TimelineEvent,
  createTimelineEvent,
} from "./timelineEngine";

export function buildVerificationTimeline(): TimelineEvent[] {

  return [

    createTimelineEvent(
      "Verification Created",
      "Verification request submitted.",
      "created"
    ),

    createTimelineEvent(
      "Verification Started",
      "Processing has started.",
      "processing"
    ),

  ];

}