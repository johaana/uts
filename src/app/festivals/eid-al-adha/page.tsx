
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function EidAlAdhaPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary shadow-lg">Eid al-Adha</h1>
                    <p className="text-xl md:text-2xl mt-4 text-primary/90 shadow-md">The Festival of Sacrifice</p>
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
                                        <h2 className="font-headline text-3xl font-bold mb-4">A Story of Faith</h2>
                                        <div className="space-y-4 text-foreground/80 prose max-w-none">
                                            <p>Eid al-Adha, also known as the "Festival of Sacrifice", is one of the two main Islamic holidays. It honors the willingness of Ibrahim (Abraham) to sacrifice his son as an act of obedience to God's command. Before he could sacrifice his son, however, God provided a lamb to sacrifice instead. This is commemorated by the sacrifice of an animal, usually a goat, sheep, or camel.</p>
                                        </div>
                                    </div>
                                    <div className="md:w-1/3">
                                        <Image src="https://i.postimg.cc/KYWZNDkY/eid-al-adha.webp" alt="Eid Prayers" width={400} height={400} className="rounded-lg shadow-lg" data-ai-hint="eid prayer"/>
                                    </div>
                                </div>
                            </TabsContent>
                            
                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">Charity and Community</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Sharing with the Needy</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The meat from the sacrificed animal is divided into three parts: one for the family, one for relatives and friends, and one for the poor and needy. This act emphasizes the importance of charity and community in Islam. The festival also marks the end of the annual Hajj pilgrimage to Mecca.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Eid al-Adha" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

    