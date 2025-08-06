
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const recipes = [
    { name: "Sakkarai Pongal", link: "/recipes/sakkarai-pongal" },
    { name: "Ven Pongal", link: "/recipes/ven-pongal" },
    { name: "Medu Vada", link: "/recipes/medu-vada" },
]

export default function PongalPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                <div className="relative text-center text-primary-foreground">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary shadow-lg">Pongal</h1>
                    <p className="text-xl md:text-2xl mt-4 text-primary/90 shadow-md">Tamil Nadu's Harvest Festival</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Traditions</TabsTrigger>
                                <TabsTrigger value="recipes" className="py-2"><Utensils className="w-4 h-4 mr-2" />Recipes</TabsTrigger>
                                <TabsTrigger value="chants" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Chants</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Essence of Pongal</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Pongal is a vibrant four-day harvest festival celebrated with immense enthusiasm in Tamil Nadu, a heartfelt expression of gratitude to nature for its bountiful blessings. The name 'Pongal' literally means 'to boil over' or 'overflow', a beautiful metaphor for the abundance, prosperity, and joy that the festival ushers in. It's a time when families thank the Sun God, Surya, for the life-sustaining energy that nurtures the crops, and the cattle, for their indispensable role in agriculture.</p>
                                    <p>The festival marks the beginning of the Tamil month of Thai, a period considered highly auspicious for new beginnings. The celebration unfolds over four days, each with its unique significance. It begins with 'Bhogi Pongal', a day for cleansing and renewal, where old items are discarded in a bonfire. The main day, 'Surya Pongal', is when the special dish, also called Pongal, is prepared. Freshly harvested rice is cooked with milk and jaggery in a new earthen pot, often outdoors, until it boils over—a moment of great jubilation. The third day, 'Mattu Pongal', is dedicated to honoring cattle, who are bathed, decorated, and fed. The festival concludes with 'Kaanum Pongal', a day for family reunions and social gatherings, strengthening community bonds and spreading happiness.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Four Days of Pongal</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Day 1: Bhogi Pongal</h4>
                                            <p className="text-foreground/80">People discard old belongings and celebrate new beginnings by lighting a bonfire.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Day 2: Surya Pongal</h4>
                                            <p className="text-foreground/80">The main festival day, dedicated to the Sun God. The special dish 'Pongal' is cooked and offered to Surya.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Day 3: Mattu Pongal</h4>
                                            <p className="text-foreground/80">This day honors cattle, which are essential for farming. Cows are bathed, decorated, and worshipped.</p>
                                        </div>
                                    </li>
                                     <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Day 4: Kaanum Pongal</h4>
                                            <p className="text-foreground/80">A day for family reunions and social gatherings. People visit relatives and friends.</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>

                            <TabsContent value="recipes">
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
                            </TabsContent>

                             <TabsContent value="chants">
                                <h2 className="font-headline text-3xl font-bold mb-4">Mantras and Greetings</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Pongalo Pongal!</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">This is the most common chant and greeting during the festival. As the Pongal dish boils and overflows from the pot, family members shout "Pongalo Pongal!". It is an exclamation of joy and gratitude for an abundant harvest.</p>
                                        </CardContent>
                                    </Card>
                                     <Card>
                                        <CardHeader>
                                            <CardTitle>Prayers to Surya</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="mt-2 text-foreground/80">While preparing and offering the Pongal dish, families offer simple prayers to Surya, the Sun God, thanking him for his energy that sustains life and agriculture. These are often personal prayers of gratitude rather than fixed mantras.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
