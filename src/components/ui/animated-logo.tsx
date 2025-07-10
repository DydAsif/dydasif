
import { cn } from "@/lib/utils";

export function AnimatedLogo({ className }: { className?: string }) {
  return (
    <div className={cn("w-12 h-12 group relative", className)}>
      <svg
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full absolute inset-0"
      >
        <defs>
          <linearGradient id="logo-gradient-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#00ccff', stopOpacity: 1 }} />
          </linearGradient>
          <filter id="smoky-glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Smoky Aura Layer */}
        <text
          fontFamily="Poppins, sans-serif"
          fontSize="50"
          fontWeight="bold"
          textAnchor="middle"
          dominantBaseline="central"
          x="50%"
          y="52%"
          fill="url(#logo-gradient-blue)"
          className="opacity-50 animate-smoke"
          style={{ filter: 'blur(5px)' }}
        >
          ARA
        </text>

        {/* Main Logo Text */}
        <text
          fontFamily="Poppins, sans-serif"
          fontSize="50"
          fontWeight="bold"
          textAnchor="middle"
          dominantBaseline="central"
          x="50%"
          y="52%"
          fill="url(#logo-gradient-blue)"
          stroke="#FFD700"
          strokeWidth="1.5"
          className="group-hover:scale-110 transition-transform duration-300"
        >
          ARA
        </text>
      </svg>
      
      {/* Sparkles */}
      <div className="absolute inset-0 w-full h-full overflow-visible">
        <div className="sparkle one"></div>
        <div className="sparkle two"></div>
        <div className="sparkle three"></div>
        <div className="sparkle four"></div>
      </div>
    </div>
  );
}
