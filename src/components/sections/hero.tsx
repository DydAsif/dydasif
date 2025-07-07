"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Button } from "@/components/ui/button";

export function Hero() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    let FOG: any = null;
    if (typeof window !== "undefined") {
      FOG = require("vanta/dist/vanta.fog.min");
    }

    if (!vantaEffect && FOG) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x00ccff,     // lightning/electric blue
          midtoneColor: 0x003355,       // smoky blue
          lowlightColor: 0x000000,      // dark for contrast
          baseColor: 0x001f2f,          // background color
          blurFactor: 0.7,
          speed: 1.2,
          zoom: 1.2
        })
      );
    }
    
    // Cleanup function to destroy the effect when the component unmounts
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section id="home" ref={vantaRef} className="w-full min-h-screen flex items-center justify-center text-center relative overflow-hidden">
      <div className="z-10 text-white px-4">
        <h1 className="text-5xl font-bold drop-shadow-xl font-headline">Ashfakur Rahman Asif</h1>
        <p className="text-xl mt-4 drop-shadow-lg">Digital Marketing & Tracking Expert</p>
        <Button asChild size="lg" className="mt-8 bg-blue-600 hover:bg-blue-700 text-white shadow-md">
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
