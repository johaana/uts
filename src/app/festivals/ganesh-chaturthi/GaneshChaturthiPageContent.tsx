'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Utensils, Sparkles, MessageSquareQuote, Leaf, CalendarDays } from "lucide-react";
import Link from "next/link";
import { products } from "@/lib/product-data";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";

const recipes = [
    { name: "Modak", link: "/recipes/modak" },
    { name: "Puran Poli", link: "/recipes/puran-poli" },
    { name: "Ladoo", link: "/recipes/ladoo" },
]

const pageSections = [
    { id: "overview", title: "Overview", icon: BookOpen },
    { id: "ten-days", title: "The Ten Days", icon: CalendarDays },
    { id: "traditions", title: "Traditions", icon: Sparkles },
    { id: "recipes", title: "Recipes", icon: Utensils },
    { id: "aartis", title: "Aartis", icon: MessageSquareQuote },
    { id: "eco-friendly", title: "Eco-Friendly", icon: Leaf },
];

export function GaneshChaturthiPageContent() {
    return (
        <div className="bg-background">
            <section className="relative py-20 flex items-center justify-center bg-primary/5">
                <div className="relative text-center z-10 p-4 space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Sparkles className="w-8 h-8 text-primary" />
                    </div>
                    <h1 className="font-headline text-5xl md:text-8xl font-bold text-primary">Ganesh Chaturthi</h1>
                    <p className="text-xl md:text-3xl text-muted-foreground font-medium max-w-2xl mx-auto italic">Celebrating the Birth of the Elephant God</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12">
                <Card className="mb-12 border-none bg-transparent shadow-none">
                    <CardContent className="p-0">
                        <div className="mb-10 p-6 border-l-4 border-primary bg-primary/5 rounded-r-lg max-w-3xl">
                            <h2 className="font-headline text-2xl font-bold mb-4">In This Article</h2>
                            <div className="flex flex-wrap gap-x-8 gap-y-4">
                                {pageSections.map(section => (
                                    <a key={section.id} href={`#${section.id}`} className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
                                        <section.icon className="w-5 h-5 text-accent" />
                                        <span className="font-bold uppercase tracking-widest text-xs">{section.title}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <article className="space-y-16">
                            <section id="overview" className="scroll-mt-20">
                                <h2 className="font-headline text-3xl md:text-5xl font-bold mb-8">The Divine Advent</h2>
                                <div className="space-y-6 text-foreground/80 prose max-w-none text-lg leading-relaxed">
                                    <p>Ganesh Chaturthi is a spectacular festival that celebrates the birth of Lord Ganesha, the beloved elephant-headed son of Shiva and Parvati. Revered as the god of wisdom, prosperity, and good fortune, Ganesha is the 'Vighnaharta'—the remover of all obstacles.</p>
                                    <p>The festival marks the arrival of the deity in beautifully crafted clay idols. For ten days, devotees worship him with prayers, traditional songs, and his favorite sweet, 'modak'. The celebration reaches its peak with the 'visarjan' (immersion) ceremony on Anant Chaturdashi.</p>
                                </div>
                                 <div className="not-prose my-12">
                                    <h3 className="font-headline text-2xl font-bold mb-8 text-center text-primary uppercase tracking-widest">Preparation Essentials</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                        <ProductCard product={products.ganpatiDecorStand} />
                                        <ProductCard product={products.rajasthanKraftToran} />
                                        <ProductCard product={products.ganeshPujaKit} />
                                        <ProductCard product={products.handicraftsParadiseChowki} />
                                        <ProductCard product={products.sandalwoodHavanCups} />
                                        <ProductCard product={products.signamioDhoopStand} />
                                    </div>
                                </div>
                            </section>

                            <section id="ten-days" className="scroll-mt-20">
                                <h2 className="font-headline text-3xl md:text-5xl font-bold mb-10">The Ten-Day Cycle</h2>
                                <div className="grid gap-8 text-foreground/80 text-lg">
                                    <div className="p-10 bg-secondary/10 rounded-xl border border-border/50">
                                        <h3 className="font-headline text-2xl text-primary font-bold mb-4">Initial Sthapana</h3>
                                        <p className="leading-relaxed">The installation of a clay idol in the home or pandal. A priest performs the 'Pranapratishtha' puja to invoke Ganesha's holy presence.</p>
                                    </div>
                                    <div className="p-10 bg-secondary/10 rounded-xl border border-border/50">
                                        <h3 className="font-headline text-2xl text-primary font-bold mb-4">Gauri Avahan</h3>
                                        <p className="leading-relaxed">In many households, Goddess Gauri (Parvati) is welcomed during the mid-period of the festival, celebrating the sacred bond between mother and son.</p>
                                    </div>
                                    <div className="p-10 bg-secondary/10 rounded-xl border border-border/50">
                                        <h3 className="font-headline text-2xl text-primary font-bold mb-4">Anant Chaturdashi</h3>
                                        <p className="leading-relaxed">The final immersion. Processions fill the streets with music and chants as the deity returns to his celestial abode, carrying away the obstacles of his devotees.</p>
                                    </div>
                                </div>
                            </section>
                            
                            <section id="recipes" className="scroll-mt-20">
                                <h2 className="font-headline text-3xl md:text-5xl font-bold mb-8">Sacred Offerings</h2>
                                <p className="mb-10 text-foreground/80 text-lg">No celebration is complete without Ganesha's favorite treats. Here are the traditional recipes.</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {recipes.map(recipe => (
                                       <Link href={recipe.link} key={recipe.name} className="group">
                                            <Card className="overflow-hidden h-full hover:shadow-xl transition-all hover:-translate-y-1">
                                                <CardContent className="p-10 flex items-center justify-center">
                                                    <h3 className="font-headline text-2xl font-bold text-center text-primary group-hover:text-accent transition-colors">{recipe.name}</h3>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    ))}
                                </div>
                            </section>

                             <section id="aartis" className="scroll-mt-20">
                                <h2 className="font-headline text-3xl md:text-5xl font-bold mb-10 text-center">Devotional Aartis</h2>
                                <div className="max-w-4xl mx-auto space-y-8">
                                    <Card className="bg-primary/5 p-10">
                                        <CardHeader className="p-0 mb-6">
                                            <CardTitle className="text-3xl font-bold text-primary">Sukhkarta Dukhharta</CardTitle>
                                        </CardHeader>
                                        <CardContent className="p-0">
                                            <div className="prose prose-sm max-w-none text-foreground/80 text-lg italic">
                                                <p>Sukhkarta Dukhharta Varta Vighnachi, Nurvi Purvi Prem Krupa Jayachi...</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </section>

                             <section id="eco-friendly" className="scroll-mt-20">
                                <h2 className="font-headline text-3xl md:text-5xl font-bold mb-10 text-center">A Green Ganesha</h2>
                                <div className="max-w-5xl mx-auto space-y-12">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                        <ProductCard product={products.ecoFriendlyGanesha} />
                                        <ProductCard product={products.tiedRibbonsGanesha} />
                                        <ProductCard product={products.saudeepMittiGanesh} />
                                    </div>
                                    <div className="text-center">
                                        <Link href="/blog/eco-friendly-ganesh-chaturthi-guide">
                                            <Button variant="outline" size="lg" className="font-bold">View Full Sustainability Guide &rarr;</Button>
                                        </Link>
                                    </div>
                                </div>
                            </section>
                        </article>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}