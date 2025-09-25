
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote, CheckCircle, Utensils } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function VishuPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-yellow-500/10">
                <div className="absolute inset-0 z-0 opacity-30">
                    <Image src="https://i.postimg.cc/7PdPNkMT/vishu-celebration.png" alt="Vishu Kani" layout="fill" objectFit="cover" data-ai-hint="vishu kani" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-yellow-900 drop-shadow-lg">Vishu</h1>
                    <p className="text-xl md:text-2xl mt-4 text-yellow-800/90 drop-shadow-md">Kerala's Astronomical New Year</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Traditions</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">Auspicious Sights</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Vishu is the traditional astronomical New Year festival celebrated with quiet devotion and joyous anticipation in the South Indian state of Kerala, and by Keralites worldwide. It falls on the first day of the month of Medam in the Malayalam calendar, which usually corresponds to mid-April. This day marks the sun's transition into the first zodiac sign, Aries, and is considered a time of great auspiciousness. Unlike many other New Year festivals that are marked by boisterous public celebrations, Vishu is a more family-oriented festival centered around the profound belief that the fortune and prosperity of the coming year depend on the first thing one sees on Vishu morning.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Key Rituals</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Vishukkani</h4>
                                            <p className="text-foreground/80">The most important ritual of the festival is the 'Vishukkani', which literally means "the first thing seen on Vishu". This is a beautiful, elaborate arrangement of auspicious items, meticulously prepared by the matriarch of the family on the eve of Vishu. A gleaming brass vessel ('uruli') is filled with raw rice, fresh fruits and vegetables (like golden cucumber, jackfruit, and mangoes), betel leaves, areca nuts, a holy text, a mirror, gold ornaments, and fresh 'konna' flowers (Cassia fistula), which bloom with golden-yellow flowers only at this time of year. This arrangement, placed before an idol of Lord Krishna, is the first sight for every family member on Vishu morning, who are led from their beds with their eyes closed to behold this symbol of prosperity.</p>
                                        </div>
                                    </li>
                                     <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Vishu Kaineettam</h4>
                                            <p className="text-foreground/80">This is the cherished tradition of elders giving money, usually in the form of coins, to the younger members of the family. This act is a symbol of sharing wealth and bestowing blessings for a year filled with prosperity.</p>
                                        </div>
                                    </li>
                                     <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Vishu Sadya</h4>
                                            <p className="text-foreground/80">A grand vegetarian feast, similar to the Onam Sadya, is prepared and enjoyed by the family. The Sadya features a delightful balance of all flavors, symbolizing the varied experiences of life.</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Year of Prosperity</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Hope and Renewal</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Vishu is a festival that celebrates hope and the promise of a prosperous and fulfilling new year. The ritual of Vishukkani symbolizes the collective desire to see good and auspicious things throughout the coming year, setting a positive and hopeful tone for new beginnings. The bursting of firecrackers ('Vishupadakkam') is also a major part of the celebration, symbolizing the dispelling of evil spirits and the triumphant arrival of a new dawn.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Vishu" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
