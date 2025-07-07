"use client";

import React, { useState, useEffect } from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // This effect ensures the component is re-rendered on the client
    // after hydration, which can help with certain mismatches.
    setCurrentYear(new Date().getFullYear());
  }, []); // Empty dependency array means it runs once on mount

  return (
    <footer className="w-full py-6 border-t bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {currentYear} Ashfakur Rahman Asif. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground text-center md:text-right">
            Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
