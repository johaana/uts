import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const recipes = [
    { name: "Modak", image: "https://placehold.co/400x300.png", hint: "sweet dumpling" },
    { name: "Puran Poli", image: "https://placehold.co/400x300.png", hint: "sweet flatbread" },
    { name: "Sundal", image: "https://placehold.co/400x300.png", hint: "chickpea salad" },
]

export default function GaneshChaturthiPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center">
                <Image src="https://images.unsplash.com/photo-1596791834185-a7c3315a4523?q=80&w=1600&h=800&fit=crop" alt="Ganesh Chaturthi celebration" layout="fill" objectFit="cover" className="opacity-20" data-ai-hint="ganesha idol festival"/>
                <div className="relative text-center text-primary-foreground">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-white shadow-lg">Ganesh Chaturthi</h1>
                    <p className="text-xl md:text-2xl mt-4 text-white/90 shadow-md">Celebrating the Birth of the Elephant God</p>
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
                                <h2 className="font-headline text-3xl font-bold mb-4">The Story of Ganesh Chaturthi</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Ganesh Chaturthi celebrates the birth of Lord Ganesha, the beloved elephant-headed god of wisdom, prosperity, and good fortune. The festival was popularized by the freedom fighter Lokmanya Tilak, who transformed it from a private celebration into a grand public event to unite people against British rule.</p>
                                    <p>Devotees bring home clay idols of Lord Ganesha, worship them for up to ten days, and then immerse them in water, symbolizing Ganesha's journey back to his celestial abode, taking with him the misfortunes of his devotees.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">How to Celebrate Ganesh Chaturthi</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Idol Installation (Sthapana)</h4>
                                            <p className="text-foreground/80">Bring a clay idol of Lord Ganesha home and place it on a decorated platform. Perform a ritual to invoke his presence in the idol.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Daily Worship (Puja)</h4>
                                            <p className="text-foreground/80">Offer daily prayers, flowers, and Ganesha's favorite sweet, 'modak'. Light lamps and incense, and perform aarti (a ritual of waving lights).</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Immersion (Visarjan)</h4>
                                            <p className="text-foreground/80">After 1, 3, 5, 7, or 10 days, the idol is taken in a grand procession for immersion in a river or the sea, accompanied by singing and dancing.</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>

                            <TabsContent value="recipes">
                                <h2 className="font-headline text-3xl font-bold mb-4">Ganesha's Favorite Foods</h2>
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
                                        Find more festive recipes &rarr;
                                    </Link>
                                </div>
                            </TabsContent>

                             <TabsContent value="chants">
                                <h2 className="font-headline text-3xl font-bold mb-4">Invocations to Ganesha</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Ganapati Atharvashirsha</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">A sacred text from the Upanishads, this is one of the most important scriptures dedicated to Lord Ganesha. Chanting it is believed to bring peace, prosperity, and remove obstacles.</p>
                                        </CardContent>
                                    </Card>
                                     <Card>
                                        <CardHeader>
                                            <CardTitle>Ganesh Stotram</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Vakratunda Mahakaya Suryakoti Samaprabha..."</p>
                                            <p className="mt-2 text-foreground/80">This powerful mantra describes Ganesha's form and seeks his blessings to make all endeavors free of obstacles.</p>
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
