import { useEffect, useState } from 'react';
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  Home,
  Info,
  Mail,
  Phone,
  RotateCcw,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/beyondData';
import type { QuotePrefill, SpaceCategory } from '../types';

interface QuoteFlowSectionProps {
  prefill?: QuotePrefill;
}

const RESIDENTIAL_REQUIREMENTS = [
  {
    id: 'Standard cleaning',
    label: 'Standard cleaning',
    desc: 'Everyday maintenance of kitchens, baths, bedrooms, and living areas.',
  },
  {
    id: 'Deep cleaning',
    label: 'Deep cleaning',
    desc: 'Detailed top-to-bottom care including trim, baseboards, and buildup.',
  },
  {
    id: 'Recurring cleaning',
    label: 'Recurring cleaning',
    desc: 'Scheduled weekly, bi-weekly, or monthly home upkeep.',
  },
  {
    id: 'Move-in cleaning',
    label: 'Move-in cleaning',
    desc: 'Fresh sanitization before unpacking into a new home or apartment.',
  },
  {
    id: 'Move-out cleaning',
    label: 'Move-out cleaning',
    desc: 'Thorough turnover cleaning for tenants, homeowners, or rentals.',
  },
];

const COMMERCIAL_REQUIREMENTS = [
  {
    id: 'Office cleaning',
    label: 'Office cleaning',
    desc: 'Workstations, conference rooms, breakrooms, restrooms, and lobbies.',
  },
  {
    id: 'Commercial janitorial',
    label: 'Commercial janitorial',
    desc: 'Ongoing facility cleaning, floors, corridors, and shared spaces.',
  },
  {
    id: 'Disinfecting services',
    label: 'Disinfecting services',
    desc: 'Targeted high-touch surface disinfecting for workplaces.',
  },
  {
    id: 'Other commercial cleaning requirements',
    label: 'Other commercial cleaning requirements',
    desc: 'Describe specific commercial spaces or multi-suite needs below.',
  },
];

const RESIDENTIAL_PROPERTY_TYPES = [
  'Single-family home',
  'Apartment or condo',
  'Townhome or duplex',
  'Rental / investment property',
];

const COMMERCIAL_PROPERTY_TYPES = [
  'Professional office suite',
  'Multi-room office building',
  'Clinic or medical office',
  'Retail or client-facing studio',
  'Other commercial facility',
];

const RESIDENTIAL_FREQUENCIES = [
  'One-time service',
  'Weekly',
  'Every two weeks',
  'Monthly',
  'Not sure yet — help me decide',
];

const COMMERCIAL_FREQUENCIES = [
  'One-time / urgent turnaround',
  'Daily or multiple times per week',
  'Weekly',
  'Bi-weekly or monthly',
  'Custom commercial schedule',
];

