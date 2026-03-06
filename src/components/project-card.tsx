
"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/projects-data';

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Card 
      className="bg-card/80 border-border/50 shadow-lg hover:shadow-primary/20 hover:scale-[1.02] hover:border-primary transition-all duration-300 rounded-2xl overflow-hidden"
      data-aos="fade-up"
      data-aos-delay={`${100 * index}`}
    >
      <div className="grid lg:grid-cols-5">
        <div className="p-6 lg:p-8 flex flex-col lg:col-span-2">
          <h3 className="text-2xl font-bold text-primary mb-3">{project.title}</h3>
          <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="font-semibold">{tag}</Badge>
            ))}
          </div>
        </div>
        
        <div className="bg-secondary/30 p-4 lg:p-6 lg:col-span-3">
          <Tabs defaultValue={project.tabs[0].value} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-secondary/80">
              {project.tabs.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>{tab.trigger}</TabsTrigger>
              ))}
            </TabsList>
            {project.tabs.map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                <div className="flex flex-col gap-4 text-center mt-4">
                  <div className="overflow-hidden relative aspect-[9/4] rounded-lg border-2 border-primary/20 shadow-lg">
                    <Image
                      src={tab.imageUrl}
                      alt={tab.alt}
                      fill
                      className="object-cover"
                      data-ai-hint={tab.imageHint}
                    />
                  </div>
                  <div className="px-1">
                     <p className="text-sm text-muted-foreground">{tab.content}</p>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </Card>
  );
}
