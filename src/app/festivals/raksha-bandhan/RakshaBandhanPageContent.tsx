
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const recipes = [
    { name: "Kaju Katli", link: "/recipes/kaju-katli" },
    { name: "Ladoo", link: "/recipes/ladoo" },
    { name: "Coconut Barfi", link: "/recipes/coconut-barfi" },
]

const relatedContent: RelatedItem[] = [
    {
        slug: "raksha-bandhan-the-true-spirit-of-siblinghood",
        title: "More Than a Thread: The True Spirit of Raksha Bandhan",
        image: "https://i.postimg.cc/9MXxXQhY/Raksha-Bandhan.jpg",
        type: "Blog",
        link: "/blog/raksha-bandhan-the-true-spirit-of-siblinghood",
        hint: "rakhi thread"
    },
    {
        slug: "coconut-barfi",
        title: "Coconut Barfi Recipe",
        image: "https://i.postimg.cc/V5QmM9c2/Coconut-Burfi.jpg",
        type: "Recipe",
        link: "/recipes/coconut-barfi",
        hint: "coconut fudge"
    },
    {
        slug: "diwali",
        title: "Diwali",
        image: "https://i.postimg.cc/SjF8HhM1/Diwali2.jpg",
        type: "Festival",
        link: "/festivals/diwali",
        hint: "diwali celebration"
    }
];

const pageSections = [
    { id: "overview", title: "Overview", icon: BookOpen },
    { id: "traditions", title: "Traditions", icon: Sparkles },
    { id: "recipes", title: "Recipes", icon: Utensils },
    { id: "chants", title: "Chants", icon: MessageSquareQuote },
];


export function RakshaBandhanPageContent() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary shadow-lg">Raksha Bandhan</h1>
                    <p className="text-xl md:text-2xl mt-4 text-primary/90 shadow-md">The Sacred Thread of Protection</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 md:-mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
                             <aside className="hidden md:block md:col-span-4 lg:col-span-3">
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
                                        <h2 className="font-headline text-3xl font-bold mb-4">Celebrating the Unbreakable Bond of Siblinghood</h2>
                                        <div className="space-y-4 text-foreground/80 prose max-w-none">
                                            <p>Raksha Bandhan, which beautifully translates to 'the bond of protection', is a heartwarming and cherished festival celebrating the pure and profound relationship between brothers and sisters. At its core is a simple yet deeply meaningful ritual: a sister ties a sacred thread, or 'rakhi', around her brother's wrist. This thread is not merely decorative; it is a powerful embodiment of her love, her heartfelt prayers for his well-being, and her unwavering faith in his protection. In a reciprocal gesture of love, the brother presents his sister with a gift and takes a solemn vow to protect her from all harm, for all his life. This beautiful exchange transcends the material, reinforcing the deep-seated emotional ties that form the very bedrock of family and siblinghood in Indian culture.</p>
                                            <p>The festival's roots run deep into the fertile soil of mythology and history. One of the most famous stories is that of Lord Krishna and Draupadi from the epic Mahabharata. When Krishna inadvertently cut his finger, Draupadi, without a moment's hesitation, tore a piece from her elegant saree and tied it around the wound to staunch the bleeding. Deeply touched by her unconditional care, Krishna promised to protect her always. He fulfilled this promise in her moment of greatest need, miraculously elongating her saree to save her from public dishonor in the court of the Kauravas. This story, among others, elevates the festival beyond mere blood relations, showing that the bond of Rakhi can be a sacred promise of protection and care between any two individuals.</p>
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
                                        <h2 className="font-headline text-3xl font-bold mb-4">The Rakhi Ceremony</h2>
                                        <ul className="space-y-4 pl-4">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                                <div>
                                                    <h4 className="font-bold">Tie the Rakhi</h4>
                                                    <p className="text-foreground/80">The sister ties the rakhi on her brother's wrist while chanting a prayer for his long life and happiness.</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                                <div>
                                                    <h4 className="font-bold">Exchange Sweets and Gifts</h4>
                                                    <p className="text-foreground/80">After the rakhi is tied, sweets are exchanged. The brother gives his sister a gift as a token of his love and promise of protection.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </section>

                                    <section id="recipes" className="scroll-mt-20">
                                        <h2 className="font-headline text-3xl font-bold mb-4">Sweet Treats for Siblings</h2>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {recipes.map(recipe => (
                                               <Link href={recipe.link} key={recipe.name}>
                                                    <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
                                                        <CardContent className="p-4">
                                                            <h3 className="font-headline text-xl font-bold text-center text-primary h-14 flex items-center justify-center">{recipe.name}</h3>
                                                        </CardContent>
                                                    </Card>
                                                </Link>
                                            ))}
                                        </div>
                                    </section>

                                     <section id="chants" className="scroll-mt-20">
                                        <h2 className="font-headline text-3xl font-bold mb-4">Sacred Mantras</h2>
                                        <div className="space-y-6">
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle>Raksha Sutra Mantra</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="text-lg font-serif italic">"Yena baddho Baliraja danavendro mahabalah, tena twam anubadhnami rakshe ma chala ma chala."</p>
                                                    <p className="mt-2 text-foreground/80">**Translation:** "I tie upon you the same rakhi with which the most powerful and generous King Bali was bound. O Rakhi, please do not be unstable." This ancient mantra from the scriptures is chanted by the sister, invoking the power of the sacred thread to protect her brother from all harm.</p>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </section>
                                </article>
                                <ShareButtons title="Raksha Bandhan" />
                                <RelatedContent items={relatedContent} />
                            </main>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
