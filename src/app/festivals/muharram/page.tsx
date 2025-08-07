'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote, CircleHelp } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function MuharramPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-gray-800/10">
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-gray-800 shadow-lg">Muharram</h1>
                    <p className="text-xl md:text-2xl mt-4 text-gray-700/90 shadow-md">A Solemn Period of Remembrance</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="ashura" className="py-2"><CircleHelp className="w-4 h-4 mr-2" />Day of Ashura</TabsTrigger>
                                <TabsTrigger value="observances" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Observances</TabsTrigger>
                                <TabsTrigger value="prayers" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Prayers & Dua</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="md:w-2/3">
                                        <h2 className="font-headline text-3xl font-bold mb-4">The First Month of the Islamic Calendar</h2>
                                        <div className="space-y-4 text-foreground/80 prose max-w-none">
                                            <p>Muharram is the first month of the Islamic calendar, holding the distinction of being one of the four sacred months of the year when warfare is forbidden. While it marks the beginning of the Islamic New Year for all Muslims, it holds a particularly profound and solemn significance for Shia Muslims, for whom it is a period of intense grief and mourning. The entire month is observed in remembrance of the tragic martyrdom of Imam Hussein ibn Ali, the beloved grandson of the Prophet Muhammad, along with his family and companions in the Battle of Karbala in the year 680 AD.</p>
                                            <p>The event of Karbala stands as a pivotal moment in Islamic history, a heart-wrenching tale of sacrifice, and an unwavering stand for justice and truth against the forces of tyranny and corruption. Imam Hussein's courageous refusal to pledge allegiance to the corrupt and unjust caliph, Yazid, led to a brutal siege where he and his small band of loyal supporters, deprived of water and resources, were martyred with unimaginable cruelty. Muharram, therefore, is not a festival of celebration but a time for deep reflection on the immense sacrifices made by Imam Hussein and his followers. It is a period for Muslims to reconnect with the core principles of justice, compassion, and human dignity that the Imam's stand so powerfully represents.</p>
                                        </div>
                                    </div>
                                    <div className="md:w-1/3">
                                        <Image src="https://i.postimg.cc/j5JRknP4/Muharram.webp" alt="Muharram Procession" width={400} height={400} className="rounded-lg shadow-lg" data-ai-hint="muharram procession"/>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="ashura">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Day of Ashura</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>The tenth day of Muharram, known as Ashura, is the focal point of the mourning period. This was the very day Imam Hussein was martyred. For Shia Muslims, it is a day of profound sorrow and public expression of grief, observed with prayers, sermons, public processions, and passionate reenactments of the tragedy of Karbala. These acts of remembrance, known as 'taziyas', serve as a powerful and visceral reminder of the immense suffering endured by the Imam and his family, and their unwavering commitment to their principles.</p>
                                    <p>For Sunni Muslims, Ashura is also a significant day, although it is observed for different historical reasons. It is believed to be the day that Moses (Musa) and the Israelites were saved from the Pharaoh by God creating a miraculous path in the Red Sea. To commemorate this event of divine salvation, many Sunni Muslims observe a voluntary fast on Ashura. Thus, while the historical contexts and emotional tones of the observance differ, the day holds deep spiritual importance for both major branches of Islam.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="observances">
                                <h2 className="font-headline text-3xl font-bold mb-4">How Muharram is Observed</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Majalis (Gatherings)</h4>
                                            <p className="text-foreground/80">Throughout the first ten days, Shia Muslims gather in community halls and mosques (Imambargahs) to listen to sermons and elegies that recount the story of Karbala.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Mourning Processions</h4>
                                            <p className="text-foreground/80">On the Day of Ashura, large, peaceful processions are held where people express their grief through chants and symbolic acts of mourning.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Fasting & Charity</h4>
                                            <p className="text-foreground/80">Many Muslims, both Sunni and Shia, choose to fast during this period. Acts of charity, such as providing food and water to the needy, are also common, reflecting the humanitarian principles of Imam Hussein.</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>

                             <TabsContent value="prayers">
                                <h2 className="font-headline text-3xl font-bold mb-4">Prayers and Supplications</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Ziyarat Ashura</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">This is a specific prayer recited by Shia Muslims that salutes Imam Hussein and condemns those who were responsible for his martyrdom. It is a key text for this period of remembrance.</p>
                                        </CardContent>
                                    </Card>
                                     <Card>
                                        <CardHeader>
                                            <CardTitle>Dua (Supplication)</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Muslims engage in personal and communal prayers, asking for forgiveness, peace, and guidance, and reflecting on the themes of sacrifice and justice.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Muharram" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
