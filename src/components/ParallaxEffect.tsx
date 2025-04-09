// src/components/ParallaxEffect.tsx - Nuovo componente
import { useRef, useEffect } from 'react';

interface ParallaxEffectProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  threshold?: number;
}

const ParallaxEffect = ({ 
  children, 
  speed = 0.2, 
  direction = 'up', 
  className = '',
  threshold = 0
}: ParallaxEffectProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      
      // Check if element is in view with threshold
      if (rect.top - viewHeight < threshold && rect.bottom > -threshold) {
        let movement = 0;
        
        // Calculate movement based on how far the element is in the viewport
        const elementCenter = rect.top + rect.height / 2;
        const viewCenter = viewHeight / 2;
        const distanceFromCenter = elementCenter - viewCenter;
        movement = distanceFromCenter * speed;
        
        let transform = '';
        
        // Apply transform based on direction
        switch (direction) {
          case 'up':
            transform = `translateY(${-movement}px)`;
            break;
          case 'down':
            transform = `translateY(${movement}px)`;
            break;
          case 'left':
            transform = `translateX(${-movement}px)`;
            break;
          case 'right':
            transform = `translateX(${movement}px)`;
            break;
        }
        
        element.style.transform = transform;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Run once on mount to set initial position
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction, threshold]);
  
  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ParallaxEffect;