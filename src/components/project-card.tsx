"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import type { Project, ProjectTag } from '@/lib/projects-data';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ZoomIn, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ImageLightbox } from '@/components/image-lightbox';
import { Button } from '@/components/ui/button';

type TabValue = 'problem' | 'solution' | 'result';

const TABS: { value: TabValue; label: string }[] = [
  { value: 'problem', label: 'Problem' },
  { value: 'solution', label: 'Solution' },
  { value: 'result', label: 'Result' },
];

const TAB_SEQUENCE: TabValue[] = ['problem', 'solution', 'result'];
const AUTO_SLIDE_INTERVAL = 3000; // 3 seconds
const USER_PAUSE_DURATION = 8000; // 8 seconds

const tabActiveClasses: Record<TabValue, string> = {
  problem: 'active-problem',
  solution: 'active-solution',
  result: 'active-result',
};

const Tag = ({ tag }: { tag: ProjectTag }) => (
  <div className="new-project-tag">
    <tag.icon className="h-3 w-3 tag-icon" />
    <span>{tag.name}</span>
  </div>
);

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [activeTab, setActiveTab] = useState<TabValue>('problem');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const activeDetail = project[activeTab];

  const startAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActiveTab(prevTab => {
        const currentIndex = TAB_SEQUENCE.indexOf(prevTab);
        const nextIndex = (currentIndex + 1) % TAB_SEQUENCE.length;
        return TAB_SEQUENCE[nextIndex];
      });
    }, AUTO_SLIDE_INTERVAL);
  };

  const handleTabClick = (tab: TabValue) => {
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);

    setActiveTab(tab);

    pauseTimeoutRef.current = setTimeout(() => {
      startAutoSlide();
      setActiveTab(prevTab => {
        const currentIndex = TAB_SEQUENCE.indexOf(prevTab);
        const nextIndex = (currentIndex + 1) % TAB_SEQUENCE.length;
        return TAB_SEQUENCE[nextIndex];
      });
    }, USER_PAUSE_DURATION);
  };
  
  useEffect(() => {
    const startDelay = setTimeout(() => {
      startAutoSlide();
    }, index * 1000);

    return () => {
      clearTimeout(startDelay);
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, [index]);

  const imageContent = (
    <AnimatePresence mode="wait">
        <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'linear' }}
            className="absolute inset-0"
        >
            <Image
                src={activeDetail.image}
                alt={activeDetail.imageAlt}
                fill
                className="new-project-mockup-image"
                data-ai-hint={activeDetail.imageHint}
                unoptimized
            />
        </motion.div>
    </AnimatePresence>
  );

  return (
    <>
      <div className="new-project-card">
        {/* Left Column */}
        <div className="new-project-card-left">
          <h3 className="new-project-title">{project.title}</h3>
          <p className="new-project-description">{project.description}</p>
          
          <div className="space-y-3">
            <p className="new-project-results-label">Key Results</p>
            {project.keyResults.map((result, i) => (
              <div key={i} className="new-project-result-item">
                <CheckCircle className="h-4 w-4 text-[#22c55e] shrink-0" />
                <span>{result}</span>
              </div>
            ))}
          </div>

          <div className="new-project-tags-row">
            {project.tags.map(tag => (
              <Tag key={tag.name} tag={tag} />
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="new-project-card-right">
          <div className="new-project-tab-switcher">
            {TABS.map(tab => (
              <button
                key={tab.value}
                onClick={() => handleTabClick(tab.value)}
                className={cn(
                  'new-project-tab-button',
                  activeTab === tab.value ? 'text-white' : 'text-slate-400'
                )}
              >
                {activeTab === tab.value && (
                  <motion.div
                    layoutId={`active-project-pill-${index}`}
                    className={cn(
                      'absolute inset-0',
                      tabActiveClasses[tab.value]
                    )}
                    style={{ borderRadius: 9999 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
          
          <div className="tab-progress-bar-container">
            <div
              key={activeTab}
              className={cn('tab-progress-bar-fill', tabActiveClasses[activeTab])}
            />
          </div>
          
          <div className="new-project-browser-mockup">
            <div className="new-project-mockup-header">
              <div className="new-project-mockup-dot bg-[#ef4444]"></div>
              <div className="new-project-mockup-dot bg-[#f59e0b]"></div>
              <div className="new-project-mockup-dot bg-[#22c55e]"></div>
            </div>
            
            {activeDetail.fullViewLink ? (
              <a
                href={activeDetail.fullViewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="new-project-mockup-image-wrapper group cursor-pointer"
              >
                {imageContent}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <ExternalLink className="h-6 w-6" />
                    <span>View Full Resolution</span>
                  </div>
                </div>
              </a>
            ) : (
              <div
                className="new-project-mockup-image-wrapper group cursor-pointer"
                onClick={() => setLightboxOpen(true)}
              >
                {imageContent}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <ZoomIn className="h-6 w-6" />
                    <span>View Image</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <p className="new-project-caption">{activeDetail.caption}</p>

          {activeDetail.details && (
            <div className="new-project-details-container">
              {activeDetail.details.map((detail, i) => (
                <div key={i} className={cn('new-project-detail-item', detail.color)}>
                  <span>{detail.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <ImageLightbox
        isOpen={lightboxOpen}
        onOpenChange={setLightboxOpen}
        imageUrl={activeDetail.image}
        altText={activeDetail.imageAlt}
      />
    </>
  );
}
