
import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { AsegoSandboxClient } from '@/components/asego/AsegoSandboxClient';
import { Lock } from 'lucide-react';
import { Card } from '@/components/ui/card';

/**
 * @fileOverview Asego Sandbox Page (Server Component)
 * Gating: Restricted to internal debugging environments via UTSAVS_INTERNAL_DEBUG.
 */
export default function AsegoSandboxPage() {
  const isDebug = process.env.UTSAVS_INTERNAL_DEBUG === 'true';

  if (!isDebug) {
    return (
      <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center p-6">
          <Card className="w-full max-w-md bg-[#171D3A] border-white/10 shadow-2xl rounded-[32px] overflow-hidden">
            <div className="p-10 space-y-6 text-center">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto border border-white/10">
                <Lock className="w-8 h-8 text-[#E8A33D]" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-serif font-bold text-white">Access Restricted</h2>
                <p className="text-sm text-[#9AA1C0]">This forensic tool is restricted to internal debugging environments.</p>
              </div>
            </div>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return <AsegoSandboxClient />;
}
