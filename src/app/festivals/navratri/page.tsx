import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote, CalendarDays, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const dayColors = [
    { day: "Day 1: Pratipada", goddess: "Shailaputri", color: "Orange", significance: "Energy & Happiness", image: "https://placehold.co/150x150.png", hint: "orange goddess" },
    { day: "Day 2: Dwitiya", goddess: "Brahmacharini", color: "White", significance: "Purity & Peace", image: "https://placehold.co/150x150.png", hint: "white goddess" },
    { day: "Day 3: Tritiya", goddess: "Chandraghanta", color: "Red", significance: "Beauty & Fearlessness", image: "https://placehold.co/150x150.png", hint: "red goddess" },
    { day: "Day 4: Chaturthi", goddess: "Kushmanda", color: "Royal Blue", significance: "Health & Wealth", image: "https://placehold.co/150x150.png", hint: "blue goddess" },
    { day: "Day 5: Panchami", goddess: "Skandamata", color: "Yellow", significance: "Happiness & Brightness", image: "https://placehold.co/150x150.png", hint: "yellow goddess" },
    { day: "Day 6: Shashthi", goddess: "Katyayani", color: "Green", significance: "New Beginnings & Growth", image: "https://placehold.co/150x150.png", hint: "green goddess" },
    { day: "Day 7: Saptami", goddess: "Kalaratri", color: "Grey", significance: "Strength & Protection", image: "https://placehold.co/150x150.png", hint: "grey goddess" },
    { day: "Day 8: Ashtami", goddess: "Mahagauri", color: "Purple", significance: "Intellect & Peace", image: "https://placehold.co/150x150.png", hint: "purple goddess" },
    { day: "Day 9: Navami", goddess: "Siddhidatri", color: "Peacock Green", significance: "Wisdom & Fulfillment", image: "https://placehold.co/150x150.png", hint: "peacock goddess" },
];


export default function NavratriPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center">
                <Image src="https://placehold.co/1600x800.png" alt="Navratri Garba Dance" layout="fill" objectFit="cover" className="opacity-20" data-ai-hint="garba dance night"/>
                <div className="relative text-center text-primary-foreground">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-white shadow-lg">Navratri</h1>
                    <p className="text-xl md:text-2xl mt-4 text-white/90 shadow-md">Nine Nights of Divine Feminine Power</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6">
                                <TabsTrigger value="overview"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="nine-nights"><CalendarDays className="w-4 h-4 mr-2" />The Nine Nights</TabsTrigger>
                                <TabsTrigger value="culture"><Sparkles className="w-4 h-4 mr-2" />Culture & Dance</TabsTrigger>
                                <TabsTrigger value="chants"><MessageSquareQuote className="w-4 h-4 mr-2" />Chants</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Story of Navratri</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Navratri, meaning 'nine nights' in Sanskrit, is one of Hinduism's most vibrant and significant festivals. It is a grand celebration dedicated to the divine feminine, honoring Goddess Durga and her nine forms. The festival unfolds over nine nights and ten days, a period filled with devotion, fasting, feasting, music, and dance. It symbolizes the victory of good over evil, as it commemorates the battle between Goddess Durga and the formidable demon Mahishasur.</p>
                                    <p>The legend begins with Mahishasur, a demon king who, through intense penance, was granted a boon of near-invincibility—he could not be defeated by any man or god. Drunk with power, he waged war on the heavens, driving the gods out of their celestial abode. In desperation, the gods—Brahma, Vishnu, and Shiva—combined their divine energies, giving birth to a magnificent and powerful goddess: Durga.</p>
                                    <p>Endowed with the weapons of all the gods, Durga rode a lion into battle. A fierce and epic confrontation ensued, lasting nine days and nights. On the tenth day, Vijayadashami, Durga emerged victorious, slaying Mahishasur and restoring peace and order to the universe. Each night of Navratri is dedicated to one of the nine avatars of Durga, celebrating her different facets, from the gentle and nurturing to the fierce and protective.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="nine-nights">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Nine Nights of Navratri</h2>
                                 <p className="mb-6 text-foreground/80 prose max-w-none">Each night of Navratri is dedicated to one of the nine avatars of Goddess Durga. Devotees often wear specific colors associated with each day's goddess, adding a visual splendor to the festivities.</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {dayColors.map((day) => (
                                         <Card key={day.day} className="flex flex-col items-center text-center p-4">
                                            <Image src={day.image} alt={day.goddess} width={100} height={100} className="rounded-full border-4 mb-4" style={{borderColor: `hsl(var(--${day.color.toLowerCase().replace(' ','-')}))`}} data-ai-hint={day.hint}/>
                                            <p className="font-bold">{day.day}</p>
                                            <h3 className="font-headline text-2xl text-primary my-1">{day.goddess}</h3>
                                            <p className="text-foreground/80">{day.significance}</p>
                                            <div className="mt-2 flex items-center gap-2">
                                                <div className="w-4 h-4 rounded-full" style={{backgroundColor: day.color.toLowerCase()}}></div>
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
                                            <Image src="https://placehold.co/600x400.png" alt="Garba dance" width={600} height={400} className="rounded-lg shadow-md" data-ai-hint="garba dance circle" />
                                        </div>
                                        <div className="md:w-1/2">
                                             <h3 className="font-headline text-xl font-bold mb-2">The Dance of Devotion</h3>
                                            <p>Navratri is synonymous with its electrifying traditional dances, primarily Garba and Dandiya Raas, especially in Gujarat, where the festival has its most spectacular expression. These dances are not just performances but are deeply spiritual acts of communal worship and celebration.</p>
                                            <p><strong>Garba:</strong> This dance is performed in a circle around a centrally lit lamp or an image of the Goddess. The circular movement symbolizes the cyclical nature of time—from birth to life to death and rebirth—with the only constant being the divine feminine at the center. Dancers clap and move in intricate steps, creating a mesmerizing rhythm of devotion.</p>
                                            <p><strong>Dandiya Raas:</strong> In this dance, men and women gracefully clash decorated bamboo sticks (dandiyas). The sound of the sticks striking each other in unison creates a vibrant, energetic atmosphere. The dance represents a mock battle between Goddess Durga and Mahishasur, a playful yet powerful enactment of the triumph of good over evil.</p>
                                        </div>
                                   </div>
                                </div>
                            </TabsContent>

                             <TabsContent value="chants">
                                <h2 className="font-headline text-3xl font-bold mb-4">Universal Mother Mantra</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Durga Sarva Badha Shanti Mantra</CardTitle>
                                            <p className="text-sm text-muted-foreground">For Overcoming All Obstacles</p>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Sarva Mangala Mangalye, Shive Sarvartha Sadhike, Sharanye Tryambake Gauri, Narayani Namostute"</p>
                                            <p className="mt-2 text-foreground/80">Meaning: "Salutations to You, O Narayani, who is the source of all auspiciousness, who is the good of all good, the consort of Shiva, who accomplishes everything, and is the ultimate refuge."</p>
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
