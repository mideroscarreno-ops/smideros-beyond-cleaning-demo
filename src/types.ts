export type PageRoute =
  | 'home'
  | 'residential'
  | 'commercial'
  | 'services'
  | 'story'
  | 'areas'
  | 'reviews'
  | 'quote'
  | 'contact';

export type SpaceCategory = 'residential' | 'commercial';

export interface ServiceItem {
  id: string;
  number: string;
  category: SpaceCategory;
  title: string;
  summary: string;
  highlights: string[];
  bestFor: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  context: string;
  category: SpaceCategory;
  quote: string;
}

export interface CountyCoverage {
  id: string;
  county: string;
  cities: string[];
  zipPrefixes: string[];
  notes: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface QuotePrefill {
  spaceType?: SpaceCategory;
  service?: string;
  cityOrZip?: string;
}
