import type { Metadata } from 'next';
import { Card, CardContent } from "@/components/ui/card";
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import { ThaipusamPageContent } from './ThaipusamPageContent';
import { BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: "Thaipusam: The Burden of Faith & Intense Rituals | Utsavs",
  description: "Explore the powerful rituals of Thaipusam, a festival of intense devotion to Lord Murugan. Understand the significance of the Kavadi and skin piercings.",
};

const relatedContent: RelatedItem[] = [
    {
        slug: "extreme-festivals-of-the-world",
        title: "Gods, Guts, and Glory: A Journey into the World's Most Extreme Festivals",
        image: "https://i.postimg.cc/Hx8kz3vf/theemithi.jpg",
        type: "Blog",
        link: "/blog/extreme-festivals-of-the-world",
        hint: "fire walking"
    },
    {
        slug: "theemithi",
        title: "A Walk Through Fire: How an Ancient Queen's Trial by Fire Became a Modern Festival",
        image: "https://i.postimg.cc/Hx8kz3vf/theemithi.jpg",
        type: "Festival",
        link: "/festivals/theemithi",
        hint: "fire walking"
    },
     {
        slug: "pongal",
        title: "Pongal",
        image: "https://i.postimg.cc/bvmpScwr/pongal.jpg",
        type: "Festival",
        link: "/festivals/pongal",
        hint: "pongal dish"
    }
];

export default function ThaipusamPage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-12">
                <Card className="mb-12 border-none bg-transparent shadow-none">
                    <div className="py-20 text-center space-y-6 bg-primary/5 rounded-2xl mb-12">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                            <BookOpen className="w-8 h-8 text-primary" />
                        </div>
                        <h1 className="font-headline text-5xl md:text-8xl text-primary font-bold tracking-tight">Thaipusam</h1>
                        <p className="text-xl md:text-3xl text-muted-foreground font-medium max-w-2xl mx-auto italic">The Burden of Faith</p>
                    </div>
                    <CardContent className="p-0">
                        <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
                             <aside className="md:col-span-4 lg:col-span-3 hidden md:block">
                                <div className="sticky top-24">
                                   <ThaipusamPageContent />
                                </div>
                            </aside>
                            <main className="md:col-span-8 lg:col-span-9">
                               <ThaipusamPageContent isContent={true} />
                               <ShareButtons title="The Burden of Faith: Unpacking the Intense Rituals of Thaipusam" />
                               <RelatedContent items={relatedContent} />
                            </main>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}