"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/projects-data';
import { ImageLightbox } from '@/components/image-lightbox';
import { ZoomIn } from 'lucide-react';

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  return (
    <>
      <Card 
        className="bg-card/80 border-border/50 shadow-lg hover:shadow-primary/20 hover:border-primary transition-all duration-300 rounded-2xl overflow-hidden group"
        data-aos="fade-up"
        data-aos-delay={`${100 * index}`}
      >
        <div className="grid md:grid-cols-2 items-center">
          <div className="p-6 lg:p-8 order-2 md:order-1">
            <h3 className="text-2xl font-bold text-primary mb-3">{project.title}</h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="font-semibold">{tag}</Badge>
              ))}
            </div>
          </div>
          <div 
            className="relative h-64 md:h-full w-full order-1 md:order-2 group/image cursor-pointer"
            onClick={openLightbox}
          >
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              className="object-cover group-hover/image:scale-105 transition-transform duration-300"
              data-ai-hint={project.imageHint}
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-2 text-white font-semibold">
                <ZoomIn className="h-6 w-6" />
                <span>View Image</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <ImageLightbox
        isOpen={lightboxOpen}
        onOpenChange={setLightboxOpen}
        imageUrl={project.image}
        altText={project.imageAlt}
      />
    </>
  );
}
