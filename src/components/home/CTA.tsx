import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-16 text-white">

      {/* Background Glow */}
      <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-[#BF5000]/20 blur-3xl"></div>
      <div className="absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-6">

        <div className="mx-auto max-w-4xl text-center">

          <h2 className="mt-8 text-5xl font-bold tracking-tight">
            Verify with Confidence.
            <br />
            Know Who You're Doing Business With.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
           Join organisations across Africa using VerifyNow to build trust,
          reduce fraud and simplify onboarding.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

            <Button
              size="lg"
              className="bg-[#BF5000] px-8 hover:bg-[#a84600]"
            >
              Request a Demo
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-slate-900"
            >
              Contact Sales
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-400">

            <span>✓ Enterprise Ready</span>

            <span>✓ Secure APIs</span>

            <span>✓ POPIA Compliant</span>

            <span>✓ Built for Africa</span>

          </div>

        </div>

      </div>

    </section>
  )
}