import React from 'react';
import { B2BHeader } from '@/components/b2b/B2BHeader';
import { B2BFooter } from '@/components/b2b/B2BFooter';
import { B2BHero } from '@/components/b2b/B2BHero';
import { CapabilityGrid } from '@/components/b2b/CapabilityGrid';
import { ComparisonSection } from '@/components/b2b/ComparisonSection';
import { GlobalCoverageSection } from '@/components/b2b/GlobalCoverageSection';
import { DataTrustSection } from '@/components/b2b/DataTrustSection';
import { ApiExampleSection } from '@/components/b2b/ApiExampleSection';
import { UseCaseGrid } from '@/components/b2b/UseCaseGrid';
import { CulturalIntelligenceSection } from '@/components/b2b/CulturalIntelligenceSection';
import { FinalCTA } from '@/components/b2b/FinalCTA';
import { SampleIntelligenceCard } from '@/components/b2b/SampleIntelligenceCard';

export const metadata = {
  title: "Utsavs | Global Holiday Intelligence",
  description: "The world's structured, verified holiday, festival and observance intelligence.",
};

export default function GlobalHolidayIntelligencePage() {
  return (
    <div className="bg-background text-foreground selection:bg-primary/20">
      <B2BHeader />
      <main>
        <B2BHero />
        
        {/* Not Just Holiday Dates Section */}
        <section className="py-20 border-y bg-primary/5">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-headline text-3xl md:text-5xl font-bold mb-8">Not just holiday dates.</h2>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12">
                        Utsavs adds the context machines usually miss — where a holiday applies, what kind of day it is, how certain the date is, where the information came from, and what it means.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
                        {['Date', 'Context', 'Verification', 'Regional intelligence', 'Operational insight'].map((step, i) => (
                            <React.Fragment key={step}>
                                <span className="font-bold text-sm uppercase tracking-widest text-primary">{step}</span>
                                {i < 4 && <span className="text-muted-foreground/30 hidden md:inline">→</span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        <CapabilityGrid />
        
        {/* Sample Section */}
        <section id="data" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">One holiday. More useful information.</h2>
                    <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Showing how the Utsavs data model transforms a simple calendar event into actionable intelligence.</p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <SampleIntelligenceCard />
                </div>
            </div>
        </section>

        <ComparisonSection />
        <GlobalCoverageSection />
        <DataTrustSection />
        <CulturalIntelligenceSection />
        <ApiExampleSection />
        <UseCaseGrid />

        {/* Ecosystem Statement */}
        <section className="py-24 border-t bg-muted/20">
            <div className="container mx-auto px-4 text-center">
                <p className="text-xl font-medium text-muted-foreground max-w-3xl mx-auto mb-12">
                    Utsavs began by helping people discover festivals. <br className="hidden md:block" />
                    We're now building the intelligence layer that helps systems understand them.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                    <div className="space-y-1">
                        <p className="font-bold text-lg">Utsavs.com</p>
                        <p className="text-xs text-muted-foreground">Culture · Stories · Recipes · Festival Guides</p>
                    </div>
                    <div className="text-muted-foreground hidden md:block">↓</div>
                    <div className="space-y-1">
                        <p className="font-bold text-lg text-primary">Global Holiday Intelligence</p>
                        <p className="text-xs text-muted-foreground">Structured · Verified · Regional · Source-aware</p>
                    </div>
                    <div className="text-muted-foreground hidden md:block">↓</div>
                    <div className="space-y-1">
                        <p className="font-bold text-lg text-zinc-900 dark:text-white">Utsavs Intelligence API</p>
                        <p className="text-xs text-muted-foreground">For Developers and Businesses</p>
                    </div>
                </div>
            </div>
        </section>

        <FinalCTA />
      </main>
      <B2BFooter />
    </div>
  );
}
