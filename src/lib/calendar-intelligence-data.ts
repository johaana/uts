/**
 * @fileOverview Mock data for the Calendar Intelligence prototype.
 * This powers the interactive Search, World Pulse, and Intelligence Records.
 */

export interface IntelligenceRecordData {
  id: string;
  name: string;
  location: {
    country: string;
    region?: string;
    scope: 'National' | 'Regional' | 'Global' | 'Federal';
  };
  date: {
    observed: string;
    model: 'Lunisolar' | 'Lunar' | 'Fixed' | 'Declared' | 'Calculated';
    certainty: 'Confirmed' | 'Declared' | 'Provisional' | 'Estimated';
  };
  classification: string[];
  whyItMatters: string;
  regionalContext: string;
  source: string;
  status: 'Verified' | 'Illustrative';
  dna: {
    religious: boolean;
    cultural: boolean;
    public: boolean;
    bank: boolean;
    workingDayImpact: 'None' | 'Partial' | 'Full Closure';
  };
}

export const MOCK_RECORDS: IntelligenceRecordData[] = [
  {
    id: 'diwali-in',
    name: 'Diwali',
    location: { country: 'India', scope: 'National' },
    date: { observed: '08 NOV 2026', model: 'Lunisolar', certainty: 'Confirmed' },
    classification: ['Public Holiday', 'Religious', 'Cultural'],
    whyItMatters: 'The Festival of Lights, symbolizing the spiritual victory of light over darkness and knowledge over ignorance.',
    regionalContext: 'Date variations apply in South India (Naraka Chaturdashi). Commercial closures vary by state jurisdiction.',
    source: 'Authoritative Reference',
    status: 'Verified',
    dna: { religious: true, cultural: true, public: true, bank: true, workingDayImpact: 'Full Closure' }
  },
  {
    id: 'thanksgiving-us',
    name: 'Thanksgiving Day',
    location: { country: 'United States', scope: 'Federal' },
    date: { observed: '26 NOV 2026', model: 'Declared', certainty: 'Declared' },
    classification: ['Public Holiday', 'Cultural'],
    whyItMatters: 'A national holiday in the US and Canada celebrating the harvest and other blessings of the past year.',
    regionalContext: 'Observed on the fourth Thursday of November in the US. Often creates a 4-day weekend.',
    source: 'Federal Schedule',
    status: 'Verified',
    dna: { religious: false, cultural: true, public: true, bank: true, workingDayImpact: 'Full Closure' }
  },
  {
    id: 'lunar-new-year-cn',
    name: 'Lunar New Year',
    location: { country: 'China', scope: 'National' },
    date: { observed: '17 FEB 2026', model: 'Lunisolar', certainty: 'Confirmed' },
    classification: ['Public Holiday', 'Cultural'],
    whyItMatters: 'The most important traditional festival in China, marking the turn of the traditional lunisolar Chinese calendar.',
    regionalContext: 'Extended closures across Greater China. Operational impact is high for 7-10 days.',
    source: 'Lunisolar Calculation',
    status: 'Verified',
    dna: { religious: false, cultural: true, public: true, bank: true, workingDayImpact: 'Full Closure' }
  },
  {
    id: 'christmas-global',
    name: 'Christmas Day',
    location: { country: 'Global', scope: 'Global' },
    date: { observed: '25 DEC 2026', model: 'Fixed', certainty: 'Confirmed' },
    classification: ['Public Holiday', 'Religious', 'Cultural'],
    whyItMatters: 'An annual festival commemorating the birth of Jesus Christ, observed primarily on December 25 as a religious and cultural celebration.',
    regionalContext: 'Widespread public closures in most Western nations. Banking systems typically offline.',
    source: 'Gregorian Calendar',
    status: 'Verified',
    dna: { religious: true, cultural: true, public: true, bank: true, workingDayImpact: 'Full Closure' }
  },
  {
    id: 'eid-al-fitr-global',
    name: 'Eid al-Fitr',
    location: { country: 'Global', scope: 'Global' },
    date: { observed: '20 MAR 2026', model: 'Lunar', certainty: 'Provisional' },
    classification: ['Public Holiday', 'Religious'],
    whyItMatters: 'The "Festival of Breaking the Fast," marking the end of Ramadan, the Islamic holy month of fasting.',
    regionalContext: 'Exact date depends on moon sighting. Public holiday status varies by country.',
    source: 'Lunar Observation',
    status: 'Illustrative',
    dna: { religious: true, cultural: true, public: true, bank: true, workingDayImpact: 'Full Closure' }
  }
];
