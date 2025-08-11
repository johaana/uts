
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function YiPengPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-amber-500/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/d1wzC9rY/yi-peng.jpg" alt="Yi Peng Lantern Festival" layout="fill" objectFit="cover" data-ai-hint="sky lanterns" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-amber-900 drop-shadow-lg">Yi Peng Lantern Festival</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-amber-800/90 drop-shadow-md">Thailand's Sky Full of Lights</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />The Lantern Release</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">A River of Light in the Sky</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>The Yi Peng Lantern Festival is a visually stunning and deeply spiritual festival celebrated in Northern Thailand, with the largest celebrations held in Chiang Mai. It is a Lanna (ancient northern Thai kingdom) festival that coincides with Loi Krathong, the national Thai festival of lights. While Loi Krathong involves floating baskets on water, Yi Peng is famous for the release of thousands of 'khom loi' (sky lanterns) into the night sky.</p>
                                    <p>The festival is a celebration of the full moon of the 12th month of the Thai lunar calendar (usually in November). It's a time for making merit, paying respects to the Buddha, and for symbolic renewal.</p>
                                </div>
                            </TabsContent>
                            
                             <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Letting Go of Misfortune</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>A Symbolic Act</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The act of releasing the lantern is the main event. It's believed that as the lantern floats away, it carries with it all the misfortunes, sins, and worries of the past year. It's a symbolic act of letting go of negativity and making a wish for good fortune in the year to come. The sight of thousands of glowing lanterns ascending into the night sky is a breathtaking and unforgettable spectacle, creating a feeling of peace and collective goodwill. The festival also includes religious ceremonies, parades, and the decoration of homes and temples with smaller lanterns.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Yi Peng Lantern Festival" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
