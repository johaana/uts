
'use client';
import { RecipeBody, RecipeCardLayout, RecipeHeader } from "@/components/RecipeCardLayout";
import { Check } from "lucide-react";
import Image from "next/image";

export default function AvialPage() {
    return (
        <RecipeCardLayout recipeName="Avial">
            <RecipeHeader>
                 <div className="relative h-64 md:h-96">
                    <Image src="https://i.postimg.cc/MpJpjw6X/Aviyal.webp" alt="Avial" layout="fill" objectFit="cover" className="object-center" data-ai-hint="vegetable stew"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 md:p-10">
                        <h1 className="font-headline text-4xl md:text-6xl text-white font-bold drop-shadow-lg">Avial</h1>
                    </div>
                </div>
                <div className="p-6 md:p-10">
                    <div className="prose max-w-none text-lg text-muted-foreground">
                        <p>Avial is the undisputed star of the Onam Sadya, a beautiful and wholesome stew that perfectly encapsulates the spirit of Kerala's harvest. It is a brilliant medley of various seasonal vegetables, all cut into uniform strips, cooked to perfection, and brought together in a creamy, tangy gravy of ground coconut and yogurt. This dish is a testament to the region's agricultural bounty, a celebration of colors, textures, and flavors on a single plate.</p>
                        <p>The genius of Avial lies in its balance. No single vegetable overpowers the other; instead, they all contribute to a harmonious whole. From the earthiness of yam and the sweetness of carrots to the subtle notes of raw banana and drumsticks, every bite is a new discovery. The final touch—a generous drizzle of fragrant, virgin coconut oil and a sprig of fresh curry leaves—elevates the dish to a divine status. It’s a dish that is not just cooked, but lovingly assembled, a culinary embodiment of unity in diversity, much like the festival of Onam itself.</p>
                    </div>
                </div>
            </RecipeHeader>
            <RecipeBody recipeName="Avial">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 cups Mixed vegetables, cut into strips (yam, carrots, beans, drumsticks, raw banana)</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 tsp Turmeric powder</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Salt to taste</li>
                            <h4 className="font-bold pt-2">To Grind:</h4>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup Grated coconut</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2-3 Green chilies</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Cumin seeds</li>
                            <h4 className="font-bold pt-2">For Tempering:</h4>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 cup Yogurt, whisked</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 tbsp Coconut oil</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 sprig Curry leaves</li>
                        </ul>
                    </div>
                    <div className="md:col-span-2">
                        <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                        <ol className="space-y-4 list-decimal list-inside text-foreground/80 prose">
                            <li>Cook the mixed vegetables with turmeric powder and salt in a little water until they are tender but still firm.</li>
                            <li>Grind the coconut, green chilies, and cumin seeds to a coarse paste without adding much water.</li>
                            <li>Add the ground coconut paste to the cooked vegetables and mix gently. Cook for 5 minutes until the raw smell of the coconut disappears.</li>
                            <li>Turn off the heat. Add the whisked yogurt and mix well. Do not boil after adding yogurt.</li>
                            <li>In a separate small pan, heat the coconut oil. Add the curry leaves and let them splutter.</li>
                            <li>Pour this tempering over the Avial.</li>
                            <li>Cover and let it sit for a few minutes for the flavors to meld. Serve hot.</li>
                        </ol>
                    </div>
                </div>
            </RecipeBody>
        </RecipeCardLayout>
    );
}

    
