
"use client";
import React, { useState, useEffect } from 'react';
import { Intro } from '@/components/layout/intro';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Services } from '@/components/sections/services';
import { ProjectPresentation } from '@/components/sections/project-presentation';
import { Certifications } from '@/components/sections/certifications';
import { Socials } from '@/components/sections/socials';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  const [introState, setIntroState] = useState<'loading' | 'intro' | 'main'>('loading');

  useEffect(() => {
    if (sessionStorage.getItem('introShown')) {
      setIntroState('main');
    } else {
      setIntroState('intro');
    }
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem('introShown', 'true');
    setIntroState('main');
  };

  if (introState === 'loading') {
    return null; // Render nothing until we've checked session storage
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {introState === 'intro' && <Intro onIntroComplete={handleIntroComplete} />}
      
      <div className={`transition-opacity duration-1000 ${introState === 'main' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <Header />
        <main className="flex-1">
          <Hero />
          <About />
          <Services />
          <ProjectPresentation />
          <Certifications />
          <Socials />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
