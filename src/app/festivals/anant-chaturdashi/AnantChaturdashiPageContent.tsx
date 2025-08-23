
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/product-data";

const pageContent = [
    {
        id: "overview",
        title: "Overview",
        icon: BookOpen,
        content: (
            <>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                     <div className="md:w-2/3">
                        <h2 className="font-headline text-3xl font-bold mb-4">A Day of Visarjan</h2>
                        <div className="space-y-4 text-foreground/80 prose max-w-none">
                            <p>Anant Chaturdashi, which falls on the 14th day of the bright half of the Bhadrapada month, is a significant day in the Hindu calendar. It is most famously known as the final day of the 10-day long Ganesh Chaturthi festival. On this day, the idols of Lord Ganesha that were installed in homes and public pandals are taken in grand processions for immersion, or 'visarjan', in a nearby body of water.</p>
                            <p>The streets come alive with music, dance, and chants of "Ganpati Bappa Morya, Pudhchya Varshi Lavkar Ya" (O Lord Ganesha, come again soon next year). It's a vibrant and emotional farewell to the beloved deity, symbolizing his return to his celestial abode.</p>
                        </div>
                    </div>
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
                <h2 className="font-headline text-3xl font-bold mb-4">Worship of Lord Vishnu</h2>
                 <div className="not-prose my-10">
                    <h3 className="font-headline text-2xl font-bold mb-4 text-center text-primary">Eco-Friendly Visarjan</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <ProductCard product={products.ecoFriendlyGanesha} />
                        <ProductCard product={products.saudeepMittiGanesh} />
                        <ProductCard product={products.tiedRibbonsGanesha} />
                    </div>
                </div>
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>The Endless Lord</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-foreground/80">The day is also dedicated to the worship of Lord Vishnu in his 'Ananta' (endless or eternal) form. Devotees observe a fast and tie a sacred thread called 'Ananta Sutra' on their wrists, chanting prayers to Lord Vishnu for protection and prosperity.</p>
                        </CardContent>
                    </Card>
                </div>
            </>
        )
    }
];

export function AnantChaturdashiPageContent({ isContent = false }: { isContent?: boolean }) {
    const pageSections = pageContent.map(item => ({
        id: item.id,
        title: item.title,
        icon: item.icon,
    }));

     if (isContent) {
        return (
             <article className="space-y-12">
                {pageContent.map((section) => (
                    <section key={section.id} id={section.id} className="scroll-mt-20">
                        {section.content}
                    </section>
                ))}
            </article>
        )
    }

    return (
        <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
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
    );
}
