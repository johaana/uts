

'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

const recipes = [
    { name: "Khechudi", link: "/recipes/khechudi" },
    { name: "Dalma", link: "/recipes/dalma" },
    { name: "Poda Pitha", link: "/recipes/poda-pitha" },
    { name: "Khaja", link: "/recipes/khaja" },
]

const pageSections = [
    { id: "overview", title: "Overview", icon: BookOpen },
    { id: "traditions", title: "Traditions", icon: Sparkles },
    { id: "recipes", title: "Recipes", icon: Utensils },
    { id: "chants", title: "Chants", icon: MessageSquareQuote },
];


export default function RathYatraPage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-12">
                <Card className="mb-12 overflow-hidden">
                     <Image src="https://i.postimg.cc/kXC7f44W/rath-yatra.jpg" alt="Rath Yatra" width={1200} height={400} className="w-full h-48 md:h-64 object-cover" data-ai-hint="chariot festival" />
                    <div className="p-6 md:p-10 text-center">
                        <h1 className="font-headline text-4xl md:text-7xl font-bold text-primary">Rath Yatra</h1>
                        <p className="text-xl md:text-2xl mt-2 text-muted-foreground">The Chariot Festival of Lord Jagannath</p>
                    </div>
                    <CardContent className="p-6 md:p-10 pt-0">
                        <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
                            <aside className="hidden md:block md:col-span-4 lg:col-span-3 -ml-2">
                                <div className="sticky top-24">
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
                                </div>
                            </aside>

                            <main className="md:col-span-8 lg:col-span-9">
                                <article className="space-y-12">
                                    <section id="overview" className="scroll-mt-20">
                                         <div className="flex flex-col md:flex-row gap-8 items-center">
                                            <div className="md:w-2/3">
                                                <h2 className="font-headline text-3xl font-bold mb-4">The Journey of the Deities</h2>
                                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                                    <p>Rath Yatra, the Festival of Chariots, is a monumental spectacle of faith that unfolds on the streets of Puri, Odisha. It is one of the most ancient and largest religious gatherings in the world, centered around Lord Jagannath—a form of Lord Krishna—and his siblings, Lord Balabhadra and Subhadra. The festival commemorates their annual ceremonial journey from their home in the Jagannath Temple to their aunt's residence, the Gundicha Temple, just two kilometers away. This journey is not merely a procession; it is a deeply symbolic act where the deities themselves come out of the sanctum sanctorum to meet their devotees, transcending all barriers of caste, creed, and religion.</p>
                                                    <p>The sight is awe-inspiring: three massive, temple-like chariots, built anew each year and decorated with vibrant colors, are pulled by millions of devotees, their hands gripping the thick coir ropes in a collective act of service and devotion. The belief that pulling the chariot of the Lord cleanses one of all sins draws people from every corner of the globe. The air resonates with the sound of gongs, conches, and the chanting of 'Jai Jagannath!', creating an atmosphere of unparalleled spiritual fervor. The festival is a powerful testament to the idea of a living, accessible god who leaves his divine abode to mingle with the common people, reaffirming his love and connection with humanity.</p>
                                                </div>
                                            </div>
                                            <div className="md:w-1/3">
                                                <Image src="https://i.postimg.cc/kXC7f44W/rath-yatra.jpg" alt="Rath Yatra Chariots" width={400} height={400} className="rounded-lg shadow-lg" data-ai-hint="chariot festival"/>
                                            </div>
                                        </div>
                                    </section>
                                    
                                     <div className="md:hidden sticky top-16 z-30 bg-background/95 backdrop-blur-sm py-2 -mx-6 px-6 mb-8 border-b">
                                        <h3 className="font-headline text-lg font-bold mb-2">In This Article</h3>
                                        <div className="flex flex-wrap gap-x-4 gap-y-2">
                                            {pageSections.map(section => (
                                                <a key={section.id} href={`#${section.id}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                                                    <section.icon className="w-4 h-4 text-accent" />
                                                    {section.title}
                                                </a>
                                            ))}
                                        </div>
                                     </div>

                                    <section id="traditions" className="scroll-mt-20">
                                        <h2 className="font-headline text-3xl font-bold mb-4">How to Celebrate Rath Yatra</h2>
                                        <ul className="space-y-4 pl-4">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                                <div>
                                                    <h4 className="font-bold">Attend the Procession</h4>
                                                    <p className="text-foreground/80">Witness the grand procession of the chariots. It's considered highly auspicious to pull the ropes of the chariots.</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                                <div>
                                                    <h4 className="font-bold">Offer Prasadam</h4>
                                                    <p className="text-foreground/80">Offer prayers and 'prasadam' (food offered to the deity) to Lord Jagannath. The 'Mahaprasad' of the Puri temple is world-famous.</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                                <div>
                                                    <h4 className="font-bold">Community Service</h4>
                                                    <p className="text-foreground/80">Engage in community service by helping to clean the path of the chariots or distribute food and water to the devotees.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </section>

                                    <section id="recipes" className="scroll-mt-20">
                                        <h2 className="font-headline text-3xl font-bold mb-4">Jagannath's Feast</h2>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                            {recipes.map(recipe => (
                                               <Link href={recipe.link} key={recipe.name}>
                                                    <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
                                                        <CardContent className="p-4">
                                                            <h3 className="font-headline text-xl font-bold text-center text-primary h-14 flex items-center justify-center">{recipe.name}</h3>
                                                        </CardContent>
                                                    </Card>
                                                </Link>
                                            ))}
                                        </div>
                                    </section>

                                     <section id="chants" className="scroll-mt-20">
                                        <h2 className="font-headline text-3xl font-bold mb-4">Hymns of Jagannath</h2>
                                        <div className="space-y-6">
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle>Jagannath Ashtakam</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="text-lg font-serif italic">"Kadacit kalindi-tata-vipina-sangitaka-ravo..."</p>
                                                    <p className="mt-2 text-foreground/80">A beautiful eight-verse prayer dedicated to Lord Jagannath, composed by Adi Shankaracharya. It is chanted with great devotion during the Rath Yatra, describing the glory and compassionate nature of the Lord of the Universe.</p>
                                                </CardContent>
                                            </Card>
                                             <Card>
                                                <CardHeader>
                                                    <CardTitle>Hare Krishna Mahamantra</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                     <p className="text-lg font-serif italic">"Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare, Hare Rama, Hare Rama, Rama Rama, Hare Hare"</p>
                                                    <p className="mt-2 text-foreground/80">The air during Rath Yatra resonates with the continuous chanting of the Hare Krishna mantra, creating a deeply spiritual and ecstatic atmosphere that unites all devotees.</p>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </section>
                                </article>
                                <ShareButtons title="Rath Yatra" />
                            </main>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
