"use client";

import { useCallback, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  // Define particlesInit using useCallback so it's stable
   useEffect(() => {
    initParticlesEngine(async (engine) => {
    
      await loadFull(engine);
    })
      
  }, []);

  return (
    <Particles
    id="tsparticles"

    options={{
        fullScreen: {
        enable: true,
        zIndex: 0,  // ✅ pushes the particles canvas behind all other content
        },
        background: {
        color: "#19191B",
        },
        particles: {
        color: { value: "#ffffff" },
        links: { enable: true, color: "#ffffff" },
        move: { enable: true, speed: 2 },
        number: { value: 60 },
        shape: { type: "circle" },
        },
    }}
    />

  );
}
