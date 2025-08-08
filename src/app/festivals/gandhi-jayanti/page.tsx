
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function GandhiJayantiPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-gray-100/20">
                <div className="relative text-center z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-primary shadow-lg">Gandhi Jayanti</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-primary/90 shadow-md">Remembering the Father of the Nation</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Observances</TabsTrigger>
                                <TabsTrigger value="philosophy" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Philosophy</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                 <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="md:order-2 md:w-1/3">
                                        <Image src="https://i.postimg.cc/bJ1Ktx1W/gandhi-jayanti.webp" alt="Mahatma Gandhi" width={400} height={400} className="rounded-lg shadow-lg w-full" data-ai-hint="mahatma gandhi"/>
                                    </div>
                                    <div className="md:order-1 md:w-2/3">
                                        <h2 className="font-headline text-3xl font-bold mb-4">A Tribute to the Mahatma</h2>
                                        <div className="space-y-4 text-foreground/80 prose max-w-none">
                                            <p>Gandhi Jayanti, celebrated annually on the 2nd of October, marks the birth anniversary of Mohandas Karamchand Gandhi, who is lovingly and respectfully known as Mahatma Gandhi, the 'Father of the Nation' in India. It is one of the three official national holidays of India and is observed with great reverence across the country. The day is not just a commemoration of a great leader's birth but a celebration of his life, his philosophy, and his enduring legacy. In a testament to the global impact of his ideals, the United Nations has also declared October 2nd as the International Day of Non-Violence, in honor of Gandhi's lifelong and successful struggle for freedom through peaceful and non-violent means.</p>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Day of Prayer and Reflection</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Gandhi Jayanti is observed not with grand festivities but with solemnity and quiet respect. The main ceremony takes place at Raj Ghat in New Delhi, the memorial where Gandhi was cremated. Here, the President and Prime Minister of India, along with other political leaders and citizens, pay homage by offering flowers and prayers. Across the country, the day is marked by prayer meetings, commemorative ceremonies, and cultural events that reflect his teachings. His favorite devotional song, "Raghupati Raghava Raja Ram," is often sung at these gatherings, evoking a sense of peace and unity. Schools and colleges organize events such as essay competitions, painting contests, and debates based on themes of peace, non-violence, and Gandhi's life, ensuring that his message continues to inspire future generations.</p>
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
                                            <p className="text-foreground/80">At the core of Gandhi's philosophy was 'Satyagraha', a concept he developed that can be loosely translated as 'insistence on truth' or 'soul force'. It was his primary and most powerful tool in the long struggle against British rule—a revolutionary form of non-violent resistance. Satyagraha sought to convert the opponent not through physical force, but through moral force, self-suffering, and an unwavering commitment to truth. Gandhi Jayanti is a day for the world to reflect on these powerful ideals of peace and non-violence and their profound relevance in resolving conflicts in today's world.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Gandhi Jayanti" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
