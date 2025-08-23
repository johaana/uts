
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const recipes = [
    { name: "Sakkarai Pongal", link: "/recipes/sakkarai-pongal" },
    { name: "Ven Pongal", link: "/recipes/ven-pongal" },
    { name: "Medu Vada", link: "/recipes/medu-vada" },
]

const relatedContent: RelatedItem[] = [
    {
        slug: "sakkarai-pongal",
        title: "Sakkarai Pongal Recipe",
        image: "https://i.postimg.cc/j2nb1MYh/sakkarai-pongal.webp",
        type: "Recipe",
        link: "/recipes/sakkarai-pongal",
        hint: "sweet rice pudding"
    },
    {
        slug: "ven-pongal",
        title: "Ven Pongal Recipe",
        image: "https://i.postimg.cc/5001BxPT/Ven-Pongal.webp",
        type: "Recipe",
        link: "/recipes/ven-pongal",
        hint: "savory rice pudding"
    },
    {
        slug: "makar-sankranti",
        title: "Makar Sankranti",
        image: "https://i.postimg.cc/gJrdvSxD/makar-sankranti.jpg",
        type: "Festival",
        link: "/festivals/makar-sankranti",
        hint: "kites festival"
    }
];

const pageSections = [
    { id: "overview", title: "Overview", icon: BookOpen },
    { id: "traditions", title: "The Four Days", icon: Sparkles },
    { id: "recipes", title: "Recipes", icon: Utensils },
    { id: "chants", title: "Chants", icon: MessageSquareQuote },
];

export default function PongalPage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-12">
                <Card className="mb-12 overflow-hidden">
                    <Image src="https://i.postimg.cc/bvmpScwr/pongal.jpg" alt="Pongal festival" width={1200} height={400} className="w-full h-48 md:h-64 object-cover" data-ai-hint="pongal dish" />
                    <div className="p-6 md:p-10 text-center">
                        <h1 className="font-headline text-4xl md:text-7xl font-bold text-primary">Pongal</h1>
                        <p className="text-xl md:text-2xl mt-2 text-muted-foreground">Tamil Nadu's Harvest Festival</p>
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
                                        <h2 className="font-headline text-3xl font-bold mb-4">A Harvest of Gratitude</h2>
                                        <div className="space-y-4 text-foreground/80 prose max-w-none">
                                            <p>Pongal is a vibrant four-day harvest festival celebrated with immense enthusiasm in Tamil Nadu, a heartfelt expression of gratitude to nature for its bountiful blessings. The name 'Pongal' literally means 'to boil over' or 'overflow', a beautiful metaphor for the abundance, prosperity, and joy that the festival ushers in. It is a solar festival, timed by the sun's journey northward, known as Uttarayana, which marks the end of winter and the start of a new agricultural season. Families thank the Sun God (Surya), the cattle (Mattu), and all elements of nature that contribute to a bountiful harvest.</p>
                                            <p>The celebration unfolds over four days, each with its unique significance. It begins with 'Bhogi Pongal', a day for cleansing and renewal, where old items are discarded in a bonfire. The main day, 'Surya Pongal', is when the special dish, also called Pongal, is prepared. Freshly harvested rice is cooked with milk and jaggery in a new earthen pot, often outdoors, until it boils over—a moment of great jubilation and a powerful symbol of overflowing prosperity. The third day, 'Mattu Pongal', is dedicated to honoring cattle, who are bathed, decorated, and fed. The festival concludes with 'Kaanum Pongal', a day for family reunions and social gatherings, strengthening community bonds and spreading happiness.</p>
                                        </div>
                                    </section>
                                    
                                    <section id="traditions" className="scroll-mt-20">
                                        <h2 className="font-headline text-3xl font-bold mb-4">The Four Days of Pongal</h2>
                                        <ul className="space-y-4 pl-4 prose max-w-none text-foreground/80">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                                <div>
                                                    <h4 className="font-bold">Day 1: Bhogi Pongal</h4>
                                                    <p>People discard old belongings and celebrate new beginnings by lighting a bonfire.</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                                <div>
                                                    <h4 className="font-bold">Day 2: Surya Pongal</h4>
                                                    <p>The main festival day, dedicated to the Sun God. The special dish 'Pongal' is cooked and offered to Surya.</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                                <div>
                                                    <h4 className="font-bold">Day 3: Mattu Pongal</h4>
                                                    <p>This day honors cattle, which are essential for farming. Cows are bathed, decorated, and worshipped.</p>
                                                </div>
                                            </li>
                                             <li className="flex items-start">
                                                <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                                <div>
                                                    <h4 className="font-bold">Day 4: Kaanum Pongal</h4>
                                                    <p>A day for family reunions and social gatherings. People visit relatives and friends.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </section>

                                    <section id="recipes" className="scroll-mt-20">
                                        <h2 className="font-headline text-3xl font-bold mb-4">Pongal Feast</h2>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {recipes.map(recipe => (
                                                <Link href={recipe.link || '#'} key={recipe.name}>
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
                                        <h2 className="font-headline text-3xl font-bold mb-4">Mantras and Greetings</h2>
                                        <p className="prose max-w-none text-foreground/80">The most common chant and greeting during the festival is "Pongalo Pongal!". As the Pongal dish boils and overflows from the pot, family members shout this with joy. It is an exclamation of happiness and gratitude for an abundant harvest. While preparing and offering the Pongal dish, families offer simple prayers to Surya, the Sun God, thanking him for his energy that sustains life and agriculture.</p>
                                    </section>
                                </article>
                                <ShareButtons title="Pongal" />
                                <RelatedContent items={relatedContent} />
                            </main>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
