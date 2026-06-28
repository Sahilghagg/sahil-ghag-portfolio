import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import { useTheme } from '../../context/ThemeContext.jsx';

const ParticlesBackground = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="pointer-events-none fixed inset-0 -z-10"
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
          },
          modes: {
            repulse: { distance: 120, duration: 0.4 },
          },
        },
        particles: {
          color: { value: isDark ? '#818cf8' : '#6366f1' },
          links: {
            color: isDark ? '#4f46e5' : '#a5b4fc',
            distance: 150,
            enable: true,
            opacity: isDark ? 0.15 : 0.25,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: { default: 'bounce' },
            random: false,
            speed: 0.8,
            straight: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 80,
          },
          opacity: { value: isDark ? 0.35 : 0.25 },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;