import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Hero from "@/components/home/Hero"
import Statistics from "@/components/home/Statistics"
import Trust from "@/components/home/Trust"
import Services from "@/components/home/Services"
import Industries from "@/components/home/Industries"
import HowItWorks from "@/components/home/HowItWorks"
import CTA from "@/components/home/CTA"
import {
  ShieldCheck,
  Fingerprint,
  FileCheck,
  Building2,
} from "lucide-react"

export default function Home() {
  return (
    <>
   
      <main className="min-h-screen bg-slate-50">

   <Hero />

   <Statistics />

   <Trust />

    <Services />

    <Industries />

    <HowItWorks />

    <CTA />

  </main>

    </>
  )
}