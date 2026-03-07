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
      <DialogContent className="max-w-[95vw] w-auto p-2 bg-card/90 backdrop-blur-md border-primary/30 shadow-2xl shadow-primary/20">
        <DialogTitle className="sr-only">{altText}</DialogTitle>
        <DialogDescription className="sr-only">Enlarged image: {altText}</DialogDescription>
        <div className="flex justify-center items-center">
          <Image
            src={imageUrl}
            alt={altText}
            width={1920}
            height={1080}
            className="object-contain rounded-md max-w-full max-h-[95vh] h-auto w-auto"
            unoptimized
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
