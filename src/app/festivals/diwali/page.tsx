
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
                                            <p>While most famously linked to the Ramayana and the return of Lord Rama to Ayodhya after defeating Ravana, Diwali's significance is multifaceted. For many, it is intrinsically linked to **Lakshmi Puja**, a day of worshipping Goddess Lakshmi, the bestower of wealth and prosperity. Homes are cleaned and illuminated to welcome her blessings for the coming year. In Jainism, Diwali marks the anniversary of Lord Mahavira's attainment of moksha (liberation), while in Sikhism, it is celebrated as 'Bandi Chhor Divas', commemorating the release of Guru Hargobind from prison. At its core, Diwali is a profound celebration of homecoming, righteousness, new beginnings, and the definitive dispelling of all that is dark and malevolent from human life.</p>
                                        </div>
                                    </div>
                                    <div className="md:w-1/3">
                                        <Image src="https://i.postimg.cc/SjF8HhM1/Diwali2.jpg" alt="Woman lighting Diwali Diya" width={400} height={600} className="rounded-lg shadow-lg" data-ai-hint="diwali celebration"/>
                                    </div>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="five-days">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Five Days of Diwali: A Detailed Guide</h2>
                                <div className="space-y-8 prose max-w-none text-foreground/80">
                                    <div>
                                        <h3 className="font-headline text-2xl text-primary">Day 1: Dhanteras - The Festival of Wealth</h3>
                                        <p>The Diwali festivities begin with Dhanteras, which falls two days before the main night of Diwali. 'Dhan' means wealth and 'Teras' means the 13th day of a lunar fortnight. On this day, homes are deep-cleaned and decorated to welcome Goddess Lakshmi. The most significant tradition is the purchasing of new items, particularly gold, silver, or new utensils. This act symbolizes bringing prosperity and good fortune into the home. In the evening, a puja is performed for Lord Dhanvantari, the physician of the gods and an incarnation of Vishnu, praying for good health. A single diya, known as the 'Yama Deepam', is lit and placed outside the main door, facing south, to ward off untimely death.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-headline text-2xl text-primary">Day 2: Naraka Chaturdashi - The Day of Liberation</h3>
                                        <p>Also known as 'Choti Diwali' (Small Diwali), the second day celebrates Lord Krishna's triumphant victory over the demon Narakasura, through which he liberated 16,000 captive princesses. This day signifies the victory of good over evil and the liberation from suffering. The main ritual involves taking a sacred bath before sunrise, known as 'Abhyanga Snan', using aromatic oils and a special paste called 'ubtan'. This ritual bath is symbolic of cleansing the body and soul of all sins and impurities, preparing oneself for the main celebration of Diwali.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-headline text-2xl text-primary">Day 3: Lakshmi Puja - The Worship of the Goddess</h3>
                                        <p>This is the most important day of the festival, the night of the new moon (Amavasya). After sunset, families gather to perform the Lakshmi Puja, an elaborate worship ceremony dedicated to Goddess Lakshmi, the bestower of wealth and prosperity. Homes are brightly illuminated with rows of diyas, candles, and electric lights. Beautiful 'rangoli' patterns adorn the entrance. Alongside Lakshmi, Lord Ganesha is also worshipped as the remover of obstacles. The puja involves chanting mantras, offering sweets, fruits, and flowers, and singing aartis. The evening is a magical one, filled with family bonding, feasting, and the joyous bursting of firecrackers.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-headline text-2xl text-primary">Day 4: Govardhan Puja - Honouring Nature's Bounty</h3>
                                        <p>The fourth day holds different significance across India. In North India, it is celebrated as Govardhan Puja. This commemorates the day Lord Krishna lifted the entire Govardhan Hill with his little finger to shelter the villagers of Vrindavan from the torrential rains sent by an enraged Lord Indra. To honor this event, devotees create a miniature hillock made of cow dung or food, known as 'Annakut' (mountain of food), and worship it. In states like Maharashtra and Gujarat, this day is celebrated as 'Bali Pratipada' or 'Padwa', which honours the victory of Vamana, an incarnation of Vishnu, over the demon King Bali and the sacred bond between a husband and wife.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-headline text-2xl text-primary">Day 5: Bhai Dooj - Celebrating the Sibling Bond</h3>
                                        <p>The five-day festival culminates with Bhai Dooj (or Bhaubeej), a day that celebrates the beautiful and eternal bond between brothers and sisters. It is similar in spirit to Raksha Bandhan. On this day, sisters perform a ceremony where they apply a 'tilak' (a sacred mark) on their brother's forehead, praying for his long life, happiness, and success. They offer him sweets, and in return, the brother gives his sister gifts and takes a vow to protect her. It's a heartwarming conclusion that reinforces the strong family ties that are central to Indian culture.</p>
                                    </div>
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
