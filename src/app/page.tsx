
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
  const [showIntro, setShowIntro] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // Check if the intro has already run in this session
    if (sessionStorage.getItem('introRun')) {
      setShowIntro(false);
      setContentVisible(true);
    } else {
        // If it's the first time, mark that the intro will run
        sessionStorage.setItem('introRun', 'true');
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setContentVisible(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {showIntro && <Intro onIntroComplete={handleIntroComplete} />}
      
      <div className={`transition-opacity duration-1000 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
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
