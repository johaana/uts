import React from "react";

export function PageLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container mx-auto px-4 py-8 md:py-12">
            {children}
        </div>
    )
}
