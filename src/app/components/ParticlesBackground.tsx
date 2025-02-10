"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={{
        background: { color: "transparent" }, // Pastikan tidak menutupi elemen lain
        particles: {
          number: { value: 100 },
          color: { value: ["#ffffff", "#ff0000", "#00ff00", "#0000ff", "#ffff00"] },
          links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
          move: { enable: true, speed: 1 },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 5 } },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
        },
        fullScreen: { enable: false },
      }}
      className="absolute inset-0 w-full h-full z-10"
    />
  );
};

export default ParticlesBackground;
