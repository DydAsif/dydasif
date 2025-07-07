"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
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
    
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    }, { rootMargin: '-30% 0px -70% 0px' });

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.current?.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(section => observer.current?.unobserve(section));
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const href = e.currentTarget.getAttribute('href');
    
    // Only prevent default and scroll for internal hash links
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // For other links (like download), the default browser action will proceed.

    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };


  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <a href="#home" onClick={handleLinkClick} className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight text-primary sm:text-xl">Ashfakur Rahman Asif</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={handleLinkClick} className={`text-sm font-medium transition-colors ${activeSection === link.href ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
           <a
            href="https://drive.google.com/file/d/1aJdlKwU12AptlfBOje1PbkERRTt546fO/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#00ccff] text-black rounded-xl px-4 py-2 font-bold hover:bg-blue-400 transition shadow-lg text-sm"
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
              <a href="#home" className="flex items-center gap-2" onClick={handleLinkClick}>
                 <span className="text-xl font-bold tracking-tight text-primary">Ashfakur Rahman Asif</span>
              </a>
              <nav className="grid gap-4">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className={`text-lg font-medium transition-colors ${activeSection === link.href ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`} onClick={handleLinkClick}>
                    {link.label}
                  </a>
                ))}
              </nav>
               <a
                href="https://drive.google.com/file/d/1aJdlKwU12AptlfBOje1PbkERRTt546fO/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center bg-[#00ccff] text-black rounded-xl px-6 py-3 font-bold hover:bg-blue-400 transition shadow-lg text-lg"
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
