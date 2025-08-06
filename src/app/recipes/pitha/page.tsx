
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function PithaPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Til Pitha (Sesame Rice Cakes)</CardTitle>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                            <p className="text-lg text-muted-foreground">A quintessential Assamese delicacy for Bihu, Til Pitha are pan-fried rice cakes filled with a sweet mixture of roasted black sesame seeds and jaggery.</p>
                        </div>
                        <div className="md:w-1/3">
                             <Image src="https://i.postimg.cc/PqWh6K4t/pitha.png" alt="Til Pitha" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="sesame rice cakes"/>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 md:p-10 pt-0">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                            <h4 className="font-bold mb-2">For the Filling:</h4>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup Black sesame seeds</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup Jaggery, grated</li>
                            </ul>
                            <h4 className="font-bold mb-2">For the Outer Cover:</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 cups Glutinous rice flour (Bora Saul)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Warm water, as needed</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                            <ol className="space-y-4 list-decimal list-inside text-foreground/80">
                                <li><strong>Prepare the filling:</strong> Dry roast the sesame seeds until they start to pop. Let them cool.</li>
                                <li>Grind the roasted sesame seeds coarsely. Mix with the grated jaggery. Your filling is ready.</li>
                                <li><strong>Prepare the dough:</strong> In a bowl, take the glutinous rice flour. Add warm water little by little and knead into a soft, smooth dough.</li>
                                <li><strong>Make the Pithas:</strong> Take a small ball of dough and flatten it into a thin disc on your palm.</li>
                                <li>Place a spoonful of the sesame-jaggery filling in the center.</li>
                                <li>Fold the disc into a semi-circle and seal the edges tightly.</li>
                                <li>Heat a tawa (griddle) on low-medium heat. Place the pitha on the tawa and cook on both sides until you see light brown spots and the outer layer is crisp.</li>
                                <li>Serve warm.</li>
                            </ol>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
