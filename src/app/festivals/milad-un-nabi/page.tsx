
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function MiladUnNabiPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-green-700/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/KzJGCjcq/milad-un-nabi.avif" alt="Milad un-Nabi" layout="fill" objectFit="cover" data-ai-hint="prophet's birthday" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-green-900 drop-shadow-lg">Milad un-Nabi</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-green-800/90 drop-shadow-md">Celebrating the Birth of the Prophet</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Celebrations</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">Remembering the Prophet Muhammad</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Milad un-Nabi, also known as Mawlid, is an Islamic festival that commemorates the birth of the Prophet Muhammad. It is celebrated by a large number of Muslims across the world in the third month of the Islamic calendar, Rabi' al-awwal. The day is a time for believers to reflect on the life, teachings, and character of the Prophet, who is considered the final messenger of God in Islam.</p>
                                </div>
                            </TabsContent>
                            
                             <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Day of Prayer and Charity</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Peaceful Observances</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Celebrations for Milad un-Nabi vary across different cultures, but they are generally marked by spiritual and communal activities. These include large public processions, the decoration of mosques and homes with lights, and communal meals. It is a day for listening to sermons about the Prophet's life, reciting poetry in his praise, and engaging in acts of charity. The focus is on spreading the Prophet's message of peace, compassion, and kindness.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Milad un-Nabi" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
