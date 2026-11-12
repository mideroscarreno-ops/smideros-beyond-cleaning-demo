import type {
  CountyCoverage,
  FaqItem,
  ServiceItem,
  TestimonialItem,
} from '../types';

export const BUSINESS_INFO = {
  name: 'Beyond Cleaning',
  associatedName: 'Beyond Janitorial',
  tagline: 'Beyond Clean. Beyond Expectations.',
  location: 'Oklahoma City, Oklahoma',
  phoneDisplay: '(405) 653-9378',
  phoneHref: 'tel:+14056539378',
  email: 'info@beyondjanitorial.com',
  emailHref: 'mailto:info@beyondjanitorial.com',
  addressLine1: '5500 North Western Avenue, Suite 153',
  addressLine2: 'Oklahoma City, OK 73118',
  founded: 'April 2020',
  quoteTurnaroundNote:
    'Estimates are typically returned within one business day after reviewing your space details.',
};

export const MEDIA_ASSETS = {
  heroResidential: {
    src: '/images/hero-residential-home.webp',
    alt: 'Sunlit modern Oklahoma City living room and open kitchen with clean oak floors and stone island',
    label: 'Residential Living & Kitchen',
    width: 1200,
    height: 896,
  },
  heroCommercial: {
    src: '/images/hero-commercial-office.webp',
    alt: 'Spotless contemporary commercial office suite and glass conference room in daylight',
    label: 'Commercial Office & Conference',
    width: 1200,
    height: 896,
  },
  residentialDetail: {
    src: '/images/residential-kitchen-detail.webp',
    alt: 'Freshly cleaned residential kitchen with bright quartz countertops and warm natural light',
    label: 'Detailed Kitchen Care',
    width: 1376,
    height: 768,
  },
  commercialDetail: {
    src: '/images/commercial-workspace-detail.webp',
    alt: 'Clean modern office reception desk, acoustic wood paneling, and glass office partitions',
    label: 'Workplace Standards',
    width: 1376,
    height: 768,
  },
  storyArchitecture: {
    src: '/images/okc-architectural-story.webp',
    alt: 'Bright modern architectural hallway and glass-partitioned studio entryway in Oklahoma City',
    label: 'Oklahoma City Roots',
    width: 1200,
    height: 896,
  },
};

export const RESIDENTIAL_SERVICES: ServiceItem[] = [
  {
    id: 'house-standard-cleaning',
    number: '01',
    category: 'residential',
    title: 'Standard House Cleaning',
    summary:
      'Consistent, thorough upkeep for kitchens, bathrooms, bedrooms, and living areas so your home feels calm and ready to enjoy.',
    highlights: [
      'Kitchen countertops, sinks, and exterior appliance surfaces',
      'Bathrooms, vanities, mirrors, showers, and fixtures',
      'Dusting, vacuuming, and mopping across living areas and bedrooms',
    ],
    bestFor: 'Maintaining an already well-kept home on a comfortable routine.',
  },
  {
    id: 'recurring-cleaning',
    number: '02',
    category: 'residential',
    title: 'Recurring Cleaning',
    summary:
      'Scheduled home cleaning tailored to your household rhythm—whether weekly, bi-weekly, or monthly—with dependable care each visit.',
    highlights: [
      'Flexible recurring cadences aligned to your schedule',
      'Consistent attention to high-traffic rooms and surfaces',
      'Simple adjustments when household needs change',
    ],
    bestFor: 'Busy households that want lasting order without weekend chores.',
  },
  {
    id: 'deep-cleaning',
    number: '03',
    category: 'residential',
    title: 'Deep Cleaning',
    summary:
      'A detailed, top-to-bottom reset targeting buildup in baseboards, trim, kitchen surfaces, bathroom tile, and hard-to-reach corners.',
    highlights: [
      'Detailed scrubbing of kitchen and bath buildup',
      'Baseboards, window sills, doors, and trim detailing',
      'Ideal first visit before starting a recurring schedule',
    ],
    bestFor: 'First-time cleanings, seasonal refreshes, or homes needing extra care.',
  },
  {
    id: 'move-in-cleaning',
    number: '04',
    category: 'residential',
    title: 'Move-In Cleaning',
    summary:
      'Prepare a newly purchased or leased home before boxes arrive, ensuring cabinets, floors, baths, and kitchens start fresh.',
    highlights: [
      'Empty-home sanitization of kitchen and bathroom surfaces',
      'Interior cabinet and drawer wipe-downs upon request',
      'Floor care across bedrooms, hallways, and living spaces',
    ],
    bestFor: 'Homeowners and tenants stepping into a clean slate on move-in day.',
  },
  {
    id: 'move-out-cleaning',
    number: '05',
    category: 'residential',
    title: 'Move-Out Cleaning',
    summary:
      'Complete turnover cleaning for departing tenants, homeowners preparing to list, and out-of-state rental owners.',
    highlights: [
      'Comprehensive surface reset after furniture is cleared',
      'Kitchen, bath, and fixture detailing for walkthrough readiness',
      'Dependable communication for landlords and property transitions',
    ],
    bestFor: 'Renters, sellers, and property owners preparing a space for its next occupant.',
  },
];

