import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote, Leaf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const recipes = [
    { name: "Gujiya", image: "https://images.unsplash.com/photo-1617131723588-f6723467a1e3?q=80&w=400&h=300&fit=crop", hint: "sweet dumpling", link: "/recipes/gujiya" },
    { name: "Thandai", image: "https://images.unsplash.com/photo-1580538257844-94aa7d781d3d?q=80&w=400&h=300&fit=crop", hint: "cold drink", link: "/recipes/thandai" },
    { name: "Ras Malai", image: "https://i.postimg.cc/kB1gSpfL/Sweets1.jpg", hint: "lentil fritter", link: "/recipes/ras-malai" },
]

export default function HoliPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center">
                <Image src="https://i.postimg.cc/mzjssPnK/holi.jpg" alt="Holi celebration" layout="fill" objectFit="cover" className="opacity-20" data-ai-hint="holi colors festival"/>
                <div className="relative text-center text-primary-foreground">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-white shadow-lg">Holi</h1>
                    <p className="text-xl md:text-2xl mt-4 text-white/90 shadow-md">The Festival of Colors</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-6">
                                <TabsTrigger value="overview"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions"><Sparkles className="w-4 h-4 mr-2" />Traditions</TabsTrigger>
                                <TabsTrigger value="recipes"><Utensils className="w-4 h-4 mr-2" />Recipes</TabsTrigger>
                                <TabsTrigger value="chants"><MessageSquareQuote className="w-4 h-4 mr-2" />Chants</TabsTrigger>
                                <TabsTrigger value="eco-friendly"><Leaf className="w-4 h-4 mr-2" />Eco-Friendly</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Story of Holi</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Holi, the world-renowned Festival of Colors, is an exuberant celebration of life, love, and the arrival of spring. It's a day when social barriers are broken, and people from all walks of life come together to douse each other in vibrant powders and colored water. But beneath the joyous revelry lie profound ancient legends. The most prominent story is that of Prahlada and Holika. The demon king Hiranyakashipu, consumed by arrogance, demanded that everyone worship him. His own son, Prahlada, however, was a devout follower of Lord Vishnu. Enraged, the king conspired with his sister, Holika, who was immune to fire, to kill Prahlada. She tricked the boy into sitting on a pyre with her, but by Vishnu's grace, Prahlada emerged unharmed while Holika was burnt to ashes. The Holika Dahan bonfire, lit on the eve of Holi, commemorates this victory of devotion and goodness over evil.</p>
                                    <p>Holi is also intrinsically linked to the divine love story of Radha and Krishna. It is said that the young Lord Krishna, conscious of his dark blue skin, was playfully encouraged by his mother Yashoda to apply color to the fair-skinned Radha. This playful coloring blossomed into a tradition, celebrated with particular fervor in the Braj region (Mathura and Vrindavan), where the festivities last for weeks. Holi, therefore, is not just about colors; it's a festival of forgiveness, of mending broken relationships, and of celebrating the universal spirit of brotherhood and joy.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">How to Celebrate Holi</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Holika Dahan</h4>
                                            <p className="text-foreground/80">On the eve of Holi, light a bonfire to commemorate the burning of the demoness Holika. People sing and dance around the fire.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Play with Colors</h4>
                                            <p className="text-foreground/80">The main event of Holi is the playful throwing of colored powders (gulal) and water balloons. It's a day of fun and frolic for all ages.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Share Sweets</h4>
                                            <p className="text-foreground/80">Distribute traditional sweets like 'gujiya' and enjoy refreshing drinks like 'thandai' with friends and family.</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>

                            <TabsContent value="recipes">
                                <h2 className="font-headline text-3xl font-bold mb-4">Holi Delicacies</h2>
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
                                        Find more Holi recipes &rarr;
                                    </Link>
                                </div>
                            </TabsContent>

                             <TabsContent value="chants">
                                <h2 className="font-headline text-3xl font-bold mb-4">Prayers for Holi</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Holika Dahan Prayers</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">During the Holika Dahan ritual, people offer prayers to the fire god, Agni, seeking blessings and the destruction of evil forces.</p>
                                        </CardContent>
                                    </Card>
                                     <Card>
                                        <CardHeader>
                                            <CardTitle>Krishna Bhajans</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="mt-2 text-foreground/80">Holi is also associated with the divine love of Radha and Krishna. Devotional songs (bhajans) celebrating their playful and colorful 'leela' (divine play) are sung with great enthusiasm.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                            <TabsContent value="eco-friendly">
                                <h2 className="font-headline text-3xl font-bold mb-4">Celebrating a Green Holi</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Enjoy the festival of colors while protecting your skin and the environment. Here's how to have a safe and sustainable Holi.</p>
                                    <ul className="space-y-4 pl-4">
                                        <li className="flex items-start">
                                            <Leaf className="w-6 h-6 mr-3 mt-1 text-green-600 shrink-0"/>
                                            <div>
                                                <h4 className="font-bold">Use Natural Colors</h4>
                                                <p>Make your own colors from flowers like marigold and rose, or use kitchen ingredients like turmeric and beetroot. This avoids the harsh chemicals in synthetic colors that can harm your skin and pollute water bodies.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <Leaf className="w-6 h-6 mr-3 mt-1 text-green-600 shrink-0"/>
                                            <div>
                                                <h4 className="font-bold">Play a Dry Holi</h4>
                                                <p>Conserve water by playing a dry Holi with only organic gulal. Water scarcity is a serious issue, and celebrating without water is a significant step towards sustainability.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <Leaf className="w-6 h-6 mr-3 mt-1 text-green-600 shrink-0"/>
                                            <div>
                                                <h4 className="font-bold">Avoid Water Balloons</h4>
                                                <p>Plastic water balloons create unnecessary plastic waste and can harm animals. Opt for pichkaris (water guns) if you must play with water, and reuse them every year.</p>
                                            </div>
                                        </li>
                                         <li className="flex items-start">
                                            <Leaf className="w-6 h-6 mr-3 mt-1 text-green-600 shrink-0"/>
                                            <div>
                                                <h4 className="font-bold">Eco-Friendly Holika Dahan</h4>
                                                <p>Use cow dung cakes, coconut waste, and camphor for the Holika bonfire instead of wood from felled trees. This helps reduce deforestation and air pollution.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
