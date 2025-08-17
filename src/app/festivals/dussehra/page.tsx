
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const relatedContent: RelatedItem[] = [
    {
        slug: "navratri",
        title: "Navratri Festival Guide",
        image: "https://i.postimg.cc/J4JFtVYT/navratri1.jpg",
        type: "Festival",
        link: "/festivals/navratri",
        hint: "garba dance"
    },
    {
        slug: "durga-puja",
        title: "Durga Puja",
        image: "https://i.postimg.cc/nL3Jwd9d/East-India-festivals.webp",
        type: "Festival",
        link: "/festivals/durga-puja",
        hint: "durga idol"
    },
    {
        slug: "ram-navami",
        title: "Ram Navami",
        image: "https://i.postimg.cc/Vvqmzy7S/ram-navami.webp",
        type: "Festival",
        link: "/festivals/ram-navami",
        hint: "lord rama"
    }
];

export default function DussehraPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-primary shadow-lg">Dussehra (Vijayadashami)</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-primary/90 shadow-md">The Grand Victory of Good Over Evil</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Celebrations</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                 <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="md:order-2 md:w-1/3">
                                        <Image src="https://i.postimg.cc/wMVZW9fk/dussehra.jpg" alt="Ramlila performance" width={400} height={400} className="rounded-lg shadow-lg w-full" data-ai-hint="dussehra celebration"/>
                                    </div>
                                    <div className="md:order-1 md:w-2/3">
                                        <h2 className="font-headline text-3xl font-bold mb-4">The Tenth Day of Victory</h2>
                                        <div className="space-y-4 text-foreground/80 prose max-w-none">
                                            <p>Dussehra, also known as Vijayadashami, is a momentous Hindu festival celebrated with great zeal at the culmination of the nine nights of Navratri. The name 'Dussehra' itself is derived from the Sanskrit words 'Dasha' (ten) and 'Hara' (defeat), vividly capturing the essence of the festival: the defeat of the ten-headed demon king, Ravana, by Lord Rama. This victory is a cornerstone of the epic Ramayana and stands as one of the most powerful narratives in Hinduism, symbolizing the decisive and ultimate triumph of Dharma (righteousness) over Adharma (unrighteousness), light over darkness, and good over evil.</p>
                                            <p>The festival also celebrates the victory of another powerful deity, Goddess Durga, who vanquished the buffalo demon Mahishasura after a nine-day battle. Thus, the day is also called 'Vijayadashami', the 'tenth day of victory'. While the celebrations vary across India's diverse cultural landscape, the underlying theme remains a universal celebration of the power of truth and virtue to conquer all forms of wickedness.</p>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Ramlila and Ravan Dahan</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>The most iconic tradition of North Indian Dussehra celebrations is the 'Ramlila'. These are vibrant and dramatic folk reenactments of the life of Lord Rama, staged in community grounds for several nights leading up to the festival. Actors portray key events from the Ramayana, from Rama's birth to his final, epic battle with Ravana. These performances are not just entertainment; they are a form of community storytelling that reinforces moral and spiritual values.</p>
                                   <p>The celebration reaches its climax with 'Ravan Dahan'. On the evening of Dussehra, colossal effigies of Ravana, his brother Kumbhakarna, and his son Meghanada are erected in large open fields. These effigies, often stuffed with firecrackers, are set ablaze by an actor playing Lord Rama, who shoots a flaming arrow into them. The fiery spectacle, witnessed by massive crowds, symbolizes the dramatic destruction of evil and is followed by a dazzling display of fireworks, illuminating the night sky in a triumphant celebration of good's victory.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Day for New Beginnings</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Auspiciousness of Vijayadashami</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Vijayadashami is considered one of the most auspicious days in the Hindu calendar. It is a time for new beginnings, making it a popular day to start a new business, purchase a new home or vehicle, or initiate a child's education (a ritual known as 'Vidyarambham'). The festival powerfully reinforces the core Hindu belief that no matter how formidable evil may appear, it is ultimately transient and will be vanquished by the enduring power of good, truth, and righteousness.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Dussehra" />
                        <RelatedContent items={relatedContent} />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

    