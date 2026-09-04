/**
 * @fileOverview Temporary data layer for the Global Holiday Intelligence prototype.
 * Isolated from production Firestore to allow rapid UI/UX iteration.
 */

export interface GHIEvent {
  id: string;
  name: string;
  country: string;
  countryCode: string;
  category: string[];
  type: 'Public' | 'Religious' | 'Cultural' | 'Observance';
  date: string;
  status: 'Confirmed' | 'Declared' | 'Provisional' | 'Estimated';
  whyItMatters: string;
  regionalContext: string;
  model: 'Lunisolar' | 'Lunar' | 'Fixed' | 'Declared' | 'Calculated';
}

export const TODAY_CELEBRATIONS: GHIEvent[] = [
  {
    id: 'ganesh-in',
    name: 'Ganesh Chaturthi',
    country: 'India',
    countryCode: 'IN',
    category: ['Religious', 'Cultural'],
    type: 'Religious',
    date: '05 SEP 2026',
    status: 'Confirmed',
    whyItMatters: 'Celebrates the birth of Lord Ganesha, the god of wisdom and remover of obstacles.',
    regionalContext: 'Significant public processions in Maharashtra; state-specific closures apply.',
    model: 'Lunisolar'
  },
  {
    id: 'respect-jp',
    name: 'Respect for the Aged Day',
    country: 'Japan',
    countryCode: 'JP',
    category: ['Public Holiday'],
    type: 'Public',
    date: '21 SEP 2026',
    status: 'Confirmed',
    whyItMatters: 'A national holiday to honor elderly citizens and pray for their longevity.',
    regionalContext: 'Nationwide public holiday; banking and government closures.',
    model: 'Fixed'
  },
  {
    id: 'labor-us',
    name: 'Labor Day',
    country: 'USA',
    countryCode: 'US',
    category: ['Public Holiday'],
    type: 'Public',
    date: '07 SEP 2026',
    status: 'Declared',
    whyItMatters: 'Honors the American labor movement and the contributions that workers have made.',
    regionalContext: 'Federal holiday; widespread business closures.',
    model: 'Calculated'
  }
];

export const LONG_WEEKENDS_PREVIEW = [
  {
    id: 'diwali-26',
    name: 'Diwali',
    dates: '08–11 NOV 2026',
    duration: '4 DAYS',
    country: 'India',
    description: 'An extended break created by the holiday and adjacent weekend.'
  },
  {
    id: 'thanksgiving-26',
    name: 'Thanksgiving',
    dates: '26–29 NOV 2026',
    duration: '4 DAYS',
    country: 'USA',
    description: 'The standard four-day break for the American holiday.'
  }
];

export const FEATURED_RECORD: GHIEvent = {
  id: 'diwali-ghi',
  name: 'Diwali',
  country: 'India',
  countryCode: 'IN',
  category: ['Public Holiday', 'Religious', 'Cultural'],
  type: 'Public',
  date: '08 NOV 2026',
  status: 'Confirmed',
  whyItMatters: 'The Festival of Lights, symbolizing the spiritual victory of light over darkness and knowledge over ignorance.',
  regionalContext: 'Date variations apply in South India (Naraka Chaturdashi). Commercial closures vary by state jurisdiction.',
  model: 'Lunisolar'
};

export const STORY_PREVIEWS = [
  {
    title: 'Why Light Matters',
    desc: 'How Diwali became one of the world\'s most widely recognized festivals of light.',
    tag: 'SIGNIFICANCE'
  },
  {
    title: 'Regional Nuance',
    desc: 'Why the same holiday can have different dates and traditions across regions.',
    tag: 'TRADITIONS'
  }
];
