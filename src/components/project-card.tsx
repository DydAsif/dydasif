"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Project, ProjectDetail } from '@/lib/projects-data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ImageLightbox } from '@/components/image-lightbox';
import { ZoomIn } from 'lucide-react';

type ProjectCardProps = {
  project: Project;
  index: number;
};

type TabValue = 'problem' | 'solution' | 'result';

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [activeTab, setActiveTab] = useState<TabValue>('problem');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ProjectDetail | null>(null);

  const openLightbox = (detail: ProjectDetail) => {
    setSelectedImage(detail);
    setLightboxOpen(true);
  };
  
  const TABS: { value: TabValue; label: string }[] = [
    { value: 'problem', label: 'Problem' },
    { value: 'solution', label: 'Solution' },
    { value: 'result', label: 'Result' },
  ];

  const activeDetail = project[activeTab];

  return (
    <>
      <Card 
        className="bg-card/80 border-border/50 shadow-lg hover:shadow-primary/20 transition-all duration-300 rounded-2xl overflow-hidden"
        data-aos="fade-up"
        data-aos-delay={`${100 * index}`}
      >
        <div className="grid md:grid-cols-5 items-stretch">
          <div className="md:col-span-2 p-6 lg:p-8 flex flex-col">
            <h3 className="text-2xl font-bold text-primary mb-3">{project.title}</h3>
            <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="font-semibold">{tag}</Badge>
              ))}
            </div>
          </div>
          <div className="md:col-span-3 p-6 lg:p-8 bg-secondary/20 h-full flex flex-col justify-between">
            <Tabs defaultValue="problem" onValueChange={(value) => setActiveTab(value as TabValue)} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                {TABS.map(tab => (
                  <TabsTrigger key={tab.value} value={tab.value}>{tab.label}</TabsTrigger>
                ))}
              </TabsList>
              
              {TABS.map(tab => (
                <TabsContent key={tab.value} value={tab.value}>
                  <div 
                    className="relative mt-4 aspect-[2/1] rounded-lg overflow-hidden border-2 border-border/50 group cursor-pointer"
                    onClick={() => openLightbox(project[tab.value])}
                  >
                    <Image
                      src={project[tab.value].image}
                      alt={project[tab.value].imageAlt}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={project[tab.value].imageHint}
                      unoptimized
                    />
                     <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center gap-2 text-white font-semibold">
                          <ZoomIn className="h-6 w-6" />
                          <span>View Image</span>
                        </div>
                     </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
            <p className="mt-4 text-center text-muted-foreground text-sm h-16 flex items-center justify-center">
              {activeDetail.caption}
            </p>
          </div>
        </div>
      </Card>

      {selectedImage && (
         <ImageLightbox
            isOpen={lightboxOpen}
            onOpenChange={setLightboxOpen}
            imageUrl={selectedImage.image}
            altText={selectedImage.imageAlt}
          />
      )}
    </>
  );
}
