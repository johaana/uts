
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, Sparkles, MessageSquareQuote, Drama } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/use-media-query";

const relatedContent: RelatedItem[] = [
    {
        slug: "extreme-festivals-of-the-world",
        title: "Gods, Guts, and Glory: The World's Most Extreme Festivals",
        image: "https://i.postimg.cc/Hx8kz3vf/theemithi.jpg",
        type: "Blog",
        link: "/blog/extreme-festivals-of-the-world",
        hint: "fire walking"
    },
    {
        slug: "thaipusam",
        title: "The Burden of Faith: Unpacking Thaipusam",
        image: "https://i.postimg.cc/cJbJfPhR/thaipusam.webp",
        type: "Festival",
        link: "/festivals/thaipusam",
        hint: "kavadi"
    },
     {
        slug: "onam",
        title: "Onam",
        image: "https://i.postimg.cc/0564g0S7/nandu-menon-h-GHldb-Cg-YDA-unsplash.jpg",
        type: "Festival",
        link: "/festivals/onam",
        hint: "onam feast"
    }
];

const pageContent = [
    {
        value: "story",
        title: "The Story",
        icon: BookOpen,
        content: (
            <>
                <h2 className="font-headline text-3xl font-bold mb-4">A Living Link to the Divine</h2>
                <div className="space-y-4 text-foreground/80 prose max-w-none">
                    <p>Theyyam is not just a festival; it is a profound and ancient socio-religious ritual from the northern Malabar region of Kerala, where for a brief, sacred period, the lines between human and divine are completely erased. It is a vibrant and powerful tradition where mortal men, through elaborate costumes, hypnotic music, and intense rituals, transform into living conduits for the gods. Dating back centuries, this 'dance of the gods' is a cornerstone of village life, a time when the community seeks blessings, resolves disputes, and connects directly with the deities who govern their lives.</p>
                    <p>There are over 400 distinct forms of Theyyam, each with its own unique mythology, costume, and character, representing everyone from powerful goddesses and epic heroes to ancestral spirits and animal deities. It is a raw, visceral, and deeply personal form of worship, celebrated annually in village shrines ('kavus') between the months of December and April.</p>
                </div>
            </>
        )
    },
    {
        value: "ritual",
        title: "The Ritual",
        icon: Drama,
        content: (
            <>
                <h2 className="font-headline text-3xl font-bold mb-4">The Divine Transformation</h2>
                <div className="space-y-4 text-foreground/80 prose max-w-none">
                   <p>The transformation of the performer into a deity is a meticulous and sacred process. The artist, who usually belongs to a specific lower-caste community, undergoes weeks of spiritual preparation, including fasting and prayer. The makeup and costume are incredibly elaborate and symbolic. The face is painted with intricate designs using natural pigments, and the headgear ('mudi') can be toweringly large and complex.</p>
                   <p>As the ritual begins, the performer, accompanied by the hypnotic and thunderous rhythm of the 'chenda' (drum) and other traditional instruments, begins to dance. The dance starts slowly and builds in intensity until the performer enters a trance-like state, believed to be the moment the divine spirit possesses his body. At this point, he is no longer a man; he is the god. He speaks, moves, and acts as the deity, offering blessings, prophecies, and comfort to the devotees who approach him with awe and reverence. Some Theyyams even perform astonishing acts like walking on fire, showcasing the divine power they channel.</p>
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
                <h2 className="font-headline text-3xl font-bold mb-4">A Social and Spiritual Bridge</h2>
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Voice of the Voiceless</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-foreground/80">Theyyam holds a unique social significance. The fact that the performers are from the lower castes gives them a temporary but powerful social and spiritual authority. For a few days, a man from a marginalized community becomes a god, revered and worshipped by all, including those from the upper castes. This ritualistic inversion of the social hierarchy acts as a form of social justice and a powerful reminder of the inherent divinity in all people, regardless of their social standing. It is a living tradition that continues to be a vital spiritual and cultural force in Kerala.</p>
                        </CardContent>
                    </Card>
                </div>
            </>
        )
    }
];

export default function TheyyamPage() {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-red-800/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/HW7r9WfV/Theyyam.jpg" alt="Theyyam festival" layout="fill" objectFit="cover" data-ai-hint="theyyam dancer" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-red-900 drop-shadow-lg">Theyyam</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-red-800/90 drop-shadow-md">When Gods Walk the Earth in Kerala</p>
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
                        <ShareButtons title="Theyyam: When Gods Walk the Earth in Kerala" />
                        <RelatedContent items={relatedContent} />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}