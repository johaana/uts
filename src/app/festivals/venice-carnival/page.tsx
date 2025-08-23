
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Venice Carnival 2025: Dates, Masks & Ball Guide 🎭",
  description: "Plan your trip to the Venice Carnival 2025! Find dates, learn about the history of Venetian masks, and get tips for attending the spectacular balls.",
};

export default function VeniceCarnivalPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-blue-900/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/QCVN56qC/Venice-Carnival-Italy.jpg" alt="Venice Carnival" layout="fill" objectFit="cover" data-ai-hint="venetian masks" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-blue-900 drop-shadow-lg">Venice Carnival</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-blue-800/90 drop-shadow-md">A World of Masks and Mystery</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Masks & Balls</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Farewell to Indulgence</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>The Carnival of Venice is an ancient and enchanting festival held annually in Venice, Italy. Like its more boisterous counterpart in Rio, it is a "farewell to meat" celebration before the 40 days of Lent. The Venice Carnival is world-famous for its elaborate and beautiful masks, which are a central feature of the festivities. The tradition of wearing masks allowed Venetians to temporarily abandon their social class and identity, enabling them to mingle freely without the constraints of social conventions.</p>
                                </div>
                            </TabsContent>
                            
                             <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">An Elegant Spectacle</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>A Tradition of Anonymity</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The carnival is famous for its grand masquerade balls, both public and private, where participants don elaborate period costumes and hauntingly beautiful masks. The streets and squares of Venice are filled with costumed characters, creating a magical atmosphere that feels like stepping back in time. Key events include the 'Volo dell'Angelo' (Flight of the Angel) in St. Mark's Square and the 'Festa delle Marie', a parade that recalls the historical tribute of Venetian Doge to twelve beautiful Venetian girls. It's an elegant, mysterious, and unforgettable cultural experience.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Venice Carnival" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
