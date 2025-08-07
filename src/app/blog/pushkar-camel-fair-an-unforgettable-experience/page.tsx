
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";

export default function SingleBlogPage() {
    const title = "Pushkar Camel Fair: More Than Just a Market";
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
                            <p className="text-sm text-muted-foreground">By Team Utsavs on November 1, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{title}</h1>
                        </div>

                         <div className="relative h-96 w-full mb-8">
                            <Image src="https://i.postimg.cc/rmVJnj2w/Pushkar-Camel-Fair.avif" alt="Pushkar Camel Fair" layout="fill" objectFit="contain" data-ai-hint="pushkar camel fair" className="rounded-lg"/>
                        </div>

                        <h2>The World's Largest Camel Fair</h2>
                        <p>Hailed as the largest camel fair in the world, the Pushkar Fair is a spectacular five-day event that transforms the small desert town of Pushkar in Rajasthan into a vibrant hub of commerce, culture, and spirituality. Held annually during the holy Kartik Purnima, the fair attracts thousands of camel and cattle traders, as well as tourists and photographers from across the globe, who flock to witness this incredible spectacle.</p>

                        <h2>A Fusion of Commerce and Culture</h2>
                        <p>While the primary purpose of the fair is the trading of livestock, it has evolved into a grand cultural extravaganza. The sand dunes come alive with a riot of colors, sounds, and activities that provide a fascinating glimpse into the life of rural Rajasthan.</p>

                        <h3>Unmissable Experiences at the Fair:</h3>
                        <ul>
                            <li><strong>Livestock Trading:</strong> The sight of thousands of beautifully decorated camels, horses, and cattle is the main attraction.</li>
                            <li><strong>Cultural Competitions:</strong> The fair hosts a series of quirky and entertaining competitions, including 'matka phod' (pot breaking), the 'longest mustache' contest, and bridal competitions.</li>
                            <li><strong>Hot Air Balloon Festival:</strong> For a breathtaking view of the fair and the surrounding landscape, take a ride in a hot air balloon, a popular recent addition to the festivities.</li>
                            <li><strong>Folk Performances:</strong> Enjoy captivating performances of Rajasthani folk music and dance, which continue late into the night.</li>
                            <li><strong>Spiritual Dip:</strong> Many pilgrims also take a holy dip in the sacred Pushkar Lake, believed to wash away sins.</li>
                        </ul>
                        
                        <p>The Pushkar Camel Fair is an unforgettable experience, offering a unique blend of tradition, spirituality, and vibrant celebration. It's a must-visit for anyone looking to experience the authentic soul of Rajasthan.</p>
                    </article>
                    <ShareButtons title={title} />
                </CardContent>
            </Card>
        </div>
    );
}
