import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function HaleemPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Haleem</CardTitle>
                     <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                           <p className="text-lg text-muted-foreground">A rich and savory stew, Haleem is a popular dish during Ramadan and Eid. It's a slow-cooked wonder of meat, lentils, and pounded wheat, resulting in a thick, paste-like consistency.</p>
                        </div>
                         <div className="md:w-1/3">
                           <Image src="https://i.postimg.cc/3JMLsfr2/haleem1.jpg" alt="Haleem" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="meat stew"/>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 md:p-10 pt-0">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>500g Mutton or Chicken, boneless</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup Broken wheat (dalia)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 cup mixed Lentils (chana dal, urad dal, moong dal)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 Onions, 1 sliced for frying, 1 chopped</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 tbsp Ginger-garlic paste</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Turmeric powder</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 tsp Red chili powder</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Garam masala</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>4 tbsp Oil or Ghee</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Salt to taste</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>For Garnish: fried onions, mint, coriander, lemon wedges</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                            <ol className="space-y-4 list-decimal list-inside text-foreground/80">
                                <li>Soak the broken wheat and lentils for at least 4-5 hours or overnight.</li>
                                <li>In a pressure cooker, heat oil/ghee. Add the chopped onion and sauté until golden.</li>
                                <li>Add ginger-garlic paste and cook for a minute. Add the meat, turmeric, chili powder, and salt. Cook for 5-7 minutes.</li>
                                <li>Add 4 cups of water and pressure cooker until the meat is very tender (about 8-10 whistles for mutton).</li>
                                <li>Once cooked, shred the meat and keep it aside.</li>
                                <li>In another pressure cooker, cook the soaked lentils and wheat with salt and 6 cups of water until they are completely mushy.</li>
                                <li>Blend the cooked lentil-wheat mixture to a smooth paste using a hand blender.</li>
                                <li>Combine the shredded meat with the lentil paste. Add garam masala and cook on low heat for 20-30 minutes, stirring continuously, until it reaches a thick consistency.</li>
                                <li>Serve hot, garnished with fried onions, chopped mint, coriander, and a squeeze of lemon juice.</li>
                            </ol>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
