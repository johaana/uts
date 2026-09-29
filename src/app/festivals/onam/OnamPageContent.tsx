'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote, CalendarDays } from "lucide-react";
import Link from "next/link";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/product-data";
import { Button } from "@/components/ui/button";

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


export function OnamPageContent() {
    return (
        <div className="bg-background">
            <section className="relative py-24 flex items-center justify-center bg-primary/5">
                <div className="relative text-center z-10 p-4 space-y-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <CalendarDays className="w-8 h-8 text-primary" />
                    </div>
                    <h1 className="font-headline text-5xl md:text-8xl font-bold text-primary tracking-tight">Onam</h1>
                    <p className="text-xl md:text-3xl text-muted-foreground font-medium max-w-2xl mx-auto italic">Kerala's Harvest Festival</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12">
                <Card className="mb-12 border-none bg-transparent shadow-none">
                    <CardContent className="p-0">
                        <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
                             <aside className="hidden md:block md:col-span-4 lg:col-span-3 -ml-2">
                                <div className="sticky top-24">
                                     <div className="p-6 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                                        <h2 className="font-headline text-2xl font-bold mb-6">In This Article</h2>
                                        <ul className="space-y-4">
                                            {pageSections.map(section => (
                                                <li key={section.id}>
                                                    <a href={`#${section.id}`} className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
                                                        <section.icon className="w-5 h-5 text-accent" />
                                                        <span className="font-bold uppercase tracking-widest text-xs">{section.title}</span>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </aside>

                            <main className="md:col-span-8 lg:col-span-9 space-y-16">
                                <section id="overview" className="scroll-mt-20">
                                     <div className="prose max-w-none text-foreground/80 text-lg leading-relaxed space-y-6">
                                        <p>Onam is the soul of Kerala, a vibrant harvest festival that transcends religion and caste, celebrated with unparalleled joy and unity. It celebrates the annual homecoming of the beloved, mythical King Mahabali.</p>
                                        <p>The celebration unfolds over ten days, beginning on the Atham day, when the first layer of the beautiful 'Pookalam' (floral carpet) is laid. The festival is a heartfelt tribute to a king who sacrificed everything for his people, marking a time of feasting, flowers, and community pageantry.</p>
                                    </div>
                                </section>
                                     
                                <section id="traditions" className="scroll-mt-20">
                                    <h2 className="font-headline text-3xl md:text-5xl font-bold mb-10">Traditions</h2>
                                    <ul className="space-y-6 pl-4 text-lg text-foreground/80">
                                        <li className="flex items-start gap-4">
                                            <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1"/>
                                            <div>
                                                <h4 className="font-bold text-xl">Pookalam</h4>
                                                <p>Intricate and colorful carpets made of fresh flowers laid at the entrance of homes.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1"/>
                                            <div>
                                                <h4 className="font-bold text-xl">Onasadya</h4>
                                                <p>The grand vegetarian feast served on a banana leaf, the absolute centerpiece of the day.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1"/>
                                            <div>
                                                <h4 className="font-bold text-xl">Vallam Kali</h4>
                                                <p>Spectacular snake boat races held on the rivers, representing teamwork and spirit.</p>
                                            </div>
                                        </li>
                                    </ul>
                                     <div className="not-prose my-16">
                                        <h3 className="font-headline text-2xl font-bold mb-10 text-center text-primary uppercase tracking-widest">Onam Essentials</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                                    <h2 className="font-headline text-3xl md:text-5xl font-bold mb-8">The Sadya Spread</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {recipes.map(recipe => (
                                           <Link href={recipe.link} key={recipe.name}>
                                                <Card className="overflow-hidden h-full hover:shadow-xl transition-all hover:-translate-y-1">
                                                    <CardContent className="p-8 flex items-center justify-center">
                                                        <h3 className="font-headline text-2xl font-bold text-center text-primary">{recipe.name}</h3>
                                                    </CardContent>
                                                </Card>
                                            </Link>
                                        ))}
                                    </div>
                                </section>

                                 <section id="chants" className="scroll-mt-20">
                                    <h2 className="font-headline text-3xl md:text-5xl font-bold mb-10 text-center">Onappattu</h2>
                                    <Card className="bg-primary/5 p-10">
                                        <CardHeader className="p-0 mb-6">
                                            <CardTitle className="text-3xl font-bold text-primary">Maveli Naadu</CardTitle>
                                        </CardHeader>
                                        <CardContent className="p-0">
                                             <p className="text-xl font-serif italic text-foreground/90 leading-relaxed">"Maveli naadu vaanidum kaalam, manusharellarum onnupole..."</p>
                                            <p className="mt-6 text-foreground/70 text-lg leading-relaxed">This famous Onam song translates to "When Maveli ruled the land, all people were equal." It describes the golden, utopian era of King Mahabali.</p>
                                        </CardContent>
                                    </Card>
                                </section>
                            </main>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}