
'use client';

import { Card, CardContent } from "@/components/ui/card";
import { ShareButtons } from "@/components/ShareButtons";
import { RepublicDayPageContent } from "./RepublicDayPageContent";


export default function RepublicDayPage() {

    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-orange-50/20">
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-7xl font-bold text-primary shadow-lg">Republic Day</h1>
                    <p className="text-lg md:text-xl mt-4 text-primary/90 shadow-md">Celebrating the Constitution of India</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 md:-mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <RepublicDayPageContent />
                        <ShareButtons title="Republic Day" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
