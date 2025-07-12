
"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type IntroProps = {
  onIntroComplete: () => void;
};

export function Intro({ onIntroComplete }: IntroProps) {
  const [fadeOut, setFadeOut] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 4000); 

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (fadeOut) {
      const el = containerRef.current;
      const handleTransitionEnd = (event: TransitionEvent) => {
        if (event.propertyName === 'opacity' && el && el.style.opacity === '0') {
            onIntroComplete();
        }
      };
      el?.addEventListener('transitionend', handleTransitionEnd);
      return () => {
        el?.removeEventListener('transitionend', handleTransitionEnd);
      };
    }
  }, [fadeOut, onIntroComplete]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-[100] bg-black transition-opacity duration-1000 ease-out ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-[200px] h-[200px] rounded-full overflow-hidden animate-pulse">
            <Image src="https://i.ibb.co/yBMzR8nS/upscalemedia-transformed.png" alt="Loading Logo" width={200} height={200} />
        </div>
      </div>
    </div>
  );
}
