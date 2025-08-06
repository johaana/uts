
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const recipes = [
    { name: "Pitha", link: "/recipes/pitha" },
    { name: "Laru", link: "/recipes/laru" },
    { name: "Fish Curry with Joha Rice", link: "/recipes/fish-curry" },
]

export default function BihuPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-green-600/10">
                <div className="relative text-center text-primary-foreground p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-green-900 drop-shadow-lg">Bihu</h1>
                    <p className="text-xl md:text-2xl mt-4 text-green-800/90 drop-shadow-md">The Heartbeat of Assam</p>
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
                                <h2 className="font-headline text-3xl font-bold mb-4">The Spirit of Bihu</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>Bihu is not just one festival; it's the very soul of Assam, a vibrant and rhythmic celebration of nature, life, and the changing seasons. It's a set of three distinct yet interconnected festivals, each marking a crucial phase in the agricultural calendar and deeply rooting the people to the land they cultivate. The three Bihus—Bohag Bihu, Kati Bihu, and Magh Bihu—together form a beautiful cycle of celebration that perfectly mirrors the rhythm of Assamese life.</p>
                                    <p><strong>Bohag Bihu (or Rongali Bihu):</strong> Celebrated in mid-April, this is the most important and joyous of the three, marking the Assamese New Year and the vibrant arrival of spring. The word 'Rongali' means 'joy', and the festival is a true embodiment of it. It's a time of immense merriment, where the air fills with the lively sounds of the dhol (drum) and pepa (a buffalo hornpipe). This Bihu is a celebration of fertility and new life, as farmers prepare their fields for cultivation. It is a time for young men and women to don their traditional Muga silk attire and perform the energetic and graceful Bihu dance, a spectacle of youthful passion and immense cultural pride.</p>
                                    <p><strong>Kati Bihu (or Kongali Bihu):</strong> Observed in mid-October, this is a more somber and reflective festival. 'Kongali' means 'poor' or 'meager', as this Bihu is marked by a sense of scarcity. The granaries are usually empty at this time, and the paddy is still growing in the fields. The rituals are centered around prayer and hope, lighting lamps to protect the maturing crops from pests and ill fortune. Earthen lamps are lit in homes, in the granaries, and on bamboo poles in the paddy fields, creating a solemn and beautiful sight, a silent prayer for a bountiful harvest.</p>
                                    <p><strong>Magh Bihu (or Bhogali Bihu):</strong> Celebrated in mid-January, this Bihu marks the glorious end of the harvesting season. As the name 'Bhogali' (from 'bhog', meaning feast) suggests, this is a time of feasting and community merrymaking. The granaries are full, and the community comes together to celebrate the rewards of their hard work. The festival is characterized by grand community feasts, traditional games like buffalo fighting and egg fighting, and the burning of 'mejis'—bonfires made of bamboo and thatch—around which people sing, dance, and offer prayers to Agni, the fire god, in gratitude.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">How to Celebrate Bihu</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Build a Meji</h4>
                                            <p className="text-foreground/80">A 'Meji' (bonfire) is built with bamboo, thatch, and dried leaves. It's lit on the day of the festival, and people gather around it to sing and dance.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Community Feasting</h4>
                                            <p className="text-foreground/80">Bihu is all about 'Bhog' or feasting. People cook traditional dishes and share them with the community, strengthening social bonds.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Traditional Games</h4>
                                            <p className="text-foreground/80">Engage in traditional Assamese games like buffalo fighting (now largely symbolic), egg fighting (tekeli bhonga), and cock fighting.</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>

                            <TabsContent value="recipes">
                                <h2 className="font-headline text-3xl font-bold mb-4">Festival Foods & Delicacies</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {recipes.map(recipe => (
                                        <Link href={recipe.link || "#"} key={recipe.name}>
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
                                        Find more Bihu recipes &rarr;
                                    </Link>
                                </div>
                            </TabsContent>

                             <TabsContent value="chants">
                                <h2 className="font-headline text-3xl font-bold mb-4">Bihu Geet</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>The Soul of the Festival</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Husori geet, Bihu geet, bongeet... O mur apunar dekh..."</p>
                                            <p className="mt-2 text-foreground/80">Bihu is incomplete without its traditional folk songs, known as 'Bihu Geet'. These songs, accompanied by the beats of the dhol (drum) and pepa (a buffalo hornpipe), speak of love, nature, and the Assamese way of life. They are the heart and soul of the Bihu celebration, filling the air with vibrant energy and joy.</p>
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
