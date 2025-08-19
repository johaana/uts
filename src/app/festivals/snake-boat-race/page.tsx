

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote, Sailboat, Trophy } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const relatedContent: RelatedItem[] = [
    {
        slug: "snake-boat-race-festival-kerala",
        title: "Deep Dive: The Spirit of Vallam Kali",
        image: "https://i.postimg.cc/W3B4g40T/vallam-kali-2.jpg",
        type: "Blog",
        link: "/blog/snake-boat-race-festival-kerala",
        hint: "kerala boat race"
    },
    {
        slug: "onam",
        title: "Onam Festival Guide",
        image: "https://i.postimg.cc/0564g0S7/nandu-menon-h-GHldb-Cg-YDA-unsplash.jpg",
        type: "Festival",
        link: "/festivals/onam",
        hint: "onam feast"
    },
    {
        slug: "thrissur-pooram-keralas-grandest-festival",
        title: "Thrissur Pooram",
        image: "https://i.postimg.cc/j28kQ9WT/thrissur-puram-festival-2.jpg",
        type: "Blog",
        link: "/blog/thrissur-pooram-keralas-grandest-festival",
        hint: "kerala temple festival"
    }
];

export default function SnakeBoatRacePage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-blue-600/10">
                 <Image src="https://i.postimg.cc/T3yYqf7t/snake-boat-race.jpg" alt="Snake Boat Race" layout="fill" objectFit="cover" className="absolute inset-0 z-0 opacity-20" data-ai-hint="kerala boat race" />
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-blue-900 drop-shadow-lg">Snake Boat Race (Vallam Kali)</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-blue-800/90 drop-shadow-md">The Thunder on the Backwaters</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 md:-mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="races" className="py-2"><Trophy className="w-4 h-4 mr-2" />The Races</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Test of Unity and Power</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Vallam Kali, the traditional snake boat race of Kerala, is an electrifying spectacle of speed, rhythm, and raw power. This centuries-old tradition transforms the otherwise serene backwaters into a thrilling race track. The festival's origins are rooted in the history of the region's feudal kings, who used these massive 'Chundan Vallams' (snake boats) as war canoes. Today, the battle is one of sport and pride, celebrating community spirit, devotion, and athleticism.</p>
                                    <p>The main event usually takes place during the harvest season of Onam, from August to September. Each massive snake boat, stretching over 100 feet, is crewed by more than 100 rowers who paddle in perfect unison to the beat of chanting and drums. It's a powerful display of teamwork and a major cultural event that draws thousands of spectators.</p>
                                </div>
                                <div className="mt-6 text-center">
                                    <Link href="/blog/snake-boat-race-festival-kerala">
                                        <Button>Read the Full Story <Sparkles className="w-4 h-4 ml-2" /></Button>
                                    </Link>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="races">
                                <h2 className="font-headline text-3xl font-bold mb-4">Major Races to Watch</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>While numerous boat races are held, a few are particularly famous:</p>
                                   <ul>
                                       <li><strong>Nehru Trophy Boat Race:</strong> Held in Alappuzha's Punnamada Lake, this is the most prestigious race, often called the "Olympics of Snake Boat Races."</li>
                                       <li><strong>Aranmula Uthrittathi Vallamkali:</strong> More of a ritual than a race, this event on the Pampa River is a spectacle of devotion to Lord Parthasarathy.</li>
                                       <li><strong>Champakulam Moolam Boat Race:</strong> Considered the oldest and one of the most traditional boat races in Kerala.</li>
                                   </ul>
                                </div>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">More Than a Race</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Unity in Rhythm</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Vallam Kali is a powerful symbol of unity and community pride. Each boat represents a different village, and the months of rigorous training and the final race foster an incredible sense of brotherhood and discipline. The rhythmic chants, the synchronized rowing, and the collective will to win make it a profound expression of Kerala's cultural identity and its deep connection to the backwaters.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Snake Boat Race (Vallam Kali)" />
                        <RelatedContent items={relatedContent} />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
