
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
  const [introState, setIntroState] = useState<'intro' | 'main'>('intro');

  useEffect(() => {
    // This effect runs only once on the client
    if (sessionStorage.getItem('introShown')) {
      setIntroState('main');
    } else {
      // Show intro on first visit of the session
      const timer = setTimeout(() => {
        sessionStorage.setItem('introShown', 'true');
        setIntroState('main');
      }, 4000); // Duration of the intro
      return () => clearTimeout(timer);
    }
  }, []);


  const showIntro = introState === 'intro';

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {showIntro && <Intro onIntroComplete={() => setIntroState('main')} />}
      
      <div className={`transition-opacity duration-1000 ${!showIntro ? 'opacity-100' : 'opacity-0'}`}>
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
