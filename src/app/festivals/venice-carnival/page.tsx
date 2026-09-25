import type { Metadata } from 'next';
import { VeniceCarnivalPageContent } from './VeniceCarnivalPageContent';

export const metadata: Metadata = {
  title: "Venice Carnival: Know before you plan.",
  description: "Venice Carnival is observed in Italy from Feb 7, 2026. A holiday for one traveler is a closed office for another. Know which one you are. Same date. Different plans. Different consequences.",
   openGraph: {
    title: "Venice Carnival: Know before you plan.",
    description: "Venice Carnival is observed in Italy from Feb 7, 2026. A holiday for one traveler is a closed office for another. Know which one you are. Same date. Different plans. Different consequences.",
    images: [{ url: "https://i.postimg.cc/QCVN56qC/Venice-Carnival-Italy.jpg", width: 1200, height: 630, alt: "Venetian masks" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Venice Carnival: Know before you plan.",
    description: "Venice Carnival is observed in Italy from Feb 7, 2026. A holiday for one traveler is a closed office for another. Know which one you are. Same date. Different plans. Different consequences.",
    images: ["https://i.postimg.cc/QCVN56qC/Venice-Carnival-Italy.jpg"],
  },
};

export default function VeniceCarnivalPage() {
    return <VeniceCarnivalPageContent />;
}
