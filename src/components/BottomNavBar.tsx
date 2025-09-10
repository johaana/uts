
'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Calendar, Utensils, BookOpen, Rss } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/calendar", label: "Calendar", icon: Calendar },
    { href: "/recipes", label: "Recipes", icon: Utensils },
    { href: "/blog", label: "Blog", icon: Rss },
];

export function BottomNavBar() {
    const pathname = usePathname();

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-background/95 backdrop-blur-sm border-t z-50">
            <nav className="grid h-full grid-cols-4">
                {navLinks.map((link) => {
                    const isActive = (pathname === link.href) || (link.href !== "/" && pathname.startsWith(link.href));
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "flex flex-col items-center justify-center gap-1 transition-colors",
                                isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                            )}
                        >
                            <link.icon className="h-5 w-5" />
                            <span className="text-xs font-medium">{link.label}</span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
