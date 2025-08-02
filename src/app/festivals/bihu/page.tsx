import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const recipes = [
    { name: "Pitha", image: "https://images.unsplash.com/photo-1626094309830-0d7ea26f3094?q=80&w=400&h=300&fit=crop", hint: "rice cake", link: "#" },
    { name: "Laru", image: "https://images.unsplash.com/photo-1598164879222-74d324976134?q=80&w=400&h=300&fit=crop", hint: "sweet balls", link: "/recipes/ladoo" },
    { name: "Fish Curry with Joha Rice", image: "https://images.unsplash.com/photo-1574484284001-a1fd3b33445f?q=80&w=400&h=300&fit=crop", hint: "fish curry", link: "#" },
]

export default function BihuPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center">
                <Image src="https://images.unsplash.com/photo-1588123199420-547867f520f2?q=80&w=1600&h=800&fit=crop" alt="Bihu dance" layout="fill" objectFit="cover" className="opacity-20" data-ai-hint="assamese dance festival"/>
                <div className="relative text-center text-primary-foreground">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-white shadow-lg">Bihu</h1>
                    <p className="text-xl md:text-2xl mt-4 text-white/90 shadow-md">The Heartbeat of Assam</p>
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
                                <h2 className="font-headline text-3xl font-bold mb-4">The Spirit of Bihu</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>Bihu is not just a festival; it's the very essence of Assam, a vibrant celebration of nature, life, and the changing seasons. It's a set of three distinct festivals, each marking a crucial phase in the agricultural calendar, deeply connecting the people with the land they cultivate. The three Bihus—Bohag Bihu, Kati Bihu, and Magh Bihu—together form a cycle of celebration that reflects the rhythm of Assamese life.</p>
                                    <p><strong>Bohag Bihu (or Rongali Bihu):</strong> Celebrated in April, this is the most important of the three, marking the Assamese New Year and the arrival of spring. It's a time of immense joy and merriment, where the air fills with the sounds of the dhol and pepa. This Bihu is a celebration of fertility and new life, as farmers prepare their fields for cultivation. It is a time for young men and women to don their traditional attire and perform the energetic Bihu dance, a spectacle of youthful passion and cultural pride.</p>
                                    <p><strong>Kati Bihu (or Kongali Bihu):</strong> Observed in October, this is a more somber and reflective festival. 'Kongali' means 'poor', and this Bihu is marked by a sense of scarcity, as the granaries are usually empty and the paddy is still growing in the fields. The rituals are centered around prayer and hope for a bountiful harvest. Earthen lamps are lit in homes and in the fields to guide the souls of the ancestors and protect the maturing crops.</p>
                                    <p><strong>Magh Bihu (or Bhogali Bihu):</strong> Celebrated in January, this Bihu marks the end of the harvesting season. As the name 'Bhogali' (from 'bhog', meaning feast) suggests, this is a time of feasting and merrymaking. The granaries are full, and the community comes together to celebrate their hard work. The festival is characterized by community feasts, traditional games, and the burning of 'mejis' (bonfires made of bamboo and thatch), around which people sing, dance, and offer prayers to the fire god, Agni.</p>
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
