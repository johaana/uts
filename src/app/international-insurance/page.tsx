import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { InsuranceDashboard } from '@/components/insurance/InsuranceDashboard';

/**
 * @fileOverview International Insurance Page
 * Gating: UTSAVS_INTERNAL_DEBUG controls forensic tools and UAT badge.
 */

export default function InternationalInsurancePage() {
  const isDebug = process.env.UTSAVS_INTERNAL_DEBUG === 'true';

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      
      <main className="relative py-12 md:py-20">
        <div className="container mx-auto px-6">
          <InsuranceDashboard isDebug={isDebug} />

          {/* REGULATORY DISCLOSURE */}
          <div className="pt-8 mt-8 border-t border-white/10 space-y-4 text-left max-w-6xl mx-auto">
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#6E7495]">
              Regulatory Disclosure
            </span>
            <div className="space-y-4 text-[10px] text-[#9AA1C0] leading-relaxed normal-case tracking-normal">
              <div className="space-y-1">
                <p>Assistance services are facilitated by Asego Global Assistance Private Limited.</p>
                <p>Insurance is underwritten by an IRDAI authorised underwriter and is a subject matter of solicitation.</p>
              </div>
              <p>The content expressed in this platform is for information purposes only and it does not accept any liability of any sort unless confirmed by an authorized representative. All Insurance policies are sold under the Corporate Agency of Asego Global Assistance Private Limited bearing IRDAI registration no. Ca0776.</p>
              <div className="h-px bg-white/10 w-full" />
              <p className="italic text-[#9AA1C0] normal-case tracking-normal">Note: Assistance provided by Asego Travel LLP. Student Journey plans meet leading U.S. university and visa requirements for F1, J1, and M1 students. Insurance underwritten by an IRDAI authorised underwriter – ICICI Lombard General Insurance Company Ltd or International Medical Group Inc. (IMG).</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
