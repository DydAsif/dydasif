"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Button } from "@/components/ui/button";

export function Hero() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    let GLOBE: any = null;
    if (typeof window !== "undefined") {
      GLOBE = require("vanta/dist/vanta.globe.min");
    }

    if (!vantaEffect && GLOBE) {
      const vantaInitializer = GLOBE.default || GLOBE;
      setVantaEffect(
        vantaInitializer({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x00b894,      // Use accent color for Earth's land
          backgroundColor: 0x0, // Transparent background to show galaxy
        })
      );
    }
    
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section id="home" ref={vantaRef} className="w-full min-h-screen flex items-center justify-center text-center relative overflow-hidden">
      <div className="z-10 text-white px-4">
        <h1 className="text-5xl font-bold drop-shadow-xl font-headline">Ashfakur Rahman Asif</h1>
        <p className="text-xl mt-4 drop-shadow-lg">Digital Marketing & Tracking Expert</p>
        <Button asChild size="lg" className="mt-8 bg-cta hover:bg-cta/90 text-cta-foreground shadow-md">
          <a
            href="/asif-cv.pdf"
            download
          >
            Download CV
          </a>
        </Button>
      </div>
    </section>
  );
}
