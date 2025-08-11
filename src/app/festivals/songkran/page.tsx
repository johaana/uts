
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, Utensils, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function SongkranPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-blue-500/10">
                <div className="absolute inset-0 z-0 opacity-30">
                    <Image src="https://i.postimg.cc/RhHJcbgG/songkran.avif" alt="Songkran Water Festival" layout="fill" objectFit="cover" data-ai-hint="water festival" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-blue-900 drop-shadow-lg">Songkran</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-blue-800/90 drop-shadow-md">The Thai New Year Water Festival</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Traditions</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">The World's Biggest Water Fight</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Songkran is the traditional Thai New Year festival, celebrated annually from April 13th to 15th. The word 'Songkran' is derived from a Sanskrit word meaning 'astrological passage', signifying a transformation or change. While the festival has deep, respectful traditions, it is most famously known to the outside world as a massive, joyous water fight. The throwing of water is a key part of the celebration, symbolizing the washing away of all misfortunes from the past year, thus cleansing and refreshing the spirit for the new year ahead.</p>
                                    <p>It is a time of immense fun and celebration, where streets are closed for traffic and transform into huge arenas for water fights. People of all ages, from children to adults, take to the streets armed with water guns, buckets, and hoses, drenching anyone and everyone in sight. The atmosphere is one of pure, unadulterated joy and camaraderie.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Respect and Renewal</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>Beyond the playful water fights, Songkran has a rich spiritual side. The first day is traditionally a time for respecting elders. Many Thais visit local temples to offer food to Buddhist monks. A key ritual is the 'Bathing the Buddha Image', where devotees pour fragrant water over Buddha statues both in temples and at home. This act is believed to bring good fortune and prosperity.</p>
                                   <p>Another important tradition is showing respect to elders by gently pouring scented water over their hands. In return, the elders give their blessings for the new year. It's also a time for spring cleaning, where homes and public spaces are cleaned to welcome the new year with a fresh start.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Time for Family and Fun</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Symbolism of Water</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The water used in Songkran is a powerful symbol of purification, cleansing, and renewal. It washes away bad luck and sins from the previous year, allowing individuals to start the new year with a clean slate. The festival is also a time to strengthen family bonds, as many Thais who work in cities travel back to their hometowns to celebrate with their loved ones. Songkran beautifully blends spiritual reverence with exuberant public celebration, making it one of the most unique and beloved festivals in the world.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Songkran (Thai Water Festival)" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
