import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function CoconutBarfiPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-0">
                     <Image src="https://images.unsplash.com/photo-1606550212039-9b76e2c9e7a2?q=80&w=1200&h=600&fit=crop" alt="Coconut Barfi" width={1200} height={600} className="w-full h-auto object-cover rounded-t-lg" data-ai-hint="coconut fudge" />
                </CardHeader>
                <CardContent className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Coconut Barfi</CardTitle>
                    <p className="text-lg text-muted-foreground mb-6">A simple yet delicious sweet, Coconut Barfi (or Nariyal Barfi) is made with just a few ingredients and is a perfect treat for any festive occasion.</p>

                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div className="md:col-span-1">
                            <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 cups Desiccated coconut</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1.5 cups Full-fat milk</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup Sugar</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 tsp Cardamom powder</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 tbsp Ghee (clarified butter)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Chopped pistachios or almonds for garnish</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                            <ol className="space-y-4 list-decimal list-inside text-foreground/80">
                                <li>Grease a tray or plate with a little ghee and set aside.</li>
                                <li>In a heavy-bottomed pan, add the desiccated coconut, milk, and sugar.</li>
                                <li>Cook on a medium-low heat, stirring continuously. The sugar will melt, and the mixture will become liquidy.</li>
                                <li>Continue to cook, stirring often, until the mixture thickens and starts to leave the sides of the pan. This will take about 15-20 minutes.</li>
                                <li>Add the cardamom powder and ghee. Mix well and cook for another 2-3 minutes until the mixture forms a soft, non-sticky mass.</li>
                                <li>Quickly transfer the mixture to the greased tray and spread it evenly with a spatula.</li>
                                <li>Sprinkle the chopped nuts over the top and gently press them in.</li>
                                <li>Let the barfi cool completely at room temperature or in the refrigerator for about an hour to set.</li>
                                <li>Once set, cut into squares or diamond shapes. Store in an airtight container.</li>
                            </ol>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
