
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, Utensils, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function CherryBlossomFestivalPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-pink-200/20">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image src="https://i.postimg.cc/T3sT8JgC/cherry-blossom-festival-japan.jpg" alt="Cherry Blossom Festival" layout="fill" objectFit="cover" data-ai-hint="cherry blossoms" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-pink-900 drop-shadow-lg">Cherry Blossom Festival (Hanami)</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-pink-800/90 drop-shadow-md">Japan's Celebration of Fleeting Beauty</p>
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
                                <h2 className="font-headline text-3xl font-bold mb-4">The Art of Flower Viewing</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>The Cherry Blossom Festival, or 'Hanami' (flower viewing), is one of Japan's most iconic and beloved traditions. It is the centuries-old practice of appreciating the transient, breathtaking beauty of the 'sakura' (cherry blossoms) as they bloom across the country. Typically spanning from late March to early May, the blooming season moves northward up the Japanese archipelago, and its arrival is eagerly anticipated by everyone.</p>
                                    <p>Hanami is not a formal festival with religious rituals, but a nationwide cultural event. It's a time for people to gather with friends, family, and colleagues to enjoy the outdoors, celebrate the arrival of spring, and reflect on the beauty of nature.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Picnics Under the Petals</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>The most popular tradition of Hanami is having an outdoor party or picnic beneath the blooming sakura trees. People spread out blue tarps in parks, temple grounds, and along riverbanks to reserve their spots, sometimes hours or days in advance. These gatherings are filled with food and drink, with special bento boxes, sake, and sweets being enjoyed. As evening falls, the celebration often continues with 'yozakura' (night sakura), where lanterns are hung in the trees to illuminate the blossoms, creating a magical and romantic atmosphere.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">Mono no Aware: The Pathos of Things</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>A Symbol of Life's Nature</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The cherry blossom holds deep symbolic meaning in Japanese culture. Because the blossoms are so beautiful yet so short-lived—they are typically at their peak for only about a week—they have become a powerful symbol of mortality, mindfulness, and living in the present moment. The blossoms represent the Japanese concept of 'mono no aware', which can be translated as 'the pathos of things' or 'a gentle sadness for their passing'. Hanami is a time to appreciate the beautiful, transient nature of life itself, a reminder to cherish every moment.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Cherry Blossom Festival (Hanami)" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

    