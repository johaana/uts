
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote, CalendarDays, Leaf } from "lucide-react";
import Image from "next/image";

const dayColors = [
    { day: "Day 1: Pratipada", goddess: "Shailaputri", color: "Orange", significance: "Energy & Happiness" },
    { day: "Day 2: Dwitiya", goddess: "Brahmacharini", color: "White", significance: "Purity & Peace" },
    { day: "Day 3: Tritiya", goddess: "Chandraghanta", color: "Red", significance: "Beauty & Fearlessness" },
    { day: "Day 4: Chaturthi", goddess: "Kushmanda", color: "Royal Blue", significance: "Health & Wealth" },
    { day: "Day 5: Panchami", goddess: "Skandamata", color: "Yellow", significance: "Happiness & Brightness" },
    { day: "Day 6: Shashthi", goddess: "Katyayani", color: "Green", significance: "New Beginnings & Growth" },
    { day: "Day 7: Saptami", goddess: "Kalaratri", color: "Grey", significance: "Strength & Protection" },
    { day: "Day 8: Ashtami", goddess: "Mahagauri", color: "Purple", significance: "Intellect & Peace" },
    { day: "Day 9: Navami", goddess: "Siddhidatri", color: "Peacock Green", significance: "Wisdom & Fulfillment" },
];


