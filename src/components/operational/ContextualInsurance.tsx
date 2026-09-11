import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ContextualInsuranceProps {
  isVisible: boolean;
}

/**
 * Contextual Insurance Component
 * 
 * Designed to appear naturally after a relevant travel/business/study result.
 * Currently hidden as no real operational results are generated.
 */
export function ContextualInsurance({ isVisible }: ContextualInsuranceProps) {
  if (!isVisible) return null;

  return (
    <Card className="bg-primary/5 border-primary/20 border-dashed mt-8">
      <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-primary/10 rounded-full mt-1">
            <ShieldCheck className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 className="font-bold text-lg">Planning this trip?</h4>
            <p className="text-sm text-muted-foreground">Explore travel protection for covered unexpected events.</p>
          </div>
        </div>
        <Link href="/travel-insurance">
          <Button variant="outline" className="font-bold">
            Learn More <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
