
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";

const pageContent = [
    {
        id: "overview",
        title: "Overview",
        icon: BookOpen,
        content: (
             <>
                <h2 className="font-headline text-3xl font-bold mb-4">A 75-Day Celebration</h2>
                <div className="space-y-4 text-foreground/80 prose max-w-none">
                    <p>Unlike Dussehra celebrations elsewhere in India, which are centered around the legend of Ramayana, Bastar Dussehra is a unique and spectacular event dedicated to Goddess Danteshwari, the presiding deity of the Bastar region in Chhattisgarh. Famously known as the world's longest festival, its celebrations span over an incredible 75 days, culminating on the 13th day of the bright moon in the month of Ashwin.</p>
                    <p>The festival dates back to the 15th century and was started by the Kakatiya ruler, King Purushottam Deo. It is a vibrant amalgamation of tribal and Hindu traditions, showcasing the rich cultural heritage of the region's diverse indigenous communities. The festival is not about burning effigies but about celebrating nature, spirituality, and the power of the goddess.</p>
                </div>
            </>
        )
    },
    {
        id: "traditions",
        title: "Unique Rituals",
        icon: Sparkles,
        content: (
            <>
                <h2 className="font-headline text-3xl font-bold mb-4">Rituals and Chariots</h2>
                <div className="space-y-4 text-foreground/80 prose max-w-none">
                   <p>The festival involves a series of elaborate and fascinating rituals. One of the main attractions is the construction of a massive double-decked chariot (rath), which is pulled by the local people. Another unique ritual is the 'Jogi Bithai', where a youth sits in a pit for nine days, fasting and meditating for the prosperity of the region. The festival is a grand spectacle, attracting devotees and tourists from all over, offering a deep insight into the ancient traditions of the Bastar tribes.</p>
                </div>
            </>
        )
    },
    {
        id: "significance",
        title: "Significance",
        icon: MessageSquareQuote,
        content: (
            <>
                <h2 className="font-headline text-3xl font-bold mb-4">A Symbol of Unity</h2>
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Devotion and Community</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-foreground/80">Bastar Dussehra is a powerful symbol of unity, bringing together various tribal communities of the region. The collective participation in the construction of the chariot and the performance of rituals strengthens social bonds and reinforces a shared cultural identity, centered around the devotion to Goddess Danteshwari.</p>
                        </CardContent>
                    </Card>
                </div>
            </>
        )
    }
];

export function BastarDussehraPageContent() {
    const pageSections = pageContent.map(item => ({
        id: item.id,
        title: item.title,
        icon: item.icon,
    }));

    return (
        <>
            <div className="mb-10 p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                <h2 className="font-headline text-2xl font-bold mb-4">In This Article</h2>
                <ul className="space-y-2">
                    {pageSections.map(section => (
                        <li key={section.id}>
                            <a href={`#${section.id}`} className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
                                <section.icon className="w-5 h-5 text-accent" />
                                <span className="font-semibold">{section.title}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
             <article className="space-y-12">
                {pageContent.map((section) => (
                    <section key={section.id} id={section.id} className="scroll-mt-20">
                        {section.content}
                    </section>
                ))}
            </article>
        </>
    );
}

