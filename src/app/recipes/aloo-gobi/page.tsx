'use client';
import { ShareButtons } from "@/components/ShareButtons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Utensils } from "lucide-react";

export default function AlooGobiPage() {
    return (
        <div className="container mx-auto px-6 py-12">
            <div className="mb-10 text-left space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Utensils className="w-6 h-6" />
                </div>
                <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter">Aloo Gobi</h1>
                <p className="text-xl text-muted-foreground font-medium max-w-2xl">
                    A classic and comforting North Indian dish made with potatoes (aloo) and cauliflower (gobi). A staple of traditional community kitchens.
                </p>
            </div>

            <Card className="rounded-sm border-[#17151A]/5 shadow-sm">
                <CardContent className="p-8 md:p-12">
                     <div className="border-b border-[#17151A]/5 pb-12 mb-12">
                        <div className="grid md:grid-cols-3 gap-16 text-left">
                            <div className="md:col-span-1 space-y-6">
                                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E94368]">Ingredients</h3>
                                <ul className="space-y-3 text-sm font-medium text-[#6D6870]">
                                    <li className="flex items-start gap-3"><Check className="text-primary w-4 h-4 shrink-0 mt-0.5" /> 1 medium Cauliflower</li>
                                    <li className="flex items-start gap-3"><Check className="text-primary w-4 h-4 shrink-0 mt-0.5" /> 2 large Potatoes</li>
                                    <li className="flex items-start gap-3"><Check className="text-primary w-4 h-4 shrink-0 mt-0.5" /> 1 Onion, finely chopped</li>
                                    <li className="flex items-start gap-3"><Check className="text-primary w-4 h-4 shrink-0 mt-0.5" /> 1 Tomato, chopped</li>
                                    <li className="flex items-start gap-3"><Check className="text-primary w-4 h-4 shrink-0 mt-0.5" /> 1 tbsp Ginger-garlic paste</li>
                                    <li className="flex items-start gap-3"><Check className="text-primary w-4 h-4 shrink-0 mt-0.5" /> Turmeric, Cumin, Coriander</li>
                                    <li className="flex items-start gap-3"><Check className="text-primary w-4 h-4 shrink-0 mt-0.5" /> 2 tbsp Oil, Salt to taste</li>
                                </ul>
                            </div>
                            <div className="md:col-span-2 space-y-6">
                                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E94368]">Instructions</h3>
                                <ol className="space-y-6 list-decimal list-inside text-[#17151A] font-medium leading-relaxed">
                                    <li>Heat oil in a pan. Add cumin seeds and let them splutter.</li>
                                    <li>Add the chopped onions and sauté until golden brown.</li>
                                    <li>Add ginger-garlic paste and cook for another minute until the raw smell disappears.</li>
                                    <li>Add the chopped tomatoes and cook until they become soft.</li>
                                    <li>Add all the spice powders: turmeric, coriander powder, and salt. Mix well.</li>
                                    <li>Add the potato cubes and cauliflower florets. Stir well to coat them with the spices.</li>
                                    <li>Cover the pan and cook on a low to medium flame for 15-20 minutes, or until tender.</li>
                                    <li>Garnish with fresh coriander leaves and serve hot.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <ShareButtons title="Aloo Gobi Recipe" />
                </CardContent>
            </Card>
        </div>
    );
}
