"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  companyName: "",
  industry: "",
  jobTitle: "",
  email: "",
  phone: "",
  country: "South Africa",
  password: "",
  confirmPassword: "",
  acceptedTerms: false,
});

  const router = useRouter();  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleRegister = async (
  e: FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  console.log("REGISTER FORM SUBMITTED");

  const newErrors: Record<string, string> = {};

  if (!formData.firstName.trim()) {
    newErrors.firstName = "First name is required.";
  }

  if (!formData.lastName.trim()) {
    newErrors.lastName = "Last name is required.";
  }

  if (!formData.companyName.trim()) {
  newErrors.companyName = "Company name is required.";
}

if (!formData.industry.trim()) {
  newErrors.industry = "Industry is required.";
}

if (!formData.jobTitle.trim()) {
  newErrors.jobTitle = "Job title is required.";
}

  if (!formData.email.trim()) {
    newErrors.email = "Business email is required.";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
  ) {
    newErrors.email = "Please enter a valid email address.";
  }

  if (!formData.phone.trim()) {
    newErrors.phone = "Phone number is required.";
  }

  if (formData.password.length < 8) {
    newErrors.password =
      "Password must contain at least 8 characters.";
  }

  if (formData.confirmPassword !== formData.password) {
    newErrors.confirmPassword =
      "Passwords do not match.";
  }

  if (!formData.acceptedTerms) {
    newErrors.acceptedTerms =
      "You must accept the Terms and Privacy Policy.";
  }

  setErrors(newErrors);

  console.log("REGISTRATION VALIDATION:", newErrors);

  if (Object.keys(newErrors).length > 0) return;

  setLoading(true);

  console.log("VALIDATION PASSED - CALLING SUPABASE");

  console.log("CALLING SUPABASE SIGNUP");

const { data, error } = await supabase.auth.signUp({
  email: formData.email,
  password: formData.password,

  options: {
    data: {
      first_name: formData.firstName,
      last_name: formData.lastName,
      company_name: formData.companyName,
      industry: formData.industry,
      job_title: formData.jobTitle,
      phone: formData.phone,
      country: formData.country,
    },
  },
});

setLoading(false);

if (error) {
  console.error("SUPABASE REGISTRATION ERROR:", error);
  alert(`Registration failed: ${error.message}`);
  setLoading(false);
  return;
}

console.log("SUPABASE REGISTRATION SUCCESS:", data);
router.push("/verify-email");

  // Supabase comes next...
};

  return (
    <Card className="rounded-3xl shadow-lg">
      <CardContent className="p-10">
        <form onSubmit={handleRegister} className="space-y-5">

          {/* First Name & Last Name */}

          <div className="grid gap-5 md:grid-cols-2">

            <>
          <Input
            name="firstName"
            placeholder="First Name *"
            value={formData.firstName}
            onChange={handleChange}
            className={errors.firstName ? "border-red-500" : ""}
          />

          {errors.firstName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.firstName}
            </p>
          )}
        </>

            <>
            <Input
              name="lastName"
              placeholder="Last Name *"
              value={formData.lastName}
              onChange={handleChange}
              className={errors.lastName ? "border-red-500" : ""}
            />

             {errors.lastName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.lastName}
            </p>
          )}
        </>

          </div>

          {/* Company Name */}

<>
  <Input
    name="companyName"
    placeholder="Company Name *"
    value={formData.companyName}
    onChange={handleChange}
    className={errors.companyName ? "border-red-500" : ""}
  />

  {errors.companyName && (
    <p className="mt-1 text-sm text-red-500">
      {errors.companyName}
    </p>
  )}
</>

{/* Industry */}

