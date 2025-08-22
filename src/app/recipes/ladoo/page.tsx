
'use client';
import { RecipeBody, RecipeCardLayout, RecipeHeader } from "@/components/RecipeCardLayout";
import { Check } from "lucide-react";
import Image from "next/image";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/product-data";

export default function LadooPage() {
    return (
        <RecipeCardLayout recipeName="Besan Ladoo">
            <RecipeHeader>
                 <div className="relative h-64 md:h-96">
                    <Image src="https://i.postimg.cc/9MkWX5gm/Besan-Laddoo.webp" alt="Besan Ladoo" layout="fill" objectFit="cover" className="object-center" data-ai-hint="gram flour ladoo"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 md:p-10">
                        <h1 className="font-headline text-4xl md:text-6xl text-white font-bold drop-shadow-lg">Besan Ladoo</h1>
                    </div>
                </div>
                <div className="p-6 md:p-10">
                    <p className="text-lg text-muted-foreground max-w-3xl">A beloved Indian sweet, Besan Ladoo is made from gram flour, sugar, and ghee. It's a must-have for festivals like Diwali and Raksha Bandhan.</p>
                </div>
            </RecipeHeader>
            <RecipeBody recipeName="Besan Ladoo">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 cups Besan (gram flour)</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup Powdered sugar</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>3/4 cup Ghee (clarified butter)</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 tsp Cardamom powder</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 tbsp chopped Almonds or Pistachios for garnish</li>
                        </ul>
                    </div>
                    <div className="md:col-span-2">
                        <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                        <ol className="space-y-4 list-decimal list-inside text-foreground/80 prose">
                            <li>In a heavy-bottomed pan, heat the ghee on low heat.</li>
                            <li>Add the besan and roast it on a continuous low flame. Stir constantly to avoid lumps and ensure even roasting.</li>
                            <li>This is the most crucial step and will take about 20-25 minutes. The besan will turn golden brown and release a nutty, fragrant aroma.</li>
                            <li>Turn off the heat and let the mixture cool down for about 10-15 minutes. It should be warm to the touch, not hot.</li>
                            <li>Once cooled, add the powdered sugar and cardamom powder. Mix everything together very well.</li>
                            <li>Take small portions of the mixture and shape them into round ladoos.</li>
                            <li>Garnish with chopped nuts. The ladoos can be stored in an airtight container for several weeks.</li>
                        </ol>
                        <div className="not-prose my-10">
                            <h3 className="font-headline text-2xl font-bold mb-4 text-center text-primary">Our Recommended Ghee</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md mx-auto">
                                <ProductCard product={products.vedicGhee} />
                                <ProductCard product={products.daburGhee} />
                            </div>
                        </div>
                    </div>
                </div>
            </RecipeBody>
        </RecipeCardLayout>
    );
}
