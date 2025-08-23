
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function BunyaDreamingPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-green-800/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/RVkPkNyb/The-Bunya-Dreaming-Festival-Australia-1.png" alt="Bunya Dreaming Festival" layout="fill" objectFit="cover" data-ai-hint="aboriginal festival" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-green-900 drop-shadow-lg">Bunya Dreaming</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-green-800/90 drop-shadow-md">A Celebration of First Peoples' Culture</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">An Ancient Gathering Revived</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>The Bunya Dreaming is a deeply significant festival for the First Peoples of Australia, particularly in South-East Queensland. It is a modern revival of an ancient tradition: a major gathering of various Aboriginal groups held every three years to coincide with the bumper harvest of the Bunya Pine tree. These majestic trees produce a large, nutritious nut that was a staple food source for generations. The festival is a powerful affirmation of Indigenous culture, a time for feasting, ceremony, law-making, and strengthening social and spiritual connections.</p>
                                </div>
                            </TabsContent>
                            
                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Celebration of Culture and Connection</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Sharing Stories</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Held on the Sunshine Coast, Bunya Dreaming is an open invitation to all people, Indigenous and non-Indigenous, to come together and experience the richness and resilience of Australia's First Nations' culture. It's a vibrant celebration of music, dance, storytelling, and art, centered around the sacred Bunya tree, fostering understanding and reconciliation.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Bunya Dreaming Festival" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