<>
  <select
    name="industry"
    value={formData.industry}
    onChange={handleChange}
    className={`flex h-11 w-full rounded-md border px-3 text-sm ${
      errors.industry ? "border-red-500" : "border-input"
    }`}
  >
    <option value="">Select Industry *</option>
    <option>Mining & Resources</option>
    <option>Financial Services</option>
    <option>Government</option>
    <option>Manufacturing</option>
    <option>Energy</option>
    <option>Logistics & Transport</option>
    <option>Construction</option>
    <option>Agriculture</option>
    <option>Healthcare</option>
    <option>Technology</option>
    <option>Telecommunications</option>
    <option>Retail</option>
    <option>Professional Services</option>
    <option>Education</option>
    <option>NGO / Non-Profit</option>
    <option>Other</option>
  </select>

  {errors.industry && (
    <p className="mt-1 text-sm text-red-500">
      {errors.industry}
    </p>
  )}
</>

{/* Job Title */}

<>
  <Input
    name="jobTitle"
    placeholder="Job Title *"
    value={formData.jobTitle}
    onChange={handleChange}
    className={errors.jobTitle ? "border-red-500" : ""}
  />

  {errors.jobTitle && (
    <p className="mt-1 text-sm text-red-500">
      {errors.jobTitle}
    </p>
  )}
</>

          {/* Business Email */}

          <>
          <Input
            name="email"
            type="email"
            placeholder="Business Email *"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "border-red-500" : ""}
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-500">
              {errors.email}
            </p>
          )}
        </>

          {/* Phone */}
          <>
          <Input
            name="phone"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? "border-red-500" : ""}
          />

          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">
              {errors.phone}
            </p>
          )}
        </>

          {/* Country */}

          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="flex h-11 w-full rounded-md border border-input bg-background px-3 text-sm"
          >
            <option>South Africa</option>
            <option>Botswana</option>
            <option>Namibia</option>
            <option>Zimbabwe</option>
            <option>Zambia</option>
            <option>Mozambique</option>
            <option>Kenya</option>
            <option>Nigeria</option>
            <option>Ghana</option>
            <option>Other</option>
          </select>

          {/* Password */}

          <>
  <Input
    name="password"
    type="password"
    placeholder="Password *"
    value={formData.password}
    onChange={handleChange}
    className={errors.password ? "border-red-500" : ""}
  />

  {errors.password && (
    <p className="mt-1 text-sm text-red-500">
      {errors.password}
    </p>
  )}
</>

          {/* Confirm Password */}

          <>
  <Input
    name="confirmPassword"
    type="password"
    placeholder="Confirm Password *"
    value={formData.confirmPassword}
    onChange={handleChange}
    className={errors.confirmPassword ? "border-red-500" : ""}
  />

  {errors.confirmPassword && (
    <p className="mt-1 text-sm text-red-500">
      {errors.confirmPassword}
    </p>
  )}
</>

          {/* Terms */}

          <div className="mt-6">
          <label className="flex items-start gap-3 cursor-pointer">

              {/* Checkbox */}
              <input
              required
              name="acceptedTerms"
              type="checkbox"
              checked={formData.acceptedTerms}
              onChange={handleChange}
              className="mt-1 h-4 w-4 shrink-0 accent-[#BF5000]"
            />
              
            {/* Text */}

               <span className="text-sm text-slate-600 leading-6">

              I agree to the{" "}

              <Link
                href="/terms"
                className="font-medium text-[#BF5000] hover:underline"
              >
                Terms of Service
              </Link>

               {" "}and{" "}

               <Link
        href="/privacy"
        className="font-medium text-[#BF5000] hover:underline"
      >
        Privacy Policy
      </Link>

    </span>
    </label>

       {errors.acceptedTerms && (
  <p className="mt-2 text-sm text-red-500">
    {errors.acceptedTerms}
  </p>
)}

   </div>
         
          {/* Submit */}

          <Button
            type="submit"
            disabled={loading}
            className="h-12 w-full bg-[#BF5000] hover:bg-[#a84600]"
          >
            {loading ? "Creating Account..." : "Create My Account"}
          </Button>

          {/* Login */}

          <p className="text-center text-sm text-slate-600">

            Already have an account?{" "}

            <Link
              href="/login"
              className="font-semibold text-[#BF5000]"
            >
              Sign In
            </Link>

          </p>

        </form>
      </CardContent>
    </Card>
  );
}