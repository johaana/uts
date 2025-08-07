
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";

export default function SingleBlogPage() {
    const title = "Tarnetar Mela: The Vibrant Matchmaking Fair of Gujarat";
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
                            <p className="text-sm text-muted-foreground">By Team Utsavs on September 1, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{title}</h1>
                        </div>

                         <div className="relative h-96 w-full mb-8">
                            <Image src="https://i.postimg.cc/N0qYH9q4/tarnetar-mela.jpg" alt="Tarnetar Mela" layout="fill" objectFit="contain" data-ai-hint="gujarat fair" className="rounded-lg"/>
                        </div>

                        <h2>A Celebration of Love, Dance, and Tradition</h2>
                        <p>The Tarnetar Mela is one of Gujarat's most vibrant and unique fairs, celebrated for three days every year in the Surendranagar District. This colorful and romantic fair is essentially a grand matchmaking event for the region's tribal youth, drawing parallels to the ancient tradition of 'swayamvara'. It has become a significant cultural event, attracting visitors and folklorists from all over the world.</p>

                        <h2>The Swayamvara Tradition</h2>
                        <p>The fair is centered around the tradition of young men and women from tribal communities like the Bharwads, Rabaris, and Kolis seeking marriage partners. The participants have a unique dress code to signify their intentions. Women wear beautifully embroidered skirts (zimi) - a red zimi indicates she is unmarried and looking for a partner, while a black one means she is married. The men, dressed in colorful dhotis and waistcoats, carry intricately embroidered umbrellas, which they use to attract the attention of prospective brides.</p>

                        <h3>More than Matchmaking:</h3>
                        <ul>
                            <li><strong>Folk Dance and Music:</strong> The air at the fair throbs with the incessant beat of drums. People dance with joyous abandon, performing traditional Gujarati folk dances like the Garba and Raas.</li>
                            <li><strong>Rural Olympics:</strong> The fair also hosts a range of rural sports and competitions, adding to the festive atmosphere.</li>
                            <li><strong>Handicrafts:</strong> Numerous stalls are set up, showcasing the exquisite handicrafts, textiles, and traditional attire of the region.</li>
                        </ul>
                        
                        <p>The Tarnetar Mela is a captivating spectacle of culture, romance, and tradition. It offers a rare glimpse into the social customs and vibrant lifestyle of Gujarat's pastoral communities.</p>
                    </article>
                    <ShareButtons title={title} />
                </CardContent>
            </Card>
        </div>
    );
}
