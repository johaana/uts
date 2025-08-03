import { cn } from "@/lib/utils";
import Image from "next/image";

export function UtsavsLogo({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center justify-center", className)} {...props}>
      <Image src="https://i.postimg.cc/Gh0W1Kj4/Beige-And-Orange-Traditional-Indian-Fashion-Business-Logo-20250803-235803-0002.png" alt="Utsavopedia Logo" width={180} height={45} priority unoptimized />
    </div>
  );
}
