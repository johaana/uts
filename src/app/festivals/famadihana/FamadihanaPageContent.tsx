
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";

const pageContent = [
    {
        id: "story",
        title: "The Story",
        icon: BookOpen,
        content: (
            <>
                <h2 className="font-headline text-3xl font-bold mb-4">A Celebration of Kinship</h2>
                <div className="space-y-4 text-foreground/80 prose max-w-none">
                    <p>Famadihana, or 'the turning of the bones', is a unique and deeply intimate funerary tradition of the Malagasy people in Madagascar. Unlike the somber mood of Western funerals, Famadihana is a joyous celebration, a time for the living to reconnect with their deceased loved ones in a very physical and celebratory way. This festival of kinship is held every five to seven years, bringing together extended families in a grand reunion that honors the ancestors and reinforces family bonds.</p>
                    <p>The practice is rooted in the belief that the spirits of the dead do not join the world of the ancestors until their bodies have completely decomposed. Famadihana is seen as a crucial step in this process, a way to help the spirits on their journey. It is also a time to show the deceased that they are not forgotten, to update them on family news, and to ask for their blessings.</p>
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
                <h2 className="font-headline text-3xl font-bold mb-4">Dancing with the Ancestors</h2>
                <div className="space-y-4 text-foreground/80 prose max-w-none">
                   <p>The ritual begins with the opening of the family crypt. The bodies of the ancestors are carefully exhumed and brought out into the open. The old burial shrouds are removed, and the remains are lovingly wrapped in new, fine silk shrouds. This is a moment of great emotion and intimacy.</p>
                   <p>What follows is a joyous celebration. Live music fills the air, and family members hoist the bodies onto their shoulders and dance with them. It's a surreal and powerful sight—a dance between the living and the dead. The atmosphere is festive, with feasting and drinking, as families share memories and stories. Before the sun sets, the bodies are returned to the tomb, along with gifts and money, to rest until the next celebration.</p>
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
                <h2 className="font-headline text-3xl font-bold mb-4">A Bridge Between Worlds</h2>
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Love Transcends Death</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-foreground/80">Famadihana is a profound expression of the Malagasy view of life, death, and kinship. It demonstrates a belief that the relationship with family members does not end with death. The festival is a powerful affirmation that love and memory can bridge the gap between the world of the living and the world of the ancestors. While controversial and often misunderstood by outsiders, for the communities that practice it, Famadihana is an essential and beautiful act of honoring their lineage and celebrating the enduring power of family.</p>
                        </CardContent>
                    </Card>
                </div>
            </>
        )
    }
];

export function FamadihanaPageContent() {
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