export const COMMERCIAL_SERVICES: ServiceItem[] = [
  {
    id: 'office-cleaning',
    number: '01',
    category: 'commercial',
    title: 'Office Cleaning',
    summary:
      'Dependable care for workstations, conference rooms, breakrooms, and client lobbies so your workplace reflects your standards.',
    highlights: [
      'Workstations, desks, conference tables, and glass partitions',
      'Restroom sanitization, breakroom upkeep, and trash removal',
      'Daytime or after-hours scheduling tailored to office hours',
    ],
    bestFor: 'Professional offices, studios, and multi-suite workplaces across OKC.',
  },
  {
    id: 'commercial-janitorial',
    number: '02',
    category: 'commercial',
    title: 'Commercial Janitorial',
    summary:
      'Ongoing commercial maintenance built around facility traffic, floor care, common areas, and reliable recurring schedules.',
    highlights: [
      'Recurring floor sweeping, mopping, and vacuuming',
      'High-traffic lobby, corridor, and shared amenity upkeep',
      'Custom checklists matched to facility size and layout',
    ],
    bestFor: 'Commercial properties seeking a responsive local partner rather than a national call center.',
  },
  {
    id: 'disinfecting-services',
    number: '03',
    category: 'commercial',
    title: 'Disinfecting Services',
    summary:
      'Targeted surface disinfecting rooted in the company’s April 2020 founding focus—helping workplaces maintain healthier shared environments.',
    highlights: [
      'Focused treatment of high-touch handles, switches, and shared surfaces',
      'Responsive scheduling for urgent commercial turnaround situations',
      'Practical protocols designed around active business operations',
    ],
    bestFor: 'Offices and commercial spaces prioritizing high-touch hygiene or urgent recovery.',
  },
];

export const TRUST_COMMITMENTS = [
  {
    id: 'vetted-team',
    title: 'Background-Checked, Bonded & Insured',
    description:
      'Every team member is background-checked, bonded, and insured—giving homeowners and facility managers peace of mind when welcoming Beyond Cleaning into their space.',
  },
  {
    id: 'satisfaction',
    title: 'Satisfaction Commitment',
    description:
      'We clean it right — or we come back and fix it. If any area of a completed cleaning falls short of expectations, let the team know promptly so it can be made right.',
  },
  {
    id: 'local-okc',
    title: 'Locally Owned in Oklahoma City',
    description:
      'Operating from North Western Avenue in Oklahoma City since April 2020, serving neighbors and local businesses directly across the metro.',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Tell Us About Your Space',
    description:
      'Choose residential or commercial cleaning and share your space type, service needs, and location in the Oklahoma City metro.',
  },
  {
    step: '02',
    title: 'Discuss Your Cleaning Plan',
    description:
      'Review your preferred services, frequency, and scheduling goals directly with the team to confirm scope and coverage.',
  },
  {
    step: '03',
    title: 'Enjoy a Cleaner Environment',
    description:
      'Finalize your cleaning arrangement with Beyond Cleaning—backed by insured, background-checked professionals and a satisfaction commitment.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'shelby-k',
    author: 'Shelby K.',
    context: 'Residential Deep Clean · Oklahoma City Area',
    category: 'residential',
    quote:
      'The Beyond team wildly exceeded my expectations. I needed a deep clean of my apartment on short notice and they not only got me scheduled quickly, but were incredibly informative of their process and products. Not to mention, my apartment looked great afterwards. A great team, looking forward to working with them in the future.',
  },
  {
    id: 'matthew-p',
    author: 'Matthew P.',
    context: 'Commercial Office · 10,000+ Sq Ft Emergency Clean',
    category: 'commercial',
    quote:
      'We had an emergency situation at our offices that would have forced us to close for multiple days, after calling around to several companies and being turned away, I contacted Beyond and they had somebody out that night to clean over 10,000+ square feet of offices and help us get back up and running. Extremely professional, punctual and great pricing. Will use again in the future and would highly recommend to anybody.',
  },
  {
    id: 'clay-w',
    author: 'Clay W.',
    context: 'Residential Rental Property · Out-of-State Owner',
    category: 'residential',
    quote:
      'I purchased a home as a rental. I’m out of state and hired these guys to clean it. I got calls and texts from the tenant and the realtor on how great the house looked. They really took care of me and did an excellent job knowing I would never see it. I would definitely trust this company again.',
  },
];

