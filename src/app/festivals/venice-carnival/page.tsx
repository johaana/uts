'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote, Flag, Music, Sailboat, Trophy, Drama, PartyPopper, Info } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import Link from "next/link";
import { internationalEvents } from "@/lib/festival-data";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Venice Carnival 2025: Dates, Masks & Ball Guide 🎭",
  description: "Plan your trip to the Venice Carnival 2025! Find dates, learn about the history of Venetian masks, and get tips for attending the spectacular balls.",
};


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
            return Drama;
        case "hogmanay":
        case "chinese-new-year":
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
            <aside className="md:col-span-4 lg:col-span-3">
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

                    {/* Bunya Dreaming */}
                    <section id="bunya-dreaming" className="scroll-mt-20">
                         <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="md:w-2/3">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Bunya Dreaming Festival</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>The Bunya Dreaming is a deeply significant festival for the First Peoples of Australia, particularly in South-East Queensland. It is a modern revival of an ancient tradition: a major gathering of various Aboriginal groups held every three years to coincide with the bumper harvest of the Bunya Pine tree. These majestic trees produce a large, nutritious nut that was a staple food source for generations. The festival is a powerful affirmation of Indigenous culture, a time for feasting, ceremony, law-making, and strengthening social and spiritual connections.</p>
                                    <p>Held on the Sunshine Coast, Bunya Dreaming is an open invitation to all people, Indigenous and non-Indigenous, to come together and experience the richness and resilience of Australia's First Nations' culture. It's a vibrant celebration of music, dance, storytelling, and art, centered around the sacred Bunya tree.</p>
                                </div>
                            </div>
                            <div className="md:w-1/3">
                                <Image src="https://i.postimg.cc/RVkPkNyb/The-Bunya-Dreaming-Festival-Australia-1.png" alt="Bunya Dreaming Festival" width={400} height={400} className="rounded-lg shadow-lg" data-ai-hint="aboriginal festival"/>
                            </div>
                        </div>
                    </section>

                     {/* Carnival */}
                    <section id="carnival" className="scroll-mt-20">
                         <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="md:order-2 md:w-2/3">
                                <h2 className="font-headline text-3xl font-bold mb-4">Carnival</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Carnival, celebrated with explosive joy in Brazil and many other Catholic countries, is an annual festival that marks the beginning of Lent. The name is thought to derive from the Latin 'carne vale', which means 'farewell to meat', signifying a final period of feasting and revelry before the 40 days of fasting and penitence that precede Easter. While celebrated worldwide, the Carnival in Rio de Janeiro, Brazil, is considered the biggest and most famous, a spectacular explosion of music, dance, and color.</p>
                                    <p>It's a time when the entire country comes to a standstill, and cities erupt into massive street parties ('blocos') and parades. The festival is a vibrant showcase of Brazilian culture, especially the infectious rhythms of Samba music.</p>
                                </div>
                            </div>
                            <div className="md:order-1 md:w-1/3">
                                <Image src="https://i.postimg.cc/0r1MZd3v/Carnival.jpg" alt="Carnival" width={400} height={400} className="rounded-lg shadow-lg" data-ai-hint="brazil carnival"/>
                            </div>
                        </div>
                    </section>

                     {/* Boryeong Mud Festival */}
                    <section id="boryeong-mud-festival" className="scroll-mt-20">
                         <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="md:w-2/3">
                                <h2 className="font-headline text-3xl font-bold mb-4">Boryeong Mud Festival</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                     <p>Some festivals are born from ancient myths, others from sacred traditions. The Boryeong Mud Festival, however, has a much more modern and commercial origin story. In 1996, a South Korean cosmetics company was looking for a way to promote its new line of beauty products that used the mineral-rich mud from the Boryeong mud flats. Their solution? Throw a massive party and get everyone to cover themselves in the product.</p>
                                    <p>What started as a clever marketing campaign quickly morphed into one of South Korea's biggest and most famous international festivals. Held every July on Daecheon Beach, the festival now attracts millions of visitors, both local and international, who come not just for the supposed health benefits of the mud, but for the sheer, unadulterated fun of getting messy. It's a celebration that proves that sometimes, the best traditions are the ones we create ourselves, often by accident.</p>
                                </div>
                            </div>
                            <div className="md:w-1/3">
                                <Image src="https://i.postimg.cc/N0MM9Q6G/boryeong.avif" alt="Boryeong Mud Festival" width={400} height={400} className="rounded-lg shadow-lg" data-ai-hint="mud festival"/>
                            </div>
                        </div>
                    </section>

                    {/* All other international festivals content */}
                    <section id="hadaka-matsuri" className="scroll-mt-20">
                         <h2 className="font-headline text-3xl font-bold mb-4 text-center">Hadaka Matsuri (The Naked Festival)</h2>
                         <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="md:w-2/3">
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Hadaka Matsuri, which translates to "Naked Festival," is one of Japan's most eccentric and ancient festivals. Celebrated at various locations, the most famous one is held at the Saidai-ji Temple in Okayama. This Shinto festival dates back over 500 years and is a ritual of purification and a prayer for an abundant harvest and prosperity.</p>
                                    <p>The festival involves thousands of men, clad only in traditional 'fundoshi' loincloths, who gather at the temple. Before the main event, they purify themselves with cold water. At midnight, a priest throws two sacred wooden sticks, known as 'shingi', into the crowd. This ignites a frantic scramble, as it's believed that whoever catches one of the shingi will be blessed with a year of good luck.</p>
                                </div>
                            </div>
                            <div className="md:w-1/3">
                                <Image src="https://i.postimg.cc/j5Z1fVY4/Hadaka-Matsuri.jpg" alt="Hadaka Matsuri" width={400} height={400} className="rounded-lg shadow-lg" data-ai-hint="naked festival"/>
                            </div>
                        </div>
                    </section>

                    <section id="krampusnacht" className="scroll-mt-20">
                         <h2 className="font-headline text-3xl font-bold mb-4 text-center">Krampusnacht (The Night of the Christmas Demon)</h2>
                         <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="md:order-2 md:w-2/3">
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>In the festive season of Advent, a darker figure emerges from Alpine folklore. This is the Krampus, the fearsome companion to St. Nicholas. While St. Nicholas rewards good children, Krampus punishes the naughty. Krampusnacht, or "Krampus Night," is celebrated on December 5th, the eve of St. Nicholas's Day.</p>
                                    <p>The main event is the 'Krampuslauf' or Krampus Run, where men in terrifying Krampus costumes parade through the streets, creating a chaotic and thrilling spectacle meant to chase away the darkness of winter. It's a fascinating survival of pre-Christian pagan traditions.</p>
                                </div>
                            </div>
                            <div className="md:order-1 md:w-1/3">
                                <Image src="https://i.postimg.cc/5yrkPw0H/Krampusnacht.avif" alt="Krampusnacht" width={400} height={400} className="rounded-lg shadow-lg" data-ai-hint="krampus"/>
                            </div>
                        </div>
                    </section>

                     <section id="famadihana" className="scroll-mt-20">
                         <h2 className="font-headline text-3xl font-bold mb-4 text-center">Famadihana (The Turning of the Bones)</h2>
                         <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="md:w-2/3">
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Famadihana, or 'the turning of the bones', is a unique and deeply intimate funerary tradition of the Malagasy people in Madagascar. Unlike the somber mood of Western funerals, Famadihana is a joyous celebration held every five to seven years. The practice is rooted in the belief that the spirits of the dead do not join the world of the ancestors until their bodies have completely decomposed.</p>
                                    <p>The ritual involves exhuming the remains of ancestors, re-wrapping them in fresh silk shrouds, and then dancing with the bodies to live music. It's a time for the living to update the deceased on family news and to ask for their blessings, maintaining a physical and spiritual connection with those who came before.</p>
                                </div>
                            </div>
                            <div className="md:w-1/3">
                                <Image src="https://i.postimg.cc/jq39drXs/Famadihana.jpg" alt="Famadihana" width={400} height={400} className="rounded-lg shadow-lg" data-ai-hint="turning of bones"/>
                            </div>
                        </div>
                    </section>
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
