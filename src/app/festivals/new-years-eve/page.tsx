
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function NewYearsEvePage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-gray-800/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/zDxvctVz/31st-dec.avif" alt="New Year's Eve" layout="fill" objectFit="cover" data-ai-hint="new year fireworks" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 drop-shadow-lg">New Year's Eve</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-gray-800/90 drop-shadow-md">The Final Countdown</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Celebrations</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Global Celebration of Beginnings</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>New Year's Eve, celebrated on December 31st, is the last day of the Gregorian calendar year. It is a globally recognized occasion for people to gather with friends and family to bid farewell to the old year and welcome the new one. The night is filled with anticipation, reflection, and festive cheer, culminating in the stroke of midnight that ushers in New Year's Day.</p>
                                    <p>It's a time for parties, social gatherings, and spectacular public celebrations. Major cities around the world host massive events with concerts, fireworks, and countdowns, uniting millions in a shared moment of joy and hope for the year ahead.</p>
                                </div>
                            </TabsContent>
                            
                             <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Fireworks and Resolutions</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Countdown to Midnight</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The most iconic tradition is the countdown to midnight, followed by spectacular fireworks displays. It's also a common time for making New Year's resolutions—personal goals and promises for self-improvement in the coming year. Singing "Auld Lang Syne," a song about remembering old friends, is another cherished tradition in many English-speaking countries.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="New Year's Eve" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
