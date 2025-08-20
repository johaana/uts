
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/product-data";

export default function AshadhiEkadashiPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-blue-500/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/WpCxTcdd/ashadhi-ekadashi.jpg" alt="Ashadhi Ekadashi" layout="fill" objectFit="cover" data-ai-hint="palanquin procession" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-blue-900 drop-shadow-lg">Ashadhi Ekadashi</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-blue-800/90 drop-shadow-md">The Great Pilgrimage of Devotion</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />The Wari</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Journey of Faith to Pandharpur</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Ashadhi Ekadashi, also known as Devshayani Ekadashi, is one of the most significant and sacred days of pilgrimage for the Warkari community of Maharashtra. It marks the culmination of the 'Pandharpur Wari', a massive annual pilgrimage where hundreds of thousands of devotees, known as 'Warkaris', walk for miles to reach the temple of Lord Vithoba (a manifestation of Lord Vishnu) in Pandharpur. The festival falls on the eleventh lunar day (Ekadashi) of the bright fortnight of the Hindu month of Ashadha.</p>
                                    <p>This day is believed to be when Lord Vishnu falls into a state of cosmic slumber on the celestial serpent, Shesha. This four-month period, known as 'Chaturmas', is considered a time for penance, fasting, and spiritual observance. Ashadhi Ekadashi, therefore, is a day of immense devotion, where devotees observe a strict fast and spend the day and night in prayer and singing 'bhajans' (devotional songs) in praise of Lord Vithoba.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Pandharpur Wari</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>The undisputed highlight of Ashadhi Ekadashi is the conclusion of the Pandharpur Wari. This centuries-old tradition involves Warkaris embarking on a long march from their homes to Pandharpur, a journey that can take over three weeks. They carry palanquins ('palkhis') bearing the footprints of various saints, most notably Sant Dnyaneshwar and Sant Tukaram. The entire route is filled with the sounds of cymbals, drums, and the continuous chanting of "Vithal, Vithal," creating an atmosphere of unparalleled faith and devotion. This walking pilgrimage is a symbol of equality, humility, and the collective pursuit of divine love, breaking all barriers of caste and social status.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">Spiritual Observance</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>A Time for Penance</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Ashadhi Ekadashi signifies the beginning of Chaturmas, a four-month period of spiritual retreat and heightened observance for devotees and ascetics. It's a time to focus on self-control, spiritual study, and devotion. The fast observed on this day is believed to cleanse the body and soul of sins, bestowing health, peace, and liberation upon the devotee. It is a powerful reminder of the importance of discipline and unwavering faith on the spiritual path.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className="not-prose my-10">
                                    <h3 className="font-headline text-2xl font-bold mb-4 text-center text-primary">Items for Puja</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                        <ProductCard product={products.handicraftsParadiseChowki} />
                                        <ProductCard product={products.indianArtVillaThali} />
                                        <ProductCard product={products.sandalwoodHavanCups} />
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Ashadhi Ekadashi" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
