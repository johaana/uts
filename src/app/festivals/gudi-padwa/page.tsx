
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const recipes = [
    { name: "Shrikhand", link: "/recipes/shrikhand" },
    { name: "Puran Poli", link: "/recipes/puran-poli" },
    { name: "Kothimbir Vadi", link: "/recipes/kothimbir-vadi" },
]

export default function GudiPadwaPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                <div className="relative text-center text-primary-foreground">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary shadow-lg">Gudi Padwa</h1>
                    <p className="text-xl md:text-2xl mt-4 text-primary/90 shadow-md">The Maharashtrian New Year</p>
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
                                <h2 className="font-headline text-3xl font-bold mb-4">Auspicious Beginnings</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Gudi Padwa, celebrated with immense fervor primarily in Maharashtra and by Konkani communities, marks the vibrant arrival of spring and the dawn of the New Year. It falls on the first day of the Chaitra month, according to the lunisolar Hindu calendar. This day is considered exceptionally auspicious, believed to be the very day on which Lord Brahma, the Creator, fashioned the universe. The festival is a rich symbol of new beginnings, hope, renewal, and the victory of good over evil, heralding a time of prosperity and happiness.</p>
                                    <p>The name of the festival itself tells a profound story. 'Padwa' is derived from the Sanskrit word 'pratipada', signifying the first day of a lunar fortnight. The 'Gudi', however, is the festival's most iconic and visually striking element—a special flag-like emblem hoisted with great reverence outside homes. This Gudi is not just a decoration; it is a powerful symbol of victory and a divine protector that is believed to ward off evil and attract prosperity. Legend holds that the Gudi commemorates the glorious victory of the Maratha warrior Chhatrapati Shivaji Maharaj, as well as the triumphant return of Lord Rama to Ayodhya after defeating Ravana. By raising the Gudi, families symbolically welcome a new year filled with health, wealth, and good fortune, celebrating the day by cleaning their homes, wearing new clothes, and preparing special festive dishes to share with loved ones.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">How to Celebrate Gudi Padwa</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Raise the Gudi</h4>
                                            <p className="text-foreground/80">The most important ritual is the hoisting of the 'Gudi'. A bright green or yellow cloth is tied to the top of a long bamboo stick, along with sugar crystals, neem leaves, a twig of mango leaves, and a garland of red flowers. This is then covered with a silver or copper pot in an inverted position. The Gudi is erected outside the home, symbolizing victory and warding off evil.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Rangoli and Decorations</h4>
                                            <p className="text-foreground/80">Homes are decorated with intricate rangoli designs and fresh flowers to welcome the New Year.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Festive Feast</h4>
                                            <p className="text-foreground/80">Families gather to enjoy a special feast that includes traditional dishes like Shrikhand, Puran Poli, and Aamras.</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>

                            <TabsContent value="recipes">
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
                            </TabsContent>

                             <TabsContent value="chants">
                                <h2 className="font-headline text-3xl font-bold mb-4">New Year Chants</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Prayer for a Prosperous Year</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Brahma Dhwajaya Namostute"</p>
                                            <p className="mt-2 text-foreground/80">While raising the Gudi, which is also known as 'Brahma Dhwaj' (Brahma's flag), families recite prayers to Lord Brahma, seeking his blessings for a prosperous and happy new year. The Ganesh Atharvashirsha is also commonly chanted to remove obstacles.</p>
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
