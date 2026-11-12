import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { PageRoute, QuotePrefill } from '../types';
import { EditorialImage } from './EditorialImage';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  onNavigate: (route: PageRoute, prefill?: QuotePrefill) => void;
  primaryCta?: {
    label: string;
    route: PageRoute;
    prefill?: QuotePrefill;
  };
  image?: {
    src: string;
    alt: string;
    label: string;
    width?: number;
    height?: number;
  };
}

export function PageHeader({
  eyebrow,
  title,
  description,
  onNavigate,
  primaryCta,
  image,
}: PageHeaderProps) {
  return (
    <section className="bg-[#FAFCFB] border-b border-[#DCEBE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#123F46]/75 hover:text-[#123F46] mb-6 cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-[#23A9A1]" aria-hidden="true" />
          <span>Back to Home</span>
        </button>

        <div
          className={`grid grid-cols-1 ${
            image ? 'lg:grid-cols-12 gap-8 lg:gap-12 items-center' : ''
          }`}
        >
          <div className={image ? 'lg:col-span-7 space-y-4' : 'max-w-3xl space-y-4'}>
            <p className="text-xs font-semibold tracking-wide text-[#23A9A1]">
              {eyebrow}
            </p>
            <h1
              className="text-[clamp(2rem,3.8vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-[#123F46]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {title}
            </h1>
            <p className="text-base sm:text-lg text-[#243338]/85 leading-relaxed max-w-2xl">
              {description}
            </p>

            {primaryCta && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() =>
                    onNavigate(primaryCta.route, primaryCta.prefill)
                  }
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#123F46] hover:bg-[#19535C] rounded-lg transition-colors cursor-pointer"
                >
                  <span>{primaryCta.label}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            )}
          </div>

          {image && (
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#DCEBE8] aspect-[4/3]">
                <EditorialImage
                  src={image.src}
                  alt={image.alt}
                  label={image.label}
                  width={image.width}
                  height={image.height}
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
