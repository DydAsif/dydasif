
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

type Tab = {
  trigger: string;
  value: string;
  content: string;
  imageUrl: string;
  imageHint: string;
  alt: string;
};

type Project = {
  title: string;
  tabs: Tab[];
};

type ProjectCardProps = {
  project: Project;
};

const SLIDESHOW_INTERVAL = 4000; // 4 seconds

export function ProjectCard({ project }: ProjectCardProps) {
  const [activeTab, setActiveTab] = useState(project.tabs[0].value);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const tabValues = project.tabs.map(tab => tab.value);

  const startSlideshow = () => {
    // Clear existing intervals
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    
    // Reset progress
    setProgress(0);
    
    // Set progress interval
    const startTime = Date.now();
    progressIntervalRef.current = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const newProgress = Math.min(100, (elapsedTime / SLIDESHOW_INTERVAL) * 100);
      setProgress(newProgress);
    }, 100);

    // Set tab change interval
    intervalRef.current = setInterval(() => {
      setActiveTab(prevTab => {
        const currentIndex = tabValues.indexOf(prevTab);
        const nextIndex = (currentIndex + 1) % tabValues.length;
        return tabValues[nextIndex];
      });
      // Reset progress for the new slide
      setProgress(0);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      const newStartTime = Date.now();
      progressIntervalRef.current = setInterval(() => {
        const elapsedTime = Date.now() - newStartTime;
        const newProgress = Math.min(100, (elapsedTime / SLIDESHOW_INTERVAL) * 100);
        setProgress(newProgress);
      }, 100);
    }, SLIDESHOW_INTERVAL);
  };
  
  const stopSlideshow = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
  };

  useEffect(() => {
    if (!isPaused) {
      startSlideshow();
    } else {
      stopSlideshow();
    }
    return () => stopSlideshow();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused]);
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    // When user interacts, pause and restart the timer from the new tab
    stopSlideshow();
    setProgress(0);
    if (!isPaused) {
        // Debounce restart
        setTimeout(() => {
            if (!isPaused) { // Check again in case it was paused in the meantime
                 startSlideshow();
            }
        }, 300);
    }
  };


  return (
    <Card
      className="bg-card border border-border shadow-lg hover:shadow-primary/20 hover:border-primary transition-all duration-300 rounded-lg overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="p-6">
        <h3 className="text-2xl font-bold text-primary mb-2">{project.title}</h3>
         <Progress value={progress} className="h-1 mb-4 bg-secondary" />

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-secondary/50">
            {project.tabs.map(tab => (
              <TabsTrigger key={tab.value} value={tab.value}>{tab.trigger}</TabsTrigger>
            ))}
          </TabsList>
          {project.tabs.map(tab => (
            <TabsContent key={tab.value} value={tab.value} className="mt-4">
              <p className="text-muted-foreground mb-4 font-semibold">{tab.content}</p>
              <div className="relative aspect-video">
                <Image
                  src={tab.imageUrl}
                  alt={tab.alt}
                  fill
                  className="object-cover rounded-md border border-border"
                  data-ai-hint={tab.imageHint}
                />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Card>
  );
}
