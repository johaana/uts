import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function ThandaiPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Thandai</CardTitle>
                    <p className="text-lg text-muted-foreground">The official drink of Holi, Thandai is a refreshing and aromatic cold beverage made with a blend of nuts, seeds, and spices, perfect for cooling down during the colorful festivities.</p>
                </CardHeader>
                <CardContent className="p-6 md:p-10 pt-0">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                             <h4 className="font-bold mb-2">For Thandai Paste:</h4>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/4 cup Almonds</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 tbsp Cashews</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 tbsp Pistachios</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 tbsp Melon seeds (magaz)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 tbsp Poppy seeds (khus khus)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 tbsp Fennel seeds (saunf)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Peppercorns</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>10-12 Cardamom pods</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/4 cup Dried rose petals</li>
                            </ul>
                             <h4 className="font-bold mb-2">For serving:</h4>
                             <ul className="space-y-2">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>4 cups Full-fat milk, chilled</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 cup Sugar (or to taste)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>A few strands of Saffron</li>
                             </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                            <ol className="space-y-4 list-decimal list-inside text-foreground/80">
                                <li><strong>Prepare the Thandai Paste:</strong> Soak all the ingredients for the thandai paste (except rose petals) in 1 cup of warm water for at least 2 hours, or overnight.</li>
                                <li>Drain the water and grind the soaked ingredients with the rose petals into a very fine, smooth paste. Add a little milk if needed while grinding.</li>
                                <li><strong>Make the Thandai:</strong> In a large bowl, whisk together the chilled milk and sugar until the sugar dissolves.</li>
                                <li>Add the prepared thandai paste and saffron strands to the milk. Mix thoroughly using a whisk.</li>
                                <li>Strain the mixture through a fine-mesh sieve or muslin cloth to remove any coarse bits, pressing down to extract all the flavor.</li>
                                <li>Chill the thandai in the refrigerator for at least 1-2 hours before serving.</li>
                                <li>Serve in glasses, garnished with more rose petals and chopped nuts.</li>
                            </ol>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
