"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import type { Project, ProjectTag } from '@/lib/projects-data';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type TabValue = 'problem' | 'solution' | 'result';

const TABS: { value: TabValue; label: string }[] = [
  { value: 'problem', label: 'Problem' },
  { value: 'solution', label: 'Solution' },
  { value: 'result', label: 'Result' },
];

const tabColorClasses = {
  problem: 'data-[state=active]:bg-orange-600/80 data-[state=active]:text-white',
  solution: 'data-[state=active]:bg-blue-600/80 data-[state=active]:text-white',
  result: 'data-[state=active]:bg-green-600/80 data-[state=active]:text-white',
};

const Tag = ({ tag }: { tag: ProjectTag }) => (
  <div className="project-tag">
    <tag.icon className="h-4 w-4 text-primary tag-icon" />
    <span className="font-medium">{tag.name}</span>
  </div>
);

export function ProjectCard({ project }: { project: Project }) {
  const [activeTab, setActiveTab] = useState<TabValue>('problem');
  const activeDetail = project[activeTab];

  return (
    <div className="project-card-wrapper" data-aos="fade-up">
      <div className="project-card-base p-6 md:p-8 min-h-[520px]">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-stretch">
          {/* Left Side: Text Content */}
          <div className="flex flex-col md:flex-[0_0_45%] md:py-10">
            <div className="relative mb-3">
              <div className="absolute left-0 top-1 bottom-1 w-1 bg-primary rounded-full -translate-x-4"></div>
              <h3 className="text-2xl font-bold gradient-text">{project.title}</h3>
            </div>
            
            <p className="text-muted-foreground text-[15px] leading-[1.8]">{project.description}</p>
            
            <div className="my-6">
                <h4 className="text-base font-semibold text-primary-foreground mb-3">Key Results</h4>
                <div className="space-y-3">
                    {project.keyResults.map((result, i) => (
                        <div key={i} className="flex items-center gap-3 bg-secondary/30 rounded-md p-2.5">
                            <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                            <span className="text-sm text-muted-foreground">{result}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto pt-4">
              {project.tags.map(tag => (
                <Tag key={tag.name} tag={tag} />
              ))}
            </div>
          </div>

          {/* Right Side: Image Showcase */}
          <div className="flex flex-col md:flex-[0_0_55%] min-w-0">
              <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as TabValue)} className="w-full">
                <TabsList className="grid w-full grid-cols-3 rounded-full p-1 mb-4 h-auto bg-secondary/50">
                    {TABS.map(tab => (
                      <TabsTrigger
                          key={tab.value}
                          value={tab.value}
                          className={cn(
                            "rounded-full text-sm font-medium transition-colors duration-200 data-[state=inactive]:bg-transparent data-[state=inactive]:text-muted-foreground hover:bg-white/10",
                            tabColorClasses[tab.value]
                          )}
                      >
                          {tab.label}
                      </TabsTrigger>
                    ))}
                </TabsList>
                
                <div className="mt-4">
                  <div className="browser-mockup w-full rounded-lg shadow-2xl shadow-black/30">
                      <div className="browser-mockup-header h-9 flex items-center px-4 gap-2">
                          <div className="h-3 w-3 rounded-full bg-red-500 border border-black/20"></div>
                          <div className="h-3 w-3 rounded-full bg-yellow-500 border border-black/20"></div>
                          <div className="h-3 w-3 rounded-full bg-green-500 border border-black/20"></div>
                      </div>
                      <AnimatePresence mode="wait">
                          <motion.div
                              key={activeTab}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="relative aspect-[16/10] bg-gray-900"
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
                  <p className="text-center text-muted-foreground text-[13px] italic mt-4 px-4">{activeDetail.caption}</p>
                </div>
              </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
