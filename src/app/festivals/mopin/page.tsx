
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function MopinFestivalPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-green-500/10">
                <div className="absolute inset-0 z-0 opacity-30">
                    <Image src="https://i.postimg.cc/Dzv7zyFR/mopin-festival.jpg" alt="Mopin Festival" layout="fill" objectFit="cover" data-ai-hint="galo tribe" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-green-900 drop-shadow-lg">Mopin Festival</h1>
                    <p className="text-xl md:text-2xl mt-4 text-green-800/90 drop-shadow-md">Arunachal's Harvest Celebration</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Traditions</TabsTrigger>
                                <TabsTrigger value="foods" className="py-2"><Utensils className="w-4 h-4 mr-2" />Food & Drink</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Galo Tribe's Harvest</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>The Mopin festival is a vibrant and significant agricultural festival celebrated by the Galo tribe, one of the major communities of Arunachal Pradesh. It is held in the Galo months of 'Lumi' and 'Luki', which correspond to March and April in the Gregorian calendar, marking the beginning of the new agrarian season. The festival is a joyous celebration of fertility and prosperity, dedicated to the benevolent goddess Mopin Ane. The Galo people offer their prayers to the goddess to drive away evil spirits, to be blessed with good health and, most importantly, for a bountiful harvest and communal prosperity.</p>
                                    <p>Mopin has grown from a local tribal celebration to become a major cultural event in the state, with a large-scale joint celebration organized in the state capital, Itanagar. This attracts people from all over, offering a fantastic window into the rich cultural heritage and animist traditions of the Galo people.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Cultural Highlights</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Popir Dance</h4>
                                            <p className="text-foreground/80">The traditional dance of the festival is the 'Popir', an energetic and rhythmic folk dance performed by young Galo women in their traditional white attire. It's a beautiful and joyous spectacle.</p>
                                        </div>
                                    </li>
                                     <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Applying Rice Powder</h4>
                                            <p className="text-foreground/80">A key ritual of Mopin involves smearing rice powder ('eti') on each other's faces, a gesture of social harmony, love, and goodwill.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Mithun Sacrifice</h4>
                                            <p className="text-foreground/80">A central ritual of the festival is the sacrifice of a mithun (a semi-domesticated bovine creature), which is considered sacred. The blood of the animal is then distributed among the community as a blessing or 'prasad'.</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>

                             <TabsContent value="foods">
                                <h2 className="font-headline text-3xl font-bold mb-4">Festive Feast</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Apung and Aamin</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">During the festival, people consume 'Apung' or 'Poka', a locally-brewed, traditional rice beer which is an integral part of any celebration. A special festive dish called 'Aamin', made of rice, meat, and bamboo shoots, is also prepared and shared among the community, adding to the feasting and merriment.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Mopin Festival" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
