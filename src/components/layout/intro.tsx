
"use client";

import { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';

type IntroProps = {
  onIntroComplete: () => void;
};

const SmokeParticle = ({ position }: { position: THREE.Vector3 }) => {
  const ref = useRef<THREE.Sprite>(null);
  const velocity = useMemo(() => new THREE.Vector3((Math.random() - 0.5) * 0.02, Math.random() * 0.02 + 0.01, (Math.random() - 0.5) * 0.02), []);
  const initialOpacity = useMemo(() => Math.random() * 0.5, []);

  useFrame(() => {
    if (ref.current) {
      ref.current.position.add(velocity);
      ref.current.material.opacity -= 0.005;

      if (ref.current.material.opacity <= 0) {
        ref.current.position.set(position.x, position.y, position.z);
        ref.current.material.opacity = initialOpacity;
      }
    }
  });

  const smokeTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const context = canvas.getContext('2d');
    if (context) {
      const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64);
      gradient.addColorStop(0, 'rgba(255,255,255,0.5)');
      gradient.addColorStop(1, 'rgba(255,255,255,0)');
      context.fillStyle = gradient;
      context.fillRect(0, 0, 128, 128);
    }
    return new THREE.CanvasTexture(canvas);
  }, []);

  return (
    <sprite ref={ref} scale={[1, 1, 1]} position={position}>
      <spriteMaterial attach="material" map={smokeTexture} transparent opacity={initialOpacity} />
    </sprite>
  );
};

const SmokeEffect = () => {
  const particles = useMemo(() => {
    const particleArray = [];
    for (let i = 0; i < 50; i++) {
      particleArray.push(
        <SmokeParticle 
          key={i} 
          position={new THREE.Vector3(
            (Math.random() - 0.5) * 5,
            (Math.random() - 0.5) * 2 - 1,
            (Math.random() - 0.5) * 2
          )} 
        />
      );
    }
    return particleArray;
  }, []);

  return <>{particles}</>;
};

const Logo = () => {
  return (
    <Text
        font="/fonts/Poppins-Bold.ttf"
        fontSize={1}
        letterSpacing={-0.05}
        color="hsl(var(--primary))"
        anchorX="center"
        anchorY="middle"
    >
      ARA
      <meshStandardMaterial
        emissive={'hsl(var(--primary))'}
        emissiveIntensity={0.5}
        roughness={0.2}
        metalness={0.8}
      />
    </Text>
  );
};

export function Intro({ onIntroComplete }: IntroProps) {
  const [fadeOut, setFadeOut] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 4000); 

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (fadeOut) {
      const el = containerRef.current;
      const handleTransitionEnd = () => {
        onIntroComplete();
      };
      el?.addEventListener('transitionend', handleTransitionEnd);
      return () => {
        el?.removeEventListener('transitionend', handleTransitionEnd);
      };
    }
  }, [fadeOut, onIntroComplete]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-[100] bg-background transition-opacity duration-1000 ease-out ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Logo />
        <SmokeEffect />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
