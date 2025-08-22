
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Sparkles, MessageSquareQuote, Sailboat, Trophy } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const pageContent = [
    {
        id: "overview",
        title: "Overview",
        icon: BookOpen,
        content: (
            <>
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
            </>
        )
    },
    {
        id: "races",
        title: "The Races",
        icon: Trophy,
        content: (
            <>
                <h2 className="font-headline text-3xl font-bold mb-4">Major Races to Watch</h2>
                <div className="space-y-4 text-foreground/80 prose max-w-none">
                   <p>While numerous boat races are held, a few are particularly famous:</p>
                   <ul>
                       <li><strong>Nehru Trophy Boat Race:</strong> Held in Alappuzha's Punnamada Lake, this is the most prestigious race, often called the "Olympics of Snake Boat Races."</li>
                       <li><strong>Aranmula Uthrittathi Vallamkali:</strong> More of a ritual than a race, this event on the Pampa River is a spectacle of devotion to Lord Parthasarathy.</li>
                       <li><strong>Champakulam Moolam Boat Race:</strong> Considered the oldest and one of the most traditional boat races in Kerala.</li>
                   </ul>
                </div>
            </>
        )
    },
    {
        id: "significance",
        title: "Significance",
        icon: MessageSquareQuote,
        content: (
            <>
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
            </>
        )
    }
];

export function SnakeBoatRacePageContent() {
    const pageSections = pageContent.map(item => ({
        id: item.id,
        title: item.title,
        icon: item.icon,
    }));
    
    return (
        <>
            <div className="mb-10 p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                <h2 className="font-headline text-2xl font-bold mb-4">In This Article</h2>
                <ul className="space-y-2">
                    {pageSections.map(section => (
                        <li key={section.id}>
                            <a href={`#${section.id}`} className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
                                <section.icon className="w-5 h-5 text-accent" />
                                <span className="font-semibold">{section.title}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
             <article className="space-y-12">
                {pageContent.map((section) => (
                    <section key={section.id} id={section.id} className="scroll-mt-20">
                        {section.content}
                    </section>
                ))}
            </article>
        </>
    );
}
