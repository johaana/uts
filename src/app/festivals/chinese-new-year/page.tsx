
import type { Metadata } from 'next';
import { ChineseNewYearPageContent } from './ChineseNewYearPageContent';

export const metadata: Metadata = {
  title: "Chinese New Year 2025: Dates, Traditions & The Year of the Snake 🐲",
  description: "Discover the dates and traditions for Chinese New Year 2025. Explore the story of the Spring Festival and find out what The Year of the Snake has in store.",
};

export default function ChineseNewYearPage() {
    return <ChineseNewYearPageContent />;
}
