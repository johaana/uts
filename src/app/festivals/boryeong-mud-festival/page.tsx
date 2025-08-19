
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, PartyPopper } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function BoryeongMudFestivalPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-gray-500/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/N0MM9Q6G/boryeong.avif" alt="Boryeong Mud Festival" layout="fill" objectFit="cover" data-ai-hint="mud festival" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 drop-shadow-lg">From Cosmetics to Chaos</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-gray-800/90 drop-shadow-md">The Story of South Korea's Boryeong Mud Festival</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />The Story</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><PartyPopper className="w-4 h-4 mr-2" />The Fun</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">An Unlikely Marketing Stunt</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Some festivals are born from ancient myths, others from sacred traditions. The Boryeong Mud Festival, however, has a much more modern and commercial origin story. In 1996, a South Korean cosmetics company was looking for a way to promote its new line of beauty products that used the mineral-rich mud from the Boryeong mud flats. Their solution? Throw a massive party and get everyone to cover themselves in the product.</p>
                                    <p>What started as a clever marketing campaign quickly morphed into one of South Korea's biggest and most famous international festivals. Held every July on Daecheon Beach, the festival now attracts millions of visitors, both local and international, who come not just for the supposed health benefits of the mud, but for the sheer, unadulterated fun of getting messy. It's a celebration that proves that sometimes, the best traditions are the ones we create ourselves, often by accident.</p>
                                </div>
                            </TabsContent>
                            
                             <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Playground of Mud</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>More Than Just a Mud Bath</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The festival organizers truck in tons of the special Boryeong mud to the beach, transforming it into a giant, muddy playground. The attractions are designed for maximum fun and messiness. There are mud pools, mud slides, a 'mud prison', and even mud skiing competitions. For those seeking a more 'therapeutic' experience, there are mud massage zones. The atmosphere is electric, fueled by loud K-pop music and a sense of playful abandon. The festival culminates in a massive K-pop concert on the beach and a spectacular fireworks display, making it a must-visit event for party-goers and adventure seekers.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="The Story of South Korea's Boryeong Mud Festival" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
