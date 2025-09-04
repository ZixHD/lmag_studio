"use client";

import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { loadSlim } from "@tsparticles/slim"




export default function ParticlesBackground() {

   const [engineLoaded, setEngineLoaded] = useState(false);

  useEffect(() => {
    const loadParticles = async () => {
      const { tsParticles } = await import("@tsparticles/engine");
      await loadSlim(tsParticles);
      setEngineLoaded(true);
    };

    loadParticles();
  }, []);


/*
  return (
    <div style={{ width: "400px", height: "300px", border: "1px solid #fff" }}>
      <Particles
        id="limitedParticles"
        style={{ width: "100%", height: "100%" }}
        options={{
          fullScreen: { enable: false }, // important!
          background: {
            color: "#19191B",
          },
          particles: {
            color: { value: "#ffffff" },
            links: { enable: true, color: "#ffffff" },
            move: {
              enable: true,
              speed: 2,
              bounce: true, // makes them bounce off the edges
              outModes: {
                default: "bounce", // "out" to allow exiting
              },
            },
            number: { value: 40 },
            shape: { type: "circle" },
          },
        }}
      />
    </div>
  );
}
*/

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none", // Let clicks pass through
      }}
    >
      <Particles
        id="limitedParticles"
        style={{
          width: "100%",
          height: "100%",
        }}
        options={{
          fullScreen: { enable: false }, // important!
          background: {
            color: "#19191B",
          },
          particles: {
            color: { value: "#ffffff" },
            links: { enable: true, color: "#ffffff" },
            move: {
              enable: true,
              speed: 2,
              bounce: true,
              outModes: {
                default: "bounce",
              },
            },
            number: { value: 60 },
            shape: { type: "circle" },
          },
        }}
      />
    </div>
  );
}