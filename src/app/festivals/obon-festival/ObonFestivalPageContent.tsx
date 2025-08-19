
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/use-media-query";

const pageContent = [
    {
        value: "story",
        title: "The Story",
        icon: BookOpen,
        content: (
            <>
                <h2 className="font-headline text-3xl font-bold mb-4">A Disciple's Love</h2>
                <div className="space-y-4 text-foreground/80 prose max-w-none">
                    <p>Obon, also known simply as Bon, is a traditional Japanese Buddhist festival that honors the spirits of one's ancestors. This serene and beautiful custom, which has evolved into a family reunion holiday, is celebrated for three days, typically in mid-August. The festival is based on the story of Maha Maudgalyayana (Mokuren in Japanese), a disciple of the Buddha who used his supernatural powers to see the spirit of his deceased mother.</p>
                    <p>To his sorrow, he discovered she had fallen into the Realm of Hungry Ghosts and was suffering greatly. He went to the Buddha for advice on how to release her from this realm. The Buddha instructed him to make offerings to the many Buddhist monks who had just completed their summer retreat. He did so, and his mother was released. The story is a powerful reminder of filial piety and the belief that the living have a duty to care for the spirits of the dead.</p>
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
                <h2 className="font-headline text-3xl font-bold mb-4">Welcoming the Spirits Home</h2>
                <div className="space-y-4 text-foreground/80 prose max-w-none">
                   <p>During Obon, it is believed that the spirits of ancestors return to this world to visit their relatives. The celebrations begin with 'Mukaebi' (welcoming fires), where small fires are lit at the entrance of houses to guide the spirits home. Families clean their homes and place food and flower offerings on home altars ('butsudan') or special altars for the occasion ('shoryodana').</p>
                   <p>A central part of Obon is the 'Bon Odori' or Bon dance. This traditional folk dance is performed in parks, temples, and public spaces, and welcomes the spirits of the dead. The style of dance varies from region to region, but it is typically performed in a circle around a high wooden scaffold called a 'yagura'. Everyone is invited to join in the dance.</p>
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
                <h2 className="font-headline text-3xl font-bold mb-4">A Gentle Farewell</h2>
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Toro Nagashi</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <div className="my-4 flex justify-center">
                                <Image src="https://i.postimg.cc/PJJRz6ts/obon2.webp" alt="Toro Nagashi" width={500} height={300} className="rounded-lg shadow-lg" data-ai-hint="floating lanterns"/>
                            </div>
                            <p className="text-foreground/80">The festival culminates with 'Okuribi' (sending-off fires). The most beautiful and poignant of these rituals is the 'Toro Nagashi', the floating of lanterns. On the last evening, paper lanterns are illuminated with candles and floated down rivers, into lakes, or out to sea. This breathtakingly beautiful spectacle symbolizes the guiding of the ancestral spirits back to the spirit world. It's a gentle, serene, and moving farewell, a promise that they will be welcomed back again the following year.</p>
                        </CardContent>
                    </Card>
                </div>
            </>
        )
    }
];

export function ObonFestivalPageContent() {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    return (
        <>
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
        </>
    );
}
