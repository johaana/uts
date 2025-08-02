import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function KothimbirVadiPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Kothimbir Vadi</CardTitle>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                            <p className="text-lg text-muted-foreground">A popular Maharashtrian savory snack, Kothimbir Vadi are crispy, spiced cilantro fritters, perfect for festive snacking during Gudi Padwa or Diwali.</p>
                        </div>
                        <div className="md:w-1/3">
                           <Image src="https://i.postimg.cc/mDn7NM2s/Sweets1.jpg" alt="Kothimbir Vadi" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="coriander fritters"/>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 md:p-10 pt-0">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 cups chopped Coriander (Cilantro) leaves</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup Besan (gram flour)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/4 cup Rice flour (for crispiness)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tbsp Ginger-green chili paste</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Turmeric powder</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Red chili powder</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Sesame seeds</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>A pinch of Asafoetida (hing)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Salt to taste</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Water, as needed</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Oil for frying</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                            <ol className="space-y-4 list-decimal list-inside text-foreground/80">
                                <li>In a bowl, mix the chopped coriander, besan, rice flour, and all the spices.</li>
                                <li>Add a little water at a time to form a thick, sticky dough. Do not add too much water.</li>
                                <li>Grease a steamer plate. Spread the dough evenly on the plate.</li>
                                <li>Steam for 15-20 minutes, or until a knife inserted comes out clean.</li>
                                <li>Let the steamed block cool down completely. Then, cut it into squares or diamonds.</li>
                                <li>You can serve these steamed vadis as is, or you can shallow fry or deep fry them.</li>
                                <li>To fry, heat oil in a pan. Gently place the vadis and fry until they are golden and crisp on both sides.</li>
                                <li>Serve hot with chutney.</li>
                            </ol>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
