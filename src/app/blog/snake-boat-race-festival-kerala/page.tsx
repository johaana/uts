
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';

const post = { 
    title: "Thunder on the Backwaters: The Story of Kerala's Snake Boat Races", 
    image: "https://i.postimg.cc/wx4FCb2T/snake-boat-race.jpg",
    excerpt: "Dive deep into the history, cultural significance, rituals, and thrill of Kerala's breathtaking Snake Boat Race Festival (Vallam Kali)."
};

export const metadata: Metadata = {
  title: `${post.title} | Utsavs`,
  description: post.excerpt,
  openGraph: {
    title: `${post.title} | Utsavs`,
    description: post.excerpt,
    images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    type: 'article',
    publishedTime: new Date('2025-08-20').toISOString(),
    authors: ['Utsavs'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${post.title} | Utsavs`,
    description: post.excerpt,
    images: [post.image],
  },
};

export default function SingleBlogPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt="Snake Boat Race Kerala" layout="fill" objectFit="cover" data-ai-hint="snake boat race" className="rounded-lg"/>
            </div>
            <Card className="overflow-hidden md:-mt-16 relative z-10 md:rounded-t-2xl">
                <CardContent className="p-6 md:p-10">
                    <div className="mb-8">
                        <Link href="/blog">
                            <Button variant="outline"><ArrowLeft className="mr-2 h-4 w-4" />Back to Blog</Button>
                        </Link>
                    </div>

                    <article className="prose max-w-none text-foreground/80">
                         <div className="text-center mb-8">
                            <p className="text-sm text-muted-foreground">By Team Utsavs on August 20, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{post.title}</h1>
                        </div>

                        <p>When we think of Kerala, what often comes to mind are the serene backwaters, lush green coconut groves, and the slow rhythm of houseboats gliding over calm waters. Yet, once a year, those very backwaters come alive in a burst of excitement, thunderous chants, and synchronized oar strokes of hundreds of men – this is the Snake Boat Race Festival, locally known as Vallam Kali.</p>
                        <p>A centuries-old tradition, Vallam Kali is more than just a competition. It is a festival of community spirit, athleticism, devotion, and heritage, drawing locals and tourists from around the world. The most famous of these races is the Nehru Trophy Boat Race, but several others are celebrated across Kerala’s waterways, turning them into grand sporting and cultural spectacles.</p>
                        
                        <h3>Origins of Vallam Kali – A Tradition Rooted in History</h3>
                        <p>The roots of the Snake Boat Race stretch back to more than 400 years. According to historians, the practice began during the period of local feudal kings in Kerala. These rulers used war canoes, known as Chundan Vallams, to defend their territories via the vast river networks. Over time, these war vessels evolved into boats for competition, carrying forward the same discipline, strategy, and teamwork once needed in battle.</p>
                        <p>The word “Vallam” means boat, and “Kali” means game. So literally, Vallam Kali translates to “boat game” or “boat race.” The snake boats (Chundan Vallam) are not just vessels. They are sacred symbols of heritage. Each boat is about 100–120 feet long, capable of seating over 100 rowers, and resembles the hood of a cobra – which explains the English name “Snake Boat.”</p>
                        
                        <h3>The Boat – Chundan Vallam, An Engineering Marvel</h3>
                        <p>The star of the festival is undoubtedly the Snake Boat. These boats are masterpieces of traditional boat-building, made of anjili wood (wild jackfruit tree) and meticulously crafted by expert carpenters. They are about 100–120 feet long, making them the world’s longest traditional watercraft, and can seat over 100 rowers in pairs. Every boat belongs to a village or community, and its ownership is a matter of pride. Before every race, villagers perform ritualistic ceremonies, including blessings and offerings, to ensure victory.</p>
                        
                        <h3>Major Snake Boat Races in Kerala</h3>
                        <ul>
                            <li><strong>Nehru Trophy Boat Race:</strong> Held on the second Saturday of August every year in Alappuzha, it's known as the “Olympics of Snake Boat Races.”</li>
                            <li><strong>Champakulam Moolam Boat Race:</strong> Considered the oldest Vallam Kali, it is associated with the Ambalappuzha Sree Krishna Temple.</li>
                            <li><strong>Aranmula Boat Race:</strong> More ritualistic than a race, this event is an act of devotion to Lord Parthasarathy.</li>
                        </ul>
                        
                        <h3>Community, Rituals, and Spirit of Vallam Kali</h3>
                        <p>The Snake Boat Race is not just about speed – it’s about unity and brotherhood. Each boat crew is made up of villagers, bound by months of practice and discipline. During the race, traditional songs called “Vanchipattu” (boat songs) are sung in rhythm to motivate the rowers and energize the boat. The entire race day is a festival in itself, filled with music, cheering crowds, and delicious local food.</p>
                        
                        <h3>Global Appeal and A Traveler's Guide</h3>
                        <p>The Snake Boat Race has become a global spectacle. Tourists can experience the race from houseboats, and witness cultural programs like Kathakali and Mohiniyattam. In recent years, the Champions Boat League (CBL) has professionalized the races, making it a modern sporting festival. If you plan to visit, the best time is between August and September during the Onam celebrations. Booking accommodation and transport in advance is highly recommended.</p>

                        <blockquote>
                            <p>The Snake Boat Race Festival of Kerala is not just about winning or losing; it is a celebration of spirit, unity, and heritage. If Kerala is “God’s Own Country,” then Vallam Kali is its heartbeat on water.</p>
                        </blockquote>

                    </article>
                    <ShareButtons title={post.title} />
                </CardContent>
            </Card>
        </div>
    );
}
