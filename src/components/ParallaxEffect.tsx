// src/components/ParallaxEffect.tsx - Static Version
import { ReactNode } from 'react';

interface ParallaxEffectProps {
  children: ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  threshold?: number;
}

const ParallaxEffect = ({ 
  children, 
  className = ''
}: ParallaxEffectProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default ParallaxEffect;