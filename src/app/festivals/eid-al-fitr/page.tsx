
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const recipes = [
    { name: "Sheer Khurma", link: "/recipes/sheer-khurma" },
    { name: "Biryani", link: "/recipes/biryani" },
    { name: "Haleem", link: "/recipes/haleem" },
]

export default function EidAlFitrPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                <div className="relative text-center text-primary-foreground z-10">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-white shadow-lg">Eid al-Fitr</h1>
                    <p className="text-xl md:text-2xl mt-4 text-white/90 shadow-md">The Festival of Breaking the Fast</p>
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
                                <TabsTrigger value="prayers" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Prayers</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="md:w-2/3">
                                        <h2 className="font-headline text-3xl font-bold mb-4">The Joyous Culmination of Ramadan</h2>
                                        <div className="space-y-4 text-foreground/80 prose max-w-none">
                                            <p>Eid al-Fitr, often joyously called the "Festival of Breaking the Fast," stands as one of the most important religious holidays celebrated by Muslims worldwide. It marks the triumphant and much-anticipated end of Ramadan, a sacred month dedicated to fasting, intensive prayer, deep reflection, and strengthening community bonds. The festival does not commemorate a single historical event but is a jubilant celebration of the spiritual discipline, self-control, and heightened devotion demonstrated during Ramadan. It is a time to express profound gratitude to Allah for providing the strength and endurance to observe the month-long fast and for the spiritual rewards that come with it.</p>
                                            <p>The spirit of Eid is one of pure joy, heartfelt forgiveness, and immense gratitude. After a month of abstaining from all food and drink from the first light of dawn until dusk, the sighting of the new crescent moon signals the end of the fast and the beginning of joyous celebrations that can last up to three days. The festival is a powerful reminder of the core Islamic values of charity, compassion, and unity. Before the special Eid prayers are held, Muslims are obligated to give 'Zakat al-Fitr', a charitable donation to the poor and needy, ensuring that everyone can partake in the festivities. It is a time for forgiveness, where past animosities are forgotten, and for strengthening social ties by visiting friends and family, sharing elaborate meals, and spreading a universal message of peace and goodwill.</p>
                                        </div>
                                    </div>
                                    <div className="md:w-1/3">
                                        <Image src="https://i.postimg.cc/zB2Ft674/shaida-safi-ud-MCW2-C12-I-unsplash.jpg" alt="Family celebrating Eid" width={400} height={600} className="rounded-lg shadow-lg" data-ai-hint="eid family"/>
                                    </div>
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
                                            <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
                                                <CardContent className="p-4">
                                                    <h3 className="font-headline text-xl font-bold text-center text-primary h-14 flex items-center justify-center">{recipe.name}</h3>
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
                                            <CardTitle>Common Greeting: Eid Mubarak</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The most common greeting is "Eid Mubarak," which simply means "Blessed Eid" or "Happy Eid."</p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>A Dua for Acceptance</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Taqabbalallāhu minnā wa minkum."</p>
                                            <p className="mt-2 text-foreground/80">This beautiful dua translates to, "May Allah accept from us and from you," referring to the good deeds and fasting performed during Ramadan. It is a heartfelt prayer for mutual acceptance and blessings.</p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>The Eid Takbir</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Allāhu Akbar, Allāhu Akbar, Lā ilāha illā Allāh, Allāhu Akbar, Allāhu Akbar, wa lillāhi al-ḥamd."</p>
                                            <p className="mt-2 text-foreground/80">This is the Takbir, chanted repeatedly on the way to the Eid prayers. It translates to "God is the greatest, God is the greatest. There is no god but God. God is the greatest, God is the greatest, and to God belongs all praise."</p>
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
