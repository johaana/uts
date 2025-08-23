
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";

const pageContent = [
    {
        id: "story",
        title: "The Story",
        icon: BookOpen,
        content: (
            <>
                <h2 className="font-headline text-3xl font-bold mb-4">A Ritual of Purification</h2>
                <div className="space-y-4 text-foreground/80 prose max-w-none">
                    <p>Hadaka Matsuri, which translates to "Naked Festival," is one of Japan's most eccentric and ancient festivals. Celebrated at various locations across the country, the most famous one is held at the Saidai-ji Temple in Okayama on the third Saturday of February. This Shinto festival dates back over 500 years and is a ritual of purification and a prayer for an abundant harvest and prosperity.</p>
                    <p>The festival involves thousands of men, clad only in traditional 'fundoshi' loincloths and 'tabi' socks, who gather at the temple. It is a powerful and chaotic display of communal energy and faith, where participants brave the freezing winter temperatures to take part in this unique purification rite.</p>
                </div>
            </>
        )
    },
    {
        id: "ritual",
        title: "The Ritual",
        icon: Sparkles,
        content: (
            <>
                <h2 className="font-headline text-3xl font-bold mb-4">The Scramble for Sacred Sticks</h2>
                <div className="space-y-4 text-foreground/80 prose max-w-none">
                   <p>Before the main event, the participants purify themselves with cold water. As darkness falls, the temple lights are extinguished. At midnight, a priest throws two sacred wooden sticks, known as 'shingi', and a hundred bundles of twigs into the massive crowd of men. This moment ignites a frantic and intense scramble. Thousands of near-naked men jostle, push, and climb over each other in a desperate attempt to catch one of the shingi.</p>
                   <p>It is believed that whoever successfully catches one of the shingi and thrusts it into a box filled with rice will be blessed with a year of good luck and happiness. The man who achieves this is called the 'Fuku Otoko' or 'Lucky Man'.</p>
                </div>
            </>
        )
    },
    {
        id: "meaning",
        title: "The Meaning",
        icon: MessageSquareQuote,
        content: (
            <>
                <h2 className="font-headline text-3xl font-bold mb-4">Communal Catharsis</h2>
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Transferring Bad Luck</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-foreground/80">The chaos of the Hadaka Matsuri is a form of communal catharsis. It is believed that by touching the 'Shin-otoko' (the 'God Man', chosen from the crowd), one can transfer all their bad luck and misfortune. The festival, while appearing aggressive, is a deeply communal ritual that fosters a sense of unity and shared purpose. It's a powerful and unforgettable experience that showcases a raw and primal aspect of Japanese spiritual tradition.</p>
                        </CardContent>
                    </Card>
                </div>
            </>
        )
    }
];

export function HadakaMatsuriPageContent() {
    return (
        <article className="space-y-12">
            {pageContent.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-20">
                    {section.content}
                </section>
            ))}
        </article>
    );
}
