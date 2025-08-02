import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function RoastChickenPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Classic Roast Chicken</CardTitle>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                            <p className="text-lg text-muted-foreground">A perfectly roasted chicken is the centerpiece of many Christmas feasts. This recipe ensures a juicy, flavorful bird with crispy skin.</p>
                        </div>
                         <div className="md:w-1/3">
                           <Image src="https://i.postimg.cc/RZMhP75N/christmas1.jpg" alt="Roast Chicken" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="roast chicken"/>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 md:p-10 pt-0">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 Whole chicken (about 1.5 kg)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>4 tbsp Olive oil or melted butter</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 Lemon, halved</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 head of Garlic, halved crosswise</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>A few sprigs of fresh thyme or rosemary</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Salt and freshly ground black pepper</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Root vegetables like potatoes and carrots (optional)</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                            <ol className="space-y-4 list-decimal list-inside text-foreground/80">
                                <li>Preheat your oven to 220°C (425°F).</li>
                                <li>Pat the chicken dry with paper towels. A dry chicken ensures crispy skin.</li>
                                <li>Generously season the cavity of the chicken with salt and pepper. Stuff it with the halved lemon, garlic, and herb sprigs.</li>
                                <li>Rub the outside of the chicken all over with olive oil or butter. Season generously with salt and pepper.</li>
                                <li>If using root vegetables, toss them with some oil, salt, and pepper and place them in the bottom of the roasting pan.</li>
                                <li>Place the chicken on top of the vegetables or directly in the pan. Truss the legs together with kitchen twine.</li>
                                <li>Roast for 15 minutes at 220°C (425°F), then reduce the heat to 190°C (375°F) and continue roasting for about 1 hour and 15 minutes, or until the juices run clear when a thigh is pierced.</li>
                                <li>Let the chicken rest for 15-20 minutes before carving. This is crucial for a juicy bird. Serve with the roasted vegetables.</li>
                            </ol>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
