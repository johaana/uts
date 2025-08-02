import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const recipes = [
    { name: "Khechudi", link: "/recipes/khechudi" },
    { name: "Dalma", link: "/recipes/dalma" },
    { name: "Poda Pitha", link: "/recipes/poda-pitha" },
]

export default function RathYatraPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                 <Image src="https://i.postimg.cc/YSpNpMyJ/sudarshan-poojary-FZw-Bem-Sc-Rc0-unsplash.jpg" alt="Rath Yatra Chariot" layout="fill" objectFit="cover" className="absolute opacity-20" data-ai-hint="chariot festival" />
                <div className="relative text-center text-primary-foreground">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-white shadow-lg">Rath Yatra</h1>
                    <p className="text-xl md:text-2xl mt-4 text-white/90 shadow-md">The Chariot Festival of Lord Jagannath</p>
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
                                <h2 className="font-headline text-3xl font-bold mb-4">The Journey of the Deities</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Rath Yatra, the Festival of Chariots, is a monumental spectacle of faith that unfolds on the streets of Puri, Odisha. It is one of the most ancient and largest religious gatherings in the world, centered around Lord Jagannath—a form of Lord Krishna—and his siblings, Lord Balabhadra and Subhadra. The festival commemorates their annual ceremonial journey from their home in the Jagannath Temple to their aunt's residence, the Gundicha Temple, just two kilometers away. This journey is not merely a procession; it is a deeply symbolic act where the deities themselves come out of the sanctum sanctorum to meet their devotees, transcending all barriers of caste, creed, and religion.</p>
                                    <p>The sight is awe-inspiring: three massive, temple-like chariots, built anew each year and decorated with vibrant colors, are pulled by millions of devotees, their hands gripping the thick coir ropes in a collective act of service and devotion. The belief that pulling the chariot of the Lord cleanses one of all sins draws people from every corner of the globe. The air resonates with the sound of gongs, conches, and the chanting of 'Jai Jagannath!', creating an atmosphere of unparalleled spiritual fervor. The festival is a powerful testament to the idea of a living, accessible god who leaves his divine abode to mingle with the common people, reaffirming his love and connection with humanity.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">How to Celebrate Rath Yatra</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Attend the Procession</h4>
                                            <p className="text-foreground/80">Witness the grand procession of the chariots. It's considered highly auspicious to pull the ropes of the chariots.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Offer Prasadam</h4>
                                            <p className="text-foreground/80">Offer prayers and 'prasadam' (food offered to the deity) to Lord Jagannath. The 'Mahaprasad' of the Puri temple is world-famous.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Community Service</h4>
                                            <p className="text-foreground/80">Engage in community service by helping to clean the path of the chariots or distribute food and water to the devotees.</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>

                            <TabsContent value="recipes">
                                <h2 className="font-headline text-3xl font-bold mb-4">Jagannath's Feast</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {recipes.map(recipe => (
                                        <Link href={recipe.link} key={recipe.name}>
                                            <Card className="overflow-hidden h-full">
                                                <CardContent className="p-4">
                                                    <h3 className="font-headline text-xl font-bold text-center text-primary">{recipe.name}</h3>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    ))}
                                </div>
                            </TabsContent>

                             <TabsContent value="chants">
                                <h2 className="font-headline text-3xl font-bold mb-4">Hymns of Jagannath</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Jagannath Ashtakam</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Kadacit kalindi-tata-vipina-sangitaka-ravo..."</p>
                                            <p className="mt-2 text-foreground/80">A beautiful eight-verse prayer dedicated to Lord Jagannath, composed by Adi Shankaracharya. It is chanted with great devotion during the Rath Yatra, describing the glory and compassionate nature of the Lord of the Universe.</p>
                                        </CardContent>
                                    </Card>
                                     <Card>
                                        <CardHeader>
                                            <CardTitle>Hare Krishna Mahamantra</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                             <p className="text-lg font-serif italic">"Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare, Hare Rama, Hare Rama, Rama Rama, Hare Hare"</p>
                                            <p className="mt-2 text-foreground/80">The air during Rath Yatra resonates with the continuous chanting of the Hare Krishna mantra, creating a deeply spiritual and ecstatic atmosphere that unites all devotees.</p>
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
