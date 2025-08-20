
'use client';

import { Card, CardContent } from "@/components/ui/card";
import { ShareButtons } from "@/components/ShareButtons";
import { AkshayaTritiyaPageContent } from "./AkshayaTritiyaPageContent";

export default function AkshayaTritiyaPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-yellow-500/10">
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-7xl font-bold text-amber-900 drop-shadow-lg">Akshaya Tritiya</h1>
                    <p className="text-xl md:text-2xl mt-4 text-amber-800/90 drop-shadow-md">The Day of Eternal Fortune</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 md:-mt-24">
                <Card className="mb-12 overflow-hidden">
                    <CardContent className="p-6 md:p-10">
                       <AkshayaTritiyaPageContent />
                        <ShareButtons title="Akshaya Tritiya" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
