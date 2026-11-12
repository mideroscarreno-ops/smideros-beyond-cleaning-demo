import { ArrowRight, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/beyondData';
import type { PageRoute, QuotePrefill } from '../types';

interface FinalCtaSectionProps {
  onNavigate: (route: PageRoute, prefill?: QuotePrefill) => void;
}

export function FinalCtaSection({ onNavigate }: FinalCtaSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-[#E5F5F2]/65">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <p className="text-xs font-semibold tracking-wide text-[#23A9A1]">
          Beyond Clean. Beyond Expectations.
        </p>

        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#123F46] mx-auto max-w-3xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Your Space Deserves More Than Just Clean.
        </h2>

        <p className="text-base sm:text-lg text-[#243338]/85 max-w-2xl mx-auto leading-relaxed">
          Tell us what you need, and discover a cleaning solution tailored to your home or business.
        </p>

        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            type="button"
            onClick={() => onNavigate('quote')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[15px] font-semibold text-white bg-[#123F46] hover:bg-[#19535C] rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            <span>Request Your Free Quote</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>

          <a
            href={BUSINESS_INFO.phoneHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[15px] font-semibold text-[#123F46] bg-white hover:bg-[#FAFCFB] border border-[#DCEBE8] rounded-lg transition-colors whitespace-nowrap"
          >
            <Phone className="w-4 h-4 text-[#23A9A1]" aria-hidden="true" />
            <span className="tabular-nums">Call {BUSINESS_INFO.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
