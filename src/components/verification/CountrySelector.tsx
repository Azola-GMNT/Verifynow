"use client";

import countries from "@/data/countries";

interface CountrySelectorProps {
  value: string;
  onChange: (country: string) => void;
}

export default function CountrySelector({
  value,
  onChange,
}: CountrySelectorProps) {
  const groupedCountries = countries.reduce((groups, country) => {
    if (!groups[country.region]) {
      groups[country.region] = [];
    }

    groups[country.region].push(country);

    return groups;
  }, {} as Record<string, typeof countries>);

  return (
    <div className="space-y-2">

      <label className="text-sm font-semibold">
        Country *
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-[#BF5000] focus:outline-none"
      >
        <option value="">
          Select Country
        </option>

        {Object.entries(groupedCountries).map(([region, items]) => (
          <optgroup key={region} label={region}>
            {items.map((country) => (
              <option
                key={country.code}
                value={country.code}
              >
                {country.name}
              </option>
            ))}
          </optgroup>
        ))}

      </select>

    </div>
  );
}