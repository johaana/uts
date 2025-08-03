
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";

export default function GandhiJayantiPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-gray-400/10">
                 <Image src="https://i.postimg.cc/kG6pM4vB/Camel-Festival-Bikaner-Rajasthan.jpg" alt="Mahatma Gandhi" layout="fill" objectFit="cover" className="absolute opacity-20" data-ai-hint="mahatma gandhi"/>
                <div className="relative text-center text-primary-foreground z-10">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-white shadow-lg">Gandhi Jayanti</h1>
                    <p className="text-xl md:text-2xl mt-4 text-white/90 shadow-md">Remembering the Father of the Nation</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Observances</TabsTrigger>
                                <TabsTrigger value="philosophy" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Philosophy</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Tribute to the Mahatma</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Gandhi Jayanti, celebrated on October 2nd, marks the birth anniversary of Mohandas Karamchand Gandhi, affectionately known as Mahatma Gandhi, the 'Father of the Nation'. It is one of the three official national holidays of India. The day is observed not just in India but across the world, as the United Nations has declared October 2nd as the International Day of Non-Violence, in honor of Gandhi's philosophy and lifelong struggle for freedom through non-violent means.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Day of Prayer and Reflection</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Gandhi Jayanti is observed with solemnity and respect. The main ceremony takes place at Raj Ghat in New Delhi, Gandhi's memorial, where the President and Prime Minister of India, along with other political leaders, pay homage. Prayer meetings, commemorative ceremonies, and cultural events are held across the country. His favorite devotional song, "Raghupati Raghava Raja Ram," is often sung at these gatherings. Schools and colleges organize events like essay and painting competitions based on themes of peace, non-violence, and Gandhi's life.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="philosophy">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Ideals of Truth and Non-Violence</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Satyagraha</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">At the core of Gandhi's philosophy was 'Satyagraha', loosely translated as 'insistence on truth'. It was his primary tool in the struggle against British rule, a form of non-violent resistance that aimed to convert the opponent through self-suffering and moral force. Gandhi Jayanti is a day to reflect on these powerful ideals and their relevance in today's world.</p>
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
