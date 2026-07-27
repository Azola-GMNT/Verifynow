import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/80"></div>

      {/* Background Blur Effects */}
      <div className="absolute -top-40 -left-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-6 py-20">

        <div className="max-w-5xl mx-auto">

          {/* Left Side */}

          <div className="max-w-5xl lg:ml-20">

            <span className="inline-flex rounded-full bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-200">
              Comprehensive Business Verification Ecosystem 
            </span>

            <h1 className="mt-6 max-w-5xl text-6xl font-bold tracking-tight text-white">
              Trusted Digital Identity Verification Platform
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Verify individuals, businesses and documents through secure identity intelligence solutions built for Africa.
            </p>

            <div className="mt-10 flex gap-4">

              <Button size="lg" className="bg-[#BF5000] hover:bg-[#a84600]">
                Get Started
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-900"
              >
                Request Demo
              </Button>

            </div>

            <div className="mt-10 flex flex-wrap gap-3">

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                ✔ POPIA Compliant
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                ✔ Enterprise Ready
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                ✔ API First
              </span>

            </div>

          </div>

          </div>

      </div>

    </section>
  )
}