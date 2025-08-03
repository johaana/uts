import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const recipes = [
    { name: "Meethe Chawal", link: "/recipes/meethe-chawal" },
    { name: "Besan Ladoo", link: "/recipes/ladoo" },
    { name: "Kheer", link: "/recipes/rasia-kheer" },
]

export default function VasantPanchamiPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-yellow-400/10">
                 <Image src="https://i.postimg.cc/tJ3RkTB3/Onam.png" alt="Saraswati Puja" layout="fill" objectFit="cover" className="absolute opacity-20" data-ai-hint="saraswati goddess" />
                <div className="relative text-center text-primary-foreground z-10">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-yellow-800 shadow-lg">Vasant Panchami</h1>
                    <p className="text-xl md:text-2xl mt-4 text-yellow-700/90 shadow-md">Heralding Spring with the Goddess of Wisdom</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Traditions</TabsTrigger>
                                <TabsTrigger value="recipes" className="py-2"><Utensils className="w-4 h-4 mr-2" />Foods</TabsTrigger>
                                <TabsTrigger value="chants" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Chants</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Arrival of Spring</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Vasant Panchami, also known as Saraswati Puja, marks the formal beginning of spring's arrival. The word 'Vasant' means spring, and 'Panchami' is the fifth day of the lunar month of Magha. It's a festival filled with the cheerful color yellow, which symbolizes the brilliance of nature and the vibrancy of life. Fields of mustard crops in rural India create a stunning yellow carpet, and people celebrate by wearing yellow clothes.</p>
                                    <p>The festival is primarily dedicated to Saraswati, the goddess of knowledge, music, art, and wisdom. It is believed that on this day, Goddess Saraswati was born. Students, scholars, and artists seek her blessings for enlightenment and success in their creative and academic pursuits. It is a particularly important day for young children, who are often initiated into their first formal lesson of writing on this auspicious day, a ritual known as 'Akshar-Abhyasam'. The festival is a beautiful reminder of the importance of knowledge and the creative arts in human life.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">How to Celebrate Vasant Panchami</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-yellow-500 shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Saraswati Puja</h4>
                                            <p className="text-foreground/80">The main ritual involves worshipping Goddess Saraswati. Idols and images of the goddess are adorned with yellow flowers, and offerings of books, musical instruments, and educational tools are made.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-yellow-500 shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Wearing Yellow</h4>
                                            <p className="text-foreground/80">Devotees wear yellow attire to honor the goddess and celebrate the color of the mustard fields, which are in full bloom during this time.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-yellow-500 shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Kite Flying</h4>
                                            <p className="text-foreground/80">In some parts of India, especially in Punjab, kite flying is a popular activity on Vasant Panchami, filling the skies with color and joy.</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>

                            <TabsContent value="recipes">
                                <h2 className="font-headline text-3xl font-bold mb-4">Yellow Delicacies</h2>
                                <p className="mb-6 text-foreground/80 prose max-w-none">The food prepared for Vasant Panchami often reflects the theme color, yellow. Sweet and savory dishes are prepared as offerings and for the family feast.</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {recipes.map(recipe => (
                                       <Link href={recipe.link} key={recipe.name}>
                                            <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
                                                <CardContent className="p-4">
                                                    <h3 className="font-headline text-xl font-bold text-center text-primary">{recipe.name}</h3>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    ))}
                                </div>
                            </TabsContent>

                             <TabsContent value="chants">
                                <h2 className="font-headline text-3xl font-bold mb-4">Saraswati Mantras</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Saraswati Vandana</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Ya Kundendu Tushara Hara Dhavala, Ya Shubhra Vastravrita..."</p>
                                            <p className="mt-2 text-foreground/80">This is one of the most famous prayers dedicated to Goddess Saraswati, describing her pure white form and seeking her blessings to remove ignorance and bestow intellect.</p>
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
