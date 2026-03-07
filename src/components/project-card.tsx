
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/projects-data';
import { ImageLightbox } from './image-lightbox';
import { ZoomIn } from 'lucide-react';

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null);

  const openLightbox = (imageUrl: string, alt: string) => {
    setSelectedImage({ url: imageUrl, alt });
    setLightboxOpen(true);
  };

  return (
    <>
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
                    <div
                      className="overflow-hidden relative aspect-[2/1] rounded-lg border-2 border-primary/20 shadow-lg group cursor-pointer"
                      onClick={() => openLightbox(tab.imageUrl, tab.alt)}
                    >
                      <Image
                        src={tab.imageUrl}
                        alt={tab.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={tab.imageHint}
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center gap-2 text-white font-semibold">
                          <ZoomIn className="h-6 w-6" />
                          <span>View Image</span>
                        </div>
                      </div>
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

      {selectedImage && (
        <ImageLightbox
          isOpen={lightboxOpen}
          onOpenChange={setLightboxOpen}
          imageUrl={selectedImage.url}
          altText={selectedImage.alt}
        />
      )}
    </>
  );
}
