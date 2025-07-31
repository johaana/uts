import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function ModakPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-0">
                     <Image src="https://images.unsplash.com/photo-1625391029258-a53655383921?q=80&w=1200&h=600&fit=crop" alt="Ukadiche Modak" width={1200} height={600} className="w-full h-auto object-cover rounded-t-lg" data-ai-hint="steamed dumplings" />
                </CardHeader>
                <CardContent className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Ukadiche Modak (Steamed Modak)</CardTitle>
                    <p className="text-lg text-muted-foreground mb-6">This is the traditional sweet offering to Lord Ganesha during Ganesh Chaturthi. These steamed rice flour dumplings are filled with a sweet mixture of coconut and jaggery.</p>

                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div className="md:col-span-1">
                            <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                            <h4 className="font-bold mb-2">For the filling:</h4>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1.5 cups Freshly grated coconut</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup Jaggery, powdered</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/4 tsp Nutmeg powder</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 tsp Cardamom powder</li>
                            </ul>
                            <h4 className="font-bold mb-2">For the outer shell:</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup Rice flour</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1.5 cups Water</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Ghee</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                            <ol className="space-y-4 list-decimal list-inside text-foreground/80">
                                <li><strong>Prepare the filling:</strong> In a pan, mix coconut and jaggery. Cook on low heat until the jaggery melts and the mixture thickens. Add nutmeg and cardamom powder. Let it cool.</li>
                                <li><strong>Prepare the outer shell:</strong> In a pot, bring water and ghee to a boil. Add the rice flour and mix quickly to form a lump-free dough. Cover and let it cook in the steam for 2-3 minutes.</li>
                                <li>Transfer the dough to a plate. While still hot, knead it into a soft, smooth dough. Use a little ghee on your palms to prevent sticking.</li>
                                <li><strong>Shape the modaks:</strong> Take a small portion of dough, flatten it into a small disc. Place the filling in the center.</li>
                                <li>Pinch the edges to create pleats and bring them together at the top to form a pointed, conical shape. You can also use modak moulds.</li>
                                <li><strong>Steam the modaks:</strong> Place the modaks in a steamer (lined with a banana leaf or greased). Steam for 10-12 minutes.</li>
                                <li>Serve hot with a dollop of ghee.</li>
                            </ol>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
