
'use client';

import { InternationalFestivalsPageContent } from "./InternationalFestivalsPageContent";

export default function InternationalFestivalsPage() {

    return (
        <div className="theme-international">
            <div className="bg-background text-foreground">
                <div className="container mx-auto px-4 py-8 md:py-12">
                    <InternationalFestivalsPageContent />
                </div>
            </div>
        </div>
    );
}
