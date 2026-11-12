import { Mail, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO, SERVICE_AREAS } from '../data/beyondData';
import type { PageRoute, QuotePrefill } from '../types';

interface FooterProps {
  onNavigate: (route: PageRoute, prefill?: QuotePrefill) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#123F46] text-[#FAFCFB] border-t border-[#1D545D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="text-2xl font-semibold tracking-tight text-white cursor-pointer hover:text-[#23A9A1] transition-colors"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Beyond Cleaning
              </button>
              <p className="mt-1.5 text-sm text-[#E5F5F2]/80">
                Also associated with {BUSINESS_INFO.associatedName} · Founded {BUSINESS_INFO.founded}
              </p>
            </div>
            <p className="text-sm leading-relaxed text-[#E5F5F2]/85 max-w-sm">
              Locally owned residential and commercial cleaning across the Oklahoma City metropolitan area.
            </p>
            <div className="space-y-2.5 pt-1 text-sm text-[#E5F5F2]">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="flex items-center gap-2.5 hover:text-[#F2B49A] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#23A9A1] shrink-0" aria-hidden="true" />
                <span className="tabular-nums">{BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <a
                href={BUSINESS_INFO.emailHref}
                className="flex items-center gap-2.5 hover:text-[#F2B49A] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#23A9A1] shrink-0" aria-hidden="true" />
                <span>{BUSINESS_INFO.email}</span>
              </a>
              <div className="flex items-start gap-2.5 text-[#E5F5F2]/85">
                <MapPin className="w-4 h-4 text-[#23A9A1] shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  {BUSINESS_INFO.addressLine1}
                  <br />
                  {BUSINESS_INFO.addressLine2}
                </span>
              </div>
            </div>
          </div>

          {/* Services & Pathways */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-semibold tracking-wide text-[#F2B49A]">
              Cleaning Services
            </h3>
            <ul className="space-y-2 text-sm text-[#E5F5F2]/85">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('residential')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Residential Cleaning
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('commercial')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Commercial Cleaning
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  All Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('quote', { spaceType: 'residential' })}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Residential Free Quote
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('quote', { spaceType: 'commercial' })}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Commercial Free Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-semibold tracking-wide text-[#F2B49A]">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-[#E5F5F2]/85">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('story')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('areas')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Service Areas
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('reviews')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Primary Counties */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-semibold tracking-wide text-[#F2B49A]">
              OKC Metro Service Areas
            </h3>
            <div className="space-y-3 text-sm text-[#E5F5F2]/85">
              {SERVICE_AREAS.map((area) => (
                <div key={area.id}>
                  <p className="font-medium text-white">{area.county}</p>
                  <p className="text-xs text-[#E5F5F2]/75 mt-0.5">
                    {area.cities.join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#E5F5F2]/70">
          <p>
            Beyond Cleaning · Oklahoma City, Oklahoma · Background-checked, bonded, and insured team members.
          </p>
          <p className="text-[#E5F5F2]/85">
            Independent website redesign concept by S.Mideros Agency.
          </p>
        </div>
      </div>
    </footer>
  );
}
