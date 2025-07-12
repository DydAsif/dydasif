
"use client";

import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from '@/components/ui/badge';

type Tab = {
  trigger: string;
  value: string;
  content: string;
  imageUrl: string;
  imageHint: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  tabs: Tab[];
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="bg-card border-none shadow-none overflow-visible">
      <div className="p-0">
        <Carousel className="w-full">
          <CarouselContent>
            {project.tabs.map((tab, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div className="overflow-hidden relative aspect-video rounded-lg border-2 border-primary/20 shadow-lg">
                    <Image
                      src={tab.imageUrl}
                      alt=""
                      fill
                      className="object-cover"
                      data-ai-hint={tab.imageHint}
                    />
                    <Badge variant="secondary" className="absolute top-2 left-2 text-lg font-bold bg-black/50 text-white">
                      {tab.trigger}
                    </Badge>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </Card>
  );
}
