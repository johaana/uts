
import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { TempTrackerClient } from '@/components/labs/TempTrackerClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: 'noindex, nofollow'
};

export default function TempTrackerLabPage() {
  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans">
      <Header />
      <main className="pb-40">
        <TempTrackerClient />
      </main>
      <Footer />
    </div>
  );
}
