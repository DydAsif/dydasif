"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import type { Project, ProjectTag } from '@/lib/projects-data';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type TabValue = 'problem' | 'solution' | 'result';

const TABS: { value: TabValue; label: string; }[] = [
    { value: 'problem', label: 'Problem' },
    { value: 'solution', label: 'Solution' },
    { value: 'result', label: 'Result' },
];

const tabGradients = {
  problem: 'pill-problem',
  solution: 'pill-solution',
  result: 'pill-result',
};

const tabActiveStyles = {
  problem: 'text-orange-400',
  solution: 'text-blue-400',
  result: 'text-green-400',
};

const GlowingTag = ({ tag }: { tag: ProjectTag }) => (
  <div className="glowing-tag inline-flex items-center gap-1.5">
    <tag.icon className="h-3 w-3" />
    <span>{tag.name}</span>
  </div>
);

export function ProjectCard({ project }: { project: Project }) {
  const [activeTab, setActiveTab] = useState<TabValue>('problem');
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
        setActiveTab(prevTab => {
            const currentIndex = TABS.findIndex(t => t.value === prevTab);
            const nextIndex = (currentIndex + 1) % TABS.length;
            return TABS[nextIndex].value;
        });
    }, 4000);
  };
  
  const stopAutoSlide = () => {
      if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
      }
  };

  useEffect(() => {
    if (!isHovered) {
        startAutoSlide();
    } else {
        stopAutoSlide();
    }
    return () => stopAutoSlide();
  }, [isHovered]);


  const activeDetail = project[activeTab];

  return (
    <div
      className="project-card-glow rounded-2xl p-6 md:p-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Side: Text Content */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold mb-2 gradient-text">{project.title}</h3>
          <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
              <GlowingTag key={tag.name} tag={tag} />
            ))}
          </div>
           <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer" className="case-study-button mt-auto self-start inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
              View Full Case Study
              <ArrowRight className="h-4 w-4" />
            </a>
        </div>

        {/* Right Side: Image Showcase */}
        <div className="flex flex-col">
          {/* Pill Tab Switcher */}
          <div className="relative pill-tab-switcher flex items-center justify-center p-1 rounded-full mb-4">
            {TABS.map(tab => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={cn(
                  "pill-tab-button relative w-full rounded-full px-3 py-1.5 text-xs font-medium",
                   activeTab === tab.value ? tabActiveStyles[tab.value] : ""
                )}
              >
                {tab.label}
              </button>
            ))}
            <motion.div
              layoutId={`pill-tab-indicator-${project.title}`}
              className={cn("pill-tab-indicator", tabGradients[activeTab])}
              style={{
                width: `calc(${100 / TABS.length}% - 4px)`,
                left: `calc(${TABS.findIndex(t => t.value === activeTab) * (100 / TABS.length)}% + 2px)`,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>

          {/* Browser Mockup and Image */}
          <div className="browser-mockup w-full rounded-lg overflow-hidden shadow-lg shadow-black/20 flex-grow">
            <div className="browser-mockup-header h-7 flex items-center px-3 gap-1.5">
              <div className="h-2 w-2 rounded-full bg-red-500"></div>
              <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
            </div>
            <div className="relative aspect-video bg-black/20">
               <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                     <Image
                        src={activeDetail.image}
                        alt={activeDetail.imageAlt}
                        fill
                        className="object-cover"
                        data-ai-hint={activeDetail.imageHint}
                        unoptimized
                    />
                  </motion.div>
                </AnimatePresence>
            </div>
            <div className="bg-secondary/20 text-center p-2 text-[11px] text-muted-foreground">
              <p>{activeDetail.caption}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
