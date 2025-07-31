import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const recipes = [
    { name: "Kaju Katli", image: "https://placehold.co/400x300.png", hint: "cashew fudge" },
    { name: "Besan Ladoo", image: "https://placehold.co/400x300.png", hint: "gram flour sweet" },
    { name: "Coconut Barfi", image: "https://placehold.co/400x300.png", hint: "coconut fudge" },
]

export default function RakshaBandhanPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center">
                <Image src="https://images.unsplash.com/photo-1628045350380-4d5162a04944?q=80&w=1600&h=800&fit=crop" alt="Raksha Bandhan" layout="fill" objectFit="cover" className="opacity-20" data-ai-hint="rakhi celebration"/>
                <div className="relative text-center text-primary-foreground">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-white shadow-lg">Raksha Bandhan</h1>
                    <p className="text-xl md:text-2xl mt-4 text-white/90 shadow-md">The Sacred Thread of Protection</p>
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
                                <h2 className="font-headline text-3xl font-bold mb-4">The Bond of Siblinghood</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Raksha Bandhan is a festival that celebrates the cherished bond between brothers and sisters. The name 'Raksha Bandhan' translates to 'the bond of protection'. On this day, sisters tie a sacred thread called a 'rakhi' on their brothers' wrists, symbolizing their love and prayers for his well-being. In return, the brother promises to protect his sister from all harm.</p>
                                    <p>The festival has ancient roots, with stories like that of Draupadi and Lord Krishna illustrating the deep significance of this protective bond.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Rakhi Ceremony</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Tie the Rakhi</h4>
                                            <p className="text-foreground/80">The sister ties the rakhi on her brother's wrist while chanting a prayer for his long life and happiness.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Exchange Sweets and Gifts</h4>
                                            <p className="text-foreground/80">After the rakhi is tied, sweets are exchanged. The brother gives his sister a gift as a token of his love and promise of protection.</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>

                            <TabsContent value="recipes">
                                <h2 className="font-headline text-3xl font-bold mb-4">Sweet Treats for Siblings</h2>
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
                            </TabsContent>

                             <TabsContent value="chants">
                                <h2 className="font-headline text-3xl font-bold mb-4">Sacred Mantras</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Raksha Sutra Mantra</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Yena baddho Baliraja danavendro mahabalah, tena twam anubadhnami rakshe ma chala ma chala."</p>
                                            <p className="mt-2 text-foreground/80">"I tie upon you the same rakhi with which the most powerful and generous King Bali was bound. O Rakhi, please do not be unstable." This mantra from the Yajurveda is chanted by the sister, invoking the power of the rakhi to protect her brother.</p>
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
