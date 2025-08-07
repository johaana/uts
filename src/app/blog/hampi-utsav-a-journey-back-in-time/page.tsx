
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";

export default function SingleBlogPage() {
    const title = "Hampi Utsav: Where Ancient Ruins Come Alive";
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardContent className="p-6 md:p-10">
                     <div className="mb-8">
                        <Link href="/blog">
                            <Button variant="outline"><ArrowLeft className="mr-2 h-4 w-4" />Back to Blog</Button>
                        </Link>
                    </div>

                    <article className="prose max-w-none text-foreground/80">
                         <div className="text-center mb-8">
                            <p className="text-sm text-muted-foreground">By Team Utsavs on May 22, 2024</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{title}</h1>
                        </div>

                         <div className="relative h-96 w-full mb-8">
                            <Image src="https://i.postimg.cc/9Qp5rxbW/hampi-utsav1.webp" alt="Hampi Festival" layout="fill" objectFit="contain" data-ai-hint="hampi ruins" className="rounded-lg"/>
                        </div>

                        <h2>Celebrating the Glory of Vijayanagar</h2>
                        <p>The Hampi Utsav, also known as Vijaya Utsav, is a grand cultural festival celebrated amidst the stunning ruins of Hampi in Karnataka, a UNESCO World Heritage Site. This festival is a journey back in time, recreating the splendor and glory of the erstwhile Vijayanagar Empire. The entire town, with its ancient temples, palaces, and marketplaces, becomes a stage for a vibrant showcase of Kannadiga culture and tradition.</p>

                        <h2>A Cultural Extravaganza</h2>
                        <p>The festival brings together renowned artists from across India, who perform against the backdrop of the beautifully illuminated ruins. It's a feast for the senses, combining music, dance, art, and history in a unique and unforgettable way.</p>

                        <h3>Highlights of Hampi Utsav:</h3>
                        <ul>
                            <li><strong>Musical Performances:</strong> Enjoy classical and folk music concerts by some of the country's most celebrated musicians.</li>
                            <li><strong>Dance and Drama:</strong> Witness captivating performances of traditional dance forms and puppet shows that narrate ancient tales.</li>
                            <li><strong>Processions:</strong> The festival features grand processions with decorated elephants and horses, reminiscent of the royal era.</li>
                            <li><strong>Light and Sound Show:</strong> A spectacular light and sound show brings the history of the magnificent ruins to life.</li>
                            <li><strong>Handicrafts and Cuisine:</strong> Explore stalls selling colorful local handicrafts and savor the authentic flavors of Karnataka.</li>
                        </ul>
                        
                        <p>The Hampi Festival is a must-visit for anyone interested in history, culture, and the performing arts. It offers a unique opportunity to experience the magic of a bygone era in one of the world's most enchanting historical sites.</p>
                    </article>
                    <ShareButtons title={title} />
                </CardContent>
            </Card>
        </div>
    );
}
