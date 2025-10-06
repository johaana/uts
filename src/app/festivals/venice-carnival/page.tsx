
import type { Metadata } from 'next';
import { VeniceCarnivalPageContent } from './VeniceCarnivalPageContent';

export const metadata: Metadata = {
  title: "Venice Carnival 2025: Dates, Masks & Ball Guide | Utsavs 🎭",
  description: "Plan your trip to the Venice Carnival 2025! Find dates, learn about the history of Venetian masks, and get tips for attending the spectacular balls.",
   openGraph: {
    title: "Venice Carnival 2025: Dates, Masks & Ball Guide | Utsavs 🎭",
    description: "Plan your trip to the Venice Carnival 2025! Find dates, learn about the history of Venetian masks, and get tips for attending the spectacular balls.",
    images: [{ url: "https://i.postimg.cc/QCVN56qC/Venice-Carnival-Italy.jpg", width: 1200, height: 630, alt: "Venetian masks" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Venice Carnival 2025: Dates, Masks & Ball Guide | Utsavs 🎭",
    description: "Plan your trip to the Venice Carnival 2025! Find dates, learn about the history of Venetian masks, and get tips for attending the spectacular balls.",
    images: ["https://i.postimg.cc/QCVN56qC/Venice-Carnival-Italy.jpg"],
  },
};

export default function VeniceCarnivalPage() {
    return <VeniceCarnivalPageContent />;
}
