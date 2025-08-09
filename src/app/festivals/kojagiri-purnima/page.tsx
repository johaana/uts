
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function KojagiriPurnimaPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-blue-100/20">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/L8BWtqNP/kojagiri-purnima.webp" alt="Kojagiri Purnima" layout="fill" objectFit="cover" data-ai-hint="full moon" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-blue-900 drop-shadow-lg">Kojagiri Purnima</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-blue-800/90 drop-shadow-md">The Harvest Moon Festival</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Rituals</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Night of the Awakened</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Kojagiri Purnima, also known as Sharad Purnima, is a beautiful harvest festival celebrated on the full moon day of the Hindu lunar month of Ashwin. It marks the end of the monsoon season and is celebrated with quiet elegance across many parts of India. The festival is dedicated to Goddess Lakshmi, the bestower of wealth and prosperity. The name 'Kojagiri' is derived from the Sanskrit words 'Ko jagarti?', which means "Who is awake?".</p>
                                    <p>It is believed that on this night, Goddess Lakshmi descends to earth and roams the streets, looking for homes where people are awake and worshipping her. She blesses those devotees with good fortune and prosperity. The moon on this night is believed to be exceptionally bright and close to the earth, and its rays are said to possess special healing and nourishing properties.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Masala Milk and Moonlight</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>The central tradition of Kojagiri Purnima is preparing 'masala doodh'—a rich, sweetened milk infused with saffron, cardamom, nutmeg, and chopped nuts. This milk is traditionally cooked in a large vessel and left out in the moonlight for several hours to absorb its divine, curative rays. It is believed that this moon-charged milk bestows good health and vigor.</p>
                                   <p>Families and friends gather on terraces or in open courtyards, spending the night awake ('jagarana'), playing games, singing devotional songs, and enjoying the serene beauty of the full moon. After midnight, the masala doodh is offered as 'prasad' to the Goddess and then distributed among everyone. It's a night of community bonding, gentle celebration, and spiritual observance.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">Blessings of Health and Wealth</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>The Amrit-laden Rays</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Scientifically, the moon is closest to the Earth on this day, and its rays are believed to have a unique cooling effect after the heat of the monsoon. Spiritually, the rays are said to be laden with 'Amrit' (the nectar of immortality). By staying awake and consuming the moon-infused milk, devotees seek both spiritual and physical rejuvenation. The festival beautifully blends themes of health, wealth, and community celebration under the auspicious autumn moonlight.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Kojagiri Purnima" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
