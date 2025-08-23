
import type { Metadata } from 'next';
import { OktoberfestPageContent } from './OktoberfestPageContent';

export const metadata: Metadata = {
  title: "Oktoberfest 2025: Your Guide to Germany's Biggest Beer Festival 🍺",
  description: "Prost! Get the Oktoberfest 2025 dates, find out about the traditions, and what to expect at the world's largest Volksfest in Munich, Germany.",
};

export default function OktoberfestPage() {
    return <OktoberfestPageContent />;
}
