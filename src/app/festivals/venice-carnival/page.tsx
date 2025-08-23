
import type { Metadata } from 'next';
import { VeniceCarnivalPageContent } from './VeniceCarnivalPageContent';

export const metadata: Metadata = {
  title: "Venice Carnival 2025: Dates, Masks & Ball Guide 🎭",
  description: "Plan your trip to the Venice Carnival 2025! Find dates, learn about the history of Venetian masks, and get tips for attending the spectacular balls.",
};

export default function VeniceCarnivalPage() {
    return <VeniceCarnivalPageContent />;
}
