import Sidebar from "@/components/dashboard/layout/Sidebar";
import Header from "@/components/dashboard/layout/Header";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({
  children,
}: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-100">

      <div className="flex">

        <Sidebar />

        <div className="flex flex-1 flex-col">

          <Header />

          <main className="flex-1 p-8">
            {children}
          </main>

        </div>

      </div>

    </div>
  );
}