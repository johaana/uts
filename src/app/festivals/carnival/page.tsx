
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, Music } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function CarnivalPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-green-500/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/DwnTfc1z/carnival.jpg" alt="Rio Carnival" layout="fill" objectFit="cover" data-ai-hint="brazil carnival" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-green-900 drop-shadow-lg">Carnival</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-green-800/90 drop-shadow-md">The World's Biggest Party</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Music className="w-4 h-4 mr-2" />Samba and Parades</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Farewell to the Flesh</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Carnival, celebrated with explosive joy in Brazil and many other Catholic countries, is an annual festival that marks the beginning of Lent. The name is thought to derive from the Latin 'carne vale', which means 'farewell to meat', signifying a final period of feasting and revelry before the 40 days of fasting and penitence that precede Easter. While celebrated worldwide, the Carnival in Rio de Janeiro, Brazil, is considered the biggest and most famous, a spectacular explosion of music, dance, and color.</p>
                                    <p>It's a time when the entire country comes to a standstill, and cities erupt into massive street parties ('blocos') and parades. The festival is a vibrant showcase of Brazilian culture, especially the infectious rhythms of Samba music.</p>
                                </div>
                            </TabsContent>
                            
                             <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Sambadrome Parades</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>A Competition of a Lifetime</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The highlight of the Rio Carnival is the official Samba Parade at the Sambadrome. Here, the city's top samba schools compete for the championship title in a dazzling display of artistry and talent. Each school presents a different theme, which is brought to life through elaborate floats, thousands of dancers in spectacular, feathered costumes, and a powerful "bateria" (percussion ensemble). It's a breathtaking, once-in-a-lifetime spectacle that draws millions of spectators from around the globe to witness the vibrant heart and soul of Brazilian culture.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Carnival" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
