
"use client";

import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface IntroProps {
  onIntroComplete: () => void;
}

export const Intro: React.FC<IntroProps> = ({ onIntroComplete }) => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x2353a,
          midtoneColor: 0x1a237e,
          lowlightColor: 0x0,
          baseColor: 0x0,
          blurFactor: 0.6,
          speed: 1.2,
          zoom: 0.6
        })
      );
    }

    const timer = setTimeout(() => {
      setFadingOut(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  
  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.propertyName === 'opacity' && fadingOut) {
      onIntroComplete();
    }
  };

  return (
    <div
      ref={vantaRef}
      onTransitionEnd={handleTransitionEnd}
      className={cn(
        'fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-1000 ease-in-out',
        fadingOut ? 'opacity-0' : 'opacity-100'
      )}
    >
      <div
        className={cn(
          'relative w-64 h-64 md:w-96 md:h-96 opacity-100 animate-glow'
        )}
      >
        <img
            src="https://i.ibb.co/hZ01W3J/ara-logo-smoke.jpg"
            alt="ARA Smoky Logo"
            className="w-full h-full object-contain"
          />
      </div>
    </div>
  );
};
