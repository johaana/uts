
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";

export default function MopinFestivalPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-green-500/10">
                 <Image src="https://i.postimg.cc/tJnB8vjD/Hornbill-Festival.jpg" alt="Mopin Festival" layout="fill" objectFit="cover" className="absolute opacity-20" data-ai-hint="arunachal pradesh festival"/>
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
                                    <p>The Mopin festival is a vibrant harvest festival celebrated by the Galo tribe of Arunachal Pradesh. It is held in the Galo months of Lumi and Luki, which correspond to March and April in the Gregorian calendar. The festival is a celebration of fertility and prosperity, dedicated to the goddess Mopin Ane, a central figure in the animist religion of Donyi-Polo.</p>
                                    <p>Mopin signifies the start of the new agricultural season and is a time for the Galo community to pray for a bountiful harvest, and prosperity and to ward off evil spirits. The festival has become a major cultural event, with a large-scale joint celebration organized in the state capital, Itanagar, attracting people from all over the state.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Cultural Highlights</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">White Attire</h4>
                                            <p className="text-foreground/80">A unique feature of Mopin is that participants dress in traditional all-white attire, creating a striking visual spectacle.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Popir Dance</h4>
                                            <p className="text-foreground/80">The traditional dance of the festival is the Popir, an energetic and rhythmic performance that is a joy to watch.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Mithun Sacrifice</h4>
                                            <p className="text-foreground/80">A key ritual of the festival is the sacrifice of a mithun (a bovine creature). The blood of the animal is then distributed among the community as a blessing or prasad.</p>
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
                                            <p className="text-foreground/80">During the festival, people consume Apung or Poka, a locally-brewed rice beer. A special festive dish called Aamin, made of rice, meat, and bamboo shoots, is also prepared and shared.</p>
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
