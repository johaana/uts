import type { Metadata } from 'next';
import { GaneshChaturthiPageContent } from './GaneshChaturthiPageContent';

export const metadata: Metadata = {
  title: "Ganesh Chaturthi: Know before you plan.",
  description: "Ganesh Chaturthi is observed in India on 15 Sep 2026. A holiday for one traveler is a closed office for another. Know which one you are. Same date. Different plans. Different consequences.",
};

export default function GaneshChaturthiPage() {
    return <GaneshChaturthiPageContent />;
}
