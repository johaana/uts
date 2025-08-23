
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function IntiRaymiPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-yellow-600/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/Y2yDxX37/Inti-Raymi-Festival-of-the-Sun.jpg" alt="Inti Raymi" layout="fill" objectFit="cover" data-ai-hint="inca festival" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-yellow-900 drop-shadow-lg">Inti Raymi</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-yellow-800/90 drop-shadow-md">The Incan Festival of the Sun</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />The Ceremony</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">Honoring the Sun God</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Inti Raymi, which means "Festival of the Sun" in the Quechua language, is a spectacular and ancient Incan religious ceremony. It is celebrated in Cusco, Peru, every year on June 24th, coinciding with the winter solstice in the Southern Hemisphere. The festival honors the god Inti, the most revered deity in the Inca Empire, who was believed to be the ancestor of the Incas and the source of all life.</p>
                                    <p>Originally a nine-day celebration with elaborate processions, animal sacrifices, and dances, Inti Raymi was banned by the Spanish conquistadors in the 16th century. However, it was revived in the 20th century as a grand theatrical reenactment based on historical chronicles, and it has since become the second-largest festival in South America.</p>
                                </div>
                            </TabsContent>
                            
                             <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Grand Reenactment</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>From Qorikancha to Sacsayhuamán</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The modern celebration is a full-day event that unfolds across three historic locations. It begins at the Qorikancha (the ancient Temple of the Sun), moves to the Plaza de Armas (the city's main square), and culminates in a grand ceremony at the fortress of Sacsayhuamán. Hundreds of actors in vibrant, historically accurate costumes representing the Sapa Inca (the emperor), his queen, priests, and nobles, perform rituals, give speeches in Quechua, and conduct a symbolic llama sacrifice, all to the sound of traditional music. It's a powerful and colorful celebration of Incan heritage that brings the ancient empire to life.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Inti Raymi" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
