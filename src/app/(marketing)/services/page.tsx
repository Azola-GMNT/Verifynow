import Image from "next/image"

import {
  CheckCircle2,
  } from "lucide-react"

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}

      <section className="relative h-[75vh] overflow-hidden">

        <Image
          src="/services-hero.jpg"
          alt="Business verification services"
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

                          <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
                Comprehensive Verification Solutions for African Businesses
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-300">
                Verify people, businesses, suppliers, documents and transactions
                with trusted intelligence designed to reduce risk and strengthen
                confidence across Africa.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Identity Verification */}

<section className="bg-white py-28">

  <div className="container mx-auto px-6">

    <div className="grid items-center gap-16 lg:grid-cols-2">

      {/* Image */}

      <div className="relative">

        {/* Decorative Accent */}

        <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-3xl bg-[#BF5000]/10"></div>

        <Image
          src="/identity-verification.jpg"
          alt="Identity Verification"
          width={700}
          height={700}
          className="rounded-3xl object-cover shadow-2xl"
        />

      </div>

      {/* Content */}

      <div>

        <div className="mb-6 h-1 w-20 rounded-full bg-[#BF5000]" />

        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BF5000]">
          Identity Verification
        </span>

        <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
          Know Exactly Who You're
          <br />
          Doing Business With
        </h2>

        <p className="mt-8 text-lg leading-8 text-slate-600">
          Identity verification is the foundation of trusted business
          relationships. VerifyNow enables organisations to verify individuals
          before onboarding customers, employees or business partners,
          reducing fraud while improving confidence and compliance.
        </p>

        <h3 className="mt-10 text-xl font-semibold text-slate-900">
          Identity Verification Services
        </h3>

        <div className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">

          {[
            "South African ID Verification",
            "Passport Verification",
            "Foreign National Verification",
            "Facial Biometric Verification",
            "Selfie Match",
            "Liveness Detection",
            "Date of Birth Verification",
            "Name Verification",
            "Citizenship Verification",
          ].map((service) => (

            <div key={service} className="flex items-start gap-3">

              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#BF5000]" />

              <span className="text-slate-700">
                {service}
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>

  </div>

</section>

{/* Business Verification */}

<section className="bg-slate-50 py-28">

  <div className="container mx-auto px-6">

    <div className="grid items-center gap-16 lg:grid-cols-2">

      {/* Content */}

      <div>

        <div className="mb-6 h-1 w-20 rounded-full bg-[#BF5000]" />

        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BF5000]">
          Business Verification
        </span>

        <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
          Verify Businesses
          <br />
          Before You Commit
        </h2>

        <p className="mt-8 text-lg leading-8 text-slate-600">
          Every successful partnership begins with confidence. VerifyNow helps
          organisations confirm that businesses are legally registered,
          operational and compliant before agreements are signed or transactions
          take place.
        </p>

        <h3 className="mt-10 text-xl font-semibold text-slate-900">
          Business Verification Services
        </h3>

        <div className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">

          {[
            "Company Registration Verification",
            "Company Status Verification",
            "Director Verification",
            "Business Address Verification",
            "VAT Registration Verification",
            "Tax Registration Verification",
            "Business Banking Verification",
            "Industry Registration Verification",
          ].map((service) => (

            <div
              key={service}
              className="flex items-start gap-3"
            >

              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#BF5000]" />

              <span className="text-slate-700">
                {service}
              </span>

            </div>

          ))}

        </div>

      </div>

      {/* Image */}

      <div className="relative">

        {/* Decorative Accent */}

        <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-3xl bg-[#BF5000]/10"></div>

        <Image
          src="/business-verification.jpg"
          alt="Business Verification"
          width={700}
          height={700}
          className="rounded-3xl object-cover shadow-2xl"
        />

      </div>

    </div>

  </div>

</section>

{/* Employment & Professional Verification */}

<section className="bg-white py-28">

  <div className="container mx-auto px-6">

    <div className="grid items-center gap-16 lg:grid-cols-2">

      {/* Image */}

      <div className="relative">

        {/* Decorative Accent */}

        <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-3xl bg-[#BF5000]/10"></div>

        <Image
          src="/employment-verification.jpg"
          alt="Employment Verification"
          width={700}
          height={700}
          className="rounded-3xl object-cover shadow-2xl"
        />

      </div>

      {/* Content */}

      <div>

        <div className="mb-6 h-1 w-20 rounded-full bg-[#BF5000]" />

        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BF5000]">
          Employment & Professional Verification
        </span>

        <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
          Hire with Confidence,
          <br />
          Verify Every Credential
        </h2>

        <p className="mt-8 text-lg leading-8 text-slate-600">
          Build stronger teams and reduce hiring risk through comprehensive
          employment and professional verification. VerifyNow helps employers
          confirm qualifications, employment history and professional standing
          before critical hiring decisions are made.
        </p>

        <h3 className="mt-10 text-xl font-semibold text-slate-900">
          Employment & Professional Verification Services
        </h3>

        <div className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">

          {[
            "Employment Verification",
            "Qualification Verification",
            "Professional Membership Verification",
            "Reference Checks",
            "Employment History",
            "Professional Licence Verification",
          ].map((service) => (

            <div
              key={service}
              className="flex items-start gap-3"
            >

              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#BF5000]" />

              <span className="text-slate-700">
                {service}
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>

  </div>

</section>

{/* Financial & Credit Risk */}

<section className="bg-slate-50 py-28">

  <div className="container mx-auto px-6">

    <div className="grid items-center gap-16 lg:grid-cols-2">

      {/* Content */}

      <div>

        <div className="mb-6 h-1 w-20 rounded-full bg-[#BF5000]" />

        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BF5000]">
          Financial & Credit Risk
        </span>

        <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
          Make Smarter Financial
          <br />
          Decisions with Confidence
        </h2>

        <p className="mt-8 text-lg leading-8 text-slate-600">
          Reduce financial risk before extending credit, entering commercial
          agreements or approving high-value transactions. VerifyNow provides
          trusted financial intelligence to help organisations assess credit
          worthiness and commercial stability.
        </p>

        <h3 className="mt-10 text-xl font-semibold text-slate-900">
          Financial & Credit Risk Services
        </h3>

        <div className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">

          {[
            "Business Credit Reports",
            "Consumer Credit Reports",
            "Credit Score Assessment",
            "Judgements",
            "Defaults",
            "Debt Review Status",
            "Insolvency Checks",
            "Payment Behaviour",
          ].map((service) => (

            <div
              key={service}
              className="flex items-start gap-3"
            >

              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#BF5000]" />

              <span className="text-slate-700">
                {service}
              </span>

            </div>

          ))}

        </div>

      </div>

      {/* Image */}

      <div className="relative">

        {/* Decorative Accent */}

        <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-3xl bg-[#BF5000]/10"></div>

        <Image
          src="/financial-risk.jpg"
          alt="Financial & Credit Risk"
          width={700}
          height={700}
          className="rounded-3xl object-cover shadow-2xl"
        />

      </div>

    </div>

  </div>

</section>

{/* Compliance & Risk Screening */}

<section className="bg-white py-28">

  <div className="container mx-auto px-6">

    <div className="grid items-center gap-16 lg:grid-cols-2">

      {/* Image */}

      <div className="relative">

        <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-3xl bg-[#BF5000]/10"></div>

        <Image
          src="/compliance.jpg"
          alt="Compliance & Risk Screening"
          width={700}
          height={700}
          className="rounded-3xl object-cover shadow-2xl"
        />

      </div>

      {/* Content */}

      <div>

        <div className="mb-6 h-1 w-20 rounded-full bg-[#BF5000]" />

        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BF5000]">
          Compliance & Risk Screening
        </span>

        <h2 className="mt-5 text-5xl font-bold text-slate-900">
          Stay Compliant.
          <br />
          Reduce Risk.
        </h2>

        <p className="mt-8 text-lg leading-8 text-slate-600">
          Protect your organisation through intelligent compliance screening
          that supports regulatory obligations and reduces exposure to financial crime.
        </p>

        <h3 className="mt-10 text-xl font-semibold text-slate-900">
          Compliance & Risk Screening Services
        </h3>

        <div className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">

          {[
            "AML Screening",
            "Sanctions Screening",
            "PEP Screening",
            "Adverse Media Screening",
            "Fraud Risk Screening",
            "Watchlist Screening",
            "Compliance Monitoring",
          ].map((service) => (

            <div key={service} className="flex gap-3">

              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#BF5000]" />

              <span>{service}</span>

            </div>

          ))}

        </div>

      </div>

    </div>

  </div>

</section>

{/* Customer Due Diligence */}

<section className="bg-slate-50 py-28">

  <div className="container mx-auto px-6">

    <div className="grid items-center gap-16 lg:grid-cols-2">

      {/* Content */}

      <div>

        <div className="mb-6 h-1 w-20 rounded-full bg-[#BF5000]" />

        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BF5000]">
          Customer Due Diligence
        </span>

        <h2 className="mt-5 text-5xl font-bold text-slate-900">
          Know Exactly Who
          <br />
          You're Dealing With
        </h2>

        <p className="mt-8 text-lg leading-8 text-slate-600">
          Customer Due Diligence helps organisations understand who they are
          doing business with before relationships begin.
        </p>

        <h3 className="mt-10 text-xl font-semibold">
          Customer Due Diligence Services
        </h3>

        <div className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">

          {[
            "Know Your Customer (KYC)",
            "Know Your Business (KYB)",
            "Customer Risk Assessment",
            "Ultimate Beneficial Owner Verification",
            "Source of Funds Assessment",
            "Source of Wealth Assessment",
            "Enhanced Due Diligence",
          ].map((service) => (

            <div key={service} className="flex gap-3">

              <CheckCircle2 className="mt-1 h-5 w-5 text-[#BF5000]" />

              <span>{service}</span>

            </div>

          ))}

        </div>

      </div>

      <Image
        src="/cdd.jpg"
        alt="Customer Due Diligence"
        width={700}
        height={700}
        className="rounded-3xl shadow-2xl"
      />

    </div>

  </div>

</section>

{/* Supplier Verification */}

<section className="bg-white py-28">

  <div className="container mx-auto px-6">

    <div className="grid items-center gap-16 lg:grid-cols-2">

      <Image
        src="/supplier.jpg"
        alt="Supplier Verification"
        width={700}
        height={700}
        className="rounded-3xl shadow-2xl"
      />

      <div>

        <div className="mb-6 h-1 w-20 rounded-full bg-[#BF5000]" />

        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BF5000]">
          Supplier Verification
        </span>

        <h2 className="mt-5 text-5xl font-bold text-slate-900">
          Verify Suppliers
          <br />
          Before You Buy
        </h2>

        <p className="mt-8 text-lg leading-8 text-slate-600">
          Reduce procurement risk by ensuring suppliers are legitimate,
          compliant and capable before entering commercial agreements.
        </p>

        <div className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">

          {[
            "Company Verification",
            "Director Verification",
            "Operational Assessment",
            "Compliance Screening",
            "Reference Verification",
            "Business Capability Assessment",
            "Documentation Review",
          ].map((service) => (

            <div key={service} className="flex gap-3">

              <CheckCircle2 className="mt-1 h-5 w-5 text-[#BF5000]" />

              <span>{service}</span>

            </div>

          ))}

        </div>

      </div>

    </div>

  </div>

</section>

{/* Mining & Export Verification */}

<section className="bg-slate-900 py-32">

  <div className="container mx-auto px-6">

    <div className="grid items-center gap-20 lg:grid-cols-2">

      {/* Content */}

      <div>

        <span className="inline-flex rounded-full bg-[#BF5000]/20 px-4 py-2 text-sm font-semibold text-[#F5B27A]">
          VerifyNow Exclusive
        </span>

        <h2 className="mt-8 text-5xl font-bold leading-tight text-white">
          Mining & Export
          <br />
          Verification
        </h2>

        <p className="mt-8 text-lg leading-8 text-slate-300">
          Purpose-built for Africa's mining and commodity sectors, VerifyNow
          provides specialist verification services that help buyers,
          exporters, investors and financial institutions reduce risk before
          entering mining and cross-border trade transactions.
        </p>

        <h3 className="mt-10 text-xl font-semibold text-white">
          Mining & Export Verification Services
        </h3>

        <div className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2">

          {[
            "Mining Licence Verification",
            "Export Permit Verification",
            "Mineral Rights Verification",
            "Environmental Permit Verification",
            "Trading Licence Verification",
            "Government Registration Verification",
            "Site Verification Coordination",
            "Commodity Origin Verification",
          ].map((service) => (

            <div key={service} className="flex gap-3">

              <CheckCircle2 className="mt-1 h-5 w-5 text-[#BF5000]" />

              <span className="text-slate-200">
                {service}
              </span>

            </div>

          ))}

        </div>

      </div>

      {/* Image */}

      <Image
        src="/mining-verification.jpg"
        alt="Mining Verification"
        width={700}
        height={700}
        className="rounded-3xl shadow-2xl object-cover"
      />

    </div>

  </div>

</section>

{/* Document Verification */}

<section className="bg-white py-28">

<div className="container mx-auto px-6">

<div className="grid lg:grid-cols-2 gap-16 items-center">

<div>

<Image
src="/document-verification.jpg"
alt="Document Verification"
width={700}
height={700}
className="rounded-3xl shadow-2xl"
/>

</div>

<div>

<div className="mb-6 h-1 w-20 rounded-full bg-[#BF5000]" />

<span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BF5000]">
Document Verification
</span>

<h2 className="mt-5 text-5xl font-bold text-slate-900">
Validate Every
Document
</h2>

<p className="mt-8 text-lg leading-8 text-slate-600">
Verify the authenticity of critical documents before important business decisions are made.
</p>

<div className="mt-8 grid sm:grid-cols-2 gap-4">

{[
"ID Document Authentication",
"Passport Authentication",
"Driver's Licence Verification",
"Company Registration Documents",
"Tax Clearance Certificates",
"Mining Licence Validation",
"Export Permit Validation",
"Bank Confirmation Letters",
].map(service=>(

<div key={service} className="flex gap-3">

<CheckCircle2 className="mt-1 h-5 w-5 text-[#BF5000]" />

<span>{service}</span>

</div>

))}

</div>

</div>

</div>

</div>

</section>

{/* Fraud Prevention */}

<section className="bg-slate-50 py-28">

<div className="container mx-auto px-6">

<div className="grid lg:grid-cols-2 gap-16 items-center">

<div>

<div className="mb-6 h-1 w-20 rounded-full bg-[#BF5000]" />

<span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BF5000]">
Fraud Prevention
</span>

<h2 className="mt-5 text-5xl font-bold text-slate-900">
Detect Fraud
Before It Happens
</h2>

<p className="mt-8 text-lg leading-8 text-slate-600">
Advanced identity intelligence helps organisations detect fraudulent activity before financial loss occurs.
</p>

<div className="mt-8 grid sm:grid-cols-2 gap-4">

{[
"Identity Fraud Detection",
"Document Tampering Detection",
"Face Match Verification",
"Duplicate Identity Detection",
"Device Risk Assessment",
"Transaction Risk Scoring",
].map(service=>(

<div key={service} className="flex gap-3">

<CheckCircle2 className="mt-1 h-5 w-5 text-[#BF5000]" />

<span>{service}</span>

</div>

))}

</div>

</div>

<div>

<Image
src="/fraud-prevention.jpg"
alt="Fraud Prevention"
width={700}
height={700}
className="rounded-3xl shadow-2xl"
/>

</div>

</div>

</div>

</section>

{/* Background Screening */}

<section className="bg-white py-28">

<div className="container mx-auto px-6">

<div className="grid lg:grid-cols-2 gap-16 items-center">

<div>

<Image
src="/background-screening.jpg"
alt="Background Screening"
width={700}
height={700}
className="rounded-3xl shadow-2xl"
/>

</div>

<div>

<div className="mb-6 h-1 w-20 rounded-full bg-[#BF5000]" />

<span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BF5000]">
Background Screening
</span>

<h2 className="mt-5 text-5xl font-bold text-slate-900">
Know More Than
The Application
</h2>

<p className="mt-8 text-lg leading-8 text-slate-600">
Comprehensive background investigations help organisations recruit, appoint and partner with greater confidence.
</p>

<div className="mt-8 grid sm:grid-cols-2 gap-4">

{[
"Criminal Record Checks",
"Civil Judgement Checks",
"Directorship Searches",
"Qualification Checks",
"Employment History",
"Credit History",
"Media Reputation Checks",
].map(service=>(

<div key={service} className="flex gap-3">

<CheckCircle2 className="mt-1 h-5 w-5 text-[#BF5000]" />

<span>{service}</span>

</div>

))}

</div>

</div>

</div>

</div>

</section>

{/* Ongoing Monitoring */}

<section className="bg-slate-50 py-28">

<div className="container mx-auto px-6">

<div className="grid lg:grid-cols-2 gap-16 items-center">

<div>

<div className="mb-6 h-1 w-20 rounded-full bg-[#BF5000]" />

<span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BF5000]">
Ongoing Monitoring
</span>

<h2 className="mt-5 text-5xl font-bold text-slate-900">
Stay Informed
After Onboarding
</h2>

<p className="mt-8 text-lg leading-8 text-slate-600">
Verification shouldn't stop after onboarding. Continuous monitoring helps organisations remain informed about changes that may impact compliance or risk.
</p>

<div className="mt-8 grid sm:grid-cols-2 gap-4">

{[
"Continuous AML Monitoring",
"Continuous Sanctions Monitoring",
"Director Change Alerts",
"Company Status Monitoring",
"Licence Expiry Alerts",
"Compliance Monitoring",
"Risk Alerts",
].map(service=>(

<div key={service} className="flex gap-3">

<CheckCircle2 className="mt-1 h-5 w-5 text-[#BF5000]" />

<span>{service}</span>

</div>

))}

</div>

</div>

<div>

<Image
src="/ongoing-monitoring.jpg"
alt="Ongoing Monitoring"
width={700}
height={700}
className="rounded-3xl shadow-2xl"
/>

</div>

</div>

</div>

</section>

    </>
  )
}