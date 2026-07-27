import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-100">

      <div className="flex">

        <Sidebar />

        <div className="flex-1">

          <Topbar />

          <main className="p-8">
            {children}
          </main>

        </div>

      </div>

    </div>
  );
}