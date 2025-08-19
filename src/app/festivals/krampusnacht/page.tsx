
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { useMediaQuery } from "@/hooks/use-media-query";

const pageContent = [
    {
        value: "story",
        title: "The Story",
        icon: BookOpen,
        content: (
            <>
                <h2 className="font-headline text-3xl font-bold mb-4">The Christmas Devil</h2>
                <div className="space-y-4 text-foreground/80 prose max-w-none">
                    <p>In the festive season of Advent, as sweet images of Saint Nicholas and his kindly gifts fill the air in many parts of the world, a much darker, more menacing figure emerges from the shadows of Alpine folklore. This is the Krampus, a horned, anthropomorphic creature who is the fearsome companion and dark counterpart to the gentle St. Nicholas. While St. Nicholas rewards well-behaved children, Krampus's job is to punish the naughty ones. His name is derived from the German word 'krampen', meaning claw, and he is a terrifying figure straight out of a nightmare.</p>
                    <p>Krampusnacht, or "Krampus Night," is celebrated on the eve of St. Nicholas's Day, December 5th. It is a night when the devilish beast is said to roam the streets in search of misbehaving children, a pre-Christian tradition that has survived for centuries in Austria, Germany, Hungary, and other parts of Central Europe.</p>
                </div>
            </>
        )
    },
    {
        value: "ritual",
        title: "The Ritual",
        icon: Sparkles,
        content: (
            <>
                <h2 className="font-headline text-3xl font-bold mb-4">The Krampus Run</h2>
                <div className="space-y-4 text-foreground/80 prose max-w-none">
                   <p>The central event of Krampusnacht is the 'Krampuslauf' or Krampus Run. This is not a gentle parade. Young men dress up in elaborate and genuinely frightening Krampus costumes, complete with carved wooden masks with menacing horns, suits made of sheep or goat skin, and large, clanking cowbells tied to their waists. Wielding bundles of birch branches, they charge through the streets, creating a chaotic and intimidating spectacle. They playfully swat at onlookers, their bells ringing ominously, a terrifying and thrilling folk performance meant to chase away the darkness of winter and, of course, to scare children into being good for the coming year.</p>
                </div>
            </>
        )
    },
    {
        value: "meaning",
        title: "The Meaning",
        icon: MessageSquareQuote,
        content: (
            <>
                <h2 className="font-headline text-3xl font-bold mb-4">A Pagan Past</h2>
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Confronting the Darkness</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-foreground/80">Krampusnacht is a fascinating survival of pre-Christian pagan traditions. The figure of Krampus is believed to be a representation of an ancient horned god of the witches. The festival represents a more primal way of dealing with the darkness and cold of the long winter nights—not just with light and cheer, but by confronting the darkness head-on, personifying it, and then chasing it away. It's a folk tradition that adds a layer of delightful terror to the Christmas season, a reminder of the complex and ancient roots of our modern holidays.</p>
                        </CardContent>
                    </Card>
                </div>
            </>
        )
    }
];

export default function KrampusnachtPage() {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-gray-800/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/5yrkPw0H/Krampusnacht.avif" alt="Krampusnacht" layout="fill" objectFit="cover" data-ai-hint="krampus" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 drop-shadow-lg">Krampusnacht</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-gray-800/90 drop-shadow-md">The Night of the Christmas Demon</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        {isDesktop ? (
                            <Tabs defaultValue="story">
                                <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-6 h-auto">
                                    {pageContent.map((tab) => (
                                        <TabsTrigger key={tab.value} value={tab.value} className="py-2">
                                            <tab.icon className="w-4 h-4 mr-2" />
                                            {tab.title}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>
                                {pageContent.map((tab) => (
                                    <TabsContent key={tab.value} value={tab.value}>
                                        {tab.content}
                                    </TabsContent>
                                ))}
                            </Tabs>
                        ) : (
                            <Accordion type="single" collapsible defaultValue="story" className="w-full">
                                {pageContent.map((item) => (
                                    <AccordionItem key={item.value} value={item.value}>
                                        <AccordionTrigger className="text-xl font-headline font-bold">
                                            <span className="flex items-center">
                                                <item.icon className="w-5 h-5 mr-3" />
                                                {item.title}
                                            </span>
                                        </AccordionTrigger>
                                        <AccordionContent className="pt-4">
                                            {item.content}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        )}
                        <ShareButtons title="Krampusnacht" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
