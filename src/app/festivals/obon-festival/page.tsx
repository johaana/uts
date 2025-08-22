
'use client';

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { ObonFestivalPageContent } from "./ObonFestivalPageContent";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const relatedContent: RelatedItem[] = [
    {
        slug: "honoring-the-ancestors",
        title: "How the World Honors Its Ancestors",
        image: "https://i.postimg.cc/mgTh4YhH/nyepi-2.jpg",
        type: "Blog",
        link: "/blog/honoring-the-ancestors",
        hint: "ogoh-ogoh statue"
    },
    {
        slug: "dia-de-los-muertos",
        title: "Día de los Muertos",
        image: "https://i.postimg.cc/05F4GWkS/Dia-de-los-Muertos-Day-of-the-Dead-3.avif",
        type: "Festival",
        link: "/festivals/dia-de-los-muertos",
        hint: "day of the dead"
    },
    {
        slug: "yi-peng-lantern-festival",
        title: "Yi Peng Lantern Festival",
        image: "https://i.postimg.cc/XJs7rMdt/Yi-Peng-Lantern-Festival-Thailand.webp",
        type: "Festival",
        link: "/festivals/yi-peng-lantern-festival",
        hint: "sky lanterns"
    }
];

export default function ObonFestivalPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-blue-800/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/jdW1Dkgy/obon1.jpg" alt="Obon Festival" layout="fill" objectFit="cover" data-ai-hint="japanese lanterns" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-blue-900 drop-shadow-lg">Obon Festival</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-blue-800/90 drop-shadow-md">Guiding the Ancestors Home</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 md:-mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                         <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
                             <aside className="md:col-span-4 lg:col-span-3">
                                <div className="sticky top-24">
                                     <ObonFestivalPageContent />
                                </div>
                            </aside>
                            <main className="md:col-span-8 lg:col-span-9">
                               <article>
                                    <ObonFestivalPageContent />
                               </article>
                               <ShareButtons title="Obon Festival" />
                               <RelatedContent items={relatedContent} />
                            </main>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
