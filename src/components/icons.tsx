
import { cn } from "@/lib/utils";

export const UtsavsLogo = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 550 100"
    className={cn("w-auto", className)}
    {...props}
  >
    <defs>
      <style>{`.cls-1{font-family:'Playfair Display', serif;font-size:80px;font-weight:700;}.cls-2{letter-spacing:-.02em;}.cls-3{letter-spacing:0em;}`}</style>
    </defs>
    <text className="cls-1" transform="translate(0 70)">
      <tspan x={0} y={0}>
        {"Utsa"}
      </tspan>
      <tspan className="cls-2" x={205} y={0}>
        {"v"}
      </tspan>
      <tspan className="cls-3" x={245} y={0}>
        {"s"}
      </tspan>
    </text>
  </svg>
);
