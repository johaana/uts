
import { RecipeBody, RecipeCardLayout, RecipeHeader } from "@/components/RecipeCardLayout";
import { Check } from "lucide-react";
import Image from "next/image";

export default function KeralaRoastChickenPage() {
    return (
        <RecipeCardLayout recipeName="Kerala Roast Chicken">
            <RecipeHeader>
                <h1 className="font-headline text-4xl mb-4">Kerala Roast Chicken</h1>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                        <p className="text-lg text-muted-foreground">A succulent roast chicken with a twist of Keralan spices, perfect for a festive Christmas meal. The marinade of yogurt and spices makes it incredibly flavorful and tender.</p>
                    </div>
                    <div className="md:w-1/3">
                        <Image src="https://i.postimg.cc/JnR8SJ6j/Kerala-chicken-roast.jpg" alt="Kerala Roast Chicken" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="kerala roast chicken" />
                    </div>
                </div>
            </RecipeHeader>
            <RecipeBody>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                        <h4 className="font-bold mb-2">For the Marinade:</h4>
                        <ul className="space-y-2 mb-4">
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 Whole chicken (about 1.5 kg)</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1/2 cup Thick yogurt</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />2 tbsp Ginger-garlic paste</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 tsp Turmeric powder</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />2 tsp Kashmiri red chili powder</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 tsp Black pepper powder</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 tsp Garam masala</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 tbsp Lemon juice</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />Salt to taste</li>
                        </ul>
                        <h4 className="font-bold mb-2">For Roasting:</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />2 tbsp Coconut oil</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 Onion, sliced</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />2 Green chilies, slit</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 sprig Curry leaves</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />Root vegetables like potatoes and carrots (optional)</li>
                        </ul>
                    </div>
                    <div className="md:col-span-2">
                        <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                        <ol className="space-y-4 list-decimal list-inside text-foreground/80 prose">
                            <li>Make a few gashes on the chicken. Combine all ingredients for the marinade and rub it all over the chicken, inside and out. Let it marinate for at least 4 hours, or overnight.</li>
                            <li>Preheat your oven to 200°C (400°F).</li>
                            <li>In a roasting pan, add the optional root vegetables and the sliced onion. Place the marinated chicken on top.</li>
                            <li>Drizzle the coconut oil over the chicken. Sprinkle the curry leaves and green chilies.</li>
                            <li>Roast for 20 minutes at 200°C (400°F). Then, reduce the heat to 180°C (350°F) and continue to roast for about 1 hour, basting occasionally with the pan juices.</li>
                            <li>The chicken is cooked when the juices run clear when a thigh is pierced.</li>
                            <li>Let the chicken rest for 15-20 minutes before carving. Serve with the roasted vegetables and pan juices.</li>
                        </ol>
                    </div>
                </div>
            </RecipeBody>
        </RecipeCardLayout>
    );
}
