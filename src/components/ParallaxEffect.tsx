// src/components/ParallaxEffect.tsx
import { useRef, useEffect } from 'react';

interface ParallaxEffectProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  threshold?: number;
  smooth?: boolean;
}

const ParallaxEffect = ({ 
  children, 
  speed = 0.2, 
  direction = 'up', 
  className = '',
  threshold = 0,
  smooth = false
}: ParallaxEffectProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    // Add base parallax class
    element.classList.add('parallax-element', `parallax-${direction}`);
    
    // Add smooth transition if requested
    if (smooth) {
      element.classList.add('parallax-smooth');
    }
    
    let ticking = false;
    
    const handleScroll = () => {
      // Use requestAnimationFrame for smooth performance
      if (!ticking) {
        window.requestAnimationFrame(() => {
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
          
          ticking = false;
        });
        
        ticking = true;
      }
    };
    
    // Use throttled scroll listener for better performance
    const throttledHandleScroll = handleScroll;
    
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    // Run once on mount to set initial position
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      // Clean up classes
      element.classList.remove('parallax-element', `parallax-${direction}`, 'parallax-smooth');
    };
  }, [speed, direction, threshold, smooth]);
  
  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ParallaxEffect;