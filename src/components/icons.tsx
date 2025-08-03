import { cn } from "@/lib/utils";

export function UtsavsLogo({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("font-headline font-bold text-2xl tracking-tight", className)} {...props}>
      Utsavs
    </div>
  );
}
