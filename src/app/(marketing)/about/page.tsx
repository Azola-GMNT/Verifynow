import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Target, Eye } from "lucide-react"
import Link from "next/link"

import {
  Fingerprint,
  Building2,
  FileCheck,
  CheckCircle2,
  ShieldCheck,
  Handshake,
  Lock,
  Sparkles,
  BadgeCheck,
} from "lucide-react"

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] overflow-hidden">

        <Image
          src="/About-Hero.jpg"
          alt="African business professionals"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/75" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-6">

            <div className="max-w-3xl">

              <h1 className="mt-6 text-3xl font-bold leading-tight text-white md:text-6xl">
                Every Trusted Business Relationship Begins with Confidence.
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-300">
               Confidence shouldn't come after the transaction. 
               Verify people, businesses and documents before you commit.
              </p>

              <div className="mt-10">
                <Button
                  size="lg"
                  className="bg-[#BF5000] hover:bg-[#a84600]"
                >
                  Explore Our Solutions
                </Button>
              </div>

            </div>

          </div>
        </div>

      </section>

      <section className="bg-white py-20">

  <div className="container mx-auto px-6">

    {/* Heading */}

    <div className="mx-auto max-w-3xl text-center">

      <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">
        Doing Business Shouldn't Begin with Doubt
      </h2>

      <p className="mt-6 text-xl leading-8 text-slate-600">
        Every important decision starts with knowing exactly who you're dealing
        with. Trust is essential—but trust alone is no longer enough.
      </p>

    </div>

    {/* Cards */}

    <div className="mt-20 grid gap-8 lg:grid-cols-3">

      {/* Card */}

      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#BF5000] hover:ring-2 hover:ring-[#BF5000]/20 hover:shadow-xl">

        <div className="absolute left-0 top-0 h-1 w-full bg-[#BF5000]" />

        <Fingerprint className="h-12 w-12 text-slate-900" />

        <h3 className="mt-6 text-2xl font-semibold text-slate-900">
          Know Who You're Working With
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          Identity fraud continues to grow across industries. Every partnership
          begins with confidence in the person or organisation on the other
          side.
        </p>

      </div>

      {/* Card */}

      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#BF5000] hover:ring-2 hover:ring-[#BF5000]/20 hover:shadow-xl">

        <div className="absolute left-0 top-0 h-1 w-full bg-[#BF5000]" />

        <Building2 className="h-12 w-12 text-slate-900" />

        <h3 className="mt-6 text-2xl font-semibold text-slate-900">
          Verify Before You Commit
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          Whether onboarding suppliers, employees or strategic partners,
          trusted information helps organisations make better decisions before
          agreements are signed.
        </p>

      </div>

      {/* Card */}

      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#BF5000] hover:ring-2 hover:ring-[#BF5000]/20 hover:shadow-xl">

        <div className="absolute left-0 top-0 h-1 w-full bg-[#BF5000]" />

        <FileCheck className="h-12 w-12 text-slate-900" />

        <h3 className="mt-6 text-2xl font-semibold text-slate-900">
          Protect Every Transaction
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          Verification is more than compliance. It protects businesses,
          reputations and long-term relationships by reducing uncertainty before
          every transaction.
        </p>

      </div>

    </div>

  </div>

</section>

{/* Why We Exist */}

