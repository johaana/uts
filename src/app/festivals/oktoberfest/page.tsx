
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Oktoberfest 2025: Your Guide to Germany's Biggest Beer Festival 🍺",
  description: "Prost! Get the Oktoberfest 2025 dates, find out about the traditions, and what to expect at the world's largest Volksfest in Munich, Germany.",
};

export default function OktoberfestPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-blue-500/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/g0q0PLJz/Oktoberfest-Munich.jpg" alt="Oktoberfest" layout="fill" objectFit="cover" data-ai-hint="beer festival" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-blue-900 drop-shadow-lg">Oktoberfest</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-blue-800/90 drop-shadow-md">The World's Largest Beer Festival</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Traditions</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Royal Wedding Celebration</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Oktoberfest, the world's largest 'Volksfest' (beer festival and traveling funfair), has its roots in a royal wedding. In 1810, Crown Prince Ludwig of Bavaria married Princess Therese of Saxony-Hildburghausen. The citizens of Munich were invited to attend the festivities held on the fields in front of the city gates. These fields were named 'Theresienwiese' ("Theresa's Meadow") in honor of the Crown Princess, a name they still bear today, locally abbreviated to 'Wiesn'. The celebration concluded with horse races, and the decision to repeat the races the following year gave rise to the tradition of Oktoberfest.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Beer Tents, Parades, and Pretzels</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>Today, the festival is a 16- to 18-day event running from late September to the first Sunday in October. It kicks off with a grand parade of the brewery wagons and tent landlords, followed by the ceremonial tapping of the first beer keg by the Mayor of Munich, who declares "O'zapft is!" ("It's tapped!").</p>
                                   <p>The heart of the festival lies in the massive beer tents, each run by a different Munich brewery, where millions of liters of specially brewed Oktoberfest beer are served in one-liter 'Maß' mugs. The atmosphere is filled with traditional Bavarian music, singing, and dancing. Visitors also enjoy a vast funfair with amusement rides and games, and indulge in traditional foods like pretzels, sausages, and roast chicken.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Celebration of Bavarian Culture</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Gemütlichkeit</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Oktoberfest is an essential part of Bavarian culture, a celebration of 'Gemütlichkeit'—a German word that conveys a feeling of warmth, friendliness, and good cheer. It's a time for locals and visitors from all over the world to come together, dressed in traditional 'dirndls' and 'lederhosen', to celebrate life with beer, food, and music. The festival is a major tourist attraction and a significant contributor to the local economy, showcasing the best of Bavarian hospitality and tradition.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Oktoberfest" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
