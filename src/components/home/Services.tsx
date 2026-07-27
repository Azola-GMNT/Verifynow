import {
  Fingerprint,
  Building2,
  FileCheck,
  ShieldAlert,
  Users,
  Workflow,
  ArrowRight,
} from "lucide-react"

const services = [
  {
    icon: Fingerprint,
    title: "Identity Verification",
    description:
      "Verify identities securely using trusted data sources to reduce fraud and accelerate onboarding.",
  },
  {
    icon: Building2,
    title: "Business Verification",
    description:
      "Validate company registration, ownership and legal standing before doing business.",
  },
  {
    icon: FileCheck,
    title: "Document Verification",
    description:
      "Authenticate important documents with confidence and improve compliance processes.",
  },
  {
    icon: ShieldAlert,
    title: "Fraud & Risk Screening",
    description:
      "Identify high-risk individuals and organisations before critical business decisions.",
  },
  {
    icon: Users,
    title: "Customer Due Diligence",
    description:
      "Strengthen KYC and onboarding with reliable verification and risk intelligence.",
  },
  {
    icon: Workflow,
    title: "API Integration",
    description:
      "Integrate VerifyNow directly into your systems with our secure, developer-friendly APIs.",
  },
]

export default function Services() {
  return (
    <section className="bg-white py-28">

      <div className="container mx-auto px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

                    <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Verification Solutions
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#BF5000]"></div>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From customer onboarding to supplier due diligence,
            VerifyNow provides secure verification solutions that help
            organisations make faster, smarter and more confident
            decisions across Africa.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => {

            const Icon = service.icon

            return (

              <div
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#BF5000] hover:shadow-2xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#BF5000]/10 transition-all duration-300 group-hover:bg-[#BF5000]">

                  <Icon className="h-8 w-8 text-[#BF5000] transition-all duration-300 group-hover:text-white" />

                </div>

                <h3 className="mt-8 text-2xl font-semibold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {service.description}
                </p>

                <button className="mt-8 flex items-center gap-2 font-semibold text-[#BF5000] transition-all duration-300 group-hover:gap-4">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </button>

              </div>

            )

          })}

        </div>

      </div>

    </section>
  )
}