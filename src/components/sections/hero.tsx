
"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
  e.preventDefault();
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export function Hero() {
  return (
    <section 
      id="home"
      className="h-screen flex flex-col items-center justify-center relative text-center z-10 overflow-hidden p-4"
    >
        <div className="absolute inset-0 bg-background -z-20" />
        {/* Animated Background Particles */}
        <div className="absolute inset-0 z-[-1] overflow-hidden">
            <div className="particle-container">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="particle" style={{
                        '--particle-size': `${Math.random() * 3 + 1}px`,
                        '--animation-duration': `${Math.random() * 10 + 10}s`,
                        '--animation-delay': `${Math.random() * -20}s`,
                        '--x-start': `${Math.random() * 100}vw`,
                        '--y-start': `${Math.random() * 100}vh`,
                        '--x-end': `${Math.random() * 100}vw`,
                        '--y-end': `${Math.random() * 100}vh`,
                    } as React.CSSProperties} />
                ))}
            </div>
        </div>
        
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div 
                className="flex flex-col md:flex-row items-center justify-center gap-6 animate-fade-in-from-right"
                style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
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
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-from-right"
                style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
            >
                <Button asChild size="lg" className="bg-primary hover:bg-cyan-400 text-primary-foreground transition-all duration-300 animate-glow-blue">
                     <a
                        href="https://drive.google.com/file/d/1aJdlKwU12AptlfBOje1PbkERRTt546fO/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download CV
                      </a>
                </Button>
                <Button asChild variant="secondary" size="lg" className="bg-secondary hover:bg-green-500 text-secondary-foreground transition-all duration-300 animate-glow-green">
                     <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')}>
                        Hire Me
                      </a>
                </Button>
            </div>
        </div>
        
        <div 
            className="absolute bottom-8 text-primary/80 animate-bounce"
             style={{ animationDelay: '1.2s' }}
        >
            <a href="#about" onClick={(e) => handleScrollTo(e, '#about')}>↓ Scroll Down</a>
        </div>
    </section>
  );
}

