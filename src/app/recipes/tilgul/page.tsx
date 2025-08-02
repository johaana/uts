import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function TilgulPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Tilgul Ladoo</CardTitle>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                            <p className="text-lg text-muted-foreground">A traditional Maharashtrian sweet for Makar Sankranti, these ladoos made from sesame seeds (til) and jaggery (gul) are exchanged with the saying "Tilgul ghya, goad goad bola" (Eat tilgul and speak sweet words).</p>
                        </div>
                        <div className="md:w-1/3">
                           <Image src="https://i.postimg.cc/4NpH24YF/Diwali-Sweets.jpg" alt="Tilgul Ladoo" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="sesame ladoo"/>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 md:p-10 pt-0">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup White sesame seeds (til)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup Jaggery, grated or powdered</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/4 cup Roasted peanuts, coarsely crushed</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/4 cup Dry coconut (kopra), grated</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 tsp Cardamom powder</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tbsp Ghee</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                            <ol className="space-y-4 list-decimal list-inside text-foreground/80">
                                <li>Dry roast the sesame seeds in a pan on low heat until they are light brown and aromatic. Do not over-roast.</li>
                                <li>In a heavy-bottomed pan, heat the ghee. Add the jaggery and cook on a low flame until it melts completely.</li>
                                <li>Continue to cook the jaggery syrup until it becomes bubbly and slightly thick. To check for consistency, drop a little syrup in a bowl of water; it should form a soft ball.</li>
                                <li>Turn off the heat. Quickly add the roasted sesame seeds, crushed peanuts, grated coconut, and cardamom powder.</li>
                                <li>Mix everything together very well.</li>
                                <li>While the mixture is still hot, grease your palms with ghee or water and start shaping small portions into round ladoos. Be careful as the mixture will be very hot.</li>
                                <li>Let the ladoos cool down completely. They will become firm as they cool. Store in an airtight container.</li>
                            </ol>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
