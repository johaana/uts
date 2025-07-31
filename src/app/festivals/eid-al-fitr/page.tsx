import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const recipes = [
    { name: "Sheer Khurma", image: "https://images.unsplash.com/photo-1625391029258-a53655383921?q=80&w=400&h=300&fit=crop", hint: "vermicelli pudding", link: "/recipes/sheer-khurma" },
    { name: "Biryani", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=400&h=300&fit=crop", hint: "spiced rice", link: "/recipes/biryani" },
    { name: "Haleem", image: "https://images.unsplash.com/photo-1599422501066-8b43f990f133?q=80&w=400&h=300&fit=crop", hint: "meat stew", link: "#" },
]

export default function EidAlFitrPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center">
                <Image src="https://images.unsplash.com/photo-1588081693449-cde6d2a7638d?q=80&w=1600&h=800&fit=crop" alt="Eid celebration" layout="fill" objectFit="cover" className="opacity-20" data-ai-hint="eid prayers mosque"/>
                <div className="relative text-center text-primary-foreground">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-white shadow-lg">Eid al-Fitr</h1>
                    <p className="text-xl md:text-2xl mt-4 text-white/90 shadow-md">The Festival of Breaking the Fast</p>
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
                                <TabsTrigger value="prayers"><MessageSquareQuote className="w-4 h-4 mr-2" />Prayers</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Joy of Ramzan Eid</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Eid al-Fitr, often called the "Festival of Breaking the Fast," is one of the most important religious holidays celebrated by Muslims worldwide. It marks the triumphant end of Ramadan, a month of fasting, prayer, reflection, and community. The festival does not commemorate a single historical event but is a celebration of the spiritual discipline and devotion shown during Ramadan. It is a time to express gratitude to Allah for the strength and endurance given during the fasting month.</p>
                                    <p>The spirit of Eid is one of joy, forgiveness, and immense gratitude. After a month of abstaining from food and drink from dawn until dusk, the arrival of the new moon signals the end of the fast and the beginning of joyous celebrations. The festival is a reminder of the importance of charity, compassion, and unity. Muslims are encouraged to forgive and forget any past animosities, visit friends and family, and share their blessings with those less fortunate through the obligatory act of 'Zakat al-Fitr', a charitable donation made before the special Eid prayers.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">How to Celebrate Eid</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Eid Prayers (Salat al-Eid)</h4>
                                            <p className="text-foreground/80">Muslims gather in large congregations for special prayers in mosques or open grounds, dressed in new clothes.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Giving 'Eidi'</h4>
                                            <p className="text-foreground/80">Elders give gifts, often money, to children, known as 'Eidi'. It's a gesture of love and blessing.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Feasting with Family & Friends</h4>
                                            <p className="text-foreground/80">A grand feast is central to Eid. Families prepare an array of sweet and savory dishes to share with loved ones and neighbors.</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>

                            <TabsContent value="recipes">
                                <h2 className="font-headline text-3xl font-bold mb-4">Eid Delicacies</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {recipes.map(recipe => (
                                        <Link href={recipe.link} key={recipe.name}>
                                            <Card className="overflow-hidden h-full">
                                                <Image src={recipe.image} alt={recipe.name} width={400} height={300} className="w-full h-40 object-cover" data-ai-hint={recipe.hint}/>
                                                <CardContent className="p-4">
                                                    <h3 className="font-headline text-xl font-bold text-center">{recipe.name}</h3>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    ))}
                                </div>
                            </TabsContent>

                             <TabsContent value="prayers">
                                <h2 className="font-headline text-3xl font-bold mb-4">Eid Prayers & Greetings</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>The Eid Takbir</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Allāhu Akbar, Allāhu Akbar, Lā ilāha illā Allāh, Allāhu Akbar, Allāhu Akbar, wa lillāhi al-ḥamd."</p>
                                            <p className="mt-2 text-foreground/80">This is the Takbir, chanted repeatedly on the way to the Eid prayers and throughout the day. It translates to "God is the greatest, God is the greatest. There is no god but God. God is the greatest, God is the greatest, and to God belongs all praise."</p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Common Greetings</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The most common greeting is "Eid Mubarak," which means "Blessed Eid." Another greeting is "Taqabbalallāhu minnā wa minkum" (May Allah accept from us and from you [our fasts and deeds]).</p>
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
