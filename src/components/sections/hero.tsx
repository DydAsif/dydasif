
"use client";

import React, { useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';

const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
  e.preventDefault();
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const SmokeParticles = () => {
  const particles = useRef<THREE.Sprite[]>([]);
  const group = useRef<THREE.Group>(null);
  const texture = useMemo(() => new THREE.TextureLoader().load('https://i.ibb.co/Xz4x2Vp/smoke.png'), []);

  useEffect(() => {
    if (!group.current) return;
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      const material = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        color: new THREE.Color('hsl(var(--primary))').multiplyScalar(0.5),
      });

      const sprite = new THREE.Sprite(material);
      
      const px = Math.random() * 20 - 10;
      const py = Math.random() * 5 - 4;
      const pz = Math.random() * 4 - 2;

      sprite.position.set(px, py, pz);
      sprite.scale.set(1, 1, 1);
      
      // Add custom properties for animation
      (sprite as any).velocity = new THREE.Vector3(0, Math.random() * 0.01 + 0.01, 0);
      (sprite as any).initialOpacity = Math.random() * 0.3 + 0.1;
      (sprite as any).life = 0;
      (sprite as any).maxLife = Math.random() * 4 + 2; // life in seconds

      particles.current.push(sprite);
      group.current.add(sprite);
    }
  }, [texture]);
  
  useFrame((state, delta) => {
    particles.current.forEach(p => {
        p.position.addScaledVector((p as any).velocity, delta);
        (p as any).life += delta;

        const lifeRatio = (p as any).life / (p as any).maxLife;
        
        // Fade in and out
        if(lifeRatio < 0.2) {
            p.material.opacity = (lifeRatio / 0.2) * (p as any).initialOpacity;
        } else {
            p.material.opacity = (1 - (lifeRatio - 0.2) / 0.8) * (p as any).initialOpacity;
        }

        p.scale.x = p.scale.y = 1 + lifeRatio * 2;

        if((p as any).life >= (p as any).maxLife) {
            (p as any).life = 0;
            const px = Math.random() * 20 - 10;
            const py = Math.random() * 5 - 4;
            p.position.set(px, py, p.position.z);
        }
    });
  });

  return <group ref={group} />;
};


export function Hero() {
  return (
    <section 
      id="home"
      className="h-screen flex flex-col items-center justify-center relative text-center z-10 overflow-hidden p-4"
    >
      <div className="absolute inset-0 z-0 bg-background">
        <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <SmokeParticles />
        </Canvas>
      </div>

        <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
            <div 
                className="flex flex-col md:flex-row items-center justify-center gap-6"
                data-aos="fade-right" data-aos-duration="1200"
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
                 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200"
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

