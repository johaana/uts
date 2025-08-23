
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const recipes = [
    { name: "Shrikhand", link: "/recipes/shrikhand" },
    { name: "Puran Poli", link: "/recipes/puran-poli" },
    { name: "Kothimbir Vadi", link: "/recipes/kothimbir-vadi" },
]

const relatedContent: RelatedItem[] = [
    {
        slug: "puran-poli",
        title: "Puran Poli Recipe",
        image: "https://i.postimg.cc/jj8gBsCj/puranpoli.jpg",
        type: "Recipe",
        link: "/recipes/puran-poli",
        hint: "sweet flatbread"
    },
    {
        slug: "shrikhand",
        title: "Shrikhand Recipe",
        image: "https://i.postimg.cc/BbQqPD2J/shrikhand.webp",
        type: "Recipe",
        link: "/recipes/shrikhand",
        hint: "yogurt dessert"
    },
    {
        slug: "ugadi",
        title: "Ugadi",
        image: "https://i.postimg.cc/ZnGTY8KL/ugadi.jpg",
        type: "Festival",
        link: "/festivals/ugadi",
        hint: "ugadi pachadi"
    }
];

const pageSections = [
    { id: "overview", title: "Overview", icon: BookOpen },
    { id: "traditions", title: "Traditions", icon: Sparkles },
    { id: "recipes", title: "Recipes", icon: Utensils },
    { id: "chants", title: "Chants", icon: MessageSquareQuote },
];

export default function GudiPadwaPage() {
    return (
        <div className="bg-background">
             <div className="container mx-auto px-4 py-12">
                <Card className="mb-12 overflow-hidden">
                     <Image src="https://i.postimg.cc/DwjFvPcc/gudi-padwa.webp" alt="Gudi" width={1200} height={400} className="w-full h-48 md:h-64 object-cover" data-ai-hint="gudi flag"/>
                    <div className="p-6 md:p-10 text-center">
                        <h1 className="font-headline text-4xl md:text-7xl font-bold text-primary">Gudi Padwa</h1>
                        <p className="text-xl md:text-2xl mt-2 text-muted-foreground">The Maharashtrian New Year</p>
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
                                                <h2 className="font-headline text-3xl font-bold mb-4">Auspicious Beginnings</h2>
                                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                                    <p>Gudi Padwa, celebrated with immense fervor primarily in Maharashtra and by Konkani communities, marks the vibrant arrival of spring and the dawn of the New Year. It falls on the first day of the Chaitra month, according to the lunisolar Hindu calendar. This day is considered exceptionally auspicious, believed to be the very day on which Lord Brahma, the Creator, fashioned the universe. The festival is a rich symbol of new beginnings, hope, renewal, and the victory of good over evil, heralding a time of prosperity and happiness.</p>
                                                    <p>The name of the festival itself tells a profound story. 'Padwa' is derived from the Sanskrit word 'pratipada', signifying the first day of a lunar fortnight. The 'Gudi', however, is the festival's most iconic and visually striking element—a special flag-like emblem hoisted with great reverence outside homes. This Gudi is not just a decoration; it is a powerful symbol of victory and a divine protector that is believed to ward off evil and attract prosperity. Legend holds that the Gudi commemorates the glorious victory of the Maratha warrior Chhatrapati Shivaji Maharaj, as well as the triumphant return of Lord Rama to Ayodhya after defeating Ravana. By raising the Gudi, families symbolically welcome a new year filled with health, wealth, and good fortune, celebrating the day by cleaning their homes, wearing new clothes, and preparing special festive dishes to share with loved ones.</p>
                                                </div>
                                            </div>
                                            <div className="md:w-1/3">
                                                <Image src="https://i.postimg.cc/DwjFvPcc/gudi-padwa.webp" alt="Gudi" width={400} height={600} className="rounded-lg shadow-lg" data-ai-hint="gudi flag"/>
                                            </div>
                                        </div>
                                    </section>
                                    
                                    <section id="traditions" className="scroll-mt-20">
                                        <h2 className="font-headline text-3xl font-bold mb-4">How to Celebrate Gudi Padwa</h2>
                                        <div className="space-y-4 prose max-w-none text-foreground/80">
                                            <p>The most important ritual is the hoisting of the 'Gudi'. A bright green or yellow cloth is tied to the top of a long bamboo stick, along with sugar crystals, neem leaves, a twig of mango leaves, and a garland of red flowers. This is then covered with a silver or copper pot in an inverted position. The Gudi is erected outside the home, symbolizing victory and warding off evil. Homes are decorated with intricate rangoli designs and fresh flowers to welcome the New Year. Families gather to enjoy a special feast that includes traditional dishes like Shrikhand, Puran Poli, and Aamras.</p>
                                        </div>
                                    </section>

                                    <section id="recipes" className="scroll-mt-20">
                                        <h2 className="font-headline text-3xl font-bold mb-4">Gudi Padwa Delicacies</h2>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {recipes.map(recipe => (
                                                <Link href={recipe.link || "#"} key={recipe.name}>
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

                                     <section id="chants" className="scroll-mt-20">
                                        <h2 className="font-headline text-3xl font-bold mb-4">New Year Chants</h2>
                                        <p className="prose max-w-none text-foreground/80">While raising the Gudi, which is also known as 'Brahma Dhwaj' (Brahma's flag), families recite prayers to Lord Brahma, seeking his blessings for a prosperous and happy new year. The Ganesh Atharvashirsha is also commonly chanted to remove obstacles.</p>
                                    </section>
                                </article>
                                <ShareButtons title="Gudi Padwa" />
                                <RelatedContent items={relatedContent} />
                            </main>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
