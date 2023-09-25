import React, { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleExample = () => {
  // Initialize the particle engine
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="particle-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "", // Transparent background
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#e68e2e", // Particle color
            },
            links: {
              color: "#f5d393", // Link color
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              enable: true,
              speed: 2,
            },
            number: {
              value: 120, // Number of particles
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: {min:1, max:5}, // Particle size
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticleExample;
