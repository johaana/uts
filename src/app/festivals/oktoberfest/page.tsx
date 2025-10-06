
import type { Metadata } from 'next';
import { OktoberfestPageContent } from './OktoberfestPageContent';

export const metadata: Metadata = {
  title: "Oktoberfest 2025: Your Guide to Germany's Biggest Beer Festival | Utsavs 🍺",
  description: "Prost! Get the Oktoberfest 2025 dates, find out about the traditions, and what to expect at the world's largest Volksfest in Munich, Germany.",
   openGraph: {
    title: "Oktoberfest 2025: Your Guide to Germany's Biggest Beer Festival | Utsavs 🍺",
    description: "Prost! Get the Oktoberfest 2025 dates, find out about the traditions, and what to expect at the world's largest Volksfest in Munich, Germany.",
    images: [{ url: "https://i.postimg.cc/g0q0PLJz/Oktoberfest-Munich.jpg", width: 1200, height: 630, alt: "Oktoberfest beer tent" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Oktoberfest 2025: Your Guide to Germany's Biggest Beer Festival | Utsavs 🍺",
    description: "Prost! Get the Oktoberfest 2025 dates, find out about the traditions, and what to expect at the world's largest Volksfest in Munich, Germany.",
    images: ["https://i.postimg.cc/g0q0PLJz/Oktoberfest-Munich.jpg"],
  },
};

export default function OktoberfestPage() {
    return <OktoberfestPageContent />;
}
