
import type { Metadata } from 'next';
import { DiwaliPageContent } from './DiwaliPageContent';
import { Card, CardContent } from '@/components/ui/card';
import { ShareButtons } from '@/components/ShareButtons';
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Diwali 2025: Dates, Lakshmi Puja Muhurat & Best Amazon Deals 🪔",
  description: "Find the Diwali 2025 dates, Lakshmi Puja timings, and traditions. Explore our curated list of the best deals on diyas, lights, and gifts on Amazon.",
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
                <Card className="mb-12 overflow-hidden">
                    <Image src="https://i.postimg.cc/SjF8HhM1/Diwali2.jpg" alt="Diwali" width={1200} height={400} className="w-full h-48 md:h-64 object-cover" data-ai-hint="diwali celebration" />
                    <div className="p-6 md:p-10 text-center">
                        <h1 className="font-headline text-4xl md:text-7xl font-bold text-primary">Diwali</h1>
                        <p className="text-xl md:text-2xl mt-2 text-muted-foreground">The Festival of Lights: A Triumph of Good Over Evil</p>
                    </div>
                    <CardContent className="p-6 md:p-10 pt-0">
                        <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
                             <aside className="md:col-span-4 lg:col-span-3 -ml-2 hidden md:block">
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
