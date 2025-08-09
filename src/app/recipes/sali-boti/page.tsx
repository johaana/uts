
'use client';
import { ShareButtons } from "@/components/ShareButtons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function SaliBotiPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Sali Boti</CardTitle>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                            <p className="text-lg text-muted-foreground">A quintessential Parsi mutton curry, Sali Boti is a delicious preparation of tender mutton chunks in a tangy, sweet, and spicy tomato-based gravy, famously garnished with crispy potato straws (sali).</p>
                        </div>
                        <div className="md:w-1/3">
                            <Image src="https://i.postimg.cc/W3PTpYv4/sali-boti.jpg" alt="Sali Boti" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="parsi meal"/>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 md:p-10 pt-0">
                    <div className="border-b-2 border-dashed border-border pb-6 mb-6">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-1">
                                <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>500g Mutton, cubed</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 large Onions, finely chopped</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 tbsp Ginger-garlic paste</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 cups Tomato puree</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Turmeric powder</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 tsp Kashmiri red chili powder</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Garam masala</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 tbsp Jaggery</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>3 tbsp Vinegar</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>3 tbsp Oil</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Salt to taste</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Potato straws (sali) for garnish</li>
                                </ul>
                            </div>
                            <div className="md:col-span-2">
                                <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                                <ol className="space-y-4 list-decimal list-inside text-foreground/80 prose">
                                    <li>Heat oil in a pressure cooker. Add the chopped onions and sauté until golden brown.</li>
                                    <li>Add the ginger-garlic paste and cook for another minute until fragrant.</li>
                                    <li>Add the mutton pieces and brown them on all sides.</li>
                                    <li>Add the tomato puree, turmeric powder, chili powder, and salt. Mix well and cook for 5-7 minutes until the oil starts to separate.</li>
                                    <li>Add 1.5 cups of water, close the lid of the pressure cooker, and cook for 15-20 minutes (or 5-6 whistles) until the mutton is tender.</li>
                                    <li>Once the pressure releases, open the cooker. Add the jaggery and vinegar to the gravy.</li>
                                    <li>Simmer the curry on low heat for another 10-15 minutes, allowing the flavors to meld and the gravy to thicken.</li>
                                    <li>Sprinkle garam masala on top and mix.</li>
                                    <li>Serve hot, generously garnished with crispy sali (potato straws), with chapati or rice.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                     <ShareButtons title="Sali Boti Recipe" />
                </CardContent>
            </Card>
        </div>
    );
}
