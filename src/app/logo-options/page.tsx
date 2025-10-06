
'use client';

import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Sun, Flower2, Flame, Gift, HandPlatter, Star } from "lucide-react";

const logoOptions = [
    { name: "Sparkles", icon: Sparkles },
    { name: "Sun", icon: Sun },
    { name: "Lotus", icon: Flower2 },
    { name: "Flame", icon: Flame },
    { name: "Gift", icon: Gift },
    { name: "HandPlatter", icon: HandPlatter },
    { name: "Star", icon: Star },
];

export default function LogoOptionsPage() {
    return (
        <PageLayout>
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">Logo Options</h1>
                <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                    Here are some festive icon options for the new logo. Please choose the one you feel best represents Utsavs.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {logoOptions.map((logo) => (
                    <Card key={logo.name} className="flex flex-col items-center justify-center p-6 aspect-square transition-all duration-300 hover:shadow-xl hover:bg-primary/5">
                        <logo.icon className="w-16 h-16 text-primary" />
                        <p className="mt-4 font-bold text-lg text-foreground/80">{logo.name}</p>
                    </Card>
                ))}
            </div>
             <div className="text-center mt-12 text-sm text-muted-foreground">
                <p>This is a temporary page for logo selection and will be removed once a choice is made.</p>
            </div>
        </PageLayout>
    );
}
