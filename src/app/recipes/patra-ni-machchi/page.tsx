
'use client';
import { ShareButtons } from "@/components/ShareButtons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function PatraNiMachchiPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Patra ni Machchi</CardTitle>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                            <p className="text-lg text-muted-foreground">An iconic Parsi wedding and Navroz dish, Patra ni Machchi features fish fillets (usually pomfret) coated in a vibrant green chutney, wrapped in banana leaves, and steamed to perfection.</p>
                        </div>
                        <div className="md:w-1/3">
                            <Image src="https://i.postimg.cc/nL5gKz5m/Patra-Ni-Macchi.jpg" alt="Patra ni Machchi" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="steamed fish"/>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 md:p-10 pt-0">
                    <div className="border-b-2 border-dashed border-border pb-6 mb-6">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-1">
                                <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>4 medium Pomfret fillets</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Banana leaves, cut into large squares</li>
                                    <h4 className="font-bold pt-2">For the Chutney:</h4>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup fresh Coriander</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 cup fresh Mint leaves</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 cup grated Coconut</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>3-4 Green chilies</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 inch Ginger</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>4-5 cloves Garlic</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Cumin seeds</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 tbsp Lemon juice</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Salt to taste</li>
                                </ul>
                            </div>
                            <div className="md:col-span-2">
                                <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                                <ol className="space-y-4 list-decimal list-inside text-foreground/80 prose">
                                    <li><strong>Prepare the Chutney:</strong> Grind all the chutney ingredients into a thick, smooth paste. Add very little water if necessary.</li>
                                    <li><strong>Prepare the Fish:</strong> Clean the fish fillets and pat them dry. Marinate them with a little salt and lemon juice for 15 minutes.</li>
                                    <li>Generously coat each fish fillet on both sides with the green chutney.</li>
                                    <li><strong>Prepare the Banana Leaves:</strong> Gently warm the banana leaves over a low flame for a few seconds to make them pliable. This prevents them from tearing.</li>
                                    <li><strong>Wrap the Fish:</strong> Place a chutney-coated fish fillet in the center of a banana leaf square. Fold the leaf to create a neat parcel and secure it with a string.</li>
                                    <li><strong>Steam:</strong> Place the parcels in a steamer and steam for 15-20 minutes, or until the fish is cooked through and flaky.</li>
                                    <li>Serve the Patra ni Machchi hot, still in its banana leaf parcel.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                     <ShareButtons title="Patra ni Machchi Recipe" />
                </CardContent>
            </Card>
        </div>
    );
}
