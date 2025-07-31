import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const recipes = [
    { name: "Thekua", image: "https://images.unsplash.com/photo-1604435924739-429948033575?q=80&w=400&h=300&fit=crop", hint: "wheat cookie", link: "/recipes/thekua" },
    { name: "Rasia Kheer", image: "https://images.unsplash.com/photo-1604938927599-633059dce83c?q=80&w=400&h=300&fit=crop", hint: "jaggery pudding", link: "#"  },
    { name: "Fruits and Sugarcane", image: "https://images.unsplash.com/photo-1595463567638-6b5d92a537f0?q=80&w=400&h=300&fit=crop", hint: "fruit offering", link: "#"  },
]

export default function ChhathPujaPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center">
                <Image src="https://images.unsplash.com/photo-1604435924739-429948033575?q=80&w=1600&h=800&fit=crop" alt="Chhath Puja" layout="fill" objectFit="cover" className="opacity-20" data-ai-hint="sun worship river"/>
                <div className="relative text-center text-primary-foreground">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-white shadow-lg">Chhath Puja</h1>
                    <p className="text-xl md:text-2xl mt-4 text-white/90 shadow-md">An Ancient Vedic Festival of Sun Worship</p>
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
                                            <p className="text-foreground/80">Devotees take a holy bath in a river or pond and prepare a sacred meal of rice, dal, and gourd.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Day 2: Lohanda and Kharna</h4>
                                            <p className="text-foreground/80">A full-day fast is observed, which is broken in the evening after offering prayers to the sun. The devotee prepares 'kheer' (rice pudding) as prasad.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Day 3: Sandhya Arghya</h4>
                                            <p className="text-foreground/80">The main day of Chhath involves a strict fast without water. Devotees stand in water and offer 'arghya' to the setting sun.</p>
                                        </div>
                                    </li>
                                     <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Day 4: Usha Arghya</h4>
                                            <p className="text-foreground/80">On the final day, devotees offer 'arghya' to the rising sun, breaking their fast and concluding the puja.</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>

                            <TabsContent value="recipes">
                                <h2 className="font-headline text-3xl font-bold mb-4">Sacred Offerings (Prasad)</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {recipes.map(recipe => (
                                       <Link href={recipe.link || "#"} key={recipe.name}>
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

                             <TabsContent value="chants">
                                <h2 className="font-headline text-3xl font-bold mb-4">Chhath Geet & Mantras</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Surya Arghya Mantra</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Om suryaya namah"</p>
                                            <p className="mt-2 text-foreground/80">A simple yet powerful mantra chanted while offering water to the Sun God, expressing reverence and seeking blessings.</p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Chhath Geet</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Folk songs, known as Chhath Geet, are an integral part of the festival. These songs are sung in regional languages and narrate the significance of Chhath Puja, praising the Sun God and Chhathi Maiya.</p>
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
