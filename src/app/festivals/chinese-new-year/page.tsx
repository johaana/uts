
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, Utensils, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function ChineseNewYearPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-red-600/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/TYb4tV14/chinese-new-year.webp" alt="Chinese New Year" layout="fill" objectFit="cover" data-ai-hint="dragon dance" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-red-900 drop-shadow-lg">Chinese New Year</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-red-800/90 drop-shadow-md">The Spring Festival</p>
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
                                <h2 className="font-headline text-3xl font-bold mb-4">A Celebration of New Beginnings</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Chinese New Year, also known as the Spring Festival or Lunar New Year, is the most important festival in China and for Chinese communities worldwide. The festival begins on the first day of the first month in the traditional Chinese lunar calendar and lasts for 15 days. It is a time for families to reunite, to honor deities and ancestors, and to welcome a new year with hopes for prosperity, happiness, and good fortune.</p>
                                    <p>The festival is steeped in legends, most famously that of the mythical beast Nian, which would come to prey on villagers at the start of each new year. The villagers discovered that Nian was afraid of the color red, loud noises, and fire. These discoveries led to the traditions of using red decorations, lighting firecrackers, and performing lion and dragon dances to ward off evil spirits and usher in good luck.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Reunions and Red Envelopes</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>Key traditions include the reunion dinner on New Year's Eve, a grand feast with symbolic dishes; thoroughly cleaning the house to sweep away bad luck; decorating windows and doors with red paper-cuts and couplets; and the giving of money in red envelopes ('hongbao') as a sign of good wishes. The 15-day celebration culminates with the Lantern Festival, where people hang glowing lanterns and eat sweet glutinous rice balls.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">Family, Fortune, and Renewal</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Strengthening Bonds</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">At its heart, Chinese New Year is a celebration of family. It is a time when family members travel, often across great distances, to be together. The festival reinforces the values of filial piety, respect for elders, and the importance of community. It is a time of renewal, of letting go of the past year's troubles and welcoming a fresh start filled with hope and optimism.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Chinese New Year" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
