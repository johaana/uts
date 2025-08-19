
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function ValmikiJayantiPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-orange-700/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/xdCvfDqM/valmiki-jayanti.jpg" alt="Maharshi Valmiki" layout="fill" objectFit="cover" data-ai-hint="ancient sage" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-orange-900 drop-shadow-lg">Maharshi Valmiki Jayanti</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-orange-800/90 drop-shadow-md">Honoring the Adi Kavi</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="legacy" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Legacy</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">The First Poet</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Maharshi Valmiki Jayanti celebrates the birth anniversary of the revered sage Valmiki, who is hailed as the 'Adi Kavi' or the first poet of Sanskrit literature. He is the celebrated author of the epic Ramayana, one of the most important texts in Hinduism. The festival is observed on the full moon day (Purnima) of the Hindu month of Ashwin.</p>
                                    <p>The story of Valmiki's transformation from a highway robber named Ratnakar to a great sage is a powerful tale of redemption. Through meditation and the chanting of Lord Rama's name, he attained enlightenment and was inspired to compose the epic poem that has guided generations.</p>
                                </div>
                            </TabsContent>
                            
                             <TabsContent value="legacy">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Ramayana</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>A Timeless Epic</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Valmiki's Ramayana is a masterpiece of literature, comprising 24,000 verses that narrate the life and trials of Lord Rama. On Valmiki Jayanti, devotees celebrate his life and contributions. Processions are carried out, temples are decorated, and prayer meetings are held where verses from the Ramayana are recited. The day serves as a reminder of the power of redemption and the timeless wisdom contained in the epic.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Maharshi Valmiki Jayanti" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
