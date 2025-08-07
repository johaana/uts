
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ShareButtons } from "./ShareButtons";
import React from "react";

export function RecipeCardLayout({ children, recipeName }: { children: React.ReactNode, recipeName: string }) {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-12">
                <Card className="overflow-hidden shadow-xl">
                    {children}
                </Card>
            </div>
        </div>
    );
}

export function RecipeHeader({ children }: { children: React.ReactNode }) {
    return (
        <CardHeader className="p-0">
            {children}
        </CardHeader>
    );
}

export function RecipeBody({ children, recipeName }: { children: React.ReactNode, recipeName: string }) {
    return (
        <CardContent className="p-6 md:p-10">
            <div className="border-b-2 border-dashed border-border pb-6 mb-6">
                {children}
            </div>
            <ShareButtons title={recipeName} />
        </CardContent>
    )
}
