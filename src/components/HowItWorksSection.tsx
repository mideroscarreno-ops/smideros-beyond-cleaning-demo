import { ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/beyondData';
import type { PageRoute, QuotePrefill } from '../types';

interface HowItWorksSectionProps {
  onNavigate: (route: PageRoute, prefill?: QuotePrefill) => void;
}

export function HowItWorksSection({ onNavigate }: HowItWorksSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-[#E5F5F2]/50 border-b border-[#DCEBE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-[#23A9A1]">
              How It Works
            </p>
            <h2
              className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-[#123F46]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              A Clear Process From First Inquiry to Clean Space
            </h2>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('quote')}
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#123F46] hover:bg-[#19535C] rounded-lg transition-colors self-start whitespace-nowrap cursor-pointer"
          >
            <span>Start Your Quote Request</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {HOW_IT_WORKS_STEPS.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl bg-white border border-[#DCEBE8] p-7 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <span
                  className="inline-block text-sm font-semibold text-[#23A9A1] tabular-nums"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {item.step}
                </span>
                <h3 className="text-xl font-semibold text-[#123F46]">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-[15px] leading-relaxed text-[#243338]/80">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-[#243338]/70">
          Note: Submitting a quote request begins a conversation to review your space details and coordinate scheduling—it does not automatically book or confirm an appointment.
        </p>
      </div>
    </section>
  );
}
