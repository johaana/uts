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
  coordinates: { x: number, y: number }; // Relative percentage for the "Constellation"
}

export const DIWALI_NUANCE: GHIEvent[] = [
  {
    id: 'dw-in',
    name: "Diwali",
    country: "India",
    countryCode: "IN",
    date: "Oct 29, 2026",
    status: "Public Holiday",
    nuance: "The North lights lamps for Rama's return; the South cleanses for Krishna's victory over Narakasura.",
    coordinates: { x: 72, y: 45 }
  },
  {
    id: 'dw-np',
    name: "Tihar",
    country: "Nepal",
    countryCode: "NP",
    date: "Oct 29, 2026",
    status: "National Holiday",
    nuance: "A five-day celebration where crows, dogs, and cows are garlanded before the lamps are lit.",
    coordinates: { x: 75, y: 40 }
  },
  {
    id: 'dw-sg',
    name: "Deepavali",
    country: "Singapore",
    countryCode: "SG",
    date: "Oct 29, 2026",
    status: "Public Holiday",
    nuance: "Centred in Little India, characterized by massive street-light installations and open-air bazaars.",
    coordinates: { x: 80, y: 55 }
  }
];

export const TODAY_RECORDS = [
  {
    name: "Ganesh Chaturthi",
    place: "India · MH",
    type: "Religious",
    status: "LIVE",
    coords: "19.0760° N, 72.8777° E"
  },
  {
    name: "Labor Day",
    place: "USA",
    type: "Public",
    status: "LIVE",
    coords: "38.9072° N, 77.0369° W"
  },
  {
    name: "Respect for the Aged",
    place: "Japan",
    type: "Cultural",
    status: "NEXT",
    coords: "35.6762° N, 139.6503° E"
  }
];

export const LONG_WEEKENDS_CINEMA = [
  {
    title: "Diwali 2026",
    dates: "OCT 29 – NOV 01",
    label: "4 DAY BRIDGE",
    logic: "Take Friday off for a full golden autumn escape."
  },
  {
    title: "Holi 2026",
    dates: "MAR 04 – MAR 08",
    label: "5 DAY ESCAPE",
    logic: "A mid-week celebration creates a massive planning opportunity."
  }
];
