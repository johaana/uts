/**
 * @fileOverview TEMPORARY PROTOTYPE DATA — replace with production intelligence layer later.
 * High-fidelity data points for the cinematic GHI prototype.
 */

export interface GHINuance {
  id: string;
  name: string;
  country: string;
  countryCode: string;
  date: string;
  status: string;
  nuance: string;
  type: string;
  impact: string;
}

export const DIWALI_NUANCE: GHINuance[] = [
  {
    id: 'dw-in',
    name: "Diwali",
    country: "India",
    countryCode: "IN",
    date: "29 OCT 2026",
    status: "Public Holiday",
    type: "Religious · Cultural",
    impact: "Total market closure. High logistics load.",
    nuance: "The North lights lamps for Rama's return; the South cleanses for Krishna's victory over Narakasura."
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
    nuance: "A five-day celebration where crows, dogs, and cows are garlanded before the lamps are lit."
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
    nuance: "Centred in Little India, characterized by massive street-light installations and open-air bazaars."
  }
];

export const CALENDAR_LOGIC_EXPLANATION = [
  {
    title: "Fixed Dates",
    desc: "Holidays like Christmas or Republic Day follow the Gregorian solar cycle, staying on the same date every year.",
    example: "Christmas · 25 Dec"
  },
  {
    title: "Lunar & Lunisolar",
    desc: "Festivals like Diwali, Holi, or Lunar New Year shift according to the moon's phases, requiring complex annual recalculation.",
    example: "Diwali · Shifts Yearly"
  },
  {
    title: "Government Declared",
    desc: "Some public holidays are set by official notification each year and do not follow a fixed mathematical rule.",
    example: "Bank Holidays · Varies"
  }
];
