
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, Music } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function ChapcharKutPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-green-700/10">
                <div className="relative text-center z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-green-900 drop-shadow-lg">Chapchar Kut</h1>
                    <p className="text-xl md:text-2xl mt-4 text-green-800/90 drop-shadow-md">Mizoram's Biggest Spring Festival</p>
                </div>
                 <Image src="https://i.postimg.cc/G2NRzFY1/chapchar-kut1.jpg" alt="Chapchar Kut Festival" layout="fill" objectFit="cover" className="absolute inset-0 z-0 opacity-30" data-ai-hint="mizo dance" />
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Celebrations</TabsTrigger>
                                <TabsTrigger value="music" className="py-2"><Music className="w-4 h-4 mr-2" />Music & Dance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Festival of Joyful Harvest</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Chapchar Kut is the most important and joyous festival of the Mizo people in the northeastern state of Mizoram. It is a vibrant spring festival celebrated in March, after the completion of 'jhum' cultivation—a traditional form of slash-and-burn agriculture. This period marks a brief moment of rest and respite for farmers before they begin the arduous task of sowing seeds. The festival is a time of immense thanksgiving for the hard work of clearing the forests and a collective prayer for a bountiful harvest ahead. It's a grand showcase of Mizo culture, where people of all ages, dressed in their magnificent, colorful traditional attire, come together to celebrate life, nature, and community.</p>
                                    <p>The festival is a symbol of Mizo unity and cultural pride, a time when social bonds are renewed and strengthened. It's an event filled with infectious energy, where the sounds of traditional music, the sight of graceful dances, and the joy of community feasting create an unforgettable atmosphere. Chapchar Kut is a beautiful expression of the symbiotic relationship between the Mizo people and the natural world they inhabit.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Feasting and Festivities</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>Chapchar Kut is celebrated with great enthusiasm across Mizoram. The festivities are marked by a grand community feast where traditional Mizo delicacies are prepared and shared. The event also features impressive exhibitions of indigenous crafts, showcasing the intricate handloom and bamboo work of the Mizo artisans. It is a time for forgiveness, for reconciliation, and for celebrating the vibrant and resilient spirit of the Mizo community, fostering a deep sense of belonging and cultural identity.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="music">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Famous Cheraw (Bamboo Dance)</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Cheraw Dance</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The undisputed highlight and main attraction of Chapchar Kut is the 'Cheraw', famously known as the bamboo dance. It is a mesmerizing and rhythmic performance that requires incredible skill, timing, and grace. In this dance, men sit on the ground and tap long pairs of bamboo staves in a grid-like formation, opening and closing them in a rhythmic beat. Women, in their vibrant traditional dresses, gracefully step in and out of the moving bamboos, their movements perfectly synchronized with the beat. The Cheraw is not just a dance; it's a spectacle of Mizo culture, a beautiful symbol of community and coordination.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Chapchar Kut" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
