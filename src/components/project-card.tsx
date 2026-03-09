"use client";

import React, { useState } from 'react';
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

const GlowingTag = ({ tag }: { tag: ProjectTag }) => (
  <div
    className="glowing-tag inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
    style={{
      '--tag-glow-color': tag.color,
      '--tag-glow-color-start': `hsl(${tag.color.split(' ')[0]} ${tag.color.split(' ')[1]} / 0.4)`,
      '--tag-glow-color-end': `hsl(${tag.color.split(' ')[0]} ${tag.color.split(' ')[1]} / 0.1)`,
    } as React.CSSProperties}
  >
    <tag.icon className="h-4 w-4" />
    <span>{tag.name}</span>
  </div>
);

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [activeTab, setActiveTab] = useState<TabValue>('problem');
  
  const activeDetail = project[activeTab];

  return (
    <div
      className="project-card-glow"
      data-aos="fade-up"
      data-aos-delay={`${100 * index}`}
      data-aos-duration="800"
    >
      <div className="p-8 grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side: Text Content */}
        <div className="flex flex-col h-full">
          <h3 className="text-3xl font-bold mb-3 gradient-text">{project.title}</h3>
          <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map(tag => (
              <GlowingTag key={tag.name} tag={tag} />
            ))}
          </div>
           <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer" className="case-study-button mt-auto self-start inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-3 font-semibold text-primary border border-primary/30 hover:bg-primary/20">
              View Full Case Study
              <ArrowRight className="arrow-icon h-4 w-4" />
            </a>
        </div>

        {/* Right Side: Image Showcase */}
        <div className="flex flex-col h-full">
          {/* Pill Tab Switcher */}
          <div className="relative pill-tab-switcher flex items-center justify-center p-1 rounded-full mb-4">
            {TABS.map(tab => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={cn(
                  "pill-tab-button relative w-full rounded-full px-4 py-2 text-sm font-medium",
                  activeTab === tab.value ? "active" : ""
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
          <div className="browser-mockup w-full rounded-xl overflow-hidden shadow-2xl shadow-black/30 flex-grow flex flex-col">
            <div className="browser-mockup-header h-9 flex items-center px-4 gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/70"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500/70"></div>
              <div className="h-3 w-3 rounded-full bg-green-500/70"></div>
            </div>
            <div className="relative flex-grow min-h-[250px] md:min-h-[300px] p-4 bg-black/20">
               <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="h-full"
                  >
                     <div className="relative w-full h-full rounded-md overflow-hidden group">
                        <Image
                            src={activeDetail.image}
                            alt={activeDetail.imageAlt}
                            fill
                            className="object-contain object-center group-hover:scale-105 transition-transform duration-300"
                            data-ai-hint={activeDetail.imageHint}
                            unoptimized
                        />
                     </div>
                  </motion.div>
                </AnimatePresence>
            </div>
            <div className="bg-secondary/20 text-center p-3 text-xs text-muted-foreground h-16 flex items-center justify-center">
              <p>{activeDetail.caption}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add a type for ProjectCardProps
type ProjectCardProps = {
  project: Project;
  index: number;
};
