
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function HarbinIceFestivalPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-blue-300/20">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image src="https://i.postimg.cc/Xvs535ZK/Harbin-Ice-and-Snow-Festival.webp" alt="Harbin Ice and Snow Festival" layout="fill" objectFit="cover" data-ai-hint="ice sculptures" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-blue-900 drop-shadow-lg">Harbin Ice and Snow Festival</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-blue-800/90 drop-shadow-md">A Winter Wonderland of Art</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Attractions</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">The World's Largest Ice City</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>The Harbin International Ice and Snow Festival, held in Harbin, China, is the largest and most spectacular festival of its kind in the world. Officially starting in early January and lasting for over a month, this festival transforms the city into a breathtaking, frozen wonderland. Harbin, located in Northeast China, experiences frigid Siberian winters, creating the perfect conditions for carving intricate sculptures from ice and snow.</p>
                                    <p>The festival showcases the incredible artistry of sculptors from around the world. They create everything from massive, life-sized buildings and monuments to delicate, intricate sculptures of animals and mythical figures. At night, the sculptures are illuminated with multi-colored lights, turning the entire area into a magical, glowing city that attracts millions of visitors each year.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Two Main Exhibition Areas</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>The festival is primarily held in two main areas. The 'Ice and Snow World' is a massive park featuring gigantic ice buildings, replicas of famous landmarks, and ice slides, all carved from blocks of ice taken from the nearby Songhua River. At night, this area becomes a vibrant, neon-lit ice city.</p>
                                   <p>The second area, 'Sun Island', is a recreational park that hosts the Snow Sculpture Art Expo. Here, the focus is on enormous and incredibly detailed sculptures made purely from snow. Beyond the sculptures, the festival also includes activities like ice skating, ice sailing, and even winter swimming in the frozen river, showcasing a celebration of winter sports and culture.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Celebration of Winter and Art</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Global Artistry</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The Harbin Ice and Snow Festival has grown from a local tradition into a major international event. It is a testament to human creativity and artistry, showing how the harshness of winter can be transformed into something of immense beauty and wonder. The festival is a major driver of tourism and has placed Harbin on the world map as a premier winter destination. It is a celebration of art, culture, and the unique beauty of the winter season.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Harbin Ice and Snow Festival" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
