// src/components/ScrollAnimation.tsx - Static Version
import { ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

const ScrollAnimation = ({ 
  children, 
  className = ''
}: ScrollAnimationProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default ScrollAnimation;