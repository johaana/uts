
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote, Leaf } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const recipes = [
    { name: "Gujiya", link: "/recipes/gujiya" },
    { name: "Thandai", link: "/recipes/thandai" },
    { name: "Ras Malai", link: "/recipes/ras-malai" },
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
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Traditions</TabsTrigger>
                                <TabsTrigger value="recipes" className="py-2"><Utensils className="w-4 h-4 mr-2" />Recipes</TabsTrigger>
                                <TabsTrigger value="chants" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Chants</TabsTrigger>
                                <TabsTrigger value="eco-friendly" className="py-2"><Leaf className="w-4 h-4 mr-2" />Eco-Friendly</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="md:w-2/3">
                                        <h2 className="font-headline text-3xl font-bold mb-4">The Great Equalizer</h2>
                                        <div className="space-y-4 text-foreground/80 prose max-w-none">
                                            <p>Holi, the world-renowned Festival of Colors, is an exuberant celebration of life, love, and the arrival of spring. It's a day when social barriers are shattered, and people from all walks of life come together to douse each other in vibrant powders and colored water. The most prominent legend is that of Prahlada and Holika. The demon king Hiranyakashipu demanded that all worship him, but his son Prahlada remained a devout follower of Lord Vishnu. Enraged, the king conspired with his sister, Holika, who was immune to fire, to kill Prahlada by tricking him into a pyre. By Vishnu's grace, Prahlada emerged unharmed while Holika was burnt to ashes. The Holika Dahan bonfire, lit on the eve of Holi, commemorates this victory of devotion over evil.</p>
                                            <p>Holi is also intrinsically linked to the divine love story of Radha and Krishna, celebrating their playful application of colors. Beyond the legends, Holi's true power lies in its social significance. It is a day of catharsis, a time to let go of inhibitions and past grievances. The act of coloring one another makes everyone equal, dissolving distinctions of caste, class, age, and gender. It is a festival of forgiveness, of mending broken relationships, and of celebrating the universal spirit of brotherhood, joy, and new beginnings.</p>
                                        </div>
                                    </div>
                                    <div className="md:w-1/3">
                                        <Image src="https://i.postimg.cc/fWFvx4J9/aceofnet-PNd98-z-An-U0-unsplash.jpg" alt="People playing holi" width={400} height={600} className="rounded-lg shadow-lg" data-ai-hint="holi celebration"/>
                                    </div>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">How to Celebrate Holi</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Holika Dahan</h4>
                                            <p className="text-foreground/80">On the eve of Holi, light a bonfire to commemorate the burning of the demoness Holika. People sing and dance around the fire.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Play with Colors</h4>
                                            <p className="text-foreground/80">The main event of Holi is the playful throwing of colored powders (gulal) and water balloons. It's a day of fun and frolic for all ages.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Share Sweets</h4>
                                            <p className="text-foreground/80">Distribute traditional sweets like 'gujiya' and enjoy refreshing drinks like 'thandai' with friends and family.</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>

                            <TabsContent value="recipes">
                                <h2 className="font-headline text-3xl font-bold mb-4">Holi Delicacies</h2>
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
                                        Find more Holi recipes &rarr;
                                    </Link>
                                </div>
                            </TabsContent>

                             <TabsContent value="chants">
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
                            </TabsContent>
                            <TabsContent value="eco-friendly">
                                <h2 className="font-headline text-3xl font-bold mb-4">How to Make Natural Holi Colors at Home</h2>
                                <div className="flex flex-col md:flex-row gap-8 items-center">
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
                                    </div>
                                    <div className="md:w-1/3">
                                        <Image src="https://i.postimg.cc/qvxZXcTy/natural-holi-colors.webp" alt="Natural Holi Colors" width={400} height={400} className="rounded-lg shadow-lg" data-ai-hint="natural colors"/>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Holi" />
                        <RelatedContent items={relatedContent} />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
