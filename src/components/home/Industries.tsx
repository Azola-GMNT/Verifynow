import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const industries = [
  {
    title: "Financial Services",
    description: "KYC, customer onboarding and fraud prevention.",
  },
  {
    title: "Government",
    description: "Citizen, supplier and business verification.",
  },
  {
    title: "Mining & Resources",
    description: "Verify suppliers, contractors and trading partners.",
  },
  {
    title: "Healthcare",
    description: "Secure patient and practitioner verification.",
  },
  {
    title: "Logistics & Supply Chain",
    description: "Verify transport partners and cross-border suppliers.",
  },
  {
    title: "Telecommunications",
    description: "Customer onboarding and digital identity verification.",
  },
  {
    title: "Insurance",
    description: "Reduce fraud during policy applications and claims.",
  },
  {
    title: "Education",
    description: "Verify students, staff and institutional records.",
  },
]

export default function Industries() {
  return (
    <section className="bg-slate-50 py-28">

      <div className="container mx-auto px-6">

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Built for Every Industry Where Trust Matters
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#BF5000]"></div>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From financial institutions to mining companies,
            VerifyNow helps organisations across Africa make
            faster and more confident verification decisions.
          </p>

        </div>

        {/* Content */}

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Image */}

          <div className="overflow-hidden rounded-3xl shadow-xl">

            <Image
              src="/kyc3.jpg"
              alt="African Business"
              width={800}
              height={700}
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>

          {/* Right List */}

          <div className="space-y-2">

            {industries.map((industry) => (

              <div
                key={industry.title}
               className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-[#BF5000] hover:shadow-lg"
              >

                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#BF5000]"/>
                <div>

                  <h3 className="text-base font-semibold text-slate-900">
                    {industry.title}
                  </h3>

                  <p className="mt-0.5 text-sm leading-6 text-slate-600">
                    {industry.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}