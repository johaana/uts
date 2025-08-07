
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote, CalendarDays, Leaf } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

const recipes = [
    { name: "Ladoo", link: "/recipes/ladoo" },
    { name: "Kaju Katli", link: "/recipes/kaju-katli" },
    { name: "Gajar Ka Halwa", link: "/recipes/gajar-ka-halwa" },
]

export default function DiwaliPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary shadow-lg">Diwali</h1>
                    <p className="text-xl md:text-2xl mt-4 text-primary/90 shadow-md">The Festival of Lights: A Triumph of Good Over Evil</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="five-days" className="py-2"><CalendarDays className="w-4 h-4 mr-2" />The Five Days</TabsTrigger>
                                <TabsTrigger value="rituals" className="py-2"><CheckCircle className="w-4 h-4 mr-2" />Rituals</TabsTrigger>
                                <TabsTrigger value="recipes" className="py-2"><Utensils className="w-4 h-4 mr-2" />Recipes</TabsTrigger>
                                <TabsTrigger value="chants" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Chants</TabsTrigger>
                                <TabsTrigger value="eco-friendly" className="py-2"><Leaf className="w-4 h-4 mr-2" />Eco-Friendly</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="md:w-2/3">
                                        <h2 className="font-headline text-3xl font-bold mb-4">The Luminous Celebration of Good's Triumph</h2>
                                        <div className="space-y-4 text-foreground/80 prose max-w-none">
                                            <p>Diwali, or Deepavali, the 'Festival of Lights', is one of the most significant and radiant festivals celebrated across India and by the Indian diaspora worldwide. Its name, derived from the Sanskrit 'Deepavali', literally means "row of lighted lamps." This imagery is the very essence of the festival, where countless 'diyas' (earthen lamps) flicker against the dark canvas of the night, each flame a powerful beacon of hope, a universal symbol of the enduring victory of light over darkness, good over evil, and knowledge over ignorance.</p>
                                            <p>The cultural and historical soul of Diwali is deeply woven into the rich tapestry of the epic Ramayana. It commemorates the triumphant return of Lord Rama, his wife Sita, and his brother Lakshmana to their kingdom of Ayodhya after a fourteen-year exile. This homecoming followed a heroic battle to defeat the ten-headed demon king, Ravana, who had abducted Sita. The people of Ayodhya, their hearts overflowing with joy and relief, illuminated the entire city with endless rows of diyas to welcome their righteous king and celebrate his return. This ancient act of jubilation is recreated every year in homes and cities, making Diwali a profound celebration of homecoming, righteousness, and the definitive dispelling of all that is dark and malevolent from human life.</p>
                                        </div>
                                    </div>
                                    <div className="md:w-1/3">
                                        <Image src="https://i.postimg.cc/SjF8HhM1/Diwali2.jpg" alt="Woman lighting Diwali Diya" width={400} height={600} className="rounded-lg shadow-lg" data-ai-hint="diwali celebration"/>
                                    </div>
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
                                <h2 className="font-headline text-3xl font-bold mb-4">How to Celebrate Diwali</h2>
                                <div className="space-y-6">
                                    <p className="text-foreground/80 prose max-w-none">Celebrating Diwali involves a series of beautiful rituals that fill the home with light and joy. The main event is the Lakshmi Puja.</p>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Step-by-Step Lakshmi Puja:</h3>
                                        <ul className="space-y-4 pl-4">
                                             <li className="flex items-start">
                                                <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                                <div>
                                                    <h4 className="font-bold">1. Clean and Decorate</h4>
                                                    <p className="text-foreground/80">Thoroughly clean your home and decorate it with rangoli, flowers, and strings of light. A clean, beautiful home is believed to welcome Goddess Lakshmi.</p>
                                                </div>
                                            </li>
                                             <li className="flex items-start">
                                                <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                                <div>
                                                    <h4 className="font-bold">2. Light Diyas</h4>
                                                    <p className="text-foreground/80">Light countless diyas (earthen lamps) and place them in every corner of your home to banish darkness and evil spirits.</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                                <div>
                                                    <h4 className="font-bold">3. Perform Puja</h4>
                                                    <p className="text-foreground/80">Perform the Lakshmi Puja in the evening. Worship Goddess Lakshmi for wealth and Lord Ganesha to remove obstacles. Offer flowers, sweets, and prayers.</p>
                                                </div>
                                            </li>
                                             <li className="flex items-start">
                                                <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                                <div>
                                                    <h4 className="font-bold">4. Exchange Gifts & Sweets</h4>
                                                    <p className="text-foreground/80">Share joy and goodwill by exchanging sweets and gifts with family, friends, and neighbors.</p>
                                                </div>
                                            </li>
                                             <li className="flex items-start">
                                                <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                                <div>
                                                    <h4 className="font-bold">5. Enjoy Fireworks</h4>
                                                    <p className="text-foreground/80">Celebrate the triumph of light with firecrackers, though many now opt for more eco-friendly celebrations.</p>
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
                                       <Link href={recipe.link} key={recipe.name}>
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
                                        Find more Diwali recipes &rarr;
                                    </Link>
                                </div>
                            </TabsContent>
                             <TabsContent value="chants">
                                <h2 className="font-headline text-3xl font-bold mb-4">Important Mantras and Chants</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Lakshmi Ashtottara Shatanamavali</CardTitle>
                                            <p className="text-sm text-muted-foreground">108 Names of Goddess Lakshmi</p>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Om Prakrityai Namah, Om Vikrityai Namah..."</p>
                                            <p className="mt-2 text-foreground/80">Chanting the 108 names of Goddess Lakshmi is a powerful way to invoke her blessings for prosperity, wealth, and well-being.</p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Kuber Mantra</CardTitle>
                                            <p className="text-sm text-muted-foreground">For Wealth and Fortune</p>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Om Yakshaya Kuberaya Vaishravanaya Dhanadhanyadhipataye, Dhanadhanyasamriddhim Me Dehi Dapaya Swaha"</p>
                                            <p className="mt-2 text-foreground/80">This mantra is chanted to seek the blessings of Lord Kuber, the treasurer of the gods, for material wealth and success.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                            <TabsContent value="eco-friendly">
                                <h2 className="font-headline text-3xl font-bold mb-4">Celebrating a Green Diwali</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Celebrate the festival of lights while being mindful of Mother Earth. A few small changes can make a big difference in reducing the environmental impact of the festivities.</p>
                                    <ul className="space-y-4 pl-4">
                                        <li className="flex items-start">
                                            <Leaf className="w-6 h-6 mr-3 mt-1 text-green-600 shrink-0"/>
                                            <div>
                                                <h4 className="font-bold">Choose Earthen Lamps</h4>
                                                <p>Opt for traditional clay diyas instead of plastic, electric lights. They are biodegradable and support local artisans. You can even paint them yourself for a personal touch.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <Leaf className="w-6 h-6 mr-3 mt-1 text-green-600 shrink-0"/>
                                            <div>
                                                <h4 className="font-bold">Natural Rangoli</h4>
                                                <p>Create beautiful rangoli using natural colors like rice flour, turmeric, coffee powder, and flower petals instead of synthetic powders that contain harmful chemicals.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <Leaf className="w-6 h-6 mr-3 mt-1 text-green-600 shrink-0"/>
                                            <div>
                                                <h4 className="font-bold">Say No to Crackers</h4>
                                                <p>Fireworks cause significant air and noise pollution, which is harmful to humans, animals, and the environment. Celebrate with light, not noise. Consider organizing a community light show or a laser show instead.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <Leaf className="w-6 h-6 mr-3 mt-1 text-green-600 shrink-0"/>
                                            <div>
                                                <h4 className="font-bold">Eco-Friendly Gifting</h4>
                                                <p>Wrap gifts in newspaper or cloth instead of plastic-based wrappers. Gift plants, handmade sweets, or eco-friendly products to your loved ones.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Diwali" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
