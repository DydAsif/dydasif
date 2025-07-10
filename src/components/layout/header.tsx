
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { AnimatedLogo } from '@/components/ui/animated-logo';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#presentation', label: 'Projects & Results' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#social-links', label: 'Socials' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const sections = document.querySelectorAll('section[id]');
    
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.id === 'home') {
                 if (window.scrollY < window.innerHeight / 2) {
                    setActiveSection('#home');
                 }
            } else {
                setActiveSection(`#${entry.target.id}`);
            }
        }
      });
    }, { rootMargin: '-40% 0px -60% 0px', threshold: 0 });


    sections.forEach(section => observer.current?.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(section => observer.current?.unobserve(section));
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(href);
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };


  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
        <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center gap-3">
          <AnimatedLogo />
          <span className="hidden sm:inline text-lg font-bold tracking-tight text-primary sm:text-xl">Ashfakur Rahman Asif</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className={`text-sm font-medium transition-colors ${activeSection === link.href ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
           <a
            href="https://drive.google.com/file/d/1aJdlKwU12AptlfBOje1PbkERRTt546fO/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground rounded-full px-4 py-2 font-bold hover:bg-primary/80 transition shadow-lg text-sm"
          >
            Download CV
          </a>
        </div>
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background">
            <div className="grid gap-6 p-6">
              <a href="#home" className="flex items-center gap-3" onClick={(e) => handleLinkClick(e, '#home')}>
                 <AnimatedLogo />
                 <span className="text-xl font-bold tracking-tight text-primary">Ashfakur Rahman Asif</span>
              </a>
              <nav className="grid gap-4">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className={`text-lg font-medium transition-colors ${activeSection === link.href ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`} onClick={(e) => handleLinkClick(e, link.href)}>
                    {link.label}
                  </a>
                ))}
              </nav>
               <a
                href="https://drive.google.com/file/d/1aJdlKwU12AptlfBOje1PbkERRTt546fO/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center bg-primary text-primary-foreground rounded-full px-6 py-3 font-bold hover:bg-primary/80 transition shadow-lg text-lg"
              >
                Download CV
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
