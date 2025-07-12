
"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/projects-data';

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Card 
      className="bg-card/80 border-border/50 shadow-lg hover:shadow-primary/20 hover:scale-[1.02] hover:border-primary transition-all duration-300 rounded-2xl overflow-hidden flex flex-col lg:flex-row"
      data-aos="fade-up"
      data-aos-delay={`${100 * index}`}
    >
      <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col">
        <h3 className="text-2xl font-bold text-primary mb-3">{project.title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <Badge key={tag} variant="secondary" className="font-semibold">{tag}</Badge>
          ))}
        </div>
      </div>

      <div className="lg:w-1/2 bg-secondary/30 p-4 lg:p-6">
        <Carousel className="w-full">
          <CarouselContent>
            {project.tabs.map((tab, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col gap-3 text-center">
                  <div className="overflow-hidden relative aspect-video rounded-lg border-2 border-primary/20 shadow-lg">
                    <Image
                      src={tab.imageUrl}
                      alt={`${project.title} - ${tab.trigger}`}
                      fill
                      className="object-cover"
                      data-ai-hint={tab.imageHint}
                    />
                  </div>
                  <div className="px-1">
                     <h4 className="font-bold text-primary">{tab.trigger}</h4>
                     <p className="text-sm text-muted-foreground">{tab.content}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    </Card>
  );
}
