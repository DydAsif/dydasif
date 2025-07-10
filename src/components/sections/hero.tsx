
"use client";

import React from 'react';
import Image from 'next/image';

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
      className="h-screen flex flex-col items-center justify-center relative text-center z-10 overflow-hidden"
    >
      <div className="w-full h-full absolute top-0 left-0 bg-background -z-10" />

      <div
        id="profileImageContainer"
        className="absolute opacity-0 z-10"
        style={{
          animation: 'image-zoom-in 1s ease-out 0.5s forwards, image-slide-right 1.2s ease-in-out 2s forwards',
        }}
      >
        <Image
          src="https://i.ibb.co/yBMzR8nS/upscalemedia-transformed.png"
          alt="Ashfakur Rahman Asif"
          width={176}
          height={176}
          className="rounded-full object-cover w-32 h-32 md:w-44 md:h-44 border-4 border-white shadow-2xl"
          data-ai-hint="professional man"
          priority
        />
      </div>

      <h1 id="nameText"
        className="text-3xl md:text-5xl font-extrabold tracking-wider absolute opacity-0 z-0 text-white"
        style={{
          animation: 'name-reveal-behind 1.4s ease-out 1.2s forwards'
        }}
      >
        Ashfakur Rahman Asif
      </h1>

      <p id="professionText"
        className="text-lg md:text-2xl font-semibold mt-4 opacity-0 absolute top-2/3 text-primary/80 tracking-wide"
        style={{
          animation: 'profession-glow 1s ease-out 3.2s forwards'
        }}
      >
        Digital Marketing & Tracking Expert
      </p>

      <div id="buttonGroup"
        className="opacity-0 mt-4 absolute top-[75%] flex gap-4 z-10"
        style={{
          animation: 'button-fade-up 1s ease-out 4.2s forwards'
        }}
      >
        <a
          href="https://drive.google.com/file/d/1aJdlKwU12AptlfBOje1PbkERRTt546fO/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold hover:bg-primary/80 transition duration-300 shadow-md"
        >
          Download CV
        </a>
        <a
          href="#contact"
          onClick={(e) => handleScrollTo(e, '#contact')}
          className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-bold hover:bg-secondary/80 transition duration-300 shadow-md"
        >
          Hire Me
        </a>
      </div>

      <div 
        className="absolute bottom-8 animate-bounce text-primary/80 opacity-0"
         style={{
          animation: 'button-fade-up 1s ease-out 4.2s forwards'
        }}
      >
        <a href="#about" onClick={(e) => handleScrollTo(e, '#about')}>↓ Scroll Down</a>
      </div>
    </section>
  );
}
