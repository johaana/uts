import { cn } from "@/lib/utils";

export function UtsavsLogo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={cn("h-8 w-auto", className)}
      {...props}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "hsl(var(--accent))", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        fill="url(#logoGradient)"
        d="M62.5,23.2c-5.5-3.3-12-5-18.9-5c-6.9,0-13.4,1.7-18.9,5C12,28.8,5,42.5,5,50c0,7.5,7,11.2,21.7,16.8 c5.5,3.3,12,5,18.9,5c6.9,0,13.4-1.7,18.9-5C88,61.2,95,57.5,95,50C95,42.5,88,28.8,62.5,23.2z M50,68.8 c-10.4,0-19.7-4.2-25.5-11.2c-1-1.2-1.8-2.5-2.4-3.8c-0.3-0.7-0.5-1.3-0.5-1.3c0,0,3,1.3,8.3,1.3c11.8,0,21.3-9.5,21.3-21.3 c0-5.3,1.3-8.3,1.3-8.3c0,0,0.6,0.2,1.3,0.5c1.3,0.6,2.6,1.4,3.8,2.4C64.5,34,68.8,41.9,68.8,50c0,10.4-4.2,19.7-11.2,25.5 C55.1,67.8,52.6,68.8,50,68.8z"
      />
       <path 
        fill="url(#logoGradient)"
        d="M50,30c-11,0-20,9-20,20s9,20,20,20s20-9,20-20S61,30,50,30z M50,62c-6.6,0-12-5.4-12-12s5.4-12,12-12 s12,5.4,12,12S56.6,62,50,62z"
       />
    </svg>
  );
}
