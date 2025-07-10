
"use client";

import React, { useMemo, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
  e.preventDefault();
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const SmokeParticles = () => {
    const group = useRef<THREE.Group>(null);
    const texture = useMemo(() => new THREE.TextureLoader().load('https://i.ibb.co/Xz4x2Vp/smoke.png'), []);
  
    const particles = useMemo(() => {
        const particleArray: { sprite: THREE.Sprite, velocity: THREE.Vector3 }[] = [];
        if (!texture) return [];
        for (let i = 0; i < 70; i++) { // Increased particle count
          const material = new THREE.SpriteMaterial({
            map: texture,
            color: new THREE.Color('hsl(var(--primary))').multiplyScalar(0.7),
            transparent: true,
            opacity: 0.15, // Start with lower opacity
            blending: THREE.AdditiveBlending, // Use additive blending for a glow effect
            depthWrite: false,
          });
          const sprite = new THREE.Sprite(material);
          
          sprite.position.set(
            (Math.random() - 0.5) * 15, // Wider spread
            -5, // Start from below the screen
            (Math.random() - 0.5) * 8 - 4 // Depth
          );
          sprite.scale.set(1.5, 1.5, 1);
          
          const velocity = new THREE.Vector3(
            (Math.random() - 0.5) * 0.01,
            Math.random() * 0.02 + 0.01, // Move upwards
            (Math.random() - 0.5) * 0.01
          );

          particleArray.push({ sprite, velocity });
        }
        return particleArray;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [texture]);

    useFrame((_state, delta) => {
        if (group.current) {
            group.current.children.forEach((sprite, i) => {
                const particle = particles[i];
                if (particle) {
                    particle.sprite.position.add(particle.velocity.clone().multiplyScalar(delta * 60));
                    particle.sprite.material.opacity -= 0.001 * (delta * 60);

                    if (particle.sprite.material.opacity <= 0) {
                        particle.sprite.position.set(
                            (Math.random() - 0.5) * 15,
                            -5,
                            (Math.random() - 0.5) * 8 - 4
                        );
                        particle.sprite.material.opacity = 0.15;
                    }
                }
            });
        }
    });

    return (
        <group ref={group}>
            {particles.map((p, i) => <primitive key={i} object={p.sprite} />)}
        </group>
    );
};


const NeonSmokeBackground = () => {
    return (
        <div className="absolute inset-0 z-[-1] overflow-hidden bg-background">
            <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <SmokeParticles />
            </Canvas>
        </div>
    );
};


export function Hero() {
  return (
    <section 
      id="home"
      className="h-screen flex flex-col items-center justify-center relative text-center z-10 overflow-hidden p-4"
    >
        <NeonSmokeBackground />
        
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div 
                className="flex flex-col md:flex-row items-center justify-center gap-6"
            >
                 <Image
                  src="https://i.ibb.co/yBMzR8nS/upscalemedia-transformed.png"
                  alt="Ashfakur Rahman Asif"
                  width={150}
                  height={150}
                  className="object-cover w-28 h-28 md:w-36 md:h-36 rounded-full shadow-2xl border-4 border-primary/50"
                  data-ai-hint="professional man"
                  priority
                />
                <div className="text-center md:text-left">
                    <h1 
                        className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent"
                    >
                        Ashfakur Rahman Asif
                    </h1>

                    <p 
                        className="text-lg md:text-2xl font-semibold mt-2 text-primary/90 tracking-wide"
                    >
                        Digital Marketing & Tracking Expert
                    </p>
                </div>
            </div>
            <div 
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
                <Button asChild size="lg" className="bg-primary hover:bg-cyan-400 text-primary-foreground transition-all duration-300">
                     <a
                        href="https://drive.google.com/file/d/1aJdlKwU12AptlfBOje1PbkERRTt546fO/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download CV
                      </a>
                </Button>
                <Button asChild variant="secondary" size="lg" className="bg-secondary hover:bg-green-500 text-secondary-foreground transition-all duration-300">
                     <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')}>
                        Hire Me
                      </a>
                </Button>
            </div>
        </div>
        
        <div 
            className="absolute bottom-8 text-primary/80 animate-bounce"
        >
            <a href="#about" onClick={(e) => handleScrollTo(e, '#about')}>↓ Scroll Down</a>
        </div>
    </section>
  );
}
