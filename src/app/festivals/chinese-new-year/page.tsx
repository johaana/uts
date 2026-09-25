import type { Metadata } from 'next';
import { ChineseNewYearPageContent } from './ChineseNewYearPageContent';

export const metadata: Metadata = {
  title: "Chinese New Year: Know before you plan.",
  description: "Chinese New Year is observed in China on 17 Feb 2026. A holiday for one traveler is a closed office for another. Know which one you are. Same date. Different plans. Different consequences.",
};

export default function ChineseNewYearPage() {
    return <ChineseNewYearPageContent />;
}
