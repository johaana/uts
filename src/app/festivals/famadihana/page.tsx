
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
                <h2 className="font-headline text-3xl font-bold mb-4">A Celebration of Kinship</h2>
                <div className="space-y-4 text-foreground/80 prose max-w-none">
                    <p>Famadihana, or 'the turning of the bones', is a unique and deeply intimate funerary tradition of the Malagasy people in Madagascar. Unlike the somber mood of Western funerals, Famadihana is a joyous celebration, a time for the living to reconnect with their deceased loved ones in a very physical and celebratory way. This festival of kinship is held every five to seven years, bringing together extended families in a grand reunion that honors the ancestors and reinforces family bonds.</p>
                    <p>The practice is rooted in the belief that the spirits of the dead do not join the world of the ancestors until their bodies have completely decomposed. Famadihana is seen as a crucial step in this process, a way to help the spirits on their journey. It is also a time to show the deceased that they are not forgotten, to update them on family news, and to ask for their blessings.</p>
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
                <h2 className="font-headline text-3xl font-bold mb-4">Dancing with the Ancestors</h2>
                <div className="space-y-4 text-foreground/80 prose max-w-none">
                   <p>The ritual begins with the opening of the family crypt. The bodies of the ancestors are carefully exhumed and brought out into the open. The old burial shrouds are removed, and the remains are lovingly wrapped in new, fine silk shrouds. This is a moment of great emotion and intimacy.</p>
                   <p>What follows is a joyous celebration. Live music fills the air, and family members hoist the bodies onto their shoulders and dance with them. It's a surreal and powerful sight—a dance between the living and the dead. The atmosphere is festive, with feasting and drinking, as families share memories and stories. Before the sun sets, the bodies are returned to the tomb, along with gifts and money, to rest until the next celebration.</p>
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
                <h2 className="font-headline text-3xl font-bold mb-4">A Bridge Between Worlds</h2>
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Love Transcends Death</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-foreground/80">Famadihana is a profound expression of the Malagasy view of life, death, and kinship. It demonstrates a belief that the relationship with family members does not end with death. The festival is a powerful affirmation that love and memory can bridge the gap between the world of the living and the world of the ancestors. While controversial and often misunderstood by outsiders, for the communities that practice it, Famadihana is an essential and beautiful act of honoring their lineage and celebrating the enduring power of family.</p>
                        </CardContent>
                    </Card>
                </div>
            </>
        )
    }
];

export default function FamadihanaPage() {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-green-800/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/jq39drXs/Famadihana.jpg" alt="Famadihana Festival" layout="fill" objectFit="cover" data-ai-hint="turning of bones" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-green-900 drop-shadow-lg">Famadihana</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-green-800/90 drop-shadow-md">The Turning of the Bones</p>
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
                        <ShareButtons title="Famadihana" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
