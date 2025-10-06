

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function ChristmasEvePage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-red-700/10">
                 <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/Gpnmy6SQ/christmas-eve.jpg" alt="Christmas Eve" layout="fill" objectFit="cover" data-ai-hint="christmas church" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-red-900 drop-shadow-lg">Christmas Eve</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-red-800/90 drop-shadow-md">The Night Before Christmas</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Traditions</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Night of Anticipation</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Christmas Eve, the evening of December 24th, is a time of immense anticipation and spiritual significance for Christians worldwide. It marks the culmination of the Advent season and the prelude to the celebration of the birth of Jesus Christ. The atmosphere is filled with a unique sense of peace, warmth, and quiet joy as families and communities prepare to welcome Christmas Day.</p>
                                </div>
                            </TabsContent>
                            
                             <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Midnight Mass and Family Gatherings</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Welcoming the Savior</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">One of the most important traditions of Christmas Eve is attending Midnight Mass, a special church service that celebrates the moment of Jesus's birth. Homes are decorated with Christmas trees and nativity scenes, and families often gather for a special meal. It's a time for reading the Christmas story from the Bible, singing carols, and exchanging gifts, all in celebration of the love and hope that the birth of Christ represents.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Christmas Eve" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
