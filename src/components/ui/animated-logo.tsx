import { cn } from "@/lib/utils";

export function AnimatedLogo({ className }: { className?: string }) {
  return (
    <div className={cn("w-10 h-10", className)} style={{ perspective: '1000px' }}>
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full animate-logo-spin"
      >
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))' }} />
            <stop offset="100%" style={{ stopColor: 'hsl(192, 100%, 70%)' }} />
          </linearGradient>
        </defs>
        <g
          fontFamily="Poppins, sans-serif"
          fontSize="48"
          fontWeight="bold"
          fill="url(#logo-gradient)"
          textAnchor="middle"
          dominantBaseline="central"
          transform="translate(50, 52)"
        >
          <text>ARA</text>
        </g>
      </svg>
    </div>
  );
}
