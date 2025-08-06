import { cn } from "@/lib/utils";
import React from "react";

export function RecipeCardLayout({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={cn("bg-transparent py-12", className)}>
            <div className="container mx-auto px-4">
                 <div className="max-w-4xl mx-auto bg-card p-6 md:p-10 rounded-2xl shadow-2xl ring-1 ring-border/50">
                    {children}
                </div>
            </div>
        </div>
    );
}

export function RecipeHeader({ children }: { children: React.ReactNode }) {
    return <div className="border-b-2 border-dashed border-border pb-6 mb-6">{children}</div>;
}

export function RecipeBody({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>
}
