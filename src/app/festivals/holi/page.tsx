

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Utensils, Sparkles, MessageSquareQuote, Leaf, Wind, Droplets, Share } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/product-data";

const recipes = [
    { name: "Gujiya", link: "/recipes/gujiya", image: "https://i.postimg.cc/zv9X7ZTt/Gujiya.jpg", hint: "fried dumplings" },
    { name: "Thandai", link: "/recipes/thandai", image: "https://i.postimg.cc/Y04CQqLL/Thandai.webp", hint: "holi drink" },
    { name: "Ras Malai", link: "/recipes/ras-malai", image: "https://i.postimg.cc/d1pWt42P/Rasmalai.webp", hint: "milk sweet" },
    { name: "Malpua", link: "/recipes/malpua", image: "https://i.postimg.cc/TwLLHn3W/malpua.jpg", hint: "sweet pancake" },
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
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                <div className="absolute inset-0 z-0 opacity-30">
                    <Image src="https://i.postimg.cc/0276MjRN/Holi.jpg" alt="Holi festival of colors" layout="fill" objectFit="cover" data-ai-hint="holi celebration" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary shadow-lg">Holi</h1>
                    <p className="text-xl md:text-2xl mt-4 text-primary/90 shadow-md">The Festival of Colors</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 md:-mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <div className="mb-10 p-4 border-l-4 border-primary bg-primary/5">
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
                        <article className="space-y-12">
                            <section id="overview">
                                <div className="grid md:grid-cols-3 gap-8 items-start">
                                    <div className="md:col-span-1">
                                        <p className="text-lg italic text-muted-foreground leading-relaxed border-l-4 border-accent pl-4">
                                            An exuberant festival of love and spring, where social barriers dissolve in a riot of color. Holi celebrates the victory of good over evil, the arrival of spring, and the playful love of Radha and Krishna.
                                        </p>
                                    </div>
                                    <div className="md:col-span-2">
                                         <div className="space-y-4 text-foreground/80 prose max-w-none">
                                            <p>Holi, the world-renowned Festival of Colors, is an exuberant celebration of life, love, and the arrival of spring. It's a day when social barriers are shattered, and people from all walks of life come together to douse each other in vibrant powders and colored water. The most prominent legend is that of Prahlada and Holika. The demon king Hiranyakashipu demanded that all worship him, but his son Prahlada remained a devout follower of Lord Vishnu. Enraged, the king conspired with his sister, Holika, who was immune to fire, to kill Prahlada by tricking him into a pyre. By Vishnu's grace, Prahlada emerged unharmed while Holika was burnt to ashes. The Holika Dahan bonfire, lit on the eve of Holi, commemorates this victory of devotion over evil.</p>
                                            <p>Holi is also intrinsically linked to the divine love story of Radha and Krishna, celebrating their playful application of colors. Beyond the legends, Holi's true power lies in its social significance. It is a day of catharsis, a time to let go of inhibitions and past grievances. The act of coloring one another makes everyone equal, dissolving distinctions of caste, class, age, and gender. It is a festival of forgiveness, of mending broken relationships, and of celebrating the universal spirit of brotherhood, joy, and new beginnings.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            
                            <section id="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">How to Celebrate Holi</h2>
                                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                    <Card className="p-6">
                                        <Wind className="w-12 h-12 mx-auto text-accent mb-4"/>
                                        <h4 className="font-headline text-xl font-bold">Holika Dahan</h4>
                                        <p className="text-foreground/80 text-sm mt-2">On the eve of Holi, light a bonfire to commemorate the burning of the demoness Holika and the triumph of good over evil.</p>
                                    </Card>
                                     <Card className="p-6">
                                        <Droplets className="w-12 h-12 mx-auto text-accent mb-4"/>
                                        <h4 className="font-headline text-xl font-bold">Play with Colors</h4>
                                        <p className="text-foreground/80 text-sm mt-2">The main event is the joyous throwing of colored powders (gulal) and water, a fun-filled frolic for all ages.</p>
                                    </Card>
                                     <Card className="p-6">
                                        <Share className="w-12 h-12 mx-auto text-accent mb-4"/>
                                        <h4 className="font-headline text-xl font-bold">Share Sweets & Thandai</h4>
                                        <p className="text-foreground/80 text-sm mt-2">No Holi is complete without sharing traditional sweets like 'gujiya' and enjoying refreshing 'thandai' with friends and family.</p>
                                    </Card>
                                </div>
                            </section>

                            <section id="recipes">
                                <h2 className="font-headline text-3xl font-bold mb-4">Holi Delicacies</h2>
                                <p className="mb-6 text-foreground/80 prose max-w-none">Holi is a time for indulgence. Sweet and savory treats are prepared in abundance to share with everyone who comes to play.</p>
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                    {recipes.map(recipe => (
                                       <Link href={recipe.link} key={recipe.name} className="group">
                                            <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
                                                <div className="relative h-40">
                                                    <Image src={recipe.image} alt={recipe.name} layout="fill" objectFit="cover" data-ai-hint={recipe.hint} />
                                                </div>
                                                <CardContent className="p-4">
                                                    <h3 className="font-headline text-lg font-bold text-center text-primary group-hover:text-accent transition-colors">{recipe.name}</h3>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    ))}
                                </div>
                                 <div className="text-center mt-8">
                                    <Link href="/recipes" className="text-accent hover:underline font-semibold text-lg">
                                        Discover more festive recipes &rarr;
                                    </Link>
                                </div>
                            </section>

                             <section id="chants">
                                <h2 className="font-headline text-3xl font-bold mb-4">Songs and Prayers for Holi</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Holika Dahan Prayers</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">During the Holika Dahan ritual, people offer prayers to the fire god, Agni, seeking blessings and the destruction of evil forces. A common prayer involves requesting protection for the family and the triumph of good.</p>
                                        </CardContent>
                                    </Card>
                                     <Card>
                                        <CardHeader>
                                            <CardTitle>Krishna Bhajans & Holi Geet</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Holi is filled with music. Devotional songs (bhajans) celebrating the divine and playful love of Radha and Krishna are sung with great enthusiasm. A popular example is "Rang Barse Bheege Chunar Wali," a folk song that captures the spirit of the festival.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </section>
                            <section id="eco-friendly">
                                <h2 className="font-headline text-3xl font-bold mb-4 text-center">How to Make Natural Holi Colors at Home</h2>
                                <div className="flex flex-col md:flex-row gap-8 items-center mt-6">
                                    <div className="md:w-2/3">
                                        <div className="space-y-4 text-foreground/80 prose max-w-none">
                                            <p>Celebrate a truly vibrant and safe Holi by making your own colors from simple, non-toxic kitchen ingredients. Commercial colors often contain harmful chemicals, but these natural alternatives are gentle on your skin and the environment.</p>
                                            <ul className="space-y-6 pl-4">
                                                <li className="flex items-start">
                                                    <div className="w-8 h-8 rounded-full bg-yellow-400 mr-4 mt-1 shrink-0"></div>
                                                    <div>
                                                        <h4 className="font-bold">Radiant Yellow</h4>
                                                        <p>For a beautiful sunny yellow, mix turmeric powder (haldi) with an equal amount of gram flour (besan) or rice flour. This not only gives a lovely color but is also great for your skin. For a wet yellow, boil marigold flowers in water, let it cool, and your natural pichkari color is ready.</p>
                                                    </div>
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="w-8 h-8 rounded-full bg-red-500 mr-4 mt-1 shrink-0"></div>
                                                    <div>
                                                        <h4 className="font-bold">Brilliant Red</h4>
                                                        <p>Create a striking red by using red sandalwood powder (Raktachandan). For a deeper shade, dry some hibiscus flowers in the sun until crisp and grind them into a fine powder. For a liquid red, soak dried hibiscus flowers or slices of beetroot in water overnight.</p>
                                                    </div>
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="w-8 h-8 rounded-full bg-green-500 mr-4 mt-1 shrink-0"></div>
                                                    <div>
                                                        <h4 className="font-bold">Verdant Green</h4>
                                                        <p>For a dry green, use pure henna (mehendi) powder mixed with flour to achieve the desired shade. You can also make a paste from spinach, mint, or coriander leaves.</p>
                                                    </div>
                                                </li>
                                                 <li className="flex items-start">
                                                    <div className="w-8 h-8 rounded-full bg-pink-500 mr-4 mt-1 shrink-0"></div>
                                                    <div>
                                                        <h4 className="font-bold">Lovely Magenta</h4>
                                                        <p>Grate or slice a beetroot and soak it in water. For a more intense color, boil the beetroot slices in water and then let it cool. This creates a beautiful, deep pinkish-red color that is completely safe.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                         <div className="text-center mt-6">
                                            <Link href="/blog/guide-to-natural-holi-colors" className="text-accent hover:underline font-semibold">
                                                Read the full guide &rarr;
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="md:w-1/3">
                                        <Image src="https://i.postimg.cc/qvxZXcTy/natural-holi-colors.webp" alt="Natural Holi Colors" width={400} height={400} className="rounded-lg shadow-lg" data-ai-hint="natural colors"/>
                                    </div>
                                </div>
                                <div className="not-prose my-10 bg-secondary/30 p-6 rounded-lg">
                                    <h3 className="font-headline text-2xl font-bold mb-4 text-center text-primary">Get in the Festive Spirit (Shop on Amazon)</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md mx-auto">
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
