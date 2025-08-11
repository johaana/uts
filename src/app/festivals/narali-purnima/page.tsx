
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function NaraliPurnimaPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-blue-600/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/4xz5DrcR/Narali-purnima.avif" alt="Narali Purnima" layout="fill" objectFit="cover" data-ai-hint="coconut offering sea" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-blue-900 drop-shadow-lg">Narali Purnima</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-blue-800/90 drop-shadow-md">The Coconut Festival of the Coast</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Rituals</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">An Offering to the Sea God</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Narali Purnima, which translates to 'Coconut Full Moon', is a deeply significant festival celebrated with great reverence by the coastal communities of Maharashtra and the Konkan region. Observed on the full moon day (Purnima) of the auspicious month of Shravan, its timing often coincides with Raksha Bandhan, adding another layer of celebration to the day. The festival marks the crucial transition from the turbulent monsoon season to the start of the new fishing and trade season. It is a day of profound gratitude and prayer, especially for the Koli (fishing) community, who offer their heartfelt respects to the sea god, Varuna, seeking his blessings for a safe and prosperous season ahead.</p>
                                    <p>The name 'Narali' is derived from the Marathi word 'naral', which means coconut. In Hindu rituals, the coconut is considered one of the purest offerings, symbolizing selfless surrender to the divine. The festival is a vibrant expression of the symbiotic and respectful relationship between the Koli people and the sea, which they revere as both their provider and a mighty force of nature that commands respect.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Coconuts and Boats</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>The central ritual of Narali Purnima is a beautiful and symbolic ceremony. Fishermen and their families, dressed in traditional attire, gather at the seashore. They offer prayers to the sea, asking for its turbulent, monsoon-fed anger to subside. As the main offering, they cast coconuts, often painted and decorated, into the waves. This act is a gesture of gratitude and a plea to appease Lord Varuna for a safe voyage and a bountiful catch. Their fishing boats, which have been ashore for repairs during the monsoon, are brightly painted, decorated with colorful flags and flower garlands, and also worshipped before they set out for their first trip of the season. The day is filled with the lively sounds of folk songs, traditional Koli dances, and feasting on special coconut-based delicacies like 'narlibhaat' (sweet coconut rice) and 'narali pak' (coconut barfi).</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">Calming the Waters</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>A New Season Begins</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Narali Purnima is both a practical and a spiritual festival. The offering of the coconut is a symbolic request for the sea to become calm and safe for them to venture out. The festival marks a vital economic transition from the lean, non-fishing monsoon period to a time of renewed activity and livelihood. It reinforces the community's deep respect for nature's cycles and their profound dependence on the sea's bounty. It's a beautiful celebration of hope, community, and the respectful human relationship with the powerful elements of nature.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Narali Purnima" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
