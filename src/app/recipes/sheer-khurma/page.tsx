
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function SheerKhurmaPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Sheer Khurma</CardTitle>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                            <div className="prose max-w-none text-lg text-muted-foreground">
                                <p>Sheer Khurma is not just a dessert; it is the very essence of Eid-al-Fitr, a dish that embodies the spirit of warmth, generosity, and sweet celebration. The name itself, from Persian, translates to "milk with dates," but this luxurious vermicelli pudding is so much more. It marks the joyous culmination of Ramadan, the sacred month of fasting, and is the first thing many Muslims eat in the morning before heading for Eid prayers.</p>
                                <p>This rich and creamy pudding is a symphony of flavors and textures. Fine, roasted vermicelli noodles are simmered in milk until it thickens into a luscious consistency. The soul of the dish comes from the assortment of finely chopped nuts—almonds, pistachios, and cashews—that are fried in ghee until golden, and the soft, sweet chewiness of dates. Fragrant with cardamom and saffron, every spoonful of Sheer Khurma is a taste of pure festive indulgence, a sweet reward for a month of devotion, shared with family and friends in a beautiful display of community and togetherness.</p>
                            </div>
                        </div>
                         <div className="md:w-1/3">
                           <Image src="https://i.postimg.cc/Hk9V3k2k/sheer-kurma.jpg" alt="Sheer Khurma" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="vermicelli pudding"/>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 md:p-10 pt-0">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 litre Full-fat milk</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 cup Fine vermicelli (seviyan)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 cup Sugar (or to taste)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/4 cup Dates (khurma), pitted and chopped</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 tbsp Ghee (clarified butter)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/4 cup Mixed nuts (almonds, pistachios, cashews), slivered</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 tsp Cardamom powder</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>A pinch of Saffron (optional)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Dried rose petals for garnish (optional)</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                            <ol className="space-y-4 list-decimal list-inside text-foreground/80">
                                <li>In a heavy-bottomed pan, heat the ghee. Add the slivered nuts and roast until they turn golden. Remove and set aside.</li>
                                <li>In the same ghee, add the vermicelli and roast on low heat until it turns a beautiful golden brown color. Be careful not to burn it.</li>
                                <li>Pour the milk into the pan with the roasted vermicelli. Bring it to a boil and then let it simmer on low heat.</li>
                                <li>Add the chopped dates, sugar, and saffron (if using). Stir well until the sugar dissolves.</li>
                                <li>Continue to simmer the mixture for about 10-15 minutes, or until the milk thickens slightly and the vermicelli is cooked through.</li>
                                <li>Add the cardamom powder and most of the roasted nuts. Mix well and cook for another minute.</li>
                                <li>Sheer Khurma can be served warm or chilled. Garnish with the remaining roasted nuts and dried rose petals before serving.</li>
                            </ol>
                        </div>
                    </div>
                    <ShareButtons title="Sheer Khurma Recipe" />
                </CardContent>
            </Card>
        </div>
    );
}
