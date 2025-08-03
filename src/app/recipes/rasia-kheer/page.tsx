
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function RasiaKheerPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Rasia (Jaggery Rice Kheer)</CardTitle>
                     <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                           <p className="text-lg text-muted-foreground">A special rice pudding made with jaggery instead of sugar, Rasia is a key 'prasad' prepared during the Kharna day of Chhath Puja.</p>
                        </div>
                         <div className="md:w-1/3">
                           <Image src="https://i.postimg.cc/d1N07T3K/thekua1.webp" alt="Rasia Kheer" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="jaggery rice pudding"/>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 md:p-10 pt-0">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 litre Full-fat milk</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 cup Rice, soaked for 30 minutes</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>3/4 cup Jaggery, grated or powdered</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 tsp Cardamom powder</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Handful of chopped nuts (cashews, almonds)</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                            <ol className="space-y-4 list-decimal list-inside text-foreground/80">
                                <li>In a heavy-bottomed pot, bring the milk to a boil.</li>
                                <li>Add the soaked and drained rice to the milk.</li>
                                <li>Cook on a low to medium flame, stirring frequently, until the rice is completely cooked and the milk has thickened. This will take about 25-30 minutes.</li>
                                <li>Once the rice is cooked, turn off the heat. Let the kheer cool down for about 10 minutes. This is important to prevent the milk from curdling when jaggery is added.</li>
                                <li>Add the grated jaggery to the warm kheer and stir until it dissolves completely.</li>
                                <li>Add the cardamom powder and chopped nuts. Mix well.</li>
                                <li>The Rasia is ready. It can be served warm or chilled.</li>
                            </ol>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
