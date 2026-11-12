import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO, SERVICE_AREAS } from '../data/beyondData';
import type { PageRoute, QuotePrefill } from '../types';

interface ContactSectionProps {
  onNavigate: (route: PageRoute, prefill?: QuotePrefill) => void;
}

export function ContactSection({ onNavigate }: ContactSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#DCEBE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Direct Contact Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-wide text-[#23A9A1]">
                Direct Contact
              </p>
              <h2
                className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#123F46]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Reach Beyond Cleaning Directly
              </h2>
              <p className="text-base text-[#243338]/80 leading-relaxed">
                Whether you are coordinating a home cleaning in Edmond, a rental turnover in Norman, or commercial office care in Oklahoma City, connect with the local team using one consistent contact point.
              </p>
            </div>

            <div className="rounded-2xl bg-[#FAFCFB] border border-[#DCEBE8] p-6 sm:p-7 space-y-5">
              <div>
                <p className="text-xs font-semibold tracking-wide text-[#243338]/60">
                  Business Name
                </p>
                <p className="mt-1 text-lg font-semibold text-[#123F46]">
                  {BUSINESS_INFO.name}{' '}
                  <span className="text-sm font-normal text-[#243338]/70">
                    ({BUSINESS_INFO.associatedName})
                  </span>
                </p>
              </div>

              <div className="pt-4 border-t border-[#DCEBE8] space-y-4">
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="flex items-start gap-3 group"
                >
                  <Phone
                    className="w-5 h-5 text-[#23A9A1] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs text-[#243338]/65">Phone (Click to Call)</p>
                    <p className="text-base font-semibold text-[#123F46] group-hover:text-[#23A9A1] transition-colors tabular-nums">
                      {BUSINESS_INFO.phoneDisplay}
                    </p>
                  </div>
                </a>

                <a
                  href={BUSINESS_INFO.emailHref}
                  className="flex items-start gap-3 group"
                >
                  <Mail
                    className="w-5 h-5 text-[#23A9A1] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs text-[#243338]/65">Email</p>
                    <p className="text-base font-semibold text-[#123F46] group-hover:text-[#23A9A1] transition-colors break-all">
                      {BUSINESS_INFO.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <MapPin
                    className="w-5 h-5 text-[#23A9A1] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs text-[#243338]/65">Oklahoma City Office</p>
                    <p className="text-sm font-medium text-[#123F46] leading-relaxed">
                      {BUSINESS_INFO.addressLine1}
                      <br />
                      {BUSINESS_INFO.addressLine2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Pathways + Service Area Summary */}
          <div className="lg:col-span-7 space-y-8">
            <div className="rounded-2xl bg-[#E5F5F2]/65 border border-[#DCEBE8] p-7 sm:p-8 space-y-5">
              <h3
                className="text-2xl font-semibold text-[#123F46]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Choose Your Quote Pathway
              </h3>
              <p className="text-sm sm:text-base text-[#243338]/85 leading-relaxed">
                Start with the form tailored to your property type so we capture the right residential or commercial requirements from the very first step.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => onNavigate('quote', { spaceType: 'residential' })}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#123F46] hover:bg-[#19535C] rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                >
                  <span>Residential Quote</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('quote', { spaceType: 'commercial' })}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#123F46] bg-white hover:bg-[#FAFCFB] border border-[#DCEBE8] rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                >
                  <span>Commercial Quote</span>
                  <ArrowRight className="w-4 h-4 text-[#23A9A1]" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="rounded-2xl bg-[#FAFCFB] border border-[#DCEBE8] p-7 sm:p-8 space-y-5">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-[#123F46]">
                  Primary Oklahoma City Metro Service Areas
                </h3>
                <button
                  type="button"
                  onClick={() => onNavigate('areas')}
                  className="text-xs font-semibold text-[#123F46] hover:text-[#23A9A1] underline underline-offset-4 cursor-pointer"
                >
                  Check your city
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {SERVICE_AREAS.map((area) => (
                  <div key={area.id} className="space-y-1.5">
                    <p className="text-sm font-semibold text-[#123F46]">
                      {area.county}
                    </p>
                    <p className="text-xs text-[#243338]/75 leading-relaxed">
                      {area.cities.join(', ')}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-xs text-[#243338]/70 pt-2 border-t border-[#DCEBE8]">
                {BUSINESS_INFO.quoteTurnaroundNote} Please call{' '}
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="font-semibold text-[#123F46] underline decoration-[#23A9A1]/50"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>{' '}
                if you have an urgent commercial or move-in/move-out timeline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
