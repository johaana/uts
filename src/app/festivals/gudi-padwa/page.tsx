import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const recipes = [
    { name: "Shrikhand", image: "https://placehold.co/400x300.png", hint: "sweet yogurt" },
    { name: "Puran Poli", image: "https://placehold.co/400x300.png", hint: "sweet flatbread" },
    { name: "Kothimbir Vadi", image: "https://placehold.co/400x300.png", hint: "coriander fritter" },
]

export default function GudiPadwaPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center">
                <Image src="https://images.unsplash.com/photo-1587807316663-4972b2297ed1?q=80&w=1600&h=800&fit=crop" alt="Gudi Padwa" layout="fill" objectFit="cover" className="opacity-20" data-ai-hint="gudi flag festival"/>
                <div className="relative text-center text-primary-foreground">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-white shadow-lg">Gudi Padwa</h1>
                    <p className="text-xl md:text-2xl mt-4 text-white/90 shadow-md">The Maharashtrian New Year</p>
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
                                <h2 className="font-headline text-3xl font-bold mb-4">Auspicious Beginnings</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Gudi Padwa marks the beginning of the New Year for Marathi and Konkani Hindus. It falls on the first day of the Chaitra month, according to the lunisolar Hindu calendar. The festival symbolizes the victory of good over evil and is a time for new beginnings, prosperity, and happiness.</p>
                                    <p>The name 'Gudi Padwa' is derived from two words: 'Gudi', which means a flag or emblem of Lord Brahma, and 'Padwa', which is derived from the Sanskrit word 'pratipada', meaning the first day of a lunar fortnight.</p>
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
                                <h2 className="font-headline text-3xl font-bold mb-4">New Year Chants</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Prayer for a Prosperous Year</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">While there aren't specific chants exclusively for Gudi Padwa, families often perform a simple puja and recite prayers to Lord Brahma, seeking his blessings for a prosperous and happy new year. The Ganesh Atharvashirsha is also commonly chanted to remove obstacles and welcome good fortune.</p>
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
