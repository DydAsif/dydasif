"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/projects-data';

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Card 
      className="bg-card/80 border-border/50 shadow-lg hover:shadow-primary/20 hover:border-primary transition-all duration-300 rounded-2xl overflow-hidden group p-6 lg:p-8"
      data-aos="fade-up"
      data-aos-delay={`${100 * index}`}
    >
      <div>
        <h3 className="text-2xl font-bold text-primary mb-3">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <Badge key={tag} variant="secondary" className="font-semibold">{tag}</Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
