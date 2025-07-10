
"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min';
import { cn } from '@/lib/utils';

interface IntroProps {
  isLoading: boolean;
  onAnimationComplete: () => void;
}

export const Intro: React.FC<IntroProps> = ({ isLoading, onAnimationComplete }) => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

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
          highlightColor: 0x2353a, // Light blue
          midtoneColor: 0x1a237e, // Darker blue
          lowlightColor: 0x0,     // Black
          baseColor: 0x0,         // Black
          blurFactor: 0.6,
          speed: 1.2,
          zoom: 0.6
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    // Ensure we only call the completion callback once the main transition (opacity) is done
    if (e.propertyName === 'opacity' && !isLoading) {
      onAnimationComplete();
    }
  };

  return (
    <div
      ref={vantaRef}
      onTransitionEnd={handleTransitionEnd}
      className={cn(
        'fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-1000 ease-in-out',
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <div
        className={cn(
          'relative transition-all duration-1000 ease-in-out delay-[3000ms]',
          isLoading
            ? 'w-64 h-64 md:w-96 md:h-96 opacity-100 animate-glow'
            : 'w-10 h-10 top-5 left-5 -translate-x-1/2 -translate-y-1/2 absolute opacity-0'
        )}
      >
        <Image
          src="https://i.ibb.co/hZ01W3J/ara-logo-smoke.jpg"
          alt="ARA Logo"
          fill
          priority
          className="object-contain"
          data-ai-hint="logo smoke"
        />
      </div>
    </div>
  );
};
