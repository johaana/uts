
import type { Metadata } from 'next';
import { ThrissurPooramPageContent } from './ThrissurPooramPageContent';

export const metadata: Metadata = {
  title: "Thrissur Pooram: Kerala's Grandest Elephant & Percussion Festival | Utsavs",
  description: "Experience the magic of Thrissur Pooram, a grand temple festival in Kerala featuring caparisoned elephants, traditional music, and a dazzling fireworks display.",
  openGraph: {
    title: "Thrissur Pooram | Kerala's Grandest Festival | Utsavs",
    description: "Experience the magic of Thrissur Pooram, a grand temple festival in Kerala featuring caparisoned elephants, traditional music, and a dazzling fireworks display.",
    images: [{ url: "https://i.postimg.cc/QCHNCm16/thrissur-pooram.avif", width: 1200, height: 630, alt: "Thrissur Pooram Elephants" }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Thrissur Pooram: Kerala's Grandest Elephant & Percussion Festival",
    description: "Experience the magic of Thrissur Pooram, a grand temple festival in Kerala featuring caparisoned elephants, traditional music, and a dazzling fireworks display.",
    images: ["https://i.postimg.cc/QCHNCm16/thrissur-pooram.avif"],
  },
};

export default function ThrissurPooramPage() {
    return <ThrissurPooramPageContent />;
}
