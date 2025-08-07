
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function EidAlAdhaPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary shadow-lg">Eid al-Adha</h1>
                    <p className="text-xl md:text-2xl mt-4 text-primary/90 shadow-md">The Festival of Sacrifice</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Traditions</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Story of Unwavering Faith</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Eid al-Adha, revered as the "Festival of Sacrifice," is one of the two most important festivals in the Islamic calendar. It honors the extraordinary story of the Prophet Ibrahim's (Abraham's) willingness to sacrifice his beloved son, Ismail, as an act of absolute obedience to God's command. This profound test of faith is a cornerstone narrative in the Abrahamic religions. According to the Quran, just as Ibrahim was about to carry out the sacrifice, God intervened, revealing that the command was a trial of his devotion. He had proven his unwavering faith. In place of his son, God provided a ram for the sacrifice. This powerful event is commemorated by Muslims worldwide as a symbol of complete submission to God's will and the immense rewards of faith.</p>
                                    <p>The festival also marks the culmination of the annual Hajj pilgrimage to the holy city of Mecca in Saudi Arabia, which is one of the five pillars of Islam. Eid al-Adha begins on the 10th day of Dhu al-Hijjah, the twelfth and final month of the Islamic lunar calendar, and the celebrations last for three to four days. It is a time for prayer, feasting, and, most importantly, charity, reinforcing the core Islamic values of compassion, community, and sharing one's blessings with those less fortunate.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">How to Celebrate Eid al-Adha</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Eid Prayers</h4>
                                            <p className="text-foreground/80">The day begins with special congregational prayers, known as Salat al-Eid, which are held in mosques or large open areas. Muslims dress in their finest clothes to attend the prayer.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">The Sacrifice (Qurbani)</h4>
                                            <p className="text-foreground/80">Those who can afford it sacrifice a domestic animal, such as a goat, sheep, cow, or camel. This act, known as Qurbani, commemorates Ibrahim's sacrifice.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Sharing and Feasting</h4>
                                            <p className="text-foreground/80">The meat from the sacrificed animal is divided into three parts: one-third is for the family, one-third is for friends and relatives, and one-third is given to the poor and needy, ensuring that no one is left out of the celebrations.</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">Charity and Compassion</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>A Spirit of Giving</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Eid al-Adha is deeply rooted in the spirit of compassion and giving. The tradition of distributing the meat ensures that even the poorest members of the community can enjoy a hearty meal. The festival serves as a powerful reminder of the importance of empathy, social responsibility, and the unity of the Muslim community (ummah). It is a time to strengthen bonds with family and friends and to practice generosity towards all.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Eid al-Adha" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