<section className="bg-slate-50 py-20">

  <div className="container mx-auto px-6">

    <div className="grid items-center gap-16 lg:grid-cols-2">

      {/* Left */}

      <div className="relative">

        {/* Bronze decorative block */}
  <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-3xl bg-[#BF5000]/10"></div>

        <Image
          src="/why-we-exist.jpg"
          alt="African professionals collaborating"
          width={700}
          height={700}
          className="rounded-3xl shadow-2xl object-cover"
        />

      </div>

      {/* Right */}

      <div>

        <div className="mb-6 h-1 w-20 rounded-full bg-[#BF5000]" />

        <span className="text-sm font-semibold uppercase tracking-widest text-[#BF5000]">
          Why We Exist
        </span>

        <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
          Because Trust Should Be Verified,
          <br />
          Not Assumed.
        </h2>

        <p className="mt-8 text-lg leading-8 text-slate-600">
          Every opportunity begins with a decision.
          Every partnership begins with trust.
          Every transaction begins with confidence.
        </p>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Yet organisations are still expected to make critical decisions
          using fragmented information, manual processes and assumptions.
          The cost of uncertainty is often measured in fraud, financial loss
          and damaged reputations.
        </p>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          We believe technology should make trust measurable.
          By helping organisations verify identities, businesses and
          documents before important decisions are made, we enable stronger
          partnerships, safer transactions and greater confidence across
          Africa.
        </p>

      </div>

    </div>

  </div>

</section>

{/* Mission & Vision */}

<section className="bg-white py-20">

  <div className="container mx-auto px-6">

    {/* Heading */}

    <div className="mx-auto max-w-3xl text-center">

      <span className="inline-block rounded-full bg-[#BF5000]/10 px-4 py-2 text-sm font-medium text-[#BF5000]">
        Our Purpose
      </span>

      <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">
        Guided by Purpose. Driven by Trust.
      </h2>

      <p className="mt-6 text-xl leading-8 text-slate-600">
        Every solution we build is designed to help organisations make
        better decisions with greater confidence.
      </p>

    </div>

    {/* Cards */}

    <div className="mt-20 grid gap-10 lg:grid-cols-2">

      {/* Mission */}

      <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#BF5000] hover:ring-2 hover:ring-[#BF5000]/20 hover:shadow-xl">

        <div className="flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900">

            <Target className="h-8 w-8 text-[#BF5000]" />

          </div>

          <h3 className="text-3xl font-bold text-slate-900">
            Mission
          </h3>

        </div>

        <p className="mt-8 text-lg leading-8 text-slate-600">
          To empower organisations with trusted identity intelligence that
          enables faster decisions, reduces risk and strengthens business
          relationships across Africa.
        </p>

      </div>

      {/* Vision */}

      <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#BF5000] hover:ring-2 hover:ring-[#BF5000]/20 hover:shadow-xl">

        <div className="flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900">

            <Eye className="h-8 w-8 text-[#BF5000]" />

          </div>

          <h3 className="text-3xl font-bold text-slate-900">
            Vision
          </h3>

        </div>

        <p className="mt-8 text-lg leading-8 text-slate-600">
          To build a future where every business relationship across Africa
          begins with verified trust, enabling safer transactions, stronger
          partnerships and sustainable growth.
        </p>

      </div>

    </div>

  </div>

</section>

{/* Built for Africa */}

<section className="bg-slate-50 py-20">

  <div className="container mx-auto px-6">

    {/* Heading */}

    <div className="mx-auto max-w-3xl text-center">

      <span className="inline-block rounded-full bg-[#BF5000]/10 px-4 py-2 text-sm font-medium text-[#BF5000]">
        Built for Africa
      </span>

      <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">
        Africa's Growth Depends on Trusted Relationships
      </h2>

      <p className="mt-6 text-xl leading-8 text-slate-600">
        As businesses expand across borders, trust becomes one of the most
        valuable assets. Strong verification enables organisations to move
        faster, reduce risk and build lasting partnerships.
      </p>

    </div>

    <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">

      {/* Image */}

      <Image
        src="/africa-business.jpg"
        alt="African business and trade"
        width={700}
        height={700}
        className="rounded-3xl shadow-2xl object-cover"
      />

      {/* Right */}

      <div>

        <div className="space-y-8">

          {[
            {
              title: "Growing Trade",
              text: "Cross-border trade is creating new opportunities across the continent."
            },
            {
              title: "Digital Transformation",
              text: "Organisations are adopting technology to improve trust and efficiency."
            },
            {
              title: "Trusted Partnerships",
              text: "Reliable verification strengthens every new business relationship."
            },
            {
              title: "Regulatory Compliance",
              text: "Businesses need trusted processes that align with evolving compliance requirements."
            },
            {
              title: "Future Ready",
              text: "Scalable identity verification supports long-term growth across African markets."
            },
          ].map((item) => (

            <div key={item.title} className="flex gap-5">

              <CheckCircle2 className="mt-1 h-7 w-7 shrink-0 text-[#BF5000]" />

              <div>

                <h3 className="text-2xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 leading-8 text-slate-600">
                  {item.text}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  </div>

</section>

{/* Our Values */}

<section className="bg-white py-20">

  <div className="container mx-auto px-6">

    {/* Heading */}

    <div className="mx-auto max-w-3xl text-center">

      <span className="inline-block rounded-full bg-[#BF5000]/10 px-4 py-2 text-sm font-medium text-[#BF5000]">
        Our Values
      </span>

      <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">
        The Principles Behind Every Verification
      </h2>

      <p className="mt-6 text-xl leading-8 text-slate-600">
        Every decision we make is guided by values that build confidence,
        strengthen relationships and support trusted business across Africa.
      </p>

    </div>

    {/* Cards */}

    <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {[
        {
          icon: ShieldCheck,
          title: "Trust",
          text: "Trust is earned through transparency, consistency and reliable verification."
        },
        {
          icon: BadgeCheck,
          title: "Integrity",
          text: "We believe confidence begins with accurate, ethical and responsible information."
        },
        {
          icon: Sparkles,
          title: "Innovation",
          text: "Technology should simplify complex decisions and make verification effortless."
        },
        {
          icon: Lock,
          title: "Security",
          text: "Protecting identities and sensitive information is at the heart of everything we do."
        },
        {
          icon: Handshake,
          title: "Partnership",
          text: "Our success is measured by the confidence and growth of the organisations we serve."
        },
      ].map((value) => {

        const Icon = value.icon

        return (

          <div
            key={value.title}
            className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#BF5000] hover:ring-2 hover:ring-[#BF5000]/20 hover:shadow-xl"
          >

            <div className="absolute left-0 top-0 h-1 w-full bg-[#BF5000]" />

            <Icon className="h-10 w-10 text-slate-900" />

            <h3 className="mt-6 text-2xl font-semibold text-slate-900">
              {value.title}
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              {value.text}
            </p>

          </div>

        )

      })}

    </div>

  </div>

</section>

{/* CTA */}

<section className="relative overflow-hidden bg-slate-900 py-24">

  {/* Background Accent */}
  <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900" />

  <div className="relative container mx-auto px-6">

    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex rounded-full bg-[#BF5000]/20 px-4 py-2 text-sm font-medium text-[#F5B27A]">
        Ready to Build with Confidence?
      </span>

      <h2 className="mt-8 text-5xl font-bold tracking-tight text-white">
        Every Trusted Business Relationship
        <br />
        Starts with Verification.
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
        Whether you're verifying customers, suppliers, employees or strategic
        partners, VerifyNow helps you make informed decisions before risk
        becomes reality.
      </p>

      <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

        <Link href="/contact">

          <Button
            size="lg"
            className="bg-[#BF5000] px-8 hover:bg-[#a84600]"
          >
            Request a Demo
          </Button>

        </Link>

        <Link href="/services">

          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-slate-900"
          >
            Explore Our Solutions
          </Button>

        </Link>

      </div>

    </div>

  </div>

</section>

    </>
  )
}