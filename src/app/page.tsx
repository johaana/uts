'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24 md:py-48 px-4">
      <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary max-w-4xl">Utsavs: Your Definitive Guide to Indian Festivals</h1>
      <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
        Your essential guide to the dates, rituals, and stories behind India's vibrant celebrations. Discover authentic recipes, explore cultural traditions, and plan your year with our comprehensive festival calendar.
      </p>
      <div className="mt-10">
        <Link href="/festivals">
          <Button size="lg">
            Explore All Festivals <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
