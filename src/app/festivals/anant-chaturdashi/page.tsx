
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
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:order-2 md:w-1/3">
                        <Image src="https://i.postimg.cc/RVSjWnhp/anant-chaturdashi.jpg" alt="Ganesh Visarjan" width={400} height={400} className="rounded-lg shadow-lg w-full" data-ai-hint="ganesh visarjan"/>
                    </div>
                    <div className="md:order-1 md:w-2/3">
                        <h2 className="font-headline text-3xl font-bold mb-4">A Day of Visarjan</h2>
                        <div className="space-y-4 text-foreground/80 prose max-w-none">
                            <p>Anant Chaturdashi, which falls on the 14th day of the bright half of the Bhadrapada month, is a significant day in the Hindu calendar. It is most famously known as the final day of the 10-day long Ganesh Chaturthi festival. On this day, the idols of Lord Ganesha that were installed in homes and public pandals are taken in grand processions for immersion, or 'visarjan', in a nearby body of water.</p>
                            <p>The streets come alive with music, dance, and chants of "Ganpati Bappa Morya, Pudhchya Varshi Lavkar Ya" (O Lord Ganesha, come again soon next year). It's a vibrant and emotional farewell to the beloved deity, symbolizing his return to his celestial abode.</p>
                        </div>
                    </div>
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
                <h2 className="font-headline text-3xl font-bold mb-4">Worship of Lord Vishnu</h2>
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>The Endless Lord</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-foreground/80">The day is also dedicated to the worship of Lord Vishnu in his 'Ananta' (endless or eternal) form. Devotees observe a fast and tie a sacred thread called 'Ananta Sutra' on their wrists, chanting prayers to Lord Vishnu for protection and prosperity.</p>
                        </CardContent>
                    </Card>
                </div>
            </>
        )
    }
];

export default function AnantChaturdashiPage() {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-primary shadow-lg">Anant Chaturdashi</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-primary/90 shadow-md">The Grand Finale of Ganesh Chaturthi</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        {isDesktop ? (
                            <Tabs defaultValue="overview">
                                <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-6 h-auto">
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
                        <ShareButtons title="Anant Chaturdashi" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
