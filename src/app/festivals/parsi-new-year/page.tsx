
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote, Utensils } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ShareButtons } from "@/components/ShareButtons";

const recipes = [
    { name: "Sali Boti", link: "/recipes/sali-boti" },
    { name: "Patra ni Machchi", link: "/recipes/patra-ni-machchi" },
]

export default function ParsiNewYearPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-red-800/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/d3p6FFnw/pateti-parsi-new-year.jpg" alt="Parsi New Year" layout="fill" objectFit="cover" data-ai-hint="parsi celebration" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-red-900 drop-shadow-lg">Parsi New Year (Navroz)</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-red-800/90 drop-shadow-md">A Celebration of Renewal and New Beginnings</p>
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
                                <TabsTrigger value="significance" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">Pateti and Navroz: A Time for a Fresh Start</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>The Parsi New Year celebration is a unique two-day affair centered around introspection and renewal. It begins with **Pateti**, the last day of the old year, which is a day of repentance. On this day, individuals reflect on their thoughts, words, and deeds from the past year, seeking forgiveness for any wrongdoings. It's a time to cleanse the soul and let go of past negativity.</p>
                                    <p>The following day is **Navroz** (also spelled Nowruz), the first day of the new year and a time of joyous celebration. The Parsi community in India follows the Shahenshahi calendar, so their New Year falls in August, distinct from the global Nowruz in March. This festival marks a fresh start, where families welcome the new year with optimism, feasting, and community bonding.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Rituals and Feasting</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>On the morning of Navroz, Parsis wake up early, clean their homes, and decorate them with beautiful 'rangoli' and strings of flowers. They wear new clothes and visit the 'Agiary' (Fire Temple) to offer special prayers and sandalwood to the holy fire. This is followed by joyous gatherings where families visit each other, exchanging greetings of "Sal Mubarak!".</p>
                                   <p>A grand and elaborate feast is prepared, featuring traditional Parsi delicacies like Pulao, Patra ni Machhi (steamed fish in banana leaf), and Sali Boti (mutton curry with potato straws). Sweets like Ravo (a semolina pudding) and Falooda are also enjoyed, symbolizing the sweetness of a new beginning.</p>
                                </div>
                            </TabsContent>

                            <TabsContent value="recipes">
                                <h2 className="font-headline text-3xl font-bold mb-4">Festive Foods</h2>
                                 <p className="mb-6 text-foreground/80 prose max-w-none">Parsi cuisine is a rich blend of Persian and Gujarati flavors. Here are some classic dishes enjoyed during Navroz.</p>
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

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">Good Thoughts, Good Words, Good Deeds</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Core Zoroastrian Values</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The festival of Pateti and Navroz is a powerful reminder of the core tenets of Zoroastrianism: Humata, Hukhta, Huvarshta, which translate to 'Good Thoughts, Good Words, and Good Deeds'. The act of repentance on Pateti and the joyous celebration of Navroz symbolize the renewal of one's commitment to live a life of righteousness, truth, and charity. It's a time to leave behind past negativity and to welcome a new year with a clean conscience and a positive spirit.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Parsi New Year (Navroz)" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
