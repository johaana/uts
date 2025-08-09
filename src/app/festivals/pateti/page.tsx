
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function PatetiPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-red-800/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/d3p6FFnw/pateti-parsi-new-year.jpg" alt="Pateti / Parsi New Year" layout="fill" objectFit="cover" data-ai-hint="parsi celebration" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-red-900 drop-shadow-lg">Pateti</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-red-800/90 drop-shadow-md">The Parsi Day of Repentance and New Year</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Traditions</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Day for a Fresh Start</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Pateti, which falls on the last day of the Zoroastrian calendar, is a day of repentance for the Parsi community. It is a time for introspection, where individuals reflect on the thoughts, words, and deeds of the past year, asking for forgiveness for any wrongdoings. The following day is celebrated as Navroz (or Nowruz), which marks the Parsi New Year. While Pateti is the day of cleansing the soul, Navroz is the day of new beginnings and joyous celebration. In India, the two are often celebrated together with great enthusiasm.</p>
                                    <p>The Parsi community in India follows the Shahenshahi calendar, which does not account for leap years, so their New Year celebration falls in August, distinct from the global Nowruz celebration in March. It marks the day when the Prophet Zoroaster founded the religion of Zoroastrianism.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Rituals and Feasting</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>On the day of Pateti, Parsis wake up early, clean their homes, and decorate them with beautiful 'rangoli' and strings of flowers. They wear new clothes and visit the 'Agiary' (Fire Temple) to offer special prayers and sandalwood to the holy fire. The focus is on seeking forgiveness and making resolutions for the coming year.</p>
                                   <p>Navroz is a day of joyous celebration. Families visit each other, exchanging greetings of "Sal Mubarak!". A grand and elaborate feast is prepared, featuring traditional Parsi delicacies like Pulao, Patra ni Machhi (steamed fish in banana leaf), and Sali Boti (mutton curry with potato straws). Sweets like Ravo (a semolina pudding) and Falooda are also enjoyed, symbolizing the sweetness of a new beginning.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">Good Thoughts, Good Words, Good Deeds</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Core Zoroastrian Values</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The festival of Pateti and Navroz is a powerful reminder of the core tenets of Zoroastrianism: Humata, Hukhta, Huvarshta, which translate to 'Good Thoughts, Good Words, and Good Deeds'. The act of repentance on Pateti and the joyous celebration of Navroz symbolize the renewal of one's commitment to live a life of righteousness, truth, and charity. It's a time to leave behind past negativity and to welcome a new year with a clean conscience and a positive spirit.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Pateti (Parsi New Year)" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
