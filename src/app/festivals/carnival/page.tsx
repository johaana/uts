
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Music } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { Metadata } from 'next';

const pageSections = [
    { id: "overview", title: "Overview", icon: BookOpen },
    { id: "traditions", title: "Samba and Parades", icon: Music },
];

export default function CarnivalPage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-12">
                <Card className="mb-12 overflow-hidden">
                     <Image src="https://i.postimg.cc/0r1MZd3v/Carnival.jpg" alt="Rio Carnival" width={1200} height={400} className="w-full h-48 md:h-64 object-cover" data-ai-hint="brazil carnival" />
                    <div className="p-6 md:p-10 text-center">
                        <h1 className="font-headline text-4xl md:text-7xl font-bold text-primary">Carnival</h1>
                        <p className="text-xl md:text-2xl mt-2 text-muted-foreground">The World's Biggest Party</p>
                    </div>
                    <CardContent className="p-6 md:p-10 pt-0">
                         <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
                             <aside className="md:col-span-4 lg:col-span-3 -ml-2 hidden md:block">
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
                                        <h2 className="font-headline text-3xl font-bold mb-4">A Farewell to the Flesh</h2>
                                        <div className="space-y-4 text-foreground/80 prose max-w-none">
                                            <p>Carnival, celebrated with explosive joy in Brazil and many other Catholic countries, is an annual festival that marks the beginning of Lent. The name is thought to derive from the Latin 'carne vale', which means 'farewell to meat', signifying a final period of feasting and revelry before the 40 days of fasting and penitence that precede Easter. While celebrated worldwide, the Carnival in Rio de Janeiro, Brazil, is considered the biggest and most famous, a spectacular explosion of music, dance, and color.</p>
                                            <p>It's a time when the entire country comes to a standstill, and cities erupt into massive street parties ('blocos') and parades. The festival is a vibrant showcase of Brazilian culture, especially the infectious rhythms of Samba music.</p>
                                        </div>
                                    </section>
                                     <section id="traditions" className="scroll-mt-20">
                                        <h2 className="font-headline text-3xl font-bold mb-4">The Sambadrome Parades</h2>
                                        <div className="space-y-6">
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle>A Competition of a Lifetime</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="text-foreground/80">The highlight of the Rio Carnival is the official Samba Parade at the Sambadrome. Here, the city's top samba schools compete for the championship title in a dazzling display of artistry and talent. Each school presents a different theme, which is brought to life through elaborate floats, thousands of dancers in spectacular, feathered costumes, and a powerful "bateria" (percussion ensemble). It's a breathtaking, once-in-a-lifetime spectacle that draws millions of spectators from around the globe to witness the vibrant heart and soul of Brazilian culture.</p>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </section>
                               </article>
                               <ShareButtons title="Carnival" />
                            </main>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
