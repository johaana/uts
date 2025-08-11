
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
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-blue-900 drop-shadow-lg">Kojagiri Purnima (Sharad Purnima)</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-blue-800/90 drop-shadow-md">The Harvest Moon Festival of Nectar</p>
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
                                    <p>Kojagiri Purnima, also known as Sharad Purnima, is a serene and beautiful harvest festival celebrated on the full moon day of the Hindu lunar month of Ashwin. This luminous night marks the official end of the monsoon season and is celebrated with quiet elegance across many parts of India. The festival is primarily dedicated to Goddess Lakshmi, the bestower of wealth, prosperity, and good fortune. The very name 'Kojagiri' is derived from a poignant Sanskrit phrase, 'Ko jagarti?', which means "Who is awake?".</p>
                                    <p>According to ancient belief, on this special night, Goddess Lakshmi descends to earth. She gracefully roams the streets and observes her devotees, looking for homes where people have stayed awake in her honor. She bestows her blessings of prosperity and abundance upon those who are vigilant and engaged in worship. The moon on Sharad Purnima is exceptionally bright and is believed to shine closest to the earth, its rays imbued with special healing and nourishing properties, often described as 'Amrit' or divine nectar.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Masala Milk and Moonlight</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>The central and most cherished tradition of Kojagiri Purnima is the preparation of 'masala doodh'—a rich, sweetened milk infused with fragrant spices like saffron, cardamom, nutmeg, and chopped nuts like pistachios and almonds. This delicious milk is traditionally cooked in a large vessel and then left out in the open, under the direct moonlight, for several hours. This practice is rooted in the belief that the milk will absorb the moon's divine, curative rays, turning it into a blessed elixir.</p>
                                   <p>Families and friends gather on terraces or in open courtyards to celebrate. They spend the night awake in a 'jagarana' (vigil), often playing traditional games, singing devotional songs (bhajans), and simply enjoying the serene beauty of the full moon. After midnight, the moon-charged masala doodh is offered as 'prasad' to Goddess Lakshmi and then distributed among everyone. It's a night of gentle celebration, community bonding, and quiet spiritual observance.</p>
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
                                            <p className="text-foreground/80">There is a scientific basis to this tradition as well. On Sharad Purnima, the moon is indeed closer to the Earth, and its rays are believed to have a unique cooling effect (sheetalta) that is beneficial after the humid monsoon season. Spiritually, these rays are said to be laden with 'Amrit' (the nectar of immortality). By staying awake and consuming the moon-infused milk, devotees seek both spiritual and physical rejuvenation. The festival beautifully intertwines the quest for health, wealth, and community celebration under the auspicious and healing light of the autumn moon.</p>
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
