
'use client';

import { Card, CardContent } from "@/components/ui/card";
import { ShareButtons } from "@/components/ShareButtons";
import { RepublicDayPageContent } from "./RepublicDayPageContent";
import Image from "next/image";


export default function RepublicDayPage() {

    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-orange-50/20">
                 <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/W4kyBGYz/independence-day.avif" alt="Republic Day Parade" layout="fill" objectFit="cover" data-ai-hint="indian army parade"/>
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-7xl font-bold text-primary shadow-lg">Republic Day</h1>
                    <p className="text-lg md:text-xl mt-4 text-primary/90 shadow-md">Celebrating the Constitution of India</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 md:-mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                       <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
                             <aside className="md:col-span-4 lg:col-span-3">
                                <div className="sticky top-24">
                                     <RepublicDayPageContent />
                                </div>
                            </aside>
                            <main className="md:col-span-8 lg:col-span-9">
                               <ShareButtons title="Republic Day" />
                            </main>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
