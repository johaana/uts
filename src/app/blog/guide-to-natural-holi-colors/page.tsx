
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";

export default function SingleBlogPage() {
    const title = "A Guide to Natural Holi Colors";
    return (
        <div className="container mx-auto px-4 py-12">
            <Card className="overflow-hidden">
                <CardContent className="p-0 md:p-6 md:p-10">
                     <div className="md:hidden relative h-64 w-full mb-8">
                        <Image src="https://i.postimg.cc/gkXKTrQ8/organic-holi-colours.webp" alt={title} layout="fill" objectFit="cover" data-ai-hint="holi colors" />
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
                            <p className="text-sm text-muted-foreground">By Team Utsavs on May 15, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{title}</h1>
                        </div>

                         <div className="hidden md:block relative h-96 w-full mb-8">
                            <Image src="https://i.postimg.cc/gkXKTrQ8/organic-holi-colours.webp" alt={title} layout="fill" objectFit="contain" data-ai-hint="holi colors" className="rounded-lg"/>
                        </div>

                        <h2>The Problem with Chemical Colors</h2>
                        <p>Before chemical colors became popular, Holi was played with fragrant, skin-friendly colors made from flowers and herbs. Modern Holi colors often contain harmful chemicals like lead oxide, mercury sulphite, and copper sulphate, which can cause skin allergies, eye irritation, and other health problems. Making a switch to natural, homemade colors is not only safer but also connects us back to the traditional, eco-friendly roots of the festival.</p>

                        <h2>DIY Natural Colors</h2>
                        <h3>Yellow (Peela)</h3>
                        <p>Mix turmeric powder (haldi) with gram flour (besan) in equal proportions for a vibrant and skin-nourishing yellow powder. You can also boil marigold flowers in water for a natural yellow liquid color.</p>

                        <h3>Red (Laal)</h3>
                        <p>Use red sandalwood powder (Raktachandan) for a beautiful red gulal. You can also dry hibiscus flowers or pomegranate peels and grind them into a fine powder. Soaking beetroot slices in water will give you a lovely magenta liquid.</p>

                        <h3>Green (Hara)</h3>
                        <p>For a natural green, use pure henna (mehendi) powder mixed with flour. You can also make a paste of spinach or mint leaves for a wet green color.</p>
                    </article>
                    <div className="p-6 md:p-0">
                        <ShareButtons title={title} />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
