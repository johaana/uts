
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote, CheckCircle } from "lucide-react";
import Image from "next/image";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/product-data";

export default function KarvaChauthPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-pink-500/10">
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-pink-900 drop-shadow-lg">Karva Chauth</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-pink-800/90 drop-shadow-md">A Festival of Love and Devotion</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />The Ritual</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                 <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="md:order-2 md:w-1/3">
                                        <Image src="https://i.postimg.cc/k500G1RW/karva-chauth.webp" alt="Karva Chauth Puja" width={400} height={400} className="rounded-lg shadow-lg w-full" data-ai-hint="karva chauth puja"/>
                                    </div>
                                    <div className="md:order-1 md:w-2/3">
                                        <h2 className="font-headline text-3xl font-bold mb-4">The Day-long Fast</h2>
                                        <div className="space-y-4 text-foreground/80 prose max-w-none">
                                            <p>Karva Chauth is a traditional Hindu festival celebrated primarily in North India, where married women observe a day-long fast, from sunrise to moonrise, for the safety, prosperity, and long life of their husbands. The festival is a beautiful testament to love, sacrifice, and the sacred bond of marriage. In modern times, it has also become a symbol of mutual love and respect, with many husbands also observing the fast alongside their wives.</p>
                                            <p>The name itself is significant: 'Karva' refers to the earthen pot through which water is offered to the moon, and 'Chauth' means the fourth day, as it falls on the fourth day after the full moon in the Hindu month of Kartik.</p>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Rituals of the Day</h2>
                                <ul className="space-y-4 pl-4 mb-8">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Sargi</h4>
                                            <p className="text-foreground/80">The day begins before sunrise with 'Sargi', a meal prepared by the mother-in-law, which the fasting woman consumes to sustain her through the day.</p>
                                        </div>
                                    </li>
                                     <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Puja and Katha</h4>
                                            <p className="text-foreground/80">In the evening, women dress in beautiful traditional attire, often their wedding outfits, and gather to perform a special puja and narrate the story (katha) of Karva Chauth.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Breaking the Fast</h4>
                                            <p className="text-foreground/80">The fast is broken only after sighting the moon. The woman looks at the moon through a sieve, then at her husband's face, before he offers her the first sip of water and bite of food.</p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="not-prose my-10 p-6 bg-primary/5 rounded-lg">
                                    <h3 className="font-headline text-2xl font-bold mb-4 text-center text-primary">Karva Chauth Shopping Guide</h3>
                                    <p className="text-center text-muted-foreground mb-6">Get ready for the special day with these essential puja items.</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <ProductCard product={products.craftsWorldKarwaThali} />
                                        <ProductCard product={products.tiedRibbonsKarwaThali} />
                                    </div>
                                </div>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Celebration of Marital Bond</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Love and Sacrifice</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Karva Chauth is a powerful expression of love, devotion, and sacrifice. The rigorous fast is a physical testament to the wife's prayers for her husband's well-being. The festival strengthens the marital bond and is a day for couples to cherish and celebrate their relationship.</p>
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

    