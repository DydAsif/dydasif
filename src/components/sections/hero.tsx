"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Button } from "@/components/ui/button";

// vanta.js is a client-side only library, so we can't import it at the top level.

export function Hero() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    let vantaInitializer: any = null;
    if (typeof window !== "undefined") {
      const vantaModule = require("vanta/dist/vanta.net.min");
      // Handle both CJS and ESM module formats that can be returned by require
      vantaInitializer = vantaModule.default || vantaModule;
    }

    if (!vantaEffect && vantaInitializer) {
      setVantaEffect(
        vantaInitializer({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 400.0,
          minWidth: 200.0,
          scale: 1.0,
          color: 0x00b894, // Theme accent color
          backgroundColor: 0x111827, // Theme primary color
          spacing: 20.0,
        })
      );
    }
    
    // Cleanup function to destroy the effect when the component unmounts
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]); // Rerun the effect if vantaEffect changes (e.g., gets destroyed)

  return (
    <section id="home" ref={vantaRef} className="w-full h-screen flex items-center justify-center text-center relative">
      <div className="z-10 text-primary-foreground p-4">
        <h1 className="text-4xl sm:text-5xl font-bold font-headline">Ashfakur Rahman Asif</h1>
        <p className="text-lg sm:text-xl mt-4 text-muted-foreground/90">Digital Marketing & Conversion Tracking Expert</p>
        <Button asChild size="lg" className="mt-6">
          <a
            href="https://drive.google.com/file/d/1aJdlKwU12AptlfBOje1PbkERRTt546fO/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </Button>
      </div>
    </section>
  );
}
