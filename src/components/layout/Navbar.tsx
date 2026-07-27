"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">

      <div className="container mx-auto flex h-24 items-center justify-between px-6">

        {/* Logo */}

        <Link
          href="/"
          className="flex items-center"
        >
          <Image
            src="/Verify-Logo.jpg"
            alt="VerifyNow"
            width={260}
            height={85}
            priority
            className="h-20 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}

<nav className="hidden lg:flex items-center gap-8">

  <Link href="/" className="hover:text-blue-600 transition">
    Home
  </Link>

  <Link href="/services" className="hover:text-blue-600 transition">
    Services
  </Link>

  <Link href="/industries" className="hover:text-blue-600 transition">
    Industries
  </Link>

  <Link href="/developers" className="hover:text-blue-600 transition">
    API & Developers
  </Link>

  <Link href="/about" className="hover:text-blue-600 transition">
    About Us
  </Link>

  <Link href="/contact" className="hover:text-blue-600 transition">
    Contact
  </Link>

</nav>

        {/* Right Side */}

        <div className="hidden lg:flex items-center gap-3">

          <Link href="/register">

            <Button>
              Get Started
            </Button>

          </Link>

          <Link href="/login">

            <Button variant="ghost">
              Login
            </Button>

          </Link>

           </div>

        {/* Mobile */}

        <button className="lg:hidden">

          <Menu className="h-7 w-7" />

        </button>

      </div>

    </header>
  )
}