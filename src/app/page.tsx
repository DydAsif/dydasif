
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
  const [loading, setLoading] = useState(true);
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    const hasIntroRun = sessionStorage.getItem('introRun');
    if (hasIntroRun) {
      setLoading(false);
      setIntroFinished(true);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 4000); 
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAnimationComplete = () => {
    setIntroFinished(true);
    sessionStorage.setItem('introRun', 'true');
  };

  return (
    <>
      <Intro 
        isLoading={loading} 
        onAnimationComplete={handleAnimationComplete} 
      />
      {!loading && (
        <div className={`flex flex-col min-h-screen ${introFinished ? 'animate-fade-in-content' : 'opacity-0'}`}>
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
      )}
    </>
  );
}
