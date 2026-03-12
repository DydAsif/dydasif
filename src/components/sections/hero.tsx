"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useInView } from 'framer-motion';
import { TrendingUp, CheckCircle, UserCheck } from 'lucide-react';

const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
  e.preventDefault();
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const subtitles = [
    'Digital Marketing Expert', 
    'Facebook Pixel & CAPI Specialist', 
    'GA4 & Google Ads Expert', 
    'Tracking & Analytics Pro'
];

function Counter({ to, duration = 2 }: { to: number; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = to;
            if (start === end) return;

            let startTime: number | null = null;
            const step = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
                setCount(Math.floor(progress * end));
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
    }, [isInView, to, duration]);

    return <span ref={ref}>{count}</span>;
}

const StatItem = ({ to, text, icon, suffix = '+' }: { to: number; text: string; icon: React.ReactNode, suffix?: string }) => (
    <div className="flex flex-col items-center gap-2 text-center">
        <div className="text-primary">{icon}</div>
        <p className="text-3xl md:text-4xl font-bold text-white">
            <Counter to={to} />{suffix}
        </p>
        <p className="text-sm text-muted-foreground">{text}</p>
    </div>
);


export function Hero() {
  const [index, setIndex] = useState(0);
  const [currentSubtitle, setCurrentSubtitle] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);
  const [particles, setParticles] = useState<React.JSX.Element[]>([]);
  
  useEffect(() => {
    const handleTyping = () => {
      const fullText = subtitles[index];
      if (isDeleting) {
        setCurrentSubtitle(fullText.substring(0, currentSubtitle.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentSubtitle(fullText.substring(0, currentSubtitle.length + 1));
        setTypingSpeed(120);
      }

      if (!isDeleting && currentSubtitle === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentSubtitle === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % subtitles.length);
      }
    };
    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [currentSubtitle, isDeleting, index, typingSpeed]);

  useEffect(() => {
    const generateParticles = () => {
      const particleArray = [...Array(100)].map((_, i) => {
        const isStar = Math.random() > 0.7; // 30% are stars
        return (
          <div
            key={i}
            className={isStar ? "particle particle-star" : "particle"}
            style={
              {
                '--x': `${Math.random() * 100}vw`,
                '--y': `${Math.random() * 100}vh`,
                '--d': `${Math.random() * 15 + 20}s`, // Slower movement: 20s to 35s
                '--delay': `${Math.random() * -35}s`,
                '--s': `${isStar ? (Math.random() * 0.5 + 2) : (Math.random() * 0.5 + 1.5)}px`,
              } as React.CSSProperties
            }
          ></div>
        );
      });
      setParticles(particleArray);
    };
    generateParticles();
  }, []);

  return (
    <section 
      id="home"
      className="h-screen min-h-[800px] w-full flex flex-col justify-center relative text-center overflow-hidden hero-professional-bg"
    >
       <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
            {particles}
        </div>
       <div className="floating-element-container">
        <div className="floating-element floating-element-1"></div>
        <div className="floating-element floating-element-2"></div>
        <div className="floating-element floating-element-3"></div>
      </div>
      
      <div className="relative z-[3] flex flex-col items-center justify-center w-full px-4">
        <div data-aos="zoom-in" data-aos-duration="800" className="relative mb-6">
            <div className="absolute -inset-2 rounded-full glowing-ring-animation"></div>
            <Image
              src="https://i.ibb.co/P3pHX2D/last.png"
              alt="Ashfakur Rahman Asif"
              width={200}
              height={200}
              className="relative object-cover w-48 h-48 md:w-52 md:h-52 rounded-full shadow-2xl border-4 border-primary/50"
              style={{ objectPosition: '50% 20%' }}
              data-ai-hint="professional man"
              priority
            />
        </div>
        
        <h1 
            data-aos="fade-up" data-aos-duration="800" data-aos-delay="100"
            className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_hsl(var(--primary)/0.5)]"
        >
            Ashfakur Rahman Asif
        </h1>
        <div 
          data-aos="fade-up" data-aos-duration="800" data-aos-delay="150"
          className="mt-2 h-0.5 w-48 bg-primary/70 glow-underline"
        ></div>

        <p 
            data-aos="fade-up" data-aos-duration="800" data-aos-delay="200"
            className="text-lg md:text-2xl font-semibold mt-4 text-primary-foreground/90 tracking-wide min-h-[3rem]"
        >
            <span>{currentSubtitle}</span>
            <span className="border-r-2 border-primary animate-ping"></span>
        </p>
        
        <div 
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
             data-aos="fade-up" data-aos-duration="800" data-aos-delay="300"
        >
            <Button asChild size="lg" className="h-14 px-10 text-lg font-bold transition-transform transform hover:scale-105 shadow-lg shadow-primary/20 hover:shadow-primary/40">
                 <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')}>
                    Let's Talk
                  </a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="h-14 px-10 text-lg font-bold transition-transform transform hover:scale-105 shadow-lg shadow-black/20 hover:shadow-black/40">
                 <a href="https://drive.google.com/file/d/1MJ189oOYLJDI2-8HdXNnK_CTUO7fL7ze/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    Download CV
                  </a>
            </Button>
        </div>

        <div className="mt-16 grid w-full max-w-2xl mx-auto grid-cols-3 gap-8 md:gap-16" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
            <StatItem to={50} text="Projects Completed" icon={<CheckCircle className="w-8 h-8"/>} />
            <StatItem to={3} text="Years Experience" icon={<TrendingUp className="w-8 h-8"/>} />
            <StatItem to={100} text="Client Satisfaction" icon={<UserCheck className="w-8 h-8"/>} suffix="%" />
        </div>
        
        <div 
          className="mt-12 text-primary/80 animate-bounce"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="500"
          data-aos-anchor-placement="top-bottom"
        >
          <a href="#about" onClick={(e) => handleScrollTo(e, '#about')}>↓ Scroll Down</a>
        </div>
      </div>
    </section>
  );
}
