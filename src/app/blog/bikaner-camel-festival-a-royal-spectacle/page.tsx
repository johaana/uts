
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";

export default function SingleBlogPage() {
    const title = "Bikaner's Royal Spectacle: The Famous Camel Festival";
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
                            <p className="text-sm text-muted-foreground">By Jignesh Gohel on January 11, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{title}</h1>
                        </div>

                         <div className="relative h-96 w-full mb-8">
                            <Image src="https://i.postimg.cc/1tK9P9dK/bikaner-camel.jpg" alt="Bikaner Camel Festival" layout="fill" objectFit="contain" data-ai-hint="bikaner camel festival" className="rounded-lg"/>
                        </div>

                        <h2>A Tribute to the Ship of the Desert</h2>
                        <p>The Bikaner Camel Festival is a vibrant two-day affair held annually in the heart of Rajasthan, dedicated to the animal that has been the lifeline of the desert people for centuries. Often called the 'Ship of the Desert', the camel is not just a mode of transport but a vital partner in the livelihood of the Rajasthani people. This festival, set against the majestic backdrop of the Junagarh Fort, is a colorful tribute to this resilient animal.</p>

                        <h2>What to Expect</h2>
                        <p>The festival kicks off with a spectacular procession of brightly adorned camels, each dressed in vibrant attire, traditional necklaces, and heavy anklets that jingle as they move. Both camels and their owners dress in their finest, creating a visual feast for spectators. The celebration is filled with the sounds of local folk music and performances of traditional dances.</p>

                        <h3>Highlights of the Festival:</h3>
                        <ul>
                            <li><strong>Camel Races:</strong> Witness the surprising speed and agility of camels as they compete in thrilling races.</li>
                            <li><strong>Camel Beauty Pageants:</strong> Camels are judged on their decoration, agility, and overall appearance in unique beauty contests.</li>
                            <li><strong>Traditional Dances:</strong> Experience the energy of Rajasthani folk dances like the Ghoomar and Kalbelia.</li>
                            <li><strong>Local Delicacies:</strong> No festival is complete without food. Don't miss the chance to savor local delicacies, including the world-famous Bikaner Bhujia.</li>
                        </ul>
                        
                        <p>The Bikaner Camel Festival is more than just a celebration; it's a unique opportunity for travelers and photographers to witness the deep bond between humans and animals and to immerse themselves in the rich cultural tapestry of Rajasthan.</p>
                    </article>
                    <ShareButtons title={title} />
                </CardContent>
            </Card>
        </div>
    );
}
