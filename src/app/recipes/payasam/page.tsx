
'use client';
import { ShareButtons } from "@/components/ShareButtons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function PayasamPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Semiya Payasam (Vermicelli Kheer)</CardTitle>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                            <div className="prose max-w-none text-lg text-muted-foreground">
                                <p>Semiya Payasam is the quintessential dessert of South India, a creamy, fragrant pudding that graces every celebration, from birthdays and weddings to grand festivals like Onam and Vishu. It's a culinary hug in a bowl—simple, comforting, and universally loved. Its beauty lies in its elegant simplicity and the delightful textures it offers.</p>
                                <p>The star of the dish is fine vermicelli (semiya), which is patiently roasted in ghee to a perfect golden-brown, unlocking a beautiful nutty aroma. This is then slow-cooked in simmering full-fat milk until it becomes tender and the milk thickens into a rich, creamy consistency. Sweetened with sugar and perfumed with the warm notes of cardamom, the payasam is finished with a final flourish of ghee-fried cashews and plump raisins, adding a delightful crunch and sweetness. Whether served warm on a cool evening or chilled on a hot day, Semiya Payasam is a taste of pure, unadulterated festive joy.</p>
                            </div>
                        </div>
                         <div className="md:w-1/3">
                           <Image src="https://i.postimg.cc/59n9d7My/payasam.jpg" alt="Semiya Payasam" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="vermicelli pudding" />
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 md:p-10 pt-0">
                    <div className="border-b-2 border-dashed border-border pb-6 mb-6">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-1">
                                <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 cup Vermicelli (semiya)</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 litre Full-fat milk</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />3/4 cup Sugar (or to taste)</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />2 tbsp Ghee</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />10-12 Cashews</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 tbsp Raisins</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1/2 tsp Cardamom powder</li>
                                </ul>
                            </div>
                            <div className="md:col-span-2">
                                <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                                <ol className="space-y-4 list-decimal list-inside text-foreground/80 prose">
                                    <li>Heat 1 tbsp of ghee in a pan. Fry the cashews until golden, then add raisins and fry until they plump up. Remove and set aside.</li>
                                    <li>In the same pan, add the remaining ghee and roast the vermicelli on low heat until it turns a nice golden brown. Set aside.</li>
                                    <li>In a heavy-bottomed pot, bring the milk to a boil.</li>
                                    <li>Add the roasted vermicelli to the boiling milk. Cook on a medium-low flame, stirring occasionally, until the vermicelli is soft and cooked through.</li>
                                    <li>Add the sugar and stir until it dissolves completely.</li>
                                    <li>Simmer for another 5-7 minutes until the payasam thickens to your desired consistency.</li>
                                    <li>Stir in the cardamom powder and the fried cashews and raisins.</li>
                                    <li>Serve the payasam warm or chilled.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                     <ShareButtons title="Semiya Payasam Recipe" />
                </CardContent>
            </Card>
        </div>
    );
}
