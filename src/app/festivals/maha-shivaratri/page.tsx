
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

const recipes = [
    { name: "Sabudana Khichdi", link: "/recipes/sabudana-khichdi" },
    { name: "Kuttu ki Puri", link: "/recipes/kuttu-ki-puri" },
    { name: "Makhane ki Kheer", link: "/recipes/makhane-ki-kheer" },
]

export default function MahaShivaratriPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-gray-800/10">
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary shadow-lg">Maha Shivaratri</h1>
                    <p className="text-xl md:text-2xl mt-4 text-primary/90 shadow-md">The Great Night of Shiva</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Traditions</TabsTrigger>
                                <TabsTrigger value="recipes" className="py-2"><Utensils className="w-4 h-4 mr-2" />Recipes</TabsTrigger>
                                <TabsTrigger value="chants" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Chants</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="md:w-2/3">
                                        <h2 className="font-headline text-3xl font-bold mb-4">The Night of Cosmic Power</h2>
                                        <div className="space-y-4 text-foreground/80 prose max-w-none">
                                            <p>Maha Shivaratri, which translates to "the Great Night of Shiva," is one of the most significant and deeply spiritual festivals in Hinduism. It is a night of profound reverence, dedicated to honoring Lord Shiva, one of the principal deities of the Hindu Trinity, known as the destroyer of evil and the master of cosmic dance. Unlike most festivals which are celebrated during the day, Maha Shivaratri is a nocturnal vigil, a time for introspection, prayer, and meditation to connect with the primal, formless energy of Shiva.</p>
                                            <p>The festival is rich with mythological lore. One popular legend celebrates the divine marriage of Lord Shiva and Goddess Parvati on this night, symbolizing the sacred union of cosmic consciousness and divine energy. Another story narrates that it was on this night that Shiva performed the 'Tandava', the powerful and primordial dance of creation, preservation, and destruction, which steers the universe. A third legend tells of a humble hunter who, unintentionally, worshipped Shiva throughout the night and was blessed with divine grace. These stories highlight the festival's core themes: the power of devotion, the overcoming of darkness and ignorance, and the grace bestowed upon a sincere devotee.</p>
                                        </div>
                                    </div>
                                    <div className="md:w-1/3">
                                        <Image src="https://i.postimg.cc/52NbWR80/mahashivratri.jpg" alt="Lord Shiva" width={400} height={400} className="rounded-lg shadow-lg" data-ai-hint="shiva statue"/>
                                    </div>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">How to Observe Maha Shivaratri</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Fasting and Vigil (Jagarana)</h4>
                                            <p className="text-foreground/80">Many devotees observe a strict fast on this day, some abstaining even from water. They keep an all-night vigil, chanting hymns and prayers to prevent sleep, as staying awake is believed to nullify past sins and bestow great spiritual merit.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Shiva Lingam Puja</h4>
                                            <p className="text-foreground/80">The central ritual is the worship of the Shiva Lingam, the aniconic symbol of Lord Shiva. It is ceremonially bathed with milk, honey, yogurt, and water. Offerings of Bael leaves (wood apple), flowers, and fruits are made throughout the night.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Meditation and Chanting</h4>
                                            <p className="text-foreground/80">Shivaratri is considered a particularly powerful night for spiritual practices. Devotees spend the night in meditation, focusing on overcoming darkness and ignorance within themselves and chanting the sacred mantra "Om Namah Shivaya."</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>

                            <TabsContent value="recipes">
                                <h2 className="font-headline text-3xl font-bold mb-4">Fasting (Vrat) Foods</h2>
                                <p className="mb-6 text-foreground/80 prose max-w-none">Foods consumed during the Shivaratri fast are simple, sattvic, and devoid of onion, garlic, and grains. Here are some common fasting recipes.</p>
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
                                <h2 className="font-headline text-3xl font-bold mb-4">Powerful Shiva Mantras</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Panchakshari Mantra</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Om Namah Shivaya"</p>
                                            <p className="mt-2 text-foreground/80">This is one of the most potent and popular Shiva mantras. Chanting it is believed to cleanse the body and mind, destroy negativity, and lead the devotee towards spiritual enlightenment.</p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Maha Mrityunjaya Mantra</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Om Tryambakam Yajamahe Sugandhim Pushtivardhanam, Urvarukamiva Bandhanan Mrityor Mukshiya Maamritat"</p>
                                            <p className="mt-2 text-foreground/80">This great mantra is a prayer to Shiva for protection from death and for spiritual liberation. It is chanted to promote healing, rejuvenation, and fearlessness.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Maha Shivaratri" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
