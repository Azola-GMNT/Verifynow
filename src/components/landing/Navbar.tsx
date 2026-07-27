import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShieldCheck } from "lucide-react"


export default function Navbar(){

return (

<nav className="border-b bg-white">

<div className="container mx-auto flex h-20 items-center justify-between px-6">


<Link
href="/"
className="flex items-center gap-2"
>

<ShieldCheck 
className="h-8 w-8 text-blue-600"
/>

<span className="text-xl font-bold text-slate-900">
VerifyNow
</span>

</Link>



<div className="hidden md:flex items-center gap-8 text-sm text-slate-600">

  <Link href="/services">
    Services
  </Link>

  <Link href="/industries">
    Industries
  </Link>

  <Link href="/developers">
    API & Developers
  </Link>

  <Link href="/about">
    About Us
  </Link>

  <Link href="/contact">
    Contact
  </Link>

</div>



<div className="flex items-center gap-3">

<Link href="/login">

<Button variant="ghost">
Login
</Button>

</Link>


<Link href="/register">

<Button>
Get Started
</Button>

</Link>

</div>


</div>

</nav>

)

}
