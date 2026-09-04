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
  date: string; // ISO format for logic, or human readable
  day: number;
  month: number; // 0-11
  category: string[];
  type: 'Public' | 'Religious' | 'Cultural' | 'Observance';
  model: 'Lunisolar' | 'Lunar' | 'Fixed' | 'Declared';
  status: 'Confirmed' | 'Declared' | 'Provisional' | 'Estimated';
  whyItMatters: string;
  regionalContext: string;
  impact: string;
}

export const GHI_RECORDS: GHIEvent[] = [
  {
    id: 'ganesh-in',
    name: 'Ganesh Chaturthi',
    country: 'India',
    countryCode: 'IN',
    scope: 'Regional',
    date: '2026-09-05',
    day: 5,
    month: 8,
    category: ['Religious', 'Public Holiday'],
    type: 'Religious',
    model: 'Lunisolar',
    status: 'Confirmed',
    whyItMatters: 'Marks the birth of Lord Ganesha. Symbolizes wisdom, new beginnings, and the removal of obstacles.',
    regionalContext: 'Primary impact in Maharashtra and Karnataka. Public processions cause significant urban movement.',
    impact: 'Full office and bank closures in specific states.'
  },
  {
    id: 'respect-jp',
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
    whyItMatters: 'A day to honor elderly citizens and celebrate their longevity.',
    regionalContext: 'Observed nationwide. Government and financial institutions are offline.',
    impact: 'National bank holiday.'
  },
  {
    id: 'mid-autumn-cn',
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
    whyItMatters: 'A harvest festival celebrating family reunion, centered around moon worship and mooncakes.',
    regionalContext: 'Massive internal migration. Logistical hubs typically operate at 50% capacity.',
    impact: '3-day public holiday bridge.'
  },
  {
    id: 'diwali-in',
    name: 'Diwali',
    country: 'India',
    countryCode: 'IN',
    scope: 'National',
    date: '2026-11-08',
    day: 8,
    month: 10,
    category: ['Religious', 'Public Holiday', 'Cultural'],
    type: 'Public',
    model: 'Lunisolar',
    status: 'Confirmed',
    whyItMatters: 'The spiritual victory of light over darkness and knowledge over ignorance.',
    regionalContext: 'Date varies in South India (Naraka Chaturdashi). North India observes major market closures.',
    impact: 'Widespread commercial shutdown for 2-5 days.'
  },
  {
    id: 'thanksgiving-us',
    name: 'Thanksgiving',
    country: 'USA',
    countryCode: 'US',
    scope: 'National',
    date: '2026-11-26',
    day: 26,
    month: 10,
    category: ['Public Holiday', 'Cultural'],
    type: 'Public',
    model: 'Declared',
    status: 'Confirmed',
    whyItMatters: 'A national holiday dedicated to giving thanks for the harvest and the preceding year.',
    regionalContext: 'Federal closure. Creates a 4-day operational gap in North American markets.',
    impact: 'National retail and corporate closure.'
  }
];
