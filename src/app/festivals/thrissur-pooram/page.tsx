

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, Music } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Thrissur Pooram | Kerala's Grandest Festival | Utsavs",
  description: "Experience the magic of Thrissur Pooram, a grand temple festival in Kerala featuring caparisoned elephants, traditional music, and a dazzling fireworks display.",
  openGraph: {
    title: "Thrissur Pooram | Kerala's Grandest Festival | Utsavs",
    description: "Experience the magic of Thrissur Pooram, a grand temple festival in Kerala featuring caparisoned elephants, traditional music, and a dazzling fireworks display.",
    images: [{ url: "https://i.postimg.cc/QCHNCm16/thrissur-pooram.avif", width: 1200, height: 630, alt: "Thrissur Pooram Elephants" }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Thrissur Pooram | Kerala's Grandest Festival | Utsavs",
    description: "Experience the magic of Thrissur Pooram, a grand temple festival in Kerala featuring caparisoned elephants, traditional music, and a dazzling fireworks display.",
    images: ["https://i.postimg.cc/QCHNCm16/thrissur-pooram.avif"],
  },
};


const relatedContent: RelatedItem[] = [
    {
        slug: "onam",
        title: "Onam Festival Guide",
        image: "https://i.postimg.cc/0564g0S7/nandu-menon-h-GHldb-Cg-YDA-unsplash.jpg",
        type: "Festival",
        link: "/festivals/onam",
        hint: "onam feast"
    },
    {
        slug: "vishu",
        title: "Vishu",
        image: "https://i.postimg.cc/7PdPNkMT/vishu-celebration.png",
        type: "Festival",
        link: "/festivals/vishu",
        hint: "vishu kani"
    },
    {
        slug: "thaipusam",
        title: "Thaipusam",
        image: "https://i.postimg.cc/4y7fTLZd/thaipusam.webp",
        type: "Festival",
        link: "/festivals/thaipusam",
        hint: "kavadi"
    }
];

export default function ThrissurPooramPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-yellow-500/10">
                 <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/QCHNCm16/thrissur-pooram.avif" alt="Thrissur Pooram" layout="fill" objectFit="cover" data-ai-hint="kerala temple festival" />
                </div>
                <div className="relative text-center z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-yellow-900 drop-shadow-lg">Thrissur Pooram</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-yellow-800/90 drop-shadow-md">Kerala's Spectacle of Elephants and Percussion</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Music className="w-4 h-4 mr-2" />The Spectacle</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Mother of all Poorams</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Thrissur Pooram is the most spectacular and grandest of all temple festivals in Kerala. Held annually at the Vadakkunnathan Temple in Thrissur, this festival is a vibrant explosion of sight and sound, attracting a massive audience of locals and tourists. It's a day-long event that showcases the rich cultural and spiritual essence of Kerala in all its glory.</p>
                                    <p>The festival is essentially a friendly competition between two major temples in Thrissur – Paramekkavu and Thiruvambadi. Both temples compete to put on the most elaborate and impressive display, which is what makes the festival so magnificent.</p>
                                </div>
                            </TabsContent>
                            
                             <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Highlights of Thrissur Pooram</h2>
                                <div className="space-y-6">
                                    <ul className="space-y-4 pl-4 text-foreground/80">
                                        <li className="flex items-start">
                                            <Sparkles className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                            <div>
                                                <h4 className="font-bold">Caparisoned Elephants</h4>
                                                <p>The most iconic image of the festival is the procession of majestic, richly caparisoned elephants. Each temple presents a row of 15 elephants, all adorned with golden head-dresses ('nettipattam'), decorative bells, and ornaments.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <Sparkles className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                            <div>
                                                <h4 className="font-bold">Kudamattom</h4>
                                                <p>A highlight of the festival is the 'Kudamattom' ceremony, a rhythmic and colourful changing of sequined umbrellas held atop the elephants.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <Sparkles className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                            <div>
                                                <h4 className="font-bold">Panchavadyam</h4>
                                                <p>The air is filled with the powerful and soul-stirring rhythm of the 'Panchavadyam', a traditional orchestra of five instruments. The 'Ilanjithara Melam', a performance by over 250 artists, is another major musical attraction.</p>
                                            </div>
                                        </li>
                                         <li className="flex items-start">
                                            <Sparkles className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                            <div>
                                                <h4 className="font-bold">Fireworks Display</h4>
                                                <p>The festival culminates in a spectacular and dazzling fireworks display that lights up the night sky.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Thrissur Pooram" />
                        <RelatedContent items={relatedContent} />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
