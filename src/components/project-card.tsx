"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import type { Project, ProjectTag } from '@/lib/projects-data';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type TabValue = 'problem' | 'solution' | 'result';

const TABS: { value: TabValue; label: string }[] = [
  { value: 'problem', label: 'Problem' },
  { value: 'solution', label: 'Solution' },
  { value: 'result', label: 'Result' },
];

const tabColorClasses = {
  problem: 'data-[state=active]:bg-orange-600',
  solution: 'data-[state=active]:bg-blue-600',
  result: 'data-[state=active]:bg-green-600',
};

const Tag = ({ tag }: { tag: ProjectTag }) => (
  <div className="flex items-center gap-2">
    <tag.icon className="h-5 w-5 text-primary" />
    <span className="text-sm font-medium text-muted-foreground">{tag.name}</span>
  </div>
);

export function ProjectCard({ project }: { project: Project }) {
  const [activeTab, setActiveTab] = useState<TabValue>('problem');
  const activeDetail = project[activeTab];

  return (
    <div
      className="project-card-base rounded-2xl p-6 md:p-8"
      data-aos="fade-up"
    >
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left Side: Text Content */}
        <div className="flex flex-col h-full">
          <h3 className="text-2xl font-bold mb-3 gradient-text">{project.title}</h3>
          <p className="text-muted-foreground mb-6 text-base">{project.description}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
            {project.tags.map(tag => (
              <Tag key={tag.name} tag={tag} />
            ))}
          </div>
           <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer" className="case-study-button mt-auto self-start inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold">
              View Full Case Study
              <ArrowRight className="h-4 w-4" />
            </a>
        </div>

        {/* Right Side: Image Showcase */}
        <div className="flex flex-col">
            <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as TabValue)} className="w-full">
              <TabsList className="grid w-full grid-cols-3 rounded-full p-1 mb-4 h-auto bg-secondary/50">
                  {TABS.map(tab => (
                    <TabsTrigger
                        key={tab.value}
                        value={tab.value}
                        className={cn(
                          "rounded-full text-sm font-medium transition-colors data-[state=inactive]:bg-transparent data-[state=inactive]:text-muted-foreground data-[state=active]:text-white data-[state=active]:shadow-lg",
                           tab.value === 'problem' && tabColorClasses.problem,
                           tab.value === 'solution' && tabColorClasses.solution,
                           tab.value === 'result' && tabColorClasses.result
                        )}
                    >
                        {tab.label}
                    </TabsTrigger>
                  ))}
              </TabsList>
              
              <TabsContent value={activeTab} className="mt-4">
                <div className="browser-mockup w-full rounded-lg overflow-hidden shadow-2xl shadow-black/30">
                    <div className="browser-mockup-header h-9 flex items-center px-4 gap-2">
                        <div className="h-3.5 w-3.5 rounded-full bg-red-500 border border-black/20"></div>
                        <div className="h-3.5 w-3.5 rounded-full bg-yellow-500 border border-black/20"></div>
                        <div className="h-3.5 w-3.5 rounded-full bg-green-500 border border-black/20"></div>
                    </div>
                    <div className="relative aspect-[16/10] bg-gray-900">
                        <Image
                            src={activeDetail.image}
                            alt={activeDetail.imageAlt}
                            fill
                            className="object-contain"
                            data-ai-hint={activeDetail.imageHint}
                            unoptimized
                        />
                    </div>
                </div>
                <p className="text-center text-muted-foreground text-sm mt-4 px-4">{activeDetail.caption}</p>
              </TabsContent>
            </Tabs>
        </div>
      </div>
    </div>
  );
}
