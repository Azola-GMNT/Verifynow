export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-ZA").format(date);
}

export function formatDateTime(date: Date) {
  return new Intl.DateTimeFormat("en-ZA", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}