"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

// Vanta.js needs to be client-side only
let FOG: any = null;

export function Hero() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
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
    
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section id="home" ref={vantaRef} className="w-full min-h-screen flex items-center justify-center text-center relative overflow-hidden">
      <div className="z-10 text-white px-4 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold drop-shadow-xl font-headline">Ashfakur Rahman Asif</h1>
        <p className="text-xl md:text-2xl mt-4 drop-shadow-lg max-w-2xl">Digital Marketing & Tracking Expert</p>
        <a
          href="/asif-cv.pdf"
          download
          className="mt-8 inline-block bg-[#00ccff] text-black rounded-xl px-6 py-3 font-bold hover:bg-blue-400 transition shadow-lg text-lg"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
