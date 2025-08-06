
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const recipes = [
    { name: "Khichuri", link: "/recipes/khichuri" },
    { name: "Labra", link: "/recipes/labra" },
    { name: "Ras Malai", link: "/recipes/ras-malai" },
]

export default function DurgaPujaPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                <div className="relative text-center text-primary-foreground">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary shadow-lg">Durga Puja</h1>
                    <p className="text-xl md:text-2xl mt-4 text-primary/90 shadow-md">The Grand Celebration of the Mother Goddess</p>
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
                                <h2 className="font-headline text-3xl font-bold mb-4">The Grand Carnival of Divine Feminine Power</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Durga Puja is not merely a festival; it is a grand, emotive five-day carnival of art, culture, and devotion that transforms Bengal, especially the city of Kolkata, into a living, breathing art gallery. The festival celebrates the victory of the ten-armed warrior goddess, Durga, in her epic battle against the shape-shifting and formidable buffalo demon, Mahishasura. This legend is a cornerstone of Hindu mythology, a powerful narrative symbolizing the ultimate triumph of good over evil, of light vanquishing the forces of darkness, and of divine feminine power ('Shakti') restoring cosmic order.</p>
                                    <p>But beyond the cosmic battle, the festival is also a deeply personal celebration of homecoming. It is believed that during these five days, Goddess Durga, the daughter of the Himalayas and the consort of Lord Shiva, descends from her celestial abode in Kailash to visit her maternal home on Earth. She doesn't come alone; she is accompanied by her beloved children: the wise Ganesha, the brave Kartikeya, the learned Saraswati, and the prosperous Lakshmi. The entire community comes together to welcome her. Elaborate temporary temples, known as 'pandals', are constructed, each a breathtaking masterpiece of artistry and creativity, housing magnificent, hand-sculpted idols of the goddess and her family. For five days, these pandals become the pulsating heart of community life, filled with the sounds of dhak drums, the fragrance of incense, prayers, music, feasting, and cultural performances, culminating in the immersion of the idols in the river—a poignant farewell to the beloved daughter, filled with the bittersweet promise of her return next year, 'Asche bochor abar hobe!' (It will happen again next year!).</p>
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
