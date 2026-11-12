import { useState, useEffect } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/beyondData';
import type { PageRoute, QuotePrefill } from '../types';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute, prefill?: QuotePrefill) => void;
}

const PRIMARY_NAV_ITEMS: { route: PageRoute; label: string }[] = [
  { route: 'home', label: 'Home' },
  { route: 'residential', label: 'Residential' },
  { route: 'commercial', label: 'Commercial' },
  { route: 'story', label: 'Our Story' },
  { route: 'areas', label: 'Service Areas' },
  { route: 'reviews', label: 'Reviews' },
  { route: 'contact', label: 'Contact' },
];

export function Navbar({ currentRoute, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleLinkClick = (route: PageRoute, prefill?: QuotePrefill) => {
    setMobileOpen(false);
    onNavigate(route, prefill);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAFCFB]/95 backdrop-blur-md border-b border-[#DCEBE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Single-line Brand Wordmark */}
        <button
          type="button"
          onClick={() => handleLinkClick('home')}
          className="text-xl font-semibold tracking-tight text-[#123F46] whitespace-nowrap shrink-0 cursor-pointer hover:text-[#23A9A1] transition-colors"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Beyond Cleaning
        </button>

        {/* Zone 2: Single-line Text Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-5 text-[14px] font-medium text-[#243338]"
        >
          {PRIMARY_NAV_ITEMS.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <button
                key={item.route}
                type="button"
                onClick={() => handleLinkClick(item.route)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-1.5 whitespace-nowrap shrink-0 cursor-pointer transition-colors ${
                  isActive
                    ? 'text-[#123F46] font-semibold'
                    : 'text-[#243338]/80 hover:text-[#123F46]'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 right-0 bottom-0 h-[2px] bg-[#23A9A1] transition-transform duration-150 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action + Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={BUSINESS_INFO.phoneHref}
            className="hidden xl:inline-flex items-center gap-1.5 text-[13px] font-medium text-[#123F46] hover:text-[#23A9A1] transition-colors whitespace-nowrap shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-[#23A9A1]" aria-hidden="true" />
            <span className="tabular-nums">Call {BUSINESS_INFO.phoneDisplay}</span>
          </a>

          <button
            type="button"
            onClick={() => handleLinkClick('quote')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-[13px] font-semibold text-white bg-[#123F46] hover:bg-[#19535C] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Get a Free Quote
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#123F46] hover:bg-[#E5F5F2] transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden border-t border-[#DCEBE8] bg-[#FAFCFB] px-4 py-5 space-y-4 shadow-lg"
        >
          <nav aria-label="Mobile Navigation" className="grid grid-cols-1 gap-1">
            {[
              ...PRIMARY_NAV_ITEMS.slice(0, 3),
              { route: 'services' as PageRoute, label: 'Our Services' },
              ...PRIMARY_NAV_ITEMS.slice(3),
            ].map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  type="button"
                  onClick={() => handleLinkClick(item.route)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`w-full text-left px-3 py-3 rounded-lg text-[15px] font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#E5F5F2] text-[#123F46] font-semibold'
                      : 'text-[#243338] hover:bg-[#E5F5F2]/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-[#DCEBE8] flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => handleLinkClick('quote')}
              className="w-full py-3 px-4 text-center text-[15px] font-semibold text-white bg-[#123F46] hover:bg-[#19535C] rounded-lg transition-colors cursor-pointer"
            >
              Get a Free Quote
            </button>
            <a
              href={BUSINESS_INFO.phoneHref}
              className="w-full py-3 px-4 inline-flex items-center justify-center gap-2 text-[15px] font-semibold text-[#123F46] bg-[#E5F5F2] hover:bg-[#D5EDE8] rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4 text-[#23A9A1]" aria-hidden="true" />
              <span className="tabular-nums">Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
