/**
 * @fileOverview TEMPORARY PROTOTYPE DATA — replace with production intelligence layer later.
 * High-fidelity data points for the cinematic GHI prototype.
 */

export interface GHIEvent {
  id: string;
  name: string;
  country: string;
  countryCode: string;
  date: string;
  status: string;
  nuance: string;
  type: string;
  impact: string;
  monthIndex: number;
}

export const DIWALI_NUANCE: GHIEvent[] = [
  {
    id: 'dw-in',
    name: "Diwali",
    country: "India",
    countryCode: "IN",
    date: "29 OCT 2026",
    status: "Public Holiday",
    type: "Religious · Cultural",
    impact: "Total market closure. High logistics load.",
    nuance: "The North lights lamps for Rama's return; the South cleanses for Krishna's victory over Narakasura.",
    monthIndex: 9
  },
  {
    id: 'dw-np',
    name: "Tihar",
    country: "Nepal",
    countryCode: "NP",
    date: "29 OCT 2026",
    status: "National Holiday",
    type: "Religious",
    impact: "Government offline for 5 days.",
    nuance: "A five-day celebration where crows, dogs, and cows are garlanded before the lamps are lit.",
    monthIndex: 9
  },
  {
    id: 'dw-sg',
    name: "Deepavali",
    country: "Singapore",
    countryCode: "SG",
    date: "29 OCT 2026",
    status: "Public Holiday",
    type: "Cultural",
    impact: "Regional bank holiday. Localised closures.",
    nuance: "Centred in Little India, characterized by massive street-light installations and open-air bazaars.",
    monthIndex: 9
  }
];

export const ESCAPE_DATA = {
  IN: [
    { title: "Diwali Bridge", dates: "OCT 29 – NOV 01", days: "4 DAYS", requirement: "1 Day Leave" },
    { title: "Holi Escape", dates: "MAR 04 – MAR 08", days: "5 DAYS", requirement: "2 Days Leave" },
  ],
  SG: [
    { title: "Lunar New Year", dates: "JAN 29 – FEB 01", days: "4 DAYS", requirement: "0 Days Leave" },
    { title: "National Day", dates: "AUG 07 – AUG 10", days: "4 DAYS", requirement: "1 Day Leave" },
  ],
  JP: [
    { title: "Golden Week", dates: "APR 29 – MAY 05", days: "7 DAYS", requirement: "2 Days Leave" },
    { title: "Obon Season", dates: "AUG 13 – AUG 16", days: "4 DAYS", requirement: "1 Day Leave" },
  ]
};

export const PULSE_FEED = [
  { region: "ASIA", active: true, label: "Ganesh Chaturthi", code: "IN" },
  { region: "EUROPE", active: false, label: "Oktoberfest Pre-prep", code: "DE" },
  { region: "AMERICAS", active: true, label: "Labor Day", code: "US" },
  { region: "OCEANIA", active: false, label: "Father's Day", code: "AU" },
];
