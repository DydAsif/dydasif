
"use client";

import { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

type IntroProps = {
  onIntroComplete: () => void;
};

const SmokeEffect = () => {
  const group = useRef<THREE.Group>(null);
  const texture = useMemo(() => new THREE.TextureLoader().load('https://i.ibb.co/Xz4x2Vp/smoke.png'), []);
  const particles = useRef<THREE.Sprite[]>([]).current;

  useEffect(() => {
    if (!group.current) return;
    // Reduce particle count for performance
    for (let i = 0; i < 50; i++) {
      const material = new THREE.SpriteMaterial({ map: texture, transparent: true, opacity: 0.4, depthWrite: false });
      const sprite = new THREE.Sprite(material);
      sprite.position.set(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4
      );
      sprite.scale.set(1.5, 1.5, 1);
      group.current.add(sprite);
      particles.push(sprite);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFrame(() => {
    particles.forEach((sprite) => {
      sprite.position.y += 0.005;
      sprite.material.opacity -= 0.003;
      sprite.scale.x += 0.005;
      sprite.scale.y += 0.005;

      if (sprite.material.opacity <= 0) {
        sprite.position.set(
            (Math.random() - 0.5) * 6,
            -2,
            (Math.random() - 0.5) * 4
        );
        sprite.material.opacity = 0.5;
        sprite.scale.set(1.5, 1.5, 1);
      }
    });
  });

  return <group ref={group} />;
};

const LogoModel = () => {
    const texture = useMemo(() => new THREE.TextureLoader().load('https://i.ibb.co/hZ01W3J/ara-logo-smoke.jpg'), []);
    const material = useMemo(() => new THREE.MeshBasicMaterial({ map: texture, transparent: true }), [texture]);
    const geometry = useMemo(() => new THREE.PlaneGeometry(3.5, 3.5), []);
  
    return <mesh geometry={geometry} material={material} />;
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
      const handleTransitionEnd = (event: TransitionEvent) => {
        if (event.propertyName === 'opacity') {
            onIntroComplete();
        }
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
      className={`fixed inset-0 z-[100] bg-black transition-opacity duration-1000 ease-out ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={1.5} />
        <SmokeEffect />
        <LogoModel />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
      </Canvas>
    </div>
  );
}
