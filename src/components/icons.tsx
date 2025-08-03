import { cn } from "@/lib/utils";
import Image from "next/image";

export function UtsavsLogo({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("relative h-[45px] w-[180px] overflow-hidden", className)} {...props}>
      <Image 
        src="https://i.postimg.cc/Gh0W1Kj4/Beige-And-Orange-Traditional-Indian-Fashion-Business-Logo-20250803-235803-0002.png" 
        alt="Utsavopedia Logo" 
        layout="fill"
        objectFit="contain"
        objectPosition="center"
        priority 
        unoptimized 
      />
    </div>
  );
}
