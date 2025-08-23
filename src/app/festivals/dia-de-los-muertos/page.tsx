
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function DiaDeLosMuertosPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-orange-500/10">
                <div className="absolute inset-0 z-0 opacity-30">
                    <Image src="https://i.postimg.cc/05F4GWkS/Dia-de-los-Muertos-Day-of-the-Dead-3.avif" alt="Dia de los Muertos" layout="fill" objectFit="cover" data-ai-hint="day of the dead" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-orange-900 drop-shadow-lg">Día de los Muertos</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-orange-800/90 drop-shadow-md">The Day of the Dead</p>
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
                                <h2 className="font-headline text-3xl font-bold mb-4">A Joyful Celebration of Life and Memory</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Día de los Muertos, or the Day of the Dead, is a vibrant and deeply meaningful two-day festival celebrated throughout Mexico. Rather than being a somber occasion, it is a joyous and colorful celebration of life and a heartfelt remembrance of deceased loved ones. The festival is a beautiful blend of indigenous Aztec rituals and Catholicism, brought to the region by Spanish conquistadors. It is celebrated on November 1st (All Saints' Day), which honors deceased children, and November 2nd (All Souls' Day), which honors deceased adults.</p>
                                    <p>During this time, it is believed that the border between the spirit world and the living world dissolves. The souls of the dead awaken and return to the living world to feast, drink, dance, and listen to music with their loved ones. In turn, the living family members treat the deceased as honored guests, leaving their favorite foods and other offerings at ofrendas (altars) built in their honor.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Ofrendas, Skulls, and Marigolds</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>Central to the celebration is the 'ofrenda', a private altar built in homes and cemeteries. These are not for worshipping, but for welcoming the spirits back to the realm of the living. They are adorned with offerings of water, food (especially 'pan de muerto', a sweet bread), family photos, and candles. Bright orange marigolds ('cempasúchil') are used profusely, their petals scattered to create a path to guide the souls to their ofrendas.</p>
                                   <p>Another iconic symbol is the 'calavera', or skull. From sugar skulls decorated with colorful icing to poems and satirical obituaries, skulls are used to represent the deceased in a whimsical, rather than frightening, way. People also paint their faces to resemble skulls and don beautiful traditional costumes for parades and gatherings.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Living Connection</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Death is a Part of Life</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Día de los Muertos is a powerful affirmation of indigenous life and culture. It views death not as an end, but as a natural part of the human cycle. The festival is a time to celebrate the lives of the deceased and to maintain a living connection with them. It is a poignant, beautiful, and life-affirming festival that reminds everyone that our loved ones are never truly gone as long as they are remembered.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Día de los Muertos" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
