
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
                <h2 className="font-headline text-3xl font-bold mb-4">The Christmas Devil</h2>
                <div className="space-y-4 text-foreground/80 prose max-w-none">
                    <p>In the festive season of Advent, as sweet images of Saint Nicholas and his kindly gifts fill the air in many parts of the world, a much darker, more menacing figure emerges from the shadows of Alpine folklore. This is the Krampus, a horned, anthropomorphic creature who is the fearsome companion and dark counterpart to the gentle St. Nicholas. While St. Nicholas rewards well-behaved children, Krampus's job is to punish the naughty ones. His name is derived from the German word 'krampen', meaning claw, and he is a terrifying figure straight out of a nightmare.</p>
                    <p>Krampusnacht, or "Krampus Night," is celebrated on the eve of St. Nicholas's Day, December 5th. It is a night when the devilish beast is said to roam the streets in search of misbehaving children, a pre-Christian tradition that has survived for centuries in Austria, Germany, Hungary, and other parts of Central Europe.</p>
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
                <h2 className="font-headline text-3xl font-bold mb-4">The Krampus Run</h2>
                <div className="space-y-4 text-foreground/80 prose max-w-none">
                   <p>The central event of Krampusnacht is the 'Krampuslauf' or Krampus Run. This is not a gentle parade. Young men dress up in elaborate and genuinely frightening Krampus costumes, complete with carved wooden masks with menacing horns, suits made of sheep or goat skin, and large, clanking cowbells tied to their waists. Wielding bundles of birch branches, they charge through the streets, creating a chaotic and intimidating spectacle. They playfully swat at onlookers, their bells ringing ominously, a terrifying and thrilling folk performance meant to chase away the darkness of winter and, of course, to scare children into being good for the coming year.</p>
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
                <h2 className="font-headline text-3xl font-bold mb-4">A Pagan Past</h2>
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Confronting the Darkness</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-foreground/80">Krampusnacht is a fascinating survival of pre-Christian pagan traditions. The figure of Krampus is believed to be a representation of an ancient horned god of the witches. The festival represents a more primal way of dealing with the darkness and cold of the long winter nights—not just with light and cheer, but by confronting the darkness head-on, personifying it, and then chasing it away. It's a folk tradition that adds a layer of delightful terror to the Christmas season, a reminder of the complex and ancient roots of our modern holidays.</p>
                        </CardContent>
                    </Card>
                </div>
            </>
        )
    }
];

export function KrampusnachtPageContent() {
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
