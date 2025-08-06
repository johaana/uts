import { RecipeBody, RecipeCardLayout, RecipeHeader } from "@/components/RecipeCardLayout";
import { Check } from "lucide-react";
import Image from "next/image";

export default function PodaPithaPage() {
    return (
        <RecipeCardLayout>
            <RecipeHeader>
                <h1 className="font-headline text-4xl mb-4">Poda Pitha</h1>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                        <p className="text-lg text-muted-foreground">The favorite food of Lord Jagannath, Poda Pitha is a slow-cooked, baked rice cake from Odisha, traditionally prepared for the Rath Yatra festival.</p>
                    </div>
                    <div className="md:w-1/3">
                        <Image src="https://i.postimg.cc/zXQJ3yv1/podapitha.jpg" alt="Poda Pitha" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="baked rice cake" />
                    </div>
                </div>
            </RecipeHeader>
            <RecipeBody>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 cup Rice, soaked overnight</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1/2 cup Urad dal, soaked overnight</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 cup Grated coconut</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />3/4 cup Jaggery, powdered</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1/2 tsp Cardamom powder</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />Handful of cashews and raisins</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />2 tbsp Ghee</li>
                        </ul>
                    </div>
                    <div className="md:col-span-2">
                        <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                        <ol className="space-y-4 list-decimal list-inside text-foreground/80 prose">
                            <li>Grind the soaked rice and urad dal into a thick, slightly coarse batter. Allow it to ferment for 6-8 hours.</li>
                            <li>To the fermented batter, add grated coconut, jaggery, cardamom powder, nuts, and raisins. Mix well.</li>
                            <li>Grease a pressure cooker or a heavy-bottomed pan with ghee. Traditionally, it's lined with a banana leaf.</li>
                            <li>Pour the batter into the cooker/pan.</li>
                            <li>Cook on a very low flame for about 45-60 minutes. If using a pressure cooker, cook without the whistle.</li>
                            <li>The pitha is cooked when a skewer inserted comes out clean and the top is a beautiful caramelized brown.</li>
                            <li>Let it cool down completely before slicing and serving. The 'poda' (burnt) crust is the most delicious part.</li>
                        </ol>
                    </div>
                </div>
            </RecipeBody>
        </RecipeCardLayout>
    );
}
