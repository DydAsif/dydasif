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
  const [contentVisible, setContentVisible] = useState(false);

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
    
    // Timer to fade in subtitle and button after name animation
    // Animation delay is 0.15s per letter.
    const timer = setTimeout(() => {
        setContentVisible(true);
    }, name.length * 150 + 500); 

    return () => {
      if (vantaEffect) vantaEffect.destroy();
      clearTimeout(timer);
    };
  }, []); // Run only once on mount

  return (
    <section id="home" ref={vantaRef} className="w-full min-h-screen flex items-center justify-center text-center relative overflow-hidden">
      <audio src="https://www.soundjay.com/ambience/sounds/thunderstorm-1.mp3" autoPlay loop className="sr-only"></audio>
      <div className="z-10 text-white px-4 flex flex-col items-center [perspective:1000px]">
        <div className="flex flex-wrap justify-center">
            {name.split("").map((char, index) => (
                <span
                    key={index}
                    className={cn(
                        "inline-block text-5xl md:text-7xl font-bold font-headline opacity-0 animate-fly-in-3d hover:animate-hover-pulse",
                        "text-primary"
                    )}
                    style={{
                        transform: 'translateZ(-800px) rotateX(90deg)',
                        animationDelay: `${index * 0.15}s`,
                        textShadow: '0 0 10px hsl(var(--primary))',
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </div>
        
        <p 
          className={cn(
            "text-xl md:text-2xl mt-8 drop-shadow-lg max-w-2xl opacity-0 transition-opacity duration-1000",
            contentVisible && "opacity-100"
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
            contentVisible && "opacity-100"
          )}
          style={{ transitionDelay: contentVisible ? '200ms' : '0ms' }}
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
