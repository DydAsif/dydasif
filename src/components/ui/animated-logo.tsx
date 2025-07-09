import { cn } from "@/lib/utils";

export function AnimatedLogo({ className }: { className?: string }) {
  return (
    <div className={cn("w-10 h-10", className)}>
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))' }} />
            <stop offset="100%" style={{ stopColor: 'hsl(192, 100%, 70%)' }} />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="none" stroke="hsl(var(--border))" strokeWidth="3" />
        <g className="animate-logo-spin origin-center" style={{transformBox: "fill-box"}}>
          <g
            transform="translate(50, 52)"
            fontFamily="Poppins, sans-serif"
            fontSize="40"
            fontWeight="bold"
            fill="url(#logo-gradient)"
            textAnchor="middle"
            dominantBaseline="central"
          >
            <text>ARA</text>
          </g>
        </g>
      </svg>
    </div>
  );
}
