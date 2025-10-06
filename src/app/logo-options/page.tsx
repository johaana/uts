
'use client';

import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Torus, HeartHandshake, Grape, Mountain, Pyramid, Speaker, Vegan } from "lucide-react";

const logoOptions = [
    { name: "Torus", icon: Torus },
    { name: "Heart-Handshake", icon: HeartHandshake },
    { name: "Grape", icon: Grape },
    { name: "Mountain", icon: Mountain },
    { name: "Pyramid", icon: Pyramid },
    { name: "Speaker", icon: Speaker },
    { name: "Vegan", icon: Vegan },
];

export default function LogoOptionsPage() {
    return (
        <PageLayout>
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">Logo Options</h1>
                <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                    Here is a new, more creative set of icon options for the logo. Please choose the one you feel best represents Utsavs.
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
