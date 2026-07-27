interface Props {
  status: "Queued" | "Running" | "Completed";
}

export default function VerificationStatusBadge({
  status,
}: Props) {
  const styles = {
    Queued:
      "bg-yellow-100 text-yellow-800",

    Running:
      "bg-blue-100 text-blue-800",

    Completed:
      "bg-green-100 text-green-800",
  };

  return (
    <span
      className={`rounded-full px-4 py-2 text-sm font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}