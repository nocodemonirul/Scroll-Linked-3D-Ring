import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from 'motion/react';
import { RingItem } from '../Package/RingItem';
import { Color, Type } from '../../Theme';

interface ImageRingProps {
  images: string[];
  radius?: number;
  tilt?: number;
}

const styles = {
  section: {
    height: '100vh', // Standard height so it moves naturally with scroll
    backgroundColor: Color.Base.Surface[1],
    position: 'relative' as const,
    overflow: 'hidden',
  },
  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end', // Align to right
    perspective: '1200px',
    position: 'relative' as const,
  },
  ring: {
    position: 'absolute' as const,
    right: '0',
    width: '0',
    height: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transformStyle: 'preserve-3d' as const,
    transform: 'translateX(35%)', // Push more than half off-screen
  },
  title: {
    position: 'absolute' as const,
    left: '8vw',
    top: '8vh',
    zIndex: 10,
    pointerEvents: 'none' as const,
    ...Type.Expressive.Display.L,
    fontSize: '40px',
    lineHeight: '1.2',
    letterSpacing: '-0.01em',
    color: Color.Base.Content[1],
    maxWidth: '60vw',
  },
  description: {
    position: 'absolute' as const,
    left: '8vw',
    bottom: '8vh',
    zIndex: 10,
    pointerEvents: 'none' as const,
    ...Type.Readable.Body.M,
    color: Color.Base.Content[2],
    maxWidth: '30vw',
    opacity: 0.8,
  }
};

export const ImageRing: React.FC<ImageRingProps> = ({ 
  images, 
  radius = 970, // Increased radius to create a ~10px gap between 32 images (32 * 190 / 2pi)
  tilt = -10 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"] // Track from top of page until it leaves viewport
  });

  // Auto-rotation
  const autoRotation = useMotionValue(0);
  useAnimationFrame((time, delta) => {
    // Subtle constant rotation: 0.01 degrees per millisecond = 10 degrees per second
    autoRotation.set(autoRotation.get() + delta * 0.01);
  });

  const rotation = useTransform(scrollYProgress, [0, 1], [0, 45]); // Reduced range for a subtle, premium rotation on scroll
  const smoothRotation = useSpring(rotation, {
    stiffness: 40, // Increased for better responsiveness
    damping: 30, // Balanced for smoothness
    restDelta: 0.001
  });

  // Subtle 3D Parallax Tilt
  const parallaxTilt = useTransform(scrollYProgress, [0, 1], [-15, 10]); 
  const smoothTilt = useSpring(parallaxTilt, {
    stiffness: 40,
    damping: 30
  });

  // Subtle vertical drift for "floating" effect
  const yOffset = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const scrollY = useSpring(yOffset, { stiffness: 40, damping: 30 });

  // Hover Parallax Effect
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  
  const hoverY = useTransform(mouseY, [0, 1], [-50, 50]);
  const hoverX = useTransform(mouseX, [0, 1], [-30, 30]);
  const hoverRotateX = useTransform(mouseY, [0, 1], [5, -5]);
  const hoverRotateY = useTransform(mouseX, [0, 1], [-5, 5]);
  
  const smoothHoverY = useSpring(hoverY, { stiffness: 60, damping: 40 });
  const smoothHoverX = useSpring(hoverX, { stiffness: 60, damping: 40 });
  const smoothHoverRotateX = useSpring(hoverRotateX, { stiffness: 60, damping: 40 });
  const smoothHoverRotateY = useSpring(hoverRotateY, { stiffness: 60, damping: 40 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <section ref={containerRef} style={styles.section}>
      <div 
        style={styles.container}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.h1 
          style={styles.title}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          Built on trust, shaped by experience, and focused on what matters to you.
        </motion.h1>
        <motion.p
          style={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        >
          A seamless fusion of light and geometry. Experience the rhythmic flow of a perfectly circular 3D gallery, designed to immerse and inspire.
        </motion.p>
        <motion.div 
          style={{
            ...styles.ring,
            rotateY: useTransform(() => autoRotation.get() + smoothRotation.get() + smoothHoverRotateY.get()),
            rotateX: useTransform(() => smoothTilt.get() + smoothHoverRotateX.get()),
            y: scrollY,
            translateY: smoothHoverY,
            translateX: smoothHoverX,
          }}
        >
          {images.map((url, index) => (
            <RingItem 
              key={index}
              url={url}
              theta={(index / images.length) * 360}
              radius={radius}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
