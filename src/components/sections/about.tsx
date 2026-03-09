"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useInView } from 'framer-motion';
import { CheckCircle, BarChart2, Target, Settings, ShoppingCart, BarChart, Server, Megaphone } from 'lucide-react';

const keySkills = [
  { icon: <BarChart2 className="h-5 w-5 text-primary" />, text: 'Facebook & Google Analytics' },
  { icon: <Target className="h-5 w-5 text-primary" />, text: 'Conversion API (CAPI)' },
  { icon: <Settings className="h-5 w-5 text-primary" />, text: 'Google Tag Manager (GTM)' },
  { icon: <CheckCircle className="h-5 w-5 text-primary" />, text: 'Event Deduplication & EMQ' },
  { icon: <ShoppingCart className="h-5 w-5 text-primary" />, text: 'Shopify Tracking' },
  { icon: <BarChart className="h-5 w-5 text-primary" />, text: 'GA4 Setup' },
  { icon: <Server className="h-5 w-5 text-primary" />, text: 'Stape.io / Server-Side Tracking' },
  { icon: <Megaphone className="h-5 w-5 text-primary" />, text: 'Pinterest & LinkedIn Ads' },
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

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 about-bg">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">About Me</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get to know the expert behind the results.
            </p>
          </div>
        </div>
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-3 lg:items-center">
          
          <Card 
            className="bg-card/80 border-border/50 shadow-lg hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:scale-105 transition-all duration-300 rounded-lg flex flex-col"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">Who I Am</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground flex-grow flex flex-col">
              <p>
                I’m a freelance digital marketing and tracking expert dedicated to helping businesses optimize their ad performance across platforms like Facebook, Google, and Shopify.
              </p>
              <p className="flex-grow">
                My deep understanding of analytics and conversion tracking allows me to build data-driven strategies that deliver measurable results and maximize your return on investment.
              </p>
               <div className="border-t border-border/50 pt-4 mt-4 flex justify-around">
                <div className="text-center">
                    <p className="text-3xl font-bold text-white"><Counter to={3} />+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center">
                    <p className="text-3xl font-bold text-white"><Counter to={50} />+</p>
                    <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div 
            className="relative group order-first lg:order-none"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative bg-card p-2 rounded-lg overflow-hidden shadow-2xl border-2 border-primary/20">
                <Image
                  src="https://i.ibb.co/yBgznW1r/Gemini-Generated-Image-fu4jc9fu4jc9fu4j-1.png"
                  alt="Ashfakur Rahman Asif photo"
                  width={500}
                  height={500}
                  className="relative object-cover w-full h-auto rounded-md"
                  data-ai-hint="professional man"
                />
              </div>
          </div>

          <Card 
            className="bg-card/80 border-border/50 shadow-lg hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:scale-105 transition-all duration-300 rounded-lg"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">Key Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {keySkills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3 bg-secondary/50 p-3 rounded-md">
                      {skill.icon}
                      <span className="font-medium text-primary-foreground text-sm">{skill.text}</span>
                    </div>
                  ))}
                </div>
            </CardContent>
          </Card>
          
        </div>
      </div>
    </section>
  );
}
