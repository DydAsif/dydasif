import { cn } from "@/lib/utils";

export function AnimatedLogo({ className }: { className?: string }) {
  return (
    <div className={cn("w-10 h-10 group", className)}>
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
           <filter id="glow">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g 
          className="transition-transform duration-300 ease-in-out group-hover:scale-110" 
          style={{transformBox: "fill-box", origin: "center"}}
        >
          <circle 
            cx="50" 
            cy="50" 
            r="45" 
            fill="none" 
            stroke="hsl(var(--border))" 
            strokeWidth="3" 
          />
          <g
            fontFamily="Poppins, sans-serif"
            fontSize="40"
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="central"
            transform="translate(50, 52)"
            className="transition-all duration-300 ease-in-out group-hover:[filter:url(#glow)]"
          >
            <text fill="url(#logo-gradient)" className="animate-shimmer bg-[length:200%_100%]">
              ARA
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}