export function QuoteFlowSection({ prefill }: QuoteFlowSectionProps) {
  const [step, setStep] = useState<number>(1);
  const [spaceType, setSpaceType] = useState<SpaceCategory>(
    prefill?.spaceType ?? 'residential'
  );
  const [selectedServices, setSelectedServices] = useState<string[]>(
    prefill?.service ? [prefill.service] : []
  );
  const [otherCommercialDetails, setOtherCommercialDetails] = useState('');

  // Step 3: Property info
  const [cityOrZip, setCityOrZip] = useState(prefill?.cityOrZip ?? '');
  const [propertyType, setPropertyType] = useState('');
  const [approxSize, setApproxSize] = useState('');
  const [frequency, setFrequency] = useState('');
  const [preferredSchedule, setPreferredSchedule] = useState('');

  // Step 4: Contact info
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredContact, setPreferredContact] = useState<'Phone' | 'Email' | 'Either'>('Phone');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  // Sync incoming prefill when navigating from service/area CTAs
  useEffect(() => {
    if (!prefill) return;
    if (prefill.spaceType) {
      setSpaceType(prefill.spaceType);
      setPropertyType('');
      setFrequency('');
      if (!prefill.service) {
        setSelectedServices([]);
      }
      setStep(prefill.service ? 3 : 2);
    }
    if (prefill.service) {
      setSelectedServices([prefill.service]);
    }
    if (prefill.cityOrZip) {
      setCityOrZip(prefill.cityOrZip);
    }
    setSubmitted(false);
    setErrors({});
  }, [prefill]);

  const handleSpaceSelect = (nextType: SpaceCategory) => {
    if (nextType !== spaceType) {
      setSpaceType(nextType);
      setSelectedServices([]);
      setPropertyType('');
      setFrequency('');
      setErrors({});
    }
  };

  const toggleService = (serviceId: string) => {
    setErrors((prev) => {
      const next = { ...prev };
      delete next.services;
      return next;
    });
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((item) => item !== serviceId)
        : [...prev, serviceId]
    );
  };

  const validateStep = (targetStep: number): boolean => {
    const nextErrors: Record<string, string> = {};

    if (targetStep === 2) {
      if (selectedServices.length === 0) {
        nextErrors.services = 'Please select at least one cleaning requirement to continue.';
      }
    }

    if (targetStep === 3) {
      if (!cityOrZip.trim()) {
        nextErrors.cityOrZip = 'Please enter your city or ZIP code in the OKC metro.';
      }
      if (!propertyType) {
        nextErrors.propertyType = 'Please select your property type.';
      }
      if (!frequency) {
        nextErrors.frequency = 'Please choose a desired cleaning frequency.';
      }
    }

    if (targetStep === 4) {
      if (!fullName.trim()) {
        nextErrors.fullName = 'Please enter your full name.';
      }
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
      if (!email.trim() || !emailValid) {
        nextErrors.email = 'Please enter a valid email address.';
      }
      const digits = phone.replace(/\D/g, '');
      if (digits.length < 10) {
        nextErrors.phone = 'Please enter a 10-digit phone number.';
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(4, prev + 1));
    }
  };

  const handleBack = () => {
    setErrors({});
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = () => {
    if (validateStep(4)) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setStep(1);
    setSelectedServices([]);
    setOtherCommercialDetails('');
    setCityOrZip('');
    setPropertyType('');
    setApproxSize('');
    setFrequency('');
    setPreferredSchedule('');
    setFullName('');
    setEmail('');
    setPhone('');
    setPreferredContact('Phone');
    setAdditionalInfo('');
    setErrors({});
    setSubmitted(false);
  };

  const requirements =
    spaceType === 'residential'
      ? RESIDENTIAL_REQUIREMENTS
      : COMMERCIAL_REQUIREMENTS;

  const propertyTypes =
    spaceType === 'residential'
      ? RESIDENTIAL_PROPERTY_TYPES
      : COMMERCIAL_PROPERTY_TYPES;

  const frequencies =
    spaceType === 'residential'
      ? RESIDENTIAL_FREQUENCIES
      : COMMERCIAL_FREQUENCIES;

  const stepLabels = [
    'Type of Space',
    'Cleaning Needs',
    'Property Details',
    'Contact Info',
  ];

  return (
    <section
      id="free-quote"
      className="py-16 lg:py-24 bg-[#FAFCFB] border-b border-[#DCEBE8]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 space-y-3">
          <p className="text-xs font-semibold tracking-wide text-[#23A9A1]">
            Segmented Free Quote Experience
          </p>
          <h2
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#123F46]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Request a Free Cleaning Quote
          </h2>
          <p className="text-base text-[#243338]/80 leading-relaxed max-w-2xl">
            Residential and commercial spaces follow distinct steps so you only answer questions relevant to your property.
          </p>
        </div>

        {/* Honest Demonstration Notice */}
        <div
          role="note"
          className="mb-8 rounded-xl bg-[#E5F5F2]/80 border border-[#23A9A1]/30 p-4 flex items-start gap-3 text-sm text-[#123F46]"
        >
          <Info className="w-5 h-5 text-[#23A9A1] shrink-0 mt-0.5" aria-hidden="true" />
          <div className="space-y-1">
            <p className="font-semibold">
              Interactive Quote Demonstration
            </p>
            <p className="text-[#243338]/85 text-xs sm:text-sm leading-relaxed">
              This multi-step form demonstrates the redesigned quote flow for Beyond Cleaning and does not transmit a live request to the company. To request an actual cleaning quote, call{' '}
              <a
                href={BUSINESS_INFO.phoneHref}
                className="font-semibold underline decoration-[#23A9A1]"
              >
                {BUSINESS_INFO.phoneDisplay}
              </a>{' '}
              or email{' '}
              <a
                href={BUSINESS_INFO.emailHref}
                className="font-semibold underline decoration-[#23A9A1]"
              >
                {BUSINESS_INFO.email}
              </a>
              .
            </p>
          </div>
        </div>

        {/* Main Quote Card */}
        <div className="rounded-2xl bg-white border border-[#DCEBE8] p-6 sm:p-10 shadow-sm">
          {!submitted ? (
            <>
              {/* Concise Progress Indicator */}
              <div className="mb-8 pb-6 border-b border-[#DCEBE8]">
                <div className="flex items-center justify-between text-xs font-medium text-[#243338]/75 mb-3">
                  <span
                    className="font-semibold text-[#123F46] tabular-nums"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    Step {step} of 4
                  </span>
                  <span>
                    {spaceType === 'residential' ? 'Residential Pathway' : 'Commercial Pathway'}
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {stepLabels.map((label, idx) => {
                    const stepNum = idx + 1;
                    const isCurrent = step === stepNum;
                    const isCompleted = step > stepNum;
                    return (
                      <button
                        key={label}
                        type="button"
                        disabled={stepNum > step}
                        onClick={() => {
                          if (stepNum < step) {
                            setErrors({});
                            setStep(stepNum);
                          }
                        }}
                        className={`text-left group ${
                          stepNum < step ? 'cursor-pointer' : 'cursor-default'
                        }`}
                      >
                        <div
                          className={`h-1.5 rounded-full transition-colors ${
                            isCurrent
                              ? 'bg-[#123F46]'
                              : isCompleted
                              ? 'bg-[#23A9A1]'
                              : 'bg-[#E5F5F2]'
                          }`}
                        />
                        <span
                          className={`mt-2 block text-[11px] sm:text-xs truncate ${
                            isCurrent
                              ? 'font-semibold text-[#123F46]'
                              : isCompleted
                              ? 'font-medium text-[#23A9A1]'
                              : 'text-[#243338]/55'
                          }`}
                        >
                          {stepNum}. {label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* STEP 1: Space Type */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-[#123F46]">
                      Step 1 — Select the type of space
                    </h3>
                    <p className="mt-1 text-sm text-[#243338]/75">
                      Choose whether this quote is for a home or a commercial facility.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => handleSpaceSelect('residential')}
                      className={`text-left rounded-xl p-6 border transition-all cursor-pointer ${
                        spaceType === 'residential'
                          ? 'bg-[#E5F5F2]/75 border-[#123F46] ring-1 ring-[#123F46]'
                          : 'bg-[#FAFCFB] border-[#DCEBE8] hover:border-[#23A9A1]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <Home
                          className="w-6 h-6 text-[#23A9A1]"
                          aria-hidden="true"
                        />
                        {spaceType === 'residential' && (
                          <CheckCircle2
                            className="w-5 h-5 text-[#123F46]"
                            aria-hidden="true"
                          />
                        )}
                      </div>
                      <p className="text-lg font-semibold text-[#123F46]">
                        Residential
                      </p>
                      <p className="mt-1 text-sm text-[#243338]/80">
                        Houses, apartments, townhomes, and move-in/move-out cleanings.
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSpaceSelect('commercial')}
                      className={`text-left rounded-xl p-6 border transition-all cursor-pointer ${
                        spaceType === 'commercial'
                          ? 'bg-[#E5F5F2]/75 border-[#123F46] ring-1 ring-[#123F46]'
                          : 'bg-[#FAFCFB] border-[#DCEBE8] hover:border-[#23A9A1]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <Building2
                          className="w-6 h-6 text-[#23A9A1]"
                          aria-hidden="true"
                        />
                        {spaceType === 'commercial' && (
                          <CheckCircle2
                            className="w-5 h-5 text-[#123F46]"
                            aria-hidden="true"
                          />
                        )}
                      </div>
                      <p className="text-lg font-semibold text-[#123F46]">
                        Commercial
                      </p>
                      <p className="mt-1 text-sm text-[#243338]/80">
                        Offices, commercial janitorial spaces, and disinfecting services.
                      </p>
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Cleaning Requirements */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-[#123F46]">
                      Step 2 —{' '}
                      {spaceType === 'residential'
                        ? 'Residential cleaning requirements'
                        : 'Commercial cleaning requirements'}
                    </h3>
                    <p className="mt-1 text-sm text-[#243338]/75">
                      Select one or more services that fit your space.{' '}
                      <span className="font-medium text-[#123F46]">* Required</span>
                    </p>
                  </div>

                  <div className="space-y-3">
                    {requirements.map((req) => {
                      const isSelected = selectedServices.includes(req.id);
                      return (
                        <button
                          key={req.id}
                          type="button"
                          onClick={() => toggleService(req.id)}
                          aria-pressed={isSelected}
                          className={`w-full text-left rounded-xl p-4 border flex items-start gap-3.5 transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-[#E5F5F2]/70 border-[#123F46]'
                              : 'bg-[#FAFCFB] border-[#DCEBE8] hover:border-[#23A9A1]'
                          }`}
                        >
                          <span
                            className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center border shrink-0 ${
                              isSelected
                                ? 'bg-[#123F46] border-[#123F46] text-white'
                                : 'bg-white border-[#243338]/30'
                            }`}
                            aria-hidden="true"
                          >
                            {isSelected && <Check className="w-3.5 h-3.5" />}
                          </span>
                          <div>
                            <p className="text-sm sm:text-base font-semibold text-[#123F46]">
                              {req.label}
                            </p>
                            <p className="text-xs sm:text-sm text-[#243338]/75 mt-0.5">
                              {req.desc}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {spaceType === 'commercial' &&
                    selectedServices.includes('Other commercial cleaning requirements') && (
                      <div className="space-y-1.5">
                        <label
                          htmlFor="other-commercial-details"
                          className="block text-sm font-medium text-[#123F46]"
                        >
                          Describe your commercial requirement{' '}
                          <span className="text-xs text-[#243338]/60">(Optional)</span>
                        </label>
                        <input
                          id="other-commercial-details"
                          type="text"
                          value={otherCommercialDetails}
                          onChange={(e) => setOtherCommercialDetails(e.target.value)}
                          placeholder="e.g., breakroom deep clean, glass entryways, multi-floor suite"
                          className="w-full px-3.5 py-2.5 text-sm bg-[#FAFCFB] border border-[#DCEBE8] rounded-lg focus:outline-none focus:border-[#23A9A1]"
                        />
                      </div>
                    )}

                  {errors.services && (
                    <p
                      role="alert"
                      className="flex items-center gap-2 text-sm text-red-700 font-medium"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>{errors.services}</span>
                    </p>
                  )}
                </div>
              )}

              {/* STEP 3: Property Information */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-[#123F46]">
                      Step 3 — Property information
                    </h3>
                    <p className="mt-1 text-sm text-[#243338]/75">
                      Share your location and space details so coverage and scope can be reviewed accurately.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="quote-city-zip"
                        className="block text-sm font-semibold text-[#123F46]"
                      >
                        City or ZIP code <span className="text-[#23A9A1]">*</span>
                      </label>
                      <input
                        id="quote-city-zip"
                        type="text"
                        value={cityOrZip}
                        onChange={(e) => {
                          setCityOrZip(e.target.value);
                          setErrors((prev) => ({ ...prev, cityOrZip: '' }));
                        }}
                        placeholder="e.g., Edmond or 73118"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FAFCFB] border border-[#DCEBE8] rounded-lg focus:outline-none focus:border-[#23A9A1]"
                      />
                      {errors.cityOrZip && (
                        <p className="text-xs text-red-700 font-medium">
                          {errors.cityOrZip}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="quote-property-type"
                        className="block text-sm font-semibold text-[#123F46]"
                      >
                        Property type <span className="text-[#23A9A1]">*</span>
                      </label>
                      <select
                        id="quote-property-type"
                        value={propertyType}
                        onChange={(e) => {
                          setPropertyType(e.target.value);
                          setErrors((prev) => ({ ...prev, propertyType: '' }));
                        }}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FAFCFB] border border-[#DCEBE8] rounded-lg focus:outline-none focus:border-[#23A9A1]"
                      >
                        <option value="">Select property type</option>
                        {propertyTypes.map((pt) => (
                          <option key={pt} value={pt}>
                            {pt}
                          </option>
                        ))}
                      </select>
                      {errors.propertyType && (
                        <p className="text-xs text-red-700 font-medium">
                          {errors.propertyType}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="quote-frequency"
                        className="block text-sm font-semibold text-[#123F46]"
                      >
                        Desired cleaning frequency{' '}
                        <span className="text-[#23A9A1]">*</span>
                      </label>
                      <select
                        id="quote-frequency"
                        value={frequency}
                        onChange={(e) => {
                          setFrequency(e.target.value);
                          setErrors((prev) => ({ ...prev, frequency: '' }));
                        }}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FAFCFB] border border-[#DCEBE8] rounded-lg focus:outline-none focus:border-[#23A9A1]"
                      >
                        <option value="">Select cleaning frequency</option>
                        {frequencies.map((freq) => (
                          <option key={freq} value={freq}>
                            {freq}
                          </option>
                        ))}
                      </select>
                      {errors.frequency && (
                        <p className="text-xs text-red-700 font-medium">
                          {errors.frequency}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="quote-size"
                        className="block text-sm font-semibold text-[#123F46]"
                      >
                        Approximate size{' '}
                        <span className="text-xs font-normal text-[#243338]/65">
                          (Optional)
                        </span>
                      </label>
                      <input
                        id="quote-size"
                        type="text"
                        value={approxSize}
                        onChange={(e) => setApproxSize(e.target.value)}
                        placeholder={
                          spaceType === 'residential'
                            ? 'e.g., 3 bed / 2 bath or 2,100 sq ft'
                            : 'e.g., 4,500 sq ft or 12 offices'
                        }
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FAFCFB] border border-[#DCEBE8] rounded-lg focus:outline-none focus:border-[#23A9A1]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="quote-schedule"
                      className="block text-sm font-semibold text-[#123F46]"
                    >
                      Preferred schedule or timing{' '}
                      <span className="text-xs font-normal text-[#243338]/65">
                        (Optional)
                      </span>
                    </label>
                    <input
                      id="quote-schedule"
                      type="text"
                      value={preferredSchedule}
                      onChange={(e) => setPreferredSchedule(e.target.value)}
                      placeholder={
                        spaceType === 'residential'
                          ? 'e.g., Weekday mornings or upcoming Friday'
                          : 'e.g., Evenings after 6 PM or weekend access'
                      }
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAFCFB] border border-[#DCEBE8] rounded-lg focus:outline-none focus:border-[#23A9A1]"
                    />
                  </div>
                </div>
              )}

              {/* STEP 4: Contact Information */}
              {step === 4 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-[#123F46]">
                      Step 4 — Contact information
                    </h3>
                    <p className="mt-1 text-sm text-[#243338]/75">
                      Provide your details to complete the quote preview. Fields marked with{' '}
                      <span className="text-[#23A9A1] font-semibold">*</span> are required.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="quote-name"
                        className="block text-sm font-semibold text-[#123F46]"
                      >
                        Full name <span className="text-[#23A9A1]">*</span>
                      </label>
                      <input
                        id="quote-name"
                        type="text"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          setErrors((prev) => ({ ...prev, fullName: '' }));
                        }}
                        placeholder="Your full name"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FAFCFB] border border-[#DCEBE8] rounded-lg focus:outline-none focus:border-[#23A9A1]"
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-700 font-medium">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="quote-email"
                        className="block text-sm font-semibold text-[#123F46]"
                      >
                        Email address <span className="text-[#23A9A1]">*</span>
                      </label>
                      <input
                        id="quote-email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setErrors((prev) => ({ ...prev, email: '' }));
                        }}
                        placeholder="you@example.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FAFCFB] border border-[#DCEBE8] rounded-lg focus:outline-none focus:border-[#23A9A1]"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-700 font-medium">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="quote-phone"
                        className="block text-sm font-semibold text-[#123F46]"
                      >
                        Phone number <span className="text-[#23A9A1]">*</span>
                      </label>
                      <input
                        id="quote-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          setErrors((prev) => ({ ...prev, phone: '' }));
                        }}
                        placeholder="(405) 555-0148"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FAFCFB] border border-[#DCEBE8] rounded-lg focus:outline-none focus:border-[#23A9A1]"
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-700 font-medium">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <span className="block text-sm font-semibold text-[#123F46]">
                        Preferred contact method <span className="text-[#23A9A1]">*</span>
                      </span>
                      <div className="grid grid-cols-3 gap-2 pt-0.5">
                        {(['Phone', 'Email', 'Either'] as const).map((method) => (
                          <button
                            key={method}
                            type="button"
                            onClick={() => setPreferredContact(method)}
                            className={`py-2.5 px-3 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
                              preferredContact === method
                                ? 'bg-[#123F46] text-white border-[#123F46]'
                                : 'bg-[#FAFCFB] text-[#243338] border-[#DCEBE8] hover:border-[#23A9A1]'
                            }`}
                          >
                            {method}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="quote-notes"
                      className="block text-sm font-semibold text-[#123F46]"
                    >
                      Additional information{' '}
                      <span className="text-xs font-normal text-[#243338]/65">
                        (Optional)
                      </span>
                    </label>
                    <textarea
                      id="quote-notes"
                      rows={3}
                      value={additionalInfo}
                      onChange={(e) => setAdditionalInfo(e.target.value)}
                      placeholder="Share focus areas, access notes, or questions for the team..."
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAFCFB] border border-[#DCEBE8] rounded-lg focus:outline-none focus:border-[#23A9A1]"
                    />
                  </div>

                  {/* Transparent What Happens Next Note */}
                  <div className="rounded-xl bg-[#FAFCFB] border border-[#DCEBE8] p-4 text-xs sm:text-sm text-[#243338]/85 space-y-1">
                    <p className="font-semibold text-[#123F46]">
                      What happens after a live quote request is submitted:
                    </p>
                    <p>
                      Beyond Cleaning reviews your space details, confirms service-area eligibility, and follows up directly to discuss scope and estimate options. {BUSINESS_INFO.quoteTurnaroundNote} Submitting a quote form does not automatically confirm an appointment.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="mt-8 pt-6 border-t border-[#DCEBE8] flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-3">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#123F46] bg-[#E5F5F2] hover:bg-[#D5EDE8] rounded-lg transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                    <span>Previous Step</span>
                  </button>
                ) : (
                  <div />
                )}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#123F46] hover:bg-[#19535C] rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#123F46] hover:bg-[#19535C] rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Request My Free Cleaning Quote</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                )}
              </div>
            </>
          ) : (
            /* Honest Demonstration Confirmation View */
            <div className="space-y-6">
              <div className="flex items-start gap-3.5">
                <CheckCircle2
                  className="w-6 h-6 text-[#23A9A1] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div className="space-y-1.5">
                  <h3
                    className="text-2xl font-semibold text-[#123F46]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Quote Summary Prepared (Demonstration Only)
                  </h3>
                  <p className="text-sm text-[#243338]/85 leading-relaxed">
                    Because no live backend is connected in this redesign concept, this summary was <strong>not</strong> sent to Beyond Cleaning. To submit a real quote inquiry, please contact Beyond Cleaning directly by phone or email below.
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-[#FAFCFB] border border-[#DCEBE8] p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-xs text-[#243338]/65">Space Type</p>
                  <p className="font-semibold text-[#123F46] capitalize">
                    {spaceType}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#243338]/65">Selected Services</p>
                  <p className="font-semibold text-[#123F46]">
                    {selectedServices.join(', ')}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#243338]/65">City or ZIP Code</p>
                  <p className="font-semibold text-[#123F46]">{cityOrZip}</p>
                </div>
                <div>
                  <p className="text-xs text-[#243338]/65">
                    Property &amp; Frequency
                  </p>
                  <p className="font-semibold text-[#123F46]">
                    {propertyType} · {frequency}
                  </p>
                </div>
                {approxSize && (
                  <div>
                    <p className="text-xs text-[#243338]/65">Approximate Size</p>
                    <p className="font-semibold text-[#123F46]">{approxSize}</p>
                  </div>
                )}
                {preferredSchedule && (
                  <div>
                    <p className="text-xs text-[#243338]/65">Preferred Schedule</p>
                    <p className="font-semibold text-[#123F46]">
                      {preferredSchedule}
                    </p>
                  </div>
                )}
                <div>
                  <p className="text-xs text-[#243338]/65">Contact Details</p>
                  <p className="font-semibold text-[#123F46]">
                    {fullName} · {email} · {phone} ({preferredContact})
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#123F46] hover:bg-[#19535C] rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span className="tabular-nums">Call {BUSINESS_INFO.phoneDisplay}</span>
                </a>
                <a
                  href={BUSINESS_INFO.emailHref}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#123F46] bg-[#E5F5F2] hover:bg-[#D5EDE8] rounded-lg transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#23A9A1]" aria-hidden="true" />
                  <span>Email {BUSINESS_INFO.email}</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-[#243338] hover:text-[#123F46] cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" aria-hidden="true" />
                  <span>Start another quote preview</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
