"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/config/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-72 border-r border-slate-200 bg-white lg:flex lg:flex-col">
      {/* Logo */}
      <div className="border-b border-slate-200 p-8">
        <h1 className="text-2xl font-bold">
          Verify<span className="text-[#BF5000]">Now</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-6">
        {navigation.map((section) => (
          <div key={section.heading} className="mb-8">
            <p className="mb-3 px-4 text-xs font-semibold tracking-wider text-slate-400">
              {section.heading}
            </p>

            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`flex items-center gap-4 rounded-xl px-4 py-3 transition ${
                      isActive
                        ? "bg-orange-50 text-[#BF5000] font-semibold"
                        : "text-slate-700 hover:bg-slate-100 hover:text-[#BF5000]"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 ${
                        isActive ? "text-[#BF5000]" : ""
                      }`}
                    />

                    <span>{item.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* User */}
      <div className="border-t border-slate-200 p-6">
        <p className="font-semibold">Azola Tshobonga</p>
        <p className="text-sm text-slate-500">GMNT Holdings</p>
      </div>
    </aside>
  );
}