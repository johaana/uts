import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function KajuKatliPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-0">
                     <Image src="https://i.postimg.cc/vcHmcsLW/Diwali-Sweets.jpg" alt="Kaju Katli" width={1200} height={600} className="w-full h-auto object-cover rounded-t-lg" data-ai-hint="cashew fudge" />
                </CardHeader>
                <CardContent className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Kaju Katli</CardTitle>
                    <p className="text-lg text-muted-foreground mb-6">A supremely popular and delicious Indian sweet, Kaju Katli (cashew fudge) is a must-have for festivals like Diwali and Raksha Bandhan. It's known for its melt-in-the-mouth texture.</p>

                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div className="md:col-span-1">
                            <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup Cashews (Kaju)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 cup Sugar</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/4 cup Water</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tbsp Ghee (clarified butter)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/4 tsp Cardamom powder</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Edible silver leaf (vark) for garnish (optional)</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                            <ol className="space-y-4 list-decimal list-inside text-foreground/80">
                                <li><strong>Make Cashew Powder:</strong> Grind the cashews into a fine powder in a grinder. Do this in short pulses to prevent the cashews from releasing oil. Sieve the powder to ensure there are no lumps.</li>
                                <li><strong>Prepare Sugar Syrup:</strong> In a heavy-bottomed pan, combine sugar and water. Heat on medium flame and stir until the sugar dissolves completely. Continue to cook until the syrup reaches a "one-string consistency".</li>
                                <li><strong>Cook the Katli:</strong> Reduce the heat to low, and add the cashew powder to the sugar syrup. Stir continuously to avoid lumps.</li>
                                <li>Add the ghee and cardamom powder. Keep stirring and cooking the mixture until it thickens and starts leaving the sides of the pan, forming a dough-like mass.</li>
                                <li><strong>Roll and Set:</strong> Transfer the cashew dough onto a greased parchment paper or a plate greased with ghee. Let it cool slightly until it's cool enough to handle.</li>
                                <li>Knead the dough for a minute until it's smooth. Place another parchment paper on top and roll it out evenly to your desired thickness (usually about 1/4 inch).</li>
                                <li>If using, gently place the silver leaf (vark) over the rolled dough.</li>
                                <li>Let it cool and set for about 15-20 minutes. Then, cut into traditional diamond shapes using a sharp knife or a pizza cutter.</li>
                                <li>Separate the Kaju Katli pieces and store them in an airtight container.</li>
                            </ol>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
