"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { MessageSquare } from "lucide-react";
import { NAV_LINKS } from "./header";

export function MobileNav({ setOpen }: { setOpen: (open: boolean) => void }) {
  const pathname = usePathname();

  const openChat = () => {
    setOpen(false);
    if (typeof window !== 'undefined' && (window as any).$crisp) {
      (window as any).$crisp.push(['do', 'chat:open']);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#0F1428] text-left">
      <div className="p-6 border-b border-white/5">
        <Link href="/" className="logo text-white" onClick={() => setOpen(false)}>
            Utsavs
            <span className="text-muted">from occasion to impact</span>
        </Link>
      </div>
      <nav className="flex flex-col p-6 space-y-6">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={cn(
              "text-lg font-bold transition-colors",
              (pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))) ? "text-white" : "text-[#9AA1C0] hover:text-white"
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="mt-auto p-6 border-t border-white/5 bg-white/[0.02]">
        <Button onClick={openChat} className="w-full font-bold h-12 rounded-full bg-[#E8A33D] text-[#0F1428] hover:bg-[#F0C888]">
          <MessageSquare className="w-4 h-4 mr-2" /> Start Chat
        </Button>
      </div>
    </div>
  );
}
