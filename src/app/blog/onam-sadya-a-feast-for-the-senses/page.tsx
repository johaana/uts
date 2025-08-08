
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";

export default function SingleBlogPage() {
    const title = "Onam Sadya: A Feast for the Senses";
    return (
        <div className="container mx-auto px-4 py-12">
            <Card className="overflow-hidden">
                <CardContent className="p-0 md:p-6 md:p-10">
                     <div className="md:hidden relative h-64 w-full mb-8">
                        <Image src="https://i.postimg.cc/0564g0S7/nandu-menon-h-GHldb-Cg-YDA-unsplash.jpg" alt={title} layout="fill" objectFit="cover" data-ai-hint="onam feast" />
                    </div>
                     <div className="p-6 md:p-0">
                        <div className="mb-8">
                            <Link href="/blog">
                                <Button variant="outline"><ArrowLeft className="mr-2 h-4 w-4" />Back to Blog</Button>
                            </Link>
                        </div>
                     </div>

                    <article className="prose max-w-none text-foreground/80 p-6 pt-0 md:p-0">
                         <div className="text-center mb-8">
                            <p className="text-sm text-muted-foreground">By Team Utsavs on July 07, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{title}</h1>
                        </div>

                        <div className="hidden md:block relative h-96 w-full mb-8">
                            <Image src="https://i.postimg.cc/0564g0S7/nandu-menon-h-GHldb-Cg-YDA-unsplash.jpg" alt={title} layout="fill" objectFit="contain" data-ai-hint="onam feast" className="rounded-lg"/>
                        </div>

                        <p>The Onam Sadya is more than just a meal; it's a grand vegetarian feast that is the centerpiece of Onam celebrations. We take you through the 26+ dishes that make up this incredible culinary experience.</p>

                        <h2>Key Dishes of the Sadya</h2>
                        <p>Served on a banana leaf, the Sadya is a multi-course meal that balances all flavors. Some key components include:</p>
                        <ul>
                            <li><strong>Rice:</strong> The staple base of the meal.</li>
                            <li><strong>Parippu:</strong> A simple lentil curry, the first dish to be served.</li>
                            <li><strong>Sambar:</strong> A flavorful lentil and vegetable stew.</li>
                            <li><strong>Avial:</strong> A thick mixture of various vegetables in a coconut and yogurt gravy.</li>
                            <li><strong>Pachadi and Kichadi:</strong> Yogurt-based dishes, one sweet and one savory.</li>
                            <li><strong>Payasam:</strong> The delicious dessert, a sweet pudding made with milk, rice, or lentils.</li>
                        </ul>
                    </article>
                    <div className="p-6 md:p-0">
                        <ShareButtons title={title} />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
