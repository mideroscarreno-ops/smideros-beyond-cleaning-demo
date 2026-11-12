import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import {
  COMMERCIAL_SERVICES,
  MEDIA_ASSETS,
  RESIDENTIAL_SERVICES,
} from '../data/beyondData';
import type { PageRoute, QuotePrefill, SpaceCategory } from '../types';
import { EditorialImage } from './EditorialImage';

interface ServicesShowcaseSectionProps {
  onNavigate: (route: PageRoute, prefill?: QuotePrefill) => void;
  defaultCategory?: SpaceCategory;
  showAllMode?: boolean;
}

export function ServicesShowcaseSection({
  onNavigate,
  defaultCategory = 'residential',
  showAllMode = false,
}: ServicesShowcaseSectionProps) {
  const [activeTab, setActiveTab] = useState<SpaceCategory>(defaultCategory);

  const renderCategoryBlock = (category: SpaceCategory) => {
    const isResidential = category === 'residential';
    const items = isResidential ? RESIDENTIAL_SERVICES : COMMERCIAL_SERVICES;
    const media = isResidential
      ? MEDIA_ASSETS.residentialDetail
      : MEDIA_ASSETS.commercialDetail;

    return (
      <div key={category} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Sticky Editorial Summary + Photo */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-5">
          <div className="rounded-2xl overflow-hidden border border-[#DCEBE8] aspect-[16/9]">
            <EditorialImage
              src={media.src}
              alt={media.alt}
              label={media.label}
              width={media.width}
              height={media.height}
              loading="lazy"
              className="w-full h-full"
            />
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-wide text-[#23A9A1]">
              {isResidential ? 'Residential Cleaning' : 'Commercial Cleaning'}
            </p>
            <h3
              className="text-2xl sm:text-3xl font-semibold text-[#123F46]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {isResidential
                ? 'Thoughtful care for lived-in and moving-day homes'
                : 'Dependable standards for offices and commercial facilities'}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[#243338]/80">
              {isResidential
                ? 'Whether you want weekly upkeep or a detailed reset before moving day, each residential visit is tailored to your home’s layout and priorities.'
                : 'From routine office maintenance to responsive disinfecting services, Beyond Cleaning works around your workplace hours to keep shared spaces welcoming.'}
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('quote', { spaceType: category })}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#123F46] hover:bg-[#19535C] rounded-lg transition-colors cursor-pointer"
              >
                <span>
                  {isResidential
                    ? 'Request a Residential Quote'
                    : 'Request a Commercial Quote'}
                </span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Numbered Services List */}
        <div className="lg:col-span-7 divide-y divide-[#DCEBE8] border-y border-[#DCEBE8]">
          {items.map((service) => (
            <article key={service.id} className="py-7 first:pt-2 last:pb-2">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-2.5 max-w-xl">
                  <div className="flex items-baseline gap-3">
                    <span
                      className="text-sm font-medium text-[#23A9A1] tabular-nums"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {service.number}.
                    </span>
                    <h4 className="text-xl font-semibold text-[#123F46]">
                      {service.title}
                    </h4>
                  </div>

                  <p className="text-sm sm:text-[15px] leading-relaxed text-[#243338]/85">
                    {service.summary}
                  </p>

                  <ul className="pt-1 space-y-1.5">
                    {service.highlights.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-sm text-[#243338]/80"
                      >
                        <Check
                          className="w-4 h-4 text-[#23A9A1] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="pt-1 text-xs text-[#123F46]/75">
                    <span className="font-semibold">Best for:</span> {service.bestFor}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    onNavigate('quote', {
                      spaceType: category,
                      service: service.title,
                    })
                  }
                  className="self-start inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#123F46] bg-[#E5F5F2] hover:bg-[#D5EDE8] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Quote this</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#23A9A1]" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 lg:py-24 bg-[#FAFCFB] border-b border-[#DCEBE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-[#23A9A1]">
              Confirmed Service Catalog
            </p>
            <h2
              className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-[#123F46]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Services Built Around Real Spaces
            </h2>
          </div>

          {!showAllMode && (
            <div
              role="tablist"
              aria-label="Service Category Filter"
              className="inline-flex items-center p-1 bg-[#E5F5F2] rounded-lg border border-[#DCEBE8] self-start"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'residential'}
                onClick={() => setActiveTab('residential')}
                className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'residential'
                    ? 'bg-white text-[#123F46] shadow-sm'
                    : 'text-[#243338]/75 hover:text-[#123F46]'
                }`}
              >
                Residential Services
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'commercial'}
                onClick={() => setActiveTab('commercial')}
                className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'commercial'
                    ? 'bg-white text-[#123F46] shadow-sm'
                    : 'text-[#243338]/75 hover:text-[#123F46]'
                }`}
              >
                Commercial Services
              </button>
            </div>
          )}
        </div>

        {showAllMode ? (
          <div className="space-y-20">
            {renderCategoryBlock('residential')}
            <div className="border-t border-[#DCEBE8] pt-16">
              {renderCategoryBlock('commercial')}
            </div>
          </div>
        ) : (
          renderCategoryBlock(activeTab)
        )}
      </div>
    </section>
  );
}
