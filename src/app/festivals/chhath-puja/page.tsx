
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const recipes = [
    { name: "Thekua", link: "/recipes/thekua" },
    { name: "Rasia Kheer", link: "/recipes/rasia-kheer"  },
    { name: "Kaddu Bhaat", link: "/recipes/kaddu-bhaat"  },
]

export default function ChhathPujaPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                <Image src="https://i.postimg.cc/KYmDZCCg/chath-puja-festival1.webp" alt="Chhath Puja" layout="fill" objectFit="cover" className="absolute opacity-20" data-ai-hint="sun worship" />
                <div className="relative text-center text-primary-foreground">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-white shadow-lg">Chhath Puja</h1>
                    <p className="text-xl md:text-2xl mt-4 text-white/90 shadow-md">An Ancient Vedic Festival of Sun Worship</p>
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
                                <h2 className="font-headline text-3xl font-bold mb-4">The Essence of Chhath Puja</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                     <p>Rooted in the ancient Vedic texts of India, Chhath Puja is a profound festival of gratitude and devotion dedicated to Surya, the Sun God, and his sister, Chhathi Maiya (the sixth form of Devi Prakriti). Unlike many Hindu festivals that involve idol worship, Chhath is a celebration of nature itself, honoring the sun as the source of all life, energy, and healing. It is a festival of immense faith, purity, and discipline, observed primarily in Bihar, Jharkhand, and the Terai regions of Nepal.</p>
                                     <p>The origins of Chhath Puja are steeped in legend. It is believed that the ritual was first performed by Karna, the son of Surya, who would stand in water for hours to offer prayers to his father. Another legend connects it to the Ramayana, suggesting that Sita performed the puja after returning to Ayodhya. These stories highlight the festival's deep antiquity and its emphasis on physical and spiritual purification. The 'Vratis' (devotees who observe the fast) undertake a rigorous 36-hour fast, abstaining from even a single drop of water, showcasing an incredible display of devotion. The puja culminates in offering 'Arghya' (water with offerings) to the setting and rising sun, a beautiful ritual symbolizing reverence for the cosmic cycles of life, death, and renewal.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Four Days of Chhath</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Day 1: Nahay Khay</h4>
                                            <p className="text-foreground/80">The festival begins with 'Nahay Khay', where devotees take a holy dip, usually in the river Ganges, and bring home the holy water to prepare offerings. They eat only one meal on this day, typically 'kaddu-bhaat' (bottle gourd and rice).</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Day 2: Lohanda and Kharna</h4>
                                            <p className="text-foreground/80">A full-day fast is observed, which is broken in the evening after sunset. Devotees prepare 'Rasia-kheer' (a special rice pudding with jaggery) and rotis, offer it to the Sun God, and then eat it themselves. This meal marks the beginning of the 36-hour fast.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Day 3: Sandhya Arghya</h4>
                                            <p className="text-foreground/80">This is the main day of Chhath. After preparing the 'prasad' (offerings), devotees take a dip in the holy river and worship the setting sun. 'Arghya' (offerings) are made to the Sun God as families gather on the river banks, singing folk songs.</p>
                                        </div>
                                    </li>
                                     <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Day 4: Usha Arghya</h4>
                                            <p className="text-foreground/80">On the final day, devotees gather on the banks of the river before sunrise and offer 'Arghya' to the rising sun. The festival concludes with the breaking of the fast, and the prasad is distributed among family and friends.</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>

                            <TabsContent value="recipes">
                                <h2 className="font-headline text-3xl font-bold mb-4">Sacred Offerings (Prasad)</h2>
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
                            </TabsContent>

                             <TabsContent value="chants">
                                <h2 className="font-headline text-3xl font-bold mb-4">Chhath Geet & Mantras</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Chhath Geet</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Kelwa ke paat par, uge lan suruj dev..."</p>
                                            <p className="mt-2 text-foreground/80">Folk songs, known as Chhath Geet, are an integral part of the festival. These songs, sung in regional languages like Bhojpuri and Maithili, narrate the significance of Chhath Puja, praising the Sun God and Chhathi Maiya. They create a deeply devotional and community-oriented atmosphere.</p>
                                        </CardContent>
                                    </Card>
                                     <Card>
                                        <CardHeader>
                                            <CardTitle>Surya Arghya Mantra</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Om suryaya namah"</p>
                                            <p className="mt-2 text-foreground/80">A simple yet powerful mantra chanted while offering water to the Sun God, expressing reverence and seeking blessings for well-being, prosperity, and happiness.</p>
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
