/**
 * @fileOverview TEMPORARY PROTOTYPE DATA — replace with production intelligence layer later.
 * This file contains the nuanced storytelling data for the Global Holiday Intelligence prototype.
 */

export interface CountryNuance {
  country: string;
  date: string;
  status: string;
  nuance: string;
}

export const DIWALI_NUANCE: CountryNuance[] = [
  {
    country: "India",
    date: "Oct 29, 2026",
    status: "Public Holiday (National)",
    nuance: "In the North, it marks Rama's return to Ayodhya; in the South, it's Naraka Chaturdashi celebrating Krishna's victory."
  },
  {
    country: "Nepal",
    date: "Oct 29, 2026",
    status: "Public Holiday (National)",
    nuance: "Known as Tihar. A five-day sequence with specific days dedicated to crows, dogs, cows, and the bond between siblings."
  },
  {
    country: "Singapore",
    date: "Oct 29, 2026",
    status: "Public Holiday",
    nuance: "Deepavali is a major event centered in Little India, characterized by stunning street light-ups and traditional bazaars."
  },
  {
    country: "Malaysia",
    date: "Oct 29, 2026",
    status: "Public Holiday",
    nuance: "Observed in all states except Sarawak. Known for 'open house' traditions where people of all faiths visit Hindu friends."
  },
  {
    country: "UK",
    date: "Oct 29, 2026",
    status: "Observance (Not a Public Holiday)",
    nuance: "While not a day off, it sees massive public celebrations, particularly the famous Golden Mile light-up in Leicester."
  }
];

export const LONG_WEEKENDS_PROTOTYPE = [
  {
    name: "Republic Day",
    date: "Jan 26, 2026",
    alignment: "Saturday–Monday",
    logic: "3 days off with no leave required."
  },
  {
    name: "Holi",
    date: "Mar 04, 2026",
    alignment: "Wed–Sun",
    logic: "5 days off if you take Thursday and Friday as leave."
  },
  {
    name: "Diwali",
    date: "Oct 29, 2026",
    alignment: "Thu–Sun",
    logic: "4 days off if you take Friday as leave."
  }
];
