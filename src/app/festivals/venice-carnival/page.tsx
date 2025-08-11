
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function VeniceCarnivalPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-purple-700/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/JnX3hBwT/venice-carnival.jpg" alt="Venice Carnival" layout="fill" objectFit="cover" data-ai-hint="venetian masks" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-purple-900 drop-shadow-lg">Venice Carnival</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-purple-800/90 drop-shadow-md">A Mystical Masquerade of History</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />The Masks</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">An Elegant Celebration</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>The Carnival of Venice is an annual festival held in Venice, Italy, famous throughout the world for its elaborate and beautiful masks. The Carnival ends with the Christian celebration of Lent, forty days before Easter, on Shrove Tuesday. The festival is a legacy of the Venetian Republic's powerful past and has a history stretching back to the 11th century.</p>
                                    <p>For two weeks, the streets and canals of Venice are filled with people in elegant period costumes and mysterious masks, creating an atmosphere of magic and theatricality. The festival is known for its grand masquerade balls, parades, and various artistic performances, transforming the city into a living stage.</p>
                                </div>
                            </TabsContent>
                            
                             <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">A World of Masks</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Symbol of Anonymity</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The mask is the most iconic feature of the Venice Carnival. Historically, wearing masks allowed Venetians to temporarily abandon their social class and identity, making it a festival of social liberation. There are many traditional mask styles, such as the 'Bauta' (a full-face mask), the 'Medico della Peste' (with a long beak, originally worn by plague doctors), and the 'Moretta' (a black oval mask held in place by a button in the teeth). These masks are works of art, often made of leather, porcelain, or glass, and decorated with feathers and gold leaf.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Venice Carnival" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
