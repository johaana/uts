
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Sparkles } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

const pageSections = [
    { id: "overview", title: "Overview", icon: BookOpen },
    { id: "traditions", title: "Traditions", icon: Sparkles },
];


export function OktoberfestPageContent() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-12">
                <Card className="mb-12 overflow-hidden">
                     <Image src="https://i.postimg.cc/g0q0PLJz/Oktoberfest-Munich.jpg" alt="Oktoberfest" width={1200} height={400} className="w-full h-48 md:h-64 object-cover" data-ai-hint="beer festival" />
                    <div className="p-6 md:p-10 text-center">
                        <h1 className="font-headline text-4xl md:text-7xl font-bold text-primary">Oktoberfest</h1>
                        <p className="text-xl md:text-2xl mt-2 text-muted-foreground">The World's Largest Beer Festival</p>
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
                                        <h2 className="font-headline text-3xl font-bold mb-4">A Royal Wedding Celebration</h2>
                                        <div className="space-y-4 text-foreground/80 prose max-w-none">
                                            <p>Oktoberfest, the world's largest 'Volksfest' (beer festival and traveling funfair), has its roots in a royal wedding. In 1810, Crown Prince Ludwig of Bavaria married Princess Therese of Saxony-Hildburghausen. The citizens of Munich were invited to attend the festivities held on the fields in front of the city gates. These fields were named 'Theresienwiese' ("Theresa's Meadow") in honor of the Crown Princess, a name they still bear today, locally abbreviated to 'Wiesn'. The celebration concluded with horse races, and the decision to repeat the races the following year gave rise to the tradition of Oktoberfest.</p>
                                        </div>
                                    </section>
                                     <section id="traditions" className="scroll-mt-20">
                                        <h2 className="font-headline text-3xl font-bold mb-4">Beer Tents, Parades, and Pretzels</h2>
                                        <div className="space-y-6">
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle>Gemütlichkeit</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                     <p className="text-foreground/80">Today, the festival is a 16- to 18-day event running from late September to the first Sunday in October. It kicks off with a grand parade of the brewery wagons and tent landlords, followed by the ceremonial tapping of the first beer keg by the Mayor of Munich, who declares "O'zapft is!" ("It's tapped!"). The heart of the festival lies in the massive beer tents, each run by a different Munich brewery, where millions of liters of specially brewed Oktoberfest beer are served in one-liter 'Maß' mugs. The atmosphere is filled with traditional Bavarian music, singing, and dancing. Visitors also enjoy a vast funfair with amusement rides and games, and indulge in traditional foods like pretzels, sausages, and roast chicken. Oktoberfest is an essential part of Bavarian culture, a celebration of 'Gemütlichkeit'—a German word that conveys a feeling of warmth, friendliness, and good cheer.</p>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </section>
                               </article>
                               <ShareButtons title="Oktoberfest" />
                            </main>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
