

'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/product-data";

const recipes = [
    { name: "Avial", link: "/recipes/avial" },
    { name: "Sambar", link: "/recipes/sambar" },
    { name: "Payasam", link: "/recipes/payasam" },
]

const relatedContent: RelatedItem[] = [
    {
        slug: "onam-sadya-a-feast-for-the-senses",
        title: "Onam Sadya: A Feast for the Senses",
        image: "https://i.postimg.cc/0564g0S7/nandu-menon-h-GHldb-Cg-YDA-unsplash.jpg",
        type: "Blog",
        link: "/blog/onam-sadya-a-feast-for-the-senses",
        hint: "onam feast"
    },
    {
        slug: "avial",
        title: "Avial Recipe",
        image: "https://i.postimg.cc/MpJpjw6X/Aviyal.webp",
        type: "Recipe",
        link: "/recipes/avial",
        hint: "vegetable stew"
    },
    {
        slug: "snake-boat-race",
        title: "Snake Boat Race (Vallam Kali)",
        image: "https://i.postimg.cc/9M9QY7Cj/vallam-kali.jpg",
        type: "Festival",
        link: "/festivals/snake-boat-race",
        hint: "snake boat race"
    }
];

const pageSections = [
    { id: "overview", title: "Overview", icon: BookOpen },
    { id: "traditions", title: "Traditions", icon: Sparkles },
    { id: "recipes", title: "Recipes", icon: Utensils },
    { id: "chants", title: "Chants", icon: MessageSquareQuote },
];


export default function OnamPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary shadow-lg">Onam</h1>
                    <p className="text-xl md:text-2xl mt-4 text-primary/90 shadow-md">Kerala's Harvest Festival</p>
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
                                         <div className="flex flex-col md:flex-row gap-8 items-center">
                                            <div className="md:w-2/3">
                                                <h2 className="font-headline text-3xl font-bold mb-4">The Legend of King Mahabali's Homecoming</h2>
                                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                                    <p>Onam is the soul of Kerala, a vibrant harvest festival that transcends religion and caste, celebrated with unparalleled joy and unity. It's a festival that paints the entire state in hues of gold and green, celebrating the annual homecoming of the beloved, mythical King Mahabali. The legend speaks of a golden era in Kerala under the reign of the benevolent demon king Mahabali. His rule was so just and prosperous that the gods themselves grew envious of his popularity.</p>
                                                    <p>To test his righteousness, Lord Vishnu descended to Earth in his Vamana (dwarf) avatar and asked Mahabali for three paces of land. The generous king agreed. The dwarf then grew to a cosmic size, covering the earth and the heavens in two steps. With no space left for the third step, the noble Mahabali offered his own head. Impressed by his devotion, Vishnu granted him a boon: he could return to his kingdom and visit his beloved subjects once every year. This annual royal visit is what Kerala celebrates as Onam.</p>
                                                    <p>The celebration unfolds over ten days, beginning on the Atham day, when the first layer of the beautiful 'Pookalam' (floral carpet) is laid. Each day, a new layer of flowers is added, growing in size and complexity, until the grand finale on the tenth day, Thiru Onam. This ten-day festival of feasting, flowers, boat races, and cultural pageantry is a heartfelt tribute to a king who sacrificed everything for his people.</p>
                                                </div>
                                            </div>
                                            <div className="md:w-1/3">
                                                <Image src="https://i.postimg.cc/0564g0S7/nandu-menon-h-GHldb-Cg-YDA-unsplash.jpg" alt="Onam Sadya feast" width={400} height={400} className="rounded-lg shadow-lg" data-ai-hint="onam feast"/>
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
                                        <h2 className="font-headline text-3xl font-bold mb-4">How to Celebrate Onam</h2>
                                        <ul className="space-y-4 pl-4">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                                <div>
                                                    <h4 className="font-bold">Pookalam (Floral Carpet)</h4>
                                                    <p className="text-foreground/80">Intricate and colorful carpets made of fresh flowers are laid at the entrance of homes to welcome King Mahabali.</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                                <div>
                                                    <h4 className="font-bold">Onasadya (The Grand Feast)</h4>
                                                    <p className="text-foreground/80">The highlight of Onam is the 'Onasadya', a grand vegetarian feast served on a banana leaf, featuring a wide variety of dishes.</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                                <div>
                                                    <h4 className="font-bold">Vallam Kali (Snake Boat Race)</h4>
                                                    <p className="text-foreground/80">Spectacular snake boat races are held on the rivers of Kerala, adding to the festive fervor.</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="not-prose my-10">
                                            <h3 className="font-headline text-2xl font-bold mb-4 text-center text-primary">Shop for Onam</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                                <ProductCard product={products.yashikaSaree} />
                                                <ProductCard product={products.nutsClothingBoysMundu} />
                                                <ProductCard product={products.southCottonMundu} />
                                                <ProductCard product={products.sathiyasBabyDress} />
                                                <ProductCard product={products.totzTouchBabyFrock} />
                                                <ProductCard product={products.angroosOnamHamper} />
                                            </div>
                                        </div>
                                    </section>

                                    <section id="recipes" className="scroll-mt-20">
                                        <h2 className="font-headline text-3xl font-bold mb-4">The Onasadya Spread</h2>
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
                                        <h2 className="font-headline text-3xl font-bold mb-4">Onappattu (Onam Songs)</h2>
                                        <div className="space-y-6">
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle>Songs of a Golden Era</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                     <p className="text-lg font-serif italic">"Maveli naadu vaanidum kaalam, manusharellarum onnupole..."</p>
                                                    <p className="mt-2 text-foreground/80">This famous Onam song translates to "When Maveli (Mahabali) ruled the land, all people were equal." It describes the golden, utopian era of King Mahabali, a time of prosperity, justice, and happiness. These songs are an essential part of the cultural celebrations, sung during various activities like the creating of the Pookalam and the Onasadya.</p>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </section>
                                </article>
                                <ShareButtons title="Onam" />
                                <RelatedContent items={relatedContent} />
                            </main>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
