
import React from 'react';
import { B2BHeader } from '@/components/b2b/B2BHeader';
import { B2BFooter } from '@/components/b2b/B2BFooter';
import { B2BHero } from '@/components/b2b/B2BHero';
import { CapabilityGrid } from '@/components/b2b/CapabilityGrid';
import { ComparisonSection } from '@/components/b2b/ComparisonSection';
import { SampleIntelligenceCard } from '@/components/b2b/SampleIntelligenceCard';
import { GlobalCoverageSection } from '@/components/b2b/GlobalCoverageSection';
import { DataTrustSection } from '@/components/b2b/DataTrustSection';
import { ApiExampleSection } from '@/components/b2b/ApiExampleSection';
import { UseCaseGrid } from '@/components/b2b/UseCaseGrid';
import { CulturalIntelligenceSection } from '@/components/b2b/CulturalIntelligenceSection';
import { ProductEcosystemSection } from '@/components/b2b/ProductEcosystemSection';
import { FinalCTA } from '@/components/b2b/FinalCTA';

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
        <CapabilityGrid />
        <ComparisonSection />
        <div className="bg-secondary/30 py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-headline text-3xl md:text-5xl font-bold">The Intelligence Model</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        A detailed look at how we transform simple dates into actionable business intelligence.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <SampleIntelligenceCard />
                </div>
            </div>
        </div>
        <GlobalCoverageSection />
        <DataTrustSection />
        <ApiExampleSection />
        <UseCaseGrid />
        <CulturalIntelligenceSection />
        <ProductEcosystemSection />
        <FinalCTA />
      </main>
      <B2BFooter />
    </div>
  );
}
