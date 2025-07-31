import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const recipes = [
    { name: "Kaju Katli", image: "https://placehold.co/400x300.png", hint: "cashew fudge" },
    { name: "Gulab Jamun", image: "https://placehold.co/400x300.png", hint: "milk solids" },
    { name: "Samosa", image: "https://placehold.co/400x300.png", hint: "fried pastry" },
]

export default function DiwaliPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center">
                <Image src="https://placehold.co/1600x800.png" alt="Diwali celebration" layout="fill" objectFit="cover" className="opacity-20" data-ai-hint="diwali celebration fireworks"/>
                <div className="relative text-center text-primary-foreground">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-white shadow-lg">Diwali</h1>
                    <p className="text-xl md:text-2xl mt-4 text-white/90 shadow-md">The Festival of Lights</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6">
                                <TabsTrigger value="overview"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="rituals"><CheckCircle className="w-4 h-4 mr-2" />Rituals</TabsTrigger>
                                <TabsTrigger value="recipes"><Utensils className="w-4 h-4 mr-2" />Recipes</TabsTrigger>
                                <TabsTrigger value="culture"><Sparkles className="w-4 h-4 mr-2" />Culture</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">History & Significance</h2>
                                <div className="space-y-4 text-foreground/80">
                                    <p>Diwali, or Deepavali, is one of India's biggest and most important holidays. The festival gets its name from the row (avali) of clay lamps (deepa) that Indians light outside their homes to symbolize the inner light that protects from spiritual darkness. This festival is as important to Hindus as the Christmas holiday is to Christians.</p>
                                    <p>The festival of Diwali is celebrated for five days. The first day is Dhanteras, the second is Choti Diwali, the third is the main Diwali or Lakshmi Puja, the fourth is Govardhan Puja, and the fifth is Bhai Dooj. Each day has its own significance and rituals. The festival symbolizes the victory of good over evil, light over darkness, and knowledge over ignorance.</p>
                                </div>
                            </TabsContent>

                            <TabsContent value="rituals">
                                <h2 className="font-headline text-3xl font-bold mb-4">Puja Vidhi & Rituals</h2>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h3 className="font-bold">Cleaning and Decoration</h3>
                                            <p className="text-foreground/80">Homes are thoroughly cleaned and decorated with diyas (oil lamps), candles, and colorful rangoli art on the floor.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h3 className="font-bold">Lakshmi Puja</h3>
                                            <p className="text-foreground/80">The main event on Diwali day. Families gather to worship Goddess Lakshmi, the goddess of wealth and prosperity, and Lord Ganesha, the remover of obstacles.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h3 className="font-bold">Exchanging Gifts</h3>
                                            <p className="text-foreground/80">Sweets and gifts are exchanged among family, friends, and neighbors as a gesture of love and goodwill.</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>

                            <TabsContent value="recipes">
                                <h2 className="font-headline text-3xl font-bold mb-4">Festival Foods</h2>
                                <p className="mb-6 text-foreground/80">Diwali is a time for feasting. Families prepare a variety of sweets (mithai) and savory snacks. Here are some popular dishes.</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {recipes.map(recipe => (
                                        <Card key={recipe.name} className="overflow-hidden">
                                            <Image src={recipe.image} alt={recipe.name} width={400} height={300} className="w-full h-40 object-cover" data-ai-hint={recipe.hint}/>
                                            <CardContent className="p-4">
                                                <h3 className="font-headline text-xl font-bold text-center">{recipe.name}</h3>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                                <div className="text-center mt-6">
                                    <Link href="/recipes" className="text-accent hover:underline font-semibold">
                                        Find more Diwali recipes &rarr;
                                    </Link>
                                </div>
                            </TabsContent>

                            <TabsContent value="culture">
                                <h2 className="font-headline text-3xl font-bold mb-4">Attire, Music & Stories</h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="font-headline text-xl font-bold mb-2">Attire</h3>
                                        <p className="text-foreground/80">People wear their finest new clothes. Women often wear sarees or lehengas, while men prefer kurtas.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-headline text-xl font-bold mb-2">Mythological Story</h3>
                                        <p className="text-foreground/80">The most popular story associated with Diwali is the return of Lord Rama to Ayodhya after defeating the demon king Ravana and completing his 14 years of exile. The people of Ayodhya lit up the city with diyas to welcome him, an act that is recreated every year.</p>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
