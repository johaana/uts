
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote, CheckCircle, Utensils } from "lucide-react";
import Image from "next/image";

export default function TeejPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-green-500/10">
                 <Image src="https://i.postimg.cc/Kj45FYzX/festive-Indian-attire.png" alt="Women celebrating Teej" layout="fill" objectFit="cover" className="absolute opacity-20" data-ai-hint="indian women festival"/>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-green-900 drop-shadow-lg">Teej</h1>
                    <p className="text-xl md:text-2xl mt-4 text-green-800/90 drop-shadow-md">The Monsoon Festival of Swings</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Traditions</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">Celebrating the Divine Union</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Teej is a vibrant and joyous festival celebrated by women in North India, especially in Rajasthan and Uttar Pradesh, during the monsoons. It commemorates the reunion of Lord Shiva and Goddess Parvati after her 108 rebirths and years of penance. The festival is a celebration of marital bliss, devotion, and the beauty of nature during the rainy season.</p>
                                    <p>There are three main types of Teej: Hariyali Teej, Kajari Teej, and Hartalika Teej, each celebrated with slightly different customs but all centered on the same theme of love and devotion.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Swings, Songs, and Sweets</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Swinging</h4>
                                            <p className="text-foreground/80">One of the most iconic images of Teej is women, dressed in beautiful green traditional attire, swinging on elaborately decorated swings (jhulas) tied to tree branches. This act symbolizes freedom, joy, and the celebration of nature's greenery.</p>
                                        </div>
                                    </li>
                                     <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Fasting and Feasting</h4>
                                            <p className="text-foreground/80">Women observe a fast for the well-being of their husbands and family. They apply mehndi, sing traditional Teej songs, and feast on special sweets like Ghevar.</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">Blessings for Marital Bliss</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Parvati's Penance</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The festival is a tribute to Goddess Parvati's devotion and penance to win Lord Shiva's heart. By observing the fast and performing the rituals, women seek Parvati's blessings for a long, happy, and prosperous married life. Unmarried girls also participate, praying for a good husband.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
