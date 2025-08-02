import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function KarahPrasadPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-0">
                     <Image src="https://images.unsplash.com/photo-1626094309830-0d7ea26f3094?q=80&w=1200&h=600&fit=crop" alt="Karah Prasad" width={1200} height={600} className="w-full h-auto object-cover rounded-t-lg" data-ai-hint="wheat halwa" />
                </CardHeader>
                <CardContent className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Karah Prasad</CardTitle>
                    <p className="text-lg text-muted-foreground mb-6">A sacred and humble offering made with just four ingredients, Karah Prasad is served at Gurdwaras to everyone. Its beauty lies in its simplicity and the devotion with which it's made.</p>

                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div className="md:col-span-1">
                            <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup Ghee (clarified butter)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup Whole wheat flour (atta)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup Sugar</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>3 cups Water</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                            <ol className="space-y-4 list-decimal list-inside text-foreground/80">
                                <li><strong>Make Sugar Syrup:</strong> In a saucepan, bring the water and sugar to a boil. Stir until the sugar is completely dissolved. Keep the syrup hot on a low flame.</li>
                                <li><strong>Roast the Flour:</strong> In a separate heavy-bottomed pan or kadai, melt the ghee on low heat.</li>
                                <li>Add the whole wheat flour to the ghee. Roast the flour on a continuous low flame, stirring constantly.</li>
                                <li>The flour will slowly change color to a golden brown and release a fragrant, nutty aroma. This is the most important step and can take 15-20 minutes. Patience is key to a good prasad.</li>
                                <li><strong>Combine:</strong> Once the flour is well-roasted, very carefully and slowly pour the hot sugar syrup into the roasted flour mixture. Be cautious as it will splutter violently.</li>
                                <li>Continue to stir vigorously to prevent any lumps from forming.</li>
                                <li><strong>Finish Cooking:</strong> The mixture will quickly absorb the water. Keep cooking and stirring until the halwa thickens, comes together as a single mass, and starts to leave the sides of the pan. You will see ghee separating from the sides.</li>
                                <li>The Karah Prasad is ready. It is traditionally served warm.</li>
                            </ol>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