export const SERVICE_AREAS: CountyCoverage[] = [
  {
    id: 'oklahoma-county',
    county: 'Oklahoma County',
    cities: ['Oklahoma City', 'Edmond', 'Nichols Hills', 'Bethany'],
    zipPrefixes: ['73102', '73103', '73104', '73105', '73106', '73107', '73112', '73114', '73116', '73118', '73120', '73132', '73142', '73003', '73012', '73013', '73025', '73034', '73008'],
    notes: 'Central, North, and Northwest metro residential neighborhoods and commercial districts.',
  },
  {
    id: 'cleveland-county',
    county: 'Cleveland County',
    cities: ['Norman', 'Moore', 'South Oklahoma City'],
    zipPrefixes: ['73019', '73026', '73069', '73071', '73072', '73160', '73165', '73170', '73159', '73139'],
    notes: 'South metro residential corridors, university-area homes, and commercial offices.',
  },
  {
    id: 'canadian-county',
    county: 'Canadian County',
    cities: ['Yukon', 'Mustang', 'El Reno'],
    zipPrefixes: ['73099', '73064', '73036'],
    notes: 'West metro homes, growing residential developments, and local commercial facilities.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'res-vs-comm',
    question: 'What is the difference between your residential and commercial services?',
    answer:
      'Residential services focus on lived-in and transitional homes—including standard house cleaning, recurring maintenance, deep cleaning, and move-in/move-out cleaning. Commercial services are designed for workplaces, offering office cleaning, ongoing commercial janitorial care, and disinfecting services structured around business operations.',
  },
  {
    id: 'standard-vs-deep',
    question: 'Should I request a standard cleaning or a deep cleaning first?',
    answer:
      'Standard cleaning keeps an already well-maintained home fresh across everyday surfaces, floors, kitchens, and bathrooms. Deep cleaning goes further into built-up areas such as baseboards, trim, detailed kitchen and bath scrubbing, and neglected corners—making it the best choice for a first visit or seasonal reset.',
  },
  {
    id: 'recurring-cleaning',
    question: 'How does recurring residential cleaning work?',
    answer:
      'After an initial discussion of your home size and priorities, recurring cleaning can be arranged on a schedule that fits your household—such as weekly, bi-weekly, or monthly visits. Details and frequency can be adjusted as your needs evolve.',
  },
  {
    id: 'move-in-out',
    question: 'What is included in move-in and move-out cleaning?',
    answer:
      'Move-in and move-out services focus on preparing empty or transitioning homes for new occupants or walkthroughs, covering kitchens, bathrooms, floors, fixtures, and requested interior details such as cabinets.',
  },
  {
    id: 'commercial-frequency',
    question: 'Can commercial cleaning be scheduled around business hours?',
    answer:
      'Yes. During your commercial quote consultation, you can specify your preferred cleaning frequency and whether work is best performed during daytime hours, evenings, or off-peak windows so your team and clients are undisturbed.',
  },
  {
    id: 'service-area-coverage',
    question: 'Which areas around Oklahoma City do you serve?',
    answer:
      'Beyond Cleaning focuses on three primary counties: Oklahoma County (including Oklahoma City, Edmond, Nichols Hills, and Bethany), Cleveland County (including Norman, Moore, and South Oklahoma City), and Canadian County (including Yukon, Mustang, and El Reno). Exact address coverage is always confirmed when your quote is reviewed.',
  },
  {
    id: 'how-quotes-work',
    question: 'How does the free quote process work?',
    answer:
      'Share whether you need residential or commercial cleaning, the services you are looking for, your city or ZIP code, and your contact preferences. Submitting an inquiry starts a conversation rather than booking an automatic appointment, and estimates are typically returned within one business day.',
  },
  {
    id: 'satisfaction-commitment',
    question: 'What happens if something is missed during a cleaning?',
    answer:
      'Beyond Cleaning stands behind its work with a satisfaction commitment: we clean it right, or we come back and fix it. Team members are also background-checked, bonded, and insured.',
  },
];
