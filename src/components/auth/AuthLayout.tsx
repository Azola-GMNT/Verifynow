import Link from "next/link"
import { ShieldCheck } from "lucide-react"

interface AuthLayoutProps {
  title: string
  subtitle: string
  children: React.ReactNode
}

export default function AuthLayout({
  title,
  subtitle,
  children,
}: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-16">

      <div className="w-full max-w-lg">

        {/* Logo */}

        <div className="mb-10 flex flex-col items-center">

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <ShieldCheck className="h-10 w-10 text-[#BF5000]" />

            <span className="text-3xl font-bold text-slate-900">
              VerifyNow
            </span>
          </Link>

        </div>

        {/* Heading */}

        <div className="mb-8 text-center">

          <h1 className="text-4xl font-bold text-slate-900">
            {title}
          </h1>

          <p className="mt-3 text-slate-600">
            {subtitle}
          </p>

        </div>

        {/* Form */}

        {children}

      </div>

    </main>
  )
}