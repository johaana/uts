
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function StPatricksDayPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-green-700/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/1XTmKpWH/St-Patrick-s-Day-Ireland-Global.avif" alt="St. Patrick's Day Parade" layout="fill" objectFit="cover" data-ai-hint="irish parade" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-green-900 drop-shadow-lg">St. Patrick's Day</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-green-800/90 drop-shadow-md">A Global Celebration of Irish Culture</p>
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
                                <h2 className="font-headline text-3xl font-bold mb-4">Remembering Ireland's Patron Saint</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Saint Patrick's Day, celebrated annually on March 17th, is a cultural and religious holiday commemorating the death of Saint Patrick, the foremost patron saint of Ireland. What began as a solemn feast day in the 17th century has evolved into a vibrant, global celebration of Irish culture, heritage, and identity. It is celebrated in more countries than any other national festival, largely due to the vast Irish diaspora.</p>
                                    <p>Saint Patrick, who lived in the 5th century, was a Romano-British missionary credited with bringing Christianity to Ireland. Legend has it that he used the three-leaved shamrock to explain the Holy Trinity, which has since become a central symbol of both the saint and Irish identity.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Parades, Green, and Festivities</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>The most famous tradition is the **St. Patrick's Day parade**. Cities like Dublin, New York, Boston, and Chicago host massive parades featuring marching bands, elaborate floats, and cultural organizations. Another key tradition is **"the wearing of the green"**, where people dress in green attire or don a shamrock. This color has become synonymous with Ireland and the festival itself. In some cities, like Chicago, even the rivers are dyed green for the day. Celebrations also include feasting on traditional Irish food like corned beef and cabbage, and enjoying Irish music and dance.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Celebration of 'Irishness'</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Unity and Pride</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">St. Patrick's Day has become a powerful symbol of Irish national pride and a celebration of 'Irishness' for people all over the world, regardless of their ancestry. It's a day of camaraderie and joy, where for one day, everyone is invited to be 'Irish'. The festival showcases the resilience and spirit of the Irish people and the global reach of their vibrant culture.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="St. Patrick's Day" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

    