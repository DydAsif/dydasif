"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// vanta.js is a client-side only library, so we can't import it at the top level.

export function Hero() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    let vantaInitializer: any = null;
    if (typeof window !== "undefined") {
      const vantaModule = require("vanta/dist/vanta.fog.min");
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
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x3c82f6,
          midtoneColor: 0x00b894,
          lowlightColor: 0x111827,
          baseColor: 0x111827,
          blurFactor: 0.60,
          speed: 1.20,
          zoom: 0.80,
        })
      );
    }
    
    // Cleanup function to destroy the effect when the component unmounts
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Vanta background will attach here */}
      <div ref={vantaRef} className="absolute top-0 left-0 w-full h-full z-0" />

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-20">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-24 items-center">
                <div className="text-primary-foreground space-y-6 text-center lg:text-left">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-headline">Ashfakur Rahman Asif</h1>
                    <p className="text-lg sm:text-xl text-muted-foreground/90 max-w-xl mx-auto lg:mx-0">Digital Marketing & Conversion Tracking Expert</p>
                    <Button asChild size="lg">
                      <a
                          href="https://drive.google.com/file/d/1aJdlKwU12AptlfBOje1PbkERRTt546fO/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          Download CV
                      </a>
                    </Button>
                </div>
                <div className="relative flex justify-center items-center">
                    <Image
                        src="https://i.ibb.co/yBMzR8nS/upscalemedia-transformed.png"
                        alt="Ashfakur Rahman Asif"
                        width={450}
                        height={450}
                        className="mx-auto rounded-full object-cover animate-float"
                        data-ai-hint="man portrait"
                        priority
                    />
                </div>
            </div>
      </div>
    </section>
  );
}
