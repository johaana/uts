import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const recipes = [
    { name: "Kaju Katli", image: "https://placehold.co/400x300.png", hint: "cashew fudge" },
    { name: "Gulab Jamun", image: "https://placehold.co/400x300.png", hint: "milk solids" },
    { name: "Samosa", image: "https://placehold.co/400x300.png", hint: "fried pastry" },
]

export default function DiwaliPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center">
                <Image src="https://placehold.co/1600x800.png" alt="Diwali celebration" layout="fill" objectFit="cover" className="opacity-20" data-ai-hint="diwali celebration fireworks"/>
                <div className="relative text-center text-primary-foreground">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-white shadow-lg">Diwali</h1>
                    <p className="text-xl md:text-2xl mt-4 text-white/90 shadow-md">The Festival of Lights: A Triumph of Good Over Evil</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-6">
                                <TabsTrigger value="overview"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="rituals"><CheckCircle className="w-4 h-4 mr-2" />Rituals</TabsTrigger>
                                <TabsTrigger value="recipes"><Utensils className="w-4 h-4 mr-2" />Recipes</TabsTrigger>
                                <TabsTrigger value="culture"><Sparkles className="w-4 h-4 mr-2" />Culture</TabsTrigger>
                                <TabsTrigger value="chants"><MessageSquareQuote className="w-4 h-4 mr-2" />Chants</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">History & Significance</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Diwali, or Deepavali, stands as one of India's most magnificent and cherished holidays. The name itself, derived from Sanskrit, means "row of lights" (deepa - light, avali - row). This refers to the rows of clay lamps, or diyas, that Indians light outside their homes. These lights are a powerful symbol, representing the victory of light over spiritual darkness, good over evil, and knowledge over ignorance.</p>
                                    <p>The festival's origins are ancient, with several legends associated with it. The most prominent story is the return of Lord Rama to his kingdom of Ayodhya after defeating the demon king Ravana, as narrated in the epic Ramayana. The citizens of Ayodhya celebrated his return by illuminating the entire kingdom with diyas, an act that continues to be the centerpiece of Diwali celebrations to this day.</p>
                                    <p>Diwali is not a single-day affair but a five-day festival, with each day holding unique significance:</p>
                                    <ul>
                                        <li><strong>Dhanteras:</strong> The first day, dedicated to cleansing homes and purchasing new items, especially gold, silver, or utensils, to welcome prosperity.</li>
                                        <li><strong>Naraka Chaturdashi (Choti Diwali):</strong> The second day celebrates Lord Krishna's victory over the demon Narakasura, symbolizing the triumph of good over evil.</li>
                                        <li><strong>Lakshmi Puja:</strong> The third and main day of Diwali. Families worship Goddess Lakshmi, the bestower of wealth and prosperity, and Lord Ganesha, the remover of obstacles.</li>
                                        <li><strong>Govardhan Puja:</strong> The fourth day commemorates Lord Krishna lifting the Govardhan Hill to shelter villagers from torrential rains.</li>
                                        <li><strong>Bhai Dooj:</strong> The fifth day celebrates the bond between brothers and sisters, similar to Raksha Bandhan.</li>
                                    </ul>
                                </div>
                            </TabsContent>

                            <TabsContent value="rituals">
                                <h2 className="font-headline text-3xl font-bold mb-4">Step-by-Step Puja Vidhi & Rituals</h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Preparation Phase:</h3>
                                        <ul className="space-y-4 pl-4">
                                             <li className="flex items-start">
                                                <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                                <div>
                                                    <h4 className="font-bold">1. Thorough Cleaning (Swachhata)</h4>
                                                    <p className="text-foreground/80">Begin by deep cleaning your entire home. A clean house is believed to be a welcoming space for Goddess Lakshmi.</p>
                                                </div>
                                            </li>
                                             <li className="flex items-start">
                                                <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                                <div>
                                                    <h4 className="font-bold">2. Decoration (Sajavat)</h4>
                                                    <p className="text-foreground/80">Adorn your home's entrance with a colorful Rangoli. Hang torans (door hangings of marigold flowers and mango leaves) and light diyas in every corner to banish darkness.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Lakshmi Puja (The Main Worship):</h3>
                                        <ul className="space-y-4 pl-4">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                                <div>
                                                    <h4 className="font-bold">3. Setting up the Altar</h4>
                                                    <p className="text-foreground/80">Place a red cloth on a raised platform. Place idols or images of Goddess Lakshmi and Lord Ganesha. Arrange a kalash (a pot filled with water, mango leaves, and a coconut) alongside.</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                                <div>
                                                    <h4 className="font-bold">4. The Puja Ceremony</h4>
                                                    <p className="text-foreground/80">Light a diya. Begin with prayers to Lord Ganesha. Offer flowers, fruits, sweets (especially Kheel and Batashe), and panchamrita (a mix of milk, curd, ghee, honey, and sugar) to the deities while chanting their mantras.</p>
                                                </div>
                                            </li>
                                             <li className="flex items-start">
                                                <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                                <div>
                                                    <h4 className="font-bold">5. Aarti and Bhog</h4>
                                                    <p className="text-foreground/80">Conclude the puja by singing the Aarti for Goddess Lakshmi and Lord Ganesha. Offer the prepared bhog (food offerings) to the deities.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Post-Puja Rituals:</h3>
                                        <ul className="space-y-4 pl-4">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                                <div>
                                                    <h4 className="font-bold">6. Exchanging Gifts & Sweets</h4>
                                                    <p className="text-foreground/80">Distribute the prasad (blessed food) among family members. Exchange gifts and sweets with friends and neighbors to share joy and goodwill.</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                                <div>
                                                    <h4 className="font-bold">7. Fireworks</h4>
                                                    <p className="text-foreground/80">Traditionally, lighting fireworks was part of the celebration, though modern celebrations often opt for eco-friendly alternatives.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="recipes">
                                <h2 className="font-headline text-3xl font-bold mb-4">Festival Foods & Delicacies</h2>
                                <p className="mb-6 text-foreground/80 prose max-w-none">Diwali is a time for feasting, where kitchens come alive with the aroma of spices and sweets. Families prepare an array of 'mithai' (sweets) and savory snacks to share. Here are some quintessential Diwali dishes.</p>
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
                                        Find more Diwali recipes &rarr;
                                    </Link>
                                </div>
                            </TabsContent>

                            <TabsContent value="culture">
                                <h2 className="font-headline text-3xl font-bold mb-4">Attire, Music & Cultural Stories</h2>
                                <div className="space-y-6 prose max-w-none text-foreground/80">
                                    <div>
                                        <h3 className="font-headline text-xl font-bold mb-2">Festive Attire</h3>
                                        <p>Diwali is an occasion for people to wear their finest new clothes. Traditional attire is favored, with women often choosing vibrant sarees, lehengas, or anarkali suits, richly embroidered and embellished. Men typically wear kurtas with pajamas or dhotis, often paired with a decorated vest.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-headline text-xl font-bold mb-2">Music and Dance</h3>
                                        <p>The air during Diwali is filled with the sounds of devotional songs (bhajans) and traditional folk music. In many communities, evenings are lively with music and dance performances, celebrating the joyous spirit of the festival.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-headline text-xl font-bold mb-2">The Story of Rama and Sita</h3>
                                        <p>The core mythological story behind Diwali is the triumphant return of Lord Rama to Ayodhya. After a 14-year exile and a fierce battle in which he defeated the ten-headed demon king Ravana who had abducted his wife Sita, Rama's homecoming was a momentous event. The people of Ayodhya, overjoyed to welcome their rightful king, illuminated the entire city with rows of diyas. This act of lighting lamps is recreated every year, symbolizing the victory of righteousness and the dispelling of darkness.</p>
                                    </div>
                                </div>
                            </TabsContent>
                             <TabsContent value="chants">
                                <h2 className="font-headline text-3xl font-bold mb-4">Important Mantras and Chants</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Ganesha Mantra</CardTitle>
                                            <p className="text-sm text-muted-foreground">For removing obstacles</p>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Om Gam Ganapataye Namaha"</p>
                                            <p className="mt-2 text-foreground/80">Meaning: "Salutations to the remover of obstacles." This mantra is chanted at the beginning of the puja to ensure a smooth ceremony.</p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Lakshmi Mantra</CardTitle>
                                            <p className="text-sm text-muted-foreground">For wealth and prosperity</p>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Om Shreem Mahalakshmyai Namaha"</p>
                                            <p className="mt-2 text-foreground/80">Meaning: "Salutations to the great Goddess Lakshmi." This powerful mantra is chanted to invoke her blessings for abundance and well-being.</p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Diya Lighting Mantra</CardTitle>
                                             <p className="text-sm text-muted-foreground">For dispelling darkness</p>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Shubham Karoti Kalyanam, Arogyam Dhana Sampadah, Shatru Buddhi Vinashaya, Deepa Jyotir Namostute."</p>
                                            <p className="mt-2 text-foreground/80">Meaning: "I fold my hands before the light that brings prosperity, auspiciousness, good health, abundance of wealth, and destruction of the enemy's intellect."</p>
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
