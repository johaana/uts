
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote, CheckCircle } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function HartalikaTeejPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-green-500/10">
                 <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/509nqn6d/Hartalika-Teej.webp" alt="Hartalika Teej" layout="fill" objectFit="cover" data-ai-hint="parvati shiva" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-green-900 drop-shadow-lg">Hartalika Teej</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-green-800/90 drop-shadow-md">A Rigorous Fast for Marital Bliss</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />The Ritual</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Story of Unwavering Devotion</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Hartalika Teej is the third and most significant of the three Teej festivals, celebrated with immense devotion by women in North India. It falls on the third day of the bright half of the lunar month of Bhadrapada. This festival is dedicated to the divine union of Lord Shiva and Goddess Parvati. The name 'Hartalika' is a combination of 'Harat' (abduction) and 'Aalika' (female friend), referring to the legend where Parvati's friends 'abducted' her and took her to a dense forest to prevent her father from marrying her to Lord Vishnu against her will.</p>
                                    <p>In the forest, Parvati undertook a severe and rigorous penance, fashioning a Shiva Lingam out of sand and praying with unwavering devotion to be united with Lord Shiva. Moved by her determination, Shiva appeared before her and accepted her as his wife. Hartalika Teej celebrates this powerful story of a woman's resolve and her ultimate triumph in winning her desired husband through pure devotion.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Nirjala Vrat</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>The central ritual of Hartalika Teej is the incredibly strict 'Nirjala Vrat', a 24-hour fast during which women abstain from both food and water. They spend the day and night in prayer, singing hymns, and reciting the story of Parvati's penance. Women dress in beautiful traditional attire, often in shades of green, apply mehndi, and adorn themselves with jewelry. In the evening, they gather to worship handmade clay idols of Shiva and Parvati, offering flowers, fruits, and sweets, seeking their blessings for a long, happy, and prosperous married life. The fast is broken the next morning after the final puja.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">Blessings of a Strong Marriage</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Strength and Perseverance</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Hartalika Teej is a celebration of a woman's strength, perseverance, and devotion. The rigorous fast is a testament to their love and commitment to their spouse's well-being and longevity. It is believed that observing this vrat with a pure heart brings immense marital bliss and happiness. Unmarried women also observe the fast, praying for a husband as devoted and ideal as Lord Shiva.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Hartalika Teej" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
