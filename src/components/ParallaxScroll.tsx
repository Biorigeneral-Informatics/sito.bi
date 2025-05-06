// src/components/ParallaxScroll.tsx
import { useRef, useEffect, ReactNode } from 'react';

interface ParallaxScrollProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  direction?: 'up' | 'down';
  smooth?: boolean;
  optimized?: boolean;
}

const ParallaxScroll = ({ 
  children, 
  speed = 0.3, 
  className = '', 
  direction = 'up',
  smooth = false,
  optimized = true
}: ParallaxScrollProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    // Add CSS classes
    element.classList.add('parallax-scroll');
    
    if (direction === 'up') {
      element.classList.add('parallax-scroll-up');
    } else {
      element.classList.add('parallax-scroll-down');
    }
    
    if (smooth) {
      element.classList.add('parallax-scroll-smooth');
    }
    
    if (optimized) {
      element.classList.add('parallax-optimized');
    }
    
    let ticking = false;
    let lastScrollY = 0;
    
    const handleScroll = () => {
      // Use requestAnimationFrame for smooth performance
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          
          // Skip if scroll position hasn't changed significantly
          if (Math.abs(scrollY - lastScrollY) > 0.5) {
            const offsetY = scrollY * speed;
            
            if (direction === 'up') {
              element.style.transform = `translateY(${offsetY}px)`;
            } else {
              element.style.transform = `translateY(${-offsetY}px)`;
            }
            
            lastScrollY = scrollY;
          }
          
          ticking = false;
        });
        
        ticking = true;
      }
    };
    
    // Add event listener with passive option for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial position
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Clean up classes
      element.classList.remove(
        'parallax-scroll', 
        'parallax-scroll-up', 
        'parallax-scroll-down', 
        'parallax-scroll-smooth',
        'parallax-optimized'
      );
    };
  }, [speed, direction, smooth, optimized]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ParallaxScroll;