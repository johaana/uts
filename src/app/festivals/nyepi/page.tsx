
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function NyepiPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-gray-800/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/T3Q13KWH/nyepi.webp" alt="Ogoh-ogoh parade" layout="fill" objectFit="cover" data-ai-hint="ogoh-ogoh statue" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 drop-shadow-lg">Nyepi</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-gray-800/90 drop-shadow-md">The Balinese Day of Silence</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />The Rituals</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Day of Absolute Quiet</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Nyepi is a truly unique Hindu festival celebrated in Bali, marking the Isakawarsa (Saka) New Year. It is a day of absolute silence, fasting, and meditation. For 24 hours, from 6 a.m. to 6 a.m. the next day, the entire island of Bali comes to a complete standstill. All traffic stops, the airport closes, and people stay within their homes. There are no fires, no work, no entertainment, and no travel. The goal is to create an atmosphere of total silence to fool the evil spirits into thinking the island is deserted, so they will leave it alone for another year.</p>
                                </div>
                            </TabsContent>
                            
                             <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Ogoh-Ogoh Parade</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Chasing Away the Demons</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The night before Nyepi is anything but silent. It features the Ngrupuk Parade, where giant, demonic effigies called 'Ogoh-ogoh' are paraded through the streets with loud music and torches. These effigies, often depicting mythological evil spirits, are then burned in a ceremony to symbolize the purification of the environment from all spiritual pollutants. This noisy, chaotic celebration is a stark contrast to the profound silence that follows, making Nyepi a powerful spiritual experience of cleansing and renewal.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Nyepi" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
