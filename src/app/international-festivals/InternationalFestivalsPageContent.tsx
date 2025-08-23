

'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote, Flag, Music, Sailboat, Trophy, Drama, PartyPopper, Info } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import Link from "next/link";
import { internationalEvents } from "@/lib/festival-data";

const pageSections = internationalEvents.map(event => ({
    id: event.slug,
    title: event.name,
    icon: BookOpen, // Default icon
}));

const getIconForFestival = (slug: string) => {
    switch (slug) {
        case "halloween":
        case "boryeong-mud-festival":
            return PartyPopper;
        case "venice-carnival":
        case "carnival":
        case "oktoberfest":
            return Drama;
        case "hogmanay":
        case "chinese-new-year":
        case "new-years-day":
        case "new-years-eve":
            return Sparkles;
        case "st-patricks-day":
            return Flag;
        default:
            return BookOpen;
    }
}


export function InternationalFestivalsPageContent() {
    return (
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
            <aside className="hidden md:block md:col-span-4 lg:col-span-3">
                <div className="sticky top-24">
                    <div className="mb-10 p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                        <h2 className="font-headline text-2xl font-bold mb-4">In This Article</h2>
                        <ul className="space-y-2">
                            {pageSections.map(section => (
                                <li key={section.id}>
                                    <a href={`#${section.id}`} className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
                                        {React.createElement(getIconForFestival(section.id), { className: "w-5 h-5 text-accent" })}
                                        <span className="font-semibold">{section.title}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </aside>
            <main className="md:col-span-8 lg:col-span-9">
                <article className="space-y-20">

                    {internationalEvents.map(event => (
                         <section key={event.slug} id={event.slug} className="scroll-mt-20">
                             <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className={event.slug === 'bunya-dreaming' || event.slug === 'krampusnacht' || event.slug === 'carnival' ? 'md:order-2 md:w-2/3' : 'md:w-2/3'}>
                                    <h2 className="font-headline text-3xl font-bold mb-4">{event.name}</h2>
                                    <div className="space-y-4 text-foreground/80 prose max-w-none">
                                       <p>{event.description}</p>
                                        <p>Learn more about the traditions and stories behind the <Link href={event.link!} className="text-accent hover:underline font-semibold">{event.name}</Link>.</p>
                                    </div>
                                </div>
                                <div className={event.slug === 'bunya-dreaming' || event.slug === 'krampusnacht' || event.slug === 'carnival' ? 'md:order-1 md:w-1/3' : 'md:w-1/3'}>
                                    <Image src={event.image!} alt={event.name} width={400} height={400} className="rounded-lg shadow-lg" data-ai-hint={event.hint}/>
                                </div>
                            </div>
                        </section>
                    ))}

                </article>
                <ShareButtons title="International Festivals" />
                 <RelatedContent items={[
                    { slug: "honoring-the-ancestors", title: "How the World Honors Its Ancestors", image: "https://i.postimg.cc/mgTh4YhH/nyepi-2.jpg", type: "Blog", link: "/blog/honoring-the-ancestors", hint: "ogoh-ogoh statue" },
                    { slug: "extreme-festivals-of-the-world", title: "Gods, Guts, and Glory: The World's Most Extreme Festivals", image: "https://i.postimg.cc/Hx8kz3vf/theemithi.jpg", type: "Blog", link: "/blog/extreme-festivals-of-the-world", hint: "fire walking" },
                    { slug: "diwali", title: "Diwali", image: "https://i.postimg.cc/SjF8HhM1/Diwali2.jpg", type: "Festival", link: "/festivals/diwali", hint: "diwali celebration" }
                ]} />
            </main>
        </div>
    );
}
