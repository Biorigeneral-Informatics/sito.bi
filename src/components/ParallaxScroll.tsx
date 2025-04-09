// src/components/ParallaxScroll.tsx
import { useRef, useEffect, ReactNode } from 'react';

interface ParallaxScrollProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxScroll = ({ children, speed = 0.3, className = '' }: ParallaxScrollProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;
      
      const scrollY = window.scrollY;
      const offsetY = scrollY * speed;
      
      elementRef.current.style.transform = `translateY(${offsetY}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ParallaxScroll;