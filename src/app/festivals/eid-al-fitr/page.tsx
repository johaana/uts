
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
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
            <div className="container mx-auto px-4 py-12">
                <Card className="mb-12 overflow-hidden">
                     <Image src="https://i.postimg.cc/1tMsX8bp/eid-al-fitr.avif" alt="Eid al-Fitr" width={1200} height={400} className="w-full h-48 md:h-64 object-cover" data-ai-hint="eid family"/>
                    <div className="p-6 md:p-10 text-center">
                        <h1 className="font-headline text-4xl md:text-7xl font-bold text-primary">Eid al-Fitr</h1>
                        <p className="text-xl md:text-2xl mt-2 text-muted-foreground">The Festival of Breaking the Fast</p>
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
                                    
                                    <section id="traditions" className="scroll-mt-20">
                                        <h2 className="font-headline text-3xl font-bold mb-4">How to Celebrate Eid</h2>
                                        <div className="space-y-4 text-foreground/80 prose max-w-none">
                                            <p>The day begins with charity ('Zakat al-Fitr') to ensure everyone can celebrate. Muslims then gather for special congregational prayers ('Salat al-Eid') in mosques or open grounds, dressed in new clothes. The rest of the day is spent visiting family and friends, exchanging gifts, and enjoying a grand feast. Elders often give money or gifts ('Eidi') to children.</p>
                                        </div>
                                    </section>

                                    <section id="recipes" className="scroll-mt-20">
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

                                     <section id="prayers" className="scroll-mt-20">
                                        <h2 className="font-headline text-3xl font-bold mb-4">Eid Prayers & Greetings</h2>
                                        <div className="space-y-4 text-foreground/80 prose max-w-none">
                                            <p>The most common greeting is "Eid Mubarak," which simply means "Blessed Eid" or "Happy Eid." Another beautiful dua (supplication) is "Taqabbalallāhu minnā wa minkum," which translates to, "May Allah accept from us and from you," referring to the good deeds and fasting performed during Ramadan.</p>
                                        </div>
                                    </section>
                                </article>
                                <ShareButtons title="Eid al-Fitr" />
                            </main>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
