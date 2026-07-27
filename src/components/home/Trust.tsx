import {
  ShieldCheck,
  Scale,
  Globe2,
  Cable,
} from "lucide-react"

export default function Trust() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 py-28 text-white">

   
      {/* Navy Overlay */}
      <div className="absolute inset-0 bg-slate-900/60"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">

        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">

                   <h2 className="mt-6 text-5xl font-bold tracking-tight">
           Building Trust Across Africa
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-200">
            VerifyNow helps organisations verify people, businesses and
            documents before critical decisions are made, making it easier to
            build trusted partnerships across Africa.
          </p>

        </div>

        {/* Trust Pillars */}
        <div className="mt-24 grid gap-14 md:grid-cols-2">

          <div className="flex items-start gap-5">
            <ShieldCheck className="mt-1 h-10 w-10 shrink-0 text-[#BF5000]" />

            <div>
              <h3 className="text-2xl font-semibold">
                Secure by Design
              </h3>

              <p className="mt-3 leading-8 text-slate-300">
                Enterprise-grade security safeguards every identity,
                business and document verification from start to finish.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <Scale className="mt-1 h-10 w-10 shrink-0 text-[#BF5000]" />

            <div>
              <h3 className="text-2xl font-semibold">
                Compliance First
              </h3>

              <p className="mt-3 leading-8 text-slate-300">
                Designed with POPIA and industry best practices to help
                organisations verify responsibly and confidently.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <Globe2 className="mt-1 h-10 w-10 shrink-0 text-[#BF5000]" />

            <div>
              <h3 className="text-2xl font-semibold">
                Built for African Business
              </h3>

              <p className="mt-3 leading-8 text-slate-300">
                Whether you're onboarding suppliers, customers or strategic
                partners, VerifyNow helps reduce uncertainty across African
                markets.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <Cable className="mt-1 h-10 w-10 shrink-0 text-[#BF5000]" />

            <div>
              <h3 className="text-2xl font-semibold">
                API First
              </h3>

              <p className="mt-3 leading-8 text-slate-300">
                Powerful APIs integrate seamlessly into your existing
                applications, workflows and enterprise platforms.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}