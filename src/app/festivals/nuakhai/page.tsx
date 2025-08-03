
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, Palette } from "lucide-react";
import Image from "next/image";

export default function NuakhaiPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-green-700/10">
                 <Image src="https://i.postimg.cc/YSpNpMyJ/sudarshan-poojary-FZw-Bem-Sc-Rc0-unsplash.jpg" alt="Nuakhai Festival" layout="fill" objectFit="cover" className="absolute opacity-20" data-ai-hint="odisha harvest"/>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-green-900 drop-shadow-lg">Nuakhai</h1>
                    <p className="text-xl md:text-2xl mt-4 text-green-800/90 drop-shadow-md">The Harvest Festival of Western Odisha</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />The Nine Rituals</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">Welcoming the New Rice</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Nuakhai, which translates to 'new food', is a major agricultural festival in Western Odisha. It is the equivalent of Baisakhi for Punjabis and is celebrated to welcome the new rice of the season. The festival is a time of thanksgiving to the deities and ancestors for the harvest and to pray for prosperity.</p>
                                    <p>It is believed to have started in the 20th century under Maharaja Fatenarayan Deo and typically falls in August or September. Nuakhai is a festival that reinforces family and social bonds, with people returning to their native villages to celebrate with their families.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Nine Colors of Nuakhai</h2>
                                <p className="mb-6 text-foreground/80 prose max-w-none">The festival is associated with nine colors, and therefore, it involves a series of nine rituals that are performed on the day of the festival.</p>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <Palette className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Nine Rituals</h4>
                                            <p className="text-foreground/80">The nine rituals begin with Beheren (announcement of a meeting) and end with Juhar (respect to elders). The main ritual involves offering the newly harvested rice, or 'nua', to the presiding deity of the region or the household. After the offering, the family head distributes the prasad among the members, who then consume it together.</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
