import React from 'react';
import { motion } from 'motion/react';

interface RingItemProps {
  url: string;
  theta: number;
  radius: number;
}

const styles = {
  container: {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transformOrigin: 'center center',
    cursor: 'pointer',
  }
};

export const RingItem: React.FC<RingItemProps> = ({ url, theta, radius }) => {
  const bendAngle = 3.5; // Subtle bend angle for each segment to follow the ring curvature

  const containerStyle = {
    ...styles.container,
    transform: `translate(-50%, -50%) rotateY(${theta}deg) translateZ(${radius}px)`,
    transformStyle: 'preserve-3d' as const,
    width: '180px',
    height: '280px',
  };

  const segmentStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    width: '60.5px', // Slightly wider to prevent sub-pixel gaps between segments
    height: '100%',
    overflow: 'hidden',
    backfaceVisibility: 'visible',
  };

  const imgStyle: React.CSSProperties = {
    width: '180px',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    position: 'absolute',
    top: 0,
    backfaceVisibility: 'hidden',
  };

  const renderSegment = (left: string | number, marginLeft: string | number, rotation: number = 0, origin: string = 'center center') => (
    <div style={{
      ...segmentStyle,
      left,
      transformOrigin: origin,
      transform: rotation ? `rotateY(${rotation}deg)` : 'none',
      transformStyle: 'preserve-3d',
    }}>
      {/* Front Side */}
      <img 
        src={url} 
        style={{ ...imgStyle, marginLeft }} 
        referrerPolicy="no-referrer" 
      />
      {/* Back Side (Inside of the ring) */}
      <img 
        src={url} 
        style={{ 
          ...imgStyle, 
          marginLeft, 
          transform: 'rotateY(180deg)',
          filter: 'brightness(0.7)', // Slightly darker inside for depth
        }} 
        referrerPolicy="no-referrer" 
      />
    </div>
  );

  return (
    <motion.div 
      style={containerStyle}
      whileHover={{ 
        scale: 1.1,
        z: 50, // Pop slightly forward in 3D space
      }}
      transition={{ 
        type: 'spring', 
        stiffness: 300, 
        damping: 20 
      }}
    >
      {renderSegment(0, 0, -bendAngle, 'right center')}
      {renderSegment('60px', '-60px')}
      {renderSegment('120px', '-120px', bendAngle, 'left center')}
    </motion.div>
  );
};
