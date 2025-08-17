
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function GuruTeghBahadurMartyrdomDayPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-gray-500/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/L67XHJtG/Guru-Tegh-Bahadur-s-Martyrdom-Day.jpg" alt="Guru Tegh Bahadur" layout="fill" objectFit="cover" data-ai-hint="sikh guru martyrdom" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 drop-shadow-lg">Guru Tegh Bahadur's Martyrdom Day</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-gray-800/90 drop-shadow-md">Shaheedi Diwas of the Ninth Sikh Guru</p>
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
                                <h2 className="font-headline text-3xl font-bold mb-4">A Sacrifice for Religious Freedom</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Guru Tegh Bahadur's Martyrdom Day, also known as Shaheedi Diwas, is a solemn occasion observed by the Sikh community. It commemorates the sacrifice of the ninth Sikh Guru, Guru Tegh Bahadur, who was publicly executed in 1675 under the orders of the Mughal Emperor Aurangzeb. He is revered as 'Hind di Chadar' (the Shield of India) for his supreme sacrifice to protect the religious freedom of Hindus who were being forcibly converted.</p>
                                </div>
                            </TabsContent>
                            
                             <TabsContent value="legacy">
                                <h2 className="font-headline text-3xl font-bold mb-4">Upholding Human Rights</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>A Principled Stand</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Guru Tegh Bahadur's martyrdom is remembered as a powerful stand against religious persecution and for the right of individuals to practice their faith freely. On this day, special prayer meetings and processions are held. His life and sacrifice are remembered as a testament to the core Sikh principles of selfless service, righteousness, and the defense of human rights for all people, regardless of their faith.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Guru Tegh Bahadur's Martyrdom Day" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
