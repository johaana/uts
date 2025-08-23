
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
                <h2 className="font-headline text-3xl font-bold mb-4">An Accidental Tradition</h2>
                <div className="space-y-4 text-foreground/80 prose max-w-none">
                    <p>Some festivals are born from ancient myths, others from sacred traditions. The Boryeong Mud Festival, however, has a much more modern and commercial origin story. In 1996, a South Korean cosmetics company was looking for a way to promote its new line of beauty products that used the mineral-rich mud from the Boryeong mud flats. Their solution? Throw a massive party and get everyone to cover themselves in the product.</p>
                    <p>What started as a clever marketing campaign quickly morphed into one of South Korea's biggest and most famous international festivals. Held every July on Daecheon Beach, the festival now attracts millions of visitors, both local and international, who come not just for the supposed health benefits of the mud, but for the sheer, unadulterated fun of getting messy. It's a celebration that proves that sometimes, the best traditions are the ones we create ourselves, often by accident.</p>
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
                <h2 className="font-headline text-3xl font-bold mb-4">Mud, Music, and Mayhem</h2>
                <div className="space-y-4 text-foreground/80 prose max-w-none">
                   <p>The festival is a giant, muddy playground for adults. The main attractions include a massive mud pool, mud slides, a 'mud prison', and mud skiing competitions. The atmosphere is electric, with live music, concerts, and a vibrant beach party vibe. Participants can also indulge in mud massages and other beauty treatments using the festival's star ingredient. The event culminates in a spectacular closing ceremony with a grand fireworks display over the beach.</p>
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
                <h2 className="font-headline text-3xl font-bold mb-4">A Celebration of Fun</h2>
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Pure, Unadulterated Joy</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-foreground/80">Unlike festivals steeped in deep religious or historical significance, the Boryeong Mud Festival is a celebration of pure, uninhibited fun. It's an opportunity for people to let go of their inhibitions, get messy, and connect with others in a playful and energetic environment. It promotes tourism, local businesses, and of course, Boryeong's famous mud cosmetics, making it a modern festival success story.</p>
                        </CardContent>
                    </Card>
                </div>
            </>
        )
    }
];

export function BoryeongMudFestivalPageContent() {
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
