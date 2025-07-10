
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
        <div className="absolute inset-0 bg-background -z-10" />
        
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center md:justify-end animate-slide-in-from-left">
                     <Image
                      src="https://i.ibb.co/yBMzR8nS/upscalemedia-transformed.png"
                      alt="Ashfakur Rahman Asif"
                      width={288}
                      height={288}
                      className="object-cover w-56 h-56 md:w-72 md:h-72 rounded-full shadow-2xl"
                      data-ai-hint="professional man"
                      priority
                    />
                </div>
                <div className="text-center md:text-left animate-fade-in-from-right">
                    <h1 
                        className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent"
                    >
                        Ashfakur Rahman Asif
                    </h1>

                    <p 
                        className="text-lg md:text-2xl font-semibold mt-4 text-primary/90 tracking-wide"
                    >
                        Digital Marketing & Tracking Expert
                    </p>

                    <div 
                        className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <Button asChild size="lg">
                             <a
                                href="https://drive.google.com/file/d/1aJdlKwU12AptlfBOje1PbkERRTt546fO/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Download CV
                              </a>
                        </Button>
                        <Button asChild variant="secondary" size="lg">
                             <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')}>
                                Hire Me
                              </a>
                        </Button>
                    </div>
                </div>
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
