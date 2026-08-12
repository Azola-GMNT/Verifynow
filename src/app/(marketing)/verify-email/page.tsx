import Link from "next/link";
import { MailCheck } from "lucide-react";

export default function VerifyEmailPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="w-full max-w-xl rounded-3xl bg-white p-12 shadow-xl text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#BF5000]/10">
          <MailCheck className="h-10 w-10 text-[#BF5000]" />
        </div>

        <h1 className="mt-8 text-4xl font-bold text-slate-900">
          Check your email
        </h1>

        <p className="mt-5 text-lg text-slate-600 leading-8">
          Thank you for signing up to VerifyNow.
          
          We've sent a verification email to your business email address.
          Click the verification link to activate your VerifyNow account.
        </p>

        <p className="mt-6 text-slate-500">
          Once verified, you can sign in and continue setting up your
          organisation.
        </p>

        <div className="mt-10 space-y-4">
          <Link
            href="/login"
            className="block w-full rounded-xl bg-[#BF5000] py-3 font-semibold text-white hover:bg-[#a84600]"
          >
            Continue to Sign In
          </Link>

          <button
            className="w-full rounded-xl border border-slate-300 py-3 font-medium text-slate-700 hover:bg-slate-100"
          >
            Resend Verification Email
          </button>
        </div>
      </div>
    </main>
  );
}