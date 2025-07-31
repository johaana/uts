import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const recipes = [
    { name: "Tilgul", image: "https://placehold.co/400x300.png", hint: "sesame candy" },
    { name: "Puran Poli", image: "https://placehold.co/400x300.png", hint: "sweet flatbread" },
    { name: "Khichdi", image: "https://placehold.co/400x300.png", hint: "rice and lentil dish" },
]

export default function MakarSankrantiPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center">
                <Image src="https://images.unsplash.com/photo-1548983961-21bf2f163e5e?q=80&w=1600&h=800&fit=crop" alt="Makar Sankranti kites" layout="fill" objectFit="cover" className="opacity-20" data-ai-hint="kite festival sky"/>
                <div className="relative text-center text-primary-foreground">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-white shadow-lg">Makar Sankranti</h1>
                    <p className="text-xl md:text-2xl mt-4 text-white/90 shadow-md">The Sun's Journey Northward</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6">
                                <TabsTrigger value="overview"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions"><Sparkles className="w-4 h-4 mr-2" />Traditions</TabsTrigger>
                                <TabsTrigger value="recipes"><Utensils className="w-4 h-4 mr-2" />Recipes</TabsTrigger>
                                <TabsTrigger value="chants"><MessageSquareQuote className="w-4 h-4 mr-2" />Chants</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">Significance of Makar Sankranti</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Makar Sankranti marks the transition of the sun into the zodiac sign of Makara (Capricorn), heralding the end of winter and the beginning of longer, warmer days. It's a harvest festival celebrated across India with different names and customs, but the spirit of gratitude and joy is universal.</p>
                                    <p>The festival is dedicated to the Sun God, Surya, and is a time for new beginnings, and for people to come together and celebrate the bounties of nature.</p>
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
                            </TabsContent>

                             <TabsContent value="chants">
                                <h2 className="font-headline text-3xl font-bold mb-4">Prayers to the Sun God</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Gayatri Mantra</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="mt-2 text-foreground/80">The Gayatri Mantra, a sacred hymn from the Vedas, is often chanted to honor the Sun God and seek his blessings for wisdom and enlightenment.</p>
                                        </CardContent>
                                    </Card>
                                     <Card>
                                        <CardHeader>
                                            <CardTitle>Surya Namaskar Chants</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="mt-2 text-foreground/80">The sequence of 12 yoga poses known as Surya Namaskar (Sun Salutation) is often accompanied by the chanting of 12 different mantras, each praising a different aspect of the Sun God.</p>
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
