
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/product-data";

const pageContent = [
    {
        id: "overview",
        title: "Overview",
        icon: BookOpen,
        content: (
            <>
                <h2 className="font-headline text-3xl font-bold mb-4">An Ancient Gathering of Deities</h2>
                <div className="space-y-4 text-foreground/80 prose max-w-none">
                    <p>Long before the now-famous Thrissur Pooram, there was Arattupuzha Pooram, the oldest and most magnificent temple festival in Kerala. With a history stretching back over 1,400 years, this grand spectacle is rightfully called 'Devamela'—an assembly of the gods. The festival is held at the Sree Sastha Temple in Arattupuzha and is the culmination of a week-long celebration. It is believed that on the final day of the festival, 108 deities from various temples in the region gather to pay their respects to the presiding deity, Lord Ayyappan.</p>
                    <p>This festival is a breathtaking display of Keralan temple culture, a vibrant testament to the region's deep-rooted traditions. It's a time when the entire village comes alive with devotion, music, and the pageantry of ancient rituals.</p>
                </div>
            </>
        )
    },
    {
        id: "traditions",
        title: "The Divine Assembly",
        icon: Sparkles,
        content: (
            <>
                <h2 className="font-headline text-3xl font-bold mb-4">Elephants, Percussion, and Rituals</h2>
                <div className="space-y-4 text-foreground/80 prose max-w-none">
                   <p>The final day of the festival is a sensory explosion. The main event features a grand procession of nearly 70 majestically caparisoned elephants, each representing a different deity from a neighboring temple. The air is filled with the powerful and hypnotic rhythm of the 'panchavadyam', a traditional temple orchestra of five instruments. The highlight is the 'Arattu' ceremony, the ceremonial bath of the deities in the river, performed with great pomp and devotion. The night is lit up by a spectacular display of fireworks, marking a grand finale to this divine gathering.</p>
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
                <h2 className="font-headline text-3xl font-bold mb-4">A Living Heritage</h2>
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Preserving Ancient Traditions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-foreground/80">Arattupuzha Pooram is a vital part of Kerala's living heritage. Unlike many festivals that have been modernized, it retains its ancient rituals and traditional purity. It offers a rare and authentic glimpse into the state's rich temple culture and the deep devotion of its people. The festival is a powerful symbol of community and faith, bringing together people from all walks of life in a shared celebration of their cultural identity.</p>
                        </CardContent>
                    </Card>
                </div>
                <div className="not-prose my-10">
                    <h3 className="font-headline text-2xl font-bold mb-4 text-center text-primary">Get Ready for the Festivities</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <ProductCard product={products.rajasthanKraftToran} />
                        <ProductCard product={products.handicraftsParadiseChowki} />
                        <ProductCard product={products.indianArtVillaThali} />
                    </div>
                </div>
            </>
        )
    }
];

export function ArattupuzhaPooramPageContent() {
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
