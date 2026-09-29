'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Utensils, Sparkles, MessageSquareQuote, CalendarDays, Leaf } from "lucide-react";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/product-data";

const recipes = [
    { name: "Ladoo", link: "/recipes/ladoo" },
    { name: "Kaju Katli", link: "/recipes/kaju-katli" },
    { name: "Gajar Ka Halwa", link: "/recipes/gajar-ka-halwa" },
]

const pageSections = [
    { id: "overview", title: "Overview", icon: BookOpen },
    { id: "five-days", title: "The Five Days", icon: CalendarDays },
    { id: "rituals", title: "Rituals", icon: Sparkles },
    { id: "recipes", title: "Recipes", icon: Utensils },
    { id: "gifting", title: "Gifting", icon: Sparkles },
    { id: "chants", title: "Chants", icon: MessageSquareQuote },
    { id: "eco-friendly", title: "Eco-Friendly", icon: Leaf },
];

export function DiwaliPageContent({ isContent = false }: { isContent?: boolean }) {
    
    if (isContent) {
        return (
            <article className="space-y-16">
                <section id="overview" className="scroll-mt-20">
                    <div className="space-y-6">
                        <h2 className="font-headline text-3xl md:text-5xl font-bold">The Luminous Celebration</h2>
                        <div className="space-y-6 text-foreground/80 prose max-w-none text-lg leading-relaxed">
                            <p>Diwali, or Deepavali, the 'Festival of Lights', is India's most significant and radiant festival, a luminous celebration of the universal triumph of light over darkness. Its name, from the Sanskrit 'Deepavali', means "row of lighted lamps," an image that perfectly captures the festival's essence. As autumn's dusk settles, countless 'diyas' (earthen lamps) flicker to life in homes and temples, each flame a powerful beacon of hope and righteousness against the dark canvas of the night sky.</p>
                            <p>The festival unfolds over five magnificent days, each with its own unique rituals and significance, creating a rich tapestry of tradition. While it is most famously linked to the Ramayana—celebrating the triumphant return of Lord Rama to Ayodhya after defeating the demon king Ravana—its meaning is beautifully multifaceted across India.</p>
                        </div>
                    </div>
                </section>
                
                <section id="five-days" className="scroll-mt-20">
                    <h2 className="font-headline text-3xl md:text-5xl font-bold mb-10">The Five Days of Diwali</h2>
                    <div className="grid gap-6">
                        <div className="p-8 bg-secondary/20 rounded-xl border border-border/50">
                            <h3 className="font-headline text-2xl text-primary mb-4 font-bold">Day 1: Dhanteras</h3>
                            <p className="text-foreground/80 leading-relaxed">The Diwali festivities begin with Dhanteras. 'Dhan' means wealth. On this day, homes are deep-cleaned and decorated to welcome Goddess Lakshmi. The most significant tradition is the purchasing of new items, particularly gold, silver, or new utensils.</p>
                        </div>
                        <div className="p-8 bg-secondary/20 rounded-xl border border-border/50">
                            <h3 className="font-headline text-2xl text-primary mb-4 font-bold">Day 2: Naraka Chaturdashi</h3>
                            <p className="text-foreground/80 leading-relaxed">Also known as 'Choti Diwali', the second day celebrates Lord Krishna's triumphant victory over the demon Narakasura. The main ritual involves 'Abhyanga Snan', a sacred bath before sunrise using aromatic oils and paste.</p>
                        </div>
                        <div className="p-8 bg-secondary/20 rounded-xl border border-border/50">
                            <h3 className="font-headline text-2xl text-primary mb-4 font-bold">Day 3: Lakshmi Puja</h3>
                            <p className="text-foreground/80 leading-relaxed">The most important day of the festival. Families gather for an elaborate worship ceremony dedicated to Goddess Lakshmi, the goddess of wealth and prosperity, illuminating homes with diyas and rangoli.</p>
                        </div>
                        <div className="p-8 bg-secondary/20 rounded-xl border border-border/50">
                            <h3 className="font-headline text-2xl text-primary mb-4 font-bold">Day 4: Govardhan Puja</h3>
                            <p className="text-foreground/80 leading-relaxed">Commemorates Lord Krishna lifting the Govardhan Hill. In some regions, it is celebrated as 'Padwa', honoring the sacred bond between husband and wife.</p>
                        </div>
                        <div className="p-8 bg-secondary/20 rounded-xl border border-border/50">
                            <h3 className="font-headline text-2xl text-primary mb-4 font-bold">Day 5: Bhai Dooj</h3>
                            <p className="text-foreground/80 leading-relaxed">A day celebrating the bond between brothers and sisters. Sisters apply a 'tilak' and pray for their brother's longevity, while brothers vow lifelong protection.</p>
                        </div>
                    </div>
                </section>

                <section id="rituals" className="scroll-mt-20">
                    <h2 className="font-headline text-3xl md:text-5xl font-bold mb-8">Rituals</h2>
                    <div className="space-y-6">
                        <p className="text-foreground/80 prose max-w-none text-lg">Celebrating Diwali involves a series of beautiful rituals that fill the home with light and joy.</p>
                         <div className="not-prose my-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                <ProductCard product={products.rangoliMat} />
                                <ProductCard product={products.rajasthanKraftToran} />
                                <ProductCard product={products.jhGalleryCandleHolder} />
                                <ProductCard product={products.swahaCowGheeDiya} />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="recipes" className="scroll-mt-20">
                    <h2 className="font-headline text-3xl md:text-5xl font-bold mb-8">Festive Foods</h2>
                    <p className="mb-10 text-foreground/80 text-lg">Diwali is a time for feasting, where kitchens come alive with the aroma of spices and sweets. Here are the quintessential dishes.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {recipes.map(recipe => (
                            <Link href={recipe.link} key={recipe.name}>
                                <Card className="overflow-hidden h-full hover:shadow-xl transition-all hover:-translate-y-1">
                                    <CardContent className="p-8">
                                        <h3 className="font-headline text-2xl font-bold text-center text-primary">{recipe.name}</h3>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Link href="/recipes" className="text-accent hover:underline font-bold text-lg">
                            Explore full recipe library &rarr;
                        </Link>
                    </div>
                </section>
                
                <section id="gifting" className="scroll-mt-20">
                    <h2 className="font-headline text-3xl md:text-5xl font-bold mb-10 text-center">Gifting Intelligence</h2>
                    <div className="space-y-12">
                        <div>
                            <h3 className="font-headline text-2xl font-bold mb-6 text-primary">Gourmet Hampers</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <ProductCard product={products.omayFoodsWonderful} />
                                <ProductCard product={products.omayFoodsMixedDelights} />
                            </div>
                        </div>
                        <div>
                            <h3 className="font-headline text-2xl font-bold mb-6 text-primary">Home Decor & Health</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                <ProductCard product={products.indianArtVillaCopperSet} />
                                <ProductCard product={products.betterHomeCopperBottle} />
                                <ProductCard product={products.haldiramKajuKatli} />
                            </div>
                        </div>
                    </div>
                </section>
                
                <section id="chants" className="scroll-mt-20">
                    <h2 className="font-headline text-3xl md:text-5xl font-bold mb-8">Sacred Mantras</h2>
                    <div className="grid gap-6">
                        <Card className="bg-primary/5">
                            <CardHeader>
                                <CardTitle className="text-primary font-bold">Lakshmi Ashtottara Shatanamavali</CardTitle>
                                <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">108 Names of Goddess Lakshmi</p>
                            </CardHeader>
                            <CardContent>
                                <p className="text-xl font-serif italic text-foreground/90">"Om Prakrityai Namah, Om Vikrityai Namah..."</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-primary/5">
                            <CardHeader>
                                <CardTitle className="text-primary font-bold">Kuber Mantra</CardTitle>
                                <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">For Wealth and Fortune</p>
                            </CardHeader>
                            <CardContent>
                                <p className="text-xl font-serif italic text-foreground/90">"Om Yakshaya Kuberaya Vaishravanaya Dhanadhanyadhipataye..."</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <section id="eco-friendly" className="scroll-mt-20">
                    <h2 className="font-headline text-3xl md:text-5xl font-bold mb-8">Eco-Friendly</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 border-l-2 border-green-600 bg-green-600/5">
                            <h4 className="font-bold text-xl mb-3">Choose Earthen Lamps</h4>
                            <p className="text-foreground/80">Traditional clay diyas are biodegradable and support local artisans, unlike plastic alternatives.</p>
                        </div>
                        <div className="p-8 border-l-2 border-green-600 bg-green-600/5">
                            <h4 className="font-bold text-xl mb-3">Natural Rangoli</h4>
                            <p className="text-foreground/80">Use rice flour, turmeric, and flower petals instead of synthetic, chemical-laden powders.</p>
                        </div>
                    </div>
                </section>
            </article>
        );
    }
    
    return (
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
    )
}