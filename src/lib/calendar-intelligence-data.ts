/**
 * @fileOverview Refined data for the Global Holiday Intelligence prototype.
 * Includes a diverse set of global events to ensure "Today" logic feels alive.
 */

export interface GHIEvent {
  id: string;
  name: string;
  country: string;
  countryCode: string;
  scope: 'National' | 'Regional' | 'Local' | 'Global';
  date: string; // ISO format for logic
  day: number;
  month: number; // 0-11
  category: string[];
  type: 'Public' | 'Religious' | 'Cultural' | 'Observance';
  model: 'Lunisolar' | 'Lunar' | 'Fixed' | 'Declared';
  status: 'Confirmed' | 'Declared' | 'Provisional' | 'Estimated';
  whyItMatters: string;
  regionalContext: string;
  impact: string;
  image?: string;
  hint?: string;
}

export const GHI_RECORDS: GHIEvent[] = [
  {
    id: 'janmashtami-26',
    name: 'Janmashtami / Dahi Handi',
    country: 'India',
    countryCode: 'IN',
    scope: 'Regional',
    date: '2026-09-04',
    day: 4,
    month: 8,
    category: ['Religious', 'Public Holiday'],
    type: 'Religious',
    model: 'Lunisolar',
    status: 'Confirmed',
    whyItMatters: 'Celebrates the birth of Lord Krishna. Dahi Handi reenacts his childhood love for butter.',
    regionalContext: 'Primary impact in Maharashtra. Public processions and human pyramids (Dahi Handi) create major urban movement.',
    impact: 'Market closures in Mumbai and Pune. High traffic density.',
    image: 'https://i.postimg.cc/T3ccXCRv/dahi-handi.jpg',
    hint: 'dahi handi'
  },
  {
    id: 'ganesh-26',
    name: 'Ganesh Chaturthi',
    country: 'India',
    countryCode: 'IN',
    scope: 'Regional',
    date: '2026-09-15',
    day: 15,
    month: 8,
    category: ['Religious', 'Public Holiday'],
    type: 'Religious',
    model: 'Lunisolar',
    status: 'Confirmed',
    whyItMatters: 'Marks the birth of Lord Ganesha, the remover of obstacles.',
    regionalContext: 'Massive 10-day celebration in West India. Final immersion processions on Sep 25.',
    impact: 'Full office and bank closures in Maharashtra and Goa.',
    image: 'https://i.postimg.cc/SNGxJ8VJ/ganesh-chaturthi-festival.jpg',
    hint: 'ganesha idol'
  },
  {
    id: 'respect-jp-26',
    name: 'Respect for the Aged Day',
    country: 'Japan',
    countryCode: 'JP',
    scope: 'National',
    date: '2026-09-21',
    day: 21,
    month: 8,
    category: ['Public Holiday', 'Cultural'],
    type: 'Public',
    model: 'Fixed',
    status: 'Confirmed',
    whyItMatters: 'National holiday to honor elderly citizens.',
    regionalContext: 'Observed nationwide across all prefectures.',
    impact: 'Japan financial markets and banks closed.',
    image: 'https://picsum.photos/seed/jp-aged/1200/800',
    hint: 'japan culture'
  },
  {
    id: 'mid-autumn-26',
    name: 'Mid-Autumn Festival',
    country: 'China',
    countryCode: 'CN',
    scope: 'National',
    date: '2026-09-25',
    day: 25,
    month: 8,
    category: ['Cultural', 'Public Holiday'],
    type: 'Cultural',
    model: 'Lunisolar',
    status: 'Confirmed',
    whyItMatters: 'A major harvest festival celebrating family and reunions.',
    regionalContext: 'Massive logistics impact across East Asia.',
    impact: '3-day national holiday bridge.',
    image: 'https://i.postimg.cc/XJs7rMdt/Yi-Peng-Lantern-Festival-Thailand.webp',
    hint: 'mid autumn lanterns'
  },
  {
    id: 'diwali-in-26',
    name: 'Diwali (Lakshmi Puja)',
    country: 'India',
    countryCode: 'IN',
    scope: 'National',
    date: '2026-11-08',
    day: 8,
    month: 10,
    category: ['Religious', 'Public Holiday'],
    type: 'Public',
    model: 'Lunisolar',
    status: 'Confirmed',
    whyItMatters: 'The spiritual victory of light over darkness.',
    regionalContext: 'Major market closures across North and West India.',
    impact: 'Widespread commercial shutdown for 2-5 days.',
    image: 'https://i.postimg.cc/TYs5B2K4/lakshmi_puja.webp',
    hint: 'lakshmi ganesh puja'
  }
];
