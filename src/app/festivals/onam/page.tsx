import type { Metadata } from 'next';
import { OnamPageContent } from './OnamPageContent';

export const metadata: Metadata = {
  title: "Onam: Know before you plan.",
  description: "Onam is observed in India from 26 Aug 2026. A holiday for one traveler is a closed office for another. Know which one you are. Same date. Different plans. Different consequences.",
};

export default function OnamPage() {
    return <OnamPageContent />;
}
