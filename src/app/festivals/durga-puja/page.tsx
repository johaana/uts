import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const recipes = [
    { name: "Khichuri", image: "https://images.unsplash.com/photo-1604113589498-8f83792a6c44?q=80&w=400&h=300&fit=crop", hint: "rice and lentil dish", link: "#" },
    { name: "Labra", image: "https://images.unsplash.com/photo-1628848177430-a7d0352520da?q=80&w=400&h=300&fit=crop", hint: "mixed vegetable", link: "#" },
    { name: "Ras Malai", image: "https://images.unsplash.com/photo-1626803775151-621644546ac9?q=80&w=400&h=300&fit=crop", hint: "milk dessert", link: "/recipes/ras-malai" },
]

export default function DurgaPujaPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center">
                <Image src="https://images.unsplash.com/photo-1544275932-c64057a6e5b8?q=80&w=1600&h=800&fit=crop" alt="Durga Puja Pandal" layout="fill" objectFit="cover" className="opacity-20" data-ai-hint="durga idol pandal"/>
                <div className="relative text-center text-primary-foreground">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-white shadow-lg">Durga Puja</h1>
                    <p className="text-xl md:text-2xl mt-4 text-white/90 shadow-md">The Grand Celebration of the Mother Goddess</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6">
                                <TabsTrigger value="overview"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions"><Sparkles className="w-4 h-4 mr-2" />Traditions</TabsTrigger>
                                <TabsTrigger value="recipes"><Utensils className="w-4 h-4 mr-2" />Recipes</TabsTrigger>
                                <TabsTrigger value="chants"><MessageSquareQuote className="w-4 h-4 mr-2" />Chants</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Story of Durga Puja</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Durga Puja, more than just a festival, is a grand carnival of art, culture, and devotion that brings cities, especially Kolkata, to a standstill. It celebrates the victory of the ten-armed warrior goddess, Durga, over the formidable buffalo demon, Mahishasura. This epic battle, which lasted for ten days, symbolizes the ultimate triumph of good over evil, a theme that resonates deeply within the Hindu faith.</p>
                                    <p>But the festival is also a deeply personal celebration of homecoming. It is believed that during these five days, Goddess Durga, the daughter of the Himalayas, descends from her heavenly abode in Kailash to visit her maternal home on Earth, along with her children: Lakshmi, Saraswati, Ganesha, and Kartikeya. The entire community comes together to welcome her. Elaborate temporary temples, known as 'pandals', are constructed, each a masterpiece of artistry and creativity, housing magnificent idols of the goddess. For five days, these pandals become the hub of community life, filled with prayers, music, feasting, and cultural performances, culminating in the immersion of the idols in the river, a poignant farewell to the beloved daughter, with the promise of her return next year.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">How to Celebrate Durga Puja</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Pandal Hopping</h4>
                                            <p className="text-foreground/80">One of the main attractions is visiting different 'pandals' to see the beautiful idols of Goddess Durga and the artistic decorations.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Fasting and Feasting</h4>
                                            <p className="text-foreground/80">Many devotees fast during the day and feast in the evenings. The community kitchens at pandals, serving 'bhog' (offerings to the goddess), are a major highlight.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Cultural Performances</h4>
                                            <p className="text-foreground/80">Evenings are filled with cultural programs, including traditional music, dance (like the Dhunuchi Naach), and drama.</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>

                            <TabsContent value="recipes">
                                <h2 className="font-headline text-3xl font-bold mb-4">Bhog & Delicacies</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {recipes.map(recipe => (
                                        <Link href={recipe.link || '#'} key={recipe.name}>
                                            <Card className="overflow-hidden h-full">
                                                <Image src={recipe.image} alt={recipe.name} width={400} height={300} className="w-full h-40 object-cover" data-ai-hint={recipe.hint}/>
                                                <CardContent className="p-4">
                                                    <h3 className="font-headline text-xl font-bold text-center">{recipe.name}</h3>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    ))}
                                </div>
                                 <div className="text-center mt-6">
                                    <Link href="/recipes" className="text-accent hover:underline font-semibold">
                                        Find more Durga Puja recipes &rarr;
                                    </Link>
                                </div>
                            </TabsContent>

                             <TabsContent value="chants">
                                <h2 className="font-headline text-3xl font-bold mb-4">Mantras of the Goddess</h2>
                                <div className="space-y-6">
                                     <Card>
                                        <CardHeader>
                                            <CardTitle>Aigiri Nandini</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                             <p className="text-lg font-serif italic">"Aigiri nandini, nandita medini, visva vinodini, nandinute..."</p>
                                            <p className="mt-2 text-foreground/80">This powerful and popular hymn is often sung in praise of Goddess Durga, celebrating her fierce and compassionate nature. Its energetic rhythm captures the triumphant spirit of the festival.</p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Durga Saptashati Path</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The chanting of the Durga Saptashati, also known as the Devi Mahatmyam, is a central part of the puja. These 700 verses narrate the story of the goddess's victory over Mahishasura and are considered highly sacred.</p>
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
