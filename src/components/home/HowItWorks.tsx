import {
  SearchCheck,
  ShieldCheck,
  FileCheck2,
  BadgeCheck,
} from "lucide-react"

const steps = [
  {
    number: "01",
    icon: SearchCheck,
    title: "Submit Verification",
    description:
      "Choose whether you're verifying an individual, business or document.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Secure Validation",
    description:
      "VerifyNow validates information against trusted verification sources.",
  },
  {
    number: "03",
    icon: FileCheck2,
    title: "Receive Results",
    description:
      "Verification results are returned securely through the dashboard or API.",
  },
  {
    number: "04",
    icon: BadgeCheck,
    title: "Make Confident Decisions",
    description:
      "Proceed with confidence using verified, trusted identity intelligence.",
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-white py-28">

      <div className="container mx-auto px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Verify in Four Simple Steps
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#BF5000]"></div>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From submission to trusted verification results,
            VerifyNow streamlines every step of the verification journey.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Desktop Connecting Line */}
          <div className="absolute left-0 right-0 top-10 hidden h-1 bg-slate-200 lg:block"></div>

          <div className="relative grid gap-12 lg:grid-cols-4">

            {steps.map((step) => {

              const Icon = step.icon

              return (

                <div
                  key={step.number}
                  className="group text-center"
                >

                  {/* Number Circle */}

                  <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-[#BF5000]">

  <span className="text-xl font-semibold text-[#BF5000] group-hover:text-white">
    {step.number}
  </span>

</div>

                 {/* Title */}

                  <h3 className="mt-4 text-xl font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-5 leading-7 text-slate-600">
                    {step.description}
                  </p>

                </div>

              )

            })}

          </div>

        </div>

      </div>

    </section>
  )
}