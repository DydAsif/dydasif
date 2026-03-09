"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import type { Project, ProjectTag } from '@/lib/projects-data';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

type TabValue = 'problem' | 'solution' | 'result';

const TABS: { value: TabValue; label: string }[] = [
  { value: 'problem', label: 'Problem' },
  { value: 'solution', label: 'Solution' },
  { value: 'result', label: 'Result' },
];

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

export function ProjectCard({ project }: { project: Project }) {
  const [activeTab, setActiveTab] = useState<TabValue>('problem');
  const activeDetail = project[activeTab];

  return (
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
              onClick={() => setActiveTab(tab.value)}
              className={cn(
                'new-project-tab-button',
                activeTab === tab.value && tabActiveClasses[tab.value]
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        <div className="new-project-browser-mockup">
          <div className="new-project-mockup-header">
            <div className="new-project-mockup-dot bg-[#ef4444]"></div>
            <div className="new-project-mockup-dot bg-[#f59e0b]"></div>
            <div className="new-project-mockup-dot bg-[#22c55e]"></div>
          </div>
          <div className="new-project-mockup-image-wrapper">
             <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
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
          </div>
        </div>

        <p className="new-project-caption">{activeDetail.caption}</p>
      </div>
    </div>
  );
}
