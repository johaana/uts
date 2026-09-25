import type { Metadata } from 'next';
import { OktoberfestPageContent } from './OktoberfestPageContent';

export const metadata: Metadata = {
  title: "Oktoberfest: Know before you plan.",
  description: "Oktoberfest is observed in Germany from 19 Sep 2026. A holiday for one traveler is a closed office for another. Know which one you are. Same date. Different plans. Different consequences.",
   openGraph: {
    title: "Oktoberfest: Know before you plan.",
    description: "Oktoberfest is observed in Germany from 19 Sep 2026. A holiday for one traveler is a closed office for another. Know which one you are. Same date. Different plans. Different consequences.",
    images: [{ url: "https://i.postimg.cc/g0q0PLJz/Oktoberfest-Munich.jpg", width: 1200, height: 630, alt: "Oktoberfest beer tent" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Oktoberfest: Know before you plan.",
    description: "Oktoberfest is observed in Germany from 19 Sep 2026. A holiday for one traveler is a closed office for another. Know which one you are. Same date. Different plans. Different consequences.",
    images: ["https://i.postimg.cc/g0q0PLJz/Oktoberfest-Munich.jpg"],
  },
};

export default function OktoberfestPage() {
    return <OktoberfestPageContent />;
}
