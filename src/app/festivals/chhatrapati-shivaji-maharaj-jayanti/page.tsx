
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function ShivajiJayantiPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-orange-600/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/K8yV37rF/chhatrapati-shivaji-maharaj-jayanti.webp" alt="Chhatrapati Shivaji Maharaj" layout="fill" objectFit="cover" data-ai-hint="maratha king" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-orange-900 drop-shadow-lg">Shivaji Jayanti</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-orange-800/90 drop-shadow-md">Celebrating the Birth of a Great Maratha King</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="celebrations" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Celebrations</TabsTrigger>
                                <TabsTrigger value="legacy" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Legacy</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Visionary Warrior King</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Chhatrapati Shivaji Maharaj Jayanti, celebrated on February 19th, marks the birth anniversary of the legendary Maratha warrior king, Shivaji Maharaj. Born in 1630 at the Shivneri Fort, he is hailed as one of the greatest heroes in Indian history. Shivaji Maharaj carved out an independent Maratha kingdom, the 'Swaraj', at a time when the Mughal Empire dominated the subcontinent. He was a visionary administrator, a brilliant military strategist, and a secular ruler who championed the cause of his people.</p>
                                    <p>His life was a testament to courage, leadership, and an unwavering commitment to justice and self-rule. First celebrated in 1870 by social reformer Mahatma Jyotirao Phule, Shivaji Jayanti was later popularized by freedom fighter Bal Gangadhar Tilak to inspire a sense of nationalism among the people. Today, it is a major public holiday in Maharashtra, celebrated with immense pride and patriotic fervor.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="celebrations">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Display of Maratha Pride</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>Shivaji Jayanti is celebrated with great enthusiasm across Maharashtra. The day is marked by grand processions ('powadas') where people, dressed in traditional attire, reenact scenes from Shivaji's life. The air resonates with the sound of traditional drums ('lezim') and chants of "Jai Bhavani, Jai Shivaji!". Many people visit his forts, particularly Shivneri, to pay homage. Cultural programs, including plays, historical lectures, and song performances, are organized to remember his life and achievements, inspiring the younger generation with his tales of valor and governance.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="legacy">
                                <h2 className="font-headline text-3xl font-bold mb-4">An Enduring Inspiration</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>A Symbol of Courage and Governance</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Shivaji Maharaj's legacy extends far beyond his military victories. He is remembered for his pioneering administrative skills, his promotion of the Marathi language, and his respect for all religions. He introduced a systematic revenue system and built a powerful navy, earning him the title 'Father of the Indian Navy'. His life and principles of justice, self-respect, and good governance continue to inspire millions across India, making Shivaji Jayanti a day of national pride and reflection.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Chhatrapati Shivaji Maharaj Jayanti" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
