
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function BuddhaPurnimaPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-blue-100/20">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/J0P3G9Yw/buddha-purnima.jpg" alt="Buddha Purnima" layout="fill" objectFit="cover" data-ai-hint="buddha statue" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-blue-900 drop-shadow-lg">Buddha Purnima</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-blue-800/90 drop-shadow-md">Celebrating the Life of the Enlightened One</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Observances</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">Birth, Enlightenment, and Nirvana</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Buddha Purnima, also known as Vesak, is the most sacred day for Buddhists worldwide. It commemorates three significant events in the life of Siddhartha Gautama, the Lord Buddha, which all auspiciously occurred on the full moon day of the Vaisakha month: his birth in Lumbini, his enlightenment (Nirvana) under the Bodhi tree in Bodh Gaya, and his passing (Parinirvana) in Kushinagar.</p>
                                    <p>This "thrice-blessed" day is a time for peace, reflection, and compassion. Buddhists reflect on the Buddha's teachings of the Four Noble Truths and the Eightfold Path, which offer a guide to ending suffering and achieving peace.</p>
                                </div>
                            </TabsContent>
                            
                             <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Day of Peace and Compassion</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Spiritual Observances</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">On Buddha Purnima, devotees visit monasteries and temples to listen to sermons, meditate, and offer prayers. Homes are cleaned and decorated, and people wear white clothes to symbolize purity. Many observe a vegetarian diet and engage in acts of charity, such as giving food and clothes to the poor, embodying the Buddha's teachings of compassion and kindness towards all living beings.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Buddha Purnima" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
