import { useState, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2, Info, MapPin, Search } from 'lucide-react';
import { BUSINESS_INFO, SERVICE_AREAS } from '../data/beyondData';
import type { PageRoute, QuotePrefill } from '../types';

interface ServiceAreasSectionProps {
  onNavigate: (route: PageRoute, prefill?: QuotePrefill) => void;
}

export function ServiceAreasSection({ onNavigate }: ServiceAreasSectionProps) {
  const [query, setQuery] = useState('');
  const [lookupResult, setLookupResult] = useState<{
    status: 'matched' | 'unlisted';
    message: string;
    county?: string;
    value: string;
  } | null>(null);

  const handleCheckArea = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) {
      setLookupResult(null);
      return;
    }

    const normalized = trimmed.toLowerCase();
    const matchedCounty = SERVICE_AREAS.find(
      (area) =>
        area.county.toLowerCase().includes(normalized) ||
        area.cities.some((c) => c.toLowerCase().includes(normalized)) ||
        area.zipPrefixes.some((z) => z === normalized)
    );

    if (matchedCounty) {
      setLookupResult({
        status: 'matched',
        county: matchedCounty.county,
        value: trimmed,
        message: `"${trimmed}" corresponds to Beyond Cleaning’s ${matchedCounty.county} service area. Exact address availability is confirmed during your quote review.`,
      });
    } else {
      setLookupResult({
        status: 'unlisted',
        value: trimmed,
        message: `"${trimmed}" is outside the primary listed cities, or may fall within surrounding OKC metro coverage. Submit a quote request or call ${BUSINESS_INFO.phoneDisplay} to confirm availability at your address.`,
      });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-[#FAFCFB] border-b border-[#DCEBE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
          <div className="lg:col-span-6 space-y-3">
            <p className="text-xs font-semibold tracking-wide text-[#23A9A1]">
              Service Areas
            </p>
            <h2
              className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#123F46]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Do You Serve My City?
            </h2>
            <p className="text-base text-[#243338]/80 leading-relaxed max-w-xl">
              Beyond Cleaning serves residential and commercial properties across three primary Oklahoma City metro counties. Enter your city or ZIP code below to check your area.
            </p>
          </div>

          <div className="lg:col-span-6">
            <form
              onSubmit={handleCheckArea}
              className="rounded-xl bg-white border border-[#DCEBE8] p-4 sm:p-5 space-y-3"
            >
              <label
                htmlFor="service-area-search"
                className="block text-sm font-semibold text-[#123F46]"
              >
                Check your city or ZIP code
              </label>
              <div className="flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-1">
                  <Search
                    className="w-4 h-4 text-[#243338]/45 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                    aria-hidden="true"
                  />
                  <input
                    id="service-area-search"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="e.g., Edmond, Norman, Yukon, or 73118"
                    className="w-full pl-10 pr-3.5 py-2.5 text-sm text-[#243338] bg-[#FAFCFB] border border-[#DCEBE8] rounded-lg focus:outline-none focus:border-[#23A9A1]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-sm font-semibold text-white bg-[#123F46] hover:bg-[#19535C] rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                >
                  Check Area
                </button>
              </div>

              {lookupResult && (
                <div
                  role="status"
                  className={`rounded-lg p-3.5 text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    lookupResult.status === 'matched'
                      ? 'bg-[#E5F5F2] text-[#123F46]'
                      : 'bg-[#FAFCFB] border border-[#DCEBE8] text-[#243338]'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    {lookupResult.status === 'matched' ? (
                      <CheckCircle2
                        className="w-4 h-4 text-[#23A9A1] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                    ) : (
                      <Info
                        className="w-4 h-4 text-[#123F46] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                    )}
                    <span>{lookupResult.message}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      onNavigate('quote', { cityOrZip: lookupResult.value })
                    }
                    className="inline-flex items-center gap-1 font-semibold text-[#123F46] hover:text-[#23A9A1] whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* County Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICE_AREAS.map((area) => (
            <div
              key={area.id}
              className="rounded-2xl bg-white border border-[#DCEBE8] p-7 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#DCEBE8]">
                  <h3 className="text-xl font-semibold text-[#123F46]">
                    {area.county}
                  </h3>
                  <MapPin className="w-4 h-4 text-[#23A9A1]" aria-hidden="true" />
                </div>

                <p className="text-sm text-[#243338]/75 leading-relaxed">
                  {area.notes}
                </p>

                <ul className="space-y-2 pt-1">
                  {area.cities.map((city) => (
                    <li key={city}>
                      <button
                        type="button"
                        onClick={() => onNavigate('quote', { cityOrZip: city })}
                        className="group w-full flex items-center justify-between py-1.5 text-sm font-medium text-[#123F46] hover:text-[#23A9A1] transition-colors cursor-pointer"
                      >
                        <span>{city}</span>
                        <span className="text-xs text-[#243338]/55 group-hover:text-[#23A9A1] inline-flex items-center gap-1">
                          Quote
                          <ArrowRight className="w-3 h-3" aria-hidden="true" />
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#DCEBE8]">
                <button
                  type="button"
                  onClick={() =>
                    onNavigate('quote', { cityOrZip: area.cities[0] })
                  }
                  className="text-xs font-semibold text-[#123F46] hover:text-[#23A9A1] inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Request quote in {area.county}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#23A9A1]" aria-hidden="true" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-[#243338]/70">
          Coverage across specific streets and surrounding metro communities is always confirmed directly with Beyond Cleaning when reviewing your quote request.
        </p>
      </div>
    </section>
  );
}
