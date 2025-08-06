import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function SingleBlogPage() {
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
                            <p className="text-sm text-muted-foreground">By Jignesh Gohel on January 20, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">Torgya: The Masked Dances of Tawang Monastery</h1>
                        </div>

                         <div className="relative h-96 w-full mb-8">
                            <Image src="https://i.postimg.cc/hGFZrVGX/torgya.jpg" alt="Torgya Festival" layout="fill" objectFit="contain" data-ai-hint="tawang monastery" className="rounded-lg"/>
                        </div>

                        <h2>A Monastic Festival of Protection</h2>
                        <p>Torgya is a vibrant and significant monastic festival celebrated every year at the famous Tawang Monastery in Arunachal Pradesh. This three-day festival is held according to the lunar calendar and is a celebration meant to chase away evil spirits and usher in prosperity and happiness for the people and their crops. The festival is a rich display of Buddhist culture and tradition, drawing devotees and tourists alike.</p>

                        <h2>The Sacred Cham Dance</h2>
                        <p>The main attraction of the Torgya festival is the 'Chham', a ritualistic and sacred masked dance performed by the monks of the monastery. These dances are not just performances; they are a form of meditation and a religious rite that is believed to provide protection from all-natural calamities and evil forces.</p>

                        <h3>Highlights of the Festival:</h3>
                        <ul>
                            <li><strong>Colorful Masks and Costumes:</strong> The monks don elaborate and colorful costumes and intricately designed masks that represent various deities and celestial beings.</li>
                            <li><strong>Traditional Music:</strong> The dances are performed to the powerful and heart-throbbing music of huge drums, cymbals, and gigantic telescopic horns and clarinets, creating a mesmerizing and spiritual atmosphere.</li>
                            <li><strong>Religious Recitations:</strong> The festival begins with the recitation of religious texts and prayers in the monastery, setting a serene and devotional tone for the celebrations.</li>
                        </ul>
                        
                        <p>The Torgya festival offers a captivating and epic view of the region's spiritual heritage, leaving spectators mesmerized. It's a unique opportunity to witness a living tradition that has been preserved for centuries in the remote and beautiful landscape of Arunachal Pradesh.</p>
                    </article>
                </CardContent>
            </Card>
        </div>
    );
}
