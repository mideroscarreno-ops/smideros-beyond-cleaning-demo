import { ArrowRight, ShieldCheck } from 'lucide-react';
import { MEDIA_ASSETS, TRUST_COMMITMENTS } from '../data/beyondData';
import type { PageRoute, QuotePrefill } from '../types';
import { EditorialImage } from './EditorialImage';

interface TrustAndStorySectionProps {
  onNavigate: (route: PageRoute, prefill?: QuotePrefill) => void;
  compact?: boolean;
}

export function TrustAndStorySection({
  onNavigate,
  compact = false,
}: TrustAndStorySectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#DCEBE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
        {/* Trust & Credibility Row */}
        <div>
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold tracking-wide text-[#23A9A1]">
              Trust &amp; Accountability
            </p>
            <h2
              className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-[#123F46]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Peace of Mind in Every Room We Enter
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {TRUST_COMMITMENTS.map((item) => (
              <div
                key={item.id}
                className="rounded-xl bg-[#FAFCFB] border border-[#DCEBE8] p-6 sm:p-7 space-y-3"
              >
                <ShieldCheck className="w-5 h-5 text-[#23A9A1]" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-[#123F46]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#243338]/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Authentic Brand Origin Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-4">
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-[#DCEBE8] aspect-[4/3]">
              <EditorialImage
                src={MEDIA_ASSETS.storyArchitecture.src}
                alt={MEDIA_ASSETS.storyArchitecture.alt}
                label={MEDIA_ASSETS.storyArchitecture.label}
                width={MEDIA_ASSETS.storyArchitecture.width}
                height={MEDIA_ASSETS.storyArchitecture.height}
                loading="lazy"
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <p className="text-xs font-semibold tracking-wide text-[#23A9A1]">
              Our Story · Founded April 2020
            </p>
            <h2
              className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#123F46]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Born From a Mission to Make Spaces Safer.
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-[#243338]/85">
              <p>
                Beyond Cleaning began in Oklahoma City in April 2020 during the height of the COVID-19 pandemic. At the outset, the company focused specifically on disinfecting services—helping local spaces stay safer when communities and businesses needed dependable support to move forward.
              </p>
              <p>
                As local homeowners and business leaders looked for a trusted team they could rely on long-term, Beyond Cleaning expanded from disinfecting into comprehensive residential house cleaning and commercial janitorial services—keeping its Oklahoma City roots and personal accountability at the center of every visit.
              </p>
            </div>

            {!compact && (
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('story')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#123F46] hover:text-[#23A9A1] underline decoration-[#23A9A1]/50 underline-offset-4 transition-colors cursor-pointer"
                >
                  <span>Read our full story</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
