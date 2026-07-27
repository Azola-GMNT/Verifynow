export interface TimelineEvent {

  id: string;

  timestamp: string;

  title: string;

  description: string;

  type:
    | "created"
    | "processing"
    | "provider"
    | "completed"
    | "report";

}

export function createTimelineEvent(
  title: string,
  description: string,
  type: TimelineEvent["type"]
): TimelineEvent {

  return {

    id: crypto.randomUUID(),

    timestamp: new Date().toISOString(),

    title,

    description,

    type,

  };

}