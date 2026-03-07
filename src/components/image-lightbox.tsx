
"use client";

import React from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';

type ImageLightboxProps = {
  imageUrl: string;
  altText: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ImageLightbox({ imageUrl, altText, isOpen, onOpenChange }: ImageLightboxProps) {
  if (!imageUrl) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl w-full p-2 bg-card/90 backdrop-blur-md border-primary/30 shadow-2xl shadow-primary/20">
        <DialogTitle className="sr-only">{altText}</DialogTitle>
        <DialogDescription className="sr-only">Enlarged image: {altText}</DialogDescription>
        <div className="relative aspect-video">
          <Image
            src={imageUrl}
            alt={altText}
            fill
            className="object-contain rounded-md"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
            quality={95}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
