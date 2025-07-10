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
        
        <Image
          src="https://i.ibb.co/yBMzR8nS/upscalemedia-transformed.png"
          alt="Ashfakur Rahman Asif"
          width={160}
          height={160}
          className="rounded-full object-cover w-40 h-40 shadow-2xl relative z-10 animate-image-fade-in"
          data-ai-hint="professional man"
          priority
          style={{ animationFillMode: 'forwards' }}
        />

        <h1 
            className="text-4xl md:text-6xl font-extrabold tracking-tight mt-6 text-foreground/80 relative z-0 animate-name-fade-in"
            style={{ animationFillMode: 'forwards', animationDelay: '0.5s' }}
        >
            Ashfakur Rahman Asif
        </h1>

        <p 
            className="text-lg md:text-2xl font-semibold mt-4 text-primary/90 tracking-wide"
            data-aos="fade-up" data-aos-delay="1200"
        >
            Digital Marketing & Tracking Expert
        </p>

        <div 
            className="mt-8 flex flex-col sm:flex-row gap-4"
            data-aos="fade-up" data-aos-delay="1400"
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
        
        <div 
            className="absolute bottom-8 text-primary/80 animate-bounce"
            data-aos="fade-up" data-aos-delay="1600"
        >
            <a href="#about" onClick={(e) => handleScrollTo(e, '#about')}>↓ Scroll Down</a>
        </div>
    </section>
  );
}
