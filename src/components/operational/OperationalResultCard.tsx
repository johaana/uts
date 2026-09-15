
'use client';

import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Info, Calendar, MapPin, ShieldCheck, ExternalLink, Landmark } from "lucide-react";
import { DateIntelligenceRecord } from '@/lib/operational/types';
import { cn } from '@/lib/utils';

interface OperationalResultCardProps {
  record: DateIntelligenceRecord;
}

export function OperationalResultCard({ record }: OperationalResultCardProps) {
  const isHighConfidence = record.confidence === 'high';
  
  return (
    <Card className="mb-4 border-l-4 border-l-primary overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="bg-muted/5 py-4 px-6 flex flex-col sm:flex-row items-start justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-lg leading-tight">{record.name}</h3>
            <Badge variant={record.state === 'confirmed' ? 'default' : 'secondary'} className="text-[9px] h-4 font-mono px-1">
              {record.state.toUpperCase()}
            </Badge>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-muted-foreground font-medium">
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-primary/60" /> {record.date}</span>
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-primary/60" /> {record.jurisdiction.country_name}{record.jurisdiction.region ? ` · ${record.jurisdiction.region}` : ''}</span>
            {record.institution && (
              <span className="flex items-center gap-1 text-primary/80">
                <Landmark className="w-3 h-3" /> {record.institution.name}
              </span>
            )}
          </div>
        </div>
        <div className="shrink-0 flex items-center gap-2">
          <div className={cn(
            "flex items-center gap-1 px-2 py-0.5 rounded border text-[9px] font-bold uppercase tracking-wider",
            isHighConfidence ? "bg-green-500/10 text-green-600 border-green-200" : "bg-yellow-500/10 text-yellow-600 border-yellow-200"
          )}>
            <ShieldCheck className="w-3 h-3" /> {record.confidence}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-2 space-y-4">
        <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2 flex items-center gap-2">
            <Info className="w-3 h-3" /> Why it matters
          </h4>
          <p className="text-sm font-medium leading-relaxed text-foreground/90">
            {record.consequences.implication}
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] text-muted-foreground border-t pt-4 border-dashed">
          <div className="space-y-0.5">
            <p className="font-bold uppercase tracking-widest text-muted-foreground/60">Source Evidence</p>
            <div className="flex items-center gap-1.5">
              <span>{record.evidence.source_name}</span>
              {record.evidence.source_url && (
                <a href={record.evidence.source_url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-0.5">
                  View <ExternalLink className="w-2.5 h-2.5" />
                </a>
              )}
            </div>
          </div>
          <div className="md:text-right">
             <p className="font-bold uppercase tracking-widest text-muted-foreground/60">Last Checked</p>
             <p className="font-mono">{record.evidence.last_checked}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
