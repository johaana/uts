
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Utensils, Sparkles, MessageSquareQuote, Leaf } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/product-data";

const recipes = [
    { name: "Sheer Khurma", link: "/recipes/sheer-khurma" },
    { name: "Biryani", link: "/recipes/biryani" },
    { name: "Haleem", link: "/recipes/haleem" },
]

const pageSections = [
    { id: "overview", title: "Overview", icon: BookOpen },
    { id: "traditions", title: "Traditions", icon: Sparkles },
    { id: "recipes", title: "Recipes", icon: Utensils },
    { id: "prayers", title: "Prayers & Greetings", icon: MessageSquareQuote },
];

export default function EidAlFitrPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary shadow-lg">Eid al-Fitr</h1>
                    <p className="text-xl md:text-2xl mt-4 text-primary/90 shadow-md">The Festival of Breaking the Fast</p>
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
                                <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="md:w-2/3">
                                        <h2 className="font-headline text-3xl font-bold mb-4">The Joyous Culmination of Ramadan</h2>
                                        <div className="space-y-4 text-foreground/80 prose max-w-none">
                                            <p>Eid al-Fitr, often joyously called the "Festival of Breaking the Fast," stands as one of the most important religious holidays celebrated by Muslims worldwide. It marks the triumphant and much-anticipated end of Ramadan, a sacred month dedicated to fasting, intensive prayer, deep reflection, and strengthening community bonds. The festival does not commemorate a single historical event but is a jubilant celebration of the spiritual discipline, self-control, and heightened devotion demonstrated during Ramadan. It is a time to express profound gratitude to Allah for providing the strength and endurance to observe the month-long fast and for the spiritual rewards that come with it.</p>
                                            <p>The spirit of Eid is one of pure joy, heartfelt forgiveness, and immense gratitude. After a month of abstaining from all food and drink from the first light of dawn until dusk, the sighting of the new crescent moon signals the end of the fast and the beginning of joyous celebrations that can last up to three days. The festival is a powerful reminder of the core Islamic values of charity, compassion, and unity. Before the special Eid prayers are held, Muslims are obligated to give 'Zakat al-Fitr', a charitable donation to the poor and needy, ensuring that everyone can partake in the festivities. It is a time for forgiveness, where past animosities are forgotten, and for strengthening social ties by visiting friends and family, sharing elaborate meals, and spreading a universal message of peace and goodwill.</p>
                                        </div>
                                    </div>
                                    <div className="md:w-1/3">
                                        <Image src="https://i.postimg.cc/1tMsX8bp/eid-al-fitr.avif" alt="Family celebrating Eid" width={400} height={600} className="rounded-lg shadow-lg" data-ai-hint="eid family"/>
                                    </div>
                                </div>
                            </section>
                            
                            <section id="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">How to Celebrate Eid</h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Step-by-Step Celebration:</h3>
                                        <ul className="space-y-4 pl-4 prose max-w-none">
                                             <li className="flex items-start">
                                                <span className="font-bold text-primary mr-3">1.</span>
                                                <div>
                                                    <h4 className="font-bold">Charity (Zakat al-Fitr)</h4>
                                                    <p className="text-foreground/80">Before the Eid prayer, it is obligatory to give a donation to the poor to ensure everyone can celebrate.</p>
                                                </div>
                                            </li>
                                             <li className="flex items-start">
                                                <span className="font-bold text-primary mr-3">2.</span>
                                                <div>
                                                    <h4 className="font-bold">Eid Prayers (Salat al-Eid)</h4>
                                                    <p className="text-foreground/80">Muslims gather in large congregations for special prayers in mosques or open grounds, dressed in new clothes.</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="font-bold text-primary mr-3">3.</span>
                                                <div>
                                                    <h4 className="font-bold">Feasting and Visiting</h4>
                                                    <p className="text-foreground/80">The rest of the day is spent visiting family and friends, exchanging gifts, and enjoying a grand feast. Elders often give money or gifts ('Eidi') to children.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section id="recipes">
                                <h2 className="font-headline text-3xl font-bold mb-4">Eid Delicacies</h2>
                                <p className="mb-6 text-foreground/80 prose max-w-none">Eid is synonymous with feasting. Sweet dishes are particularly popular for Eid al-Fitr, earning it the nickname "Sweet Eid".</p>
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
                                 <div className="text-center mt-6">
                                    <Link href="/recipes" className="text-accent hover:underline font-semibold">
                                        Find more festive recipes &rarr;
                                    </Link>
                                </div>
                            </section>

                             <section id="prayers">
                                <h2 className="font-headline text-3xl font-bold mb-4">Eid Prayers & Greetings</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Common Greeting: Eid Mubarak</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The most common greeting is "Eid Mubarak," which simply means "Blessed Eid" or "Happy Eid."</p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>A Dua for Acceptance</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Taqabbalallāhu minnā wa minkum."</p>
                                            <p className="mt-2 text-foreground/80">This beautiful dua translates to, "May Allah accept from us and from you," referring to the good deeds and fasting performed during Ramadan. It is a heartfelt prayer for mutual acceptance and blessings.</p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>The Eid Takbir</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Allāhu Akbar, Allāhu Akbar, Lā ilāha illā Allāh, Allāhu Akbar, Allāhu Akbar, wa lillāhi al-ḥamd."</p>
                                            <p className="mt-2 text-foreground/80">This is the Takbir, chanted repeatedly on the way to the Eid prayers. It translates to "God is the greatest, God is the greatest. There is no god but God. God is the greatest, God is the greatest, and to God belongs all praise."</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </section>
                        </article>
                        <ShareButtons title="Eid al-Fitr" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
