import ReportViewer from "@/components/reports/ReportViewer";

interface Props {
  params: Promise<{
    verificationId: string;
  }>;
}

export default async function ReportPage({
  params,
}: Props) {
  const { verificationId } = await params;

  return (
    <ReportViewer
      verificationId={verificationId}
    />
  );
}