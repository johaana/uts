import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function RasMalaiPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-0">
                     <Image src="https://images.unsplash.com/photo-1626803775151-621644546ac9?q=80&w=1200&h=600&fit=crop" alt="Ras Malai" width={1200} height={600} className="w-full h-auto object-cover rounded-t-lg" data-ai-hint="milk dessert" />
                </CardHeader>
                <CardContent className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Ras Malai</CardTitle>
                    <p className="text-lg text-muted-foreground mb-6">A royal Bengali dessert, Ras Malai consists of soft, spongy cheese discs soaked in a fragrant, saffron-infused milk syrup. A true delicacy for festivals like Holi and Diwali.</p>

                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div className="md:col-span-1">
                            <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                            <h4 className="font-bold mb-2">For the Chenna (Cheese discs):</h4>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 litre Full-fat milk</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2-3 tbsp Lemon juice or vinegar</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup Sugar</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>4 cups Water</li>
                            </ul>
                             <h4 className="font-bold mb-2">For the Rabri (Milk Syrup):</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 litre Full-fat milk</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 cup Sugar (or to taste)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>A pinch of Saffron strands</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 tsp Cardamom powder</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 tbsp Pistachios, slivered</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                            <ol className="space-y-4 list-decimal list-inside text-foreground/80">
                                <li><strong>Prepare Chenna:</strong> Boil 1 litre of milk. Add lemon juice to curdle it. Strain the curdled milk through a muslin cloth. Squeeze out excess water.</li>
                                <li>Knead the collected chenna for 8-10 minutes until smooth. Make small, flat discs.</li>
                                <li>In a wide pan, boil sugar and water to make a thin syrup. Gently drop the chenna discs into the boiling syrup. Cover and cook for 15-20 minutes until they double in size.</li>
                                <li><strong>Prepare Rabri:</strong> While the discs cook, boil the other litre of milk in a heavy-bottomed pan. Simmer until it reduces to about half its quantity, stirring frequently.</li>
                                <li>Add sugar, saffron, and cardamom powder to the reduced milk. Stir until sugar dissolves.</li>
                                <li><strong>Assemble Ras Malai:</strong> Gently squeeze the sugar syrup from the cooked chenna discs and transfer them to the warm rabri.</li>
                                <li>Let them soak for at least 4-5 hours, or preferably overnight in the refrigerator. Garnish with slivered pistachios and serve chilled.</li>
                            </ol>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
