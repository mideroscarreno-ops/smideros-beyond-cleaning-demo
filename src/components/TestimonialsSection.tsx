import { useState } from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/beyondData';
import type { SpaceCategory } from '../types';

interface TestimonialsSectionProps {
  showFilter?: boolean;
}

export function TestimonialsSection({ showFilter = false }: TestimonialsSectionProps) {
  const [filter, setFilter] = useState<'all' | SpaceCategory>('all');

  const visibleTestimonials =
    filter === 'all'
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.category === filter);

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#DCEBE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-[#23A9A1]">
              Client Perspectives
            </p>
            <h2
              className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-[#123F46]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Trusted Across Homes, Rentals, and Offices
            </h2>
          </div>

          {showFilter && (
            <div
              role="tablist"
              aria-label="Filter Reviews by Space Type"
              className="inline-flex items-center p-1 bg-[#E5F5F2] rounded-lg border border-[#DCEBE8] self-start"
            >
              {(['all', 'residential', 'commercial'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={filter === tab}
                  onClick={() => setFilter(tab)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-md capitalize transition-colors whitespace-nowrap cursor-pointer ${
                    filter === tab
                      ? 'bg-white text-[#123F46] shadow-sm'
                      : 'text-[#243338]/75 hover:text-[#123F46]'
                  }`}
                >
                  {tab === 'all' ? 'All Clients' : tab}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {visibleTestimonials.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl bg-[#FAFCFB] border border-[#DCEBE8] p-7 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <Quote className="w-5 h-5 text-[#23A9A1]" aria-hidden="true" />
                <blockquote className="text-[15px] leading-relaxed text-[#243338]/90">
                  “{item.quote}”
                </blockquote>
              </div>

              <div className="pt-4 border-t border-[#DCEBE8]">
                <p className="text-sm font-semibold text-[#123F46]">{item.author}</p>
                <p className="text-xs text-[#243338]/70 mt-0.5">{item.context}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
