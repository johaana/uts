
'use client';

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";

const relatedContent: RelatedItem[] = [
    {
        slug: "festivals-that-celebrate-animals",
        title: "Blog: Festivals That Celebrate Animals",
        image: "https://i.postimg.cc/yYMqHNjd/animal-fest-blog.png",
        type: "Blog",
        link: "/blog/festivals-that-celebrate-animals",
        hint: "animal worship"
    },
    {
        slug: "diwali-regional-variations",
        title: "Diwali's Global Flavors",
        image: "https://i.postimg.cc/mg1bYqXc/Diwali-blog-same-fest.jpg",
        type: "Blog",
        link: "/blog/diwali-regional-variations",
        hint: "diwali collage"
    },
    {
        slug: "thaipusam",
        title: "Thaipusam",
        image: "https://i.postimg.cc/4y7fTLZd/thaipusam.webp",
        type: "Festival",
        link: "/festivals/thaipusam",
        hint: "kavadi"
    }
];

const pageSections = [
    { id: "overview", title: "Overview", icon: BookOpen },
    { id: "traditions", title: "The Ritual", icon: Sparkles },
    { id: "significance", title: "Significance", icon: MessageSquareQuote },
];


export default function KukurTiharPage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-12">
                <Card className="mb-12 overflow-hidden">
                    <Image src="https://i.postimg.cc/RCcT1Twd/kukur-tihar1.avif" alt="Kukur Tihar" width={1200} height={400} className="w-full h-48 md:h-64 object-cover" data-ai-hint="dog worship" />
                    <div className="p-6 md:p-10 text-center">
                        <h1 className="font-headline text-4xl md:text-7xl font-bold text-primary">Kukur Tihar</h1>
                        <p className="text-xl md:text-2xl mt-2 text-muted-foreground">Nepal's Beautiful "Day of the Dogs"</p>
                    </div>
                    <CardContent className="p-6 md:p-10 pt-0">
                         <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
                             <aside className="hidden md:block md:col-span-4 lg:col-span-3 -ml-2">
                                <div className="sticky top-24">
                                     <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                                        <h2 className="font-headline text-2xl font-bold mb-4">In This Article</h2>
                                        <ul className="space-y-2">
                                            {pageSections.map(section => (
                                                <li key={section.id}>
                                                    <a href={`#${section.id}`} className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
                                                        <section.icon className="w-5 h-5 text-accent" />
                                                        <span className="font-semibold">{section.title}</span>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </aside>

                            <main className="md:col-span-8 lg:col-span-9">
                                <article className="space-y-12">
                                    <section id="overview" className="scroll-mt-20">
                                         <div className="flex flex-col md:flex-row gap-8 items-center">
                                            <div className="md:order-2 md:w-1/3">
                                                <Image src="https://i.postimg.cc/7Y8hn4Sm/kukurtihar.webp" alt="Dog with marigold garland" width={400} height={400} className="rounded-lg shadow-lg w-full" data-ai-hint="dog with garland"/>
                                            </div>
                                            <div className="md:order-1 md:w-2/3">
                                                <h2 className="font-headline text-3xl font-bold mb-4">A Heartwarming Celebration of Loyalty</h2>
                                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                                    <p>Kukur Tihar is a uniquely heartwarming festival celebrated in Nepal on the second day of the five-day Tihar (or Diwali) festival. This special day is dedicated entirely to dogs, honoring them for their loyalty, friendship, and unwavering companionship. The festival is a beautiful expression of the deep bond between humans and canines, recognizing their important role as guardians, friends, and helpers. On this day, every dog, whether a cherished pet or a humble street dog, is treated with immense love and respect, reflecting a profound cultural belief in the sanctity of this relationship.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    
                                     <div className="md:hidden sticky top-16 z-30 bg-background/95 backdrop-blur-sm py-2 -mx-6 px-6 mb-8 border-b">
                                        <h3 className="font-headline text-lg font-bold mb-2">In This Article</h3>
                                        <div className="flex flex-wrap gap-x-4 gap-y-2">
                                            {pageSections.map(section => (
                                                <a key={section.id} href={`#${section.id}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                                                    <section.icon className="w-4 h-4 text-accent" />
                                                    {section.title}
                                                </a>
                                            ))}
                                        </div>
                                     </div>
                                     
                                    <section id="traditions" className="scroll-mt-20">
                                        <h2 className="font-headline text-3xl font-bold mb-4">Garlands, Tilaks, and Treats</h2>
                                        <div className="space-y-4 text-foreground/80 prose max-w-none">
                                           <p>The rituals of Kukur Tihar are simple yet deeply meaningful. In the morning, people place a 'tika' or 'tilak', a red powder mark, on the forehead of dogs. This tika is a symbol of sacredness and blessing. The dogs are then adorned with beautiful marigold garlands, known as 'malla', which signify respect and honor. Finally, they are offered delicious food, including meat, milk, eggs, and high-quality dog food. The offerings are a way of acknowledging their importance and showing gratitude. The sight of dogs, from pets to strays, proudly wearing their garlands is a key feature of the day's celebrations.</p>
                                        </div>
                                    </section>

                                     <section id="significance" className="scroll-mt-20">
                                        <h2 className="font-headline text-3xl font-bold mb-4">The Messengers of Yama</h2>
                                        <p className="mt-2 text-foreground/80 prose max-w-none">In Hindu mythology, dogs hold a sacred position. They are believed to be the messengers of Yama, the god of death, and also the guardians of the gates to the afterlife. It is believed that by pleasing the dogs, one can appease Yama and ensure a safe passage. The festival is a beautiful reminder to be kind to all creatures and to cherish the loyalty and unconditional love that dogs offer so freely.</p>
                                    </section>
                                </article>
                                <ShareButtons title="Kukur Tihar" />
                                <RelatedContent items={relatedContent} />
                            </main>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
