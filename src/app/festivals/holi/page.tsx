import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Utensils, Sparkles, MessageSquareQuote, Leaf, Wind, Droplets, Share } from "lucide-react";
import Link from "next/link";
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/product-data";

export const metadata: Metadata = {
  title: "Holi: Know before you plan.",
  description: "Holi is observed in India on 4 Mar 2026. A holiday for one traveler is a closed office for another. Know which one you are. Same date. Different plans. Different consequences.",
};

const recipes = [
    { name: "Gujiya", link: "/recipes/gujiya" },
    { name: "Thandai", link: "/recipes/thandai" },
    { name: "Ras Malai", link: "/recipes/ras-malai" },
    { name: "Malpua", link: "/recipes/malpua" },
]

const relatedContent: RelatedItem[] = [
    {
        slug: "guide-to-natural-holi-colors",
        title: "A Guide to Natural Holi Colors",
        image: "https://i.postimg.cc/gkXKTrQ8/organic-holi-colours.webp",
        type: "Blog",
        link: "/blog/guide-to-natural-holi-colors",
        hint: "holi colors"
    },
    {
        slug: "thandai",
        title: "Thandai Recipe",
        image: "https://i.postimg.cc/Y04CQqLL/Thandai.webp",
        type: "Recipe",
        link: "/recipes/thandai",
        hint: "holi drink"
    },
    {
        slug: "holika-dahan",
        title: "Holika Dahan",
        image: "https://i.postimg.cc/qBzWPvvf/holika-dahan.webp",
        type: "Festival",
        link: "/festivals/holika-dahan",
        hint: "bonfire festival"
    }
];

const pageSections = [
    { id: "overview", title: "Overview", icon: BookOpen },
    { id: "traditions", title: "Rituals & Traditions", icon: Sparkles },
    { id: "recipes", title: "Holi Delicacies", icon: Utensils },
    { id: "chants", title: "Songs & Chants", icon: MessageSquareQuote },
    { id: "eco-friendly", title: "Eco-Friendly Holi", icon: Leaf },
];

export default function HoliPage() {
    return (
        <div className="bg-background">
            <section className="relative py-20 flex items-center justify-center bg-primary/5">
                <div className="relative text-center z-10 p-4 space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Sparkles className="w-8 h-8 text-primary" />
                    </div>
                    <h1 className="font-headline text-5xl md:text-8xl font-bold text-primary">Holi</h1>
                    <p className="text-xl md:text-3xl text-muted-foreground font-medium max-w-2xl mx-auto italic">The Festival of Colors</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12">
                <Card className="mb-12 border-none shadow-none bg-transparent">
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
                                <div className="space-y-8 prose max-w-none text-foreground/80 text-lg leading-relaxed">
                                    <p className="text-2xl font-serif italic text-muted-foreground border-l-4 border-accent pl-8 py-2">
                                        An exuberant festival of love and spring, where social barriers dissolve in a riot of color. Holi celebrates the victory of good over evil, the arrival of spring, and the playful love of Radha and Krishna.
                                    </p>
                                    <p>Holi, the world-renowned Festival of Colors, is an exuberant and cathartic celebration of life, love, and the arrival of spring. It's a day when social norms are joyfully suspended, and people from all walks of life come together to douse each other in vibrant powders ('gulal') and colored water.</p>
                                    <p>The festival is steeped in rich mythology, with the most prominent being the story of Prahlada and Holika. The victory of devotion and righteousness over evil is commemorated with the Holika Dahan bonfire. Beyond the legends, Holi's true power lies in its social significance—it is a day of immense catharsis, a festival of forgiveness, and a celebration of universal brotherhood.</p>
                                </div>
                            </section>
                            
                            <section id="traditions" className="scroll-mt-20">
                                <h2 className="font-headline text-3xl md:text-5xl font-bold mb-10">Celebration Essentials</h2>
                                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                                    <Card className="p-10 border-none bg-secondary/20">
                                        <Wind className="w-12 h-12 mx-auto text-accent mb-6"/>
                                        <h4 className="font-headline text-2xl font-bold mb-4">Holika Dahan</h4>
                                        <p className="text-foreground/80 text-sm leading-relaxed">Light a bonfire on the eve of Holi to commemorate the triumph of good over evil.</p>
                                    </Card>
                                     <Card className="p-10 border-none bg-secondary/20">
                                        <Droplets className="w-12 h-12 mx-auto text-accent mb-6"/>
                                        <h4 className="font-headline text-2xl font-bold mb-4">Color Play</h4>
                                        <p className="text-foreground/80 text-sm leading-relaxed">The main event: a joyous, fun-filled frolic for all ages throwing colored powders and water.</p>
                                    </Card>
                                     <Card className="p-10 border-none bg-secondary/20">
                                        <Share className="w-12 h-12 mx-auto text-accent mb-6"/>
                                        <h4 className="font-headline text-2xl font-bold mb-4">Feasting</h4>
                                        <p className="text-foreground/80 text-sm leading-relaxed">Indulge in traditional sweets like gujiya and enjoy refreshing thandai with loved ones.</p>
                                    </Card>
                                </div>
                            </section>

                            <section id="recipes" className="scroll-mt-20">
                                <h2 className="font-headline text-3xl md:text-5xl font-bold mb-8">Holi Delicacies</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {recipes.map(recipe => (
                                       <Link href={recipe.link} key={recipe.name}>
                                            <Card className="overflow-hidden h-full hover:shadow-xl transition-all hover:-translate-y-1">
                                                <CardContent className="p-8 flex items-center justify-center">
                                                    <h3 className="font-headline text-xl font-bold text-center text-primary">{recipe.name}</h3>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    ))}
                                </div>
                            </section>

                             <section id="chants" className="scroll-mt-20">
                                <h2 className="font-headline text-3xl md:text-5xl font-bold mb-8 text-center">Ritual Prayers</h2>
                                <div className="max-w-4xl mx-auto space-y-6">
                                    <Card className="bg-primary/5 p-8">
                                        <h4 className="text-primary font-bold text-xl mb-4">Holika Dahan Prayers</h4>
                                        <p className="text-foreground/80 text-lg italic leading-relaxed">Devotees offer prayers to the fire god, Agni, seeking the destruction of inner evils and the well-being of the family.</p>
                                    </Card>
                                </div>
                            </section>
                            
                            <section id="eco-friendly" className="scroll-mt-20">
                                <h2 className="font-headline text-3xl md:text-5xl font-bold mb-10 text-center">The Sustainable Holi</h2>
                                <div className="max-w-4xl mx-auto grid gap-8">
                                    <div className="p-10 bg-green-600/5 border-l-4 border-green-600 space-y-4">
                                        <h4 className="font-bold text-2xl text-green-800">Natural Gulal</h4>
                                        <p className="text-foreground/80 leading-relaxed">Make your own safe, skin-loving colors at home. Use turmeric for yellow, beetroot for magenta, and hibiscus for red.</p>
                                        <div className="pt-4">
                                            <Link href="/blog/guide-to-natural-holi-colors" className="text-green-700 font-bold hover:underline">
                                                Read the full DIY guide &rarr;
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                        <ProductCard product={products.phoolHoliColours} />
                                        <ProductCard product={products.rangoliPowder} />
                                    </div>
                                </div>
                            </section>
                        </article>
                        <ShareButtons title="Holi" />
                        <RelatedContent items={relatedContent} />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}