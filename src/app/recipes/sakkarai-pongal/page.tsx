
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function SakkaraiPongalPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Sakkarai Pongal (Sweet Pongal)</CardTitle>
                     <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                            <div className="prose max-w-none text-lg text-muted-foreground">
                                <p>Sakkarai Pongal is the soul of the Pongal harvest festival in Tamil Nadu. It's a sweet, aromatic, and deeply comforting pudding made as a 'naivedyam' (offering) to the Sun God, Surya, to express gratitude for a bountiful harvest. The name 'Pongal' itself means 'to boil over', and the symbolic act of letting the pot of rice and milk overflow is the centerpiece of the festival, signifying overflowing abundance and prosperity for the year ahead.</p>
                                <p>This delectable dish is crafted from freshly harvested raw rice and moong dal, slow-cooked together until soft and creamy. It's sweetened with the rich, earthy flavor of jaggery, which also gives it its characteristic golden-brown color. The final flourish is a generous tempering of ghee, laden with fried cashews and raisins, and perfumed with the warm notes of cardamom and a hint of edible camphor. Every spoonful is a taste of tradition, a perfect blend of humble ingredients transformed into a divine offering.</p>
                            </div>
                        </div>
                         <div className="md:w-1/3">
                           <Image src="https://i.postimg.cc/j2nb1MYh/sakkarai-pongal.webp" alt="Sakkarai Pongal" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="sweet rice pudding"/>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 md:p-10 pt-0">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup Raw rice</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/4 cup Moong dal (split yellow gram)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1.5 cups Jaggery, powdered</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>4 tbsp Ghee</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>10-12 Cashews</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tbsp Raisins</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 tsp Cardamom powder</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>A pinch of edible camphor (optional)</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                            <ol className="space-y-4 list-decimal list-inside text-foreground/80">
                                <li>Dry roast the moong dal until it becomes aromatic.</li>
                                <li>In a pressure cooker, combine the roasted moong dal and rice. Add 4 cups of water and cook for 4-5 whistles until it's soft and mushy.</li>
                                <li>In a separate pan, melt the jaggery with 1/2 cup of water to make a syrup. Strain it to remove impurities.</li>
                                <li>Add the jaggery syrup to the cooked rice-dal mixture. Mix well, ensuring there are no lumps.</li>
                                <li>Cook on a low flame for 5-7 minutes, stirring continuously, until the pongal thickens.</li>
                                <li>In a small pan, heat the ghee. Fry the cashews until golden, then add raisins and fry until they plump up.</li>
                                <li>Pour the ghee with the nuts and raisins over the pongal. Add the cardamom powder and edible camphor (if using).</li>
                                <li>Mix everything well and serve hot.</li>
                            </ol>
                        </div>
                    </div>
                     <ShareButtons title="Sakkarai Pongal Recipe" />
                </CardContent>
            </Card>
        </div>
    );
}
