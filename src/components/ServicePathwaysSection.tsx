import { ArrowRight, Building2, Home } from 'lucide-react';
import type { PageRoute, QuotePrefill } from '../types';

interface ServicePathwaysSectionProps {
  onNavigate: (route: PageRoute, prefill?: QuotePrefill) => void;
}

export function ServicePathwaysSection({ onNavigate }: ServicePathwaysSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#DCEBE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 lg:mb-12">
          <p className="text-xs font-semibold tracking-wide text-[#23A9A1]">
            Two Distinct Journeys
          </p>
          <h2
            className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-[#123F46]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Tailored for Homes and Workplaces Alike
          </h2>
          <p className="mt-3 text-base text-[#243338]/80 leading-relaxed">
            Your home and your workplace have different schedules, priorities, and standards. Choose your pathway below for dedicated service options and a tailored quote experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Residential Editorial Panel */}
          <div className="flex flex-col justify-between rounded-2xl bg-[#E5F5F2]/65 border border-[#DCEBE8] p-7 sm:p-10">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-[#123F46]">
                <Home className="w-5 h-5 text-[#23A9A1]" aria-hidden="true" />
                <span className="text-xs font-semibold tracking-wider uppercase text-[#123F46]">
                  For Your Home
                </span>
              </div>

              <h3
                className="text-2xl sm:text-3xl font-semibold leading-snug text-[#123F46]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                A Fresh Home. More Time for Life.
              </h3>

              <p className="text-base leading-relaxed text-[#243338]/85 max-w-lg">
                From recurring house cleaning to deep cleans and moving-day services, discover cleaning solutions designed around your home.
              </p>

              <p className="text-sm text-[#123F46]/80 pt-1">
                House cleaning <span aria-hidden="true">·</span> Standard <span aria-hidden="true">·</span> Recurring <span aria-hidden="true">·</span> Deep <span aria-hidden="true">·</span> Move-In / Move-Out
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#123F46]/10 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('quote', { spaceType: 'residential' })}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#123F46] hover:bg-[#19535C] rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>Get a Residential Quote</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('residential')}
                className="text-sm font-semibold text-[#123F46] hover:text-[#23A9A1] underline decoration-[#23A9A1]/40 underline-offset-4 transition-colors cursor-pointer"
              >
                Explore residential details
              </button>
            </div>
          </div>

          {/* Commercial Editorial Panel */}
          <div className="flex flex-col justify-between rounded-2xl bg-[#123F46] text-[#FAFCFB] border border-[#123F46] p-7 sm:p-10">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-[#F2B49A]">
                <Building2 className="w-5 h-5 text-[#23A9A1]" aria-hidden="true" />
                <span className="text-xs font-semibold tracking-wider uppercase text-[#F2B49A]">
                  For Your Business
                </span>
              </div>

              <h3
                className="text-2xl sm:text-3xl font-semibold leading-snug text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Professional Spaces. Professional Standards.
              </h3>

              <p className="text-base leading-relaxed text-[#E5F5F2]/85 max-w-lg">
                Commercial cleaning and janitorial solutions designed around the needs of your workplace.
              </p>

              <p className="text-sm text-[#E5F5F2]/80 pt-1">
                Office cleaning <span aria-hidden="true">·</span> Commercial janitorial <span aria-hidden="true">·</span> Disinfecting services
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('quote', { spaceType: 'commercial' })}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#123F46] bg-[#23A9A1] hover:bg-[#31BEB6] rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>Get a Commercial Quote</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('commercial')}
                className="text-sm font-semibold text-[#E5F5F2] hover:text-[#F2B49A] underline decoration-white/30 underline-offset-4 transition-colors cursor-pointer"
              >
                Explore commercial details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
