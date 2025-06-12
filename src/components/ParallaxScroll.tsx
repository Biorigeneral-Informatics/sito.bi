// src/components/ParallaxScroll.tsx - Static Version
import { ReactNode } from 'react';

interface ParallaxScrollProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxScroll = ({ children, className = '' }: ParallaxScrollProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default ParallaxScroll;