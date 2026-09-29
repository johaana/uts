import { Card, CardContent } from "@/components/ui/card";
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import { TheyyamPageContent } from "./TheyyamPageContent";
import type { Metadata } from 'next';
import { Drama } from 'lucide-react';

export const metadata: Metadata = {
  title: "Theyyam: When Gods Walk the Earth in Kerala | Utsavs",
  description: "Explore the ancient ritual of Theyyam, where men transform into gods in a stunning display of devotion, art, and tradition that bridges the gap between the human and the divine.",
};

const relatedContent: RelatedItem[] = [
    {
        slug: "extreme-festivals-of-the-world",
        title: "Gods, Guts, and Glory: The World's Most Extreme Festivals",
        image: "https://i.postimg.cc/Hx8kz3vf/theemithi.jpg",
        type: "Blog",
        link: "/blog/extreme-festivals-of-the-world",
        hint: "fire walking"
    },
    {
        slug: "thaipusam",
        title: "The Burden of Faith: Unpacking Thaipusam",
        image: "https://i.postimg.cc/cJbJfPhR/thaipusam.webp",
        type: "Festival",
        link: "/festivals/thaipusam",
        hint: "kavadi"
    },
     {
        slug: "onam",
        title: "Onam",
        image: "https://i.postimg.cc/0564g0S7/nandu-menon-h-GHldb-Cg-YDA-unsplash.jpg",
        type: "Festival",
        link: "/festivals/onam",
        hint: "onam feast"
    }
];

export default function TheyyamPage() {
    return (
        <div className="bg-background">
             <div className="container mx-auto px-4 py-12">
                <Card className="mb-12 border-none bg-transparent shadow-none">
                    <div className="py-20 text-center space-y-6 bg-primary/5 rounded-2xl mb-12">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Drama className="w-8 h-8 text-primary" />
                        </div>
                        <h1 className="font-headline text-5xl md:text-8xl text-primary font-bold tracking-tight">Theyyam</h1>
                        <p className="text-xl md:text-3xl text-muted-foreground font-medium max-w-2xl mx-auto italic">When Gods Walk the Earth</p>
                    </div>
                    <CardContent className="p-0">
                         <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
                             <aside className="md:col-span-4 lg:col-span-3 hidden md:block">
                                <div className="sticky top-24">
                                     <TheyyamPageContent />
                                </div>
                            </aside>
                            <main className="md:col-span-8 lg:col-span-9">
                               <TheyyamPageContent isContent={true} />
                               <ShareButtons title="Theyyam: When Gods Walk the Earth in Kerala" />
                               <RelatedContent items={relatedContent} />
                            </main>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}