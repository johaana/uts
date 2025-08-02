import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function PuranPoliPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Puran Poli</CardTitle>
                    <p className="text-lg text-muted-foreground">A quintessential Maharashtrian sweet flatbread, Puran Poli is specially made during festivals like Ganesh Chaturthi and Holi.</p>
                </CardHeader>
                <CardContent className="p-6 md:p-10 pt-0">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                            <h4 className="font-bold mb-2">For the filling (Puran):</h4>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup Chana dal (split Bengal gram)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup Jaggery, grated</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Cardamom powder</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 tsp Nutmeg powder</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tbsp Ghee</li>
                            </ul>
                            <h4 className="font-bold mb-2">For the dough (Poli):</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 cups Whole wheat flour</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/4 tsp Turmeric powder</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 tbsp Oil or Ghee</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Water, as needed</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Ghee for roasting</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                            <ol className="space-y-4 list-decimal list-inside text-foreground/80">
                                <li><strong>Prepare the Puran:</strong> Wash and pressure cook the chana dal with 3 cups of water until soft. Drain any excess water.</li>
                                <li>In a pan, cook the dal and jaggery together until the jaggery melts and the mixture thickens. Stir continuously.</li>
                                <li>Once thick, add cardamom powder, nutmeg powder, and ghee. Mix well. Let it cool, then grind it to a smooth paste. Your Puran is ready.</li>
                                <li><strong>Prepare the Poli:</strong> In a bowl, mix whole wheat flour, turmeric, and a pinch of salt. Add oil/ghee and enough water to knead a soft, pliable dough. Let it rest for 30 minutes.</li>
                                <li><strong>Assemble and Cook:</strong> Take a small portion of dough, flatten it, and place a ball of the puran filling in the center. Seal the edges and roll it out gently into a thin flatbread (poli).</li>
                                <li>Heat a tawa (griddle) and cook the poli on both sides with ghee until golden brown spots appear.</li>
                                <li>Serve hot, generously smeared with more ghee.</li>
                            </ol>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
