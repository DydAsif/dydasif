
"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
  e.preventDefault();
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export function Hero() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
       // Temporarily get color values. In a real app, you'd want a more robust way to get CSS vars
      const primaryColor = 0x4f86f7; // Corresponds to hsl(217.2 91.2% 59.8%)
      const backgroundColor = 0x80c12; // Corresponds to hsl(222 84% 4.9%)

      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: primaryColor,
          backgroundColor: backgroundColor,
          points: 12.00,
          maxDistance: 25.00,
          spacing: 18.00
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section 
      id="home"
      ref={vantaRef}
      className="h-screen flex flex-col items-center justify-center relative text-center z-10 overflow-hidden p-4"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <div 
            className="flex flex-col md:flex-row items-center justify-center gap-6"
            data-aos="fade-right" data-aos-duration="1200"
        >
             <Image
              src="https://i.ibb.co/yBMzR8nS/upscalemedia-transformed.png"
              alt="Ashfakur Rahman Asif"
              width={150}
              height={150}
              className="object-cover w-28 h-28 md:w-36 md:h-36 rounded-full shadow-2xl border-4 border-primary/50"
              data-ai-hint="professional man"
              priority
            />
            <div className="text-center md:text-left">
                <h1 
                    className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent"
                >
                    Ashfakur Rahman Asif
                </h1>

                <p 
                    className="text-lg md:text-2xl font-semibold mt-2 text-primary/90 tracking-wide"
                >
                    Digital Marketing & Tracking Expert
                </p>
            </div>
        </div>
        <div 
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
             data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200"
        >
            <Button asChild size="lg" className="bg-primary text-primary-foreground transition-all duration-300 hover:bg-cyan-400">
                 <a
                    href="https://drive.google.com/file/d/1aJdlKwU12AptlfBOje1PbkERRTt546fO/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download CV
                  </a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="bg-secondary text-secondary-foreground transition-all duration-300 hover:bg-green-500">
                 <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')}>
                    Hire Me
                  </a>
            </Button>
        </div>
      </div>
        
      <div 
          className="absolute bottom-8 text-primary/80 animate-bounce"
      >
          <a href="#about" onClick={(e) => handleScrollTo(e, '#about')}>↓ Scroll Down</a>
      </div>
    </section>
  );
}
