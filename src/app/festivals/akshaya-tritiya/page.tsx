
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const recipes = [
    { name: "Lemon Rice", link: "#" },
    { name: "Sweet Pongal", link: "/recipes/sakkarai-pongal" },
    { name: "Payasam", link: "/recipes/payasam" },
]

export default function AkshayaTritiyaPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-yellow-500/10">
                 <Image src="https://i.postimg.cc/KjKrdfsj/unfold-memory-Z9-WMZqg-ASJE-unsplash.jpg" alt="Gold coins" layout="fill" objectFit="cover" className="absolute opacity-20" data-ai-hint="gold jewelry"/>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-amber-900 drop-shadow-lg">Akshaya Tritiya</h1>
                    <p className="text-xl md:text-2xl mt-4 text-amber-800/90 drop-shadow-md">The Day of Eternal Fortune</p>
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
                                <h2 className="font-headline text-3xl font-bold mb-4">The Promise of Never-Diminishing Prosperity</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Akshaya Tritiya, celebrated on the third lunar day of the bright half of the Vaishakha month, is revered as one of the most auspicious and powerful days in the Hindu calendar. The very name of the festival holds its promise: 'Akshaya' in Sanskrit means 'never diminishing', 'imperishable', or 'eternal'. The day is believed to be imbued with a unique divine energy that ensures that any venture started, any investment made, or any act of charity performed on this day will be blessed with everlasting prosperity and success. It is a day that is free from all malefic effects, a perfect celestial alignment for new beginnings.</p>
                                    <p>The day is incredibly rich with mythological significance, woven with tales of divine boons and auspicious events. It is celebrated as the birthday of Lord Parashurama, the sixth powerful incarnation of Lord Vishnu. It is also believed to be the day when the Treta Yuga, the second of the four great epochs in Hindu cosmology, began. It was on Akshaya Tritiya that the sacred river Ganga descended to Earth from the heavens. A particularly famous tale associated with this day is that of Lord Krishna and his impoverished childhood friend, Sudama. On this very day, Sudama visited Krishna with a humble gift of puffed rice, the only thing he had to offer. In return for this simple act of devotion, Krishna blessed him with immense and inexhaustible wealth. This story powerfully reinforces the core belief of Akshaya Tritiya: that acts of devotion and charity, no matter how small, yield manifold and unending rewards.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">How to Observe Akshaya Tritiya</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Purchasing Gold</h4>
                                            <p className="text-foreground/80">One of the most popular traditions is buying gold, as it is believed to symbolize wealth and is thought to never diminish if purchased on this day.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Charity (Daan)</h4>
                                            <p className="text-foreground/80">Giving to charity is a key ritual. It is believed that 'daan' (donations) made on this day brings inexhaustible merit.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Starting New Ventures</h4>
                                            <p className="text-foreground/80">The day is considered perfect for starting new businesses, construction projects, or any significant new beginning.</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>

                            <TabsContent value="recipes">
                                <h2 className="font-headline text-3xl font-bold mb-4">Auspicious Foods</h2>
                                 <p className="mb-6 text-foreground/80 prose max-w-none">Foods prepared on Akshaya Tritiya are typically simple, sattvic (pure), and often yellow or white in color, symbolizing prosperity and purity.</p>
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
                            </TabsContent>

                             <TabsContent value="chants">
                                <h2 className="font-headline text-3xl font-bold mb-4">Mantras for Prosperity</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Lakshmi Mantra</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Om Shreem Hreem Shreem Kamale Kamalalaye Praseed Praseed, Om Shreem Hreem Shreem Mahalakshmaye Namah"</p>
                                            <p className="mt-2 text-foreground/80">Chanting mantras dedicated to Goddess Lakshmi, the goddess of wealth, is a common practice to invite prosperity into the home.</p>
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
