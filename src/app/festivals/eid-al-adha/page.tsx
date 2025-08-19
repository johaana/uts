
'use client';

import { Card, CardContent } from "@/components/ui/card";
import { ShareButtons } from "@/components/ShareButtons";
import { EidAlAdhaPageContent } from "./EidAlAdhaPageContent";


export default function EidAlAdhaPage() {

    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-7xl font-bold text-primary shadow-lg">Eid al-Adha</h1>
                    <p className="text-xl md:text-2xl mt-4 text-primary/90 shadow-md">The Festival of Sacrifice</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12 overflow-hidden">
                    <CardContent className="p-6 md:p-10">
                        <EidAlAdhaPageContent />
                        <ShareButtons title="Eid al-Adha" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
