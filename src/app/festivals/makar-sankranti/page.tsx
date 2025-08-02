import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Link from "next/link";

const recipes = [
    { name: "Tilgul", link: "/recipes/tilgul" },
    { name: "Puran Poli", link: "/recipes/puran-poli" },
    { name: "Khichdi", link: "/recipes/khichdi" },
]

export default function MakarSankrantiPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                <div className="relative text-center text-primary-foreground">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-white shadow-lg">Makar Sankranti</h1>
                    <p className="text-xl md:text-2xl mt-4 text-white/90 shadow-md">The Sun's Journey Northward</p>
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
                                <h2 className="font-headline text-3xl font-bold mb-4">Significance of Makar Sankranti</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                     <p>Makar Sankranti is one of the few ancient Indian festivals observed according to solar cycles, marking the sun's celestial journey into the zodiac sign of Makara (Capricorn). This transition, known as Uttarayana, is deeply significant as it heralds the end of the harsh winter and the beginning of longer, warmer days, symbolizing a period of enlightenment, peace, and prosperity. It's a festival dedicated to the Sun God, Surya, an expression of gratitude for the life-giving energy that sustains all of creation.</p>
                                    <p>The festival is a beautiful tapestry of diverse traditions across India, known by various names—Pongal in Tamil Nadu, Lohri in Punjab, and Bihu in Assam. In the epic Mahabharata, the great warrior Bhishma is said to have waited for the sun to be in Uttarayana before he willingly left his mortal coil, highlighting the auspiciousness of this period. Celebrations often involve taking holy dips in sacred rivers like the Ganga to wash away past sins, flying colorful kites that fill the sky, lighting bonfires, and preparing special sweets made from sesame (til) and jaggery (gud). The sharing of these sweets is accompanied by the saying, "Tilgul ghya, goad goad bola," which means, "Accept this til-gud and speak sweet words," a beautiful message of forgiveness and goodwill.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">How to Celebrate Makar Sankranti</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Kite Flying</h4>
                                            <p className="text-foreground/80">In many parts of India, especially Gujarat, the sky is filled with colorful kites as people of all ages participate in kite-flying competitions.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Holy Dips</h4>
                                            <p className="text-foreground/80">Taking a dip in holy rivers like the Ganga is considered auspicious, believed to wash away sins.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Bonfires and Feasting</h4>
                                            <p className="text-foreground/80">Bonfires are lit in the evening, and people gather to sing, dance, and enjoy special sweets made from sesame (til) and jaggery (gud).</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>

                            <TabsContent value="recipes">
                                <h2 className="font-headline text-3xl font-bold mb-4">Harvest Delicacies</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {recipes.map(recipe => (
                                        <Link href={recipe.link || "#"} key={recipe.name}>
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
                                <h2 className="font-headline text-3xl font-bold mb-4">Prayers to the Sun God</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Gayatri Mantra</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Om Bhuur Bhuvah Svah, Tat-savitur Varennyam, Bhargo Devasya Dhiimahi, Dhiyo Yo Nah Pracodayaat."</p>
                                            <p className="mt-2 text-foreground/80">**Translation:** "We meditate on the glory of the Creator; Who has created the Universe; Who is worthy of Worship; Who is the embodiment of Knowledge and Light; Who is the remover of all Sin and Ignorance; May He enlighten our Intellect." The Gayatri Mantra, a sacred hymn from the Vedas, is often chanted to honor the Sun God (Savitur) and seek his blessings for wisdom and enlightenment.</p>
                                        </CardContent>
                                    </Card>
                                     <Card>
                                        <CardHeader>
                                            <CardTitle>Surya Namaskar Chants</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The sequence of 12 yoga poses known as Surya Namaskar (Sun Salutation) is often accompanied by the chanting of 12 different mantras, each praising a different aspect of the Sun God, like "Om Mitraya Namah" (Salutations to the friend of all) and "Om Ravaye Namah" (Salutations to the shining one).</p>
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
