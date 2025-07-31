import { cn } from "@/lib/utils";

export function UtsavopediaLogo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
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
        d="M50,5 C74.85,5 95,25.15 95,50 C95,74.85 74.85,95 50,95 C25.15,95 5,74.85 5,50 C5,25.15 25.15,5 50,5 Z M50,15 C69.33,15 85,30.67 85,50 C85,69.33 69.33,85 50,85 C30.67,85 15,69.33 15,50 C15,30.67 30.67,15 50,15 Z"
      />
      <path
        fill="url(#logoGradient)"
        d="M50,22.5 C65.2,22.5 77.5,34.8 77.5,50 C77.5,65.2 65.2,77.5 50,77.5 C34.8,77.5 22.5,65.2 22.5,50 C22.5,34.8 34.8,22.5 50,22.5 Z M50,30 L50,30 C45.58,30 42,33.58 42,38 C42,42.42 45.58,46 50,46 C54.42,46 58,42.42 58,38 C58,33.58 54.42,30 50,30 Z M38,42 C33.58,42 30,45.58 30,50 C30,54.42 33.58,58 38,58 C42.42,58 46,54.42 46,50 C46,45.58 42.42,42 38,42 Z M62,42 C57.58,42 54,45.58 54,50 C54,54.42 57.58,58 62,58 C66.42,58 70,54.42 70,50 C70,45.58 66.42,42 62,42 Z M50,54 C45.58,54 42,57.58 42,62 C42,66.42 45.58,70 50,70 C54.42,70 58,66.42 58,62 C58,57.58 54.42,54 50,54 Z"
      />
    </svg>
  );
}
