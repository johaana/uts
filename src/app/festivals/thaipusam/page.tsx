
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ThaipusamPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                <div className="relative text-center text-primary-foreground">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary shadow-lg">Thaipusam</h1>
                    <p className="text-xl md:text-2xl mt-4 text-primary/90 shadow-md">A Festival of Faith and Penance</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />The Kavadi</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">Devotion to Lord Murugan</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Thaipusam is a powerful and visually striking Hindu festival celebrated with intense fervor by the Tamil community, primarily in the South Indian state of Tamil Nadu, as well as in countries with large Tamil populations like Sri Lanka, Malaysia, and Singapore. It is a day of extraordinary devotion dedicated to Lord Murugan, the Hindu god of war, victory, and wisdom, and the son of Lord Shiva. The festival's name is a combination of the Tamil month, 'Thai', and the name of the star, 'Pusam'. This celestial alignment commemorates the mythological event when Lord Murugan's mother, the goddess Parvati, gave him a divine, invincible spear, or 'Vel', so he could vanquish the evil demon Soorapadman and his brothers.</p>
                                    <p>The festival is observed in the Tamil month of 'Thai' on the full moon day (Pusam). It is a time for devotees to make good on vows made throughout the year, to offer profound thanks for prayers answered, and to pray for future blessings. The central theme of Thaipusam is the triumph of good over evil and the incredible power of unwavering faith. Devotees prepare for this demanding festival by cleansing themselves both physically and spiritually, observing a strict vegetarian diet and fasting for several weeks before the main day, focusing their minds on the divine.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Kavadi Aattam (Burden Dance)</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Carrying the Kavadi</h4>
                                            <p className="text-foreground/80">The most iconic tradition of Thaipusam is the 'Kavadi Aattam'. Devotees carry a 'kavadi', a physical burden, as an act of penance and devotion. The simplest form is a wooden arch decorated with flowers and peacock feathers, carried on the shoulders. Others carry pots of milk.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Body Piercings</h4>
                                            <p className="text-foreground/80">In a stunning display of faith and endurance, many devotees engage in extreme acts of penance by piercing their skin, tongues, or cheeks with skewers and hooks. Some pull large, ornate chariots attached to their bodies with hooks. It is believed that their deep meditative state prevents them from feeling pain.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Processions</h4>
                                            <p className="text-foreground/80">Devotees, often in a trance-like state, walk for miles in a procession to a Murugan temple, accompanied by the rhythmic chanting of "Vel, Vel!" and the sound of drums.</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">Faith and Purification</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>An Act of Penance</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Thaipusam is a deeply personal and spiritual journey for its participants. The physical burdens and piercings are seen as a way to mortify the flesh, purify the soul, and overcome ego. By enduring these trials, devotees believe they can gain the grace of Lord Murugan, who will absolve them of their sins and grant their prayers for health, happiness, and prosperity.</p>
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
