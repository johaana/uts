
import type { Metadata } from 'next';
import { Card, CardContent } from "@/components/ui/card";
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import Image from 'next/image';
import { ThaipusamPageContent } from './ThaipusamPageContent';

export const metadata: Metadata = {
  title: "The Burden of Faith: Unpacking the Intense Rituals of Thaipusam",
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
                <Card className="mb-12 overflow-hidden">
                     <div className="relative h-64 md:h-[50vh] w-full">
                        <Image src="https://i.postimg.cc/cJbJfPhR/thaipusam.webp" alt="Thaipusam festival" layout="fill" objectFit="cover" data-ai-hint="kavadi" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 p-6 md:p-10">
                             <h1 className="font-headline text-4xl md:text-7xl text-white font-bold drop-shadow-lg">The Burden of Faith</h1>
                             <p className="text-xl md:text-2xl mt-2 text-white/90 drop-shadow-md">Unpacking the Intense Rituals of Thaipusam</p>
                        </div>
                    </div>
                    <CardContent className="p-6 md:p-10 pt-0">
                        <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
                             <aside className="md:col-span-4 lg:col-span-3 -ml-2 hidden md:block">
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