export default function NavratriPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                <div className="relative text-center text-primary-foreground z-10">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-white shadow-lg">Navratri</h1>
                    <p className="text-xl md:text-2xl mt-4 text-white/90 shadow-md">Nine Nights of Divine Feminine Power</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-6">
                                <TabsTrigger value="overview"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="nine-nights"><CalendarDays className="w-4 h-4 mr-2" />The Nine Nights</TabsTrigger>
                                <TabsTrigger value="culture"><Sparkles className="w-4 h-4 mr-2" />Culture & Dance</TabsTrigger>
                                <TabsTrigger value="chants"><MessageSquareQuote className="w-4 h-4 mr-2" />Chants</TabsTrigger>
                                <TabsTrigger value="eco-friendly"><Leaf className="w-4 h-4 mr-2" />Eco-Friendly</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Story of Navratri</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Navratri, meaning 'nine nights' in Sanskrit, is one of Hinduism's most vibrant festivals, celebrating the victory of Goddess Durga over the demon Mahishasura. This grand festival is dedicated to the divine feminine, honoring her nine forms over nine nights. The legend begins with the demon king Mahishasur, who was granted a boon of near-invincibility. Drunk with power, he waged war on the heavens. The gods, in desperation, combined their energies to create the magnificent Goddess Durga.</p>
                                    <p>Endowed with divine weapons, Durga battled Mahishasur for nine days and nights, ultimately slaying him on the tenth day. Each night of Navratri celebrates one of her avatars, showcasing her different facets, from gentle and nurturing to fierce and protective. The festival is a period of fasting, feasting, music, and dance, symbolizing the triumph of good over evil.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="nine-nights">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Nine Nights of Navratri</h2>
                                 <p className="mb-6 text-foreground/80 prose max-w-none">Each night of Navratri is dedicated to one of the nine avatars of Goddess Durga. Devotees often wear specific colors associated with each day's goddess, adding a visual splendor to the festivities.</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {dayColors.map((day) => (
                                         <Card key={day.day} className="flex flex-col items-center text-center p-4">
                                            <div className="w-24 h-24 rounded-full border-4 mb-4" style={{borderColor: day.color.toLowerCase().replace(' ', '')}}></div>
                                            <p className="font-bold">{day.day}</p>
                                            <h3 className="font-headline text-2xl text-primary my-1">{day.goddess}</h3>
                                            <p className="text-foreground/80">{day.significance}</p>
                                            <div className="mt-2 flex items-center gap-2">
                                                <div className="w-4 h-4 rounded-full" style={{backgroundColor: day.color.toLowerCase().replace(' ', '')}}></div>
                                                <span className="font-semibold text-sm">{day.color}</span>
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>

                            <TabsContent value="culture">
                                <h2 className="font-headline text-3xl font-bold mb-4">Garba and Dandiya Raas</h2>
                                <div className="space-y-6 prose max-w-none text-foreground/80">
                                   <div className="flex flex-col md:flex-row gap-6">
                                        <div className="md:w-1/2">
                                            <div className="relative w-full h-64 bg-muted rounded-lg shadow-md">
                                                <Image src="https://i.postimg.cc/J4JFtVYT/navratri1.jpg" alt="Garba Dance" layout="fill" objectFit="cover" className="rounded-lg" data-ai-hint="garba dance"/>
                                            </div>
                                        </div>
                                        <div className="md:w-1/2">
                                             <h3 className="font-headline text-xl font-bold mb-2">The Dance of Devotion</h3>
                                            <p>Navratri is synonymous with its electrifying traditional dances, primarily Garba and Dandiya Raas. These dances are deeply spiritual acts of communal worship.</p>
                                            <p><strong>Garba:</strong> This dance is performed in a circle around a centrally lit lamp or an image of the Goddess. The circular movement symbolizes the cyclical nature of time—from birth to life to death and rebirth.</p>
                                            <p><strong>Dandiya Raas:</strong> In this dance, men and women gracefully clash decorated bamboo sticks (dandiyas), representing a mock battle between Goddess Durga and Mahishasur.</p>
                                        </div>
                                   </div>
                                </div>
                            </TabsContent>

                             <TabsContent value="chants">
                                <h2 className="font-headline text-3xl font-bold mb-4">Powerful Durga Mantras</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Durga Saptashati</CardTitle>
                                            <p className="text-sm text-muted-foreground">For Protection and Blessings</p>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Ya Devi Sarva-bhuteshu..."</p>
                                            <p className="mt-2 text-foreground/80">A collection of 700 verses that narrate the glory of Goddess Durga. Reciting parts of it is a common practice during Navratri to seek her protection and blessings.</p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Aigiri Nandini Stotram</CardTitle>
                                             <p className="text-sm text-muted-foreground">Hymn to the Divine Mother</p>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Aigiri nandini, nandita medini, visva vinodini, nandinute..."</p>
                                            <p className="mt-2 text-foreground/80">A highly energetic and popular hymn praising Goddess Durga as the daughter of the mountain king and the joy of the universe. It describes her fierce and victorious nature.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                             <TabsContent value="eco-friendly">
                                <h2 className="font-headline text-3xl font-bold mb-4">Celebrating a Green Navratri</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Celebrate the nine nights of divine energy with respect for nature. Here are some ways to have a sustainable Navratri.</p>
                                    <ul className="space-y-4 pl-4">
                                        <li className="flex items-start">
                                            <Leaf className="w-6 h-6 mr-3 mt-1 text-green-600 shrink-0"/>
                                            <div>
                                                <h4 className="font-bold">Clay Garba Pot</h4>
                                                <p>Use a traditional, decorated earthen pot for the Garba instead of ones made from synthetic materials. This honors tradition and is eco-friendly.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <Leaf className="w-6 h-6 mr-3 mt-1 text-green-600 shrink-0"/>
                                            <div>
                                                <h4 className="font-bold">Sustainable Feasting</h4>
                                                <p>Serve prasad and food on biodegradable leaf plates (pattals) or reusable utensils. Avoid single-use plastics and styrofoam to minimize waste during community feasts.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <Leaf className="w-6 h-6 mr-3 mt-1 text-green-600 shrink-0"/>
                                            <div>
                                                <h4 className="font-bold">Noise-Free Celebrations</h4>
                                                <p>Keep the volume of music at Garba and Dandiya events within permissible limits to avoid noise pollution. Respect the peace and quiet of your neighborhood.</p>
                                            </div>
                                        </li>
                                         <li className="flex items-start">
                                            <Leaf className="w-6 h-6 mr-3 mt-1 text-green-600 shrink-0"/>
                                            <div>
                                                <h4 className="font-bold">Conscious Fashion</h4>
                                                <p>Rent, borrow, or reuse traditional attire for the nine nights instead of buying new clothes that you might only wear once. This promotes a circular economy and reduces textile waste.</p>
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
