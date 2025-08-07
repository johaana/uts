
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function MahaShivaratriPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-gray-800/10">
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary shadow-lg">Maha Shivaratri</h1>
                    <p className="text-xl md:text-2xl mt-4 text-primary/90 shadow-md">The Great Night of Shiva</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="md:w-2/3">
                                        <h2 className="font-headline text-3xl font-bold mb-4">A Night of Devotion</h2>
                                        <div className="space-y-4 text-foreground/80 prose max-w-none">
                                            <p>Maha Shivaratri is a major Hindu festival celebrated annually in honor of the god Shiva. It means "the Great Night of Shiva" and is a day of fasting, meditation, and prayer. Devotees stay up all night, chanting hymns and offering prayers to Lord Shiva, seeking his blessings for protection from evil and for spiritual growth.</p>
                                        </div>
                                    </div>
                                    <div className="md:w-1/3">
                                        <Image src="https://i.postimg.cc/52NbWR80/mahashivratri.jpg" alt="Lord Shiva" width={400} height={400} className="rounded-lg shadow-lg" data-ai-hint="shiva statue"/>
                                    </div>
                                </div>
                            </TabsContent>
                            
                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Cosmic Dance</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Tandava</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The festival is also believed to be the night when Shiva performs the heavenly dance of creation, preservation, and destruction, known as the Tandava. Observing the rituals of Maha Shivaratri is said to bestow blessings and help one overcome darkness and ignorance.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Maha Shivaratri" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

    