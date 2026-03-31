import React from 'react';
import { Color, Radius } from '../../Theme';

interface ImageProps {
  src: string;
  alt?: string;
  size?: 'S' | 'M' | 'L';
  variant?: 'Rounded' | 'Circle' | 'Square';
}

const styles = {
  base: {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    backgroundColor: Color.Base.Surface[3],
    transition: 'transform 0.3s ease',
  },
  size: {
    S: { width: '120px', height: '180px' },
    M: { width: '200px', height: '300px' },
    L: { width: '280px', height: '400px' },
  },
  variant: {
    Rounded: { borderRadius: '2px' }, // Subtle rounding
    Circle: { borderRadius: '50%' },
    Square: { borderRadius: '0px' },
  }
};

export const Image: React.FC<ImageProps> = ({ 
  src, 
  alt = '', 
  size = 'M', 
  variant = 'Rounded' 
}) => {
  const style = {
    ...styles.base,
    ...styles.size[size],
    ...styles.variant[variant],
  };

  return (
    <img 
      src={src} 
      alt={alt} 
      style={style} 
      referrerPolicy="no-referrer"
    />
  );
};
