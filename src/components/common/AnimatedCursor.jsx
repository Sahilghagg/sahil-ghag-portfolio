import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target;
      setIsPointer(
        target.closest('a, button, input, textarea, [role="button"], .cursor-pointer') !== null
      );
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Don't show on mobile devices
  if (typeof window === 'undefined') return null;
  if (window.innerWidth < 768) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Main cursor dot */}
          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 rounded-full bg-primary-500 mix-blend-difference"
            animate={{
              x: position.x - 6,
              y: position.y - 6,
              scale: isPointer ? 1.8 : 1,
            }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 28,
              mass: 0.5,
            }}
          />
          {/* Outer ring */}
          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[9998] h-8 w-8 rounded-full border border-primary-400/30"
            animate={{
              x: position.x - 16,
              y: position.y - 16,
              scale: isPointer ? 2 : 1,
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
              mass: 0.8,
            }}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default AnimatedCursor;