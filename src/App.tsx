import { useCallback, useEffect, useState } from 'react';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { Navbar } from './components/Navbar';
import { PageHeader } from './components/PageHeader';
import { QuoteFlowSection } from './components/QuoteFlowSection';
import { ServiceAreasSection } from './components/ServiceAreasSection';
import { ServicePathwaysSection } from './components/ServicePathwaysSection';
import { ServicesShowcaseSection } from './components/ServicesShowcaseSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TrustAndStorySection } from './components/TrustAndStorySection';
import { MEDIA_ASSETS, RESIDENTIAL_SERVICES, COMMERCIAL_SERVICES } from './data/beyondData';
import type { PageRoute, QuotePrefill } from './types';

const VALID_ROUTES: PageRoute[] = [
  'home',
  'residential',
  'commercial',
  'services',
  'story',
  'areas',
  'reviews',
  'quote',
  'contact',
];

function parseHashRoute(): PageRoute {
  const hash = window.location.hash.replace(/^#\/?/, '') as PageRoute;
  return VALID_ROUTES.includes(hash) ? hash : 'home';
}

export default function App() {
  const [route, setRoute] = useState<PageRoute>(() => parseHashRoute());
  const [quotePrefill, setQuotePrefill] = useState<QuotePrefill | undefined>(undefined);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(parseHashRoute());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleNavigate = useCallback(
    (nextRoute: PageRoute, prefill?: QuotePrefill) => {
      if (prefill) {
        setQuotePrefill({ ...prefill });
      }
      setRoute(nextRoute);
      window.location.hash = nextRoute === 'home' ? '' : `#/${nextRoute}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    []
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFCFB] text-[#243338] overflow-x-hidden">
      <Navbar currentRoute={route} onNavigate={handleNavigate} />

      <main className="flex-1">
        {route === 'home' && (
          <>
            <HeroSection onNavigate={handleNavigate} />
            <ServicePathwaysSection onNavigate={handleNavigate} />
            <ServicesShowcaseSection onNavigate={handleNavigate} />
            <TrustAndStorySection onNavigate={handleNavigate} />
            <HowItWorksSection onNavigate={handleNavigate} />
            <TestimonialsSection />
            <ServiceAreasSection onNavigate={handleNavigate} />
            <FaqSection />
            <FinalCtaSection onNavigate={handleNavigate} />
          </>
        )}

        {route === 'residential' && (
          <>
            <PageHeader
              eyebrow="Residential Cleaning · Oklahoma City Metro"
              title="A Fresh Home. More Time for Life."
              description="House cleaning, standard upkeep, recurring visits, deep cleaning, and move-in/move-out services delivered by background-checked, bonded, and insured professionals."
              onNavigate={handleNavigate}
              primaryCta={{
                label: 'Get a Residential Quote',
                route: 'quote',
                prefill: { spaceType: 'residential' },
              }}
              image={MEDIA_ASSETS.heroResidential}
            />
            <ServicesShowcaseSection
              onNavigate={handleNavigate}
              defaultCategory="residential"
            />
            <section className="py-14 bg-white border-b border-[#DCEBE8]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                  className="text-2xl sm:text-3xl font-semibold text-[#123F46] mb-6"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Residential Service Overview
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {RESIDENTIAL_SERVICES.slice(0, 3).map((item) => (
                    <div
                      key={item.id}
                      className="rounded-xl bg-[#FAFCFB] border border-[#DCEBE8] p-6 space-y-2"
                    >
                      <p className="text-base font-semibold text-[#123F46]">
                        {item.title}
                      </p>
                      <p className="text-sm text-[#243338]/80 leading-relaxed">
                        {item.bestFor}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <HowItWorksSection onNavigate={handleNavigate} />
            <TestimonialsSection />
            <ServiceAreasSection onNavigate={handleNavigate} />
            <FinalCtaSection onNavigate={handleNavigate} />
          </>
        )}

        {route === 'commercial' && (
          <>
            <PageHeader
              eyebrow="Commercial Cleaning · Oklahoma City Metro"
              title="Professional Spaces. Professional Standards."
              description="Office cleaning, commercial janitorial maintenance, and disinfecting services structured around your workplace hours and operational standards."
              onNavigate={handleNavigate}
              primaryCta={{
                label: 'Get a Commercial Quote',
                route: 'quote',
                prefill: { spaceType: 'commercial' },
              }}
              image={MEDIA_ASSETS.heroCommercial}
            />
            <ServicesShowcaseSection
              onNavigate={handleNavigate}
              defaultCategory="commercial"
            />
            <section className="py-14 bg-white border-b border-[#DCEBE8]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                  className="text-2xl sm:text-3xl font-semibold text-[#123F46] mb-6"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Built for Dependable Commercial Operations
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {COMMERCIAL_SERVICES.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-xl bg-[#FAFCFB] border border-[#DCEBE8] p-6 space-y-2"
                    >
                      <p className="text-base font-semibold text-[#123F46]">
                        {item.title}
                      </p>
                      <p className="text-sm text-[#243338]/80 leading-relaxed">
                        {item.bestFor}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <TestimonialsSection />
            <HowItWorksSection onNavigate={handleNavigate} />
            <FinalCtaSection onNavigate={handleNavigate} />
          </>
        )}

        {route === 'services' && (
          <>
            <PageHeader
              eyebrow="Our Services"
              title="Complete Residential & Commercial Cleaning"
              description="Explore every confirmed service offered by Beyond Cleaning across Oklahoma, Cleveland, and Canadian counties—and select any service to start a tailored quote."
              onNavigate={handleNavigate}
              primaryCta={{
                label: 'Request a Free Quote',
                route: 'quote',
              }}
            />
            <ServicesShowcaseSection
              onNavigate={handleNavigate}
              showAllMode={true}
            />
            <HowItWorksSection onNavigate={handleNavigate} />
            <FinalCtaSection onNavigate={handleNavigate} />
          </>
        )}

        {route === 'story' && (
          <>
            <PageHeader
              eyebrow="Our Story · Founded April 2020"
              title="Rooted in Oklahoma City. Focused on Care."
              description="What began as a pandemic-era disinfecting service in April 2020 grew into a trusted local residential and commercial cleaning partner across the Oklahoma City metro."
              onNavigate={handleNavigate}
              primaryCta={{
                label: 'Get a Free Quote',
                route: 'quote',
              }}
            />
            <TrustAndStorySection onNavigate={handleNavigate} compact={true} />
            <section className="py-16 bg-[#E5F5F2]/50 border-b border-[#DCEBE8]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                  className="text-2xl sm:text-3xl font-semibold text-[#123F46] mb-8"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  How Beyond Cleaning Evolved
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="rounded-xl bg-white border border-[#DCEBE8] p-6 space-y-2">
                    <p
                      className="text-xs font-semibold text-[#23A9A1]"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      April 2020
                    </p>
                    <h3 className="text-lg font-semibold text-[#123F46]">
                      Disinfecting Origins
                    </h3>
                    <p className="text-sm text-[#243338]/80 leading-relaxed">
                      Founded in Oklahoma City during the COVID-19 pandemic to deliver dedicated disinfecting services when local spaces needed dependable hygiene support.
                    </p>
                  </div>
                  <div className="rounded-xl bg-white border border-[#DCEBE8] p-6 space-y-2">
                    <p
                      className="text-xs font-semibold text-[#23A9A1]"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      Expansion
                    </p>
                    <h3 className="text-lg font-semibold text-[#123F46]">
                      Residential &amp; Commercial Growth
                    </h3>
                    <p className="text-sm text-[#243338]/80 leading-relaxed">
                      Expanded into house cleaning, deep cleaning, move-in/move-out turnovers, office cleaning, and ongoing commercial janitorial partnerships.
                    </p>
                  </div>
                  <div className="rounded-xl bg-white border border-[#DCEBE8] p-6 space-y-2">
                    <p
                      className="text-xs font-semibold text-[#23A9A1]"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      Commitment
                    </p>
                    <h3 className="text-lg font-semibold text-[#123F46]">
                      Local Accountability
                    </h3>
                    <p className="text-sm text-[#243338]/80 leading-relaxed">
                      Serving Oklahoma, Cleveland, and Canadian counties with background-checked, bonded, and insured team members backed by a satisfaction commitment.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <TestimonialsSection />
            <FinalCtaSection onNavigate={handleNavigate} />
          </>
        )}

        {route === 'areas' && (
          <>
            <PageHeader
              eyebrow="Oklahoma City Metro Coverage"
              title="Local Cleaning Across Three Primary Counties"
              description="Check whether your city or ZIP code sits within our primary Oklahoma, Cleveland, or Canadian County service areas."
              onNavigate={handleNavigate}
              primaryCta={{
                label: 'Request a Free Quote',
                route: 'quote',
              }}
            />
            <ServiceAreasSection onNavigate={handleNavigate} />
            <ContactSection onNavigate={handleNavigate} />
            <FinalCtaSection onNavigate={handleNavigate} />
          </>
        )}

        {route === 'reviews' && (
          <>
            <PageHeader
              eyebrow="Verified Client Feedback"
              title="Stories From Homes & Businesses We Serve"
              description="Read authentic feedback from residential, rental-property, and commercial office clients who trusted Beyond Cleaning with their spaces."
              onNavigate={handleNavigate}
              primaryCta={{
                label: 'Request Your Free Quote',
                route: 'quote',
              }}
            />
            <TestimonialsSection showFilter={true} />
            <TrustAndStorySection onNavigate={handleNavigate} />
            <FinalCtaSection onNavigate={handleNavigate} />
          </>
        )}

        {route === 'quote' && (
          <>
            <PageHeader
              eyebrow="Free Quote"
              title="Tailored Estimates for Homes & Workplaces"
              description="Select residential or commercial below to walk through a transparent, four-step quote request designed around your exact space."
              onNavigate={handleNavigate}
            />
            <QuoteFlowSection prefill={quotePrefill} />
            <FaqSection />
            <ContactSection onNavigate={handleNavigate} />
          </>
        )}

        {route === 'contact' && (
          <>
            <PageHeader
              eyebrow="Contact Beyond Cleaning"
              title="One Local Team. Clear Next Steps."
              description="Call, email, or start a residential or commercial quote request—all routed consistently through our Oklahoma City office."
              onNavigate={handleNavigate}
            />
            <ContactSection onNavigate={handleNavigate} />
            <ServiceAreasSection onNavigate={handleNavigate} />
            <FinalCtaSection onNavigate={handleNavigate} />
          </>
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
