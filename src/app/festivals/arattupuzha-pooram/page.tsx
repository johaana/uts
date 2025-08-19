
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
        value: "overview",
        title: "Overview",
        icon: BookOpen,
        content: (
            <>
                <h2 className="font-headline text-3xl font-bold mb-4">An Ancient Gathering of Deities</h2>
                <div className="space-y-4 text-foreground/80 prose max-w-none">
                    <p>Long before the now-famous Thrissur Pooram, there was Arattupuzha Pooram, the oldest and most magnificent temple festival in Kerala. With a history stretching back over 1,400 years, this grand spectacle is rightfully called 'Devamela'—an assembly of the gods. The festival is held at the Sree Sastha Temple in Arattupuzha and is the culmination of a week-long celebration. It is believed that on the final day of the festival, 108 deities from various temples in the region gather to pay their respects to the presiding deity, Lord Ayyappan.</p>
                    <p>This festival is a breathtaking display of Keralan temple culture, a vibrant testament to the region's deep-rooted traditions. It's a time when the entire village comes alive with devotion, music, and the pageantry of ancient rituals.</p>
                </div>
            </>
        )
    },
    {
        value: "traditions",
        title: "The Divine Assembly",
        icon: Sparkles,
        content: (
            <>
                <h2 className="font-headline text-3xl font-bold mb-4">Elephants, Percussion, and Rituals</h2>
                <div className="space-y-4 text-foreground/80 prose max-w-none">
                   <p>The final day of the festival is a sensory explosion. The main event features a grand procession of nearly 70 majestically caparisoned elephants, each representing a different deity from a neighboring temple. The air is filled with the powerful and hypnotic rhythm of the 'panchavadyam', a traditional temple orchestra of five instruments. The highlight is the 'Arattu' ceremony, the ceremonial bath of the deities in the river, performed with great pomp and devotion. The night is lit up by a spectacular display of fireworks, marking a grand finale to this divine gathering.</p>
                </div>
            </>
        )
    },
    {
        value: "significance",
        title: "Significance",
        icon: MessageSquareQuote,
        content: (
            <>
                <h2 className="font-headline text-3xl font-bold mb-4">A Living Heritage</h2>
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Preserving Ancient Traditions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-foreground/80">Arattupuzha Pooram is a vital part of Kerala's living heritage. Unlike many festivals that have been modernized, it retains its ancient rituals and traditional purity. It offers a rare and authentic glimpse into the state's rich temple culture and the deep devotion of its people. The festival is a powerful symbol of community and faith, bringing together people from all walks of life in a shared celebration of their cultural identity.</p>
                        </CardContent>
                    </Card>
                </div>
            </>
        )
    }
];

export default function ArattupuzhaPooramPage() {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-red-800/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/sx9mBPzh/arattupuzha-pooram.webp" alt="Arattupuzha Pooram" layout="fill" objectFit="cover" data-ai-hint="kerala temple festival" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-7xl font-bold text-red-900 drop-shadow-lg">Arattupuzha Pooram</h1>
                    <p className="text-lg md:text-xl mt-4 text-red-800/90 drop-shadow-md">The Mother of all Pooram Festivals</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        {isDesktop ? (
                            <Tabs defaultValue="overview">
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
                            <Accordion type="single" collapsible defaultValue="overview" className="w-full">
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
                        <ShareButtons title="Arattupuzha Pooram" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
