'use client';

import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Sprout, Wheat, Flame } from "lucide-react";
import { Button } from "../components/ui/button";
import Link from "next/link";

const logoOptions = [
    { name: "Leaf", icon: Leaf },
    { name: "Sprout", icon: Sprout },
    { name: "Wheat", icon: Wheat },
    { name: "Flame", icon: Flame },
];

export default function LogoOptionsPage() {
  return (
    <PageLayout>
        <div className="text-center mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold">Logo Options</h1>
            <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                Please choose the icon that best represents the Utsavs brand.
            </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {logoOptions.map((logo) => (
                <Card key={logo.name} className="flex flex-col items-center justify-center p-8 aspect-square group cursor-pointer hover:bg-primary/10 transition-colors">
                    <logo.icon className="w-16 h-16 text-primary group-hover:scale-110 transition-transform" />
                    <p className="mt-4 font-bold text-lg text-foreground/80">{logo.name}</p>
                </Card>
            ))}
        </div>

        <div className="text-center mt-12">
            <p className="text-muted-foreground">Once you have decided, let me know your choice.</p>
        </div>

    </PageLayout>
  );
}
    