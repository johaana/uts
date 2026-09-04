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
  isLiveToday?: boolean;
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
    id: 'ganesh-in',
    name: 'Ganesh Chaturthi',
    location: { country: 'India', scope: 'Regional' },
    date: { observed: '05 SEP 2026', model: 'Lunisolar', certainty: 'Confirmed' },
    classification: ['Public Holiday', 'Religious', 'Cultural'],
    whyItMatters: 'Celebrates the birth of Lord Ganesha. Symbolizes wisdom, prosperity, and the removal of obstacles.',
    regionalContext: 'Significant public processions in Maharashtra and Karnataka. Partial commercial closures in urban centers.',
    source: 'Authoritative Reference',
    status: 'Verified',
    isLiveToday: true,
    dna: { religious: true, cultural: true, public: true, bank: true, workingDayImpact: 'Full Closure' }
  },
  {
    id: 'respect-jp',
    name: 'Respect for the Aged Day',
    location: { country: 'Japan', scope: 'National' },
    date: { observed: '21 SEP 2026', model: 'Fixed', certainty: 'Confirmed' },
    classification: ['Public Holiday', 'Cultural'],
    whyItMatters: 'A national holiday to honor elderly citizens and pray for their longevity.',
    regionalContext: 'Observed nationwide. Banking and government systems offline.',
    source: 'National Schedule',
    status: 'Verified',
    isLiveToday: true,
    dna: { religious: false, cultural: true, public: true, bank: true, workingDayImpact: 'Full Closure' }
  },
  {
    id: 'labor-us',
    name: 'Labor Day',
    location: { country: 'USA', scope: 'Federal' },
    date: { observed: '07 SEP 2026', model: 'Calculated', certainty: 'Declared' },
    classification: ['Public Holiday', 'Cultural'],
    whyItMatters: 'Honors the American labor movement and the contributions that workers have made.',
    regionalContext: 'Federal holiday; widespread retail and corporate closures.',
    source: 'Federal Schedule',
    status: 'Verified',
    isLiveToday: false,
    dna: { religious: false, cultural: true, public: true, bank: true, workingDayImpact: 'Full Closure' }
  },
  {
    id: 'diwali-in',
    name: 'Diwali',
    location: { country: 'India', scope: 'National' },
    date: { observed: '08 NOV 2026', model: 'Lunisolar', certainty: 'Confirmed' },
    classification: ['Public Holiday', 'Religious', 'Cultural'],
    whyItMatters: 'The Festival of Lights, symbolizing the spiritual victory of light over darkness and knowledge over ignorance.',
    regionalContext: 'Date variations apply in South India. Major market closures nationwide.',
    source: 'Authoritative Reference',
    status: 'Verified',
    dna: { religious: true, cultural: true, public: true, bank: true, workingDayImpact: 'Full Closure' }
  },
  {
    id: 'lunar-new-year-cn',
    name: 'Lunar New Year',
    location: { country: 'China', scope: 'National' },
    date: { observed: '17 FEB 2026', model: 'Lunisolar', certainty: 'Confirmed' },
    classification: ['Public Holiday', 'Cultural'],
    whyItMatters: 'The most important traditional festival in China, marking the turn of the traditional Chinese calendar.',
    regionalContext: 'Extended factory and shipping closures for 7-10 days.',
    source: 'Lunisolar Calculation',
    status: 'Verified',
    dna: { religious: false, cultural: true, public: true, bank: true, workingDayImpact: 'Full Closure' }
  }
];
