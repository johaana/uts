import { cn } from "@/lib/utils";
import Image from "next/image";

export function UtsavsLogo({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("relative h-[150px] w-[400px] overflow-hidden", className)} {...props}>
      <Image 
        src="https://i.postimg.cc/Gh0W1Kj4/Beige-And-Orange-Traditional-Indian-Fashion-Business-Logo-20250803-235803-0002.png" 
        alt="Utsavs Logo" 
        layout="fill"
        objectFit="contain"
        objectPosition="center"
        priority 
        unoptimized 
      />
    </div>
  );
}
