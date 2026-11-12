import { ArrowRight, ArrowUpRight, Phone } from 'lucide-react';
import { BUSINESS_INFO, MEDIA_ASSETS } from '../data/beyondData';
import type { PageRoute, QuotePrefill } from '../types';
import { EditorialImage } from './EditorialImage';

interface HeroSectionProps {
  onNavigate: (route: PageRoute, prefill?: QuotePrefill) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative bg-[#FAFCFB] border-b border-[#DCEBE8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 lg:pt-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Editorial Copy Column */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-[13px] font-medium tracking-wide text-[#123F46]/75">
              Oklahoma City Metro <span aria-hidden="true">·</span> Residential &amp; Commercial
            </p>

            <h1
              className="text-[clamp(2.35rem,4.4vw,4rem)] font-semibold leading-[1.08] tracking-tight text-[#123F46]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Clean Spaces. Better Living.
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-[#243338]/85 max-w-xl">
              Professional residential and commercial cleaning throughout the Oklahoma City metro—built on local accountability, vetted professionals, and consistent care for every room and workspace.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onNavigate('residential')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[15px] font-semibold text-white bg-[#123F46] hover:bg-[#19535C] rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>Explore Home Cleaning</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('commercial')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[15px] font-semibold text-[#123F46] bg-[#E5F5F2] hover:bg-[#D5EDE8] border border-[#23A9A1]/25 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>Explore Business Cleaning</span>
                <ArrowRight className="w-4 h-4 text-[#23A9A1]" aria-hidden="true" />
              </button>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#243338]/80">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center gap-2 font-medium text-[#123F46] hover:text-[#23A9A1] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#23A9A1]" aria-hidden="true" />
                <span className="tabular-nums">Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <span aria-hidden="true" className="text-[#243338]/30">
                /
              </span>
              <button
                type="button"
                onClick={() => onNavigate('quote')}
                className="font-medium text-[#123F46] underline decoration-[#23A9A1]/50 underline-offset-4 hover:text-[#23A9A1] transition-colors cursor-pointer"
              >
                Request a Free Quote
              </button>
            </div>
          </div>

          {/* Dual Audience Split Photographic Composition */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
              <button
                type="button"
                onClick={() => onNavigate('residential')}
                className="group relative text-left rounded-xl overflow-hidden border border-[#DCEBE8] bg-white focus-visible:ring-2 focus-visible:ring-[#23A9A1] cursor-pointer"
              >
                <div className="aspect-[4/3] sm:aspect-[3/4] w-full overflow-hidden">
                  <EditorialImage
                    src={MEDIA_ASSETS.heroResidential.src}
                    alt={MEDIA_ASSETS.heroResidential.alt}
                    label={MEDIA_ASSETS.heroResidential.label}
                    width={MEDIA_ASSETS.heroResidential.width}
                    height={MEDIA_ASSETS.heroResidential.height}
                    loading="eager"
                    fetchPriority="high"
                    className="w-full h-full"
                    imgClassName="transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#123F46]/90 via-[#123F46]/25 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-medium tracking-wide text-[#F2B49A]">
                      Residential
                    </span>
                    <ArrowUpRight
                      className="w-4 h-4 text-white/80 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </div>
                  <p
                    className="mt-1 text-xl font-semibold leading-snug text-white"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    For Your Home
                  </p>
                  <p className="mt-1 text-xs text-white/85">
                    Standard, recurring, deep &amp; move-in/out
                  </p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('commercial')}
                className="group relative text-left rounded-xl overflow-hidden border border-[#DCEBE8] bg-white sm:translate-y-5 focus-visible:ring-2 focus-visible:ring-[#23A9A1] cursor-pointer"
              >
                <div className="aspect-[4/3] sm:aspect-[3/4] w-full overflow-hidden">
                  <EditorialImage
                    src={MEDIA_ASSETS.heroCommercial.src}
                    alt={MEDIA_ASSETS.heroCommercial.alt}
                    label={MEDIA_ASSETS.heroCommercial.label}
                    width={MEDIA_ASSETS.heroCommercial.width}
                    height={MEDIA_ASSETS.heroCommercial.height}
                    loading="eager"
                    fetchPriority="high"
                    className="w-full h-full"
                    imgClassName="transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#123F46]/90 via-[#123F46]/25 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-medium tracking-wide text-[#F2B49A]">
                      Commercial
                    </span>
                    <ArrowUpRight
                      className="w-4 h-4 text-white/80 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </div>
                  <p
                    className="mt-1 text-xl font-semibold leading-snug text-white"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    For Your Business
                  </p>
                  <p className="mt-1 text-xs text-white/85">
                    Office cleaning, janitorial &amp; disinfecting
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Clean Unboxed Trust & Context Strip */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-[#DCEBE8] grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-xs font-semibold tracking-wide text-[#23A9A1]">
              Vetted Professionals
            </p>
            <p className="mt-1 text-sm font-medium text-[#123F46]">
              Background-checked, bonded, and insured team members
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wide text-[#23A9A1]">
              Local Since April 2020
            </p>
            <p className="mt-1 text-sm font-medium text-[#123F46]">
              Oklahoma City owned—grown from disinfecting roots
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wide text-[#23A9A1]">
              Three-County Coverage
            </p>
            <p className="mt-1 text-sm font-medium text-[#123F46]">
              Oklahoma, Cleveland, and Canadian counties
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
