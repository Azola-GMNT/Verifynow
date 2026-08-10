"use client";

import { useEffect, useState } from "react";
import CountrySelector from "./CountrySelector";

interface FindSubjectProps {
  subjectType: "individual" | "organisation";
  country: string;
  setCountry: (country: string) => void;
  onSubjectFound: () => void;
}

export default function FindSubject({
  subjectType,
  country,
  setCountry,
  onSubjectFound,
}: FindSubjectProps) {
  const [method, setMethod] = useState(
    subjectType === "organisation" ? "company-registration" : "id"
  );

  const [found, setFound] = useState(false);

  // Reset the search method when the subject type changes.
  useEffect(() => {
    setMethod(
      subjectType === "organisation"
        ? "company-registration"
        : "id"
    );

    setFound(false);
  }, [subjectType]);

  const isOrganisation = subjectType === "organisation";

  return (
    <div>
      <h2 className="text-2xl font-semibold">
        Find Subject
      </h2>

      <p className="mt-2 text-slate-500">
        Select the country and how you would like to identify the subject.
      </p>

      {/* Country */}
      <CountrySelector
        value={country}
        onChange={setCountry}
      />

      {/* Search Method */}
      <div className="mt-8">
        <label className="mb-3 block text-sm font-medium">
          Search Method
        </label>

        <div className="space-y-3">
          {isOrganisation ? (
            <>
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  checked={method === "company-registration"}
                  onChange={() =>
                    setMethod("company-registration")
                  }
                />
                Company Registration Number
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  checked={method === "vat"}
                  onChange={() => setMethod("vat")}
                />
                VAT Number
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  checked={method === "tax"}
                  onChange={() => setMethod("tax")}
                />
                Tax Number
              </label>
            </>
          ) : (
            <>
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  checked={method === "id"}
                  onChange={() => setMethod("id")}
                />
                National ID
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  checked={method === "passport"}
                  onChange={() => setMethod("passport")}
                />
                Passport
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  checked={method === "drivers"}
                  onChange={() => setMethod("drivers")}
                />
                Driver's Licence
              </label>
            </>
          )}
        </div>
      </div>

      {/* Identifier */}
      <div className="mt-8">
        <label className="mb-2 block text-sm font-medium">
          {isOrganisation ? "Company Identifier" : "Identifier"}
        </label>

        <div className="flex gap-4">
          <input
            placeholder={
              method === "id"
                ? "Enter National ID Number"
                : method === "passport"
                ? "Enter Passport Number"
                : method === "drivers"
                ? "Enter Driver's Licence Number"
                : method === "company-registration"
                ? "Enter Company Registration Number"
                : method === "vat"
                ? "Enter VAT Number"
                : "Enter Tax Number"
            }
            className="flex-1 rounded-xl border border-slate-300 px-4 py-3 focus:border-[#BF5000] focus:outline-none"
          />

          <button
            type="button"
            onClick={() => {
              setFound(true);
              onSubjectFound();
            }}
            className="rounded-xl bg-[#BF5000] px-8 font-semibold text-white transition hover:bg-[#a84600]"
          >
            Search
          </button>
        </div>
      </div>

      {/* Subject Found */}
      {found && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-green-700">
            ✓ Subject Found
          </h3>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm text-slate-500">
                {isOrganisation ? "Company Name" : "Full Name"}
              </p>

              <p className="font-medium">
                {isOrganisation
                  ? "Example Company (Pty) Ltd"
                  : "John Michael Smith"}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Country
              </p>

              <p className="font-medium">
                {country}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Status
              </p>

              <p className="font-medium text-green-700">
                {isOrganisation
                  ? "Company Located"
                  : "Identity Located"}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Confidence
              </p>

              <p className="font-medium">
                100%
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}