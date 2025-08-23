
import type { Metadata } from 'next';
import { LaTomatinaPageContent } from './LaTomatinaPageContent';

export const metadata: Metadata = {
  title: "La Tomatina 2025: The Ultimate Guide to the World's Biggest Food Fight 🍅",
  description: "Ready for La Tomatina 2025? Get dates, history, and essential survival tips for Spain's messiest, most famous tomato-throwing festival.",
};

export default function LaTomatinaPage() {
    return <LaTomatinaPageContent />;
}
