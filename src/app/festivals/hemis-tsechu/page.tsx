
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HemisTsechuPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                 <Image src="https://i.postimg.cc/k4WjTjj3/hemis-tsechu.jpg" alt="Hemis Tsechu" layout="fill" objectFit="cover" className="absolute opacity-20" data-ai-hint="ladakh festival" />
                <div className="relative text-center text-primary-foreground">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-white shadow-lg">Hemis Tsechu</h1>
                    <p className="text-xl md:text-2xl mt-4 text-white/90 shadow-md">The Masked Dances of Ladakh</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />The Dances</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Vibrant Himalayan Spectacle</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Hemis Tsechu is a vibrant two-day festival celebrated at the historic Hemis Monastery in Ladakh, the largest and wealthiest Buddhist monastery in the region. This colorful and deeply spiritual spectacle commemorates the birth anniversary of Guru Padmasambhava, also known as the "Second Buddha," the revered 8th-century Indian Buddhist master who is credited with spreading Tantric Buddhism throughout the Himalayas. The festival is a profound expression of Buddhist culture and beliefs, drawing locals from across Ladakh and tourists from around the world to witness its unique and mesmerizing rituals against the stunning backdrop of the Trans-Himalayan landscape.</p>
                                    <p>During the festival, the entire monastery complex, usually a place of quiet contemplation, comes alive with the resonant sounds of long horns, trumpets, cymbals, and drums. The undisputed highlight of the festival is the 'Chams', a series of sacred masked dances performed by the lamas (monks) in the monastery's rectangular courtyard. These dances are not mere performances for entertainment; they are deep meditative practices. Each dance is a choreographed ritual that enacts stories of the magical deeds of Padmasambhava and dramatizes the triumph of good over evil. The lamas don elaborate brocade costumes and intricately painted, often fearsome, masks, creating a mesmerizing and otherworldly atmosphere that provides a rare glimpse into the rich spiritual heritage of Tibetan Buddhism.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Sacred Cham Dances</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Masked Performances</h4>
                                            <p className="text-foreground/80">Monks wearing elaborate costumes and masks representing various deities and demons perform a slow, choreographed dance, dramatizing religious stories and moral teachings.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Musical Accompaniment</h4>
                                            <p className="text-foreground/80">The dances are accompanied by traditional Tibetan music played on long horns (dungchen), drums, and cymbals, creating a powerful and resonant soundscape.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Unfurling the Thangka</h4>
                                            <p className="text-foreground/80">A major highlight, occurring every 12 years, is the unfurling of a giant thangka (a silk painting) of Guru Padmasambhava, which covers the entire facade of the monastery.</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">Spiritual Meaning</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Victory of Good over Evil</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The core theme of the Hemis festival is the triumph of good over evil. The dances depict the subjugation of demons and negative forces by compassionate deities, reinforcing the Buddhist principle that wisdom and compassion can overcome ignorance and suffering. It is believed that witnessing these sacred dances can bestow spiritual merit and ward off misfortunes.</p>
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
