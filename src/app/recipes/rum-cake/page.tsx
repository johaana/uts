
'use client';
import { RecipeBody, RecipeCardLayout, RecipeHeader } from "@/components/RecipeCardLayout";
import { Check } from "lucide-react";
import Image from "next/image";

export default function RumCakePage() {
    return (
        <RecipeCardLayout recipeName="Classic Rum Cake">
            <RecipeHeader>
                <div className="relative h-64 md:h-96">
                    <Image src="https://i.postimg.cc/PxRHKB9x/rum-cake.webp" alt="Rum Cake" layout="fill" objectFit="cover" className="object-center" data-ai-hint="rum cake"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 md:p-10">
                        <h1 className="font-headline text-4xl md:text-6xl text-white font-bold drop-shadow-lg">Classic Rum Cake</h1>
                    </div>
                </div>
                <div className="p-6 md:p-10">
                    <p className="text-lg text-muted-foreground max-w-3xl">A rich, moist, and boozy fruit cake is the heart of Christmas celebrations. This recipe is packed with rum-soaked dried fruits, nuts, and warm spices.</p>
                </div>
            </RecipeHeader>
            <RecipeBody recipeName="Classic Rum Cake">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />2 cups Mixed dried fruits (raisins, currants, cherries, apricots)</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 cup Dark Rum (for soaking)</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1.5 cups All-purpose flour</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 tsp Baking powder</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1/2 tsp Salt</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />2 tsp Mixed spice powder (cinnamon, nutmeg, cloves)</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 cup Unsalted butter, softened</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 cup Brown sugar</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />3 Large eggs</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1/2 cup chopped Walnuts or pecans</li>
                        </ul>
                    </div>
                    <div className="md:col-span-2">
                        <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                        <ol className="space-y-4 list-decimal list-inside text-foreground/80 prose">
                            <li><strong>Soak the fruits:</strong> A day before (or at least a few hours), soak the mixed dried fruits in rum.</li>
                            <li><strong>Prepare the oven:</strong> Preheat your oven to 160°C (320°F). Grease and line an 8-inch round cake pan.</li>
                            <li><strong>Mix dry ingredients:</strong> In a bowl, whisk together the flour, baking powder, salt, and mixed spice powder.</li>
                            <li><strong>Cream butter and sugar:</strong> In a large bowl, beat the softened butter and brown sugar until light and fluffy.</li>
                            <li><strong>Add eggs:</strong> Beat in the eggs one at a time, mixing well after each addition.</li>
                            <li><strong>Combine mixtures:</strong> Gently fold the flour mixture into the butter mixture. Do not overmix.</li>
                            <li><strong>Add fruits and nuts:</strong> Fold in the rum-soaked fruits (along with any remaining liquid) and the chopped nuts.</li>
                            <li><strong>Bake:</strong> Pour the batter into the prepared cake pan and level the top. Bake for about 1.5 to 2 hours, or until a skewer inserted into the center comes out clean.</li>
                            <li><strong>Cool and store:</strong> Let the cake cool in the pan for 30 minutes before transferring it to a wire rack to cool completely. The cake can be "fed" with more rum over a few weeks for a richer flavor.</li>
                        </ol>
                    </div>
                </div>
            </RecipeBody>
        </RecipeCardLayout>
    );
}

    