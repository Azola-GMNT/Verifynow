export default function Statistics() {
  return (
    <section className="bg-white py-20">

      <div className="container mx-auto px-6">

        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Enterprise Performance
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            We make it easier to do business confidently across Africa.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border bg-white p-8 text-center shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:border-[#BF5000] hover:ring-2 hover:ring-[#BF5000]/20">
        
            {/* Bronze Accent Line */}
  <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-[#BF5000]"></div>
  
            <h3 className="text-5xl font-bold text-[#BF5000]">
              &lt; 5 sec
            </h3>

            <p className="mt-3 font-semibold text-slate-800">
              Average Verification Time
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Fast identity verification designed for enterprise workflows.
            </p>

          </div>

          <div className="rounded-2xl border bg-white p-8 text-center shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:border-[#BF5000] hover:ring-2 hover:ring-[#BF5000]/20">

              {/* Bronze Accent Line */}
  <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-[#BF5000]"></div>

            <h3 className="text-5xl font-bold text-[#BF5000]">
              24/7
            </h3>

            <p className="mt-3 font-semibold text-slate-800">
              Platform Availability
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Always available whenever your business needs to verify identities.
            </p>

          </div>

          <div className="rounded-2xl border bg-white p-8 text-center shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:border-[#BF5000] hover:ring-2 hover:ring-[#BF5000]/20">

              {/* Bronze Accent Line */}
  <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-[#BF5000]"></div>
            
            <h3 className="text-5xl font-bold text-[#BF5000]">
              POPIA
            </h3>

            <p className="mt-3 font-semibold text-slate-800">
              Privacy Ready
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Built with South African privacy and data protection principles in mind.
            </p>

          </div>

          <div className="rounded-2xl border bg-white p-8 text-center shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:border-[#BF5000] hover:ring-2 hover:ring-[#BF5000]/20">

              {/* Bronze Accent Line */}
  <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-[#BF5000]"></div>
            
            <h3 className="text-5xl font-bold text-[#BF5000]">
              API
            </h3>

            <p className="mt-3 font-semibold text-slate-800">
              API-First Platform
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Integrate VerifyNow into your existing systems with ease.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}