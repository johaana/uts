import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote, CalendarDays } from "lucide-react";
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
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 mb-6">
                                <TabsTrigger value="overview"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="five-days"><CalendarDays className="w-4 h-4 mr-2" />The Five Days</TabsTrigger>
                                <TabsTrigger value="rituals"><CheckCircle className="w-4 h-4 mr-2" />Rituals</TabsTrigger>
                                <TabsTrigger value="recipes"><Utensils className="w-4 h-4 mr-2" />Recipes</TabsTrigger>
                                <TabsTrigger value="culture"><Sparkles className="w-4 h-4 mr-2" />Culture</TabsTrigger>
                                <TabsTrigger value="chants"><MessageSquareQuote className="w-4 h-4 mr-2" />Chants</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Story of Diwali</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Diwali, the 'Festival of Lights', is a luminous thread in the vibrant tapestry of Indian culture. Its name, a contraction of "Deepavali," translates from Sanskrit to "row of lighted lamps." This imagery is at the heart of the festival, where countless diyas (clay lamps) flicker against the dark night, each a beacon of hope, a symbol of the enduring victory of light over darkness, good over evil, and knowledge over ignorance.</p>
                                    <p>The festival's soul is woven from numerous legends, the most famous being the return of Lord Rama to his kingdom of Ayodhya. As told in the epic Ramayana, Rama, along with his wife Sita and brother Lakshmana, returned after a fourteen-year exile and a heroic battle to defeat the ten-headed demon king, Ravana. The people of Ayodhya, their hearts overflowing with joy, illuminated the entire city with rows of diyas to welcome their righteous king. This ancient act of jubilation is recreated every year, making Diwali a celebration of homecoming, righteousness, and the dispelling of all that is dark and malevolent.</p>
                                    <p>But the light of Diwali shines on many stories. In some parts of India, it commemorates the day Lord Krishna defeated the demon Narakasura, freeing thousands of maidens from his tyrannical grasp. For others, it is a celebration of the marriage of Goddess Lakshmi, the bestower of wealth and prosperity, to Lord Vishnu. Each story adds a unique facet to the festival, yet all converge on the central theme: the triumph of dharma (righteousness) and the celebration of life's brightest aspects.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="five-days">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Five Days of Diwali (2025)</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Day 1: Dhanteras (October 19, 2025)</CardTitle>
                                            <p className="text-sm text-muted-foreground">The Festival of Wealth</p>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The festival officially begins with Dhanteras. Homes are cleaned and purified, and it is considered highly auspicious to purchase new items, especially gold, silver, or utensils. This act symbolizes the welcoming of Goddess Lakshmi and a year of prosperity. Evenings are spent worshipping Lord Dhanvantari, the physician of the gods and an incarnation of Vishnu, praying for good health and well-being.</p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Day 2: Naraka Chaturdashi / Choti Diwali (October 20, 2025)</CardTitle>
                                             <p className="text-sm text-muted-foreground">The Day of Liberation</p>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Known as 'Small Diwali', this day celebrates Lord Krishna's victory over the demon Narakasura. It is a day for rituals to cleanse the soul of all sins and impurities. Many wake before sunrise to perform a ritual bath with aromatic oils and pastes. It is a day that reaffirms the power of good to overcome all that is evil and oppressive, paving the way for the main celebration.</p>
                                        </CardContent>
                                    </Card>
                                     <Card>
                                        <CardHeader>
                                            <CardTitle>Day 3: Lakshmi Puja (October 21, 2025)</CardTitle>
                                             <p className="text-sm text-muted-foreground">The Main Celebration</p>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">This is the most significant day of Diwali. After sunset, families gather to perform the Lakshmi Puja, an elaborate worship of the Goddess of Wealth. The home, brightly lit with diyas and decorated with rangoli, becomes a shrine. Offerings are made, mantras are chanted, and the air fills with devotion. It's a magical evening of family, feasting, and fireworks, celebrating the divine blessings of prosperity and light.</p>
                                        </CardContent>
                                    </Card>
                                     <Card>
                                        <CardHeader>
                                            <CardTitle>Day 4: Govardhan Puja / Padwa (October 22, 2025)</CardTitle>
                                             <p className="text-sm text-muted-foreground">Honoring Nature and Marital Bonds</p>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">This day holds dual significance. In North India, Govardhan Puja commemorates Lord Krishna lifting the Govardhan Hill to protect the villagers of Vrindavan from the wrath of Lord Indra. Devotees create miniature hills of food to represent the mountain. In other regions, it is celebrated as Padwa, a day that honors the sacred bond of marriage, where spouses exchange gifts and reaffirm their commitment.</p>
                                        </CardContent>
                                    </Card>
                                     <Card>
                                        <CardHeader>
                                            <CardTitle>Day 5: Bhai Dooj / Bhaubeej (October 23, 2025)</CardTitle>
                                             <p className="text-sm text-muted-foreground">Celebrating Siblings</p>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The festival concludes with Bhai Dooj, a day dedicated to the beautiful bond between brothers and sisters. Sisters apply a tilak (a ceremonial mark) on their brothers' foreheads, praying for their long life and happiness. Brothers, in turn, shower their sisters with gifts. It is a heartwarming conclusion to the festivities, reinforcing family ties and love.</p>
                                        </CardContent>
                                    </Card>
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
