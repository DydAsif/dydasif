
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
    // This effect runs only once on the client
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

  const showIntro = introState === 'intro';
  const showMainContent = introState === 'main';

  // Render nothing during the 'loading' state to prevent flashes of content
  if (introState === 'loading') {
    return null; 
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {showIntro && <Intro onIntroComplete={handleIntroComplete} />}
      
      <div className={`transition-opacity duration-1000 ${showMainContent ? 'opacity-100' : 'opacity-0'}`}>
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
