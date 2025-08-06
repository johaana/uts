
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const recipes = [
    { name: "Kheer", link: "/recipes/rasia-kheer" },
    { name: "Puran Poli", link: "/recipes/puran-poli" },
    { name: "Ladoo", link: "/recipes/ladoo" },
]

export default function NagPanchamiPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-gray-500/10">
                <div className="relative text-center text-primary-foreground z-10">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary shadow-lg">Nag Panchami</h1>
                    <p className="text-xl md:text-2xl mt-4 text-primary/90 shadow-md">A Day of Serpent Worship</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Traditions</TabsTrigger>
                                <TabsTrigger value="recipes" className="py-2"><Utensils className="w-4 h-4 mr-2" />Foods</TabsTrigger>
                                <TabsTrigger value="chants" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Chants</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">Reverence for Serpents</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Nag Panchami is a unique and ancient festival dedicated to the worship of serpents, or 'Nagas', celebrated on the fifth day of the bright half of the lunar month of Shravana (July/August). This festival holds deep cultural, religious, and ecological significance in Hindu tradition. Serpents, far from being just feared creatures, are revered as sacred beings associated with some of the most powerful deities. Lord Shiva, the destroyer and transformer, wears the serpent Vasuki around his neck as an ornament. Lord Vishnu, the preserver, rests on the cosmic coils of the great serpent Shesha. In this light, Nagas are seen as symbols of power, rebirth, cosmic energy, and protectors of hidden treasures.</p>
                                    <p>The festival's origins are woven into several powerful legends. The most famous story from the Mahabharata tells of the serpent king, Takshaka, who was cursed to die in a great fire sacrifice (sarpa yagna) initiated by King Janamejaya as revenge for his father's death. The wise sage Astika, whose mother was a Naga, intervened and, impressing the king with his wisdom, saved Takshaka and the entire serpent race from annihilation. Nag Panchami is celebrated to honor this event and to seek protection from snake bites, which become a more common danger in rural India as snakes are flooded out of their burrows during the monsoon season. It is a day to acknowledge the important ecological role of serpents and to foster a sense of harmony and respect for all living creatures.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">How to Observe Nag Panchami</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Offering Milk</h4>
                                            <p className="text-foreground/80">Devotees offer milk, sweets, and flowers to idols or images of snakes. Many visit temples dedicated to snake deities. It is important to note that feeding milk to live snakes is harmful and should be avoided; the offerings are symbolic.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Fasting</h4>
                                            <p className="text-foreground/80">Many people, especially women, observe a fast on this day for the well-being and protection of their brothers and family members.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">No Digging or Ploughing</h4>
                                            <p className="text-foreground/80">To avoid harming snakes in their underground burrows, activities like digging, ploughing, and tilling are traditionally avoided on this day.</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>

                            <TabsContent value="recipes">
                                <h2 className="font-headline text-3xl font-bold mb-4">Festive Foods</h2>
                                <p className="mb-6 text-foreground/80 prose max-w-none">Foods prepared are typically simple and vegetarian. Sweets are a major part of the celebration.</p>
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
                            </TabsContent>

                             <TabsContent value="chants">
                                <h2 className="font-headline text-3xl font-bold mb-4">Nag Panchami Mantras</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Sarpa Mantra</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Om Sarpaay Namah"</p>
                                            <p className="mt-2 text-foreground/80">A simple yet potent mantra chanted to pay homage to the serpent gods and seek their blessings and protection.</p>
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
