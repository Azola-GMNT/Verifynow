import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] overflow-hidden">

        <Image
          src="/contact-hero1.jpg"
          alt="Business meeting"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/75" />

        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-6">

            <div className="max-w-3xl">

               <h1 className="mt-6 text-5xl font-bold text-white">
                Need identity verification solutions?
              </h1>

              <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-300">
                Our team is ready to help you find the right solution.
              </p>

            </div>

          </div>
        </div>

      </section>

      {/* Contact Form */}
      <section className="bg-white py-20">

        <div className="container mx-auto px-6">

          <div className="grid gap-16 lg:grid-cols-[0.45fr_0.55fr]">

            {/* Left */}

            <div>

              <Image
                src="/contact-side.jpg"
                alt="Business discussion"
                width={650}
                height={750}
                className="rounded-3xl shadow-xl object-cover"
              />

              <h2 className="mt-10 text-3xl font-bold text-slate-900">
                Why Organisations Reach Out
              </h2>

              <div className="mt-8 space-y-5 text-slate-600">

                <p>✔ Explore our verification solutions</p>

                <p>✔ Schedule a personalised product demonstration</p>

                <p>✔ Discuss API integration requirements</p>

                <p>✔ Learn about compliance and verification</p>

                <p>✔ Discover enterprise verification capabilities</p>

              </div>

            </div>

            {/* Right */}

            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg">

              <h2 className="text-3xl font-bold text-slate-900">
                Let's Talk Business!
              </h2>

              <p className="mt-4 text-slate-600">
                Tell us about your organisation and your verification
                requirements. We'll recommend the right solution for your
                business.
              </p>

              <form className="mt-10 space-y-6">

                <div className="grid gap-6 md:grid-cols-2">

                  <input
                    type="text"
                    placeholder="First Name *"
                    className="rounded-xl border border-slate-300 px-4 py-3"
                  />

                  <input
                    type="text"
                    placeholder="Last Name *"
                    className="rounded-xl border border-slate-300 px-4 py-3"
                  />

                  <input
                    type="email"
                    placeholder="Business Email *"
                    className="rounded-xl border border-slate-300 px-4 py-3"
                  />

                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="rounded-xl border border-slate-300 px-4 py-3"
                  />

                  <input
                    type="text"
                    placeholder="Company Name *"
                    className="rounded-xl border border-slate-300 px-4 py-3"
                  />

                  <input
                    type="text"
                    placeholder="Job Title *"
                    className="rounded-xl border border-slate-300 px-4 py-3"
                  />

                  <select className="rounded-xl border border-slate-300 px-4 py-3">
                    <option>Select Industry</option>
                    <option>Financial Services</option>
                    <option>Insurance</option>
                    <option>Telecommunications</option>
                    <option>Retail & E-commerce</option>
                    <option>Healthcare</option>
                    <option>Government</option>
                    <option>Education</option>
                    <option>Human Resources</option>
                    <option>Legal Services</option>
                    <option>Property & Real Estate</option>
                    <option>Mining & Resources</option>
                    <option>Logistics & Transport</option>
                    <option>Technology</option>
                    <option>Manufacturing</option>
                    <option>Professional Services</option>
                    <option>Other</option>
                  </select>

                  <select className="rounded-xl border border-slate-300 px-4 py-3">
                    <option>Select Product</option>
                    <option>Identity Verification</option>
                    <option>Business Verification</option>
                    <option>Document Verification</option>
                    <option>Fraud Detection</option>
                    <option>Enterprise Verification Platform</option>
                    <option>API Integration</option>
                    <option>Not Sure Yet</option>
                  </select>

                </div>

                  <input
                    type="country"
                    placeholder="Country*"
                    className="rounded-xl border border-slate-300 px-4 py-3"
                  />

                <textarea
                  rows={6}
                  placeholder="Tell us about your verification requirements..."
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                />

                <Button
                  size="lg"
                  className="w-full bg-[#BF5000] hover:bg-[#a84600]"
                >
                  Request a Consultation
                </Button>

              </form>

            </div>

          </div>

        </div>

      </section>
    </>
  )
}