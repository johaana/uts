import type { Metadata } from 'next';
import { DiwaliPageContent } from './DiwaliPageContent';
import { Card, CardContent } from '@/components/ui/card';
import { ShareButtons } from '@/components/ShareButtons';
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import { Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: "Diwali: Know before you plan.",
  description: "Diwali is observed in India on 8 Nov 2026. A holiday for one traveler is a closed office for another. Know which one you are. Same date. Different plans. Different consequences.",
};

const relatedContent: RelatedItem[] = [
    {
        slug: "diwali-regional-variations",
        title: "How Diwali is Celebrated Across India",
        image: "https://i.postimg.cc/mg1bYqXc/Diwali-blog-same-fest.jpg",
        type: "Blog",
        link: "/blog/diwali-regional-variations",
        hint: "diwali collage"
    },
    {
        slug: "significance-of-diyas-in-diwali",
        title: "The Significance of Diyas",
        image: "https://i.postimg.cc/brM9vjDZ/Diya-diwali.webp",
        type: "Blog",
        link: "/blog/significance-of-diyas-in-diwali",
        hint: "diwali lamps"
    },
    {
        slug: "raksha-bandhan",
        title: "Raksha Bandhan",
        image: "https://i.postimg.cc/9MXxXQhY/Raksha-Bandhan.jpg",
        type: "Festival",
        link: "/festivals/raksha-bandhan",
        hint: "rakhi thread"
    }
];

export default function DiwaliPage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-12">
                <Card className="mb-12 overflow-hidden border-none shadow-none bg-transparent">
                    <div className="py-12 md:py-20 text-center space-y-6">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Sparkles className="w-8 h-8 text-primary" />
                        </div>
                        <h1 className="font-headline text-4xl md:text-8xl font-bold text-primary tracking-tight">Diwali</h1>
                        <p className="text-xl md:text-3xl mt-2 text-muted-foreground max-w-3xl mx-auto italic">
                            The Festival of Lights: A Triumph of Good Over Evil
                        </p>
                    </div>
                    <CardContent className="p-0">
                        <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
                             <aside className="md:col-span-4 lg:col-span-3 hidden md:block">
                                <div className="sticky top-24">
                                   <DiwaliPageContent />
                                </div>
                            </aside>
                            <main className="md:col-span-8 lg:col-span-9">
                               <article>
                                    <DiwaliPageContent isContent={true} />
                               </article>
                               <ShareButtons title="Diwali" />
                               <RelatedContent items={relatedContent} />
                            </main>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}