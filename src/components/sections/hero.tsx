"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { cn } from "@/lib/utils";

// Vanta.js needs to be client-side only
let FOG: any = null;

export function Hero() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const name = "Ashfakur Rahman Asif";

  const [activeLetters, setActiveLetters] = useState<boolean[]>(new Array(name.length).fill(false));
  const [subtitleVisible, setSubtitleVisible] = useState(false);

  useEffect(() => {
    // Vanta.js initialization
    if (typeof window !== "undefined") {
      FOG = require("vanta/dist/vanta.fog.min");
    }

    if (!vantaEffect && FOG) {
      const vantaInitializer = FOG.default || FOG;
      setVantaEffect(
        vantaInitializer({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x00ccff,
          midtoneColor: 0x003355,
          lowlightColor: 0x000000,
          baseColor: 0x001f2f,
          blurFactor: 0.7,
          speed: 1.2,
          zoom: 0.8
        })
      );
    }

    // Animation logic
    const timeouts: NodeJS.Timeout[] = [];
    
    name.split('').forEach((_, index) => {
        timeouts.push(setTimeout(() => {
            setActiveLetters(prev => {
                const newActive = [...prev];
                newActive[index] = true;
                return newActive;
            });
        }, index * 150));
    });

    timeouts.push(setTimeout(() => {
        setSubtitleVisible(true);
    }, name.length * 150 + 500));
    
    return () => {
      if (vantaEffect) vantaEffect.destroy();
      timeouts.forEach(clearTimeout);
    };
  }, []); // Run only once on mount

  return (
    <section id="home" ref={vantaRef} className="w-full min-h-screen flex items-center justify-center text-center relative overflow-hidden">
      <div className="z-10 text-white px-4 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold drop-shadow-xl font-headline flex flex-wrap justify-center [perspective:1000px] group">
           {name.split("").map((char, index) => (
            <span
              key={index}
              className={cn(
                'transition-transform duration-1000 ease-out group-hover:animate-crash',
                activeLetters[index] 
                  ? 'opacity-100 [transform:scale(1)_rotateY(720deg)] animate-flash animate-glowPulse' 
                  : 'opacity-0 [transform:scale(5)_rotateY(0deg)]'
              )}
              style={{
                textShadow: activeLetters[index] ? '0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary))' : 'none',
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <p 
          className={cn(
            "text-xl md:text-2xl mt-4 drop-shadow-lg max-w-2xl opacity-0 transition-opacity duration-1000",
            subtitleVisible && "opacity-100"
          )}
        >
          Digital Marketing & Tracking Expert
        </p>
        <a
          href="https://drive.google.com/file/d/1aJdlKwU12AptlfBOje1PbkERRTt546fO/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "mt-8 inline-block bg-[#00ccff] text-black rounded-xl px-6 py-3 font-bold hover:bg-blue-400 transition shadow-lg text-lg opacity-0 transition-opacity duration-1000",
            subtitleVisible && "opacity-100"
          )}
          style={{ transitionDelay: subtitleVisible ? '200ms' : '0ms' }}
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
