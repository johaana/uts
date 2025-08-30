
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, MessageSquareQuote, Drama } from "lucide-react";
import Link from "next/link";

const pageContent = [
    {
        id: "story",
        title: "The Story",
        icon: BookOpen,
        content: (
            <>
                <h2 className="font-headline text-3xl font-bold mb-4">A Living Link to the Divine</h2>
                <div className="space-y-4 text-foreground/80 prose max-w-none">
                    <p>In the vibrant, lush landscapes of Northern Kerala, a sacred drama unfolds that defies the boundaries between the mortal and the divine. This is Theyyam, an ancient and powerful ritual where for a few intense hours, a man ceases to be human. Adorned in spectacular costumes and otherworldly makeup, he becomes a living vessel for a god, his body a conduit for cosmic energy. The community gathers not to watch a performance, but to witness a divine visitation, to speak to their gods, seek blessings, and find justice.</p>
                    <p>With a pantheon of over 450 distinct Theyyams—from fierce goddesses and epic heroes to ancestral spirits and animal deities—this 'dance of the gods' is the pulsating heart of Malabar's village life. Celebrated annually between December and April, it's a raw, visceral form of worship that offers a rare and profound glimpse into a world where the sacred is made manifest. For more such stories, see our guide to the <Link href="/blog/extreme-festivals-of-the-world" className="text-accent hover:underline">world's most extreme festivals</Link>.</p>
                </div>
            </>
        )
    },
    {
        id: "ritual",
        title: "The Ritual",
        icon: Drama,
        content: (
            <>
                <h2 className="font-headline text-3xl font-bold mb-4">The Divine Transformation</h2>
                <div className="space-y-4 text-foreground/80 prose max-w-none">
                   <p>The transformation of the performer is a meticulous and sacred process. The artist, who invariably belongs to a specific lower-caste community, undergoes weeks of intense spiritual and physical preparation. This includes strict fasting, prayer, and a deep meditation on the deity he is to embody. The makeup and costume are incredibly elaborate and symbolic. The face becomes a canvas for intricate designs drawn with natural pigments, erasing the human features beneath. The headgear ('mudi') can be toweringly large, a complex structure of bamboo and cloth that seems to touch the heavens.</p>
                   <p>As the ritual begins, to the hypnotic and thunderous rhythm of the 'chenda' (drum) and other traditional instruments, the dancer enters the sacred space. The dance starts slowly, a gradual shedding of the mortal coil, building in intensity until he enters a trance-like state—the divine possession. At this sacred moment, he is no longer a man; he *is* the god. He moves with divine authority, speaks with a divine voice, offering prophecies, arbitrating disputes, and giving comfort to the devotees who approach with awe and reverence. Some Theyyams perform astonishing acts, like walking on fire, as a testament to the divine power they now channel.</p>
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
                <h2 className="font-headline text-3xl font-bold mb-4">A Social and Spiritual Bridge</h2>
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>The Voice of the Voiceless</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-foreground/80">Theyyam is not just a spiritual event; it is a powerful socio-political act. The fact that the performers are from marginalized communities gives them a temporary but absolute spiritual authority. For a few days, a man considered 'low-caste' becomes the mouthpiece of a god, worshipped and revered by all, including those from the highest castes. This ritualistic inversion of the social hierarchy is a form of social justice, a powerful and visceral reminder that divinity resides in all people, regardless of birth or status. It is a living, breathing tradition that continues to be a vital cultural and spiritual force in Kerala.</p>
                        </CardContent>
                    </Card>
                </div>
            </>
        )
    }
];

export function TheyyamPageContent({ isContent = false }: { isContent?: boolean }) {
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
